(() => {
    const button=document.getElementById('installAppBtn');
    const help=document.getElementById('installHelp');
    const message=document.getElementById('installHelpText');
    const standalone=()=>window.matchMedia('(display-mode: standalone)').matches || navigator.standalone===true;
    let pendingPrompt=null;
    let workerFailed=false;
    const explain=text=>{ message.textContent=text; help.hidden=false; };
    const update=()=>{button.hidden=standalone();};
    update();
    document.getElementById('dismissInstallHelpBtn').addEventListener('click',()=>{help.hidden=true;});
    window.addEventListener('beforeinstallprompt',event=>{
        event.preventDefault();pendingPrompt=event;update();
    });
    window.addEventListener('appinstalled',()=>{
        pendingPrompt=null;button.hidden=true;
        explain('已添加到桌面，以后可以从桌面图标打开。');
    });
    button.addEventListener('click',async()=>{
        if(window.location.protocol==='file:'){
            document.getElementById('installOnlineLink').hidden=false;
            explain('本地 HTML 文件不能安装。请打开在线版，再点击“添加到桌面”。本地记录如需带到在线版，请先导出备份，再到在线版恢复。');
            return;
        }
        if(pendingPrompt){
            const prompt=pendingPrompt;pendingPrompt=null;
            try{
                await prompt.prompt();
                const choice=await prompt.userChoice;
                explain(choice.outcome==='accepted' ? '已确认安装，请等待浏览器完成，然后从桌面或应用列表打开。' : '已取消安装，之后可通过浏览器菜单添加。');
            }catch(_){explain('暂时无法打开安装窗口，请在浏览器菜单中选择“安装应用”或“添加到主屏幕”。');}
            return;
        }
        const ios=/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
        explain(ios ? '请在 Safari 中打开本页面，点击“分享”→“添加到主屏幕”。' :
            '请用 Chrome 或 Edge 打开本页面，在地址栏或浏览器菜单中选择“安装应用”或“添加到桌面”。若尚未出现，请稍后刷新再试。'+(workerFailed ? '离线缓存暂未就绪，请联网刷新重试。' : ''));
    });
    if(window.location.protocol!=='file:' && window.isSecureContext && 'serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'})
            .catch(()=>{workerFailed=true;});
    }
})();
