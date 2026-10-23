const assert=require('node:assert/strict'),{boot}=require('./test-support.cjs');
const page=boot();page.ctx.assert=assert;
page.run(`
let checked=0;
for(const [type,words] of Object.entries(WORD_SETS))for(const word of words){
 renderExampleSentence(EXAMPLE_DATA[type+':'+word.en],word.en);
 assert.ok(document.getElementById('exampleSentence').children.some(child=>child.className==='example-target'&&child.textContent.toLowerCase()===word.en.toLowerCase()),word.en);checked++;
}
console.log('例句与单词高亮通过：'+checked);
assert.equal(state.questions.length,709);
assert.equal(document.getElementById('questionCountdown').hidden,true);
handleAnswer(state.questions[0].cn);
`);
page.advance(500);page.run(`assert.equal(state.currentIndex,1);assert.equal(document.getElementById('countdownLabel').textContent,'8 秒');`);
page.advance(8000);page.run(`assert.equal(state.questions[1].result,'wrong');assert.equal(state.permanentErrors.achieve,1);switchWordType('noun');assert.equal(state.questions.length,2000);assert.equal(NOUNS_DATA[95].cn,'思维；头脑；心智');`);
page.advance(12000);page.run(`assert.equal(state.questions[0].result,null);goToNext();`);page.advance(8000);page.run(`assert.equal(state.questions[1].result,'wrong');`);
console.log('启动、自动下一题、8秒超时、首题免计时、词类切换通过。');
