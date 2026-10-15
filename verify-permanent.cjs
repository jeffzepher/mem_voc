const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const script=fs.readFileSync('index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
const storage=new Map(),cookies=new Map();
function boot() {
 const elements=new Map(),events={};
 function el(){return {textContent:'',innerHTML:'',children:[],style:{},hidden:false,value:'',className:'',classList:{add(){},remove(){},toggle(){},contains(){return false;}},setAttribute(){},addEventListener(){},appendChild(c){this.children.push(c);},querySelectorAll(){return [];}};}
 const document={getElementById(id){if(!elements.has(id))elements.set(id,el());return elements.get(id);},createTextNode(t){return {textContent:t};},createElement:el,addEventListener(n,f){events[n]=f;}};
 Object.defineProperty(document,'cookie',{get(){return [...cookies].map(([k,v])=>k+'='+v).join('; ');},set(v){let [pair]=v.split(';'),i=pair.indexOf('='),k=pair.slice(0,i),value=pair.slice(i+1);if(v.includes('max-age=0;'))cookies.delete(k);else cookies.set(k,value);}});
 const ctx=vm.createContext({assert,document,console,btoa,atob,window:{addEventListener(){}},localStorage:{getItem(k){return storage.get(k)||null;},setItem(k,v){storage.set(k,v);}},alert(){},confirm(){return true;},setTimeout(){return 1;},clearTimeout(){}});
 vm.runInContext(script,ctx);events.DOMContentLoaded();return (code)=>vm.runInContext(code,ctx);
}
let run=boot();
run(`
const word=state.questions[0].en;
handleAnswer('错误答案');
assert.equal(state.permanentErrors[word],1);
handleAnswer('错误答案');
assert.equal(state.permanentErrors[word],1,'重复点击不应重复计数');
assert.equal(state.errorWords.length,1);
toggleErrorBook();
assert.equal(state.isReviewMode,true);
handleAnswer(state.questions[0].cn);
assert.equal(state.errorWords.length,0,'原错题本答对后移除');
assert.equal(state.permanentErrors[word],1,'原错题本答对后永久记录保留');
togglePermanentBook();
assert.equal(state.questions.length,1);
assert.equal(state.questions[0].result,null);
handleAnswer('错误答案');
assert.equal(state.permanentErrors[word],2);
assert.equal(state.errorWords.length,1);
repeatPermanentReview();
assert.equal(state.questions[0].result,null);
handleAnswer(state.questions[0].cn);
assert.equal(state.permanentErrors[word],2);
assert.equal(state.errorWords.length,1,'永久本答对不清除普通本');
assert.equal(document.getElementById('errorHistory').textContent,'累计答错 2 次');
assert.equal(decodeBits(loadLocalState().w,state.words.length)[0],true,'永久检测不覆盖普通练习进度');
`);
run=boot();
run(`
assert.equal(state.permanentErrors.accept,2,'刷新保留计数');
assert.equal(state.isPermanentReviewMode,true,'恢复永久检测');
resetAll();
assert.equal(state.permanentErrors.accept,2,'重置保留永久计数');
assert.equal(state.errorWords.length,0);
assert.equal(state.isPermanentReviewMode,false);
assert.equal(state.questions[0].result,null);
togglePermanentBook();
assert.equal(state.questions[0].en,'accept');
handleAnswer('错误答案');
assert.equal(state.permanentErrors.accept,3,'重置后继续累计');
switchWordType('noun');
assert.equal(Object.keys(state.permanentErrors).length,0,'词性独立');
handleAnswer('错误答案');
assert.equal(state.permanentErrors.time,1);
switchWordType('verb');
assert.equal(state.permanentErrors.accept,3);
assert.equal(state.permanentErrors.time,undefined);
`);
run=boot();
run(`
assert.equal(state.permanentErrors.accept,3);
switchWordType('noun');
assert.equal(state.permanentErrors.time,1);
resetAll();
assert.equal(state.permanentErrors.time,1);
`);
// 独立验证旧错题迁移：移除新增存储，保留旧版错题 Cookie。
storage.clear();cookies.clear();
run=boot();
run(`handleAnswer('错误答案');`);
storage.clear();
run=boot();
run(`assert.equal(state.permanentErrors.accept,1,'已有错题自动迁入');`);
run=boot();
run(`assert.equal(state.permanentErrors.accept,1,'重复加载不重复累计');`);
console.log('通过：原错题行为、三种模式累计、重复点击、刷新、重置、再练、词性隔离、旧错题迁移与普通进度保护。');
