// Bump VERSION whenever the app shell or bundled vocabulary changes.
const VERSION='20261109-pwa-v2';
const PREFIX='mem-voc-'+new URL(self.registration.scope).pathname+'-';
const CACHE=PREFIX+VERSION;
const FILES=[
    './index.html','./style.css?v=20261024-compact','./app.js?v=20261109-stubborn',
    './pwa.js?v=20261108','./manifest.webmanifest',
    './icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png',
    './data/catalog.json','./data/toefl-common.json','./data/cet4-extra.json',
    './data/cet6-extra.json','./data/ielts-extra.json','./data/toefl-extra.json'
];
self.addEventListener('install',event=>{
    // All five libraries become available offline after installation finishes.
    // A new worker waits for existing windows to close before activation.
    event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('activate',event=>{
    event.waitUntil((async()=>{
        for(const key of await caches.keys())if(key.startsWith(PREFIX) && key!==CACHE)await caches.delete(key);
        await self.clients.claim();
    })());
});
self.addEventListener('fetch',event=>{
    const request=event.request,url=new URL(request.url),scope=new URL(self.registration.scope);
    if(request.method!=='GET' || url.origin!==scope.origin || !url.pathname.startsWith(scope.pathname))return;
    const known=new Set(FILES.map(file=>new URL(file,self.registration.scope).pathname));
    const isHome=url.pathname===scope.pathname || url.pathname===new URL('./index.html',scope).pathname;
    if(!known.has(url.pathname) && !isHome)return;
    event.respondWith((async()=>{
        const cache=await caches.open(CACHE);
        const controller=new AbortController();
        const timer=setTimeout(()=>controller.abort(),6000);
        try{
            const response=await fetch(request,{signal:controller.signal});
            if(!response.ok)throw new Error('HTTP '+response.status);
            try{await cache.put(request,response.clone());}catch(_){} // A full cache must not block an online response.
            return response;
        }catch(error){
            const cached=await cache.match(request) || (isHome ? await cache.match(new URL('./index.html',scope).href) : undefined);
            if(cached)return cached;
            throw error;
        }finally{clearTimeout(timer);}
    })());
});
