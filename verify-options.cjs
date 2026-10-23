const assert=require('node:assert/strict');
const {boot}=require('./test-support.cjs');
const page=boot();page.ctx.assert=assert;
page.run(`
for(const [type,words] of Object.entries(WORD_SETS)) {
 for(const word of words) {
  const options=generateOptions(word,words);
  assert.equal(options.length,4);assert.equal(new Set(options).size,4);assert.ok(!options.includes('——'));assert.ok(options.includes(word.cn));
 }
 console.log(type+': '+words.length+' 道题选项通过');
}
`);
