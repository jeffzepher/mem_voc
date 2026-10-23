const fs=require('node:fs'),vm=require('node:vm');
const DEFAULT_DATASET=JSON.parse(fs.readFileSync('data/toefl-common.json','utf8'));
function boot({storage=new Map(),cookies=new Map(),dataset=DEFAULT_DATASET,load=true,fetch,protocol='file:',href='file:///test/index.html',start=false}={}){
 const elements=new Map(),events={},timers=new Map();let clock=0,id=0;
 class ClockDate extends Date {static now(){return clock;}}
 function el(tag='div'){
  const e={tagName:tag.toUpperCase(),children:[],hidden:false,disabled:false,value:'',style:{},className:'',dataset:{},attributes:{},handlers:{},files:[],
   classList:{add(){},remove(){},toggle(){},contains(){return false;}},
   addEventListener(n,f){this.handlers[n]=f;},setAttribute(n,v){this.attributes[n]=v;},getAttribute(n){return this.attributes[n]},
   appendChild(c){this.children.push(c);return c;},replaceChildren(...c){this.children=c;},querySelectorAll(){return[];},click(){return this.handlers.click?.({target:this})}};
  let text='',html='';Object.defineProperties(e,{options:{get(){return this.children;}},textContent:{get(){return text+this.children.map(c=>c.textContent||'').join('');},set(v){text=String(v);this.children=[];}},innerHTML:{get(){return html;},set(v){html=v;text='';this.children=[];}}});return e;
 }
 const document={hidden:false,getElementById(n){if(!elements.has(n))elements.set(n,el());return elements.get(n);},createElement:el,createTextNode(text){return{textContent:text}},addEventListener(n,f){events[n]=f;}};
 Object.defineProperty(document,'cookie',{get(){return[...cookies].map(([k,v])=>k+'='+v).join('; ')},set(v){const pair=v.split(';')[0],i=pair.indexOf('='),k=pair.slice(0,i),value=pair.slice(i+1);if(v.includes('max-age=0;'))cookies.delete(k);else cookies.set(k,value);}});
 const alerts=[];const ctx=vm.createContext({console,document,URL,AbortController,Blob,btoa,atob,Date:ClockDate,
  window:{location:{protocol,href},addEventListener(){}},localStorage:{getItem(k){return storage.get(k)||null},setItem(k,v){storage.set(k,String(v))},removeItem(k){storage.delete(k)}},
  alert(m){alerts.push(m)},confirm(){return true},setTimeout(fn,ms){const n=++id;timers.set(n,{fn,at:clock+ms});return n},clearTimeout(n){timers.delete(n)},fetch:fetch||(()=>Promise.reject(Error('offline'))),__dataset:dataset});
 vm.runInContext(fs.readFileSync('app.js','utf8'),ctx);
 const run=code=>vm.runInContext(code,ctx);
 if(start)events.DOMContentLoaded();else if(load)run('installDataset(__dataset)');
 function advance(ms){const end=clock+ms;for(;;){const due=[...timers].filter(([,v])=>v.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!due)break;clock=due[1].at;timers.delete(due[0]);due[1].fn()}clock=end;}
 return{run,storage,cookies,document,elements,events,alerts,advance,ctx};
}
module.exports={boot,DEFAULT_DATASET};
