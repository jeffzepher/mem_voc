const assert=require('node:assert/strict'),{boot,DEFAULT_DATASET}=require('./test-support.cjs');
(async()=>{
 const page=boot();page.run('openVocabularyPicker()');
 assert.equal(page.document.getElementById('datasetSelect').value,'');
 assert.equal(page.document.getElementById('datasetSelect').options.length,2);
 assert.match(page.document.getElementById('vocabularyCurrentStatus').textContent,/3611/);
 page.run("handleAnswer('错误答案')");
 await page.run("loadCatalogDataset('toefl-common')");
 assert.equal(page.run('state.words.length'),709);assert.equal(page.run('state.permanentErrors.accept'),1);
 assert.match(page.document.getElementById('answerToast').textContent,/已加载/);
 page.run('openVocabularyPicker()');assert.equal(page.document.getElementById('datasetSelect').value,'');
 let loads=0;const catalog={format:'vocabulary-catalog',version:1,defaultDataset:DEFAULT_DATASET.id,datasets:[{id:DEFAULT_DATASET.id,name:DEFAULT_DATASET.name,file:'./toefl-common.json'}]};
 const online=boot({load:false,protocol:'https:',href:'https://example.github.io/mem_voc/',fetch:async url=>({ok:true,json:async()=>String(url).endsWith('catalog.json')?catalog:(loads++,DEFAULT_DATASET)})});
 await online.run('initializeVocabulary()');online.run('openVocabularyPicker()');await online.run("loadCatalogDataset('toefl-common')");assert.equal(loads,2);
 assert.match(online.document.getElementById('answerToast').textContent,/已加载/);
 console.log('通过：唯一词库可再次选择并加载、当前状态和成功反馈、原错题保留、本地缓存和在线请求路径。');
})().catch(error=>{console.error(error);process.exitCode=1});
