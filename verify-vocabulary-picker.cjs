const assert=require('node:assert/strict'),{boot,DEFAULT_DATASET}=require('./test-support.cjs');
const other={format:'vocabulary-dataset',version:1,id:'another-set',name:'另一套词库',wordSets:{noun:[{en:'apple',cn:'苹果'},{en:'river',cn:'河流'},{en:'courage',cn:'勇气'},{en:'method',cn:'方法'}]}};
const catalog={format:'vocabulary-catalog',version:1,defaultDataset:DEFAULT_DATASET.id,datasets:[{id:DEFAULT_DATASET.id,name:DEFAULT_DATASET.name,file:'./toefl-common.json'},{id:other.id,name:other.name,file:'./other.json'}]};
(async()=>{
 const requests=[];const page=boot({load:false,protocol:'https:',href:'https://example.github.io/mem_voc/index.html',fetch:async url=>{requests.push(String(url));return{ok:true,json:async()=>String(url).endsWith('catalog.json')?catalog:String(url).endsWith('other.json')?other:DEFAULT_DATASET}}});
 page.ctx.assert=assert;await page.run('initializeVocabulary()');
 page.run(`switchWordType('noun');state.currentIndex=state.questions.findIndex(q=>q.en==='apple');renderAll();handleAnswer('错误答案');openVocabularyPicker();`);
 assert.equal(page.document.getElementById('vocabularyPicker').hidden,false);assert.equal(page.document.getElementById('datasetSelect').options.length,3);
 await page.run("loadCatalogDataset('another-set')");assert.equal(page.run('activeDatasetId'),other.id);assert.equal(page.run('state.questions.length'),4);assert.equal(page.run('state.permanentErrors.apple'),undefined);assert.equal(page.document.getElementById('vocabularyPicker').hidden,true);
 page.run(`handleAnswer('错误答案');assert.equal(state.permanentErrors.apple,1);const otherBackup=collectBackup();openVocabularyPicker();`);
 await page.run("loadCatalogDataset('toefl-common')");page.run(`assert.equal(state.permanentErrors.apple,1);assert.equal(state.errorWords.length,1);assert.throws(()=>restoreBackupData(otherBackup),/另一词库/);`);
 await page.run("loadCatalogDataset('another-set')");page.run(`assert.equal(state.permanentErrors.apple,1);assert.equal(state.errorWords.length,1);`);
 const local=boot({load:false,storage:page.storage});await local.run('initializeVocabulary()');local.run('openVocabularyPicker()');assert.equal(local.document.getElementById('datasetSelect').options.length,3);
 await local.run("loadCatalogDataset('toefl-common')");assert.equal(local.run('activeDatasetId'),'toefl-common');local.run("switchWordType('noun')");assert.equal(local.run('state.permanentErrors.apple'),1);
 const before=local.run('activeDatasetId');await local.run("loadCatalogDataset('not-cached')");assert.equal(local.run('activeDatasetId'),before);
 console.log('通过：在线菜单自动加载、相同单词跨词库错题隔离、返回恢复进度、错误备份拒绝、本地缓存菜单自动切换及首次文件选择兜底。');
})().catch(error=>{console.error(error);process.exitCode=1});
