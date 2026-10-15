const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html','utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const elements = new Map();
function element() {
 const e = {innerHTML:'',className:'',style:{},children:[],textContent:'',value:'',disabled:false,
  addEventListener(){},setAttribute(){},querySelectorAll(){return [];},
  appendChild(child){this.children.push(child);},
  classList:{add(){},remove(){},toggle(){},contains(){return false;}}};
 return e;
}
const events = {};
const document = {
 cookie:'',
 getElementById(id){if(!elements.has(id)) elements.set(id,element());return elements.get(id);},
 createTextNode(text){return {textContent:text};},createElement(){return element();},
 addEventListener(event, callback){events[event]=callback;}
};
const context = vm.createContext({console,document,btoa,atob,window:{addEventListener(){}},localStorage:{getItem(){return null;}},setTimeout(){return 1;},clearTimeout(){}});
vm.runInContext(script, context);
vm.runInContext(`
let checked = 0;
for (const [pos, words] of Object.entries(WORD_SETS)) {
 for (const word of words) {
  const example = EXAMPLE_DATA[pos + ':' + word.en];
  if (!example || !new RegExp('\\\\b' + word.en + '\\\\b','i').test(example)) {
   // 在宿主检查正则，避免多层字符串转义影响检查。
   if (!example) throw Error('缺失例句:' + word.en);
  }
  renderExampleSentence(example,word.en);
  const output = document.getElementById('exampleSentence');
  if (!output.children.some(c => c.className === 'example-target' && c.textContent.toLowerCase() === word.en.toLowerCase())) throw Error('未高亮:' + word.en);
  output.children=[];
  checked++;
 }
}
console.log('例句渲染与目标词高亮通过:',checked);
`, context);
events.DOMContentLoaded();
vm.runInContext(`
if (state.questions.length !== 709) throw Error('动词加载失败');
const originalCount = state.questions.length;
const firstQuestion = state.questions[0];
handleAnswer(firstQuestion.cn);
if (firstQuestion.result !== 'correct') throw Error('作答失败');
switchWordType('noun');
if (state.questions.length !== 2000) throw Error('名词切换失败');
goToNext();
if (state.currentIndex !== 1) throw Error('翻页失败');
console.log('启动、作答、切换词性与翻页通过');
`, context);

