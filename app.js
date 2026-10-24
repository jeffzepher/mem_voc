// 词库由 data/catalog.json 指定；默认词库沿用既有学习记录。
const DEFAULT_DATASET_ID = 'toefl-common';
let activeDatasetId = DEFAULT_DATASET_ID;
let WORDS_DATA = [];
let NOUNS_DATA = [];
let WORD_SETS = {};
let EXAMPLE_DATA = {};
let PREVIOUS_WORD_ORDERS = {};
let datasetCatalog = [];
let datasetLoadSequence = 0;
        const WORD_TYPE_LABELS = { verb: '动词', noun: '名词', adjective: '形容词', adverb: '副词', preposition: '介词', conjunction: '连词' };

function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function alignProgress(progress, words, previous) {
    if (!progress || ![2, 3].includes(progress.v) || !Number.isSafeInteger(progress.n) || progress.n < 1 ||
        !['c','w','e'].every(key => typeof progress[key] === 'string')) return null;
    try {
        for (const key of ['c','w','e']) if (atob(progress[key]).length !== Math.ceil(progress.n / 8)) return null;
    } catch (_) { return null; }
    let order = progress.wordOrder;
    if (order !== undefined) {
        if (!Array.isArray(order) || order.length !== progress.n || new Set(order).size !== order.length ||
            !order.every(word => typeof word === 'string')) return null;
    } else if (previous && progress.n === previous.length && progress.first === previous[0] && progress.last === previous[previous.length - 1]) {
        order = previous;
    } else if (progress.n === words.length && progress.first === words[0].en && progress.last === words[words.length - 1].en) {
        order = words.map(word => word.en);
    } else { return null; }
    const index = new Map(order.map((word,i) => [word,i]));
    const aligned = {...progress, n:words.length, first:words[0].en, last:words[words.length-1].en,
        wordOrder:words.map(word => word.en)};
    for (const key of ['c','w','e']) {
        const bits=decodeBits(progress[key],order.length);
        aligned[key]=encodeBits(words.map(word => bits[index.get(word.en)] || false));
    }
    return aligned;
}

function validateDataset(input) {
    if (!input || input.format !== 'vocabulary-dataset' || input.version !== 1 || typeof input.id !== 'string' ||
        !/^[a-z0-9][a-z0-9-]{0,63}$/.test(input.id || '') ||
        typeof input.name !== 'string' || !input.name.trim() ||
        !input.wordSets || typeof input.wordSets !== 'object' || Array.isArray(input.wordSets)) {
        throw new Error('词库格式不正确，请选择词库 JSON，而不是学习备份文件。');
    }
    const sets=Object.create(null), examples=Object.create(null), previous=Object.create(null);
    for (const [type, words] of Object.entries(input.wordSets)) {
        if (!Object.prototype.hasOwnProperty.call(WORD_TYPE_LABELS,type) || !Array.isArray(words) || words.length<4) {
            throw new Error('每个词类至少需要四个词条，并使用支持的词性名称。');
        }
        const seen=new Set();
        sets[type]=words.map(word => {
            if (!word || typeof word.en!=='string' || !/^[a-z]+(?:[ '-][a-z]+)*$/i.test(word.en) ||
                typeof word.cn!=='string' || !word.cn.trim() || seen.has(word.en.toLowerCase()) ||
                (word.example!==undefined && typeof word.example!=='string')) {
                throw new Error('词条需包含不重复的英文 en、中文 cn，以及可选的例句 example。');
            }
            seen.add(word.en.toLowerCase());
            const {example='',...item}=word;
            examples[`${type}:${item.en}`]=example;
            return {...item,cn:item.cn.trim()};
        });
        if (new Set(sets[type].map(word=>word.cn)).size<4) throw new Error('每个词类至少需要四种不同释义。');
        const old=input.previousWordOrders?.[type];
        if (old!==undefined) {
            if (!Array.isArray(old) || !old.every(word=>typeof word==='string') || new Set(old).size!==old.length) {
                throw new Error('历史词序格式不正确。');
            }
            previous[type]=old;
        }
    }
    if (!Object.keys(sets).length) throw new Error('词库不能为空。');
    return {input,sets,examples,previous};
}

function showVocabularyMessage(message, failed=false) {
    document.getElementById('vocabularyLoader').hidden=false;
    document.getElementById('vocabularyLoadMessage').textContent=message;
    document.getElementById('retryVocabularyBtn').hidden=!failed || window.location.protocol==='file:';
}

function installDataset(input) {
    const checked=validateDataset(input);
    if (state.dataLoaded) saveLocalState();
    clearTimeout(autoNextTimer);
    stopQuestionCountdown();
    activeDatasetId=input.id;
    WORD_SETS=checked.sets;
    WORDS_DATA=WORD_SETS.verb || [];
    NOUNS_DATA=WORD_SETS.noun || [];
    EXAMPLE_DATA=checked.examples;
    PREVIOUS_WORD_ORDERS=checked.previous;
    state.activeType=Object.prototype.hasOwnProperty.call(WORD_SETS,state.activeType) ? state.activeType : Object.keys(WORD_SETS)[0];
    state.questions=[];
    state.currentIndex=0;
    const selector=document.getElementById('wordTypeSelect');
    selector.replaceChildren();
    for (const type of Object.keys(WORD_SETS)) {
        const option=document.createElement('option');
        option.value=type;
        option.textContent=WORD_TYPE_LABELS[type];
        selector.appendChild(option);
    }
    selector.value=state.activeType;
    const librarySelector=document.getElementById('datasetSelect');
    if (![...librarySelector.options].some(option=>option.value===input.id)) {
        const option=document.createElement('option');option.value=input.id;option.textContent=input.name;librarySelector.appendChild(option);
    }
    librarySelector.value=input.id;
    librarySelector.hidden=false;
    loadWordsData(WORD_SETS[state.activeType]);
    document.title=`${input.name} · ${WORD_TYPE_LABELS[state.activeType]}练习`;
    document.getElementById('vocabularyLoader').hidden=true;
    try {
        localStorage.setItem('vocab_selected_dataset_v1',input.id);
        localStorage.setItem(`vocab_dataset_cache_v1_${input.id}`,JSON.stringify(input));
        localStorage.setItem('vocab_last_dataset_v1',JSON.stringify(input));
        const cached=JSON.parse(localStorage.getItem('vocab_dataset_choices_v1') || '[]');
        const choices=Array.isArray(cached) ? cached.filter(entry=>entry && entry.id!==input.id) : [];
        choices.push({id:input.id,name:input.name});
        localStorage.setItem('vocab_dataset_choices_v1',JSON.stringify(choices));
    } catch (_) {}
    closeVocabularyPicker();
}

function closeVocabularyPicker() {
    document.getElementById('vocabularyPicker').hidden=true;
    document.getElementById('chooseVocabularyBtn').setAttribute('aria-expanded','false');
}

function openVocabularyPicker() {
    const panel=document.getElementById('vocabularyPicker');
    if (!panel.hidden) { closeVocabularyPicker(); return; }
    const entries=new Map(datasetCatalog.map(entry=>[entry.id,entry.name]));
    try {
        const cached=JSON.parse(localStorage.getItem('vocab_dataset_choices_v1') || '[]');
        if (Array.isArray(cached)) for (const entry of cached) {
            if (entry && typeof entry.id==='string' && typeof entry.name==='string' && !entries.has(entry.id)) entries.set(entry.id,entry.name);
        }
    } catch (_) {}
    const selector=document.getElementById('datasetSelect');
    selector.replaceChildren();
    if (!entries.size) {
        const option=document.createElement('option');option.value='';option.textContent='请先从本地文件添加词库';selector.appendChild(option);
    } else for (const [id,name] of entries) {
        const option=document.createElement('option');option.value=id;option.textContent=name;selector.appendChild(option);
    }
    selector.value=state.dataLoaded ? activeDatasetId : (datasetCatalog[0]?.id || '');
    selector.hidden=false;
    panel.hidden=false;
    document.getElementById('chooseVocabularyBtn').setAttribute('aria-expanded','true');
    document.getElementById('vocabularyPickerHint').textContent=window.location.protocol==='file:' ?
        '本地双击模式可自动切换已添加的词库；新词库需选择文件一次。使用本地 HTTP 或 GitHub Pages 可直接读取清单。' :
        '选择后自动加载，普通错题、永久错题和累计次数均按词库独立保存。';
}

async function fetchJson(url) {
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),15000);
    try {
        const response=await fetch(url,{signal:controller.signal,cache:'no-cache'});
        if (!response.ok) throw new Error(`读取失败（HTTP ${response.status}）`);
        return await response.json();
    } finally { clearTimeout(timeout); }
}

