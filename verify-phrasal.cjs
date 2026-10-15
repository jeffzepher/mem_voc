const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
function boot(stored=null,failStorage=false,theme=null){
 const elements=new Map(),events={},storage=new Map([['vocwords.phrasal.v1',stored],['vocwords.phrasal.theme',theme]]);
 const document={documentElement:{dataset:{}},getElementById(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',classList:{toggle(){}},setAttribute(){},focus(){},querySelectorAll(){return []}});return elements.get(id)},addEventListener(name,callback){events[name]=callback}};
 const localStorage={getItem(key){if(failStorage)throw Error('blocked');return storage.get(key)||null},setItem(key,value){if(failStorage)throw Error('blocked');storage.set(key,value)}};
 const context=vm.createContext({document,localStorage,console,assert});
 vm.runInContext(fs.readFileSync('phrasal-data.js','utf8'),context);
 vm.runInContext(fs.readFileSync('phrasal-extra.js','utf8'),context);
 vm.runInContext(fs.readFileSync('phrasal.js','utf8'),context);
 return {context,elements,events,saved:()=>storage.get('vocwords.phrasal.v1'),theme:()=>storage.get('vocwords.phrasal.theme')};
}
const app=boot();
vm.runInContext(`
assert.equal(PHRASALS.length,180);
assert.equal(new Set(PHRASALS.map(p=>p.phrase)).size,180);
for(const t of ['日常','出行','学习','工作'])assert.equal(PHRASALS.filter(p=>p.topic===t).length,45);
assert.equal(byId.get('pv-1').phrase,'wake up');assert.equal(byId.get('pv-60').phrase,'back up');
let exercises=0;
for(const p of PHRASALS){
 assert.equal(p.examples.length,2);assert.ok(p.note&&p.meaning&&grammarName[p.grammar]);
 for(let n=0;n<2;n++){
  const e=p.examples[n],matches=[...e.en.matchAll(/\\{([^}]+)\\}/g)];assert.equal(matches.length,1,p.phrase);assert.ok(e.zh);
  assert.equal(matches[0][1].split(' ').slice(1).join(' '),p.phrase.split(' ').slice(1).join(' '),p.phrase);
  for(const kind of ['meaning','gap']){
   const q={id:p.id,kind,example:n};startSession([q],'test');
   assert.equal(session.options.length,4);assert.equal(new Set(session.options).size,4);
   assert.ok(session.options.includes(correctAnswer(q)));
   checkAnswer();assert.equal(session.checked,false,'未选择不得提交');
   session.answer=session.options.find(o=>o!==correctAnswer(q));checkAnswer();
   assert.equal(session.wasCorrect,false);assert.ok(progress.mistakes[questionKey(q)]);
   const attempts=progress.attempts;checkAnswer();assert.equal(progress.attempts,attempts,'防止重复提交');
   startSession([q],'review');session.answer=correctAnswer(q);checkAnswer();
   assert.equal(session.wasCorrect,true);assert.equal(progress.mistakes[questionKey(q)],undefined);
   assert.ok(el('content').innerHTML.includes('答对了'));exercises++;
  }
 }
 if(p.grammar==='S'){
  assert.ok(orderContext[p.phrase],p.phrase);const q={id:p.id,kind:'order',example:0};startSession([q],'order');
  checkAnswer();assert.equal(session.checked,false);
  session.order=orderWords(p).map(w=>session.tiles.find(t=>t.text===w).id);
  checkAnswer();assert.equal(session.wasCorrect,true,p.phrase);
  startSession([q],'order');session.order=orderWords(p).reverse().map(w=>session.tiles.find(t=>t.text===w).id);checkAnswer();assert.equal(session.wasCorrect,false);
  exercises++;
 }
}
for(const t of ['全部','日常','出行','学习','工作'])for(const d of ['all','1','2']){
 topic=t;difficulty=d;query='';const list=filtered();
 for(const mode of ['mixed','meaning','gap','order']){
  const qs=buildQuestions(list,mode);assert.ok(qs.length<=10);assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);
  for(const q of qs){assert.ok(list.some(p=>p.id===q.id));if(q.kind==='order'){assert.equal(byId.get(q.id).grammar,'S');assert.equal(q.example,0)}}
 }
}
session=null;topic='全部';difficulty='all';query='zzzz';tab='learn';render();assert.ok(el('content').innerHTML.includes('没有匹配'));
query='脱下';assert.equal(filtered()[0].phrase,'take off');
query='';progress.learned=[PHRASALS[0].id];save();
console.log('通过：180 个短语、360 个例句、'+exercises+' 道练习的答案与错题流转、全部筛选和出题模式。');
`,app.context);
const resumed=boot(app.saved());
vm.runInContext("assert.equal(progress.learned[0],'pv-1');assert.ok(Object.keys(progress.mistakes).length>0);assert.ok(progress.attempts>0)",resumed.context);
const blocked=boot(null,true);
vm.runInContext("progress.learned=['pv-1'];save();assert.equal(storageOK,false);assert.ok(el('saveStatus').textContent.includes('仅在本次有效'))",blocked.context);
const corrupted=boot('{broken');
vm.runInContext("assert.equal(progress.learned.length,0);save();assert.equal(storageOK,true)",corrupted.context);
console.log('通过：刷新后恢复进度、存储不可用提示和损坏记录恢复。');
const ui=boot();
const click=dataset=>ui.events.click({target:{closest(){return {dataset,disabled:false}}}});
click({action:'learn'});
vm.runInContext("assert.equal(progress.learned[0],currentId)",ui.context);
click({id:'pv-3'});click({action:'practice-current'});
vm.runInContext("assert.equal(session.questions.length,3);assert.equal(tab,'practice');assert.equal(session.questions[0].id,'pv-3')",ui.context);
const correctOption=vm.runInContext('session.options.indexOf(correctAnswer(getQuestion()))',ui.context);
click({option:String(correctOption)});click({action:'check'});click({action:'next-question'});
vm.runInContext("assert.equal(session.index,1);assert.equal(session.score,1);assert.equal(session.checked,false)",ui.context);
click({action:'end-session'});click({start:'order'});
const tileId=vm.runInContext('session.tiles[0].id',ui.context);
click({tile:String(tileId)});
vm.runInContext('assert.equal(session.order.length,1)',ui.context);
click({remove:String(tileId)});
vm.runInContext('assert.equal(session.order.length,0)',ui.context);
console.log('通过：点击学习标记、当前短语练习、选项提交、下一题和词块放入撤回。');
vm.runInContext(`
session=null;tab='learn';topic='全部';difficulty='all';query='';
for(const l of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'){
 letter=l;render();assert.ok(filtered().every(p=>p.phrase[0].toUpperCase()===l));
 for(const q of buildQuestions(filtered(),'mixed'))assert.equal(byId.get(q.id).phrase[0].toUpperCase(),l);
}
letter='A';topic='工作';difficulty='2';query='act';assert.equal(filtered().length,1);assert.equal(filtered()[0].phrase,'act on');
el('clearFilters').onclick();assert.equal(filtered().length,180);assert.equal(letter,'全部');assert.equal(query,'');
el('alphabet').onclick({target:{closest(){return {dataset:{letter:'A'},disabled:false}}}});
assert.ok(filtered().length>0);assert.ok(filtered().every(p=>p.phrase.startsWith('a')));
assert.equal(session,null);
`,ui.context);
const legacy=boot(JSON.stringify({learned:['pv-1','pv-60'],mistakes:{'pv-3:gap:0':{id:'pv-3',kind:'gap',example:0}},attempts:10,correct:7}));
vm.runInContext("assert.equal(progress.learned.length,2);assert.equal(progress.attempts,10);assert.equal(progress.correct,7);assert.equal(Object.keys(progress.mistakes).length,1)",legacy.context);
console.log('通过：A–Z 索引、组合筛选、练习范围、重置及旧进度兼容。');
