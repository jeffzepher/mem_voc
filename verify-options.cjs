const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const start = script.indexOf('        function shuffle(');
const end = script.indexOf('        // ---------- 本地 Cookie');
const data = script.slice(0, start);
const funcs = script.slice(start, end);
const context = vm.createContext({console});
// 数据和选项生成函数独立运行，不启动页面。
vm.runInContext(data + funcs + `
for (const [name, words] of [['verb', WORDS_DATA], ['noun', NOUNS_DATA]]) {
 let checked = 0;
 for (const word of words) {
  const options = generateOptions(word, words);
  if (options.length !== 4 || new Set(options).size !== 4 || options.includes('——') || !options.includes(word.cn)) throw Error(name + ':' + word.en);
  for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
   if (chineseMeaningSimilarity(options[i], options[j]) > 6) throw Error('选项过于相似:' + word.en);
  }
  checked++;
 }
 console.log(name + ': ' + checked + ' 道题选项检查通过');
}
`, context);

