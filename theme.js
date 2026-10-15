// 三个练习页共用外观设置，独立于各自的学习记录。
(() => {
 'use strict';
 const key='vocwords.theme.v1';
 const aliases={normal:'normal',eye:'eye',night:'night',paper:'normal',forest:'eye',blue:'normal'};
 const normalize=value=>Object.hasOwn(aliases,value)?aliases[value]:'normal';
 let current='normal';
 try {current=normalize(localStorage.getItem(key)||localStorage.getItem('vocwords.phrasal.theme'))} catch {}
 try {const value=new URL(window.location.href).searchParams.get('theme');if(value!==null)current=normalize(value)} catch {}
 function apply(value,persist=false){
  current=normalize(value);
  document.documentElement.dataset.theme=current;
  document.querySelectorAll('.theme-select').forEach(select=>select.value=current);
  // file:// 的存储可能按文件隔离，通过站内链接保持跨页面外观一致。
  try {
   const page=new URL(window.location.href);
   document.querySelectorAll('a[href]').forEach(link=>{
    const target=new URL(link.getAttribute('href'),page);
    if(target.origin===page.origin&&target.pathname.slice(0,target.pathname.lastIndexOf('/'))===page.pathname.slice(0,page.pathname.lastIndexOf('/'))&&/\/(index|sentence|phrasal)\.html$/.test(target.pathname)){
     target.searchParams.set('theme',current);link.setAttribute('href',target.href);
    }
   });
   page.searchParams.set('theme',current);window.history.replaceState(null,'',page.href);
  } catch {}
  if(persist)try {localStorage.setItem(key,current)} catch {}
  return current;
 }
 apply(current);
 document.addEventListener('DOMContentLoaded',()=>{
  apply(current,true);
  document.querySelectorAll('.theme-select').forEach(select=>select.addEventListener('change',()=>apply(select.value,true)));
 });
 window.addEventListener('storage',event=>{if(event.key===key)apply(event.newValue)});
 window.addEventListener('pageshow',()=>{try {apply(localStorage.getItem(key)||current)} catch {}});
 window.VocTheme={set:value=>apply(value,true),get:()=>current};
})();
