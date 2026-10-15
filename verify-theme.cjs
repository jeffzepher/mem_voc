const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const script=fs.readFileSync('theme.js','utf8');
function boot({stored=null,legacy=null,href='file:///F:/VocWords/index.html',blocked=false}={}){
 const storage=new Map([['vocwords.theme.v1',stored],['vocwords.phrasal.theme',legacy]]),events={},windowEvents={},select={value:'',addEventListener(n,f){this[n]=f}},links=['sentence.html','phrasal.html','https://dictionary.cambridge.org/'].map(href=>({href,getAttribute(){return this.href},setAttribute(n,v){this.href=v}}));
 const document={documentElement:{dataset:{}},querySelectorAll(q){return q==='.theme-select'?[select]:q==='a[href]'?links:[]},addEventListener(n,f){events[n]=f}};
 const window={location:{href},history:{replaceState(a,b,url){window.location.href=url}},addEventListener(n,f){windowEvents[n]=f}};
 const localStorage={getItem(k){if(blocked)throw Error('blocked');return storage.get(k)||null},setItem(k,v){if(blocked)throw Error('blocked');storage.set(k,v)}};
 vm.runInNewContext(script,{document,window,localStorage,URL});events.DOMContentLoaded();
 return {document,window,select,links,storage,events:windowEvents};
}
for(const theme of ['normal','eye','night']){
 const page=boot();page.select.value=theme;page.select.change();
 assert.equal(page.document.documentElement.dataset.theme,theme);assert.equal(page.storage.get('vocwords.theme.v1'),theme);
 assert.equal(new URL(page.window.location.href).searchParams.get('theme'),theme);
 assert.equal(new URL(page.links[0].href).searchParams.get('theme'),theme);assert.equal(page.links[2].href,'https://dictionary.cambridge.org/');
 const next=boot({href:page.links[0].href});assert.equal(next.select.value,theme);assert.equal(next.storage.get('vocwords.theme.v1'),theme);
 assert.equal(boot({stored:theme}).select.value,theme);
 const before=page.window.VocTheme.get();page.window.VocTheme.set(theme);assert.equal(page.window.VocTheme.get(),before);
}
assert.equal(boot().select.value,'normal');assert.equal(boot({legacy:'forest'}).select.value,'eye');assert.equal(boot({legacy:'blue'}).select.value,'normal');assert.equal(boot({legacy:'night'}).select.value,'night');assert.equal(boot({stored:'toString'}).select.value,'normal');
const blocked=boot({blocked:true});blocked.window.VocTheme.set('night');assert.equal(blocked.select.value,'night');
const synchronized=boot();synchronized.events.storage({key:'vocwords.theme.v1',newValue:'eye'});assert.equal(synchronized.select.value,'eye');
for(const name of ['index.html','sentence.html','phrasal.html']){
 const html=fs.readFileSync(name,'utf8');assert.match(html,/<script src="theme.js"><\/script>/);assert.match(html,/<link rel="stylesheet" href="theme.css">/);
 const select=html.match(/<select[^>]*class="theme-select"[\s\S]*?<\/select>/)?.[0]||html.match(/<select[^>]*class="[^"]*theme-select[^"]*"[\s\S]*?<\/select>/)?.[0];
 assert.ok(select,name);assert.deepEqual([...select.matchAll(/<option value="([^"]+)"/g)].map(m=>m[1]),['normal','eye','night']);
}
function luminance(hex){if(hex.length===4)hex='#'+[...hex.slice(1)].map(x=>x+x).join('');const rgb=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722}
const css=fs.readFileSync('theme.css','utf8');let base;
for(const [,name,body]of css.matchAll(/:root(?:\[data-theme=(\w+)\])?\{([^}]+)\}/g)){
 const own=Object.fromEntries([...body.matchAll(/--([\w-]+):(#[a-f\d]+)/gi)].map(m=>[m[1],m[2]]));if(!name)base=own;const v={...base,...own};
 for(const [fg,bg]of [['ink','paper'],['muted','paper'],['muted','bg'],['on','green'],['red','wrong'],['success','success-bg']]){
  const a=luminance(v[fg]),b=luminance(v[bg]);assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,`${name||'normal'} ${fg}/${bg}`);
 }
}
console.log('通过：三页仅三种模式、旧偏好迁移、刷新恢复、跨页携带、主题同步、存储不可用降级，以及三套文字配色对比度。');