async function loadCatalogDataset(id) {
    const entry=datasetCatalog.find(item=>item.id===id);
    const request=++datasetLoadSequence;
    if (!entry || window.location.protocol==='file:') {
        try {
            const cached=localStorage.getItem(`vocab_dataset_cache_v1_${id}`);
            if (!cached) throw new Error('该词库尚未在本地加载，请点击“从本地文件添加”选择一次。');
            const data=JSON.parse(cached);
            if (data.id!==id) throw new Error('缓存词库 ID 不匹配。');
            installDataset(data);
        } catch (error) {
            document.getElementById('datasetSelect').value=activeDatasetId;
            showVocabularyMessage(error.message,true);
        }
        return;
    }
    const selector=document.getElementById('datasetSelect');
    selector.disabled=true;
    clearTimeout(autoNextTimer);
    stopQuestionCountdown();
    showVocabularyMessage('正在加载词库…');
    try {
        const input=await fetchJson(entry.url);
        if (request!==datasetLoadSequence) return;
        if (input.id!==entry.id) throw new Error('词库 ID 与清单不一致。');
        installDataset(input);
    } catch (error) {
        if (request!==datasetLoadSequence) return;
        showVocabularyMessage(`加载失败：${error.message}。可重试，或选择本地词库 JSON。`,true);
        selector.value=activeDatasetId;
        if (state.dataLoaded) {skipNextCountdown=true;renderAll();}
    } finally { if (request===datasetLoadSequence) selector.disabled=false; }
}

async function initializeVocabulary() {
    if (window.location.protocol==='file:') {
        try {
            const cached=localStorage.getItem('vocab_last_dataset_v1');
            if (cached) { installDataset(JSON.parse(cached)); return; }
        } catch (_) {}
        showVocabularyMessage('本地首次使用：点击“选择词库”→“从本地文件添加”，选择 data 文件夹中的 JSON。之后可从菜单直接切换；学习备份仍使用“恢复备份”。');
        return;
    }
    const request=++datasetLoadSequence;
    showVocabularyMessage('正在加载词库清单…');
    try {
        const catalogUrl=new URL('./data/catalog.json',window.location.href);
        const catalog=await fetchJson(catalogUrl.href);
        if (request!==datasetLoadSequence) return;
        if (!catalog || catalog.format!=='vocabulary-catalog' || catalog.version!==1 ||
            !Array.isArray(catalog.datasets) || !catalog.datasets.length) throw new Error('词库清单格式不正确。');
        const ids=new Set();
        datasetCatalog=catalog.datasets.map(entry=>{
            if (!entry || typeof entry.id !== 'string' || !/^[a-z0-9][a-z0-9-]{0,63}$/.test(entry.id||'') || ids.has(entry.id) ||
                typeof entry.file!=='string' || typeof entry.name!=='string') throw new Error('词库清单条目不正确。');
            const url=new URL(entry.file,catalogUrl);
            if (url.origin!==catalogUrl.origin) throw new Error('词库应使用同站点的相对路径。');
            ids.add(entry.id);return {...entry,url:url.href};
        });
        const selector=document.getElementById('datasetSelect');selector.replaceChildren();
        for (const entry of datasetCatalog) {
            const option=document.createElement('option');option.value=entry.id;option.textContent=entry.name;selector.appendChild(option);
        }
        selector.hidden=false;
        if (!ids.has(catalog.defaultDataset)) throw new Error('清单中找不到默认词库。');
        let selected=catalog.defaultDataset;
        try { const saved=localStorage.getItem('vocab_selected_dataset_v1'); if (ids.has(saved)) selected=saved; } catch (_) {}
        await loadCatalogDataset(selected);
    } catch (error) {
        if (request===datasetLoadSequence) showVocabularyMessage(`加载失败：${error.message}。请重试或选择本地词库 JSON。`,true);
    }
}

