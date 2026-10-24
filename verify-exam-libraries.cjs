const assert=require('node:assert/strict'),fs=require('node:fs'),cp=require('node:child_process');
const {boot}=require('./test-support.cjs');
const catalog=JSON.parse(fs.readFileSync('data/catalog.json','utf8'));
const original=JSON.parse(cp.execFileSync('git',['-c','safe.directory=F:/Codex Proj/VocWords/noun-audit-repo','show','7ed22d0:data/toefl-common.json'],{encoding:'utf8',maxBuffer:8*1024*1024}));
const baseline=JSON.parse(fs.readFileSync('data/toefl-common.json','utf8'));
assert.equal(baseline.name,'默认词库');
assert.deepEqual({...baseline,name:original.name},original,'默认词库仅更名，原词条、词序和历史迁移数据保持不变');
const excluded=new Set(Object.values(baseline.wordSets).flat().map(w=>w.en.toLowerCase()));
assert.equal(catalog.datasets.length,5);assert.equal(catalog.defaultDataset,baseline.id);
for(const entry of catalog.datasets){
 const data=JSON.parse(fs.readFileSync('data/'+entry.file.replace('./',''),'utf8'));
 assert.equal(data.id,entry.id);assert.equal(data.name,entry.name);
 const page=boot({dataset:data});
 assert.equal(page.run('activeDatasetId'),entry.id);
 if(data.id===baseline.id)continue;
 const seen=new Set();
 for(const words of Object.values(data.wordSets))for(const word of words){
  assert(!excluded.has(word.en.toLowerCase()),`${entry.id} 与默认词库重复: ${word.en}`);
  assert(!seen.has(word.en),`${entry.id} 内重复: ${word.en}`);seen.add(word.en);
  if(word.example)assert(new RegExp('\\b'+word.en+'\\b','i').test(word.example));
 }
 console.log(`${entry.name}：${seen.size} 词；格式、去重和启动通过`);
}
console.log('默认词库仅更名，原词序及迁移数据完全保留。');
