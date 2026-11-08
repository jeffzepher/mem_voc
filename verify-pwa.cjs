const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert.equal(manifest.display,'standalone');assert.equal(manifest.scope,'./');
for(const icon of manifest.icons){const bytes=fs.readFileSync(icon.src);const size=Number(icon.sizes.split('x')[0]);assert.equal(bytes.readUInt32BE(16),size);assert.equal(bytes.readUInt32BE(20),size);}
const html=fs.readFileSync('index.html','utf8');
assert.match(html,/rel="manifest"/);assert.match(html,/id="installAppBtn"/);
(async()=>{
 const scope='https://example.github.io/mem_voc/',handlers={},stores=new Map();
 const key=r=>typeof r==='string'?new URL(r,scope).href:r.url;
 const caches={async open(name){if(!stores.has(name))stores.set(name,new Map());const map=stores.get(name);return{
  async addAll(files){for(const file of files){assert(fs.existsSync(file.replace('./','').split('?')[0]),file);map.set(key(file),{ok:true,file});}},
  async match(r){return map.get(key(r));},async put(r,res){map.set(key(r),res);}
 };},async keys(){return [...stores.keys()];},async delete(k){return stores.delete(k);}};
 let online=true;
 const ctx={URL,AbortController,setTimeout,clearTimeout,Set,Error,caches,
  fetch:async()=>{if(!online)throw Error('offline');return{ok:true,clone(){return this;}}},
  self:{registration:{scope},clients:{async claim(){}},addEventListener:(n,f)=>handlers[n]=f}};
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),ctx);
 let work;handlers.install({waitUntil:p=>work=p});await work;
 stores.set('other-app-cache',new Map());stores.set('mem-voc-/mem_voc/-old',new Map());
 handlers.activate({waitUntil:p=>work=p});await work;
 assert(stores.has('other-app-cache'));assert(!stores.has('mem-voc-/mem_voc/-old'));
 online=false;
 for(const path of ['index.html','', 'data/catalog.json','data/cet4-extra.json','data/cet6-extra.json','data/ielts-extra.json','data/toefl-extra.json','app.js?v=20261108-stubborn']){
  let result;handlers.fetch({request:{method:'GET',url:scope+path},respondWith:p=>result=p});assert((await result).ok,path);
 }
 let intercepted=false;handlers.fetch({request:{method:'GET',url:'https://example.github.io/another-app/index.html'},respondWith:()=>intercepted=true});assert.equal(intercepted,false);
 function ui(protocol='https:',installed=false){
  const events={},els={};const el=id=>els[id]??=( {hidden:false,addEventListener(n,f){this[n]=f;}} );let registered=false;
  const context={document:{getElementById:el},navigator:{userAgent:'Chrome',serviceWorker:{async register(){registered=true;}}},window:{location:{protocol},isSecureContext:protocol!=='file:',matchMedia:()=>({matches:installed}),addEventListener:(n,f)=>events[n]=f}};
  vm.runInNewContext(fs.readFileSync('pwa.js','utf8'),context);return{events,els,registered};
 }
 const local=ui('file:');await local.els.installAppBtn.click();assert.equal(local.registered,false);assert.equal(local.els.installOnlineLink.hidden,false);assert.match(local.els.installHelpText.textContent,/导出备份/);
 const app=ui();let prompted=0;app.events.beforeinstallprompt({preventDefault(){},async prompt(){prompted++;},userChoice:Promise.resolve({outcome:'accepted'})});
 await app.els.installAppBtn.click();assert.equal(prompted,1);assert.match(app.els.installHelpText.textContent,/已确认安装/);
 app.events.appinstalled();assert.equal(app.els.installAppBtn.hidden,true);assert.equal(ui('https:',true).els.installAppBtn.hidden,true);
 console.log('通过：安装清单与图标尺寸、安装按钮/本地指引、全部词库离线加载、子路径兼容、缓存清理仅限本站。');
})().catch(e=>{console.error(e);process.exitCode=1;});