async function importVocabularyFile(event) {
    const file=event.target.files?.[0];
    if (!file) return;
    ++datasetLoadSequence;
    document.getElementById('datasetSelect').disabled=false;
    clearTimeout(autoNextTimer);
    stopQuestionCountdown();
    try {
        const input=JSON.parse((await file.text()).replace(/^\uFEFF/,''));
        installDataset(input);
    } catch (error) {
        showVocabularyMessage(`词库未替换：${error.message}`,true);
        if (state.dataLoaded) { skipNextCountdown=true;renderAll(); }
    } finally { event.target.value=''; }
}

        // ================================================================
        //  核心状态
        // ================================================================
        const state = {
            activeType: 'verb',
            soundEnabled: false,
            words: [],
            questions: [],
            currentIndex: 0,
            errorWords: [],
            isReviewMode: false,
            isPermanentReviewMode: false,
            permanentErrors: Object.create(null),
            dataLoaded: false,
        };

        // ================================================================
        //  工具函数
        // ================================================================
        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        // 简单难度：避开相近释义，让正确答案和各个干扰项都容易区分。
        const SEMANTIC_GROUPS = [
            ['接受','接收','认可','承认','同意','允许','批准','答应'],
            ['建议','提议','推荐','主张','劝告','鼓励','敦促'],
            ['改变','变化','转换','转变','调整','修改','改进','改善','改革'],
            ['开始','启动','开始做','发起','建立','创立','创建'],
            ['结束','完成','停止','终止','取消','放弃','退出'],
            ['包括','包含','组成','构成','涉及','涵盖'],
            ['影响','作用','导致','引起','造成','产生'],
            ['发现','找到','寻找','探索','调查','研究','检查'],
            ['解释','说明','描述','表达','阐明','证明'],
            ['显示','表明','展示','呈现','表现','证明'],
            ['选择','决定','判断','考虑','决定做'],
            ['需要','要求','请求','需求','依赖'],
            ['提供','给予','供应','支持','帮助','协助'],
            ['保护','保存','维持','保持','防止','避免'],
            ['增加','提高','提升','增长','扩大','加强'],
            ['减少','降低','下降','缩小','削弱'],
            ['移动','搬运','运输','转移','迁移'],
            ['参加','参与','出席','加入','进入'],
            ['获得','得到','取得','赢得','赚取','收集'],
            ['失去','丢失','错过','失败','放弃'],
            ['使用','利用','应用','操作','采用'],
            ['制造','生产','创造','建造','制作','开发'],
            ['买','购买','支付','花费','消费'],
            ['卖','销售','出售','交易'],
            ['说','谈论','讨论','提到','告诉','回答','询问'],
            ['看','观察','观看','检查','注意','注视'],
            ['想','认为','相信','猜测','假设','意识到'],
            ['学习','研究','练习','训练','教育','教'],
            ['记住','记忆','忘记','提醒'],
            ['旅行','到达','离开','返回','参观','访问'],
            ['居住','生活','住','停留'],
            ['帮助','协助','支持','服务','照顾'],
            ['需要','缺少','缺乏','拥有','包括'],
            ['同意','赞成','认可','反对','拒绝'],
            ['允许','禁止','阻止','避免','防止'],
            ['借','借给','借用','归还','还'],
            ['赢','获胜','击败','战胜','输','失败'],
            ['比较','区别','区分','不同','相似'],
            ['连接','联系','关联','结合','分离','分开'],
            ['增加','加','添加','加入','减少','删除','移除'],
            ['发送','寄','传送','发送给','收到','接收'],
            ['建造','建设','建立','创立','创建','发展'],
            ['破坏','损坏','毁坏','伤害','伤'],
            ['修理','维修','解决','处理','恢复'],
            ['发生','出现','存在','产生','发展'],
            ['变化','不同','相同','相似','区别'],
            ['工作','工作于','经营','管理','处理'],
            ['领导','管理','控制','指导','带领'],
            ['控制','管理','限制','阻止','允许'],
            ['展示','显示','出现','隐藏','遮盖'],
            ['理解','了解','认识','意识','知道'],
            ['记得','记住','提醒','忘记'],
            ['希望','期待','计划','打算','想要'],
            ['决定','选择','计划','安排','考虑'],
            ['尝试','努力','练习','测试','实验'],
            ['检查','测试','调查','研究','分析'],
            ['预测','预期','估计','猜测','计划'],
            ['解释','回答','解决','说明'],
            ['保护','攻击','防御','伤害'],
            ['同意','承认','接受','拒绝','否认'],
            ['邀请','欢迎','接待','访问','参加'],
            ['返回','回来','恢复','归还','返回到'],
            ['离开','逃离','退出','消失'],
            ['继续','保持','停止','暂停','结束'],
            ['打开','关闭','关掉','启动','停止'],
            ['发展','增长','进步','改善','提高'],
            ['成功','失败','赢','获胜','完成'],
            ['获得','提供','给予','接受','收到'],
            ['创造','发明','发现','制造','生产']
        ];

        const SEMANTIC_INDEX = new Map();
        SEMANTIC_GROUPS.forEach((group, gi) => {
            group.forEach(term => {
                if (!SEMANTIC_INDEX.has(term)) SEMANTIC_INDEX.set(term, []);
                SEMANTIC_INDEX.get(term).push(gi);
            });
        });

        function cnTerms(text) {
            return (text || '')
                .replace(/[；;，,、/|（）()\[\]【】]/g, ' ')
                .split(/\s+/)
                .map(x => x.trim())
                .filter(x => x.length >= 1);
        }

        function chineseMeaningSimilarity(a, b) {
            const termsA = cnTerms(a);
            const termsB = cnTerms(b);
            const charsA = [...a].filter(ch => /[\u4e00-\u9fff]/.test(ch));
            const charsB = [...b].filter(ch => /[\u4e00-\u9fff]/.test(ch));
            const setA = new Set(charsA);
            const setB = new Set(charsB);
            const sharedChars = [...setA].filter(ch => setB.has(ch)).length;

            let groupBonus = 0;
            for (const ta of termsA) {
                const groupsA = SEMANTIC_INDEX.get(ta) || [];
                for (const tb of termsB) {
                    const groupsB = SEMANTIC_INDEX.get(tb) || [];
                    if (groupsA.some(g => groupsB.includes(g))) groupBonus = Math.max(groupBonus, 18);
                }
            }

            // 直接共享较长中文词，比单个汉字重合更有意义。
            let phraseBonus = 0;
            for (const ta of termsA) {
                for (const tb of termsB) {
                    if (ta.length >= 2 && tb.length >= 2 && (ta.includes(tb) || tb.includes(ta))) {
                        phraseBonus = Math.max(phraseBonus, 12);
                    }
                }
            }

            return sharedChars * 3 + groupBonus + phraseBonus;
        }

        function getDistractors(correctWord, allWords, count = 3) {
            const selected = [];
            const meanings = [correctWord.cn.trim()];
            const candidates = shuffle(allWords.filter(w =>
                w.en !== correctWord.en && w.cn && w.cn.trim() !== correctWord.cn.trim()
            ));

            // 每加入一个选项，都与已有的全部选项比较，而不只比较正确答案。
            // 先选完全不同的释义；候选不足时允许少量单字重合，仍排除近义和包含关系。
            for (const threshold of [0, 3, 6]) {
                for (const word of candidates) {
                    const meaning = word.cn.trim();
                    if (meanings.includes(meaning)) continue;
                    if (meanings.some(existing =>
                        chineseMeaningSimilarity(existing, meaning) > threshold
                    )) continue;
                    selected.push(meaning);
                    meanings.push(meaning);
                    if (selected.length === count) return selected;
                }
            }
            return selected;
        }

        function generateOptions(correctWord, allWords) {
            const distractors = getDistractors(correctWord, allWords, 3);
            const opts = [correctWord.cn, ...distractors];
            while (opts.length < 4) opts.push('——');
            return shuffle(opts);
        }

        // ---------- 本地 Cookie 持久化 ----------
        function scopedStorageKey(kind, type = state.activeType) {
            const suffix = activeDatasetId === DEFAULT_DATASET_ID ? '' : `_${activeDatasetId}`;
            return `vocab_mcq_${kind}_${type}${suffix}`;
        }
        function storageKey() { return scopedStorageKey('state_v4'); }
        function errorCookieKey() { return scopedStorageKey('errors_v4'); }
        const COOKIE_DAYS = 30;

        function persistProgress(payload) {
            try {
                localStorage.setItem(storageKey(), JSON.stringify(payload));
                cookieDelete(storageKey());
                cookieDelete(errorCookieKey());
                return true;
            } catch (_) {
                const notice = document.getElementById('storageNotice');
                notice.textContent = '浏览器无法长期保存学习数据，请允许本地存储，并使用“导出备份”保留记录。';
                notice.hidden = false;
                // 存储被禁用时仍保留旧版的短期兜底，页面会明确提示。
                cookieSet(storageKey(), JSON.stringify(payload));
                cookieSet(errorCookieKey(), payload.e);
                return false;
            }
        }


        // 永久错题按词性独立存储，无过期时间，不参与重置学习进度。
        function permanentErrorKey() { return scopedStorageKey('permanent_errors_v1'); }
        function savePermanentErrors() {
            try {
                localStorage.setItem(permanentErrorKey(), JSON.stringify(state.permanentErrors));
                document.getElementById('storageNotice').hidden = true;
            } catch (_) {
                const notice = document.getElementById('storageNotice');
                notice.textContent = '当前浏览器无法保存永久错题，请允许本地存储后再练习。本次记录暂保留在页面中。';
                notice.hidden = false;
            }
        }
        function loadPermanentErrors() {
            const records = Object.create(null);
            try {
                const saved = JSON.parse(localStorage.getItem(permanentErrorKey()) || '{}');
                if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
                    Object.entries(saved).forEach(([word, count]) => {
                        if (Number.isSafeInteger(count) && count > 0) records[word] = count;
                    });
                }
            } catch (_) {}
            state.permanentErrors = records;
            // 原错题没有历史次数，首次迁入按至少答错过一次记录，以后逐次累加。
            const saved = loadLocalState();
            const errors = decodeBits(saved ? saved.e : cookieGet(errorCookieKey()), state.words.length);
            let migrated = false;
            state.words.forEach((word, index) => {
                if (errors[index] && !records[word.en]) {
                    records[word.en] = 1;
                    migrated = true;
                }
            });
            if (migrated) savePermanentErrors();
        }
        function permanentReviewWords() {
            return state.words.filter(word => state.permanentErrors[word.en] > 0)
                .sort((a, b) => state.permanentErrors[b.en] - state.permanentErrors[a.en]);
        }


        // Cookie 仅用于迁移旧版记录，以及本地存储不可用时的短期兜底。
        // 使用 expires + max-age 双保险，并统一 path=/。
        function cookieSet(name, value, days = COOKIE_DAYS) {
            const encoded = encodeURIComponent(value);
            const maxAge = Math.max(0, Math.floor(days * 86400));
            const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
            document.cookie = `${name}=${encoded}; expires=${expires}; max-age=${maxAge}; path=/; SameSite=Lax`;
        }
        function cookieDelete(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; path=/; SameSite=Lax`;
        }
        function cookieGet(name) {
            const prefix = name + '=';
            const parts = document.cookie ? document.cookie.split(';') : [];
            const found = parts.map(v => v.trim()).find(row => row.startsWith(prefix));
            if (!found) return null;
            try { return decodeURIComponent(found.slice(prefix.length)); } catch (_) { return null; }
        }
        function encodeBits(bits) {
            const bytes = new Uint8Array(Math.ceil(bits.length / 8));
            bits.forEach((v, i) => { if (v) bytes[i >> 3] |= 1 << (i & 7); });
            let binary = '';
            bytes.forEach(b => binary += String.fromCharCode(b));
            return btoa(binary);
        }
        function decodeBits(str, length) {
            const bits = Array(length).fill(false);
            if (!str) return bits;
            try {
                const binary = atob(str);
                for (let i = 0; i < length; i++) {
                    const byte = binary.charCodeAt(i >> 3) || 0;
                    bits[i] = !!(byte & (1 << (i & 7)));
                }
            } catch (_) {}
            return bits;
        }
        function saveLocalState() {
            if (!state.words.length) return;

            const indexMap = new Map(state.words.map((w, i) => [w.en, i]));
            const saved = loadLocalState();
            const correct = saved ? decodeBits(saved.c, state.words.length) : state.words.map(() => false);
            const wrong = saved ? decodeBits(saved.w, state.words.length) : state.words.map(() => false);

            // 错题集合单独维护：正常答对不会误删历史错题；
            // 只有在“错题本”中重新答对时，才从错题本移除。
            let errorBits = saved ? decodeBits(saved.e, state.words.length) : state.words.map(() => false);

            state.questions.forEach(q => {
                const i = indexMap.get(q.en);
                if (i === undefined || q.result === null) return;

                if (state.isPermanentReviewMode) {
                    // 永久复习不改写普通练习进度；答错仍加入原错题本。
                    if (q.result === 'wrong') errorBits[i] = true;
                } else if (state.isReviewMode) {
                    // 错题本模式：答对=移除，答错=保留。
                    if (q.result === 'correct') errorBits[i] = false;
                    if (q.result === 'wrong') errorBits[i] = true;
                } else {
                    // 普通练习：记录答题结果；若答错则加入错题本。
                    if (q.result === 'correct') {
                        correct[i] = true;
                        wrong[i] = false;
                    } else if (q.result === 'wrong') {
                        correct[i] = false;
                        wrong[i] = true;
                        errorBits[i] = true;
                    }
                }
            });

            // 以 errorBits 为唯一来源重建错题集合，避免刷新后丢失。
            state.errorWords = state.words.filter((_, i) => errorBits[i]);

            const payload = {
                v: 3,
                n: state.words.length,
                first: state.words[0].en,
                last: state.words[state.words.length - 1].en,
                c: encodeBits(correct),
                w: encodeBits(wrong),
                e: encodeBits(errorBits),
                // 当前模式只用于恢复页面位置；错题数据本身独立保存。
                mode: state.isReviewMode,
                permanentMode: state.isPermanentReviewMode,
                idx: state.currentIndex,
                wordOrder: state.words.map(word => word.en),
                savedAt: Date.now()
            };

            // 普通进度和普通错题也无到期时间保存，永久错题另存、重置时保留。
            persistProgress(payload);
        }
        function loadLocalState() {
            let raw = null;
            try { raw = localStorage.getItem(storageKey()); } catch (_) {}
            let fromCookie = !raw;
            if (!raw) raw = cookieGet(storageKey());
            let p = null;
            if (raw) {
                try {
                    p = JSON.parse(raw);
                } catch (_) {
                    p = null;
                }
            }

            // 如果主 Cookie 正常存在但版本是旧版，兼容读取 v2。
            if (!p && state.activeType === 'verb' && activeDatasetId === DEFAULT_DATASET_ID) {
                const legacyRaw = cookieGet('vocab_mcq_state_v3') || cookieGet('vocab_mcq_state_v2');
                if (legacyRaw) {
                    try { p = JSON.parse(legacyRaw); } catch (_) { p = null; }
                }
            }

            if (p && fromCookie) {
                const oldErrors = cookieGet(errorCookieKey()) ||
                    (state.activeType === 'verb' && activeDatasetId === DEFAULT_DATASET_ID ? cookieGet('vocab_mcq_errors_v3') : null);
                if (oldErrors) p.e = oldErrors;
            }
            const aligned = alignProgress(p, state.words, PREVIOUS_WORD_ORDERS[state.activeType]);
            if (!aligned) return null;
            if (fromCookie || !p.wordOrder || p.wordOrder.join('\n') !== aligned.wordOrder.join('\n')) persistProgress(aligned);
            p = aligned;
            return p;
        }

        const BACKUP_FORMAT = 'vocab-practice-backup';
        function collectBackup() {
            saveLocalState();
            const types = {};
            for (const type of Object.keys(WORD_SETS)) {
                const progressKey = scopedStorageKey('state_v4', type);
                const errorsKey = scopedStorageKey('errors_v4', type);
                let raw = localStorage.getItem(progressKey);
                let progress = raw ? JSON.parse(raw) : null;
                // 尚未切换到的旧词类也纳入备份，避免只备份当前词类。
                if (!progress) {
                    raw = cookieGet(progressKey) || (type === 'verb' && activeDatasetId === DEFAULT_DATASET_ID ?
                        cookieGet('vocab_mcq_state_v3') || cookieGet('vocab_mcq_state_v2') : null);
                    if (raw) {
                        progress = JSON.parse(raw);
                        const errors = cookieGet(errorsKey) ||
                            (type === 'verb' && activeDatasetId === DEFAULT_DATASET_ID ? cookieGet('vocab_mcq_errors_v3') : null);
                        if (errors) progress.e = errors;
                    }
                }
                const permanent = type === state.activeType ? { ...state.permanentErrors } :
                    JSON.parse(localStorage.getItem(scopedStorageKey('permanent_errors_v1', type)) || '{}');
                types[type] = { progress, permanent };
            }
            return { format: BACKUP_FORMAT, version: 1, datasetId: activeDatasetId, exportedAt: new Date().toISOString(), types };
        }

        function exportBackup() {
            if (!state.dataLoaded) { alert('请先加载词库，再导出学习备份。'); return; }
            try {
                const backup = collectBackup();
                const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `单词学习备份-${new Date().toISOString().slice(0, 10)}.json`;
                link.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            } catch (_) {
                alert('备份导出失败，请确认浏览器允许读取本地存储后重试。');
            }
        }

        function restoreBackupData(backup) {
            if (!backup || backup.format !== BACKUP_FORMAT || backup.version !== 1 ||
                !backup.types || typeof backup.types !== 'object' || Array.isArray(backup.types)) {
                throw new Error('不是有效的单词学习备份文件。');
            }
            if ((backup.datasetId || DEFAULT_DATASET_ID) !== activeDatasetId) {
                throw new Error('这份备份属于另一词库，请先加载对应的词库 JSON。');
            }
            const updates = [];
            for (const [type, data] of Object.entries(backup.types)) {
                if (!Object.prototype.hasOwnProperty.call(WORD_SETS, type)) throw new Error('备份包含未知词类。');
                if (!data || typeof data !== 'object' || !data.permanent ||
                    typeof data.permanent !== 'object' || Array.isArray(data.permanent)) throw new Error('错题数据格式错误。');
                const key = scopedStorageKey('permanent_errors_v1', type);
                const merged = Object.assign(Object.create(null), JSON.parse(localStorage.getItem(key) || '{}'));
                for (const [word, count] of Object.entries(data.permanent)) {
                    if (!/^[a-z]+(?:[ -][a-z]+)*$/i.test(word) || !Number.isSafeInteger(count) || count <= 0) {
                        throw new Error('错题次数格式错误。');
                    }
                    merged[word] = Math.max(merged[word] || 0, count);
                }
                updates.push([key, JSON.stringify(merged)]);
                if (data.progress !== null && data.progress !== undefined) {
                    const p = alignProgress(data.progress, WORD_SETS[type], PREVIOUS_WORD_ORDERS[type]);
                    if (!p) throw new Error('学习进度与当前词库不匹配或数据不完整。');
                    updates.push([scopedStorageKey('state_v4', type), JSON.stringify(p)]);
                }
            }
            if (!updates.length) throw new Error('备份文件没有学习数据。');
            const originals = updates.map(([key]) => [key, localStorage.getItem(key)]);
            try {
                for (const [key, value] of updates) localStorage.setItem(key, value);
            } catch (error) {
                for (const [key, value] of originals) {
                    if (value === null) localStorage.removeItem(key);
                    else localStorage.setItem(key, value);
                }
                throw error;
            }
            clearTimeout(autoNextTimer);
            stopQuestionCountdown();
            loadWordsData(WORD_SETS[state.activeType]);
        }

        async function importBackupFile(event) {
            const input = event.target;
            const file = input.files && input.files[0];
            if (!file) return;
            stopQuestionCountdown();
            clearTimeout(autoNextTimer);
            try {
                const backup = JSON.parse(await file.text());
                if (confirm('恢复备份中的学习进度？永久错题会合并，同一单词次数取较大值，不会减少。')) {
                    restoreBackupData(backup);
                    alert('备份已恢复。');
                }
            } catch (error) {
                alert('无法恢复备份：' + (error.message || '文件格式或存储异常'));
            } finally {
                input.value = '';
                renderAll();
            }
        }

        function buildQuestions(wordList, allWords) {
            return wordList.map((w) => ({
                en: w.en,
                cn: w.cn,
                // 按需生成：避免切换到 2,000 个名词时一次性计算所有题目的选项。
                options: null,
                userAnswer: null,
                result: null,
            }));
        }

        // ================================================================
        //  核心函数
        // ================================================================
        function restoreLocalState() {
            const saved = loadLocalState();
            if (!saved) return false;
            const correct = decodeBits(saved.c, state.words.length);
            const wrong = decodeBits(saved.w, state.words.length);
            const errors = decodeBits(saved.e, state.words.length);
            state.errorWords = state.words.filter((_, i) => errors[i]);
            state.isPermanentReviewMode = !!saved.permanentMode && permanentReviewWords().length > 0;
            state.isReviewMode = !state.isPermanentReviewMode && !!saved.mode && state.errorWords.length > 0;
            let pool = state.isPermanentReviewMode ? permanentReviewWords() :
                state.isReviewMode ? [...state.errorWords] : [...state.words];
            state.questions = buildQuestions(pool, state.words);
            // 错题本进入“重新复习”状态时必须允许再次作答，而不是沿用上次的锁定状态。
            if (!state.isReviewMode && !state.isPermanentReviewMode) {
                const statusMap = new Map(state.words.map((w, i) => [w.en, i]));
                state.questions.forEach(q => {
                    const i = statusMap.get(q.en);
                    if (i !== undefined) {
                        if (correct[i]) q.result = 'correct';
                        else if (wrong[i]) q.result = 'wrong';
                    }
                });
            }
            // 普通练习严格按照 Word 去重后的原始顺序恢复：
            // 已做 N 题 -> 刷新后从第 N+1 题开始。
            if (!state.isReviewMode && !state.isPermanentReviewMode) {
                const completedCount = correct.reduce((sum, v, i) => sum + (v || wrong[i] ? 1 : 0), 0);
                state.currentIndex = Math.min(completedCount, Math.max(0, state.questions.length - 1));
            } else {
                state.currentIndex = Math.min(Number(saved.idx) || 0, Math.max(0, state.questions.length - 1));
            }
            return true;
        }

        function initPractice() {
            skipNextCountdown = true;
            if (!state.dataLoaded || state.words.length === 0) {
                renderEmptyState();
                return;
            }

            // 普通练习不随机：始终按照 Word 文件去重后的原始顺序。
            let pool = [...state.words];

            if (state.isPermanentReviewMode) {
                pool = permanentReviewWords();
            } else if (state.isReviewMode && state.errorWords.length > 0) {
                // 错题本也保持原始单词顺序，方便复习。
                const errorSet = new Set(state.errorWords.map(w => w.en));
                pool = state.words.filter(w => errorSet.has(w.en));
                if (pool.length === 0) {
                    alert('错题本为空！');
                    state.isReviewMode = false;
                    pool = [...state.words];
                }
            }

            if (pool.length === 0) {
                pool = [...state.words];
            }

            state.questions = buildQuestions(pool, state.words);

            if (state.isReviewMode || state.isPermanentReviewMode) {
                // 两种错题复习都从第一题开始。
                state.currentIndex = 0;
            } else {
                // 返回全部题目时，不清零进度：直接回到第一个未完成单词。
                const saved = loadLocalState();
                if (saved) {
                    const correct = decodeBits(saved.c, state.words.length);
                    const wrong = decodeBits(saved.w, state.words.length);
                    const completedCount = correct.reduce((sum, v, i) => sum + (v || wrong[i] ? 1 : 0), 0);
                    state.currentIndex = Math.min(completedCount, Math.max(0, state.questions.length - 1));
                    state.questions.forEach(q => {
                        const i = state.words.findIndex(w => w.en === q.en);
                        if (i >= 0) {
                            if (correct[i]) q.result = 'correct';
                            else if (wrong[i]) q.result = 'wrong';
                        }
                    });
                } else {
                    state.currentIndex = 0;
                }
            }

            renderAll();
        }

        function renderEmptyState() {
            stopQuestionCountdown();
            document.getElementById('questionCountdown').hidden = true;
            document.getElementById('wordDisplay').textContent = '📂 请先导入单词数据';
            document.getElementById('wordDisplay').className = 'word-display empty';
            document.getElementById('optionsContainer').innerHTML = '';
            document.getElementById('exampleSentence').textContent = '';
            document.getElementById('qNumber').textContent = '第 0 题';
            document.getElementById('qStatus').textContent = '—';
            document.getElementById('qStatus').className = 'q-status';
            document.getElementById('wordCountLabel').innerHTML = '共 <span id="wordCountNum">0</span> 词';
            document.getElementById('progressTabs').innerHTML = '';
            document.getElementById('gridItems').innerHTML = '';
            document.getElementById('progressText').textContent = '';
            document.getElementById('prevBtn').disabled = true;
            document.getElementById('nextBtn').disabled = true;
            document.getElementById('doneCount').textContent = '0';
            document.getElementById('correctCount').textContent = '0';
            document.getElementById('wrongCount').textContent = '0';
            document.getElementById('errorCount').textContent = '0';
        }

        // ================================================================
		//  加载数据
		// ================================================================
		function loadWordsData(data) {
            skipNextCountdown = true;
			if (!Array.isArray(data) || data.length === 0) {
				alert('数据格式错误，请确保是 JSON 数组格式！');
				return;
			}

			if (!data.every(item => item.en && item.cn)) {
				alert('数据格式错误，每个条目需要包含 "en" 和 "cn" 字段！');
				return;
			}

			state.words = data;
			state.dataLoaded = true;
			state.errorWords = [];
			state.isReviewMode = false;
            state.isPermanentReviewMode = false;
            loadPermanentErrors();

			document.getElementById('wordCountNum').textContent = data.length;
			// 删除下面这两行 —— 它们引用了不存在的元素
			// document.getElementById('fileStatus').textContent = `✅ 已加载 ${data.length} 个单词`;
			// document.getElementById('fileStatus').className = 'file-status loaded';

            if (!restoreLocalState()) initPractice();
            else renderAll();
        }

        function switchWordType(type) {
            if (!WORD_SETS[type] || type === state.activeType) return;
            clearTimeout(autoNextTimer);
            saveLocalState();
            state.activeType = type;
            state.questions = [];
            state.currentIndex = 0;
            document.getElementById('wordTypeSelect').value = type;
            loadWordsData(WORD_SETS[type]);
            document.title = `${WORD_TYPE_LABELS[type]}词汇选择题练习`;
        }

        // ================================================================
        //  渲染
        // ================================================================
        function renderAll() {
            renderStats();
            renderTabs();
            renderQuestion();
            renderGrid();
            renderProgressText();
            updateErrorBookUI();
        }

		function renderStats() {
			const total = state.questions ? state.questions.length : 0;
			let done = 0, correct = 0, wrong = 0;
			if (state.questions) {
				state.questions.forEach(q => {
					if (q.result === 'correct') { correct++; done++; }
					if (q.result === 'wrong') { wrong++; done++; }
				});
			}
			document.getElementById('doneCount').textContent = done;
			document.getElementById('correctCount').textContent = correct;
			document.getElementById('wrongCount').textContent = wrong;
			const totalQEl = document.getElementById('totalQ');
			if (totalQEl) totalQEl.textContent = total;
			// ✅ wordCountNum 已经在 loadWordsData 中设置过了，这里不需要重复设置
		}

        function renderTabs() {
            const container = document.getElementById('progressTabs');
            const total = state.questions ? state.questions.length : 0;
            if (total === 0) { container.innerHTML = ''; return; }

            const totalPages = Math.ceil(total / 100);
            let html = '';
            for (let i = 0; i < totalPages; i++) {
                const start = i * 100 + 1;
                const end = Math.min((i + 1) * 100, total);
                const active = state.currentIndex >= i * 100 && state.currentIndex < (i + 1) * 100 ? 'active' : '';
                const doneInRange = state.questions.slice(i * 100, (i + 1) * 100).filter(q => q.result !== null).length;
                html += `<span class="tab ${active}" data-page="${i}">${start}-${end}</span>`;
            }
            container.innerHTML = html;

			container.querySelectorAll('.tab').forEach(el => {
				el.addEventListener('click', function(e) {
					const page = parseInt(e.currentTarget.dataset.page);
					const idx = page * 100;
					if (idx < state.questions.length) {
						clearTimeout(autoNextTimer);
                        skipNextCountdown = true;
						state.currentIndex = idx;
						renderAll();
					}
				});
			});
        }

        function renderQuestion() {
            if (!state.questions || state.questions.length === 0) {
                renderEmptyState();
                return;
            }

            const q = state.questions[state.currentIndex];
            const idx = state.currentIndex;
            const total = state.questions.length;

            // 只生成当前题的四个选项；生成后保留，前后翻页时不会变化。
            if (!Array.isArray(q.options) || q.options.length !== 4) {
                const word = state.words.find(item => item.en === q.en) || q;
                q.options = generateOptions(word, state.words);
            }

            const wordEl = document.getElementById('wordDisplay');
            wordEl.textContent = q.en;
            wordEl.className = 'word-display';
            renderExampleSentence(EXAMPLE_DATA[`${state.activeType}:${q.en}`] || '', q.en);

            document.getElementById('qNumber').textContent = `第 ${idx + 1} 题`;

            const statusEl = document.getElementById('qStatus');
            const history = document.getElementById('errorHistory');
            const errors = state.permanentErrors[q.en] || 0;
            history.hidden = errors === 0;
            history.textContent = errors ? `（累计答错 ${errors} 次）` : '';
            if (state.isPermanentReviewMode && state.questions.every(item => item.result !== null)) {
                statusEl.textContent = '本轮检测完成，可再练一轮';
                statusEl.className = 'q-status answered';
            } else if (state.isReviewMode && state.questions.every(item => item.result !== null)) {
                statusEl.textContent = '🎉 错题复习完成';
                statusEl.className = 'q-status answered';
            } else if (q.result === 'correct') {
                statusEl.textContent = '✅ 回答正确';
                statusEl.className = 'q-status answered';
            } else if (q.result === 'wrong') {
                statusEl.textContent = q.timedOut ? '⏱ 超时，判为错误' : '❌ 回答错误';
                statusEl.className = 'q-status wrong-status';
            } else {
                statusEl.textContent = '未作答';
                statusEl.className = 'q-status';
            }

            const container = document.getElementById('optionsContainer');
            const labels = ['A', 'B', 'C', 'D'];
            let html = '';
            q.options.forEach((opt, i) => {
                let cls = 'option-item';
                if (q.result !== null) {
                    cls += ' disabled';
                    if (opt === q.cn) cls += ' correct';
                    if (q.userAnswer === opt && q.result === 'wrong') cls += ' wrong';
                    if (q.result === 'wrong' && opt === q.cn) cls += ' reveal-correct';
                }
                html += `
                        <div class="${cls}" data-opt="${escapeHtml(opt)}" data-index="${i}">
                            <span class="label">${labels[i]}</span>
                            <span class="text">${escapeHtml(opt)}</span>
                        </div>
                    `;
            });
            container.innerHTML = html;

            if (q.result === null) {
                container.querySelectorAll('.option-item').forEach(el => {
                    el.addEventListener('click', function() {
                        handleAnswer(this.dataset.opt);
                    });
                });
            }

            document.getElementById('prevBtn').disabled = (idx === 0);
            document.getElementById('nextBtn').disabled = (idx === total - 1);
            syncQuestionCountdown(q);
        }

        function renderExampleSentence(sentence, targetWord) {
            const container = document.getElementById('exampleSentence');
            container.textContent = '';
            if (!sentence) return;
            sentence = sentence.replace(/``|''/g, '').replace(/\s+/g, ' ')
                .replace(/([?!])\1+/g, '$1').replace(/;+\./g, '.').trim();
            const pattern = new RegExp(`\\b(${targetWord.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')})\\b`, 'ig');
            let lastIndex = 0;
            sentence.replace(pattern, (match, _group, offset) => {
                container.appendChild(document.createTextNode(sentence.slice(lastIndex, offset)));
                const mark = document.createElement('span');
                mark.className = 'example-target';
                mark.textContent = match;
                container.appendChild(mark);
                lastIndex = offset + match.length;
                return match;
            });
            container.appendChild(document.createTextNode(sentence.slice(lastIndex)));
        }

        function renderGrid() {
            const container = document.getElementById('gridItems');
            if (!state.questions || state.questions.length === 0) {
                container.innerHTML = '';
                return;
            }

            let html = '';
            state.questions.forEach((q, i) => {
                let cls = 'grid-item';
                if (q.result === 'correct') cls += ' correct';
                else if (q.result === 'wrong') cls += ' wrong';
                if (i === state.currentIndex) cls += ' current';
                html += `<div class="${cls}" data-index="${i}">${i + 1}</div>`;
            });
            container.innerHTML = html;

			container.querySelectorAll('.grid-item').forEach(el => {
				el.addEventListener('click', function(e) {
					state.currentIndex = parseInt(e.currentTarget.dataset.index);
					renderAll();
                    saveLocalState();
				});
			});
        }

        function renderProgressText() {
            const total = state.questions ? state.questions.length : 0;
            document.getElementById('progressText').textContent =
                total > 0 ? `${state.currentIndex + 1}` : '';
        }

        function updateErrorBookUI() {
            const permanentBtn = document.getElementById('permanentBookBtn');
            const permanentCount = permanentReviewWords().length;
            permanentBtn.textContent = state.isPermanentReviewMode ? '📚 返回全部题目' : `📚 永久错题 ${permanentCount}`;
            permanentBtn.setAttribute('aria-pressed', String(state.isPermanentReviewMode));
            document.getElementById('permanentReviewBar').hidden = !state.isPermanentReviewMode;
            const done = state.questions.filter(q => q.result !== null).length;
            const correct = state.questions.filter(q => q.result === 'correct').length;
            document.getElementById('permanentReviewInfo').textContent =
                `永久错题检测 · 本轮 ${done}/${state.questions.length} · 答对 ${correct} · 答对或重置均保留`;
            const btn = document.getElementById('errorBookBtn');
            if (state.isReviewMode) {
                btn.innerHTML = '📕 全部题目 <span class="count" id="errorCount">✕</span>';
            } else {
                btn.innerHTML = `📕 错题本 <span class="count" id="errorCount">${state.errorWords.length}</span>`;
            }
        }

        // ================================================================
        //  答题逻辑
        // ================================================================
        const QUESTION_TIME_LIMIT = 8000;
        let skipNextCountdown = true;
        let untimedQuestion = null;
        let questionTimer = null;
        let timedQuestion = null;
        let questionDeadline = 0;

        function stopQuestionCountdown() {
            clearTimeout(questionTimer);
            questionTimer = null;
            timedQuestion = null;
            questionDeadline = 0;
        }

        function syncQuestionCountdown(q) {
            const display = document.getElementById('questionCountdown');
            const progress = document.getElementById('questionTimeProgress');
            const label = document.getElementById('countdownLabel');
            if (skipNextCountdown) {
                skipNextCountdown = false;
                untimedQuestion = q;
            } else if (untimedQuestion !== q) {
                untimedQuestion = null;
            }
            if (untimedQuestion === q && q.result === null) {
                stopQuestionCountdown();
                display.hidden = true;
                label.textContent = '';
                progress.value = QUESTION_TIME_LIMIT / 1000;
                return;
            }
            if (q.result !== null) {
                stopQuestionCountdown();
                display.hidden = !q.timedOut;
                progress.value = 0;
                label.textContent = q.timedOut ? '0 秒' : '';
                display.className = 'question-countdown' + (q.timedOut ? ' urgent' : '');
                return;
            }
            // 同一题重绘不重置时间，翻题、切换练习或再练一轮才重新计时。
            if (timedQuestion === q) return;
            stopQuestionCountdown();
            timedQuestion = q;
            questionDeadline = Date.now() + QUESTION_TIME_LIMIT;
            function tick() {
                if (timedQuestion !== q || state.questions[state.currentIndex] !== q || q.result !== null) return;
                const remaining = questionDeadline - Date.now();
                display.hidden = false;
                progress.value = Math.max(0, remaining / 1000);
                label.textContent = `${Math.max(0, Math.ceil(remaining / 1000))} 秒`;
                display.className = 'question-countdown' + (remaining <= 2000 ? ' urgent' : '');
                if (remaining <= 0) {
                    handleAnswer(null, true);
                    return;
                }
                questionTimer = setTimeout(tick, Math.min(200, remaining));
            }
            tick();
        }

        let autoNextTimer = null;
        let toastTimer = null;
        function showAnswerToast(message, isWrong = false) {
            const toast = document.getElementById('answerToast');
            if (!toast) return;
            clearTimeout(toastTimer);
            toast.textContent = message;
            toast.className = 'answer-toast' + (isWrong ? ' wrong-toast' : '') + ' show';
            toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
        }

        function speakWord(word) {
            if (!word || !('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.82;
            window.speechSynthesis.speak(utterance);
        }

        function speakCurrentWord() {
            const q = state.questions[state.currentIndex];
            if (q) speakWord(q.en);
        }

        function updateSoundButton() {
            const btn = document.getElementById('soundToggle');
            btn.textContent = state.soundEnabled ? '🔊 声音开' : '🔇 声音关';
            btn.setAttribute('aria-pressed', String(state.soundEnabled));
        }

        function toggleSound() {
            state.soundEnabled = !state.soundEnabled;
            try { localStorage.setItem('vocab_sound_enabled', state.soundEnabled ? '1' : '0'); } catch (_) {}
            updateSoundButton();
            if (state.soundEnabled) speakCurrentWord();
            else if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        }

        function handleAnswer(selected, timedOut = false) {
            const q = state.questions[state.currentIndex];
            if (!q || q.result !== null) return;
            // 后台标签页的计时回调可能延迟；到期后的点击也按超时处理。
            if (timedQuestion === q && Date.now() >= questionDeadline) timedOut = true;
            stopQuestionCountdown();
            q.timedOut = timedOut;
            if (timedOut) selected = null;
            q.userAnswer = selected;
            if (selected === q.cn) {
                q.result = 'correct';
                // 错题复习时答对，自动从错题本移除。
                if (state.isReviewMode) state.errorWords = state.errorWords.filter(w => w.en !== q.en);
                showAnswerToast('✅ 回答正确');
            } else {
                q.result = 'wrong';
                state.permanentErrors[q.en] = (state.permanentErrors[q.en] || 0) + 1;
                savePermanentErrors();
                const wordObj = state.words.find(w => w.en === q.en);
                if (wordObj && !state.errorWords.some(w => w.en === q.en)) state.errorWords.push(wordObj);
                showAnswerToast(timedOut ? '⏱ 8 秒已到，自动判错，正确答案已标出' : '❌ 回答错误，正确答案已标出', true);
            }
            saveLocalState();
            renderAll();

            // 只有答对才自动进入下一题；答错后停留在当前题方便看答案。
            if (q.result === 'correct' && state.currentIndex < state.questions.length - 1) {
                clearTimeout(autoNextTimer);
                autoNextTimer = setTimeout(() => {
                    state.currentIndex++;
                    renderAll();
                    saveLocalState();
                    if (state.soundEnabled) speakCurrentWord();
                }, 500);
            }
        }

        // ================================================================
        //  导航
        // ================================================================
        function goToPrev() {
            clearTimeout(autoNextTimer);
            if (state.currentIndex > 0 && state.questions.length > 0) {
                state.currentIndex--;
                renderAll();
                saveLocalState();
            }
        }

        function goToNext() {
            clearTimeout(autoNextTimer);
            if (state.currentIndex < state.questions.length - 1 && state.questions.length > 0) {
                state.currentIndex++;
                renderAll();
                saveLocalState();
                if (state.soundEnabled) speakCurrentWord();
            }
        }

        // ================================================================
        //  重置
        // ================================================================
        function resetAll() {
            if (state.words.length === 0) {
                alert('请先导入单词数据！');
                return;
            }
            if (confirm('确定要重置学习进度和普通错题本吗？永久错题和累计答错次数会保留。')) {
                try { localStorage.removeItem(storageKey()); } catch (_) {
                    alert('浏览器阻止清除本地进度，本次未重置。');
                    return;
                }
                clearTimeout(autoNextTimer);
                state.errorWords = [];
                state.isReviewMode = false;
                state.isPermanentReviewMode = false;
                state.questions = [];
                cookieDelete(storageKey());
                cookieDelete(errorCookieKey());
                if (state.activeType === 'verb' && activeDatasetId === DEFAULT_DATASET_ID) {
                    cookieDelete('vocab_mcq_state_v3');
                    cookieDelete('vocab_mcq_errors_v3');
                    cookieDelete('vocab_mcq_state_v2');
                }
                initPractice();
                saveLocalState();
            }
        }

        // ================================================================
        //  错题本切换
        // ================================================================
        function toggleErrorBook() {
            clearTimeout(autoNextTimer);
            if (!state.dataLoaded || !state.words.length) return;
            if (!state.isReviewMode && state.errorWords.length === 0) {
                alert('错题本为空，请先做题积累错题！');
                return;
            }
            saveLocalState();
            state.isReviewMode = !state.isReviewMode;
            state.isPermanentReviewMode = false;
            initPractice();
            saveLocalState();
        }

        function togglePermanentBook() {
            clearTimeout(autoNextTimer);
            if (!state.dataLoaded || !state.words.length) return;
            if (!state.isPermanentReviewMode && permanentReviewWords().length === 0) {
                alert('永久错题本为空，答错的单词会自动收录，并累计答错次数。');
                return;
            }
            saveLocalState();
            state.isPermanentReviewMode = !state.isPermanentReviewMode;
            state.isReviewMode = false;
            initPractice();
            saveLocalState();
        }

        function repeatPermanentReview() {
            if (!state.isPermanentReviewMode) return;
            clearTimeout(autoNextTimer);
            saveLocalState();
            initPractice();
            saveLocalState();
        }

        // ================================================================
        //  网格折叠
        // ================================================================
        function toggleGrid() {
            const container = document.getElementById('gridContainer');
            const btn = document.getElementById('gridToggle');
            container.classList.toggle('open');
            btn.textContent = container.classList.contains('open') ? '📊 收起网格' : '📊 展开网格';
        }

        // ================================================================
        //  键盘快捷键
        // ================================================================
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        });

        // 离开浏览器标签页时停止计时，返回时当前第一题免倒计时。
        document.addEventListener('visibilitychange', () => {
            clearTimeout(autoNextTimer);
            stopQuestionCountdown();
            if (!document.hidden) {
                skipNextCountdown = true;
                renderAll();
            }
        });

        window.addEventListener('beforeunload', saveLocalState);

        // ================================================================
        //  启动
        // ================================================================
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('chooseVocabularyBtn').addEventListener('click', openVocabularyPicker);
            document.getElementById('chooseLocalVocabularyBtn').addEventListener('click', () => document.getElementById('vocabularyFileInput').click());
            document.getElementById('vocabularyFileInput').addEventListener('change', importVocabularyFile);
            document.getElementById('retryVocabularyBtn').addEventListener('click', initializeVocabulary);
            document.getElementById('datasetSelect').addEventListener('change', event => loadCatalogDataset(event.target.value));
            document.getElementById('prevBtn').addEventListener('click', goToPrev);
            document.getElementById('nextBtn').addEventListener('click', goToNext);
            document.getElementById('resetBtn').addEventListener('click', resetAll);
            document.getElementById('exportBackupBtn').addEventListener('click', exportBackup);
            document.getElementById('importBackupBtn').addEventListener('click', () => document.getElementById('backupFileInput').click());
            document.getElementById('backupFileInput').addEventListener('change', importBackupFile);
            document.getElementById('errorBookBtn').addEventListener('click', toggleErrorBook);
            document.getElementById('permanentBookBtn').addEventListener('click', togglePermanentBook);
            document.getElementById('repeatPermanentBtn').addEventListener('click', repeatPermanentReview);
            document.getElementById('gridToggle').addEventListener('click', toggleGrid);
            document.getElementById('wordTypeSelect').addEventListener('change', (event) => switchWordType(event.target.value));
            document.getElementById('speakWordBtn').addEventListener('click', speakCurrentWord);
            document.getElementById('soundToggle').addEventListener('click', toggleSound);
            try { state.soundEnabled = localStorage.getItem('vocab_sound_enabled') === '1'; } catch (_) {}
            updateSoundButton();

            // 从独立 JSON 加载词库。
            initializeVocabulary();
        });
