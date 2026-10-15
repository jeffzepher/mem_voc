'use strict';
const PV_KEY='vocwords.phrasal.v1';
const el=id=>document.getElementById(id);
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const grammarName={S:'可分 · 代词居中',I:'不可分 · 宾语在后',N:'本义项不带宾语'};
const kindName={meaning:'情境选义',gap:'补全短语',order:'词序拼装'};
const byId=new Map(PHRASALS.map(p=>[p.id,p]));
let storageOK=true,progress={learned:[],mistakes:{},attempts:0,correct:0};
try{
 const raw=JSON.parse(localStorage.getItem(PV_KEY)||'null');
 if(raw&&typeof raw==='object'){
  progress.learned=Array.isArray(raw.learned)?[...new Set(raw.learned.filter(id=>byId.has(id)))]:[];
  progress.attempts=Number.isSafeInteger(raw.attempts)&&raw.attempts>=0?raw.attempts:0;
  progress.correct=Number.isSafeInteger(raw.correct)&&raw.correct>=0?Math.min(raw.correct,progress.attempts):0;
  if(raw.mistakes&&typeof raw.mistakes==='object')Object.values(raw.mistakes).forEach(q=>{
   if(q&&byId.has(q.id)&&Object.hasOwn(kindName,q.kind)&&(q.example===0||q.example===1)&&(q.kind!=='order'||byId.get(q.id).grammar==='S'))progress.mistakes[questionKey(q)]=q;
  });
 }
}catch{storageOK=false}
let tab='learn',topic='全部',difficulty='all',query='',letter='全部',currentId=[...PHRASALS].sort((a,b)=>a.phrase.localeCompare(b.phrase))[0].id,session=null;
function questionKey(q){return `${q.id}:${q.kind}:${q.example}`}
function save(){try{localStorage.setItem(PV_KEY,JSON.stringify(progress));storageOK=true}catch{storageOK=false}renderStats()}
function renderStats(){el('learnedCount').innerHTML=`${progress.learned.length}<span> / ${PHRASALS.length}</span>`;el('mistakeCount').textContent=Object.keys(progress.mistakes).length;el('reviewBadge').textContent=Object.keys(progress.mistakes).length;el('accuracy').textContent=progress.attempts?`${Math.round(progress.correct/progress.attempts*100)}%`:'—';el('saveStatus').textContent=storageOK?'本地保存':'浏览器存储不可用，进度仅在本次有效'}
function filtered(ignoreLetter=false){return PHRASALS.filter(p=>(topic==='全部'||p.topic===topic)&&(difficulty==='all'||p.level===Number(difficulty))&&(ignoreLetter||letter==='全部'||p.phrase[0].toUpperCase()===letter)&&(!query||`${p.phrase} ${p.meaning}`.toLowerCase().includes(query))).sort((a,b)=>a.phrase.localeCompare(b.phrase))}
function renderAlphabet(){const available=new Set(filtered(true).map(p=>p.phrase[0].toUpperCase()));el('alphabet').innerHTML=['全部',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(l=>`<button data-letter="${l}" class="${letter===l?'active':''}" aria-pressed="${letter===l}" title="${l==='全部'?'全部首字母':available.has(l)?l+' 开头的短语':l+' 在当前筛选下暂无短语'}" ${l!=='全部'&&!available.has(l)&&l!==letter?'disabled':''}>${l}</button>`).join('');el('filterCount').textContent=`${filtered().length} / ${PHRASALS.length} 个短语${letter==='全部'?'':' · '+letter+' 开头'}`}
function marked(en){return escapeHTML(en).replace(/\{([^}]+)\}/g,'<mark>$1</mark>')}
function plain(en){return en.replace(/[{}]/g,'')}
function focusContent(){el('content').setAttribute('tabindex','-1');el('content').focus({preventScroll:true})}
function render(){
 renderStats();
 renderAlphabet();
 el('workspace').classList.toggle('single',tab!=='learn'||Boolean(session));
 el('sidebar').hidden=tab!=='learn'||Boolean(session);
 el('tabs').querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b.dataset.tab===tab);b.setAttribute('aria-pressed',String(b.dataset.tab===tab))});
 el('topics').innerHTML=['全部','日常','出行','学习','工作'].map(t=>`<button data-topic="${t}" class="${t===topic?'active':''}" aria-pressed="${t===topic}">${t}</button>`).join('');
 if(session)renderSession();else if(tab==='learn')renderLearn();else renderStart();
}
function renderLearn(){
 const list=filtered();if(!list.length){renderEmpty('没有匹配的短语','更换字母或点击“重置筛选”。');renderSide([]);return}
 if(!list.some(p=>p.id===currentId))currentId=list[0].id;
 const p=byId.get(currentId),index=list.indexOf(p),learned=progress.learned.includes(p.id);
 el('content').innerHTML=`<div class="card-meta"><div class="chips"><span class="chip">${p.topic}</span><span class="chip warm">${p.level===1?'入门':'进阶'}</span><span class="chip">${grammarName[p.grammar]}</span></div><span>${index+1} / ${list.length}</span></div><h2 class="phrase">${p.phrase}</h2><div class="meaning">${p.meaning}</div>${p.examples.map((e,i)=>`<div class="example"><p class="en">${marked(e.en)}</p><p class="zh">${e.zh}</p></div>`).join('')}<div class="usage"><strong>用法</strong>${p.note}</div><div class="bottom-actions"><div><button class="btn" data-action="prev-card" ${index===0?'disabled':''}>← 上一个</button> <button class="btn" data-action="next-card" ${index===list.length-1?'disabled':''}>下一个 →</button></div><button class="btn ${learned?'soft':'primary'}" data-action="learn">${learned?'✓ 已学过 · 取消标记':'标记已学 ✓'}</button></div>`;
 renderSide(list);
}
function renderSide(list){el('sidebar').innerHTML=tab==='learn'?`<section class="side-box"><h2>目录 <span class="muted">${list.length}</span></h2><button class="btn primary" data-action="practice-current" ${list.length?'':'disabled'}>练习当前短语 →</button><div class="word-list">${list.map(p=>`<button class="list-word ${p.id===currentId?'active':''}" data-id="${p.id}" ${p.id===currentId?'aria-current="true"':''}><span>${p.phrase}</span><small>${progress.learned.includes(p.id)?'✓':p.topic}</small></button>`).join('')}</div></section>`:''}
function renderEmpty(title,message){el('content').innerHTML=`<div class="empty"><div class="icon">↗</div><h2>${title}</h2><p class="muted">${message}</p></div>`}
function renderStart(){
 renderSide([]);
 const list=filtered(),wrong=Object.values(progress.mistakes).filter(q=>list.some(p=>p.id===q.id));
 if(tab==='review'){
  if(!wrong.length){renderEmpty('这里暂时没有错题',Object.keys(progress.mistakes).length?'当前筛选范围内没有错题。可以更换筛选条件。':'练习中答错的题会自动出现在这里。答对后会移出错题本。');return}
  el('content').innerHTML=`<div class="card-meta"><span class="chip warm">待复习</span><span>${wrong.length} 道待复习</span></div><h2 class="section-title">复习错题</h2><p class="muted">每轮最多 10 题，保留原题型。答对移出错题本，答错继续保留。</p><button class="btn primary" data-action="start-review">开始复习 →</button><div style="margin-top:24px">${wrong.slice(0,10).map(q=>`<div class="mistake-row"><div><strong>${byId.get(q.id).phrase}</strong><small>${kindName[q.kind]} · ${byId.get(q.id).topic}</small></div><span class="chip warm">待巩固</span></div>`).join('')}</div>`;return;
 }
 if(!list.length){renderEmpty('没有匹配的短语','更改筛选条件后再开始练习。');return}
 el('content').innerHTML=`<div class="card-meta"><span class="chip">每轮最多 10 题</span><span>${list.length} 个短语可练</span></div><h2 class="section-title">选择题型</h2><div class="mode-list">${[['mixed','混合练习','选义、填空、词序'],['meaning','情境选义','判断句中的意思'],['gap','补全短语','选择正确的搭配'],['order','词序拼装','练习可分短语的代词位置']].map(([k,title,desc])=>`<button class="mode-card" data-start="${k}" ${k==='order'&&!list.some(p=>p.grammar==='S')?'disabled':''}><div><strong>${title}</strong><small>${desc}</small></div><span>→</span></button>`).join('')}</div>`;
}
// 代词位置题使用明确的指代情境，避免两种名词宾语词序都成立。
const orderContext={
 'turn on':['the light','灯','it'],'turn off':['the TV','电视','it'],'put on':['the coat','外套','it'],'take off':['the shoes','鞋子','them'],
 'clean up':['the kitchen','厨房','it'],'throw away':['the empty box','空盒子','it'],'give up':['the habit','这个习惯','it'],'put away':['the toys','玩具','them'],
 'pick up':['Anna','安娜','her'],'drop off':['Leo','利奥','him'],'hold up':['the buses','公交车','them'],
 'look up':['the word','这个词','it'],'write down':['the answer','答案','it'],'hand in':['the report','报告','it'],'figure out':['the puzzle','这道谜题','it'],
 'find out':['the truth','真相','it'],'work out':['the total cost','总费用','it'],'read through':['the report','报告','it'],'make up':['the story','这个故事','it'],'point out':['the mistake','错误','it'],
 'set up':['the system','这个系统','it'],'carry out':['the plan','计划','it'],'put off':['the meeting','会议','it'],'call off':['the event','活动','it'],
 'bring up':['the issue','这个问题','it'],'turn down':['the offer','这份邀约','it'],'take over':['the business','这项业务','it'],'fill in':['the form','表格','it'],
 'sort out':['the problem','这个问题','it'],'back up':['the file','文件','it']
};
PHRASALS.filter(p=>p.order).forEach(p=>orderContext[p.phrase]=p.order);
function orderWords(p){const words=p.phrase.split(' ');return ['Please',words[0],orderContext[p.phrase][2],...words.slice(1)]}
function buildQuestions(list,mode){
 if(mode==='order')return shuffle(list.filter(p=>p.grammar==='S')).slice(0,10).map(p=>({id:p.id,kind:'order',example:0}));
 if(mode==='current'){const p=list[0];return [{id:p.id,kind:'meaning',example:0},{id:p.id,kind:'gap',example:1},...(p.grammar==='S'?[{id:p.id,kind:'order',example:0}]:[])]}
 return shuffle(list).slice(0,10).map((p,i)=>{const kind=mode==='mixed'?(['meaning','gap',...(p.grammar==='S'?['order']:[])][i%(p.grammar==='S'?3:2)]):mode;return {id:p.id,kind,example:kind==='order'?0:Math.random()<.5?0:1}});
}
function startSession(questions,label){if(!questions.length)return;session={questions,label,index:0,score:0,answer:null,checked:false,order:[],options:null,tiles:null};render();focusContent()}
function getQuestion(){return session.questions[session.index]}
function makeOptions(q){
 const p=byId.get(q.id),answer=q.kind==='meaning'?p.meaning:p.phrase.split(' ').slice(1).join(' ');
 const meaningPool=['起床','打开电器','脱下','外出就餐','照顾','扔掉','上车（公交、火车等）','办理退房','查阅词语或信息','写下；记下','提交；上交','推迟','取消','填写','备份'];
 // 对可能近义的中文不出作干扰项，避免同一语境多解。
 const related={ '弄明白；想出':['查阅词语或信息'],'查明；发现信息':['查阅词语或信息'],'解决；理顺':['填写'],'减少消耗或摄入':['扔掉'],'顺路送到':['上车（公交、火车等）'],'记下':['写下；记下'],'提交':['提交；上交'] };
 const pool=q.kind==='meaning'?meaningPool.filter(m=>m!==answer&&!(related[answer]||[]).includes(m)):['up','off','on','out','in','down','away','over','after','through','with','for','out of','up with','forward to'];
 return shuffle([answer,...shuffle(pool.filter(x=>x!==answer)).slice(0,3)]);
}
function correctAnswer(q){const p=byId.get(q.id);return q.kind==='meaning'?p.meaning:q.kind==='gap'?p.phrase.split(' ').slice(1).join(' '):orderWords(p).join(' ')}
function renderSession(){
 if(session.index>=session.questions.length){renderSummary();return}
 const q=getQuestion(),p=byId.get(q.id),e=p.examples[q.example];
 if(!session.options&&q.kind!=='order')session.options=makeOptions(q);
 if(!session.tiles&&q.kind==='order')session.tiles=shuffle(orderWords(p).map((text,id)=>({text,id})));
 let body='';
 if(q.kind==='meaning')body=`<p class="prompt">选出高亮短语在这句话中的意思。</p><div class="question">${marked(e.en)}</div>`;
 if(q.kind==='gap')body=`<p class="prompt">补全短语动词，使句子符合中文意思。</p><div class="question">${marked(e.en.replace(/\{([^}]+)\}/,(_,phrase)=>'{'+phrase.split(' ')[0]+' ____}'))}</div><p class="muted">${e.zh}</p>`;
 if(q.kind==='order'){
  const [noun,zh,pronoun]=orderContext[p.phrase];
  body=`<p class="prompt">用 <strong>${pronoun}</strong> 替换 <strong>${noun}</strong>（${zh}），保留 Please，把词块排成正确的请求句。</p><p class="muted">本题义项：${p.meaning}。点击下方词块放入答案，再点击答案中的词块可撤回。句末句号自动补齐。</p><div class="order-answer" aria-label="你的词序">${session.order.length?session.order.map(id=>`<button class="tile" data-remove="${id}" ${session.checked?'disabled':''}>${escapeHTML(session.tiles.find(t=>t.id===id).text)}</button>`).join(''):'<span>你的句子会出现在这里…</span>'}${session.order.length===session.tiles.length?'.':''}</div><div class="tiles">${session.tiles.map(t=>`<button class="tile ${session.order.includes(t.id)?'used':''}" data-tile="${t.id}" ${session.checked||session.order.includes(t.id)?'disabled':''}>${escapeHTML(t.text)}</button>`).join('')}</div>`;
 }
 else body+=`<div class="options">${session.options.map((o,i)=>`<button class="option ${session.answer===o?'selected':''} ${session.checked&&o===correctAnswer(q)?'correct':''} ${session.checked&&session.answer===o&&o!==correctAnswer(q)?'incorrect':''}" data-option="${i}" aria-pressed="${session.answer===o}" ${session.checked?'disabled':''}><span class="muted">${String.fromCharCode(65+i)}.</span> ${escapeHTML(o)}</button>`).join('')}</div>`;
 const ready=q.kind==='order'?session.order.length===session.tiles.length:session.answer!==null;
 el('content').innerHTML=`<div class="card-meta"><span class="chip warm">${kindName[q.kind]}</span><span>${session.index+1} / ${session.questions.length}</span></div><div class="bar"><i style="width:${session.index/session.questions.length*100}%"></i></div>${body}${session.checked?feedback(q):''}<div class="bottom-actions"><button class="btn" data-action="end-session">结束本轮</button>${session.checked?`<button class="btn primary" data-action="next-question">${session.index===session.questions.length-1?'查看本轮结果':'下一题 →'}</button>`:`<button class="btn primary" data-action="check" ${ready?'':'disabled'}>提交答案</button>`}</div>`;
 el('sidebar').innerHTML='';
}
function feedback(q){
 const p=byId.get(q.id),ok=session.wasCorrect,e=p.examples[q.example];
 return `<div class="feedback ${ok?'':'wrong'}" role="status"><strong>${ok?'✓ 答对了':'再记一次，下次就更熟悉'}</strong><p>正确答案：${escapeHTML(correctAnswer(q))}${q.kind==='order'?'.':''}</p><p><b>${p.phrase} · ${p.meaning}</b></p>${q.kind==='order'?`<p>这是可分短语。${orderContext[p.phrase][2]} 是代词，必须放在动词与后面的小品词之间。</p>`:`<p class="answer-line">${marked(e.en)}</p><p>${e.zh}</p>`}<p>${p.note}</p>${!ok?'<p>已加入错题本，可以在“错题复习”中再练。</p>':''}</div>`;
}
function checkAnswer(){
 if(!session||session.checked||session.index>=session.questions.length)return;
 const q=getQuestion();if(q.kind==='order'&&session.order.length!==session.tiles.length||q.kind!=='order'&&session.answer===null)return;
 const answer=q.kind==='order'?session.order.map(id=>session.tiles.find(t=>t.id===id).text).join(' '):session.answer;
 const ok=answer===correctAnswer(q);session.checked=true;session.wasCorrect=ok;progress.attempts++;
 if(ok){session.score++;progress.correct++;delete progress.mistakes[questionKey(q)]}else progress.mistakes[questionKey(q)]={...q};
 save();renderSession();
}
function renderSummary(){
 const count=session.questions.length;
 el('content').innerHTML=`<div class="card-meta"><span class="chip">本轮完成</span><span>${escapeHTML(session.label)}</span></div><div class="empty"><div class="summary-num">${session.score}<span style="font-size:25px;color:var(--muted)"> / ${count}</span></div><h2>本轮结果</h2><p class="muted">正确率 ${Math.round(session.score/count*100)}%。错题已保存，答对的复习题已移出错题本。</p><button class="btn primary" data-action="back-start">返回练习</button> <button class="btn" data-action="go-review">复习错题 →</button></div>`;
 el('sidebar').innerHTML='';
}
el('tabs').onclick=e=>{const b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;session=null;render()};
el('topics').onclick=e=>{const b=e.target.closest('[data-topic]');if(!b)return;topic=b.dataset.topic;session=null;render()};
el('difficulty').onchange=e=>{difficulty=e.target.value;session=null;render()};
el('search').oninput=e=>{query=e.target.value.trim().toLowerCase();session=null;render()};
el('alphabet').onclick=e=>{const b=e.target.closest('[data-letter]');if(!b||b.disabled)return;letter=b.dataset.letter;session=null;render()};
el('clearFilters').onclick=()=>{topic='全部';difficulty='all';query='';letter='全部';session=null;el('difficulty').value='all';el('search').value='';render()};
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.id){currentId=b.dataset.id;render();return}
 if(b.dataset.start){startSession(buildQuestions(filtered(),b.dataset.start),b.dataset.start==='mixed'?'混合练习':kindName[b.dataset.start]);return}
 if(b.dataset.option!==undefined&&session&&!session.checked){session.answer=session.options[Number(b.dataset.option)];renderSession();return}
 if(b.dataset.tile!==undefined&&session&&!session.checked){const id=Number(b.dataset.tile);if(!session.order.includes(id))session.order.push(id);renderSession();return}
 if(b.dataset.remove!==undefined&&session&&!session.checked){session.order=session.order.filter(id=>id!==Number(b.dataset.remove));renderSession();return}
 const action=b.dataset.action;
 if(action==='learn'){const i=progress.learned.indexOf(currentId);if(i<0)progress.learned.push(currentId);else progress.learned.splice(i,1);save();render()}
 if(action==='next-card'||action==='prev-card'){const list=filtered(),i=list.findIndex(p=>p.id===currentId);currentId=list[i+(action==='next-card'?1:-1)]?.id||currentId;render()}
 if(action==='practice-current'){tab='practice';startSession(buildQuestions([byId.get(currentId)],'current'),'当前短语练习')}
 if(action==='start-review')startSession(shuffle(Object.values(progress.mistakes).filter(q=>filtered().some(p=>p.id===q.id))).slice(0,10),'错题复习');
 if(action==='check')checkAnswer();
 if(action==='next-question'&&session?.checked){session.index++;session.checked=false;session.answer=null;session.options=null;session.tiles=null;session.order=[];render();focusContent()}
 if(action==='end-session'||action==='back-start'){session=null;render()}
 if(action==='go-review'){tab='review';session=null;render()}
});
render();
