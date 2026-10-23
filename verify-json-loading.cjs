const fs=require('node:fs'),assert=require('node:assert/strict');
const {boot,DEFAULT_DATASET:data}=require('./test-support.cjs');
assert.ok(fs.existsSync('data/catalog.json'));assert.ok(!fs.readFileSync('index.html','utf8').includes('const NOUNS_DATA ='));
const catalog=JSON.parse(fs.readFileSync('data/catalog.json','utf8'));assert.equal(catalog.defaultDataset,data.id);
const page=boot();
for(const [type,words] of Object.entries(data.wordSets)){
 const result=page.run(`JSON.stringify(WORD_SETS[${JSON.stringify(type)}])`);
 const expected=words.map(({example,...word})=>word);
 assert.deepEqual(JSON.parse(result),expected);
 for(const word of words)assert.equal(page.run(`EXAMPLE_DATA[${JSON.stringify(type+':'+word.en)}]`),word.example);
}
assert.equal(page.run('WORDS_DATA.length'),709);assert.equal(page.run('NOUNS_DATA[95].cn'),'思维；头脑；心智');
const baseline=fs.existsSync('../noun-audit-json-baseline.json')?JSON.parse(fs.readFileSync('../noun-audit-json-baseline.json','utf8')):null;
if(baseline){for(const[type,words]of Object.entries(data.wordSets))assert.deepEqual(words.map(({example,...w})=>w),baseline.wordSets[type]);}
(async()=>{
 const requests=[];const server=boot({load:false,protocol:'https:',href:'https://example.github.io/mem_voc/index.html',fetch:async url=>{requests.push(String(url));return{ok:true,json:async()=>String(url).endsWith('catalog.json')?catalog:data}}});
 await server.run('initializeVocabulary()');
 assert.deepEqual(requests,['https://example.github.io/mem_voc/data/catalog.json','https://example.github.io/mem_voc/data/toefl-common.json']);
 assert.equal(server.run('state.words.length'),709);
 const offline=boot({load:false});await offline.run('initializeVocabulary()');assert.equal(offline.document.getElementById('vocabularyLoader').hidden,false);
 await offline.run(`importVocabularyFile({target:{value:'file',files:[{text:async()=>${JSON.stringify(JSON.stringify(data))}}]}})`);
 assert.equal(offline.run('state.words.length'),709);
 const cached=boot({load:false,storage:offline.storage});await cached.run('initializeVocabulary()');assert.equal(cached.run('state.words.length'),709);
 const broken=boot({load:false,protocol:'https:',href:'https://example.github.io/mem_voc/',fetch:async()=>({ok:false,status:404})});await broken.run('initializeVocabulary()');assert.equal(broken.run('state.dataLoaded'),false);assert.match(broken.document.getElementById('vocabularyLoadMessage').textContent,/404/);
 const oldKey=page.run('storageKey()');page.run("handleAnswer('错误答案')");
 const oldExport=JSON.parse(page.run('JSON.stringify(collectBackup())'));assert.equal(oldExport.types.verb.permanent.accept,1);assert.equal(oldKey,'vocab_mcq_state_v4_verb');
 const other=JSON.parse(JSON.stringify(data));other.id='new-batch';other.name='另一词库';page.ctx.other=other;page.run('installDataset(other)');assert.notEqual(page.run('storageKey()'),oldKey);assert.equal(page.run('state.permanentErrors.accept'),undefined);
 page.ctx.oldExport=oldExport;assert.throws(()=>page.run('restoreBackupData(oldExport)'),/另一词库/);
 page.run('installDataset(__dataset)');assert.equal(page.run('state.permanentErrors.accept'),1);
 assert.throws(()=>page.run('installDataset({format:"vocab-practice-backup",version:1})'),/词库格式/);assert.equal(page.run('activeDatasetId'),data.id);
 const invalid=JSON.parse(JSON.stringify(data));invalid.wordSets.verb[1].en=invalid.wordSets.verb[0].en;page.ctx.invalid=invalid;assert.throws(()=>page.run('installDataset(invalid)'),/不重复/);
 console.log('通过：所有词条与例句保持不变、项目子路径加载、本地选择及缓存、404错误、无效文件拒绝、词库记录隔离和备份格式兼容。');
})().catch(error=>{console.error(error);process.exitCode=1});
