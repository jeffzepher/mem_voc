const assert=require('node:assert/strict'),fs=require('node:fs'),{boot,DEFAULT_DATASET}=require('./test-support.cjs');
const catalog=JSON.parse(fs.readFileSync('data/catalog.json','utf8'));
(async()=>{
 const page=boot({load:false,protocol:'https:',href:'https://jeffzepher.github.io/mem_voc/',fetch:async url=>({ok:true,json:async()=>String(url).endsWith('catalog.json')?catalog:DEFAULT_DATASET})});
 await page.run('initializeVocabulary()');page.run('openVocabularyPicker()');await page.run("loadCatalogDataset('toefl-common')");
 assert.equal(page.document.getElementById('vocabularyLoader').hidden,false,'用户选择后的加载结果应持续可见，而不是仅靠短暂提示');
 assert.match(page.document.getElementById('vocabularyLoadMessage').textContent,/已加载.*3611.*709/);
 page.ctx.fetch=async()=>({ok:false,status:503});
 await page.run("loadCatalogDataset('toefl-common')");
 assert.match(page.document.getElementById('vocabularyLoadMessage').textContent,/加载失败.*503/);
 assert.equal(page.document.getElementById('retryVocabularyBtn').hidden,false);
 assert.equal(page.run('state.words.length'),709,'加载失败保留已加载词库');
 assert.match(fs.readFileSync('index.html','utf8'),/app\.js\?v=/);
 console.log('通过：加载成功持续显示词数、失败保留提示和原词库、脚本版本更新。');
})().catch(e=>{console.error(e);process.exitCode=1});
