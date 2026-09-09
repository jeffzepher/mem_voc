
        // ================================================================
        //  数据：去重后的单词
        // ================================================================
        const WORDS_DATA = [
            {
                        "en": "accept",
                        "cn": "接受"
            },
            {
                        "en": "achieve",
                        "cn": "实现；达到"
            },
            {
                        "en": "act",
                        "cn": "行动；表现"
            },
            {
                        "en": "add",
                        "cn": "添加"
            },
            {
                        "en": "admit",
                        "cn": "承认；允许进入"
            },
            {
                        "en": "adopt",
                        "cn": "采用；收养"
            },
            {
                        "en": "advise",
                        "cn": "建议"
            },
            {
                        "en": "afford",
                        "cn": "负担得起"
            },
            {
                        "en": "agree",
                        "cn": "同意"
            },
            {
                        "en": "allow",
                        "cn": "允许"
            },
            {
                        "en": "answer",
                        "cn": "回答"
            },
            {
                        "en": "appear",
                        "cn": "出现；似乎"
            },
            {
                        "en": "apply",
                        "cn": "申请；应用"
            },
            {
                        "en": "argue",
                        "cn": "争论；主张"
            },
            {
                        "en": "arise",
                        "cn": "出现；产生"
            },
            {
                        "en": "arrange",
                        "cn": "安排"
            },
            {
                        "en": "arrive",
                        "cn": "到达"
            },
            {
                        "en": "ask",
                        "cn": "问；请求"
            },
            {
                        "en": "assume",
                        "cn": "假设；认为"
            },
            {
                        "en": "assure",
                        "cn": "向……保证"
            },
            {
                        "en": "attach",
                        "cn": "附上；连接"
            },
            {
                        "en": "attack",
                        "cn": "攻击"
            },
            {
                        "en": "attempt",
                        "cn": "尝试"
            },
            {
                        "en": "attend",
                        "cn": "参加；出席"
            },
            {
                        "en": "attract",
                        "cn": "吸引"
            },
            {
                        "en": "avoid",
                        "cn": "避免"
            },
            {
                        "en": "awake",
                        "cn": "醒来；唤醒"
            },
            {
                        "en": "balance",
                        "cn": "平衡"
            },
            {
                        "en": "ban",
                        "cn": "禁止"
            },
            {
                        "en": "base",
                        "cn": "以……为基础"
            },
            {
                        "en": "bear",
                        "cn": "忍受；承担"
            },
            {
                        "en": "beat",
                        "cn": "击败；打"
            },
            {
                        "en": "become",
                        "cn": "成为；变得"
            },
            {
                        "en": "begin",
                        "cn": "开始"
            },
            {
                        "en": "behave",
                        "cn": "表现；举止"
            },
            {
                        "en": "believe",
                        "cn": "相信"
            },
            {
                        "en": "belong",
                        "cn": "属于"
            },
            {
                        "en": "bend",
                        "cn": "弯曲"
            },
            {
                        "en": "benefit",
                        "cn": "受益；使受益"
            },
            {
                        "en": "bet",
                        "cn": "打赌"
            },
            {
                        "en": "bind",
                        "cn": "捆绑；约束"
            },
            {
                        "en": "bite",
                        "cn": "咬"
            },
            {
                        "en": "blame",
                        "cn": "责备"
            },
            {
                        "en": "blow",
                        "cn": "吹；爆炸"
            },
            {
                        "en": "boil",
                        "cn": "煮沸"
            },
            {
                        "en": "borrow",
                        "cn": "借入"
            },
            {
                        "en": "bother",
                        "cn": "打扰；费心"
            },
            {
                        "en": "break",
                        "cn": "打破；弄坏"
            },
            {
                        "en": "breathe",
                        "cn": "呼吸"
            },
            {
                        "en": "bring",
                        "cn": "带来"
            },
            {
                        "en": "broadcast",
                        "cn": "广播；播送"
            },
            {
                        "en": "build",
                        "cn": "建造"
            },
            {
                        "en": "burn",
                        "cn": "燃烧；烧伤"
            },
            {
                        "en": "burst",
                        "cn": "爆裂；突然发生"
            },
            {
                        "en": "buy",
                        "cn": "买"
            },
            {
                        "en": "calculate",
                        "cn": "计算"
            },
            {
                        "en": "call",
                        "cn": "打电话；称呼"
            },
            {
                        "en": "care",
                        "cn": "关心；照顾"
            },
            {
                        "en": "carry",
                        "cn": "携带；运送"
            },
            {
                        "en": "catch",
                        "cn": "抓住；赶上"
            },
            {
                        "en": "cause",
                        "cn": "导致"
            },
            {
                        "en": "celebrate",
                        "cn": "庆祝"
            },
            {
                        "en": "challenge",
                        "cn": "挑战"
            },
            {
                        "en": "change",
                        "cn": "改变"
            },
            {
                        "en": "charge",
                        "cn": "收费；充电"
            },
            {
                        "en": "chase",
                        "cn": "追赶"
            },
            {
                        "en": "check",
                        "cn": "检查"
            },
            {
                        "en": "choose",
                        "cn": "选择"
            },
            {
                        "en": "claim",
                        "cn": "声称；索取"
            },
            {
                        "en": "clean",
                        "cn": "清理；打扫"
            },
            {
                        "en": "clear",
                        "cn": "清除；澄清"
            },
            {
                        "en": "climb",
                        "cn": "攀登"
            },
            {
                        "en": "close",
                        "cn": "关闭；结束"
            },
            {
                        "en": "collect",
                        "cn": "收集"
            },
            {
                        "en": "combine",
                        "cn": "结合"
            },
            {
                        "en": "come",
                        "cn": "来"
            },
            {
                        "en": "command",
                        "cn": "命令"
            },
            {
                        "en": "communicate",
                        "cn": "沟通"
            },
            {
                        "en": "compare",
                        "cn": "比较"
            },
            {
                        "en": "compete",
                        "cn": "竞争"
            },
            {
                        "en": "complain",
                        "cn": "抱怨"
            },
            {
                        "en": "complete",
                        "cn": "完成"
            },
            {
                        "en": "concentrate",
                        "cn": "集中"
            },
            {
                        "en": "concern",
                        "cn": "涉及；担心"
            },
            {
                        "en": "confirm",
                        "cn": "确认"
            },
            {
                        "en": "connect",
                        "cn": "连接"
            },
            {
                        "en": "consider",
                        "cn": "考虑"
            },
            {
                        "en": "consist",
                        "cn": "由……组成"
            },
            {
                        "en": "contain",
                        "cn": "包含"
            },
            {
                        "en": "continue",
                        "cn": "继续"
            },
            {
                        "en": "contribute",
                        "cn": "贡献；促成"
            },
            {
                        "en": "control",
                        "cn": "控制"
            },
            {
                        "en": "convert",
                        "cn": "转换"
            },
            {
                        "en": "convince",
                        "cn": "说服"
            },
            {
                        "en": "cook",
                        "cn": "烹饪"
            },
            {
                        "en": "copy",
                        "cn": "复制"
            },
            {
                        "en": "correct",
                        "cn": "改正"
            },
            {
                        "en": "cost",
                        "cn": "花费"
            },
            {
                        "en": "count",
                        "cn": "计算；计数"
            },
            {
                        "en": "cover",
                        "cn": "覆盖"
            },
            {
                        "en": "crack",
                        "cn": "破裂；破解"
            },
            {
                        "en": "create",
                        "cn": "创造"
            },
            {
                        "en": "cross",
                        "cn": "穿过"
            },
            {
                        "en": "cry",
                        "cn": "哭；喊叫"
            },
            {
                        "en": "cure",
                        "cn": "治愈"
            },
            {
                        "en": "cut",
                        "cn": "切；削减"
            },
            {
                        "en": "damage",
                        "cn": "损害"
            },
            {
                        "en": "dance",
                        "cn": "跳舞"
            },
            {
                        "en": "deal",
                        "cn": "处理；交易"
            },
            {
                        "en": "decide",
                        "cn": "决定"
            },
            {
                        "en": "declare",
                        "cn": "宣布"
            },
            {
                        "en": "decline",
                        "cn": "下降；拒绝"
            },
            {
                        "en": "decorate",
                        "cn": "装饰"
            },
            {
                        "en": "decrease",
                        "cn": "减少"
            },
            {
                        "en": "define",
                        "cn": "定义"
            },
            {
                        "en": "delay",
                        "cn": "推迟"
            },
            {
                        "en": "deliver",
                        "cn": "递送；发表"
            },
            {
                        "en": "demand",
                        "cn": "要求"
            },
            {
                        "en": "deny",
                        "cn": "否认"
            },
            {
                        "en": "depend",
                        "cn": "依靠；取决于"
            },
            {
                        "en": "describe",
                        "cn": "描述"
            },
            {
                        "en": "deserve",
                        "cn": "值得"
            },
            {
                        "en": "design",
                        "cn": "设计"
            },
            {
                        "en": "destroy",
                        "cn": "摧毁"
            },
            {
                        "en": "determine",
                        "cn": "确定；决定"
            },
            {
                        "en": "develop",
                        "cn": "发展；开发"
            },
            {
                        "en": "die",
                        "cn": "死亡"
            },
            {
                        "en": "differ",
                        "cn": "不同"
            },
            {
                        "en": "disappear",
                        "cn": "消失"
            },
            {
                        "en": "discover",
                        "cn": "发现"
            },
            {
                        "en": "discuss",
                        "cn": "讨论"
            },
            {
                        "en": "dislike",
                        "cn": "不喜欢"
            },
            {
                        "en": "divide",
                        "cn": "分开；除"
            },
            {
                        "en": "do",
                        "cn": "做"
            },
            {
                        "en": "doubt",
                        "cn": "怀疑"
            },
            {
                        "en": "drag",
                        "cn": "拖；拽"
            },
            {
                        "en": "draw",
                        "cn": "画；吸引"
            },
            {
                        "en": "dream",
                        "cn": "梦想"
            },
            {
                        "en": "dress",
                        "cn": "穿衣；给……穿衣"
            },
            {
                        "en": "drink",
                        "cn": "喝"
            },
            {
                        "en": "drive",
                        "cn": "驾驶；驱动"
            },
            {
                        "en": "drop",
                        "cn": "掉落；降低"
            },
            {
                        "en": "earn",
                        "cn": "赚取"
            },
            {
                        "en": "eat",
                        "cn": "吃"
            },
            {
                        "en": "educate",
                        "cn": "教育"
            },
            {
                        "en": "elect",
                        "cn": "选举；选择"
            },
            {
                        "en": "employ",
                        "cn": "雇用；使用"
            },
            {
                        "en": "encourage",
                        "cn": "鼓励"
            },
            {
                        "en": "end",
                        "cn": "结束"
            },
            {
                        "en": "enjoy",
                        "cn": "享受；喜欢"
            },
            {
                        "en": "ensure",
                        "cn": "确保"
            },
            {
                        "en": "enter",
                        "cn": "进入"
            },
            {
                        "en": "escape",
                        "cn": "逃离"
            },
            {
                        "en": "establish",
                        "cn": "建立；确立"
            },
            {
                        "en": "estimate",
                        "cn": "估计"
            },
            {
                        "en": "evaluate",
                        "cn": "评估"
            },
            {
                        "en": "examine",
                        "cn": "检查；研究"
            },
            {
                        "en": "exist",
                        "cn": "存在"
            },
            {
                        "en": "expand",
                        "cn": "扩大"
            },
            {
                        "en": "expect",
                        "cn": "期待；预计"
            },
            {
                        "en": "experience",
                        "cn": "经历；体验"
            },
            {
                        "en": "explain",
                        "cn": "解释"
            },
            {
                        "en": "explore",
                        "cn": "探索"
            },
            {
                        "en": "express",
                        "cn": "表达"
            },
            {
                        "en": "extend",
                        "cn": "延伸；扩大"
            },
            {
                        "en": "face",
                        "cn": "面对"
            },
            {
                        "en": "fail",
                        "cn": "失败"
            },
            {
                        "en": "fall",
                        "cn": "落下"
            },
            {
                        "en": "feed",
                        "cn": "喂养；供应"
            },
            {
                        "en": "feel",
                        "cn": "感觉"
            },
            {
                        "en": "fight",
                        "cn": "战斗；争论"
            },
            {
                        "en": "fill",
                        "cn": "填满"
            },
            {
                        "en": "find",
                        "cn": "找到；发现"
            },
            {
                        "en": "finish",
                        "cn": "完成"
            },
            {
                        "en": "fit",
                        "cn": "适合"
            },
            {
                        "en": "fix",
                        "cn": "修理；解决"
            },
            {
                        "en": "fly",
                        "cn": "飞行"
            },
            {
                        "en": "focus",
                        "cn": "集中"
            },
            {
                        "en": "follow",
                        "cn": "跟随；遵循"
            },
            {
                        "en": "force",
                        "cn": "强迫"
            },
            {
                        "en": "forget",
                        "cn": "忘记"
            },
            {
                        "en": "forgive",
                        "cn": "原谅"
            },
            {
                        "en": "form",
                        "cn": "形成"
            },
            {
                        "en": "gain",
                        "cn": "获得；增加"
            },
            {
                        "en": "gather",
                        "cn": "聚集；收集"
            },
            {
                        "en": "get",
                        "cn": "得到；变得"
            },
            {
                        "en": "give",
                        "cn": "给"
            },
            {
                        "en": "go",
                        "cn": "去"
            },
            {
                        "en": "grab",
                        "cn": "抓住"
            },
            {
                        "en": "graduate",
                        "cn": "毕业"
            },
            {
                        "en": "grow",
                        "cn": "生长；增长"
            },
            {
                        "en": "guess",
                        "cn": "猜测"
            },
            {
                        "en": "guide",
                        "cn": "指导"
            },
            {
                        "en": "handle",
                        "cn": "处理"
            },
            {
                        "en": "happen",
                        "cn": "发生"
            },
            {
                        "en": "hate",
                        "cn": "讨厌"
            },
            {
                        "en": "have",
                        "cn": "有；拥有"
            },
            {
                        "en": "hear",
                        "cn": "听见"
            },
            {
                        "en": "heat",
                        "cn": "加热"
            },
            {
                        "en": "help",
                        "cn": "帮助"
            },
            {
                        "en": "hide",
                        "cn": "隐藏"
            },
            {
                        "en": "hit",
                        "cn": "击中；撞击"
            },
            {
                        "en": "hold",
                        "cn": "拿着；保持"
            },
            {
                        "en": "hope",
                        "cn": "希望"
            },
            {
                        "en": "hurt",
                        "cn": "伤害；疼痛"
            },
            {
                        "en": "identify",
                        "cn": "识别；确定"
            },
            {
                        "en": "ignore",
                        "cn": "忽视"
            },
            {
                        "en": "imagine",
                        "cn": "想象"
            },
            {
                        "en": "improve",
                        "cn": "改善；提高"
            },
            {
                        "en": "include",
                        "cn": "包括"
            },
            {
                        "en": "increase",
                        "cn": "增加"
            },
            {
                        "en": "indicate",
                        "cn": "表明；显示"
            },
            {
                        "en": "influence",
                        "cn": "影响"
            },
            {
                        "en": "inform",
                        "cn": "通知"
            },
            {
                        "en": "introduce",
                        "cn": "介绍；引入"
            },
            {
                        "en": "invent",
                        "cn": "发明"
            },
            {
                        "en": "invest",
                        "cn": "投资"
            },
            {
                        "en": "invite",
                        "cn": "邀请"
            },
            {
                        "en": "involve",
                        "cn": "涉及；参与"
            },
            {
                        "en": "join",
                        "cn": "加入"
            },
            {
                        "en": "judge",
                        "cn": "判断；审判"
            },
            {
                        "en": "jump",
                        "cn": "跳"
            },
            {
                        "en": "keep",
                        "cn": "保持；保存"
            },
            {
                        "en": "kick",
                        "cn": "踢"
            },
            {
                        "en": "kill",
                        "cn": "杀死"
            },
            {
                        "en": "kiss",
                        "cn": "亲吻"
            },
            {
                        "en": "knock",
                        "cn": "敲"
            },
            {
                        "en": "know",
                        "cn": "知道；了解"
            },
            {
                        "en": "lack",
                        "cn": "缺乏"
            },
            {
                        "en": "land",
                        "cn": "着陆；获得"
            },
            {
                        "en": "last",
                        "cn": "持续"
            },
            {
                        "en": "laugh",
                        "cn": "笑"
            },
            {
                        "en": "lay",
                        "cn": "放置"
            },
            {
                        "en": "lead",
                        "cn": "引导；导致"
            },
            {
                        "en": "learn",
                        "cn": "学习"
            },
            {
                        "en": "leave",
                        "cn": "离开；留下"
            },
            {
                        "en": "lend",
                        "cn": "借出"
            },
            {
                        "en": "let",
                        "cn": "让；允许"
            },
            {
                        "en": "lie",
                        "cn": "躺；说谎"
            },
            {
                        "en": "lift",
                        "cn": "举起"
            },
            {
                        "en": "like",
                        "cn": "喜欢"
            },
            {
                        "en": "limit",
                        "cn": "限制"
            },
            {
                        "en": "link",
                        "cn": "连接"
            },
            {
                        "en": "listen",
                        "cn": "听"
            },
            {
                        "en": "live",
                        "cn": "生活；居住"
            },
            {
                        "en": "load",
                        "cn": "装载"
            },
            {
                        "en": "locate",
                        "cn": "定位；找到"
            },
            {
                        "en": "lock",
                        "cn": "锁住"
            },
            {
                        "en": "look",
                        "cn": "看"
            },
            {
                        "en": "lose",
                        "cn": "失去"
            },
            {
                        "en": "love",
                        "cn": "爱；喜欢"
            },
            {
                        "en": "maintain",
                        "cn": "保持；维护"
            },
            {
                        "en": "make",
                        "cn": "制作；使"
            },
            {
                        "en": "manage",
                        "cn": "管理；设法完成"
            },
            {
                        "en": "mark",
                        "cn": "标记"
            },
            {
                        "en": "matter",
                        "cn": "要紧；有关系"
            },
            {
                        "en": "mean",
                        "cn": "意味着；表示"
            },
            {
                        "en": "measure",
                        "cn": "测量；衡量"
            },
            {
                        "en": "meet",
                        "cn": "遇见；满足"
            },
            {
                        "en": "mention",
                        "cn": "提到"
            },
            {
                        "en": "mind",
                        "cn": "介意；留意"
            },
            {
                        "en": "miss",
                        "cn": "错过；想念"
            },
            {
                        "en": "mix",
                        "cn": "混合"
            },
            {
                        "en": "move",
                        "cn": "移动；搬家"
            },
            {
                        "en": "need",
                        "cn": "需要"
            },
            {
                        "en": "notice",
                        "cn": "注意到"
            },
            {
                        "en": "obtain",
                        "cn": "获得"
            },
            {
                        "en": "occur",
                        "cn": "发生"
            },
            {
                        "en": "offer",
                        "cn": "提供；提出"
            },
            {
                        "en": "open",
                        "cn": "打开"
            },
            {
                        "en": "operate",
                        "cn": "操作；运行"
            },
            {
                        "en": "order",
                        "cn": "命令；订购"
            },
            {
                        "en": "organize",
                        "cn": "组织"
            },
            {
                        "en": "overcome",
                        "cn": "克服"
            },
            {
                        "en": "own",
                        "cn": "拥有"
            },
            {
                        "en": "pack",
                        "cn": "打包"
            },
            {
                        "en": "participate",
                        "cn": "参加"
            },
            {
                        "en": "pass",
                        "cn": "通过；经过"
            },
            {
                        "en": "pay",
                        "cn": "支付"
            },
            {
                        "en": "perform",
                        "cn": "执行；表演"
            },
            {
                        "en": "permit",
                        "cn": "允许"
            },
            {
                        "en": "pick",
                        "cn": "挑选；拾起"
            },
            {
                        "en": "place",
                        "cn": "放置"
            },
            {
                        "en": "plan",
                        "cn": "计划"
            },
            {
                        "en": "play",
                        "cn": "玩；扮演"
            },
            {
                        "en": "point",
                        "cn": "指向"
            },
            {
                        "en": "prefer",
                        "cn": "更喜欢"
            },
            {
                        "en": "prepare",
                        "cn": "准备"
            },
            {
                        "en": "present",
                        "cn": "展示；提出"
            },
            {
                        "en": "prevent",
                        "cn": "防止"
            },
            {
                        "en": "print",
                        "cn": "打印"
            },
            {
                        "en": "produce",
                        "cn": "生产；产生"
            },
            {
                        "en": "promise",
                        "cn": "承诺"
            },
            {
                        "en": "protect",
                        "cn": "保护"
            },
            {
                        "en": "prove",
                        "cn": "证明"
            },
            {
                        "en": "provide",
                        "cn": "提供"
            },
            {
                        "en": "publish",
                        "cn": "出版；发布"
            },
            {
                        "en": "pull",
                        "cn": "拉"
            },
            {
                        "en": "punish",
                        "cn": "惩罚"
            },
            {
                        "en": "purchase",
                        "cn": "购买"
            },
            {
                        "en": "push",
                        "cn": "推"
            },
            {
                        "en": "put",
                        "cn": "放置"
            },
            {
                        "en": "qualify",
                        "cn": "使具备资格"
            },
            {
                        "en": "question",
                        "cn": "质疑；询问"
            },
            {
                        "en": "quit",
                        "cn": "放弃；退出"
            },
            {
                        "en": "raise",
                        "cn": "提高；举起"
            },
            {
                        "en": "reach",
                        "cn": "到达；达到"
            },
            {
                        "en": "react",
                        "cn": "反应"
            },
            {
                        "en": "read",
                        "cn": "阅读"
            },
            {
                        "en": "realize",
                        "cn": "意识到；实现"
            },
            {
                        "en": "receive",
                        "cn": "收到"
            },
            {
                        "en": "recognize",
                        "cn": "认出；认可"
            },
            {
                        "en": "recommend",
                        "cn": "推荐；建议"
            },
            {
                        "en": "record",
                        "cn": "记录"
            },
            {
                        "en": "recover",
                        "cn": "恢复"
            },
            {
                        "en": "reduce",
                        "cn": "减少"
            },
            {
                        "en": "refer",
                        "cn": "提到；参考"
            },
            {
                        "en": "reflect",
                        "cn": "反映；反思"
            },
            {
                        "en": "refuse",
                        "cn": "拒绝"
            },
            {
                        "en": "regard",
                        "cn": "认为；看待"
            },
            {
                        "en": "relate",
                        "cn": "联系；涉及"
            },
            {
                        "en": "relax",
                        "cn": "放松"
            },
            {
                        "en": "release",
                        "cn": "释放；发布"
            },
            {
                        "en": "remain",
                        "cn": "保持；剩余"
            },
            {
                        "en": "remember",
                        "cn": "记得"
            },
            {
                        "en": "remind",
                        "cn": "提醒"
            },
            {
                        "en": "remove",
                        "cn": "移除"
            },
            {
                        "en": "repeat",
                        "cn": "重复"
            },
            {
                        "en": "replace",
                        "cn": "替代"
            },
            {
                        "en": "reply",
                        "cn": "回复"
            },
            {
                        "en": "report",
                        "cn": "报告"
            },
            {
                        "en": "represent",
                        "cn": "代表"
            },
            {
                        "en": "require",
                        "cn": "需要；要求"
            },
            {
                        "en": "research",
                        "cn": "研究"
            },
            {
                        "en": "rest",
                        "cn": "休息"
            },
            {
                        "en": "result",
                        "cn": "导致"
            },
            {
                        "en": "return",
                        "cn": "返回；归还"
            },
            {
                        "en": "reveal",
                        "cn": "揭示"
            },
            {
                        "en": "review",
                        "cn": "复习；审查"
            },
            {
                        "en": "ride",
                        "cn": "骑"
            },
            {
                        "en": "rise",
                        "cn": "上升"
            },
            {
                        "en": "risk",
                        "cn": "冒险；冒……风险"
            },
            {
                        "en": "roll",
                        "cn": "滚动"
            },
            {
                        "en": "run",
                        "cn": "跑；运行"
            },
            {
                        "en": "save",
                        "cn": "保存；拯救"
            },
            {
                        "en": "say",
                        "cn": "说"
            },
            {
                        "en": "see",
                        "cn": "看见"
            },
            {
                        "en": "seek",
                        "cn": "寻找"
            },
            {
                        "en": "seem",
                        "cn": "似乎"
            },
            {
                        "en": "sell",
                        "cn": "卖"
            },
            {
                        "en": "send",
                        "cn": "发送"
            },
            {
                        "en": "serve",
                        "cn": "服务；提供"
            },
            {
                        "en": "set",
                        "cn": "设置；放置"
            },
            {
                        "en": "settle",
                        "cn": "解决；定居"
            },
            {
                        "en": "shake",
                        "cn": "摇动"
            },
            {
                        "en": "share",
                        "cn": "分享"
            },
            {
                        "en": "shoot",
                        "cn": "射击；拍摄"
            },
            {
                        "en": "show",
                        "cn": "展示"
            },
            {
                        "en": "shut",
                        "cn": "关闭"
            },
            {
                        "en": "sing",
                        "cn": "唱"
            },
            {
                        "en": "sit",
                        "cn": "坐"
            },
            {
                        "en": "sleep",
                        "cn": "睡觉"
            },
            {
                        "en": "smile",
                        "cn": "微笑"
            },
            {
                        "en": "solve",
                        "cn": "解决"
            },
            {
                        "en": "sort",
                        "cn": "分类"
            },
            {
                        "en": "sound",
                        "cn": "听起来"
            },
            {
                        "en": "speak",
                        "cn": "说"
            },
            {
                        "en": "spend",
                        "cn": "花费；度过"
            },
            {
                        "en": "spread",
                        "cn": "传播；扩散"
            },
            {
                        "en": "stand",
                        "cn": "站立"
            },
            {
                        "en": "start",
                        "cn": "开始"
            },
            {
                        "en": "state",
                        "cn": "陈述"
            },
            {
                        "en": "stay",
                        "cn": "停留；保持"
            },
            {
                        "en": "steal",
                        "cn": "偷"
            },
            {
                        "en": "stick",
                        "cn": "粘贴；坚持"
            },
            {
                        "en": "stop",
                        "cn": "停止"
            },
            {
                        "en": "store",
                        "cn": "储存"
            },
            {
                        "en": "study",
                        "cn": "学习；研究"
            },
            {
                        "en": "succeed",
                        "cn": "成功"
            },
            {
                        "en": "suffer",
                        "cn": "遭受"
            },
            {
                        "en": "suggest",
                        "cn": "建议"
            },
            {
                        "en": "supply",
                        "cn": "提供；供应"
            },
            {
                        "en": "support",
                        "cn": "支持"
            },
            {
                        "en": "suppose",
                        "cn": "认为；假设"
            },
            {
                        "en": "survive",
                        "cn": "生存"
            },
            {
                        "en": "switch",
                        "cn": "转换；切换"
            },
            {
                        "en": "take",
                        "cn": "拿；花费"
            },
            {
                        "en": "talk",
                        "cn": "谈话"
            },
            {
                        "en": "target",
                        "cn": "针对；以……为目标"
            },
            {
                        "en": "teach",
                        "cn": "教"
            },
            {
                        "en": "tell",
                        "cn": "告诉"
            },
            {
                        "en": "tend",
                        "cn": "倾向于"
            },
            {
                        "en": "test",
                        "cn": "测试"
            },
            {
                        "en": "thank",
                        "cn": "感谢"
            },
            {
                        "en": "think",
                        "cn": "思考；认为"
            },
            {
                        "en": "throw",
                        "cn": "扔"
            },
            {
                        "en": "touch",
                        "cn": "触碰"
            },
            {
                        "en": "train",
                        "cn": "训练"
            },
            {
                        "en": "transfer",
                        "cn": "转移"
            },
            {
                        "en": "travel",
                        "cn": "旅行"
            },
            {
                        "en": "treat",
                        "cn": "对待；治疗"
            },
            {
                        "en": "trust",
                        "cn": "信任"
            },
            {
                        "en": "try",
                        "cn": "尝试"
            },
            {
                        "en": "turn",
                        "cn": "转动；变成"
            },
            {
                        "en": "understand",
                        "cn": "理解"
            },
            {
                        "en": "update",
                        "cn": "更新"
            },
            {
                        "en": "use",
                        "cn": "使用"
            },
            {
                        "en": "value",
                        "cn": "重视；估价"
            },
            {
                        "en": "vary",
                        "cn": "改变；变化"
            },
            {
                        "en": "visit",
                        "cn": "访问"
            },
            {
                        "en": "vote",
                        "cn": "投票"
            },
            {
                        "en": "wait",
                        "cn": "等待"
            },
            {
                        "en": "wake",
                        "cn": "醒来；唤醒"
            },
            {
                        "en": "walk",
                        "cn": "走路"
            },
            {
                        "en": "want",
                        "cn": "想要"
            },
            {
                        "en": "warn",
                        "cn": "警告"
            },
            {
                        "en": "wash",
                        "cn": "洗"
            },
            {
                        "en": "watch",
                        "cn": "观看"
            },
            {
                        "en": "wear",
                        "cn": "穿戴"
            },
            {
                        "en": "weigh",
                        "cn": "称重；权衡"
            },
            {
                        "en": "win",
                        "cn": "赢"
            },
            {
                        "en": "wish",
                        "cn": "希望"
            },
            {
                        "en": "withdraw",
                        "cn": "撤回；取出"
            },
            {
                        "en": "wonder",
                        "cn": "想知道"
            },
            {
                        "en": "work",
                        "cn": "工作；起作用"
            },
            {
                        "en": "worry",
                        "cn": "担心"
            },
            {
                        "en": "write",
                        "cn": "写"
            },
            {
                        "en": "yell",
                        "cn": "喊叫"
            },
            {
                        "en": "abandon",
                        "cn": "放弃"
            },
            {
                        "en": "absorb",
                        "cn": "吸收"
            },
            {
                        "en": "abuse",
                        "cn": "滥用；虐待"
            },
            {
                        "en": "accelerate",
                        "cn": "加速"
            },
            {
                        "en": "accommodate",
                        "cn": "容纳；适应"
            },
            {
                        "en": "accompany",
                        "cn": "陪伴"
            },
            {
                        "en": "accomplish",
                        "cn": "完成"
            },
            {
                        "en": "accumulate",
                        "cn": "积累"
            },
            {
                        "en": "adapt",
                        "cn": "适应；调整"
            },
            {
                        "en": "adjust",
                        "cn": "调整"
            },
            {
                        "en": "administer",
                        "cn": "管理；执行"
            },
            {
                        "en": "advocate",
                        "cn": "提倡；主张"
            },
            {
                        "en": "allocate",
                        "cn": "分配"
            },
            {
                        "en": "alter",
                        "cn": "改变"
            },
            {
                        "en": "analyze",
                        "cn": "分析"
            },
            {
                        "en": "anticipate",
                        "cn": "预期"
            },
            {
                        "en": "appreciate",
                        "cn": "欣赏；感激"
            },
            {
                        "en": "approve",
                        "cn": "批准；赞成"
            },
            {
                        "en": "assign",
                        "cn": "分配；指派"
            },
            {
                        "en": "associate",
                        "cn": "联系；联想"
            },
            {
                        "en": "attain",
                        "cn": "达到"
            },
            {
                        "en": "authorize",
                        "cn": "授权"
            },
            {
                        "en": "automate",
                        "cn": "自动化"
            },
            {
                        "en": "broaden",
                        "cn": "扩大；拓宽"
            },
            {
                        "en": "capture",
                        "cn": "捕获；记录"
            },
            {
                        "en": "cease",
                        "cn": "停止"
            },
            {
                        "en": "clarify",
                        "cn": "澄清"
            },
            {
                        "en": "classify",
                        "cn": "分类"
            },
            {
                        "en": "collaborate",
                        "cn": "合作"
            },
            {
                        "en": "collapse",
                        "cn": "崩溃；倒塌"
            },
            {
                        "en": "commence",
                        "cn": "开始"
            },
            {
                        "en": "compensate",
                        "cn": "补偿"
            },
            {
                        "en": "compile",
                        "cn": "编制；汇编"
            },
            {
                        "en": "complement",
                        "cn": "补充"
            },
            {
                        "en": "comprise",
                        "cn": "包含；组成"
            },
            {
                        "en": "conceive",
                        "cn": "构想；认为"
            },
            {
                        "en": "conclude",
                        "cn": "得出结论；结束"
            },
            {
                        "en": "confront",
                        "cn": "面对"
            },
            {
                        "en": "conserve",
                        "cn": "保存；节约"
            },
            {
                        "en": "constitute",
                        "cn": "构成"
            },
            {
                        "en": "constrain",
                        "cn": "限制"
            },
            {
                        "en": "consult",
                        "cn": "咨询"
            },
            {
                        "en": "consume",
                        "cn": "消耗"
            },
            {
                        "en": "contemplate",
                        "cn": "考虑；注视"
            },
            {
                        "en": "contradict",
                        "cn": "反驳；矛盾"
            },
            {
                        "en": "cooperate",
                        "cn": "合作"
            },
            {
                        "en": "coordinate",
                        "cn": "协调"
            },
            {
                        "en": "correspond",
                        "cn": "相符；通信"
            },
            {
                        "en": "cultivate",
                        "cn": "培养"
            },
            {
                        "en": "dedicate",
                        "cn": "致力于"
            },
            {
                        "en": "demonstrate",
                        "cn": "证明；展示"
            },
            {
                        "en": "derive",
                        "cn": "获得；源于"
            },
            {
                        "en": "detect",
                        "cn": "发现；检测"
            },
            {
                        "en": "diminish",
                        "cn": "减少"
            },
            {
                        "en": "discriminate",
                        "cn": "歧视；区分"
            },
            {
                        "en": "dominate",
                        "cn": "支配；占主导"
            },
            {
                        "en": "eliminate",
                        "cn": "消除"
            },
            {
                        "en": "emphasize",
                        "cn": "强调"
            },
            {
                        "en": "encounter",
                        "cn": "遇到"
            },
            {
                        "en": "enhance",
                        "cn": "提高；增强"
            },
            {
                        "en": "equivalent",
                        "cn": "等同于"
            },
            {
                        "en": "evolve",
                        "cn": "发展；演变"
            },
            {
                        "en": "exceed",
                        "cn": "超过"
            },
            {
                        "en": "exclude",
                        "cn": "排除"
            },
            {
                        "en": "exhibit",
                        "cn": "展示；表现"
            },
            {
                        "en": "exploit",
                        "cn": "利用；开发"
            },
            {
                        "en": "facilitate",
                        "cn": "促进；使便利"
            },
            {
                        "en": "formulate",
                        "cn": "制定；构想"
            },
            {
                        "en": "foster",
                        "cn": "促进；培养"
            },
            {
                        "en": "generate",
                        "cn": "产生"
            },
            {
                        "en": "highlight",
                        "cn": "强调；突出"
            },
            {
                        "en": "illustrate",
                        "cn": "说明；举例"
            },
            {
                        "en": "imply",
                        "cn": "暗示"
            },
            {
                        "en": "impose",
                        "cn": "强加；征收"
            },
            {
                        "en": "incorporate",
                        "cn": "纳入；包含"
            },
            {
                        "en": "induce",
                        "cn": "导致；诱导"
            },
            {
                        "en": "initiate",
                        "cn": "开始；发起"
            },
            {
                        "en": "inspect",
                        "cn": "检查"
            },
            {
                        "en": "integrate",
                        "cn": "整合"
            },
            {
                        "en": "interact",
                        "cn": "互动"
            },
            {
                        "en": "interpret",
                        "cn": "解释；理解"
            },
            {
                        "en": "intervene",
                        "cn": "干预"
            },
            {
                        "en": "isolate",
                        "cn": "隔离；孤立"
            },
            {
                        "en": "justify",
                        "cn": "证明合理"
            },
            {
                        "en": "manipulate",
                        "cn": "操纵"
            },
            {
                        "en": "minimize",
                        "cn": "使最小化"
            },
            {
                        "en": "modify",
                        "cn": "修改"
            },
            {
                        "en": "motivate",
                        "cn": "激励"
            },
            {
                        "en": "negotiate",
                        "cn": "谈判"
            },
            {
                        "en": "perceive",
                        "cn": "察觉；认为"
            },
            {
                        "en": "persist",
                        "cn": "坚持"
            },
            {
                        "en": "persuade",
                        "cn": "说服"
            },
            {
                        "en": "predict",
                        "cn": "预测"
            },
            {
                        "en": "preserve",
                        "cn": "保存；保护"
            },
            {
                        "en": "promote",
                        "cn": "促进；推广"
            },
            {
                        "en": "propose",
                        "cn": "提议"
            },
            {
                        "en": "pursue",
                        "cn": "追求；从事"
            },
            {
                        "en": "reinforce",
                        "cn": "加强"
            },
            {
                        "en": "reject",
                        "cn": "拒绝"
            },
            {
                        "en": "restore",
                        "cn": "恢复"
            },
            {
                        "en": "retain",
                        "cn": "保留"
            },
            {
                        "en": "reverse",
                        "cn": "颠倒；逆转"
            },
            {
                        "en": "revise",
                        "cn": "修改；复习"
            },
            {
                        "en": "simulate",
                        "cn": "模拟"
            },
            {
                        "en": "specify",
                        "cn": "明确说明"
            },
            {
                        "en": "strengthen",
                        "cn": "加强"
            },
            {
                        "en": "substitute",
                        "cn": "替代"
            },
            {
                        "en": "sustain",
                        "cn": "维持"
            },
            {
                        "en": "transform",
                        "cn": "转变"
            },
            {
                        "en": "transmit",
                        "cn": "传输；传播"
            },
            {
                        "en": "undergo",
                        "cn": "经历"
            },
            {
                        "en": "utilize",
                        "cn": "利用"
            },
            {
                        "en": "violate",
                        "cn": "违反"
            },
            {
                        "en": "yield",
                        "cn": "产生；屈服"
            },
            {
                        "en": "acquire",
                        "cn": "获得"
            },
            {
                        "en": "activate",
                        "cn": "激活"
            },
            {
                        "en": "address",
                        "cn": "处理；解决"
            },
            {
                        "en": "appeal",
                        "cn": "呼吁；上诉"
            },
            {
                        "en": "assemble",
                        "cn": "组装；集合"
            },
            {
                        "en": "assess",
                        "cn": "评估"
            },
            {
                        "en": "attribute",
                        "cn": "把……归因于"
            },
            {
                        "en": "boost",
                        "cn": "促进；提高"
            },
            {
                        "en": "cite",
                        "cn": "引用"
            },
            {
                        "en": "confine",
                        "cn": "限制"
            },
            {
                        "en": "consent",
                        "cn": "同意"
            },
            {
                        "en": "consolidate",
                        "cn": "巩固；合并"
            },
            {
                        "en": "construct",
                        "cn": "建造；构建"
            },
            {
                        "en": "convey",
                        "cn": "传达"
            },
            {
                        "en": "cope",
                        "cn": "应对"
            },
            {
                        "en": "criticize",
                        "cn": "批评"
            },
            {
                        "en": "differentiate",
                        "cn": "区分"
            },
            {
                        "en": "dispose",
                        "cn": "处理；处置"
            },
            {
                        "en": "distort",
                        "cn": "扭曲"
            },
            {
                        "en": "draft",
                        "cn": "起草"
            },
            {
                        "en": "embody",
                        "cn": "体现"
            },
            {
                        "en": "emerge",
                        "cn": "出现；显现"
            },
            {
                        "en": "enforce",
                        "cn": "执行；强制"
            },
            {
                        "en": "engage",
                        "cn": "参与；吸引"
            },
            {
                        "en": "enrich",
                        "cn": "丰富"
            },
            {
                        "en": "expose",
                        "cn": "暴露"
            },
            {
                        "en": "extract",
                        "cn": "提取"
            },
            {
                        "en": "forecast",
                        "cn": "预测"
            },
            {
                        "en": "fulfill",
                        "cn": "履行；实现"
            },
            {
                        "en": "govern",
                        "cn": "管理；统治"
            },
            {
                        "en": "grasp",
                        "cn": "理解；抓住"
            },
            {
                        "en": "guarantee",
                        "cn": "保证"
            },
            {
                        "en": "implement",
                        "cn": "实施；执行"
            },
            {
                        "en": "import",
                        "cn": "进口；引入"
            },
            {
                        "en": "inhibit",
                        "cn": "抑制"
            },
            {
                        "en": "innovate",
                        "cn": "创新"
            },
            {
                        "en": "instruct",
                        "cn": "指导；命令"
            },
            {
                        "en": "intensify",
                        "cn": "加强"
            },
            {
                        "en": "interrupt",
                        "cn": "打断"
            },
            {
                        "en": "investigate",
                        "cn": "调查"
            },
            {
                        "en": "launch",
                        "cn": "推出；发起"
            },
            {
                        "en": "legislate",
                        "cn": "立法"
            },
            {
                        "en": "mediate",
                        "cn": "调解"
            },
            {
                        "en": "monitor",
                        "cn": "监测"
            },
            {
                        "en": "neutralize",
                        "cn": "使中立"
            },
            {
                        "en": "occupy",
                        "cn": "占据"
            },
            {
                        "en": "pose",
                        "cn": "提出；造成"
            },
            {
                        "en": "proceed",
                        "cn": "继续进行"
            },
            {
                        "en": "prohibit",
                        "cn": "禁止"
            },
            {
                        "en": "regulate",
                        "cn": "管理；监管"
            },
            {
                        "en": "restrict",
                        "cn": "限制"
            },
            {
                        "en": "retrieve",
                        "cn": "找回；检索"
            },
            {
                        "en": "resolve",
                        "cn": "解决"
            },
            {
                        "en": "resume",
                        "cn": "重新开始"
            },
            {
                        "en": "stimulate",
                        "cn": "刺激；促进"
            },
            {
                        "en": "submit",
                        "cn": "提交；服从"
            },
            {
                        "en": "supplement",
                        "cn": "补充"
            },
            {
                        "en": "tackle",
                        "cn": "处理；解决"
            },
            {
                        "en": "trigger",
                        "cn": "引发"
            },
            {
                        "en": "undermine",
                        "cn": "削弱"
            },
            {
                        "en": "undertake",
                        "cn": "承担；着手"
            },
            {
                        "en": "verify",
                        "cn": "核实"
            },
            {
                        "en": "withstand",
                        "cn": "经受住"
            },
            {
                        "en": "characterize",
                        "cn": "描述……特征"
            },
            {
                        "en": "comprehend",
                        "cn": "理解"
            },
            {
                        "en": "deduce",
                        "cn": "推断"
            },
            {
                        "en": "denote",
                        "cn": "表示"
            },
            {
                        "en": "depress",
                        "cn": "压低；使沮丧"
            },
            {
                        "en": "deviate",
                        "cn": "偏离"
            },
            {
                        "en": "distinguish",
                        "cn": "区分"
            },
            {
                        "en": "distribute",
                        "cn": "分配；分发"
            },
            {
                        "en": "enable",
                        "cn": "使能够"
            },
            {
                        "en": "entail",
                        "cn": "需要；涉及"
            },
            {
                        "en": "equip",
                        "cn": "配备"
            },
            {
                        "en": "infer",
                        "cn": "推断"
            },
            {
                        "en": "insert",
                        "cn": "插入"
            },
            {
                        "en": "neglect",
                        "cn": "忽视"
            },
            {
                        "en": "offset",
                        "cn": "抵消"
            },
            {
                        "en": "optimize",
                        "cn": "优化"
            },
            {
                        "en": "orient",
                        "cn": "使适应；确定方向"
            },
            {
                        "en": "overlap",
                        "cn": "重叠"
            },
            {
                        "en": "precede",
                        "cn": "在……之前"
            },
            {
                        "en": "prescribe",
                        "cn": "规定；开处方"
            },
            {
                        "en": "presume",
                        "cn": "推测；假定"
            },
            {
                        "en": "prompt",
                        "cn": "促使"
            },
            {
                        "en": "quantify",
                        "cn": "量化"
            },
            {
                        "en": "refine",
                        "cn": "改进；提炼"
            },
            {
                        "en": "render",
                        "cn": "使成为；提供"
            },
            {
                        "en": "replicate",
                        "cn": "复制；重复"
            },
            {
                        "en": "rotate",
                        "cn": "旋转"
            },
            {
                        "en": "secure",
                        "cn": "获得；保护"
            },
            {
                        "en": "shift",
                        "cn": "转移；改变"
            },
            {
                        "en": "specialize",
                        "cn": "专门研究"
            },
            {
                        "en": "stabilize",
                        "cn": "稳定"
            },
            {
                        "en": "suppress",
                        "cn": "抑制"
            },
            {
                        "en": "suspend",
                        "cn": "暂停"
            },
            {
                        "en": "terminate",
                        "cn": "终止"
            },
            {
                        "en": "unify",
                        "cn": "统一"
            },
            {
                        "en": "validate",
                        "cn": "验证"
            },
            {
                        "en": "visualize",
                        "cn": "使形象化"
            },
            {
                        "en": "abolish",
                        "cn": "废除"
            },
            {
                        "en": "appoint",
                        "cn": "任命"
            },
            {
                        "en": "conceal",
                        "cn": "隐藏"
            },
            {
                        "en": "depict",
                        "cn": "描绘"
            },
            {
                        "en": "empower",
                        "cn": "授权；使有能力"
            },
            {
                        "en": "maximize",
                        "cn": "最大化"
            },
            {
                        "en": "mobilize",
                        "cn": "动员"
            },
            {
                        "en": "moderate",
                        "cn": "调节；缓和"
            },
            {
                        "en": "notify",
                        "cn": "通知"
            },
            {
                        "en": "prevail",
                        "cn": "占优势"
            },
            {
                        "en": "rehabilitate",
                        "cn": "使恢复"
            },
            {
                        "en": "restrain",
                        "cn": "抑制；约束"
            },
            {
                        "en": "alert",
                        "cn": "使警觉"
            },
            {
                        "en": "align",
                        "cn": "使一致"
            },
            {
                        "en": "amend",
                        "cn": "修改"
            },
            {
                        "en": "audit",
                        "cn": "审计；检查"
            },
            {
                        "en": "benchmark",
                        "cn": "以……为基准"
            },
            {
                        "en": "categorize",
                        "cn": "分类"
            },
            {
                        "en": "circulate",
                        "cn": "流通；传播"
            },
            {
                        "en": "coincide",
                        "cn": "同时发生"
            },
            {
                        "en": "compel",
                        "cn": "迫使"
            },
            {
                        "en": "compromise",
                        "cn": "妥协"
            },
            {
                        "en": "configure",
                        "cn": "配置"
            },
            {
                        "en": "conform",
                        "cn": "遵守；符合"
            },
            {
                        "en": "contaminate",
                        "cn": "污染"
            },
            {
                        "en": "customize",
                        "cn": "定制"
            },
            {
                        "en": "designate",
                        "cn": "指定"
            },
            {
                        "en": "diagnose",
                        "cn": "诊断；判断问题"
            },
            {
                        "en": "discard",
                        "cn": "丢弃"
            },
            {
                        "en": "disclose",
                        "cn": "披露"
            },
            {
                        "en": "disrupt",
                        "cn": "扰乱"
            },
            {
                        "en": "diversify",
                        "cn": "使多样化"
            },
            {
                        "en": "embrace",
                        "cn": "接受；拥抱"
            },
            {
                        "en": "endure",
                        "cn": "忍受"
            },
            {
                        "en": "enroll",
                        "cn": "注册；入学"
            },
            {
                        "en": "fluctuate",
                        "cn": "波动"
            },
            {
                        "en": "hinder",
                        "cn": "阻碍"
            },
            {
                        "en": "legitimize",
                        "cn": "使合法"
            },
            {
                        "en": "provoke",
                        "cn": "激起"
            },
            {
                        "en": "sacrifice",
                        "cn": "牺牲"
            },
            {
                        "en": "summarize",
                        "cn": "总结"
            },
            {
                        "en": "upgrade",
                        "cn": "升级"
            },
            {
                        "en": "urge",
                        "cn": "敦促"
            },
            {
                        "en": "abstract",
                        "cn": "提取；概括"
            },
            {
                        "en": "acknowledge",
                        "cn": "承认"
            },
            {
                        "en": "aggregate",
                        "cn": "汇总"
            },
            {
                        "en": "amplify",
                        "cn": "放大；增强"
            },
            {
                        "en": "articulate",
                        "cn": "清楚表达"
            },
            {
                        "en": "conceptualize",
                        "cn": "构思"
            },
            {
                        "en": "converge",
                        "cn": "汇聚"
            },
            {
                        "en": "correlate",
                        "cn": "相关"
            },
            {
                        "en": "devise",
                        "cn": "设计；想出"
            },
            {
                        "en": "disseminate",
                        "cn": "传播"
            },
            {
                        "en": "document",
                        "cn": "记录"
            },
            {
                        "en": "encompass",
                        "cn": "包含"
            },
            {
                        "en": "envision",
                        "cn": "设想"
            },
            {
                        "en": "hypothesize",
                        "cn": "假设"
            },
            {
                        "en": "leverage",
                        "cn": "利用"
            },
            {
                        "en": "navigate",
                        "cn": "导航；应对"
            },
            {
                        "en": "outline",
                        "cn": "概述"
            },
            {
                        "en": "prioritize",
                        "cn": "优先处理"
            },
            {
                        "en": "streamline",
                        "cn": "简化；使高效"
            },
            {
                        "en": "substantiate",
                        "cn": "证实"
            },
            {
                        "en": "synthesize",
                        "cn": "综合"
            },
            {
                        "en": "translate",
                        "cn": "翻译；转化"
            },
            {
                        "en": "authenticate",
                        "cn": "验证真实性"
            },
            {
                        "en": "concur",
                        "cn": "同意"
            }
];

// 常见英语名词 2,000 词｜按英语常见度筛选，并覆盖生活、学习与托福场景
// 字段：en 英文；cn 中文；category 场景；level 难度；frequency Zipf词频；rank 英语综合词频顺位
// 生成日期：2026-09-07
const NOUNS_DATA = [
  {
    "en": "time",
    "cn": "时间；次数",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 6.29,
    "rank": 60
  },
  {
    "en": "person",
    "cn": "人；个人",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 6.25,
    "rank": 66
  },
  {
    "en": "back",
    "cn": "背部；后面",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 6.04,
    "rank": 93
  },
  {
    "en": "way",
    "cn": "方法；方式",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 6.01,
    "rank": 101
  },
  {
    "en": "need",
    "cn": "需要；需求",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.97,
    "rank": 112
  },
  {
    "en": "right",
    "cn": "权利；右边",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.96,
    "rank": 115
  },
  {
    "en": "work",
    "cn": "工作；作品",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.96,
    "rank": 116
  },
  {
    "en": "year",
    "cn": "年；年度",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.96,
    "rank": 117
  },
  {
    "en": "day",
    "cn": "天；白天",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.95,
    "rank": 120
  },
  {
    "en": "life",
    "cn": "生命；生活",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.89,
    "rank": 134
  },
  {
    "en": "world",
    "cn": "世界",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.89,
    "rank": 136
  },
  {
    "en": "love",
    "cn": "爱；爱情",
    "pos": "noun",
    "category": "情感",
    "level": "基础",
    "frequency": 5.82,
    "rank": 147
  },
  {
    "en": "man",
    "cn": "男人；人类",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.82,
    "rank": 148
  },
  {
    "en": "home",
    "cn": "家；住所",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.81,
    "rank": 149
  },
  {
    "en": "look",
    "cn": "外表；神情",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.81,
    "rank": 151
  },
  {
    "en": "use",
    "cn": "用途；使用",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.81,
    "rank": 153
  },
  {
    "en": "part",
    "cn": "部分；角色",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 5.78,
    "rank": 162
  },
  {
    "en": "state",
    "cn": "状态；州；国家",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.78,
    "rank": 163
  },
  {
    "en": "help",
    "cn": "帮助；助手",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.75,
    "rank": 171
  },
  {
    "en": "thing",
    "cn": "事物；事情",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.74,
    "rank": 179
  },
  {
    "en": "game",
    "cn": "游戏；比赛",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.72,
    "rank": 182
  },
  {
    "en": "house",
    "cn": "房屋；住宅",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.71,
    "rank": 186
  },
  {
    "en": "place",
    "cn": "地方；位置",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.71,
    "rank": 187
  },
  {
    "en": "school",
    "cn": "学校；学派",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.71,
    "rank": 188
  },
  {
    "en": "end",
    "cn": "末端；结束",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.68,
    "rank": 196
  },
  {
    "en": "show",
    "cn": "演出；节目",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.68,
    "rank": 199
  },
  {
    "en": "team",
    "cn": "团队；队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.67,
    "rank": 203
  },
  {
    "en": "family",
    "cn": "家庭；家人",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.66,
    "rank": 205
  },
  {
    "en": "money",
    "cn": "钱；货币",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.64,
    "rank": 210
  },
  {
    "en": "number",
    "cn": "数字；数量",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.62,
    "rank": 216
  },
  {
    "en": "city",
    "cn": "城市",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.61,
    "rank": 217
  },
  {
    "en": "lot",
    "cn": "书库；场地",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 5.61,
    "rank": 219
  },
  {
    "en": "name",
    "cn": "名字；名称",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.61,
    "rank": 220
  },
  {
    "en": "night",
    "cn": "夜；夜间",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.61,
    "rank": 221
  },
  {
    "en": "play",
    "cn": "剧本",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.61,
    "rank": 222
  },
  {
    "en": "company",
    "cn": "公司；陪伴",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.6,
    "rank": 224
  },
  {
    "en": "set",
    "cn": "一套",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.59,
    "rank": 234
  },
  {
    "en": "thought",
    "cn": "主意；思想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.59,
    "rank": 235
  },
  {
    "en": "government",
    "cn": "政府；治理",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.57,
    "rank": 240
  },
  {
    "en": "group",
    "cn": "群体；小组",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.57,
    "rank": 241
  },
  {
    "en": "public",
    "cn": "世人；同好者",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.57,
    "rank": 243
  },
  {
    "en": "top",
    "cn": "顶方；尖峰",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.57,
    "rank": 244
  },
  {
    "en": "woman",
    "cn": "女人；女性",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.57,
    "rank": 245
  },
  {
    "en": "business",
    "cn": "商业；生意；事务",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.56,
    "rank": 246
  },
  {
    "en": "care",
    "cn": "援助；小心",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.56,
    "rank": 247
  },
  {
    "en": "start",
    "cn": "开始",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.56,
    "rank": 248
  },
  {
    "en": "system",
    "cn": "系统；制度",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.56,
    "rank": 249
  },
  {
    "en": "week",
    "cn": "一个星期；周",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.56,
    "rank": 251
  },
  {
    "en": "case",
    "cn": "情况；案例；案件",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.55,
    "rank": 255
  },
  {
    "en": "change",
    "cn": "变化；零钱",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.54,
    "rank": 259
  },
  {
    "en": "point",
    "cn": "要点；观点；点",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.54,
    "rank": 265
  },
  {
    "en": "support",
    "cn": "帮助",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.53,
    "rank": 276
  },
  {
    "en": "music",
    "cn": "音乐",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.52,
    "rank": 279
  },
  {
    "en": "power",
    "cn": "力量；权力；电力",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.52,
    "rank": 280
  },
  {
    "en": "stop",
    "cn": "中途短暂的停留",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.52,
    "rank": 283
  },
  {
    "en": "water",
    "cn": "水；水域",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.52,
    "rank": 284
  },
  {
    "en": "call",
    "cn": "电话；叫喊",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.51,
    "rank": 287
  },
  {
    "en": "head",
    "cn": "头部；负责人",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.51,
    "rank": 288
  },
  {
    "en": "job",
    "cn": "工作；职位",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.5,
    "rank": 296
  },
  {
    "en": "side",
    "cn": "一侧；方面",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.5,
    "rank": 297
  },
  {
    "en": "line",
    "cn": "战斗编队系列",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.49,
    "rank": 306
  },
  {
    "en": "order",
    "cn": "社会等级",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.49,
    "rank": 307
  },
  {
    "en": "party",
    "cn": "党；社交聚会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.49,
    "rank": 308
  },
  {
    "en": "run",
    "cn": "化验",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.49,
    "rank": 309
  },
  {
    "en": "service",
    "cn": "服务；公共事业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.49,
    "rank": 311
  },
  {
    "en": "country",
    "cn": "国家；乡村",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.48,
    "rank": 313
  },
  {
    "en": "season",
    "cn": "季节；季",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.48,
    "rank": 315
  },
  {
    "en": "shit",
    "cn": "大便",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.48,
    "rank": 316
  },
  {
    "en": "child",
    "cn": "儿子或女儿",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.47,
    "rank": 318
  },
  {
    "en": "general",
    "cn": "将军",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.47,
    "rank": 320
  },
  {
    "en": "area",
    "cn": "地区；领域；面积",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.46,
    "rank": 325
  },
  {
    "en": "law",
    "cn": "法律系统；自然法",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.46,
    "rank": 329
  },
  {
    "en": "war",
    "cn": "冲突；处于交战状态",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.46,
    "rank": 332
  },
  {
    "en": "whole",
    "cn": "单位",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.46,
    "rank": 333
  },
  {
    "en": "car",
    "cn": "机动车；有轨车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.45,
    "rank": 334
  },
  {
    "en": "face",
    "cn": "人类的脸",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.45,
    "rank": 335
  },
  {
    "en": "kind",
    "cn": "种类；类型",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.45,
    "rank": 337
  },
  {
    "en": "president",
    "cn": "主席",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.45,
    "rank": 340
  },
  {
    "en": "story",
    "cn": "故事；报道",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.45,
    "rank": 341
  },
  {
    "en": "course",
    "cn": "课",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.44,
    "rank": 343
  },
  {
    "en": "health",
    "cn": "健康；卫生",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.44,
    "rank": 345
  },
  {
    "en": "hope",
    "cn": "希望",
    "pos": "noun",
    "category": "情感",
    "level": "基础",
    "frequency": 5.44,
    "rank": 346
  },
  {
    "en": "news",
    "cn": "情报；新闻",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.44,
    "rank": 350
  },
  {
    "en": "book",
    "cn": "书；书籍",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.43,
    "rank": 353
  },
  {
    "en": "friend",
    "cn": "朋友",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.43,
    "rank": 355
  },
  {
    "en": "information",
    "cn": "信息；资料",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.43,
    "rank": 357
  },
  {
    "en": "post",
    "cn": "岗位；兵营",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.43,
    "rank": 360
  },
  {
    "en": "thanks",
    "cn": "感谢",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.43,
    "rank": 362
  },
  {
    "en": "video",
    "cn": "录像",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.43,
    "rank": 363
  },
  {
    "en": "talk",
    "cn": "交谈",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.42,
    "rank": 368
  },
  {
    "en": "court",
    "cn": "仲裁庭；法庭",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.41,
    "rank": 370
  },
  {
    "en": "fact",
    "cn": "事实",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.41,
    "rank": 371
  },
  {
    "en": "guy",
    "cn": "支索",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.41,
    "rank": 373
  },
  {
    "en": "hand",
    "cn": "手；帮助；指针",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.41,
    "rank": 375
  },
  {
    "en": "level",
    "cn": "水平；等级",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.41,
    "rank": 377
  },
  {
    "en": "mind",
    "cn": "头",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.41,
    "rank": 378
  },
  {
    "en": "body",
    "cn": "身体；主体",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.4,
    "rank": 382
  },
  {
    "en": "control",
    "cn": "克制",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.4,
    "rank": 384
  },
  {
    "en": "death",
    "cn": "死；死亡",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.4,
    "rank": 385
  },
  {
    "en": "food",
    "cn": "滋养物",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.4,
    "rank": 386
  },
  {
    "en": "hour",
    "cn": "60分钟；时钟时间",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.4,
    "rank": 388
  },
  {
    "en": "office",
    "cn": "事务所",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.4,
    "rank": 389
  },
  {
    "en": "pay",
    "cn": "作报偿的东西",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.4,
    "rank": 390
  },
  {
    "en": "problem",
    "cn": "问题；难题",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.4,
    "rank": 391
  },
  {
    "en": "history",
    "cn": "历史；经历",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.39,
    "rank": 397
  },
  {
    "en": "research",
    "cn": "研究；调查",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.39,
    "rank": 402
  },
  {
    "en": "room",
    "cn": "房间；空间",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.39,
    "rank": 403
  },
  {
    "en": "university",
    "cn": "大学师生",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.39,
    "rank": 407
  },
  {
    "en": "girl",
    "cn": "女儿",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.38,
    "rank": 413
  },
  {
    "en": "matter",
    "cn": "物质",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.38,
    "rank": 415
  },
  {
    "en": "air",
    "cn": "大气；空中",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.37,
    "rank": 418
  },
  {
    "en": "bit",
    "cn": "一点；断片",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 5.37,
    "rank": 419
  },
  {
    "en": "playing",
    "cn": "演戏",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.37,
    "rank": 424
  },
  {
    "en": "class",
    "cn": "年级；社会阶级",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.36,
    "rank": 430
  },
  {
    "en": "idea",
    "cn": "主意",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.36,
    "rank": 434
  },
  {
    "en": "past",
    "cn": "昔日",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.36,
    "rank": 437
  },
  {
    "en": "cause",
    "cn": "原因；起因",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.35,
    "rank": 441
  },
  {
    "en": "member",
    "cn": "会员；一分子",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.35,
    "rank": 445
  },
  {
    "en": "month",
    "cn": "月",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.35,
    "rank": 446
  },
  {
    "en": "move",
    "cn": "搬家；动作",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.35,
    "rank": 447
  },
  {
    "en": "question",
    "cn": "问题；疑问",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.35,
    "rank": 448
  },
  {
    "en": "series",
    "cn": "序列",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.35,
    "rank": 450
  },
  {
    "en": "community",
    "cn": "社区；群体",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.34,
    "rank": 454
  },
  {
    "en": "watch",
    "cn": "怀表；值班时间",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.34,
    "rank": 461
  },
  {
    "en": "future",
    "cn": "今后；期货",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.33,
    "rank": 466
  },
  {
    "en": "light",
    "cn": "光源",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.33,
    "rank": 467
  },
  {
    "en": "morning",
    "cn": "上午；天亮",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.33,
    "rank": 470
  },
  {
    "en": "police",
    "cn": "公安",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.33,
    "rank": 471
  },
  {
    "en": "age",
    "cn": "寿命；历史时代",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.32,
    "rank": 475
  },
  {
    "en": "deal",
    "cn": "买卖",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.32,
    "rank": 477
  },
  {
    "en": "reason",
    "cn": "原因；理由",
    "pos": "noun",
    "category": "动机与目标",
    "level": "基础",
    "frequency": 5.32,
    "rank": 479
  },
  {
    "en": "report",
    "cn": "报告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.32,
    "rank": 481
  },
  {
    "en": "turn",
    "cn": "弯；回转",
    "pos": "noun",
    "category": "形状与空间",
    "level": "基础",
    "frequency": 5.32,
    "rank": 484
  },
  {
    "en": "check",
    "cn": "支票；评估",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.31,
    "rank": 487
  },
  {
    "en": "development",
    "cn": "发展；开发",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.31,
    "rank": 488
  },
  {
    "en": "form",
    "cn": "外形",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.31,
    "rank": 489
  },
  {
    "en": "heart",
    "cn": "内心；心",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.31,
    "rank": 491
  },
  {
    "en": "minute",
    "cn": "分；一会儿",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.31,
    "rank": 492
  },
  {
    "en": "act",
    "cn": "条例；作为",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.3,
    "rank": 497
  },
  {
    "en": "fire",
    "cn": "火",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.3,
    "rank": 501
  },
  {
    "en": "fun",
    "cn": "玩笑",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.3,
    "rank": 502
  },
  {
    "en": "phone",
    "cn": "电话；受话器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.3,
    "rank": 506
  },
  {
    "en": "player",
    "cn": "比赛的人；演员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.3,
    "rank": 507
  },
  {
    "en": "art",
    "cn": "艺术品；艺术",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.29,
    "rank": 508
  },
  {
    "en": "building",
    "cn": "大厦",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.29,
    "rank": 510
  },
  {
    "en": "market",
    "cn": "副食商店",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.29,
    "rank": 513
  },
  {
    "en": "plan",
    "cn": "计划；图样",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.29,
    "rank": 516
  },
  {
    "en": "education",
    "cn": "教育",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.28,
    "rank": 526
  },
  {
    "en": "front",
    "cn": "前线",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.28,
    "rank": 529
  },
  {
    "en": "kid",
    "cn": "小山羊皮",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.28,
    "rank": 530
  },
  {
    "en": "list",
    "cn": "列表；倾向",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.28,
    "rank": 531
  },
  {
    "en": "street",
    "cn": "马路；犯罪多的区域",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.28,
    "rank": 535
  },
  {
    "en": "college",
    "cn": "大学；学院的建筑物",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.27,
    "rank": 538
  },
  {
    "en": "current",
    "cn": "电流",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.27,
    "rank": 539
  },
  {
    "en": "example",
    "cn": "事例；典型",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.27,
    "rank": 540
  },
  {
    "en": "experience",
    "cn": "经验；经历",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.27,
    "rank": 541
  },
  {
    "en": "program",
    "cn": "计划；广播",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.27,
    "rank": 545
  },
  {
    "en": "baby",
    "cn": "娃娃",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.26,
    "rank": 547
  },
  {
    "en": "chance",
    "cn": "机会；可能性",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.26,
    "rank": 548
  },
  {
    "en": "father",
    "cn": "父",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.26,
    "rank": 549
  },
  {
    "en": "process",
    "cn": "过程；流程",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.26,
    "rank": 551
  },
  {
    "en": "study",
    "cn": "学习；研究；书房",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.26,
    "rank": 554
  },
  {
    "en": "word",
    "cn": "单词；话语",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.26,
    "rank": 555
  },
  {
    "en": "action",
    "cn": "活动；军事行动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.25,
    "rank": 557
  },
  {
    "en": "self",
    "cn": "自我",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.25,
    "rank": 564
  },
  {
    "en": "student",
    "cn": "学生；学习者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.25,
    "rank": 565
  },
  {
    "en": "board",
    "cn": "活动船板；厚板",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.24,
    "rank": 567
  },
  {
    "en": "cost",
    "cn": "代价；价值",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.24,
    "rank": 568
  },
  {
    "en": "field",
    "cn": "田；战场",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.24,
    "rank": 571
  },
  {
    "en": "moment",
    "cn": "刹那；一会儿",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.24,
    "rank": 575
  },
  {
    "en": "mother",
    "cn": "妈妈",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.24,
    "rank": 576
  },
  {
    "en": "road",
    "cn": "公路",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.24,
    "rank": 577
  },
  {
    "en": "thinking",
    "cn": "思想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.24,
    "rank": 579
  },
  {
    "en": "town",
    "cn": "城",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.24,
    "rank": 580
  },
  {
    "en": "energy",
    "cn": "活力",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.23,
    "rank": 584
  },
  {
    "en": "fight",
    "cn": "战争；争吵",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.23,
    "rank": 585
  },
  {
    "en": "force",
    "cn": "力气",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.23,
    "rank": 587
  },
  {
    "en": "issue",
    "cn": "问题；议题；期号",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.23,
    "rank": 589
  },
  {
    "en": "price",
    "cn": "价值；价格",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.23,
    "rank": 592
  },
  {
    "en": "rest",
    "cn": "余数；休息",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 5.23,
    "rank": 594
  },
  {
    "en": "result",
    "cn": "结果；后果",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.23,
    "rank": 595
  },
  {
    "en": "space",
    "cn": "空地",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.23,
    "rank": 598
  },
  {
    "en": "summer",
    "cn": "夏",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.23,
    "rank": 599
  },
  {
    "en": "term",
    "cn": "专用名词；期限",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.23,
    "rank": 600
  },
  {
    "en": "wife",
    "cn": "太太",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.23,
    "rank": 601
  },
  {
    "en": "date",
    "cn": "日子；护花使者",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.22,
    "rank": 605
  },
  {
    "en": "land",
    "cn": "不动产",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.22,
    "rank": 608
  },
  {
    "en": "project",
    "cn": "事业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.22,
    "rank": 610
  },
  {
    "en": "shot",
    "cn": "发射",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.22,
    "rank": 612
  },
  {
    "en": "site",
    "cn": "位置；网站",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.22,
    "rank": 613
  },
  {
    "en": "account",
    "cn": "历史；报告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.21,
    "rank": 616
  },
  {
    "en": "eye",
    "cn": "眼",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.21,
    "rank": 619
  },
  {
    "en": "parent",
    "cn": "双亲之一",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.21,
    "rank": 622
  },
  {
    "en": "period",
    "cn": "一段时间；周期",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.21,
    "rank": 623
  },
  {
    "en": "position",
    "cn": "见解",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.21,
    "rank": 624
  },
  {
    "en": "record",
    "cn": "最高纪录",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.21,
    "rank": 625
  },
  {
    "en": "club",
    "cn": "俱乐部；大头棒",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.2,
    "rank": 630
  },
  {
    "en": "film",
    "cn": "影片；电影胶片",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.2,
    "rank": 633
  },
  {
    "en": "lead",
    "cn": "领先；铅",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.2,
    "rank": 636
  },
  {
    "en": "security",
    "cn": "保卫；保护",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.2,
    "rank": 641
  },
  {
    "en": "share",
    "cn": "份额；参股",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.2,
    "rank": 642
  },
  {
    "en": "center",
    "cn": "中央；中心",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.19,
    "rank": 649
  },
  {
    "en": "couple",
    "cn": "一双；一些",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.19,
    "rank": 651
  },
  {
    "en": "industry",
    "cn": "产业；勤劳",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.19,
    "rank": 656
  },
  {
    "en": "return",
    "cn": "纳税申报单；回乡",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.19,
    "rank": 663
  },
  {
    "en": "sense",
    "cn": "含义；感觉",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.19,
    "rank": 665
  },
  {
    "en": "star",
    "cn": "专家；恒星",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.19,
    "rank": 666
  },
  {
    "en": "test",
    "cn": "化验；测验",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.19,
    "rank": 667
  },
  {
    "en": "view",
    "cn": "见解；全景",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.19,
    "rank": 668
  },
  {
    "en": "event",
    "cn": "情况",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.18,
    "rank": 673
  },
  {
    "en": "middle",
    "cn": "中央；中期",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.18,
    "rank": 678
  },
  {
    "en": "training",
    "cn": "准备工作",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.18,
    "rank": 684
  },
  {
    "en": "answer",
    "cn": "回答",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.17,
    "rank": 687
  },
  {
    "en": "boy",
    "cn": "少年",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.17,
    "rank": 688
  },
  {
    "en": "design",
    "cn": "图样",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.17,
    "rank": 689
  },
  {
    "en": "gold",
    "cn": "金币；金",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.17,
    "rank": 692
  },
  {
    "en": "king",
    "cn": "国王；企业界大亨",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.17,
    "rank": 697
  },
  {
    "en": "policy",
    "cn": "保险单",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.17,
    "rank": 699
  },
  {
    "en": "society",
    "cn": "社会；协会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.17,
    "rank": 700
  },
  {
    "en": "average",
    "cn": "基准",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.16,
    "rank": 704
  },
  {
    "en": "bank",
    "cn": "岸；存放款金融机构",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.16,
    "rank": 705
  },
  {
    "en": "church",
    "cn": "教会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.16,
    "rank": 708
  },
  {
    "en": "movie",
    "cn": "影片",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.16,
    "rank": 715
  },
  {
    "en": "park",
    "cn": "公园；球场",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.16,
    "rank": 717
  },
  {
    "en": "performance",
    "cn": "演奏；实行",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.16,
    "rank": 718
  },
  {
    "en": "press",
    "cn": "急迫；印刷机",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.16,
    "rank": 719
  },
  {
    "en": "role",
    "cn": "人物；作用",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.16,
    "rank": 721
  },
  {
    "en": "worth",
    "cn": "价值",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 5.16,
    "rank": 726
  },
  {
    "en": "bill",
    "cn": "庄票",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.15,
    "rank": 729
  },
  {
    "en": "director",
    "cn": "主任；理事",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.15,
    "rank": 732
  },
  {
    "en": "ground",
    "cn": "土地；泥土",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.15,
    "rank": 735
  },
  {
    "en": "meeting",
    "cn": "邂逅",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.15,
    "rank": 736
  },
  {
    "en": "relationship",
    "cn": "关系",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 5.15,
    "rank": 740
  },
  {
    "en": "sound",
    "cn": "听觉",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.15,
    "rank": 742
  },
  {
    "en": "source",
    "cn": "开始",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.15,
    "rank": 743
  },
  {
    "en": "value",
    "cn": "价值；数值",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.15,
    "rank": 745
  },
  {
    "en": "evidence",
    "cn": "基本原则",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.14,
    "rank": 746
  },
  {
    "en": "official",
    "cn": "做负责人或行使特殊使命的人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.14,
    "rank": 749
  },
  {
    "en": "production",
    "cn": "制作；出戏",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.14,
    "rank": 751
  },
  {
    "en": "rate",
    "cn": "率；费率",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.14,
    "rank": 752
  },
  {
    "en": "round",
    "cn": "循环地",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.14,
    "rank": 754
  },
  {
    "en": "stand",
    "cn": "基座",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.14,
    "rank": 756
  },
  {
    "en": "stuff",
    "cn": "东西",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.14,
    "rank": 757
  },
  {
    "en": "tax",
    "cn": "税",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.14,
    "rank": 758
  },
  {
    "en": "amount",
    "cn": "一笔钱",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.13,
    "rank": 760
  },
  {
    "en": "drive",
    "cn": "传动装置；活动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.13,
    "rank": 764
  },
  {
    "en": "fall",
    "cn": "秋",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.13,
    "rank": 766
  },
  {
    "en": "feeling",
    "cn": "心情",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.13,
    "rank": 769
  },
  {
    "en": "green",
    "cn": "绿色；公园",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.13,
    "rank": 771
  },
  {
    "en": "league",
    "cn": "里格",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.13,
    "rank": 772
  },
  {
    "en": "management",
    "cn": "指导",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.13,
    "rank": 773
  },
  {
    "en": "match",
    "cn": "火柴；比赛",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.13,
    "rank": 774
  },
  {
    "en": "model",
    "cn": "模型；模特",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.13,
    "rank": 775
  },
  {
    "en": "picture",
    "cn": "图画",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.13,
    "rank": 777
  },
  {
    "en": "size",
    "cn": "大小；上浆",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.13,
    "rank": 778
  },
  {
    "en": "step",
    "cn": "措施；以步测量",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.13,
    "rank": 779
  },
  {
    "en": "trust",
    "cn": "信托",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.13,
    "rank": 780
  },
  {
    "en": "key",
    "cn": "钥匙",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.12,
    "rank": 788
  },
  {
    "en": "page",
    "cn": "面",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.12,
    "rank": 791
  },
  {
    "en": "range",
    "cn": "界限；牧场",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.12,
    "rank": 793
  },
  {
    "en": "review",
    "cn": "分析",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.12,
    "rank": 794
  },
  {
    "en": "science",
    "cn": "科学；学科",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.12,
    "rank": 795
  },
  {
    "en": "trade",
    "cn": "职业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.12,
    "rank": 796
  },
  {
    "en": "attention",
    "cn": "专心；援助",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.11,
    "rank": 800
  },
  {
    "en": "brother",
    "cn": "亲兄弟",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.11,
    "rank": 801
  },
  {
    "en": "character",
    "cn": "虚构人物",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.11,
    "rank": 803
  },
  {
    "en": "chief",
    "cn": "领袖；上司",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.11,
    "rank": 804
  },
  {
    "en": "cup",
    "cn": "杯；一杯之量",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.11,
    "rank": 805
  },
  {
    "en": "football",
    "cn": "橄榄球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.11,
    "rank": 806
  },
  {
    "en": "property",
    "cn": "地产",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.11,
    "rank": 815
  },
  {
    "en": "quality",
    "cn": "品质",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.11,
    "rank": 816
  },
  {
    "en": "vote",
    "cn": "投票；参政权",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.11,
    "rank": 820
  },
  {
    "en": "blood",
    "cn": "血",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.1,
    "rank": 823
  },
  {
    "en": "dog",
    "cn": "犬",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 5.1,
    "rank": 826
  },
  {
    "en": "language",
    "cn": "语言",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.1,
    "rank": 831
  },
  {
    "en": "oil",
    "cn": "油",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.1,
    "rank": 834
  },
  {
    "en": "stage",
    "cn": "时期；程度",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.1,
    "rank": 837
  },
  {
    "en": "title",
    "cn": "标题",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.1,
    "rank": 839
  },
  {
    "en": "article",
    "cn": "文章；条款",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.09,
    "rank": 841
  },
  {
    "en": "attack",
    "cn": "攻击",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.09,
    "rank": 842
  },
  {
    "en": "release",
    "cn": "放出",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.09,
    "rank": 856
  },
  {
    "en": "situation",
    "cn": "事态；位置",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.09,
    "rank": 857
  },
  {
    "en": "technology",
    "cn": "技术；科技",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.09,
    "rank": 858
  },
  {
    "en": "choice",
    "cn": "抉择",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.08,
    "rank": 862
  },
  {
    "en": "code",
    "cn": "编码",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.08,
    "rank": 863
  },
  {
    "en": "council",
    "cn": "委员会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.08,
    "rank": 866
  },
  {
    "en": "cover",
    "cn": "掩蔽物；毛毯",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.08,
    "rank": 867
  },
  {
    "en": "door",
    "cn": "门；入口",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.08,
    "rank": 869
  },
  {
    "en": "election",
    "cn": "选举；被选举",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.08,
    "rank": 870
  },
  {
    "en": "hair",
    "cn": "头发；绒毛",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 5.08,
    "rank": 876
  },
  {
    "en": "increase",
    "cn": "增加量；增值",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 5.08,
    "rank": 877
  },
  {
    "en": "race",
    "cn": "比赛；人种",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.08,
    "rank": 882
  },
  {
    "en": "sign",
    "cn": "征兆；信号",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.08,
    "rank": 885
  },
  {
    "en": "staff",
    "cn": "人员",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.08,
    "rank": 888
  },
  {
    "en": "union",
    "cn": "协会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.08,
    "rank": 890
  },
  {
    "en": "bed",
    "cn": "床；圃",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.07,
    "rank": 893
  },
  {
    "en": "career",
    "cn": "专业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.07,
    "rank": 896
  },
  {
    "en": "daughter",
    "cn": "女儿",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.07,
    "rank": 900
  },
  {
    "en": "figure",
    "cn": "人体；数字",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.07,
    "rank": 904
  },
  {
    "en": "hospital",
    "cn": "医务室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.07,
    "rank": 905
  },
  {
    "en": "loss",
    "cn": "失去的东西；减少",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.07,
    "rank": 907
  },
  {
    "en": "paper",
    "cn": "纸；作文",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.07,
    "rank": 910
  },
  {
    "en": "version",
    "cn": "从某一独特角度的一种解释；变化了的形式",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.07,
    "rank": 917
  },
  {
    "en": "army",
    "cn": "军；团队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.06,
    "rank": 921
  },
  {
    "en": "earth",
    "cn": "世界；泥土",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.06,
    "rank": 923
  },
  {
    "en": "goal",
    "cn": "目标；目的地",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.06,
    "rank": 925
  },
  {
    "en": "practice",
    "cn": "惯例；习题",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.06,
    "rank": 931
  },
  {
    "en": "rule",
    "cn": "准则；习俗",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.06,
    "rank": 932
  },
  {
    "en": "sea",
    "cn": "大量",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.06,
    "rank": 933
  },
  {
    "en": "success",
    "cn": "成功",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.06,
    "rank": 935
  },
  {
    "en": "access",
    "cn": "入场权；享用权",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.05,
    "rank": 940
  },
  {
    "en": "base",
    "cn": "基地；地基",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.05,
    "rank": 942
  },
  {
    "en": "mark",
    "cn": "分数；标的",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.05,
    "rank": 949
  },
  {
    "en": "offer",
    "cn": "提供；尝试",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.05,
    "rank": 951
  },
  {
    "en": "pas",
    "cn": "爸；镤",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.05,
    "rank": 952
  },
  {
    "en": "risk",
    "cn": "冒险",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.05,
    "rank": 955
  },
  {
    "en": "sleep",
    "cn": "睡眠；无意识状态",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.05,
    "rank": 957
  },
  {
    "en": "table",
    "cn": "表格；餐桌",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.05,
    "rank": 958
  },
  {
    "en": "truth",
    "cn": "真实性；事实",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.05,
    "rank": 960
  },
  {
    "en": "ball",
    "cn": "球",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 961
  },
  {
    "en": "box",
    "cn": "盒子；分隔式雅座",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 962
  },
  {
    "en": "card",
    "cn": "卡；身份卡",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 964
  },
  {
    "en": "district",
    "cn": "地区",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.04,
    "rank": 967
  },
  {
    "en": "mine",
    "cn": "开矿；地雷",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 971
  },
  {
    "en": "minister",
    "cn": "教区牧师；大臣",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.04,
    "rank": 972
  },
  {
    "en": "note",
    "cn": "短信；音符",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.04,
    "rank": 973
  },
  {
    "en": "percent",
    "cn": "比率",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 5.04,
    "rank": 974
  },
  {
    "en": "piece",
    "cn": "一片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 975
  },
  {
    "en": "product",
    "cn": "产品；乘积",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 976
  },
  {
    "en": "visit",
    "cn": "作客",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.04,
    "rank": 980
  },
  {
    "en": "wall",
    "cn": "墙",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.04,
    "rank": 981
  },
  {
    "en": "culture",
    "cn": "教化",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.03,
    "rank": 987
  },
  {
    "en": "fan",
    "cn": "电风扇；爱好者",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.03,
    "rank": 989
  },
  {
    "en": "growth",
    "cn": "个体发生；发展",
    "pos": "noun",
    "category": "过程与变化",
    "level": "基础",
    "frequency": 5.03,
    "rank": 992
  },
  {
    "en": "officer",
    "cn": "警官",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.03,
    "rank": 995
  },
  {
    "en": "pain",
    "cn": "疼；悲痛",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.03,
    "rank": 996
  },
  {
    "en": "respect",
    "cn": "尊敬",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 5.03,
    "rank": 999
  },
  {
    "en": "response",
    "cn": "回答",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.03,
    "rank": 1000
  },
  {
    "en": "river",
    "cn": "川",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.03,
    "rank": 1001
  },
  {
    "en": "rock",
    "cn": "岩石；石头",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.03,
    "rank": 1002
  },
  {
    "en": "standard",
    "cn": "标准",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.03,
    "rank": 1006
  },
  {
    "en": "album",
    "cn": "唱片；册子",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1010
  },
  {
    "en": "century",
    "cn": "世纪；一百",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1011
  },
  {
    "en": "charge",
    "cn": "费用",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1012
  },
  {
    "en": "effect",
    "cn": "影响；效果",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1015
  },
  {
    "en": "network",
    "cn": "网络；广播网",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1023
  },
  {
    "en": "peace",
    "cn": "和平",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1024
  },
  {
    "en": "sale",
    "cn": "卖；廉价出售",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1028
  },
  {
    "en": "store",
    "cn": "商店；储备",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1030
  },
  {
    "en": "track",
    "cn": "路；循路而行",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1033
  },
  {
    "en": "weight",
    "cn": "重力；杠铃片",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.02,
    "rank": 1036
  },
  {
    "en": "addition",
    "cn": "增加",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1037
  },
  {
    "en": "association",
    "cn": "协会；交往",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1041
  },
  {
    "en": "beat",
    "cn": "心跳；旋律",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1042
  },
  {
    "en": "capital",
    "cn": "周转资产；资本",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1044
  },
  {
    "en": "committee",
    "cn": "委员会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1046
  },
  {
    "en": "conference",
    "cn": "讨论会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1047
  },
  {
    "en": "difference",
    "cn": "争执",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1048
  },
  {
    "en": "double",
    "cn": "特技替身演员；相似者",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1049
  },
  {
    "en": "island",
    "cn": "岛；孤立体",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1052
  },
  {
    "en": "population",
    "cn": "全体人民",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1056
  },
  {
    "en": "potential",
    "cn": "可能性",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1057
  },
  {
    "en": "pressure",
    "cn": "压力",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1058
  },
  {
    "en": "radio",
    "cn": "接收机；收音机",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1059
  },
  {
    "en": "station",
    "cn": "地位",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1061
  },
  {
    "en": "text",
    "cn": "原文；教科书",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1062
  },
  {
    "en": "treatment",
    "cn": "处理",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 5.01,
    "rank": 1063
  },
  {
    "en": "beginning",
    "cn": "开始；开端",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1066
  },
  {
    "en": "campaign",
    "cn": "竞选运动；活动",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1068
  },
  {
    "en": "content",
    "cn": "比例",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1071
  },
  {
    "en": "credit",
    "cn": "赞同；可透支额",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1072
  },
  {
    "en": "husband",
    "cn": "丈夫",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1080
  },
  {
    "en": "ice",
    "cn": "冰；宝石",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1081
  },
  {
    "en": "individual",
    "cn": "个人",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1082
  },
  {
    "en": "message",
    "cn": "信息",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1089
  },
  {
    "en": "mile",
    "cn": "英里；海里",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1090
  },
  {
    "en": "region",
    "cn": "区域",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1095
  },
  {
    "en": "speed",
    "cn": "速度",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 5.0,
    "rank": 1099
  },
  {
    "en": "contact",
    "cn": "接触；接触状态",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1102
  },
  {
    "en": "drop",
    "cn": "小滴；点滴",
    "pos": "noun",
    "category": "形状与空间",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1103
  },
  {
    "en": "foot",
    "cn": "脚；英尺",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1105
  },
  {
    "en": "link",
    "cn": "联合",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1108
  },
  {
    "en": "tour",
    "cn": "工作时间",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1112
  },
  {
    "en": "welcome",
    "cn": "欢迎",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.99,
    "rank": 1113
  },
  {
    "en": "condition",
    "cn": "形势；先决条件",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.98,
    "rank": 1117
  },
  {
    "en": "nature",
    "cn": "自然；本质",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.98,
    "rank": 1125
  },
  {
    "en": "computer",
    "cn": "电子计算机",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1136
  },
  {
    "en": "episode",
    "cn": "一集",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1138
  },
  {
    "en": "income",
    "cn": "收入",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1140
  },
  {
    "en": "justice",
    "cn": "公平；推事",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1141
  },
  {
    "en": "manager",
    "cn": "主任",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1143
  },
  {
    "en": "movement",
    "cn": "动作",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1144
  },
  {
    "en": "photo",
    "cn": "照片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1145
  },
  {
    "en": "safety",
    "cn": "保险；安全装置",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1147
  },
  {
    "en": "scene",
    "cn": "全景",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1149
  },
  {
    "en": "statement",
    "cn": "论据",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1153
  },
  {
    "en": "sun",
    "cn": "太阳；太阳光",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.97,
    "rank": 1154
  },
  {
    "en": "ability",
    "cn": "才能；才智",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1156
  },
  {
    "en": "coach",
    "cn": "指导",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1160
  },
  {
    "en": "collection",
    "cn": "集；募捐",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1161
  },
  {
    "en": "gun",
    "cn": "手枪；大炮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1168
  },
  {
    "en": "knowledge",
    "cn": "知识",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1172
  },
  {
    "en": "search",
    "cn": "搜寻；搜索",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1174
  },
  {
    "en": "subject",
    "cn": "主题",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1175
  },
  {
    "en": "train",
    "cn": "列车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.96,
    "rank": 1176
  },
  {
    "en": "author",
    "cn": "作家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1179
  },
  {
    "en": "centre",
    "cn": "中央；中心",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1180
  },
  {
    "en": "claim",
    "cn": "声称",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1181
  },
  {
    "en": "dad",
    "cn": "爸",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1182
  },
  {
    "en": "fear",
    "cn": "害怕；关心",
    "pos": "noun",
    "category": "情感",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1184
  },
  {
    "en": "fit",
    "cn": "发脾气；发作",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1185
  },
  {
    "en": "hotel",
    "cn": "宾馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1191
  },
  {
    "en": "judge",
    "cn": "推事",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1193
  },
  {
    "en": "lady",
    "cn": "女士",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1194
  },
  {
    "en": "leader",
    "cn": "会长；廉价商品",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1195
  },
  {
    "en": "letter",
    "cn": "书信；字母",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1196
  },
  {
    "en": "material",
    "cn": "东西；台布",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1198
  },
  {
    "en": "opportunity",
    "cn": "机会",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1201
  },
  {
    "en": "secretary",
    "cn": "秘书",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1206
  },
  {
    "en": "sister",
    "cn": "妹",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1207
  },
  {
    "en": "unit",
    "cn": "单位",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1209
  },
  {
    "en": "worker",
    "cn": "劳动者；工蚁",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.95,
    "rank": 1210
  },
  {
    "en": "bar",
    "cn": "酒吧；吧台",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1213
  },
  {
    "en": "battle",
    "cn": "战争；奋斗",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1214
  },
  {
    "en": "brain",
    "cn": "大脑；头",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1215
  },
  {
    "en": "contract",
    "cn": "合同",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1216
  },
  {
    "en": "degree",
    "cn": "层次；程度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1217
  },
  {
    "en": "feature",
    "cn": "特征；容貌",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1219
  },
  {
    "en": "floor",
    "cn": "地板；层",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1221
  },
  {
    "en": "hurt",
    "cn": "伤害",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1224
  },
  {
    "en": "image",
    "cn": "形象",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1225
  },
  {
    "en": "insurance",
    "cn": "保险；保险单",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1226
  },
  {
    "en": "majority",
    "cn": "多数；成年",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1227
  },
  {
    "en": "opening",
    "cn": "启",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1229
  },
  {
    "en": "opinion",
    "cn": "意见；公众意见",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1230
  },
  {
    "en": "sport",
    "cn": "体育；体育运动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.94,
    "rank": 1236
  },
  {
    "en": "administration",
    "cn": "处理；组织",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1240
  },
  {
    "en": "approach",
    "cn": "方法；途径",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1241
  },
  {
    "en": "cancer",
    "cn": "恶性肿瘤",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1244
  },
  {
    "en": "dance",
    "cn": "舞蹈",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1246
  },
  {
    "en": "direction",
    "cn": "移动路线；发展方向",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1248
  },
  {
    "en": "master",
    "cn": "技师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1250
  },
  {
    "en": "stock",
    "cn": "股本；存货",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1255
  },
  {
    "en": "weekend",
    "cn": "周末",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1257
  },
  {
    "en": "wonder",
    "cn": "奇迹",
    "pos": "noun",
    "category": "情感",
    "level": "基础",
    "frequency": 4.93,
    "rank": 1258
  },
  {
    "en": "band",
    "cn": "乐队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1262
  },
  {
    "en": "beach",
    "cn": "海滩",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1263
  },
  {
    "en": "cash",
    "cn": "现款；即时付款",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1264
  },
  {
    "en": "effort",
    "cn": "力图",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1268
  },
  {
    "en": "impact",
    "cn": "冲击；影响",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1273
  },
  {
    "en": "lack",
    "cn": "不足",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1274
  },
  {
    "en": "operation",
    "cn": "经营；工作",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1279
  },
  {
    "en": "organization",
    "cn": "团体；组织",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1280
  },
  {
    "en": "secret",
    "cn": "机密；神秘",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1284
  },
  {
    "en": "spring",
    "cn": "春；发条",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.92,
    "rank": 1286
  },
  {
    "en": "activity",
    "cn": "带消遣性的活动；活动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1290
  },
  {
    "en": "address",
    "cn": "计算机地址；住址",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1291
  },
  {
    "en": "analysis",
    "cn": "解析；分解",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1292
  },
  {
    "en": "commission",
    "cn": "委员会；佣金",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1299
  },
  {
    "en": "competition",
    "cn": "价格竞争；比赛",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1300
  },
  {
    "en": "detail",
    "cn": "细节",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1301
  },
  {
    "en": "dream",
    "cn": "梦；希望",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1303
  },
  {
    "en": "finish",
    "cn": "完结；培养",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1305
  },
  {
    "en": "luck",
    "cn": "命运；侥幸",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1312
  },
  {
    "en": "marriage",
    "cn": "婚姻；夫妇",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1313
  },
  {
    "en": "patient",
    "cn": "患者；受事",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1316
  },
  {
    "en": "resource",
    "cn": "流动资产；资源",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1317
  },
  {
    "en": "skin",
    "cn": "外皮；毛皮",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1319
  },
  {
    "en": "touch",
    "cn": "触",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.91,
    "rank": 1324
  },
  {
    "en": "damage",
    "cn": "损坏；伤害",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1329
  },
  {
    "en": "disease",
    "cn": "疾病",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1331
  },
  {
    "en": "doctor",
    "cn": "医师；当医生",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1332
  },
  {
    "en": "doubt",
    "cn": "不确定；怀疑",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1333
  },
  {
    "en": "drink",
    "cn": "酗酒；饮料",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1334
  },
  {
    "en": "fish",
    "cn": "鱼",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1339
  },
  {
    "en": "machine",
    "cn": "机器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1346
  },
  {
    "en": "notice",
    "cn": "通知",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1347
  },
  {
    "en": "overall",
    "cn": "工作服",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1348
  },
  {
    "en": "professor",
    "cn": "教授",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1350
  },
  {
    "en": "trip",
    "cn": "幻觉",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.9,
    "rank": 1356
  },
  {
    "en": "captain",
    "cn": "船长",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1359
  },
  {
    "en": "crime",
    "cn": "刑事犯罪",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1362
  },
  {
    "en": "plant",
    "cn": "工厂；植物",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1374
  },
  {
    "en": "reality",
    "cn": "世界；现实",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1375
  },
  {
    "en": "spot",
    "cn": "地方",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1377
  },
  {
    "en": "winter",
    "cn": "冬",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.89,
    "rank": 1380
  },
  {
    "en": "advice",
    "cn": "劝告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1382
  },
  {
    "en": "agreement",
    "cn": "协定；一致",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1383
  },
  {
    "en": "award",
    "cn": "奖",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1385
  },
  {
    "en": "block",
    "cn": "硬块；街区",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1386
  },
  {
    "en": "challenge",
    "cn": "挑战；盘问",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1389
  },
  {
    "en": "comment",
    "cn": "发言；说闲话",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1392
  },
  {
    "en": "equipment",
    "cn": "设备",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1393
  },
  {
    "en": "killing",
    "cn": "暴利",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1397
  },
  {
    "en": "nation",
    "cn": "共和国",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1400
  },
  {
    "en": "primary",
    "cn": "初选；初级飞羽",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1404
  },
  {
    "en": "purpose",
    "cn": "意图；作用",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1405
  },
  {
    "en": "shop",
    "cn": "商店；工场",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1408
  },
  {
    "en": "teacher",
    "cn": "教师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1411
  },
  {
    "en": "theory",
    "cn": "假说",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.88,
    "rank": 1412
  },
  {
    "en": "agency",
    "cn": "代理行；动作",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1415
  },
  {
    "en": "camera",
    "cn": "照相机",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1417
  },
  {
    "en": "cell",
    "cn": "细胞；电池",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1419
  },
  {
    "en": "coast",
    "cn": "岸",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1420
  },
  {
    "en": "drug",
    "cn": "毒品",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1422
  },
  {
    "en": "economy",
    "cn": "经济；节俭",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1423
  },
  {
    "en": "environment",
    "cn": "环境",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1424
  },
  {
    "en": "executive",
    "cn": "执行者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1425
  },
  {
    "en": "hall",
    "cn": "大厅；休息室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1427
  },
  {
    "en": "meaning",
    "cn": "含义",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1429
  },
  {
    "en": "politics",
    "cn": "政治",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1434
  },
  {
    "en": "pop",
    "cn": "爸；汽水",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1435
  },
  {
    "en": "status",
    "cn": "地位；形势",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1439
  },
  {
    "en": "trial",
    "cn": "化验",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1441
  },
  {
    "en": "weather",
    "cn": "天气",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.87,
    "rank": 1443
  },
  {
    "en": "application",
    "cn": "实际应用；申请",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1446
  },
  {
    "en": "coffee",
    "cn": "咖啡；咖啡树",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1448
  },
  {
    "en": "complex",
    "cn": "化合物",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1449
  },
  {
    "en": "division",
    "cn": "师；分切",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1451
  },
  {
    "en": "evening",
    "cn": "傍晚；后期",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1452
  },
  {
    "en": "flight",
    "cn": "楼梯的一段",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1453
  },
  {
    "en": "freedom",
    "cn": "自在；免除",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1454
  },
  {
    "en": "interview",
    "cn": "访问",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1458
  },
  {
    "en": "library",
    "cn": "图书馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1459
  },
  {
    "en": "location",
    "cn": "位置；安置",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1461
  },
  {
    "en": "murder",
    "cn": "凶杀",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1462
  },
  {
    "en": "queen",
    "cn": "蚁王；后",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.86,
    "rank": 1466
  },
  {
    "en": "attempt",
    "cn": "力图；攻击",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1476
  },
  {
    "en": "channel",
    "cn": "沟槽；凹槽",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1478
  },
  {
    "en": "distance",
    "cn": "距离",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1479
  },
  {
    "en": "exchange",
    "cn": "交流；交换",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1481
  },
  {
    "en": "fat",
    "cn": "油脂；肥胖",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1482
  },
  {
    "en": "glass",
    "cn": "玻璃；杯子",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1485
  },
  {
    "en": "protection",
    "cn": "保护",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1494
  },
  {
    "en": "ride",
    "cn": "乘车",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1498
  },
  {
    "en": "screen",
    "cn": "投影屏幕；遮光物",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1501
  },
  {
    "en": "species",
    "cn": "物种；硬币",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1505
  },
  {
    "en": "speech",
    "cn": "演说",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1506
  },
  {
    "en": "traffic",
    "cn": "交通；交易",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1507
  },
  {
    "en": "tree",
    "cn": "乔木；树形图",
    "pos": "noun",
    "category": "植物",
    "level": "基础",
    "frequency": 4.85,
    "rank": 1508
  },
  {
    "en": "airport",
    "cn": "机场",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1516
  },
  {
    "en": "animal",
    "cn": "凶残的人",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1517
  },
  {
    "en": "benefit",
    "cn": "救济金；利益",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1520
  },
  {
    "en": "bottom",
    "cn": "下侧；后部",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1521
  },
  {
    "en": "demand",
    "cn": "急需；需求",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1523
  },
  {
    "en": "engine",
    "cn": "发动机；机车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1524
  },
  {
    "en": "investment",
    "cn": "投资",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1528
  },
  {
    "en": "partner",
    "cn": "夫妻；企业合作人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1532
  },
  {
    "en": "solution",
    "cn": "解决办法；答案",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1537
  },
  {
    "en": "square",
    "cn": "正方形；二次幂",
    "pos": "noun",
    "category": "形状与空间",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1541
  },
  {
    "en": "structure",
    "cn": "组织",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1543
  },
  {
    "en": "wind",
    "cn": "气流",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1547
  },
  {
    "en": "worry",
    "cn": "困扰",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.84,
    "rank": 1548
  },
  {
    "en": "brand",
    "cn": "品牌",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1553
  },
  {
    "en": "bus",
    "cn": "公共汽车；总线",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1554
  },
  {
    "en": "cent",
    "cn": "分；一分",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1555
  },
  {
    "en": "count",
    "cn": "总数",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1557
  },
  {
    "en": "lake",
    "cn": "湖；沉淀染料",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1564
  },
  {
    "en": "mouth",
    "cn": "口",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1569
  },
  {
    "en": "owner",
    "cn": "所有人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1570
  },
  {
    "en": "scale",
    "cn": "数值范围；比例",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1575
  },
  {
    "en": "score",
    "cn": "分数；得分",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1576
  },
  {
    "en": "surface",
    "cn": "表面",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1580
  },
  {
    "en": "throw",
    "cn": "孤注一掷",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1581
  },
  {
    "en": "wedding",
    "cn": "婚礼",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.83,
    "rank": 1586
  },
  {
    "en": "arm",
    "cn": "手臂；分支",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1591
  },
  {
    "en": "budget",
    "cn": "经费；预算报告",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1593
  },
  {
    "en": "estate",
    "cn": "财产；不动产",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1595
  },
  {
    "en": "faith",
    "cn": "信义",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1597
  },
  {
    "en": "fashion",
    "cn": "形式；时尚",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1598
  },
  {
    "en": "fund",
    "cn": "基金；储备",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1600
  },
  {
    "en": "generation",
    "cn": "代；一世",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1601
  },
  {
    "en": "hearing",
    "cn": "审讯",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1602
  },
  {
    "en": "hill",
    "cn": "小山",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1603
  },
  {
    "en": "metal",
    "cn": "金属；合金",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1607
  },
  {
    "en": "profile",
    "cn": "侧面",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1610
  },
  {
    "en": "seat",
    "cn": "座位；后部",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1615
  },
  {
    "en": "target",
    "cn": "标的",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1619
  },
  {
    "en": "understanding",
    "cn": "协定；同情",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1620
  },
  {
    "en": "village",
    "cn": "乡村",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.82,
    "rank": 1621
  },
  {
    "en": "agent",
    "cn": "作用物；代理人",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1622
  },
  {
    "en": "authority",
    "cn": "官方；权威",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1625
  },
  {
    "en": "basis",
    "cn": "基点或基础；基本原理",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1626
  },
  {
    "en": "draw",
    "cn": "平局",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1629
  },
  {
    "en": "employee",
    "cn": "职员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1631
  },
  {
    "en": "foundation",
    "cn": "基础；基金会",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1635
  },
  {
    "en": "gain",
    "cn": "增加量；利润",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1636
  },
  {
    "en": "memory",
    "cn": "回忆；记忆",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1641
  },
  {
    "en": "ring",
    "cn": "铃声；环",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1644
  },
  {
    "en": "rise",
    "cn": "向上的斜坡",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1645
  },
  {
    "en": "silver",
    "cn": "银；银币",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1648
  },
  {
    "en": "soul",
    "cn": "心灵；个人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1649
  },
  {
    "en": "spread",
    "cn": "大农场",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1650
  },
  {
    "en": "supply",
    "cn": "供给；供应",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1651
  },
  {
    "en": "waste",
    "cn": "垃圾；浪费",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.81,
    "rank": 1652
  },
  {
    "en": "adult",
    "cn": "大人；成体",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1654
  },
  {
    "en": "artist",
    "cn": "画家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1656
  },
  {
    "en": "chairman",
    "cn": "主席",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1657
  },
  {
    "en": "edition",
    "cn": "版本形式",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1658
  },
  {
    "en": "engineering",
    "cn": "工程；轮机舱",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1659
  },
  {
    "en": "grade",
    "cn": "年级；分等",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1660
  },
  {
    "en": "method",
    "cn": "做法",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1664
  },
  {
    "en": "option",
    "cn": "期权；抉择",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1669
  },
  {
    "en": "prison",
    "cn": "拘留所；坐牢",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1670
  },
  {
    "en": "stone",
    "cn": "岩石；石头",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1676
  },
  {
    "en": "strength",
    "cn": "力气",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1677
  },
  {
    "en": "user",
    "cn": "使用者；吸毒者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1678
  },
  {
    "en": "winner",
    "cn": "优胜者；成功人士",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.8,
    "rank": 1681
  },
  {
    "en": "bag",
    "cn": "包；垒",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1683
  },
  {
    "en": "bet",
    "cn": "赌注；打赌",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1684
  },
  {
    "en": "camp",
    "cn": "宿营地；乡间宿营区",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1685
  },
  {
    "en": "cast",
    "cn": "戏剧演员；模具",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1686
  },
  {
    "en": "firm",
    "cn": "事务所",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1693
  },
  {
    "en": "handle",
    "cn": "手柄",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1695
  },
  {
    "en": "leaf",
    "cn": "叶；扇",
    "pos": "noun",
    "category": "植物",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1698
  },
  {
    "en": "spirit",
    "cn": "心情",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1704
  },
  {
    "en": "television",
    "cn": "电视",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1705
  },
  {
    "en": "trouble",
    "cn": "困难；故障",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.79,
    "rank": 1707
  },
  {
    "en": "advantage",
    "cn": "优势分；优势",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1710
  },
  {
    "en": "cat",
    "cn": "猫",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1713
  },
  {
    "en": "customer",
    "cn": "主顾",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1714
  },
  {
    "en": "dinner",
    "cn": "正餐",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1716
  },
  {
    "en": "dollar",
    "cn": "一美元；一美元钞票",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1717
  },
  {
    "en": "function",
    "cn": "函数；作用",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1720
  },
  {
    "en": "gift",
    "cn": "礼物",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1721
  },
  {
    "en": "influence",
    "cn": "势力",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1725
  },
  {
    "en": "item",
    "cn": "细节；条款",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1726
  },
  {
    "en": "progress",
    "cn": "前进",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1734
  },
  {
    "en": "shooting",
    "cn": "发射",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1737
  },
  {
    "en": "wood",
    "cn": "木",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.78,
    "rank": 1743
  },
  {
    "en": "background",
    "cn": "背景",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1744
  },
  {
    "en": "birth",
    "cn": "出生",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1745
  },
  {
    "en": "bridge",
    "cn": "桥；桥接电路",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1746
  },
  {
    "en": "concept",
    "cn": "概念",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1751
  },
  {
    "en": "copy",
    "cn": "副本",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1752
  },
  {
    "en": "garden",
    "cn": "种植园；公园",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1757
  },
  {
    "en": "host",
    "cn": "主人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1758
  },
  {
    "en": "housing",
    "cn": "住宅；托架",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1759
  },
  {
    "en": "journal",
    "cn": "日志；期刊",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1762
  },
  {
    "en": "labor",
    "cn": "一伙；劳动",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1763
  },
  {
    "en": "leadership",
    "cn": "领导",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1764
  },
  {
    "en": "length",
    "cn": "持续的时间；长度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1765
  },
  {
    "en": "setting",
    "cn": "背景；环境情况",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1773
  },
  {
    "en": "skill",
    "cn": "成就",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1774
  },
  {
    "en": "thousand",
    "cn": "千",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.77,
    "rank": 1776
  },
  {
    "en": "apple",
    "cn": "苹果",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1781
  },
  {
    "en": "balance",
    "cn": "平衡；余额",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1782
  },
  {
    "en": "birthday",
    "cn": "生日；出生日期",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1783
  },
  {
    "en": "bitch",
    "cn": "别扭事；娼妇",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1784
  },
  {
    "en": "bos",
    "cn": "牛属",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1785
  },
  {
    "en": "connection",
    "cn": "连结；挽",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1788
  },
  {
    "en": "dress",
    "cn": "女服；打扮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1789
  },
  {
    "en": "horse",
    "cn": "马；跳马",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1793
  },
  {
    "en": "magic",
    "cn": "假象",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1796
  },
  {
    "en": "map",
    "cn": "地图；函数",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1798
  },
  {
    "en": "net",
    "cn": "互联网；净利",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1799
  },
  {
    "en": "request",
    "cn": "要求",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1801
  },
  {
    "en": "stick",
    "cn": "木条；枝条",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1802
  },
  {
    "en": "vehicle",
    "cn": "车辆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1805
  },
  {
    "en": "volume",
    "cn": "体积；书",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1806
  },
  {
    "en": "wake",
    "cn": "后果",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.76,
    "rank": 1807
  },
  {
    "en": "aid",
    "cn": "帮；奖金",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1808
  },
  {
    "en": "conversation",
    "cn": "会话",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1816
  },
  {
    "en": "corner",
    "cn": "拐角",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1817
  },
  {
    "en": "criminal",
    "cn": "犯人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1818
  },
  {
    "en": "driver",
    "cn": "司机",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1821
  },
  {
    "en": "farm",
    "cn": "农场",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1824
  },
  {
    "en": "file",
    "cn": "文件；纵列",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1825
  },
  {
    "en": "fly",
    "cn": "苍蝇；暗门襟",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1827
  },
  {
    "en": "guide",
    "cn": "带领者；手册",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1829
  },
  {
    "en": "investigation",
    "cn": "调查",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1831
  },
  {
    "en": "responsibility",
    "cn": "义务；职责",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1837
  },
  {
    "en": "roll",
    "cn": "花名册",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1838
  },
  {
    "en": "surprise",
    "cn": "惊奇",
    "pos": "noun",
    "category": "情感",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1841
  },
  {
    "en": "variety",
    "cn": "杂录；变化",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1846
  },
  {
    "en": "violence",
    "cn": "暴力",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1847
  },
  {
    "en": "weapon",
    "cn": "兵器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1848
  },
  {
    "en": "youth",
    "cn": "小伙子；青年时代",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.75,
    "rank": 1850
  },
  {
    "en": "breaking",
    "cn": "弄坏",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1854
  },
  {
    "en": "edge",
    "cn": "分界线；边缘",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1858
  },
  {
    "en": "injury",
    "cn": "伤害",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1865
  },
  {
    "en": "iron",
    "cn": "铁；铁头球棒",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1866
  },
  {
    "en": "magazine",
    "cn": "期刊",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1869
  },
  {
    "en": "parliament",
    "cn": "国会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1874
  },
  {
    "en": "reference",
    "cn": "引文；参考",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1876
  },
  {
    "en": "religion",
    "cn": "信义",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1877
  },
  {
    "en": "wine",
    "cn": "葡萄酒",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.74,
    "rank": 1884
  },
  {
    "en": "audience",
    "cn": "听众",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1888
  },
  {
    "en": "bay",
    "cn": "海湾",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1889
  },
  {
    "en": "core",
    "cn": "核心",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1892
  },
  {
    "en": "guard",
    "cn": "卫兵；安全装置",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1900
  },
  {
    "en": "medicine",
    "cn": "医药；医学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1908
  },
  {
    "en": "mention",
    "cn": "引文",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1909
  },
  {
    "en": "mountain",
    "cn": "大山；书库",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1910
  },
  {
    "en": "presence",
    "cn": "出席",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1914
  },
  {
    "en": "reaction",
    "cn": "化学反应",
    "pos": "noun",
    "category": "过程与变化",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1915
  },
  {
    "en": "stress",
    "cn": "不安；着重",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1923
  },
  {
    "en": "taste",
    "cn": "偏好",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1924
  },
  {
    "en": "tea",
    "cn": "红茶；茶树",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1925
  },
  {
    "en": "victory",
    "cn": "喜悦",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.73,
    "rank": 1926
  },
  {
    "en": "afternoon",
    "cn": "下午",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1927
  },
  {
    "en": "assistant",
    "cn": "助手",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1928
  },
  {
    "en": "citizen",
    "cn": "公民",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1930
  },
  {
    "en": "clothes",
    "cn": "服装",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1932
  },
  {
    "en": "emergency",
    "cn": "紧急事故；紧急情况",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1935
  },
  {
    "en": "failure",
    "cn": "失败",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1939
  },
  {
    "en": "festival",
    "cn": "节",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1940
  },
  {
    "en": "fuel",
    "cn": "燃料",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1942
  },
  {
    "en": "mail",
    "cn": "邮件；邮政",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1952
  },
  {
    "en": "pair",
    "cn": "一对；一双",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1955
  },
  {
    "en": "plane",
    "cn": "飞机；二维形状",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1958
  },
  {
    "en": "plenty",
    "cn": "书库",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1959
  },
  {
    "en": "prince",
    "cn": "王子",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1960
  },
  {
    "en": "quarter",
    "cn": "四分之一；地域",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1963
  },
  {
    "en": "session",
    "cn": "上课期间；会期",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1966
  },
  {
    "en": "shape",
    "cn": "人体",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1967
  },
  {
    "en": "sky",
    "cn": "天空",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1968
  },
  {
    "en": "teaching",
    "cn": "教学；教导",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1969
  },
  {
    "en": "transfer",
    "cn": "输送",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1971
  },
  {
    "en": "valley",
    "cn": "山谷",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1974
  },
  {
    "en": "zone",
    "cn": "地带",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.72,
    "rank": 1978
  },
  {
    "en": "accident",
    "cn": "事故；偶然",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1979
  },
  {
    "en": "alternative",
    "cn": "抉择",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1981
  },
  {
    "en": "bear",
    "cn": "熊",
    "pos": "noun",
    "category": "动物",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1985
  },
  {
    "en": "boat",
    "cn": "小船；船形碟",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1986
  },
  {
    "en": "capacity",
    "cn": "容量",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1988
  },
  {
    "en": "climate",
    "cn": "气候",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1990
  },
  {
    "en": "discussion",
    "cn": "商议",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1992
  },
  {
    "en": "duty",
    "cn": "义务",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1994
  },
  {
    "en": "governor",
    "cn": "地方长官；稳定器",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.71,
    "rank": 1998
  },
  {
    "en": "joint",
    "cn": "关节；下流场所",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2002
  },
  {
    "en": "mix",
    "cn": "混合",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2003
  },
  {
    "en": "museum",
    "cn": "博物馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2004
  },
  {
    "en": "path",
    "cn": "生活方式；小径",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2006
  },
  {
    "en": "promise",
    "cn": "允诺",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2009
  },
  {
    "en": "purchase",
    "cn": "所购物",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2011
  },
  {
    "en": "rain",
    "cn": "降雨；雨水",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2012
  },
  {
    "en": "spending",
    "cn": "支出",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2015
  },
  {
    "en": "steel",
    "cn": "钢；刀",
    "pos": "noun",
    "category": "材料与物质",
    "level": "基础",
    "frequency": 4.71,
    "rank": 2016
  },
  {
    "en": "beer",
    "cn": "啤酒",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2029
  },
  {
    "en": "border",
    "cn": "国境；边境",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2030
  },
  {
    "en": "command",
    "cn": "吩咐",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2032
  },
  {
    "en": "crew",
    "cn": "全体机务人员",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2033
  },
  {
    "en": "crowd",
    "cn": "人群",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2034
  },
  {
    "en": "element",
    "cn": "元件；元素",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2037
  },
  {
    "en": "enemy",
    "cn": "仇敌；仇人",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2038
  },
  {
    "en": "forest",
    "cn": "林地",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2043
  },
  {
    "en": "intelligence",
    "cn": "心智；情报局",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2044
  },
  {
    "en": "labour",
    "cn": "一伙；分娩",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2046
  },
  {
    "en": "limit",
    "cn": "界限",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2047
  },
  {
    "en": "moon",
    "cn": "太阴月",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2048
  },
  {
    "en": "ocean",
    "cn": "大洋；大量",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2049
  },
  {
    "en": "profit",
    "cn": "净利；利润",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2051
  },
  {
    "en": "proof",
    "cn": "证据",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2052
  },
  {
    "en": "soldier",
    "cn": "兵；工蚁",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2054
  },
  {
    "en": "suit",
    "cn": "套装；官司",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.7,
    "rank": 2055
  },
  {
    "en": "appearance",
    "cn": "外表；出现",
    "pos": "noun",
    "category": "性质与特征",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2058
  },
  {
    "en": "attorney",
    "cn": "律师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2060
  },
  {
    "en": "behavior",
    "cn": "为人；行为",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2062
  },
  {
    "en": "chair",
    "cn": "椅子；教授身份",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2067
  },
  {
    "en": "debt",
    "cn": "负债状态；借款",
    "pos": "noun",
    "category": "状态与处境",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2069
  },
  {
    "en": "honor",
    "cn": "名誉；信用",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2076
  },
  {
    "en": "jump",
    "cn": "上涨",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2078
  },
  {
    "en": "minimum",
    "cn": "最小值",
    "pos": "noun",
    "category": "数量与度量",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2081
  },
  {
    "en": "ray",
    "cn": "光束；伞形花序柄",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2087
  },
  {
    "en": "survey",
    "cn": "草拟",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2091
  },
  {
    "en": "writer",
    "cn": "作家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.69,
    "rank": 2096
  },
  {
    "en": "communication",
    "cn": "通讯；交通",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2103
  },
  {
    "en": "exercise",
    "cn": "体育锻炼；习题",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2109
  },
  {
    "en": "express",
    "cn": "直达快车",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2110
  },
  {
    "en": "flow",
    "cn": "流量",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2111
  },
  {
    "en": "hero",
    "cn": "勇士",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2114
  },
  {
    "en": "joke",
    "cn": "笑料；俏皮话",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2117
  },
  {
    "en": "loan",
    "cn": "借款",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2118
  },
  {
    "en": "planet",
    "cn": "行星",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2123
  },
  {
    "en": "restaurant",
    "cn": "小饭馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2125
  },
  {
    "en": "shopping",
    "cn": "买东西",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2129
  },
  {
    "en": "sugar",
    "cn": "糖；碳水化合物",
    "pos": "noun",
    "category": "饮食",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2132
  },
  {
    "en": "transport",
    "cn": "传送器；运输",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.68,
    "rank": 2137
  },
  {
    "en": "affair",
    "cn": "偷情；典礼",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2141
  },
  {
    "en": "appeal",
    "cn": "吸引力；上诉",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2143
  },
  {
    "en": "device",
    "cn": "发明物",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2150
  },
  {
    "en": "drama",
    "cn": "剧本；戏剧性事件",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2151
  },
  {
    "en": "entry",
    "cn": "会计分录",
    "pos": "noun",
    "category": "语言与信息",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2152
  },
  {
    "en": "era",
    "cn": "代；纪元",
    "pos": "noun",
    "category": "时间",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2153
  },
  {
    "en": "factor",
    "cn": "因素；因子",
    "pos": "noun",
    "category": "事件与经历",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2154
  },
  {
    "en": "grant",
    "cn": "补助金",
    "pos": "noun",
    "category": "经济与财产",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2157
  },
  {
    "en": "lawyer",
    "cn": "律师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2162
  },
  {
    "en": "leg",
    "cn": "家具腿",
    "pos": "noun",
    "category": "身体与健康",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2163
  },
  {
    "en": "measure",
    "cn": "措施",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2165
  },
  {
    "en": "mistake",
    "cn": "失误",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2166
  },
  {
    "en": "platform",
    "cn": "平台",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2170
  },
  {
    "en": "relation",
    "cn": "亲属",
    "pos": "noun",
    "category": "综合概念",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2174
  },
  {
    "en": "route",
    "cn": "小径；公路",
    "pos": "noun",
    "category": "地点与环境",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2176
  },
  {
    "en": "schedule",
    "cn": "时间表；日程",
    "pos": "noun",
    "category": "思维与学习",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2178
  },
  {
    "en": "shoe",
    "cn": "鞋；马蹄铁",
    "pos": "noun",
    "category": "物品与科技",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2180
  },
  {
    "en": "smoke",
    "cn": "烟；冒烟",
    "pos": "noun",
    "category": "自然与现象",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2181
  },
  {
    "en": "squad",
    "cn": "班；团队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2182
  },
  {
    "en": "testing",
    "cn": "检查",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.67,
    "rank": 2184
  },
  {
    "en": "abuse",
    "cn": "侮辱",
    "pos": "noun",
    "category": "行为与活动",
    "level": "基础",
    "frequency": 4.66,
    "rank": 2190
  },
  {
    "en": "candidate",
    "cn": "候补",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2193
  },
  {
    "en": "concern",
    "cn": "涉及；关心",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2195
  },
  {
    "en": "facility",
    "cn": "设备；灵巧",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2202
  },
  {
    "en": "fox",
    "cn": "狐狸；狐狸皮",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2204
  },
  {
    "en": "hole",
    "cn": "小孔；开口或小孔",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2206
  },
  {
    "en": "holiday",
    "cn": "休假；假日",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2207
  },
  {
    "en": "laugh",
    "cn": "笑料",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2214
  },
  {
    "en": "lunch",
    "cn": "午餐",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2221
  },
  {
    "en": "milk",
    "cn": "奶",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2223
  },
  {
    "en": "pack",
    "cn": "大批",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2224
  },
  {
    "en": "payment",
    "cn": "付款",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2225
  },
  {
    "en": "sector",
    "cn": "扇形；范围",
    "pos": "noun",
    "category": "形状与空间",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2229
  },
  {
    "en": "snow",
    "cn": "下雪；积雪",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2231
  },
  {
    "en": "storm",
    "cn": "十一级风；大动乱",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2232
  },
  {
    "en": "strike",
    "cn": "停工；攻击",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2234
  },
  {
    "en": "studio",
    "cn": "工作室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2235
  },
  {
    "en": "sub",
    "cn": "潜艇三明治",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.66,
    "rank": 2236
  },
  {
    "en": "actor",
    "cn": "演员；实干家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2240
  },
  {
    "en": "apartment",
    "cn": "公寓",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2242
  },
  {
    "en": "chain",
    "cn": "链",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2244
  },
  {
    "en": "chapter",
    "cn": "章；时期",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2245
  },
  {
    "en": "confidence",
    "cn": "信心",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2247
  },
  {
    "en": "cook",
    "cn": "厨师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2248
  },
  {
    "en": "finance",
    "cn": "财政管理",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2252
  },
  {
    "en": "identity",
    "cn": "个性；恒等式",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2255
  },
  {
    "en": "kitchen",
    "cn": "厨房",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2257
  },
  {
    "en": "split",
    "cn": "一字马；小瓶碳酸饮料",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2270
  },
  {
    "en": "task",
    "cn": "事业；工作",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.65,
    "rank": 2271
  },
  {
    "en": "aircraft",
    "cn": "航空器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2278
  },
  {
    "en": "argument",
    "cn": "论据；争论",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2282
  },
  {
    "en": "conflict",
    "cn": "战争",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2285
  },
  {
    "en": "debate",
    "cn": "争论",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2288
  },
  {
    "en": "document",
    "cn": "公文；证件",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2291
  },
  {
    "en": "escape",
    "cn": "逃脱；空想主义",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2292
  },
  {
    "en": "fault",
    "cn": "失误；不足之处",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2296
  },
  {
    "en": "flower",
    "cn": "开花植物；全盛期",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2299
  },
  {
    "en": "million",
    "cn": "一百万；庞大的数字",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2304
  },
  {
    "en": "phase",
    "cn": "时期；状态",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2306
  },
  {
    "en": "requirement",
    "cn": "必需品",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2310
  },
  {
    "en": "resident",
    "cn": "居住者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2311
  },
  {
    "en": "revenue",
    "cn": "总收入；税收",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2312
  },
  {
    "en": "smile",
    "cn": "微笑",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2316
  },
  {
    "en": "temperature",
    "cn": "温度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2319
  },
  {
    "en": "troop",
    "cn": "一群士兵",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2322
  },
  {
    "en": "truck",
    "cn": "卡车；手推运货车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.64,
    "rank": 2323
  },
  {
    "en": "bird",
    "cn": "禽",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2329
  },
  {
    "en": "bowl",
    "cn": "碗；杯子形",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2332
  },
  {
    "en": "chicken",
    "cn": "小鸡；胆怯者",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2334
  },
  {
    "en": "context",
    "cn": "上下文",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2336
  },
  {
    "en": "coverage",
    "cn": "保险总额；报告",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2337
  },
  {
    "en": "display",
    "cn": "呈现；直观信息",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2339
  },
  {
    "en": "meat",
    "cn": "肉；仁",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2355
  },
  {
    "en": "ministry",
    "cn": "部办公楼；部门",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2356
  },
  {
    "en": "mode",
    "cn": "形式；模态",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2357
  },
  {
    "en": "neck",
    "cn": "脖子",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2358
  },
  {
    "en": "novel",
    "cn": "小说",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2360
  },
  {
    "en": "shirt",
    "cn": "衬衣",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2366
  },
  {
    "en": "stadium",
    "cn": "体育场",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2369
  },
  {
    "en": "surgery",
    "cn": "外科学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2371
  },
  {
    "en": "vision",
    "cn": "幻象；眼力",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2374
  },
  {
    "en": "zero",
    "cn": "什么也没有；无",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.63,
    "rank": 2377
  },
  {
    "en": "champion",
    "cn": "优胜者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2381
  },
  {
    "en": "cream",
    "cn": "乳脂；油膏",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2383
  },
  {
    "en": "crisis",
    "cn": "危机",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2384
  },
  {
    "en": "jail",
    "cn": "监牢",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2392
  },
  {
    "en": "kingdom",
    "cn": "王国",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2394
  },
  {
    "en": "literature",
    "cn": "文学作品",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2395
  },
  {
    "en": "mayor",
    "cn": "市长",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2396
  },
  {
    "en": "orange",
    "cn": "柑橘；橙色",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2400
  },
  {
    "en": "selection",
    "cn": "选择",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2404
  },
  {
    "en": "signal",
    "cn": "信号",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2406
  },
  {
    "en": "stream",
    "cn": "河流",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2407
  },
  {
    "en": "struggle",
    "cn": "奋斗；努力",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2408
  },
  {
    "en": "suicide",
    "cn": "自我毁灭",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2409
  },
  {
    "en": "theme",
    "cn": "主题",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2411
  },
  {
    "en": "voting",
    "cn": "投票",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2421
  },
  {
    "en": "wave",
    "cn": "波；挥手示意",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.62,
    "rank": 2423
  },
  {
    "en": "alcohol",
    "cn": "酒；醇",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2424
  },
  {
    "en": "assembly",
    "cn": "组装部件；制造",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2425
  },
  {
    "en": "breakfast",
    "cn": "早餐",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2426
  },
  {
    "en": "combination",
    "cn": "组合物",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2432
  },
  {
    "en": "desire",
    "cn": "欲望；希望",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2436
  },
  {
    "en": "draft",
    "cn": "汇票；气流",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2438
  },
  {
    "en": "hundred",
    "cn": "一百",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2447
  },
  {
    "en": "solo",
    "cn": "单独行动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2464
  },
  {
    "en": "ticket",
    "cn": "券；传票",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2468
  },
  {
    "en": "wing",
    "cn": "翅膀；机翼",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.61,
    "rank": 2471
  },
  {
    "en": "bomb",
    "cn": "炸弹；弹式热量计",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2475
  },
  {
    "en": "cycle",
    "cn": "循环地；循环",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2477
  },
  {
    "en": "entertainment",
    "cn": "娱乐",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2482
  },
  {
    "en": "maximum",
    "cn": "最大量",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2491
  },
  {
    "en": "newspaper",
    "cn": "报",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2492
  },
  {
    "en": "offering",
    "cn": "捐款；提供",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2493
  },
  {
    "en": "painting",
    "cn": "图画",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2494
  },
  {
    "en": "republic",
    "cn": "共和国",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2495
  },
  {
    "en": "reserve",
    "cn": "储备",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2496
  },
  {
    "en": "row",
    "cn": "排；争吵",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2498
  },
  {
    "en": "salt",
    "cn": "盐",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2499
  },
  {
    "en": "switch",
    "cn": "开关",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2504
  },
  {
    "en": "territory",
    "cn": "地区；领土",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2505
  },
  {
    "en": "threat",
    "cn": "凶兆",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2506
  },
  {
    "en": "wale",
    "cn": "鞭条痕",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.6,
    "rank": 2508
  },
  {
    "en": "assistance",
    "cn": "帮",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2514
  },
  {
    "en": "bell",
    "cn": "钟；门铃",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2515
  },
  {
    "en": "blow",
    "cn": "一击；失败",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2516
  },
  {
    "en": "bond",
    "cn": "关系",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2517
  },
  {
    "en": "circumstance",
    "cn": "境况；上下文",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2520
  },
  {
    "en": "cry",
    "cn": "叫喊",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2525
  },
  {
    "en": "danger",
    "cn": "危险；冒险",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2526
  },
  {
    "en": "delivery",
    "cn": "说话方式",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2528
  },
  {
    "en": "folk",
    "cn": "人们；亲属",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2537
  },
  {
    "en": "gender",
    "cn": "性别",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2539
  },
  {
    "en": "instance",
    "cn": "事例",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2540
  },
  {
    "en": "motion",
    "cn": "动作",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2545
  },
  {
    "en": "prize",
    "cn": "奖；战利品",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2549
  },
  {
    "en": "register",
    "cn": "官方登记；注册簿",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2553
  },
  {
    "en": "tool",
    "cn": "工具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2561
  },
  {
    "en": "universe",
    "cn": "万物",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2563
  },
  {
    "en": "warning",
    "cn": "告诫",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.59,
    "rank": 2564
  },
  {
    "en": "attitude",
    "cn": "态度；姿势",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2568
  },
  {
    "en": "branch",
    "cn": "分枝；分叉",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2569
  },
  {
    "en": "decade",
    "cn": "十年；十",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2572
  },
  {
    "en": "definition",
    "cn": "定义",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2574
  },
  {
    "en": "drawing",
    "cn": "图片",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2575
  },
  {
    "en": "favor",
    "cn": "亲切",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2576
  },
  {
    "en": "flag",
    "cn": "旗",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2577
  },
  {
    "en": "frame",
    "cn": "画面；人体",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2578
  },
  {
    "en": "guest",
    "cn": "客人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2579
  },
  {
    "en": "heaven",
    "cn": "乐园",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2581
  },
  {
    "en": "independence",
    "cn": "独立",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2582
  },
  {
    "en": "institution",
    "cn": "建立；公共机构楼",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2583
  },
  {
    "en": "load",
    "cn": "负荷；负载",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2587
  },
  {
    "en": "plot",
    "cn": "密谋；小块土地",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2588
  },
  {
    "en": "possibility",
    "cn": "可能；假说",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2589
  },
  {
    "en": "recovery",
    "cn": "康复；恢复",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2591
  },
  {
    "en": "rent",
    "cn": "房租；经济地租",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2592
  },
  {
    "en": "sentence",
    "cn": "句；判决",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2599
  },
  {
    "en": "tooth",
    "cn": "牙；齿",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2600
  },
  {
    "en": "tip",
    "cn": "尖端；小帐",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.58,
    "rank": 2601
  },
  {
    "en": "academy",
    "cn": "私立中学；学会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2605
  },
  {
    "en": "bottle",
    "cn": "瓶；哺乳瓶",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2613
  },
  {
    "en": "bunch",
    "cn": "一丛",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2614
  },
  {
    "en": "category",
    "cn": "范畴",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2615
  },
  {
    "en": "cheese",
    "cn": "乳酪",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2617
  },
  {
    "en": "chemical",
    "cn": "化学制剂",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2618
  },
  {
    "en": "fruit",
    "cn": "果子",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2625
  },
  {
    "en": "index",
    "cn": "指数",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2628
  },
  {
    "en": "lane",
    "cn": "弄堂；路线",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2630
  },
  {
    "en": "navy",
    "cn": "海军；深蓝色",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2632
  },
  {
    "en": "opposition",
    "cn": "反对；对立",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2635
  },
  {
    "en": "pleasure",
    "cn": "快乐",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2639
  },
  {
    "en": "representative",
    "cn": "代表；代言人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2642
  },
  {
    "en": "scheme",
    "cn": "体制",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2643
  },
  {
    "en": "shift",
    "cn": "工作班次",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2644
  },
  {
    "en": "tank",
    "cn": "坦克；满槽",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2647
  },
  {
    "en": "transportation",
    "cn": "输送；车费",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2650
  },
  {
    "en": "yard",
    "cn": "码；庭院",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.57,
    "rank": 2654
  },
  {
    "en": "asset",
    "cn": "优点",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2656
  },
  {
    "en": "basketball",
    "cn": "篮球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2657
  },
  {
    "en": "button",
    "cn": "扣子；按钮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2658
  },
  {
    "en": "combat",
    "cn": "争吵",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2660
  },
  {
    "en": "constitution",
    "cn": "宪法",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2661
  },
  {
    "en": "consumer",
    "cn": "消费者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2662
  },
  {
    "en": "counter",
    "cn": "柜台；筹码",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2663
  },
  {
    "en": "creation",
    "cn": "创造；创作物",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2664
  },
  {
    "en": "crown",
    "cn": "加冕",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2665
  },
  {
    "en": "depression",
    "cn": "压抑；经济危机",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2670
  },
  {
    "en": "employment",
    "cn": "受雇；劳动",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2674
  },
  {
    "en": "excuse",
    "cn": "借口",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2676
  },
  {
    "en": "expert",
    "cn": "专家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2677
  },
  {
    "en": "golf",
    "cn": "高尔夫球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2679
  },
  {
    "en": "grace",
    "cn": "赦免；优雅",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2680
  },
  {
    "en": "importance",
    "cn": "意义；名望",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2683
  },
  {
    "en": "object",
    "cn": "客体；目标",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2689
  },
  {
    "en": "pattern",
    "cn": "外形；惯例",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2691
  },
  {
    "en": "perspective",
    "cn": "见解",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2694
  },
  {
    "en": "revolution",
    "cn": "变革；公转",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2699
  },
  {
    "en": "tournament",
    "cn": "比赛",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2705
  },
  {
    "en": "turkey",
    "cn": "火鸡",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2706
  },
  {
    "en": "victim",
    "cn": "受害人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.56,
    "rank": 2708
  },
  {
    "en": "arrest",
    "cn": "停留",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2713
  },
  {
    "en": "ban",
    "cn": "禁令；巴尼",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2715
  },
  {
    "en": "carbon",
    "cn": "碳；复写纸",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2717
  },
  {
    "en": "circle",
    "cn": "椭圆形；圆周",
    "pos": "noun",
    "category": "形状与空间",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2720
  },
  {
    "en": "concert",
    "cn": "合奏",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2721
  },
  {
    "en": "crash",
    "cn": "严重的事故；崩溃",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2722
  },
  {
    "en": "error",
    "cn": "失误；误差",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2731
  },
  {
    "en": "existence",
    "cn": "存在；万物",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2732
  },
  {
    "en": "factory",
    "cn": "制造厂",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2735
  },
  {
    "en": "interior",
    "cn": "内部",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2737
  },
  {
    "en": "joy",
    "cn": "喜悦",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2738
  },
  {
    "en": "legislation",
    "cn": "制定法律",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2740
  },
  {
    "en": "maintenance",
    "cn": "保养；赡养费",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2741
  },
  {
    "en": "manner",
    "cn": "态度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2742
  },
  {
    "en": "noise",
    "cn": "噪音",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2746
  },
  {
    "en": "origin",
    "cn": "开始；出身",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2747
  },
  {
    "en": "panel",
    "cn": "仪器板；评判委员会",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2749
  },
  {
    "en": "personality",
    "cn": "个性",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2750
  },
  {
    "en": "plate",
    "cn": "本垒",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2751
  },
  {
    "en": "relief",
    "cn": "减轻；救济金",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2754
  },
  {
    "en": "resistance",
    "cn": "反对",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2756
  },
  {
    "en": "rice",
    "cn": "大米",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2758
  },
  {
    "en": "roof",
    "cn": "屋顶",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2760
  },
  {
    "en": "shame",
    "cn": "可耻的人；丑行",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.55,
    "rank": 2761
  },
  {
    "en": "advertising",
    "cn": "广告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2771
  },
  {
    "en": "baseball",
    "cn": "棒球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2773
  },
  {
    "en": "bathroom",
    "cn": "浴室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2774
  },
  {
    "en": "cable",
    "cn": "电报；电缆",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2776
  },
  {
    "en": "championship",
    "cn": "冠军",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2778
  },
  {
    "en": "client",
    "cn": "主顾",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2780
  },
  {
    "en": "empire",
    "cn": "帝国",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2789
  },
  {
    "en": "expansion",
    "cn": "展开",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2791
  },
  {
    "en": "hide",
    "cn": "兽皮；毛皮",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2794
  },
  {
    "en": "incident",
    "cn": "事件",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2795
  },
  {
    "en": "politician",
    "cn": "从政者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2803
  },
  {
    "en": "print",
    "cn": "拓印",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2804
  },
  {
    "en": "reporting",
    "cn": "报告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2807
  },
  {
    "en": "sight",
    "cn": "眼力",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.54,
    "rank": 2808
  },
  {
    "en": "anniversary",
    "cn": "周年纪念日",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2817
  },
  {
    "en": "burn",
    "cn": "烧；晒伤",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2821
  },
  {
    "en": "cake",
    "cn": "块状物；蛋糕",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2822
  },
  {
    "en": "contest",
    "cn": "比赛；争夺",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2826
  },
  {
    "en": "fee",
    "cn": "小费；世袭土地",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2831
  },
  {
    "en": "hat",
    "cn": "帽子",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2835
  },
  {
    "en": "height",
    "cn": "极点",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2836
  },
  {
    "en": "motor",
    "cn": "发动机",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2844
  },
  {
    "en": "peak",
    "cn": "极值；全盛期",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2847
  },
  {
    "en": "portion",
    "cn": "局部；一份",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2848
  },
  {
    "en": "pound",
    "cn": "磅；英磅",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2849
  },
  {
    "en": "protein",
    "cn": "蛋白质",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2851
  },
  {
    "en": "reform",
    "cn": "改革；改正",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2854
  },
  {
    "en": "retirement",
    "cn": "退休",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2858
  },
  {
    "en": "sample",
    "cn": "样品",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2859
  },
  {
    "en": "suffering",
    "cn": "痛苦；不幸",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.53,
    "rank": 2865
  },
  {
    "en": "battery",
    "cn": "电池",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2877
  },
  {
    "en": "breath",
    "cn": "呼吸的空气；短暂的休息时间",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2880
  },
  {
    "en": "chest",
    "cn": "胸；箱",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2883
  },
  {
    "en": "conduct",
    "cn": "为人",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2884
  },
  {
    "en": "fantasy",
    "cn": "幻想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2894
  },
  {
    "en": "grab",
    "cn": "抓取装置",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2896
  },
  {
    "en": "introduction",
    "cn": "引言；介绍",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2900
  },
  {
    "en": "license",
    "cn": "执照",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2902
  },
  {
    "en": "paint",
    "cn": "油漆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2903
  },
  {
    "en": "pilot",
    "cn": "飞行员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2904
  },
  {
    "en": "principal",
    "cn": "本金",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2907
  },
  {
    "en": "shipping",
    "cn": "运输",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2915
  },
  {
    "en": "singer",
    "cn": "歌唱家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2916
  },
  {
    "en": "steam",
    "cn": "水气",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2918
  },
  {
    "en": "theatre",
    "cn": "戏剧艺术",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2923
  },
  {
    "en": "therapy",
    "cn": "治疗",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2924
  },
  {
    "en": "witness",
    "cn": "旁观者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.52,
    "rank": 2925
  },
  {
    "en": "aim",
    "cn": "意图；目标",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2927
  },
  {
    "en": "cap",
    "cn": "便帽；瓶帽",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2929
  },
  {
    "en": "childhood",
    "cn": "儿童期；童年",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2931
  },
  {
    "en": "comedy",
    "cn": "喜剧",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2934
  },
  {
    "en": "comparison",
    "cn": "比较",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2936
  },
  {
    "en": "defeat",
    "cn": "失败",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2939
  },
  {
    "en": "defence",
    "cn": "自卫机能",
    "pos": "noun",
    "category": "过程与变化",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2940
  },
  {
    "en": "democracy",
    "cn": "共和国",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2941
  },
  {
    "en": "lock",
    "cn": "锁；卷发",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2954
  },
  {
    "en": "nose",
    "cn": "鼻子",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2956
  },
  {
    "en": "plastic",
    "cn": "塑料；信用卡",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2960
  },
  {
    "en": "recording",
    "cn": "唱片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2964
  },
  {
    "en": "suspect",
    "cn": "嫌犯；嫌疑人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2967
  },
  {
    "en": "technique",
    "cn": "手法",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2969
  },
  {
    "en": "tie",
    "cn": "领带；交往",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2970
  },
  {
    "en": "trend",
    "cn": "倾向",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2972
  },
  {
    "en": "wealth",
    "cn": "富有；财产",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.51,
    "rank": 2974
  },
  {
    "en": "approval",
    "cn": "允许；嘉许",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2978
  },
  {
    "en": "aspect",
    "cn": "方面；全景",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2979
  },
  {
    "en": "bread",
    "cn": "面包；金钱",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2981
  },
  {
    "en": "convention",
    "cn": "会议；习俗",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2985
  },
  {
    "en": "dancing",
    "cn": "舞蹈",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2986
  },
  {
    "en": "egg",
    "cn": "卵",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2988
  },
  {
    "en": "engineer",
    "cn": "工程师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2991
  },
  {
    "en": "finger",
    "cn": "手指；指幅",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 2995
  },
  {
    "en": "graduate",
    "cn": "校友；量杯",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3000
  },
  {
    "en": "lift",
    "cn": "气动升力",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3006
  },
  {
    "en": "neighborhood",
    "cn": "周围",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3012
  },
  {
    "en": "permission",
    "cn": "允许",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3015
  },
  {
    "en": "regulation",
    "cn": "规则；准则",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3019
  },
  {
    "en": "reply",
    "cn": "回答",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3020
  },
  {
    "en": "scientist",
    "cn": "科学家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3024
  },
  {
    "en": "shoulder",
    "cn": "肩",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3025
  },
  {
    "en": "shower",
    "cn": "淋浴器；小雨",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3026
  },
  {
    "en": "tower",
    "cn": "塔；柱形",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3031
  },
  {
    "en": "tradition",
    "cn": "习俗",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3032
  },
  {
    "en": "wheel",
    "cn": "轮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.5,
    "rank": 3035
  },
  {
    "en": "appointment",
    "cn": "约会；固定设备",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3039
  },
  {
    "en": "bush",
    "cn": "灌木",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3043
  },
  {
    "en": "cabinet",
    "cn": "壁橱；内阁",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3044
  },
  {
    "en": "chocolate",
    "cn": "巧克力",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3047
  },
  {
    "en": "coal",
    "cn": "煤",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3048
  },
  {
    "en": "criticism",
    "cn": "批评",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3051
  },
  {
    "en": "gallery",
    "cn": "画廊",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3062
  },
  {
    "en": "highway",
    "cn": "交通干线",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3063
  },
  {
    "en": "improvement",
    "cn": "改进",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3066
  },
  {
    "en": "inch",
    "cn": "英寸",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3067
  },
  {
    "en": "jury",
    "cn": "陪审员；评判委员会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3070
  },
  {
    "en": "monster",
    "cn": "怪物",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3074
  },
  {
    "en": "philosophy",
    "cn": "主义；人生观",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3077
  },
  {
    "en": "pride",
    "cn": "自尊",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3078
  },
  {
    "en": "settlement",
    "cn": "侨民；乡村",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3085
  },
  {
    "en": "smell",
    "cn": "味儿；心情",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3086
  },
  {
    "en": "speaker",
    "cn": "讲演者；喇叭",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3088
  },
  {
    "en": "tone",
    "cn": "声调",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3092
  },
  {
    "en": "topic",
    "cn": "主题",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3093
  },
  {
    "en": "visitor",
    "cn": "客人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.49,
    "rank": 3097
  },
  {
    "en": "auto",
    "cn": "机动车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3099
  },
  {
    "en": "guitar",
    "cn": "六弦琴",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3106
  },
  {
    "en": "heading",
    "cn": "平巷",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3107
  },
  {
    "en": "meal",
    "cn": "餐；进餐时间",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3113
  },
  {
    "en": "partnership",
    "cn": "合伙契约",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3120
  },
  {
    "en": "percentage",
    "cn": "比率；份额",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3122
  },
  {
    "en": "pocket",
    "cn": "口袋；财政手段",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3123
  },
  {
    "en": "rape",
    "cn": "强奸",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3127
  },
  {
    "en": "rush",
    "cn": "仓促",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3133
  },
  {
    "en": "soccer",
    "cn": "英式足球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3138
  },
  {
    "en": "stable",
    "cn": "厩",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3139
  },
  {
    "en": "symptom",
    "cn": "症状",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3142
  },
  {
    "en": "trick",
    "cn": "诡计；工作时间",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.48,
    "rank": 3145
  },
  {
    "en": "audio",
    "cn": "声音信号",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3147
  },
  {
    "en": "bone",
    "cn": "骨；骨组织",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3148
  },
  {
    "en": "chamber",
    "cn": "议事厅",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3151
  },
  {
    "en": "chart",
    "cn": "图表；海图",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3152
  },
  {
    "en": "circuit",
    "cn": "电路",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3154
  },
  {
    "en": "clothing",
    "cn": "衣服",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3155
  },
  {
    "en": "consequence",
    "cn": "后果",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3158
  },
  {
    "en": "extent",
    "cn": "程度",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3163
  },
  {
    "en": "format",
    "cn": "日期格式",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3165
  },
  {
    "en": "gap",
    "cn": "缝隙",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3166
  },
  {
    "en": "gate",
    "cn": "闸门；门电路",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3167
  },
  {
    "en": "harm",
    "cn": "伤害；损坏",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3169
  },
  {
    "en": "household",
    "cn": "人家",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3171
  },
  {
    "en": "immigration",
    "cn": "外来的移民",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3172
  },
  {
    "en": "killer",
    "cn": "杀人者；死亡原因",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3176
  },
  {
    "en": "lesson",
    "cn": "一堂课",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3177
  },
  {
    "en": "membership",
    "cn": "会员",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3182
  },
  {
    "en": "mirror",
    "cn": "反射镜",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3184
  },
  {
    "en": "mount",
    "cn": "骑乘马；大山",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3185
  },
  {
    "en": "proposal",
    "cn": "求婚；建议",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3189
  },
  {
    "en": "province",
    "cn": "县；职责",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3190
  },
  {
    "en": "recognition",
    "cn": "承认；赞同",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3192
  },
  {
    "en": "reputation",
    "cn": "名声；坏的声誉",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3193
  },
  {
    "en": "tear",
    "cn": "泪",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.47,
    "rank": 3198
  },
  {
    "en": "adventure",
    "cn": "冒险越轨行为",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3205
  },
  {
    "en": "assessment",
    "cn": "估价",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3207
  },
  {
    "en": "atmosphere",
    "cn": "周围环境；压力单位",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3208
  },
  {
    "en": "bedroom",
    "cn": "卧室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3210
  },
  {
    "en": "belief",
    "cn": "信仰",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3211
  },
  {
    "en": "closing",
    "cn": "关闭；总结",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3218
  },
  {
    "en": "cloud",
    "cn": "云；不真实",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3219
  },
  {
    "en": "contrast",
    "cn": "对比；分界线",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3222
  },
  {
    "en": "extension",
    "cn": "延期；延长",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3231
  },
  {
    "en": "founder",
    "cn": "蹄叶炎",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3233
  },
  {
    "en": "gear",
    "cn": "齿轮；传动系",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3234
  },
  {
    "en": "hip",
    "cn": "臀",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3237
  },
  {
    "en": "package",
    "cn": "包；软件",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3249
  },
  {
    "en": "poverty",
    "cn": "贫乏",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3251
  },
  {
    "en": "processing",
    "cn": "处理",
    "pos": "noun",
    "category": "过程与变化",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3253
  },
  {
    "en": "railway",
    "cn": "铁路；轨道",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3255
  },
  {
    "en": "shock",
    "cn": "休克；电击",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3260
  },
  {
    "en": "silence",
    "cn": "寂静；安静",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3261
  },
  {
    "en": "supporter",
    "cn": "助手",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3264
  },
  {
    "en": "ton",
    "cn": "短吨；吨",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3267
  },
  {
    "en": "transition",
    "cn": "换位",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3268
  },
  {
    "en": "voter",
    "cn": "投票人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.46,
    "rank": 3270
  },
  {
    "en": "acid",
    "cn": "酸；迷幻药",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3272
  },
  {
    "en": "actress",
    "cn": "女演员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3273
  },
  {
    "en": "angel",
    "cn": "天使",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3277
  },
  {
    "en": "anxiety",
    "cn": "担心；渴望",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3278
  },
  {
    "en": "bonus",
    "cn": "奖金",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3281
  },
  {
    "en": "castle",
    "cn": "城堡；象棋中的车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3282
  },
  {
    "en": "charity",
    "cn": "慈善",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3283
  },
  {
    "en": "discovery",
    "cn": "发现",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3291
  },
  {
    "en": "duke",
    "cn": "公爵",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3293
  },
  {
    "en": "formula",
    "cn": "公式",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3301
  },
  {
    "en": "fort",
    "cn": "堡垒；城堡",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3302
  },
  {
    "en": "math",
    "cn": "数学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3314
  },
  {
    "en": "mystery",
    "cn": "神秘",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3317
  },
  {
    "en": "penalty",
    "cn": "处罚；罚款",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3322
  },
  {
    "en": "pet",
    "cn": "宠物；亲昵的人",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3323
  },
  {
    "en": "photography",
    "cn": "摄影术；摄影",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3325
  },
  {
    "en": "protest",
    "cn": "反对",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3327
  },
  {
    "en": "publication",
    "cn": "出版物；出版",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3328
  },
  {
    "en": "rating",
    "cn": "等级",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3329
  },
  {
    "en": "temple",
    "cn": "寺；太阳穴",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3339
  },
  {
    "en": "trail",
    "cn": "循路而行",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3341
  },
  {
    "en": "uncle",
    "cn": "伯伯",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.45,
    "rank": 3342
  },
  {
    "en": "arrival",
    "cn": "到达者",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3347
  },
  {
    "en": "assault",
    "cn": "袭击；侵犯人身的行为",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3349
  },
  {
    "en": "bath",
    "cn": "电解槽；浴盆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3352
  },
  {
    "en": "component",
    "cn": "局部；元件",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3355
  },
  {
    "en": "concrete",
    "cn": "混凝土",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3356
  },
  {
    "en": "expectation",
    "cn": "前景；希望",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3359
  },
  {
    "en": "explanation",
    "cn": "解释",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3360
  },
  {
    "en": "exposure",
    "cn": "暴露",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3361
  },
  {
    "en": "fiction",
    "cn": "小说",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3363
  },
  {
    "en": "guarantee",
    "cn": "保用；保证",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3364
  },
  {
    "en": "happiness",
    "cn": "好运气",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3365
  },
  {
    "en": "ideal",
    "cn": "无以匹敌的人",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3369
  },
  {
    "en": "legend",
    "cn": "传说；说明文字",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3375
  },
  {
    "en": "mood",
    "cn": "心境；气候",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3378
  },
  {
    "en": "muscle",
    "cn": "筋肉",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3379
  },
  {
    "en": "passion",
    "cn": "激情；激动",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3382
  },
  {
    "en": "procedure",
    "cn": "手续",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3385
  },
  {
    "en": "producer",
    "cn": "制作者；出品人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3386
  },
  {
    "en": "rank",
    "cn": "军衔",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3388
  },
  {
    "en": "replacement",
    "cn": "候补者",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3389
  },
  {
    "en": "sand",
    "cn": "沙",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3392
  },
  {
    "en": "shadow",
    "cn": "影子；幻影",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3395
  },
  {
    "en": "tape",
    "cn": "带子；录音带",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3398
  },
  {
    "en": "thread",
    "cn": "纱",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3399
  },
  {
    "en": "wage",
    "cn": "作报偿的东西",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.44,
    "rank": 3402
  },
  {
    "en": "avenue",
    "cn": "大街",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3406
  },
  {
    "en": "clock",
    "cn": "时钟",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3414
  },
  {
    "en": "commitment",
    "cn": "奉献",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3416
  },
  {
    "en": "custom",
    "cn": "习惯；习俗",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3421
  },
  {
    "en": "desk",
    "cn": "书桌",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3423
  },
  {
    "en": "ear",
    "cn": "耳朵",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3425
  },
  {
    "en": "electricity",
    "cn": "电",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3426
  },
  {
    "en": "farmer",
    "cn": "农场主",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3428
  },
  {
    "en": "gym",
    "cn": "体育馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3431
  },
  {
    "en": "horror",
    "cn": "反感",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3433
  },
  {
    "en": "label",
    "cn": "标记",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3436
  },
  {
    "en": "output",
    "cn": "成品",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3442
  },
  {
    "en": "pitch",
    "cn": "音高",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3444
  },
  {
    "en": "welfare",
    "cn": "公共援助；利益",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3458
  },
  {
    "en": "wire",
    "cn": "铁丝",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.43,
    "rank": 3460
  },
  {
    "en": "anger",
    "cn": "发怒",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3466
  },
  {
    "en": "architecture",
    "cn": "建筑物；建筑学",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3467
  },
  {
    "en": "assist",
    "cn": "帮；助攻",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3468
  },
  {
    "en": "belt",
    "cn": "传送带；带",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3471
  },
  {
    "en": "capture",
    "cn": "俘获",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3472
  },
  {
    "en": "ceremony",
    "cn": "仪式",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3474
  },
  {
    "en": "cop",
    "cn": "条子",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3476
  },
  {
    "en": "cut",
    "cn": "一份利润；通道",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3477
  },
  {
    "en": "designer",
    "cn": "装潢者；建筑师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3479
  },
  {
    "en": "diamond",
    "cn": "钻石；金刚石",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3480
  },
  {
    "en": "economics",
    "cn": "经济学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3483
  },
  {
    "en": "establishment",
    "cn": "建立；组织",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3490
  },
  {
    "en": "ghost",
    "cn": "代笔人；幽灵",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3494
  },
  {
    "en": "kit",
    "cn": "工具箱；全套工具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3505
  },
  {
    "en": "lab",
    "cn": "实验室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3506
  },
  {
    "en": "min",
    "cn": "分",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3509
  },
  {
    "en": "prayer",
    "cn": "祈求",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3520
  },
  {
    "en": "principle",
    "cn": "原则",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3521
  },
  {
    "en": "soil",
    "cn": "变脏；土",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3527
  },
  {
    "en": "stomach",
    "cn": "肚子",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3529
  },
  {
    "en": "trash",
    "cn": "垃圾",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3534
  },
  {
    "en": "virus",
    "cn": "病毒；毒害",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.42,
    "rank": 3537
  },
  {
    "en": "bureau",
    "cn": "五斗柜",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3546
  },
  {
    "en": "comfort",
    "cn": "愉快；安慰",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3548
  },
  {
    "en": "cousin",
    "cn": "堂兄",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3550
  },
  {
    "en": "crack",
    "cn": "缝隙",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3551
  },
  {
    "en": "deck",
    "cn": "平台；一包毒品",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3552
  },
  {
    "en": "dragon",
    "cn": "火龙",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3555
  },
  {
    "en": "dust",
    "cn": "尘；瓦砾",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3557
  },
  {
    "en": "evolution",
    "cn": "发展；发展史",
    "pos": "noun",
    "category": "过程与变化",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3560
  },
  {
    "en": "illness",
    "cn": "生病",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3563
  },
  {
    "en": "inspiration",
    "cn": "启发",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3564
  },
  {
    "en": "knife",
    "cn": "刀",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3567
  },
  {
    "en": "memorial",
    "cn": "纪念；纪念堂",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3570
  },
  {
    "en": "minority",
    "cn": "少数",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3572
  },
  {
    "en": "priority",
    "cn": "优先",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3577
  },
  {
    "en": "promotion",
    "cn": "宣传；提升",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3578
  },
  {
    "en": "reader",
    "cn": "用户",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3580
  },
  {
    "en": "repair",
    "cn": "状态",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3582
  },
  {
    "en": "root",
    "cn": "根；开始",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3583
  },
  {
    "en": "saint",
    "cn": "无以匹敌的人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3584
  },
  {
    "en": "telephone",
    "cn": "电话",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.41,
    "rank": 3587
  },
  {
    "en": "alliance",
    "cn": "同盟；关系",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3598
  },
  {
    "en": "bid",
    "cn": "吩咐；企图获得",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3601
  },
  {
    "en": "butter",
    "cn": "奶油",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3605
  },
  {
    "en": "conclusion",
    "cn": "完结",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3608
  },
  {
    "en": "crap",
    "cn": "大便",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3613
  },
  {
    "en": "crystal",
    "cn": "晶体；石英片",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3614
  },
  {
    "en": "decline",
    "cn": "减小；衰微",
    "pos": "noun",
    "category": "过程与变化",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3617
  },
  {
    "en": "delay",
    "cn": "延迟；延误",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3618
  },
  {
    "en": "desert",
    "cn": "沙漠",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3620
  },
  {
    "en": "elite",
    "cn": "杰出人物",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3622
  },
  {
    "en": "landing",
    "cn": "码头",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3634
  },
  {
    "en": "layer",
    "cn": "层；地层",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3635
  },
  {
    "en": "nurse",
    "cn": "保姆",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3640
  },
  {
    "en": "ownership",
    "cn": "所有权；占有",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3643
  },
  {
    "en": "participant",
    "cn": "参与者；比赛的人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3644
  },
  {
    "en": "poetry",
    "cn": "诗",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3646
  },
  {
    "en": "pot",
    "cn": "壶；一锅",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3647
  },
  {
    "en": "sheet",
    "cn": "纸张；床单",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3653
  },
  {
    "en": "string",
    "cn": "细绳；弓弦乐器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3658
  },
  {
    "en": "vacation",
    "cn": "休假",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.4,
    "rank": 3664
  },
  {
    "en": "associate",
    "cn": "合伙人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3668
  },
  {
    "en": "bench",
    "cn": "长凳",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3671
  },
  {
    "en": "broadcast",
    "cn": "广播",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3673
  },
  {
    "en": "cricket",
    "cn": "蟋蟀",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3682
  },
  {
    "en": "critic",
    "cn": "批评家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3683
  },
  {
    "en": "disaster",
    "cn": "大灾难；悲剧",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3685
  },
  {
    "en": "entrance",
    "cn": "入口",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3688
  },
  {
    "en": "fitness",
    "cn": "健康；适于航海",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3692
  },
  {
    "en": "friendship",
    "cn": "友情",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3694
  },
  {
    "en": "handling",
    "cn": "处理",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3696
  },
  {
    "en": "liquid",
    "cn": "液态；液体",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3702
  },
  {
    "en": "makeup",
    "cn": "化妆品；构成",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3703
  },
  {
    "en": "medal",
    "cn": "奖章",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3704
  },
  {
    "en": "mortgage",
    "cn": "抵押",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3705
  },
  {
    "en": "narrative",
    "cn": "叙述",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3706
  },
  {
    "en": "pan",
    "cn": "平底锅",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3712
  },
  {
    "en": "reduction",
    "cn": "减少；还原",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3716
  },
  {
    "en": "researcher",
    "cn": "研究员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3719
  },
  {
    "en": "shell",
    "cn": "炮弹；壳",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3726
  },
  {
    "en": "translation",
    "cn": "变化",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.39,
    "rank": 3731
  },
  {
    "en": "amendment",
    "cn": "修正；修正案",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3736
  },
  {
    "en": "angle",
    "cn": "角；偏见",
    "pos": "noun",
    "category": "形状与空间",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3737
  },
  {
    "en": "bishop",
    "cn": "主教；象",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3742
  },
  {
    "en": "efficiency",
    "cn": "效率",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3749
  },
  {
    "en": "enterprise",
    "cn": "努力",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3750
  },
  {
    "en": "experiment",
    "cn": "实验",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3751
  },
  {
    "en": "forum",
    "cn": "公共集会场地",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3756
  },
  {
    "en": "grass",
    "cn": "牧草",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3758
  },
  {
    "en": "mill",
    "cn": "制造厂",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3769
  },
  {
    "en": "occasion",
    "cn": "典礼",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3771
  },
  {
    "en": "pace",
    "cn": "步速；以步测量",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3773
  },
  {
    "en": "passenger",
    "cn": "乘客",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3774
  },
  {
    "en": "pen",
    "cn": "钢笔；游戏围栏",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3775
  },
  {
    "en": "possession",
    "cn": "占有；着迷",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3777
  },
  {
    "en": "spin",
    "cn": "旋转",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.38,
    "rank": 3786
  },
  {
    "en": "agriculture",
    "cn": "农业综合企业；养殖业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3796
  },
  {
    "en": "commerce",
    "cn": "交易",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3803
  },
  {
    "en": "currency",
    "cn": "货币",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3806
  },
  {
    "en": "emotion",
    "cn": "情感",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3807
  },
  {
    "en": "exhibition",
    "cn": "博览会",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3808
  },
  {
    "en": "fraud",
    "cn": "冒名顶替者；恶作剧",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3809
  },
  {
    "en": "funeral",
    "cn": "葬礼",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3810
  },
  {
    "en": "honey",
    "cn": "蜂蜜；亲爱的人",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3814
  },
  {
    "en": "honour",
    "cn": "名誉；信用",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3815
  },
  {
    "en": "hook",
    "cn": "钩形；诱惑",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3816
  },
  {
    "en": "hunter",
    "cn": "猎人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3817
  },
  {
    "en": "immigrant",
    "cn": "侨民",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3818
  },
  {
    "en": "instruction",
    "cn": "教导；教学",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3820
  },
  {
    "en": "legacy",
    "cn": "遗产",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3825
  },
  {
    "en": "log",
    "cn": "原木；对数",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3826
  },
  {
    "en": "monitor",
    "cn": "告诫者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3829
  },
  {
    "en": "prisoner",
    "cn": "俘虏",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3834
  },
  {
    "en": "ratio",
    "cn": "比例",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3837
  },
  {
    "en": "regret",
    "cn": "后悔",
    "pos": "noun",
    "category": "情感",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3838
  },
  {
    "en": "resort",
    "cn": "度假酒店",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3841
  },
  {
    "en": "reverse",
    "cn": "反面；失败",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3843
  },
  {
    "en": "routine",
    "cn": "常规手法；短节目",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3844
  },
  {
    "en": "seed",
    "cn": "籽；种子选手",
    "pos": "noun",
    "category": "植物",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3846
  },
  {
    "en": "sin",
    "cn": "犯罪；正弦",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3848
  },
  {
    "en": "spell",
    "cn": "恍惚状态；工作时间",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3849
  },
  {
    "en": "summary",
    "cn": "摘要",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3850
  },
  {
    "en": "survival",
    "cn": "幸存；最适者生存",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3851
  },
  {
    "en": "sword",
    "cn": "刀",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3852
  },
  {
    "en": "tongue",
    "cn": "舌；自然语言",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3853
  },
  {
    "en": "ward",
    "cn": "受保护者；行政区",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.37,
    "rank": 3854
  },
  {
    "en": "achievement",
    "cn": "完成",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3857
  },
  {
    "en": "behaviour",
    "cn": "行为",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3864
  },
  {
    "en": "coat",
    "cn": "外套；外层",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3867
  },
  {
    "en": "daddy",
    "cn": "爸",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3870
  },
  {
    "en": "destruction",
    "cn": "毁坏；死亡",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3871
  },
  {
    "en": "divorce",
    "cn": "离婚",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3874
  },
  {
    "en": "fate",
    "cn": "命运",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3880
  },
  {
    "en": "frequency",
    "cn": "周率；频率",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3881
  },
  {
    "en": "glory",
    "cn": "赞颂",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3884
  },
  {
    "en": "headquarters",
    "cn": "总部；司令部",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3885
  },
  {
    "en": "heritage",
    "cn": "继承财产",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3886
  },
  {
    "en": "initiative",
    "cn": "倡议",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3887
  },
  {
    "en": "juice",
    "cn": "果汁；劲儿",
    "pos": "noun",
    "category": "饮食",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3890
  },
  {
    "en": "landscape",
    "cn": "景观；山水画",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3891
  },
  {
    "en": "logic",
    "cn": "推理原则",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3892
  },
  {
    "en": "objective",
    "cn": "目标",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3896
  },
  {
    "en": "privacy",
    "cn": "隐居；秘密",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3898
  },
  {
    "en": "regard",
    "cn": "注意",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3902
  },
  {
    "en": "residence",
    "cn": "住处",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3904
  },
  {
    "en": "salary",
    "cn": "作报偿的东西",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3906
  },
  {
    "en": "script",
    "cn": "文字",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3908
  },
  {
    "en": "strip",
    "cn": "带；临时降落场",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3911
  },
  {
    "en": "tube",
    "cn": "筒",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.36,
    "rank": 3915
  },
  {
    "en": "ambassador",
    "cn": "大使；代表",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3922
  },
  {
    "en": "breast",
    "cn": "乳房",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3927
  },
  {
    "en": "chemistry",
    "cn": "化学；人际感情",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3931
  },
  {
    "en": "consumption",
    "cn": "摄取；肺结核",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3933
  },
  {
    "en": "corruption",
    "cn": "溃烂；腐朽",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3934
  },
  {
    "en": "cotton",
    "cn": "棉花作物；棉",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3935
  },
  {
    "en": "discount",
    "cn": "削价；折扣",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3938
  },
  {
    "en": "dozen",
    "cn": "十二",
    "pos": "noun",
    "category": "数量与度量",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3939
  },
  {
    "en": "exception",
    "cn": "例外",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3942
  },
  {
    "en": "exit",
    "cn": "出口",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3943
  },
  {
    "en": "fancy",
    "cn": "幻想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3945
  },
  {
    "en": "impression",
    "cn": "印象",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3950
  },
  {
    "en": "input",
    "cn": "发言",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3953
  },
  {
    "en": "leather",
    "cn": "皮",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3957
  },
  {
    "en": "lip",
    "cn": "嘴唇",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3958
  },
  {
    "en": "luxury",
    "cn": "华贵",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3959
  },
  {
    "en": "manufacturer",
    "cn": "制作者",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3961
  },
  {
    "en": "outcome",
    "cn": "结果；后果",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3967
  },
  {
    "en": "poll",
    "cn": "作民意调查",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3969
  },
  {
    "en": "removal",
    "cn": "切除",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3974
  },
  {
    "en": "reporter",
    "cn": "新闻工作者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3976
  },
  {
    "en": "sequence",
    "cn": "序列",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3982
  },
  {
    "en": "tennis",
    "cn": "网球",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3986
  },
  {
    "en": "theater",
    "cn": "戏剧艺术",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3988
  },
  {
    "en": "virgin",
    "cn": "处女",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3992
  },
  {
    "en": "wolf",
    "cn": "狼",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.35,
    "rank": 3995
  },
  {
    "en": "absence",
    "cn": "不在",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 3996
  },
  {
    "en": "athlete",
    "cn": "运动员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4000
  },
  {
    "en": "blue",
    "cn": "蓝色；蓝色的衣服",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4002
  },
  {
    "en": "bull",
    "cn": "公牛",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4005
  },
  {
    "en": "commonwealth",
    "cn": "共和国",
    "pos": "noun",
    "category": "地点与环境",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4007
  },
  {
    "en": "contribution",
    "cn": "份额；捐助",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4009
  },
  {
    "en": "ease",
    "cn": "安逸；减轻",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4015
  },
  {
    "en": "fame",
    "cn": "名声；公众声望",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4017
  },
  {
    "en": "flood",
    "cn": "发大水；一大批",
    "pos": "noun",
    "category": "自然与现象",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4018
  },
  {
    "en": "instant",
    "cn": "一眨眼的功夫；刹那",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4024
  },
  {
    "en": "liberty",
    "cn": "独立；自主权",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4029
  },
  {
    "en": "photograph",
    "cn": "照片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4036
  },
  {
    "en": "punishment",
    "cn": "处罚",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4040
  },
  {
    "en": "rally",
    "cn": "集合；复原",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4041
  },
  {
    "en": "sum",
    "cn": "一笔钱；全部",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4050
  },
  {
    "en": "swing",
    "cn": "秋千",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4051
  },
  {
    "en": "tail",
    "cn": "尾",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4052
  },
  {
    "en": "twin",
    "cn": "双胞胎",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4054
  },
  {
    "en": "veteran",
    "cn": "老兵",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.34,
    "rank": 4056
  },
  {
    "en": "arena",
    "cn": "场；竞技场",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4058
  },
  {
    "en": "boom",
    "cn": "景气",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4062
  },
  {
    "en": "boot",
    "cn": "皮靴；后备箱",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4063
  },
  {
    "en": "column",
    "cn": "色谱精炼柱；列",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4066
  },
  {
    "en": "compensation",
    "cn": "补偿；代偿",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4068
  },
  {
    "en": "composition",
    "cn": "构成；成分",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4069
  },
  {
    "en": "conservation",
    "cn": "保护",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4071
  },
  {
    "en": "density",
    "cn": "密度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4076
  },
  {
    "en": "difficulty",
    "cn": "困难；困境",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4078
  },
  {
    "en": "expense",
    "cn": "付出款；业务费用",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4083
  },
  {
    "en": "fleet",
    "cn": "舰队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4084
  },
  {
    "en": "genius",
    "cn": "人才；天才",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4089
  },
  {
    "en": "guidance",
    "cn": "个别辅导",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4091
  },
  {
    "en": "infection",
    "cn": "传染",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4093
  },
  {
    "en": "intention",
    "cn": "意图；意向",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4095
  },
  {
    "en": "knee",
    "cn": "膝",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4098
  },
  {
    "en": "participation",
    "cn": "分享",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4102
  },
  {
    "en": "pregnancy",
    "cn": "受孕",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4105
  },
  {
    "en": "premium",
    "cn": "保险费；汇水",
    "pos": "noun",
    "category": "经济与财产",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4106
  },
  {
    "en": "radical",
    "cn": "化学族；激进分子",
    "pos": "noun",
    "category": "材料与物质",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4112
  },
  {
    "en": "reward",
    "cn": "报酬",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4116
  },
  {
    "en": "satellite",
    "cn": "人造卫星",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4120
  },
  {
    "en": "teen",
    "cn": "少年",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4127
  },
  {
    "en": "transmission",
    "cn": "透射",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4129
  },
  {
    "en": "trap",
    "cn": "圈套",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4130
  },
  {
    "en": "uniform",
    "cn": "制服",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4131
  },
  {
    "en": "wildlife",
    "cn": "野生动物",
    "pos": "noun",
    "category": "群体与组织",
    "level": "进阶",
    "frequency": 4.33,
    "rank": 4132
  },
  {
    "en": "bang",
    "cn": "轰隆声",
    "pos": "noun",
    "category": "事件与经历",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4139
  },
  {
    "en": "blast",
    "cn": "轰隆声",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4140
  },
  {
    "en": "communist",
    "cn": "共产主义者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4144
  },
  {
    "en": "complaint",
    "cn": "小病",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4145
  },
  {
    "en": "courage",
    "cn": "勇敢",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4148
  },
  {
    "en": "cure",
    "cn": "医药",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4149
  },
  {
    "en": "diversity",
    "cn": "变化",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4152
  },
  {
    "en": "eve",
    "cn": "前夕",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4155
  },
  {
    "en": "feedback",
    "cn": "反馈；反应",
    "pos": "noun",
    "category": "过程与变化",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4157
  },
  {
    "en": "fighter",
    "cn": "强击机",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4158
  },
  {
    "en": "humanity",
    "cn": "人性；人类",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4162
  },
  {
    "en": "innovation",
    "cn": "发明",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4165
  },
  {
    "en": "instrument",
    "cn": "仪器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4166
  },
  {
    "en": "jacket",
    "cn": "夹克；外皮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4168
  },
  {
    "en": "listing",
    "cn": "列表",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4171
  },
  {
    "en": "manual",
    "cn": "手册",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4172
  },
  {
    "en": "operator",
    "cn": "算子",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4178
  },
  {
    "en": "preparation",
    "cn": "配制品",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4181
  },
  {
    "en": "punch",
    "cn": "以拳重击；伴汁酒",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4182
  },
  {
    "en": "purple",
    "cn": "皇族",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4183
  },
  {
    "en": "railroad",
    "cn": "铁路；轨道",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4184
  },
  {
    "en": "registration",
    "cn": "入学",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4185
  },
  {
    "en": "romance",
    "cn": "偷香窃玉",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4188
  },
  {
    "en": "tissue",
    "cn": "组织；卫生纸",
    "pos": "noun",
    "category": "身体与健康",
    "level": "进阶",
    "frequency": 4.32,
    "rank": 4195
  },
  {
    "en": "announcement",
    "cn": "公告",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4207
  },
  {
    "en": "arsenal",
    "cn": "兵工厂",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4209
  },
  {
    "en": "bite",
    "cn": "伤口；一口",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4213
  },
  {
    "en": "chip",
    "cn": "断片",
    "pos": "noun",
    "category": "综合概念",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4219
  },
  {
    "en": "discrimination",
    "cn": "偏爱",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4225
  },
  {
    "en": "disorder",
    "cn": "不适；使凌乱",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4226
  },
  {
    "en": "domain",
    "cn": "场",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4230
  },
  {
    "en": "engagement",
    "cn": "战争；约会",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4233
  },
  {
    "en": "footage",
    "cn": "电影胶片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4237
  },
  {
    "en": "grave",
    "cn": "坟墓",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4239
  },
  {
    "en": "jazz",
    "cn": "爵士",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4244
  },
  {
    "en": "laboratory",
    "cn": "实验室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4247
  },
  {
    "en": "mask",
    "cn": "假面具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4251
  },
  {
    "en": "midnight",
    "cn": "午夜",
    "pos": "noun",
    "category": "时间",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4253
  },
  {
    "en": "mouse",
    "cn": "家鼠；黑眼眶",
    "pos": "noun",
    "category": "动物",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4255
  },
  {
    "en": "piano",
    "cn": "钢琴",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4258
  },
  {
    "en": "praise",
    "cn": "名誉",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4259
  },
  {
    "en": "presentation",
    "cn": "展示",
    "pos": "noun",
    "category": "行为与活动",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4260
  },
  {
    "en": "psychology",
    "cn": "心理学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4261
  },
  {
    "en": "restriction",
    "cn": "限制",
    "pos": "noun",
    "category": "思维与学习",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4263
  },
  {
    "en": "rocket",
    "cn": "火箭",
    "pos": "noun",
    "category": "物品与科技",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4264
  },
  {
    "en": "ruin",
    "cn": "毁灭；废墟",
    "pos": "noun",
    "category": "状态与处境",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4265
  },
  {
    "en": "slave",
    "cn": "奴隶",
    "pos": "noun",
    "category": "人物与社会",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4270
  },
  {
    "en": "stability",
    "cn": "稳定",
    "pos": "noun",
    "category": "性质与特征",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4271
  },
  {
    "en": "symbol",
    "cn": "代号",
    "pos": "noun",
    "category": "语言与信息",
    "level": "进阶",
    "frequency": 4.31,
    "rank": 4274
  },
  {
    "en": "treaty",
    "cn": "协定",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.31,
    "rank": 4277
  },
  {
    "en": "agendum",
    "cn": "应办事项",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4285
  },
  {
    "en": "bat",
    "cn": "蝙蝠",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4286
  },
  {
    "en": "bow",
    "cn": "蝴蝶结；小提琴的拉弓",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4287
  },
  {
    "en": "calendar",
    "cn": "历",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4288
  },
  {
    "en": "cape",
    "cn": "披肩",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4289
  },
  {
    "en": "cooperation",
    "cn": "协作",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4292
  },
  {
    "en": "craft",
    "cn": "职业；航空器",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4293
  },
  {
    "en": "darkness",
    "cn": "夜色；不道德",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4294
  },
  {
    "en": "equity",
    "cn": "股份",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4299
  },
  {
    "en": "estimate",
    "cn": "估价",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4300
  },
  {
    "en": "fortune",
    "cn": "侥幸；大笔钱",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4303
  },
  {
    "en": "goodbye",
    "cn": "再会",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4305
  },
  {
    "en": "hardware",
    "cn": "军用武器装备；五金器具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4307
  },
  {
    "en": "involvement",
    "cn": "卷入",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4312
  },
  {
    "en": "nut",
    "cn": "坚果",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4316
  },
  {
    "en": "petition",
    "cn": "要求",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4319
  },
  {
    "en": "regime",
    "cn": "政体",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4325
  },
  {
    "en": "sauce",
    "cn": "汁",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4330
  },
  {
    "en": "seal",
    "cn": "海豹皮",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4331
  },
  {
    "en": "shield",
    "cn": "防卫物",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4333
  },
  {
    "en": "stem",
    "cn": "柄",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4336
  },
  {
    "en": "summit",
    "cn": "极点；尖峰",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4337
  },
  {
    "en": "throat",
    "cn": "咽",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4339
  },
  {
    "en": "tiger",
    "cn": "老虎",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4340
  },
  {
    "en": "toy",
    "cn": "玩具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4342
  },
  {
    "en": "warrior",
    "cn": "战士",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.3,
    "rank": 4344
  },
  {
    "en": "accounting",
    "cn": "解释；会计",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4346
  },
  {
    "en": "beast",
    "cn": "凶残的人",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4350
  },
  {
    "en": "beef",
    "cn": "肉牛；牛肉",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4351
  },
  {
    "en": "carrier",
    "cn": "搬运器；航母",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4353
  },
  {
    "en": "celebration",
    "cn": "庆典",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4354
  },
  {
    "en": "celebrity",
    "cn": "名声",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4355
  },
  {
    "en": "certificate",
    "cn": "证书；凭证",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4356
  },
  {
    "en": "clay",
    "cn": "粘土；泥",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4358
  },
  {
    "en": "colleague",
    "cn": "一起工作的人",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4360
  },
  {
    "en": "default",
    "cn": "不付",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4364
  },
  {
    "en": "dialogue",
    "cn": "会话；台词",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4367
  },
  {
    "en": "execution",
    "cn": "处决；实行",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4374
  },
  {
    "en": "fool",
    "cn": "傻子；小丑",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4378
  },
  {
    "en": "framework",
    "cn": "模型；构架",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4379
  },
  {
    "en": "franchise",
    "cn": "商品特许经销商",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4380
  },
  {
    "en": "furniture",
    "cn": "家具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4382
  },
  {
    "en": "interaction",
    "cn": "相互作用",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4387
  },
  {
    "en": "jet",
    "cn": "喷气式飞机；喷出",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4388
  },
  {
    "en": "lighting",
    "cn": "光亮；舞台照明设备",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4391
  },
  {
    "en": "loop",
    "cn": "金属圈；圈",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4393
  },
  {
    "en": "polish",
    "cn": "培养；上光剂",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4399
  },
  {
    "en": "recommendation",
    "cn": "推荐",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4400
  },
  {
    "en": "sacrifice",
    "cn": "亏本",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4409
  },
  {
    "en": "tale",
    "cn": "叙述；谎言",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4416
  },
  {
    "en": "volunteer",
    "cn": "自愿者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.29,
    "rank": 4420
  },
  {
    "en": "alarm",
    "cn": "恐怖；报警系统",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4426
  },
  {
    "en": "butt",
    "cn": "对接端",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4430
  },
  {
    "en": "characteristic",
    "cn": "特征",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4431
  },
  {
    "en": "consideration",
    "cn": "思考；形势",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4435
  },
  {
    "en": "filter",
    "cn": "过滤器；滤光器",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4449
  },
  {
    "en": "galaxy",
    "cn": "恒星系",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4450
  },
  {
    "en": "globe",
    "cn": "世界；球",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4451
  },
  {
    "en": "highlight",
    "cn": "亮点",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4455
  },
  {
    "en": "intent",
    "cn": "意图；意义",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4457
  },
  {
    "en": "judgment",
    "cn": "判断；判决",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4459
  },
  {
    "en": "knight",
    "cn": "马",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4461
  },
  {
    "en": "odds",
    "cn": "赌注的比率",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4471
  },
  {
    "en": "photographer",
    "cn": "摄影师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4474
  },
  {
    "en": "pump",
    "cn": "唧筒；心",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4480
  },
  {
    "en": "revenge",
    "cn": "以牙还牙",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4484
  },
  {
    "en": "slip",
    "cn": "出丑；陶饰土",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4488
  },
  {
    "en": "specialist",
    "cn": "专家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4491
  },
  {
    "en": "tap",
    "cn": "拍击；水龙头",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.28,
    "rank": 4496
  },
  {
    "en": "ally",
    "cn": "同盟；盟友",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4504
  },
  {
    "en": "auction",
    "cn": "拍卖式桥牌；公开拍卖",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4506
  },
  {
    "en": "chaos",
    "cn": "大混乱",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4509
  },
  {
    "en": "concentration",
    "cn": "浓度",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4514
  },
  {
    "en": "copper",
    "cn": "铜；铜币",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4515
  },
  {
    "en": "dawn",
    "cn": "天亮；开端",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4520
  },
  {
    "en": "dispute",
    "cn": "争执",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4521
  },
  {
    "en": "earnings",
    "cn": "净利；作报偿的东西",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4522
  },
  {
    "en": "margin",
    "cn": "边境；保证金",
    "pos": "noun",
    "category": "形状与空间",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4537
  },
  {
    "en": "mechanism",
    "cn": "化学反应机理",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4540
  },
  {
    "en": "opus",
    "cn": "乐曲",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4544
  },
  {
    "en": "parallel",
    "cn": "模拟",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4546
  },
  {
    "en": "passage",
    "cn": "一段",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4547
  },
  {
    "en": "pit",
    "cn": "坑；凹形",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4548
  },
  {
    "en": "quest",
    "cn": "追求；寻找",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4551
  },
  {
    "en": "radiation",
    "cn": "放射病",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4552
  },
  {
    "en": "stroke",
    "cn": "中风",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4555
  },
  {
    "en": "tune",
    "cn": "旋律",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4563
  },
  {
    "en": "vessel",
    "cn": "船；器皿",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.27,
    "rank": 4565
  },
  {
    "en": "acquisition",
    "cn": "获得",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4569
  },
  {
    "en": "autumn",
    "cn": "秋",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4576
  },
  {
    "en": "clip",
    "cn": "弹夹；夹子",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4586
  },
  {
    "en": "coin",
    "cn": "硬币",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4588
  },
  {
    "en": "conspiracy",
    "cn": "阴谋",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4590
  },
  {
    "en": "encounter",
    "cn": "邂逅",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4596
  },
  {
    "en": "equality",
    "cn": "同等",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4597
  },
  {
    "en": "examination",
    "cn": "测验",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4599
  },
  {
    "en": "federation",
    "cn": "同盟国",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4602
  },
  {
    "en": "intervention",
    "cn": "干涉",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4609
  },
  {
    "en": "lover",
    "cn": "爱好者；情侣",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4611
  },
  {
    "en": "mainstream",
    "cn": "主流",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4612
  },
  {
    "en": "menu",
    "cn": "菜单；菜肴",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4613
  },
  {
    "en": "offense",
    "cn": "不恭；刑事犯罪",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4619
  },
  {
    "en": "panic",
    "cn": "恐怖；恐慌",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4621
  },
  {
    "en": "people",
    "cn": "人们",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4623
  },
  {
    "en": "refugee",
    "cn": "流亡者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4626
  },
  {
    "en": "scope",
    "cn": "界限；环境情况",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4632
  },
  {
    "en": "segment",
    "cn": "段",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4633
  },
  {
    "en": "spectrum",
    "cn": "系列",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4634
  },
  {
    "en": "terror",
    "cn": "恐怖",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4637
  },
  {
    "en": "venture",
    "cn": "冒险事业；投机",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.26,
    "rank": 4640
  },
  {
    "en": "arrangement",
    "cn": "协定；布置",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4654
  },
  {
    "en": "boundary",
    "cn": "分界线",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4657
  },
  {
    "en": "brick",
    "cn": "砖",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4658
  },
  {
    "en": "emperor",
    "cn": "天蚕蛾",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4667
  },
  {
    "en": "employer",
    "cn": "雇主",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4668
  },
  {
    "en": "focusing",
    "cn": "使聚集",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4671
  },
  {
    "en": "garage",
    "cn": "车库；汽车修理厂",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4674
  },
  {
    "en": "gathering",
    "cn": "大会",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4675
  },
  {
    "en": "guideline",
    "cn": "准则",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4676
  },
  {
    "en": "inquiry",
    "cn": "审问",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4681
  },
  {
    "en": "inspector",
    "cn": "检查员",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4682
  },
  {
    "en": "khan",
    "cn": "商队旅馆",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4684
  },
  {
    "en": "lion",
    "cn": "狮",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4686
  },
  {
    "en": "mercy",
    "cn": "仁慈",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4691
  },
  {
    "en": "oxygen",
    "cn": "氧",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4695
  },
  {
    "en": "pipe",
    "cn": "筒",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4696
  },
  {
    "en": "poem",
    "cn": "诗",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4698
  },
  {
    "en": "powder",
    "cn": "粉；火药",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4699
  },
  {
    "en": "shelter",
    "cn": "保卫",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4712
  },
  {
    "en": "signature",
    "cn": "签名",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4713
  },
  {
    "en": "spider",
    "cn": "蜘蛛",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4715
  },
  {
    "en": "tribute",
    "cn": "表达尊敬的东西；保护费",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4722
  },
  {
    "en": "trigger",
    "cn": "扳机",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.25,
    "rank": 4723
  },
  {
    "en": "abortion",
    "cn": "堕胎",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4733
  },
  {
    "en": "bullet",
    "cn": "子弹；子弹火车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4741
  },
  {
    "en": "conversion",
    "cn": "换位",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4746
  },
  {
    "en": "deposit",
    "cn": "沉积；沉淀",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4750
  },
  {
    "en": "destination",
    "cn": "目的地；地址",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4751
  },
  {
    "en": "dirt",
    "cn": "土；变脏",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4752
  },
  {
    "en": "export",
    "cn": "出口",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4758
  },
  {
    "en": "grandfather",
    "cn": "外公",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4763
  },
  {
    "en": "habit",
    "cn": "习惯",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4764
  },
  {
    "en": "neighbor",
    "cn": "邻居",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4780
  },
  {
    "en": "pussy",
    "cn": "小猫",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4790
  },
  {
    "en": "robot",
    "cn": "机器人",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4793
  },
  {
    "en": "spy",
    "cn": "间谍",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4799
  },
  {
    "en": "suggestion",
    "cn": "建议；微量",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4801
  },
  {
    "en": "suspension",
    "cn": "悬浮液；中断",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4804
  },
  {
    "en": "treasury",
    "cn": "基金；国库券",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4808
  },
  {
    "en": "tunnel",
    "cn": "地下通道",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4809
  },
  {
    "en": "warrant",
    "cn": "搜查证；认股权证",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4812
  },
  {
    "en": "wound",
    "cn": "伤口",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.24,
    "rank": 4814
  },
  {
    "en": "backing",
    "cn": "底座；供给",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4823
  },
  {
    "en": "brush",
    "cn": "刷",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4828
  },
  {
    "en": "burden",
    "cn": "负荷",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4829
  },
  {
    "en": "charter",
    "cn": "凭照",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4834
  },
  {
    "en": "civilian",
    "cn": "平民",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4837
  },
  {
    "en": "coalition",
    "cn": "同盟；结为一体",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4838
  },
  {
    "en": "cock",
    "cn": "击铁",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4839
  },
  {
    "en": "discipline",
    "cn": "主题",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4847
  },
  {
    "en": "essay",
    "cn": "杂文；企图",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4854
  },
  {
    "en": "healing",
    "cn": "康复",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4860
  },
  {
    "en": "invasion",
    "cn": "侵入",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4865
  },
  {
    "en": "opponent",
    "cn": "对手",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4874
  },
  {
    "en": "palm",
    "cn": "一掌宽；棕榈",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4876
  },
  {
    "en": "pole",
    "cn": "杆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4879
  },
  {
    "en": "pub",
    "cn": "小酒馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4880
  },
  {
    "en": "reception",
    "cn": "接待；招待会",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4885
  },
  {
    "en": "rubber",
    "cn": "印度橡胶；合成橡胶",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4890
  },
  {
    "en": "serial",
    "cn": "序列",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4892
  },
  {
    "en": "snake",
    "cn": "蛇",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4895
  },
  {
    "en": "stealing",
    "cn": "偷窃",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4897
  },
  {
    "en": "substance",
    "cn": "实质",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4900
  },
  {
    "en": "syndrome",
    "cn": "并发症状",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4903
  },
  {
    "en": "usage",
    "cn": "习惯",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.23,
    "rank": 4908
  },
  {
    "en": "amateur",
    "cn": "业余技艺家；业余爱好家",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4913
  },
  {
    "en": "bearing",
    "cn": "关系；举止",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4918
  },
  {
    "en": "bin",
    "cn": "容器；一箱的容量",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4920
  },
  {
    "en": "biology",
    "cn": "生物区系",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4921
  },
  {
    "en": "canal",
    "cn": "沟渠",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4924
  },
  {
    "en": "cruise",
    "cn": "巡游",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4933
  },
  {
    "en": "custody",
    "cn": "扣押；拘留",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4934
  },
  {
    "en": "departure",
    "cn": "出发",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4937
  },
  {
    "en": "developer",
    "cn": "显影装置",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4938
  },
  {
    "en": "eagle",
    "cn": "老鹰；老鹰球",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4941
  },
  {
    "en": "explosion",
    "cn": "爆发",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4944
  },
  {
    "en": "fever",
    "cn": "发烧",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4945
  },
  {
    "en": "fluid",
    "cn": "流体",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4946
  },
  {
    "en": "imagination",
    "cn": "想象力",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4954
  },
  {
    "en": "integration",
    "cn": "种族或宗教融合",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4955
  },
  {
    "en": "integrity",
    "cn": "完全；正直",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4956
  },
  {
    "en": "motivation",
    "cn": "动机",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4965
  },
  {
    "en": "outfit",
    "cn": "服装；全套工具",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4968
  },
  {
    "en": "pension",
    "cn": "补助金",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4969
  },
  {
    "en": "portrait",
    "cn": "肖像",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4974
  },
  {
    "en": "tension",
    "cn": "不安",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4987
  },
  {
    "en": "transaction",
    "cn": "买卖",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4991
  },
  {
    "en": "unemployment",
    "cn": "失业",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4994
  },
  {
    "en": "unity",
    "cn": "完全；数目1",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4995
  },
  {
    "en": "viewer",
    "cn": "旁观者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.22,
    "rank": 4997
  },
  {
    "en": "advocate",
    "cn": "建议者；律师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5003
  },
  {
    "en": "arc",
    "cn": "弧",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5005
  },
  {
    "en": "clinic",
    "cn": "诊所；门诊所",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5015
  },
  {
    "en": "creature",
    "cn": "凶残的人",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5022
  },
  {
    "en": "criterion",
    "cn": "标准",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5023
  },
  {
    "en": "detective",
    "cn": "侦探",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5025
  },
  {
    "en": "disability",
    "cn": "伤残",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5027
  },
  {
    "en": "dish",
    "cn": "盘；一道菜",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5028
  },
  {
    "en": "duck",
    "cn": "鸭；零分",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5031
  },
  {
    "en": "excess",
    "cn": "盈余；过多",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5035
  },
  {
    "en": "farming",
    "cn": "养殖业",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5036
  },
  {
    "en": "fence",
    "cn": "围墙",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5037
  },
  {
    "en": "gravity",
    "cn": "地球引力；严肃",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5046
  },
  {
    "en": "holder",
    "cn": "夹具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5050
  },
  {
    "en": "meter",
    "cn": "公尺；仪表",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5063
  },
  {
    "en": "nail",
    "cn": "手指甲；钉子",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5064
  },
  {
    "en": "negotiation",
    "cn": "交涉",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5066
  },
  {
    "en": "nonsense",
    "cn": "废话",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5067
  },
  {
    "en": "sink",
    "cn": "水槽；自然排列",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5081
  },
  {
    "en": "slavery",
    "cn": "奴役；奴隶制",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5083
  },
  {
    "en": "transformation",
    "cn": "坐标转换",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.21,
    "rank": 5093
  },
  {
    "en": "bronze",
    "cn": "青铜；青铜像",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5104
  },
  {
    "en": "bug",
    "cn": "小虫；错误",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5105
  },
  {
    "en": "cave",
    "cn": "洞",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5108
  },
  {
    "en": "diagnosis",
    "cn": "诊断",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5121
  },
  {
    "en": "dose",
    "cn": "一剂药；一剂",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5124
  },
  {
    "en": "flesh",
    "cn": "肌肉；人体",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5128
  },
  {
    "en": "implement",
    "cn": "器具",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5135
  },
  {
    "en": "marijuana",
    "cn": "大麻",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5142
  },
  {
    "en": "occupation",
    "cn": "岗位；军事控制",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5146
  },
  {
    "en": "patch",
    "cn": "小块土地；补丁",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5149
  },
  {
    "en": "patience",
    "cn": "忍耐",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5150
  },
  {
    "en": "pollution",
    "cn": "污染；弄脏",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5153
  },
  {
    "en": "privilege",
    "cn": "优惠",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5156
  },
  {
    "en": "relative",
    "cn": "亲属",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5162
  },
  {
    "en": "terrorist",
    "cn": "恐怖主义者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5167
  },
  {
    "en": "tourist",
    "cn": "度假者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.2,
    "rank": 5169
  },
  {
    "en": "airline",
    "cn": "空气软管；航空公司",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5183
  },
  {
    "en": "blade",
    "cn": "叶片",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5191
  },
  {
    "en": "buck",
    "cn": "一美元钞票",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5194
  },
  {
    "en": "cargo",
    "cn": "船货",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5197
  },
  {
    "en": "census",
    "cn": "人口普查",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5198
  },
  {
    "en": "confusion",
    "cn": "无秩序",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5204
  },
  {
    "en": "corn",
    "cn": "玉米",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5206
  },
  {
    "en": "dealer",
    "cn": "买卖约定者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5209
  },
  {
    "en": "destiny",
    "cn": "命运",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5211
  },
  {
    "en": "electronics",
    "cn": "电子学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5213
  },
  {
    "en": "emphasis",
    "cn": "强调",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5216
  },
  {
    "en": "excitement",
    "cn": "兴奋",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5218
  },
  {
    "en": "exploration",
    "cn": "勘察",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5219
  },
  {
    "en": "filling",
    "cn": "填充物；充填",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5221
  },
  {
    "en": "humor",
    "cn": "幽默；心境",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5226
  },
  {
    "en": "insight",
    "cn": "洞察力；奇想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5227
  },
  {
    "en": "nerve",
    "cn": "神经；厚脸皮",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5237
  },
  {
    "en": "nightmare",
    "cn": "噩梦",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5239
  },
  {
    "en": "pie",
    "cn": "派",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5244
  },
  {
    "en": "poster",
    "cn": "驿马",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5247
  },
  {
    "en": "raid",
    "cn": "劫掠",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5253
  },
  {
    "en": "ram",
    "cn": "公羊；白羊座",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5254
  },
  {
    "en": "ranking",
    "cn": "顺序",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5256
  },
  {
    "en": "scenario",
    "cn": "情节",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5263
  },
  {
    "en": "sheep",
    "cn": "绵羊",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5264
  },
  {
    "en": "taxi",
    "cn": "出租汽车",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5273
  },
  {
    "en": "tobacco",
    "cn": "烟草",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5276
  },
  {
    "en": "trace",
    "cn": "微量",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5277
  },
  {
    "en": "weakness",
    "cn": "弱点；虚弱",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.19,
    "rank": 5282
  },
  {
    "en": "animation",
    "cn": "生命",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5290
  },
  {
    "en": "assignment",
    "cn": "任务；转让器",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5291
  },
  {
    "en": "basement",
    "cn": "地下室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5294
  },
  {
    "en": "bias",
    "cn": "偏见；斜",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5297
  },
  {
    "en": "carpet",
    "cn": "地毯",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5301
  },
  {
    "en": "ceiling",
    "cn": "天棚；上限",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5302
  },
  {
    "en": "cherry",
    "cn": "樱桃木；樱桃树",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5303
  },
  {
    "en": "chill",
    "cn": "冷",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5304
  },
  {
    "en": "clue",
    "cn": "线索",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5306
  },
  {
    "en": "collapse",
    "cn": "失去自我控制",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5309
  },
  {
    "en": "compound",
    "cn": "化合物；围地",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5311
  },
  {
    "en": "costume",
    "cn": "剧装；套装",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5315
  },
  {
    "en": "garbage",
    "cn": "残羹剩饭；垃圾箱",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5327
  },
  {
    "en": "grain",
    "cn": "细粒；谷物",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5329
  },
  {
    "en": "heating",
    "cn": "加温；供暖系统",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5332
  },
  {
    "en": "identification",
    "cn": "身份证明；确认",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5333
  },
  {
    "en": "lap",
    "cn": "腰以下及大腿的前面部分；范围",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5335
  },
  {
    "en": "liver",
    "cn": "肝",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5337
  },
  {
    "en": "mixture",
    "cn": "混合物；杂录",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5341
  },
  {
    "en": "oak",
    "cn": "栎树",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5343
  },
  {
    "en": "patent",
    "cn": "专利",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5345
  },
  {
    "en": "perception",
    "cn": "感悟",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5346
  },
  {
    "en": "physician",
    "cn": "医师",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5347
  },
  {
    "en": "pupil",
    "cn": "学生；瞳孔",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5351
  },
  {
    "en": "rifle",
    "cn": "来复枪",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5354
  },
  {
    "en": "significance",
    "cn": "含义",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5363
  },
  {
    "en": "soap",
    "cn": "肥皂；贿金",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5367
  },
  {
    "en": "spray",
    "cn": "喷雾",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5368
  },
  {
    "en": "suite",
    "cn": "套房",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5372
  },
  {
    "en": "verse",
    "cn": "诗",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5377
  },
  {
    "en": "victor",
    "cn": "优胜者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.18,
    "rank": 5378
  },
  {
    "en": "acre",
    "cn": "英亩；阿克里",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5382
  },
  {
    "en": "adoption",
    "cn": "接受；收养",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5384
  },
  {
    "en": "attendance",
    "cn": "出席",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5389
  },
  {
    "en": "aviation",
    "cn": "航空",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5390
  },
  {
    "en": "barrel",
    "cn": "枪管；大琵琶桶",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5391
  },
  {
    "en": "chuck",
    "cn": "卡盘",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5399
  },
  {
    "en": "cinema",
    "cn": "电影胶片；影剧院",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5400
  },
  {
    "en": "compliance",
    "cn": "一致",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5403
  },
  {
    "en": "contrary",
    "cn": "反面",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5404
  },
  {
    "en": "couch",
    "cn": "沙发；涂层",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5407
  },
  {
    "en": "crush",
    "cn": "压光皮革",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5409
  },
  {
    "en": "dam",
    "cn": "坝；公丈",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5410
  },
  {
    "en": "decrease",
    "cn": "减小",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5411
  },
  {
    "en": "diabetes",
    "cn": "多尿症",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5413
  },
  {
    "en": "grammar",
    "cn": "文法",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5420
  },
  {
    "en": "jam",
    "cn": "果酱；困境",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5426
  },
  {
    "en": "lease",
    "cn": "供出租的财产；租契",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5432
  },
  {
    "en": "lens",
    "cn": "透镜；兵豆属",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5433
  },
  {
    "en": "loyalty",
    "cn": "忠心；奉献",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5435
  },
  {
    "en": "metre",
    "cn": "公尺",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5438
  },
  {
    "en": "notion",
    "cn": "思想",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5441
  },
  {
    "en": "propaganda",
    "cn": "宣传",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5445
  },
  {
    "en": "rat",
    "cn": "家鼠；工贼",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5446
  },
  {
    "en": "scandal",
    "cn": "丑事",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5451
  },
  {
    "en": "tactic",
    "cn": "战术",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5457
  },
  {
    "en": "treasure",
    "cn": "财富；佳作",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5460
  },
  {
    "en": "trophy",
    "cn": "奖品",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.17,
    "rank": 5461
  },
  {
    "en": "acceptance",
    "cn": "接受；受理",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5469
  },
  {
    "en": "ash",
    "cn": "灰；白蜡树",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5477
  },
  {
    "en": "aunt",
    "cn": "伯母",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5478
  },
  {
    "en": "bubble",
    "cn": "气泡",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5481
  },
  {
    "en": "casino",
    "cn": "卡西诺",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5483
  },
  {
    "en": "counsel",
    "cn": "律师；个别辅导",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5487
  },
  {
    "en": "embrace",
    "cn": "拥抱；包围或环绕",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5494
  },
  {
    "en": "exhibit",
    "cn": "呈现",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5496
  },
  {
    "en": "gentleman",
    "cn": "先生",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5498
  },
  {
    "en": "hammer",
    "cn": "击铁；榔头",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5501
  },
  {
    "en": "installation",
    "cn": "设备",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5508
  },
  {
    "en": "laying",
    "cn": "下蛋",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5514
  },
  {
    "en": "legislature",
    "cn": "立法机关",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5515
  },
  {
    "en": "liability",
    "cn": "责任；亏欠",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5516
  },
  {
    "en": "marathon",
    "cn": "耐力的考验；马拉松",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5520
  },
  {
    "en": "marvel",
    "cn": "奇迹",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5521
  },
  {
    "en": "parade",
    "cn": "游行",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5528
  },
  {
    "en": "paradise",
    "cn": "乐园",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5529
  },
  {
    "en": "presidency",
    "cn": "官员任期；总统职位",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5536
  },
  {
    "en": "remark",
    "cn": "发言；注意",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5540
  },
  {
    "en": "satisfaction",
    "cn": "满意",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5546
  },
  {
    "en": "scratch",
    "cn": "擦；凹痕",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5547
  },
  {
    "en": "shade",
    "cn": "阴暗",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5548
  },
  {
    "en": "sunshine",
    "cn": "太阳光；好天气",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5556
  },
  {
    "en": "yield",
    "cn": "利润",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.16,
    "rank": 5567
  },
  {
    "en": "admission",
    "cn": "招收；供认",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5569
  },
  {
    "en": "bacon",
    "cn": "咸肉",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5573
  },
  {
    "en": "barrier",
    "cn": "障碍；栅栏",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5574
  },
  {
    "en": "burst",
    "cn": "爆发",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5579
  },
  {
    "en": "casting",
    "cn": "模型",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5581
  },
  {
    "en": "cattle",
    "cn": "牛",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5582
  },
  {
    "en": "classroom",
    "cn": "教室",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5584
  },
  {
    "en": "compromise",
    "cn": "和解",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5587
  },
  {
    "en": "crop",
    "cn": "产量",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5591
  },
  {
    "en": "earthquake",
    "cn": "地震",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5592
  },
  {
    "en": "harbor",
    "cn": "海港；躲身处",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5599
  },
  {
    "en": "mathematics",
    "cn": "数学",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5609
  },
  {
    "en": "medication",
    "cn": "医药",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5610
  },
  {
    "en": "par",
    "cn": "标准杆数；同等",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5614
  },
  {
    "en": "productivity",
    "cn": "生产力",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5617
  },
  {
    "en": "salad",
    "cn": "沙拉",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5624
  },
  {
    "en": "scholarship",
    "cn": "奖学金",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5625
  },
  {
    "en": "soup",
    "cn": "汤；困境",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5629
  },
  {
    "en": "stake",
    "cn": "利润；标竿",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5631
  },
  {
    "en": "strain",
    "cn": "旋律",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5633
  },
  {
    "en": "tackle",
    "cn": "钓具",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5636
  },
  {
    "en": "torture",
    "cn": "折磨；剧痛",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5639
  },
  {
    "en": "vegetable",
    "cn": "蔬菜",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5645
  },
  {
    "en": "violation",
    "cn": "轻罪；侵权",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5647
  },
  {
    "en": "workshop",
    "cn": "工场；专题讨论会",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.15,
    "rank": 5650
  },
  {
    "en": "accent",
    "cn": "言语模式；强调",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5655
  },
  {
    "en": "addiction",
    "cn": "成瘾；沉溺",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5656
  },
  {
    "en": "beam",
    "cn": "栋梁",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5659
  },
  {
    "en": "bean",
    "cn": "蚕豆；豆类",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5660
  },
  {
    "en": "binding",
    "cn": "滚条",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5661
  },
  {
    "en": "blank",
    "cn": "空格符；空白",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5662
  },
  {
    "en": "buffalo",
    "cn": "北美野牛",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5663
  },
  {
    "en": "conviction",
    "cn": "坚信；判决",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5668
  },
  {
    "en": "cow",
    "cn": "母牛",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5670
  },
  {
    "en": "curve",
    "cn": "曲线；数据曲线",
    "pos": "noun",
    "category": "形状与空间",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5671
  },
  {
    "en": "duration",
    "cn": "持续时间；持续的时间",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5676
  },
  {
    "en": "grandmother",
    "cn": "外婆",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5686
  },
  {
    "en": "horn",
    "cn": "号角；犄角",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5689
  },
  {
    "en": "hurry",
    "cn": "仓促",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5690
  },
  {
    "en": "inflation",
    "cn": "通货膨胀",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5692
  },
  {
    "en": "ingredient",
    "cn": "因素",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5693
  },
  {
    "en": "intensity",
    "cn": "音量",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5697
  },
  {
    "en": "inventory",
    "cn": "存货；存货价值",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5698
  },
  {
    "en": "invitation",
    "cn": "邀请",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5700
  },
  {
    "en": "lecture",
    "cn": "演讲",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5706
  },
  {
    "en": "migration",
    "cn": "徒动",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5711
  },
  {
    "en": "missile",
    "cn": "运载火箭；导弹",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5712
  },
  {
    "en": "northwest",
    "cn": "西北",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5717
  },
  {
    "en": "organ",
    "cn": "器官；电子琴",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5719
  },
  {
    "en": "patrol",
    "cn": "侦察队",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5720
  },
  {
    "en": "pearl",
    "cn": "珍珠；小滴",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5721
  },
  {
    "en": "peer",
    "cn": "同行",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5722
  },
  {
    "en": "pepper",
    "cn": "胡椒；海椒",
    "pos": "noun",
    "category": "植物",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5723
  },
  {
    "en": "pig",
    "cn": "猪；举止粗鲁的人",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5724
  },
  {
    "en": "pile",
    "cn": "堆；书库",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5725
  },
  {
    "en": "provision",
    "cn": "供应",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5727
  },
  {
    "en": "rod",
    "cn": "杆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5731
  },
  {
    "en": "stair",
    "cn": "台阶",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5733
  },
  {
    "en": "sweat",
    "cn": "汗；出汗",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5739
  },
  {
    "en": "thunder",
    "cn": "海洛因",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5744
  },
  {
    "en": "tragedy",
    "cn": "悲剧",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5746
  },
  {
    "en": "trauma",
    "cn": "伤害；创伤",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5747
  },
  {
    "en": "zoo",
    "cn": "动物园",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.14,
    "rank": 5750
  },
  {
    "en": "accordance",
    "cn": "一致；授予权利",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5751
  },
  {
    "en": "arrow",
    "cn": "箭头符号；矢",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5758
  },
  {
    "en": "bend",
    "cn": "弯；弯子",
    "pos": "noun",
    "category": "形状与空间",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5762
  },
  {
    "en": "cabin",
    "cn": "客舱；小木屋",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5765
  },
  {
    "en": "cage",
    "cn": "笼；囚笼",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5766
  },
  {
    "en": "closet",
    "cn": "柜",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5770
  },
  {
    "en": "consciousness",
    "cn": "意识",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5774
  },
  {
    "en": "consultant",
    "cn": "指导教授",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5775
  },
  {
    "en": "controller",
    "cn": "会计；控制器",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5776
  },
  {
    "en": "courtesy",
    "cn": "彬彬有礼",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5778
  },
  {
    "en": "disc",
    "cn": "圆平面；唱片",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5782
  },
  {
    "en": "embassy",
    "cn": "大使馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5787
  },
  {
    "en": "goodness",
    "cn": "优良",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5795
  },
  {
    "en": "guilt",
    "cn": "有罪",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5796
  },
  {
    "en": "helicopter",
    "cn": "直升机",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5798
  },
  {
    "en": "miracle",
    "cn": "奇迹",
    "pos": "noun",
    "category": "事件与经历",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5813
  },
  {
    "en": "mud",
    "cn": "泥",
    "pos": "noun",
    "category": "材料与物质",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5815
  },
  {
    "en": "phenomenon",
    "cn": "现象",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5822
  },
  {
    "en": "profession",
    "cn": "职业",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5826
  },
  {
    "en": "prospect",
    "cn": "可能性；前景",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5827
  },
  {
    "en": "publisher",
    "cn": "书局",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5830
  },
  {
    "en": "separation",
    "cn": "分离",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5838
  },
  {
    "en": "ski",
    "cn": "滑雪板",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5840
  },
  {
    "en": "surgeon",
    "cn": "外科医生",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5844
  },
  {
    "en": "theft",
    "cn": "偷窃",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.13,
    "rank": 5845
  },
  {
    "en": "appreciation",
    "cn": "掌握；感谢",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5853
  },
  {
    "en": "banner",
    "cn": "横幅",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5857
  },
  {
    "en": "brad",
    "cn": "平头形钉",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5861
  },
  {
    "en": "charm",
    "cn": "吸引力；咒语",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5863
  },
  {
    "en": "colony",
    "cn": "侨民",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5866
  },
  {
    "en": "cookie",
    "cn": "小点心",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5868
  },
  {
    "en": "curriculum",
    "cn": "专业课程",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5870
  },
  {
    "en": "deadline",
    "cn": "截止日期",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5871
  },
  {
    "en": "deer",
    "cn": "鹿",
    "pos": "noun",
    "category": "动物",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5872
  },
  {
    "en": "dive",
    "cn": "低级夜总会",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5875
  },
  {
    "en": "entity",
    "cn": "实体",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5880
  },
  {
    "en": "feminist",
    "cn": "女权主义者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5883
  },
  {
    "en": "ham",
    "cn": "火腿",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5885
  },
  {
    "en": "interface",
    "cn": "分界面；用户界面",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5887
  },
  {
    "en": "jewelry",
    "cn": "珠宝",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5889
  },
  {
    "en": "jungle",
    "cn": "弱肉强食的地方",
    "pos": "noun",
    "category": "地点与环境",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5893
  },
  {
    "en": "pursuit",
    "cn": "追求；业余爱好",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5906
  },
  {
    "en": "rap",
    "cn": "拍击",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5907
  },
  {
    "en": "reminder",
    "cn": "告诫者",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5909
  },
  {
    "en": "resume",
    "cn": "草拟",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5911
  },
  {
    "en": "ridge",
    "cn": "脊",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5914
  },
  {
    "en": "scholar",
    "cn": "学习者",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5916
  },
  {
    "en": "variable",
    "cn": "变数",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.12,
    "rank": 5925
  },
  {
    "en": "ace",
    "cn": "数目1；尖儿",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5930
  },
  {
    "en": "attraction",
    "cn": "吸引力；给观众表演的表演",
    "pos": "noun",
    "category": "自然与现象",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5937
  },
  {
    "en": "bankruptcy",
    "cn": "倒闭；破产",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5939
  },
  {
    "en": "capability",
    "cn": "容量",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5941
  },
  {
    "en": "drum",
    "cn": "膜质乐器；桶形",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5958
  },
  {
    "en": "freeze",
    "cn": "凝固；停止",
    "pos": "noun",
    "category": "过程与变化",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5965
  },
  {
    "en": "grandma",
    "cn": "外婆",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5967
  },
  {
    "en": "grip",
    "cn": "手柄；手提箱",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5968
  },
  {
    "en": "handful",
    "cn": "少数；一把",
    "pos": "noun",
    "category": "数量与度量",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5969
  },
  {
    "en": "harmony",
    "cn": "和睦；和声的构成",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5971
  },
  {
    "en": "hybrid",
    "cn": "杂交品种",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5975
  },
  {
    "en": "keyboard",
    "cn": "键盘；钥匙板",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5978
  },
  {
    "en": "mixing",
    "cn": "混合",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5984
  },
  {
    "en": "noon",
    "cn": "中午",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5988
  },
  {
    "en": "potato",
    "cn": "土豆",
    "pos": "noun",
    "category": "饮食",
    "level": "托福",
    "frequency": 4.11,
    "rank": 5998
  },
  {
    "en": "preference",
    "cn": "偏好；偏爱",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6000
  },
  {
    "en": "proportion",
    "cn": "比例；大小",
    "pos": "noun",
    "category": "关系与逻辑",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6002
  },
  {
    "en": "rage",
    "cn": "怒气；大怒",
    "pos": "noun",
    "category": "情感",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6004
  },
  {
    "en": "restoration",
    "cn": "王朝复辟时期；复原",
    "pos": "noun",
    "category": "时间",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6008
  },
  {
    "en": "silk",
    "cn": "丝",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6011
  },
  {
    "en": "stamp",
    "cn": "邮票；印章；跺脚",
    "pos": "noun",
    "category": "形状与空间",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6012
  },
  {
    "en": "throne",
    "cn": "宝座",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6013
  },
  {
    "en": "urge",
    "cn": "冲动",
    "pos": "noun",
    "category": "动机与目标",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6015
  },
  {
    "en": "witch",
    "cn": "女巫",
    "pos": "noun",
    "category": "人物与社会",
    "level": "托福",
    "frequency": 4.11,
    "rank": 6019
  },
  {
    "en": "archive",
    "cn": "档案；档案馆",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6022
  },
  {
    "en": "array",
    "cn": "一系列；数组",
    "pos": "noun",
    "category": "群体与组织",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6023
  },
  {
    "en": "belly",
    "cn": "肚子；凸起部分",
    "pos": "noun",
    "category": "身体与健康",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6026
  },
  {
    "en": "booth",
    "cn": "亭",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6027
  },
  {
    "en": "breakdown",
    "cn": "故障；崩溃；分类",
    "pos": "noun",
    "category": "行为与活动",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6028
  },
  {
    "en": "citizenship",
    "cn": "公民身份；公民权",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6035
  },
  {
    "en": "cliff",
    "cn": "悬崖",
    "pos": "noun",
    "category": "综合概念",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6037
  },
  {
    "en": "consensus",
    "cn": "共识；一致意见",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6039
  },
  {
    "en": "declaration",
    "cn": "声明；宣言；申报",
    "pos": "noun",
    "category": "语言与信息",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6041
  },
  {
    "en": "derby",
    "cn": "德比赛；德比帽",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6043
  },
  {
    "en": "distinction",
    "cn": "区别；卓越；荣誉",
    "pos": "noun",
    "category": "思维与学习",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6044
  },
  {
    "en": "donation",
    "cn": "捐赠；捐款",
    "pos": "noun",
    "category": "经济与财产",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6045
  },
  {
    "en": "hunger",
    "cn": "饥饿；渴望",
    "pos": "noun",
    "category": "状态与处境",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6058
  },
  {
    "en": "import",
    "cn": "进口；进口商品；意义",
    "pos": "noun",
    "category": "物品与科技",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6061
  },
  {
    "en": "jurisdiction",
    "cn": "司法管辖权；管辖区域",
    "pos": "noun",
    "category": "性质与特征",
    "level": "托福",
    "frequency": 4.1,
    "rank": 6064
  }
];

        const WORD_SETS = { verb: WORDS_DATA, noun: NOUNS_DATA };
const EXAMPLE_DATA = {"verb:accept":"Accept an argument.","verb:achieve":"They can achieve it.","verb:act":"Think before you act.","verb:add":"Add insult to injury.","verb:admit":"Admit someone to the profession.","verb:adopt":"Adopt a book for a screenplay.","verb:advise":"They can advise it.","verb:afford":"Can you afford this car?","verb:agree":"I can't agree with you!","verb:allow":"Allow for mistakes.","verb:answer":"Answer the door.","verb:appear":"Did your latest book appear yet?","verb:apply":"Apply a principle.","verb:argue":"They can argue today.","verb:arise":"They can arise today.","verb:arrange":"Arrange my schedule.","verb:arrive":"They can arrive today.","verb:ask":"Ask a question.","verb:assume":"I assume his train was late.","verb:assure":"They can assure it.","verb:attach":"They can attach today.","verb:attack":"The visiting team started to attack.","verb:attempt":"They can attempt today.","verb:attend":"I must attend to this matter.","verb:attract":"Her good looks attract the stares of many men.","verb:avoid":"Let's avoid a confrontation.","verb:awake":"They can awake today.","verb:balance":"Balance the two weights.","verb:ban":"They can ban today.","verb:base":"Base a claim on some observation.","verb:bear":"Bear a scar.","verb:beat":"Beat the drum.","verb:become":"They can become today.","verb:begin":"Begin a cigar.","verb:behave":"Don't behave like a fool.","verb:believe":"You cannot believe this man.","verb:belong":"These pages don't belong.","verb:bend":"Bend the rod.","verb:benefit":"They can benefit today.","verb:bet":"You can bet on that!","verb:bind":"Bind the books in leather.","verb:bite":"Gunny invariably tried to bite her.","verb:blame":"They can blame it.","verb:blow":"Blow a horse.","verb:boil":"Boil this liquid until it evaporates.","verb:borrow":"May I borrow your lawn mower?","verb:bother":"Don't bother, please.","verb:break":"Break a law.","verb:breathe":"Not breathe a word.","verb:bring":"Could you bring the wine?","verb:broadcast":"Broadcast the news.","verb:build":"Build a reputation.","verb:burn":"Burn a CD.","verb:burst":"The dam burst.","verb:buy":"I can't buy this story.","verb:calculate":"They can calculate today.","verb:call":"Call a loan.","verb:care":"I don't care.","verb:carry":"Carry too far.","verb:catch":"Catch the ball!","verb:cause":"Cause a commotion.","verb:celebrate":"They can celebrate today.","verb:challenge":"They can challenge today.","verb:change":"Would you change places with me?","verb:charge":"Charge a conductor.","verb:chase":"They can chase it.","verb:check":"Check the brakes.","verb:choose":"Choose a good husband for your daughter.","verb:claim":"They can claim today.","verb:clean":"Clean the stove!","verb:clear":"Clear a debt.","verb:climb":"They can climb today.","verb:close":"Close a book.","verb:collect":"They can collect it.","verb:combine":"They can combine today.","verb:come":"Come down here!","verb:command":"Command the military forces.","verb:communicate":"Communicate a disease.","verb:compare":"We can compare the Han dynasty to the Romans.","verb:compete":"They can compete today.","verb:complain":"They can complain today.","verb:complete":"A child would complete the family.","verb:concentrate":"These groups concentrate in the inner cities.","verb:concern":"They can concern it.","verb:confirm":"Confirm thy soul in self-control!","verb:connect":"Can you connect the two loudspeakers?","verb:consider":"Consider the following case.","verb:consist":"What does love consist in?","verb:contain":"Contain the rebel movement.","verb:continue":"Continue the family tradition.","verb:contribute":"They can contribute today.","verb:control":"Control the lever.","verb:convert":"Convert lead into gold.","verb:convince":"They can convince it.","verb:cook":"Cook the books.","verb:copy":"Copy that drawing.","verb:correct":"Correct the mistakes.","verb:cost":"These shoes cost $100.","verb:count":"Count your change.","verb:cover":"Cover your head!","verb:crack":"Crack a safe.","verb:create":"Create a poem.","verb:cross":"Cross your `t'.","verb:cry":"They can cry today.","verb:cure":"The apricots cure in the sun.","verb:cut":"Cut a hole.","verb:damage":"These fine china cups damage easily.","verb:dance":"They can dance today.","verb:deal":"Deal a blow to someone.","verb:decide":"They can decide today.","verb:declare":"Do you have anything to declare?","verb:decline":"In many languages, speakers decline nouns, pronouns, and adjectives.","verb:decorate":"Decorate the room for the party.","verb:decrease":"They can decrease today.","verb:define":"The camera could define the smallest object.","verb:delay":"They can delay it.","verb:deliver":"Deliver a blow.","verb:demand":"I demand an explanation.","verb:deny":"They can deny it.","verb:depend":"Depend on your family in times of crisis.","verb:describe":"They can describe today.","verb:deserve":"They can deserve it.","verb:design":"Design a better mousetrap.","verb:destroy":"They can destroy it.","verb:determine":"They can determine it.","verb:develop":"Develop the rook.","verb:die":"Die out leather for belts.","verb:differ":"I beg to differ!","verb:disappear":"They can disappear today.","verb:discover":"They can discover it.","verb:discuss":"They can discuss today.","verb:dislike":"I really dislike this salesman.","verb:divide":"Can you divide 49 by seven?","verb:do":"Will $100 do?","verb:doubt":"I doubt these reports.","verb:drag":"Don't drag me into this business.","verb:draw":"Draw a line.","verb:dream":"She claims to never dream.","verb:dress":"Dress a turkey.","verb:drink":"Let's drink to the New Year.","verb:drive":"Drive a ball.","verb:drop":"Drop a hint.","verb:earn":"They can earn it.","verb:eat":"What do whales eat?","verb:educate":"We must educate our youngsters better.","verb:elect":"They can elect it.","verb:employ":"They can employ it.","verb:encourage":"They can encourage it.","verb:end":"They can end today.","verb:enjoy":"They can enjoy today.","verb:ensure":"They can ensure it.","verb:enter":"Enter a race.","verb:escape":"They can escape today.","verb:establish":"Establish a new department.","verb:estimate":"I estimate this chicken to weigh three pounds.","verb:evaluate":"How do you evaluate this grant proposal?","verb:examine":"They can examine today.","verb:exist":"He could barely exist on such a low wage.","verb:expand":"Expand the house by adding another wing.","verb:expect":"They can expect today.","verb:experience":"They can experience it.","verb:explain":"They can explain it.","verb:explore":"Explore unknown territory in biology.","verb:express":"Can you express this distance in kilometers?","verb:extend":"Extend a loan.","verb:face":"Face a playing card.","verb:fail":"Did I fail the test?","verb:fall":"Fall in love.","verb:feed":"Feed the guests the nuts.","verb:feel":"The sheets feel soft.","verb:fight":"Don't fight it!","verb:fill":"Fill a cavity.","verb:find":"Find someone guilty.","verb:finish":"They can finish today.","verb:fit":"Fit a dress.","verb:fix":"Fix a race.","verb:fly":"Fly a kite.","verb:focus":"Focus the light on this image.","verb:follow":"Follow the road.","verb:force":"Don't force it!","verb:forget":"They can forget today.","verb:forgive":"I forgive you your debt.","verb:form":"Social groups form everywhere.","verb:gain":"Gain an understanding of international finance.","verb:gather":"Gather some stones.","verb:get":"Get an idea.","verb:give":"Give a gulp.","verb:go":"Ready, set, go!","verb:grab":"Grab the elevator door!","verb:graduate":"Graduate a cylinder.","verb:grow":"We grow wheat here.","verb:guess":"They can guess today.","verb:guide":"They had the lights to guide on.","verb:handle":"Don't handle the merchandise.","verb:happen":"I happen to have just what you need!","verb:hate":"I hate Mexican food.","verb:have":"Have a lover.","verb:hear":"They can hear today.","verb:heat":"Heat the house.","verb:help":"These pills will help the patient.","verb:hide":"Hide the money.","verb:hit":"Hit a ball.","verb:hold":"Hold in place.","verb:hope":"They can hope today.","verb:hurt":"This exercise will hurt your back.","verb:identify":"They can identify today.","verb:ignore":"They can ignore it.","verb:imagine":"They can imagine it.","verb:improve":"They can improve today.","verb:include":"I include you in the list of culprits.","verb:increase":"They can increase today.","verb:indicate":"These symptoms indicate a serious illness.","verb:influence":"They can influence today.","verb:inform":"The principles that inform modern teaching.","verb:introduce":"Introduce a rule.","verb:invent":"They can invent it.","verb:invest":"They can invest it.","verb:invite":"Can I invite you for dinner on Sunday night?","verb:involve":"Don't involve me in your family affairs!","verb:join":"The two roads join here.","verb:judge":"I cannot judge some works of modern art.","verb:jump":"Jump to a conclusion.","verb:keep":"Keep a diary.","verb:kick":"Kick a habit.","verb:kill":"Kill a motion.","verb:kiss":"They can kiss today.","verb:knock":"Knock on the door.","verb:know":"I know Latin.","verb:lack":"They can lack it.","verb:land":"This may land you in jail.","verb:last":"They can last today.","verb:laugh":"They can laugh today.","verb:lay":"Lay a fire.","verb:lead":"We lead him to our chief.","verb:learn":"They can learn today.","verb:leave":"Leave the room.","verb:lend":"I will lend you my car.","verb:let":"Let it be.","verb:lie":"Don't lie to your parents.","verb:lift":"Lift a ban.","verb:like":"I like jogging.","verb:limit":"Limit the time you can spend with your friends.","verb:link":"They can link today.","verb:listen":"Listen to your father.","verb:live":"We had to live frugally after the war.","verb:load":"Load a car.","verb:locate":"Locate the boundaries of the property.","verb:lock":"Lock the bike to the fence.","verb:look":"How does she look?","verb:lose":"They can lose today.","verb:love":"I love cooking.","verb:maintain":"Maintain a record.","verb:make":"Make a stir.","verb:manage":"The young violinist didn't manage her bow very well.","verb:mark":"Mark my words.","verb:matter":"It does not matter much.","verb:mean":"I mean no harm.","verb:measure":"Measure the length of the wall.","verb:meet":"Meet a need.","verb:mention":"They can mention it.","verb:mind":"I don't mind your behavior.","verb:miss":"How could I miss that typo?","verb:mix":"Mix water into the drink.","verb:move":"We must move quickly.","verb:need":"They can need it.","verb:notice":"They can notice it.","verb:obtain":"How did you obtain the visa?","verb:occur":"Precious stones occur in a large area in Brazil.","verb:offer":"Offer prayers to the gods.","verb:open":"Open the map.","verb:operate":"Do not operate machinery after imbibing alcohol.","verb:order":"Order these files.","verb:organize":"Organize a strike.","verb:overcome":"You must overcome all difficulties.","verb:own":"They can own it.","verb:pack":"Pack a jury.","verb:participate":"They can participate today.","verb:pass":"Pass a kidney stone.","verb:pay":"Pay a call.","verb:perform":"Who will perform the wedding?","verb:permit":"This will permit the rain to run off.","verb:pick":"Pick up the tab.","verb:place":"Place a bet.","verb:plan":"Plan an attack.","verb:play":"Play a joke.","verb:point":"Point a gun.","verb:prefer":"We prefer sleeping outside.","verb:prepare":"Prepare for war.","verb:present":"They can present today.","verb:prevent":"We must prevent the cancer from spreading.","verb:print":"Print the negative.","verb:produce":"Produce a movie.","verb:promise":"I promise you my best effort.","verb:protect":"They can protect it.","verb:prove":"Prove a will.","verb:provide":"They can provide today.","verb:publish":"Publish a magazine or newspaper.","verb:pull":"Pull a sled.","verb:punish":"They can punish it.","verb:purchase":"They can purchase today.","verb:push":"`Now push hard,' said the doctor to the woman.","verb:put":"Put your things here.","verb:qualify":"Qualify these remarks.","verb:question":"We must question your judgment in this matter.","verb:quit":"Quit teasing your little brother.","verb:raise":"Raise a barn.","verb:reach":"Can he reach?","verb:react":"The hydrogen and the oxygen react.","verb:read":"Read the advertisement.","verb:realize":"Does she realize how important this decision is?","verb:receive":"Receive a gift.","verb:recognize":"Recognize an academic degree.","verb:recommend":"They can recommend it.","verb:record":"They can record it.","verb:recover":"Recover a chair.","verb:reduce":"Reduce an image.","verb:refer":"Refer to your notes.","verb:reflect":"They can reflect today.","verb:refuse":"They can refuse it.","verb:regard":"They can regard today.","verb:relate":"I cannot relate these events at all.","verb:relax":"Don't relax your efforts now.","verb:release":"Release a hormone into the blood stream.","verb:remain":"They can remain today.","verb:remember":"Remember the Alamo.","verb:remind":"Remind me to call Mother.","verb:remove":"Remove a threat.","verb:repeat":"They can repeat today.","verb:replace":"The insurance will replace the lost income.","verb:reply":"They can reply today.","verb:report":"I report to work every day at 9 o'clock.","verb:represent":"I represent the silent majority.","verb:require":"We require our secretary to be on time.","verb:research":"They can research it.","verb:rest":"Rest the dogs for a moment.","verb:result":"Result in tragedy.","verb:return":"Return her love.","verb:reveal":"God rarely reveal his plans for Mankind.","verb:review":"Let's review your situation.","verb:ride":"Let it ride.","verb:rise":"Rise to a challenge.","verb:risk":"Why risk your life?","verb:roll":"Roll a cigarette.","verb:run":"Run a risk.","verb:save":"This will save money.","verb:say":"What does the law say?","verb:see":"Now I see!","verb:seek":"Seek a position.","verb:seem":"I seem to be misunderstood by everyone.","verb:sell":"The brothers sell shoes.","verb:send":"Send me your latest results.","verb:serve":"Serve the country.","verb:set":"Set a record.","verb:settle":"They can settle today.","verb:shake":"Shake one's head.","verb:share":"Our children share a love of music.","verb:shoot":"Shoot a goal.","verb:show":"The dirty side will show.","verb:shut":"Shut the window.","verb:sing":"Sing Christmas carols.","verb:sit":"When does the court of law sit?","verb:sleep":"They can sleep today.","verb:smile":"They can smile today.","verb:solve":"Solve for x.","verb:sort":"They can sort it.","verb:sound":"Sound the bell.","verb:speak":"The prisoner won't speak.","verb:spend":"I spend my pocket money in two days.","verb:spread":"Spread your arms.","verb:stand":"I stand corrected.","verb:start":"Who will start?","verb:state":"State your name.","verb:stay":"Stay with me, please.","verb:steal":"They can steal today.","verb:stick":"Stick your thumb in the crack.","verb:stop":"Stop a car.","verb:store":"Store grain for the winter.","verb:study":"He is meditating in his study.","verb:succeed":"Will Charles succeed to the throne?","verb:suffer":"Suffer a terrible fate.","verb:suggest":"They can suggest today.","verb:supply":"Supply blankets for the beds.","verb:support":"He does not support his natural children.","verb:suppose":"They can suppose it.","verb:survive":"These superstitions survive in the backwaters of America.","verb:switch":"Switch on the light.","verb:take":"Take a test.","verb:talk":"We often talk business.","verb:target":"They can target it.","verb:teach":"They can teach today.","verb:tell":"Tell what happened.","verb:tend":"Tend a store.","verb:test":"Test this recipe.","verb:thank":"They can thank it.","verb:think":"Think good thoughts.","verb:throw":"Throw a six.","verb:touch":"Don't touch my CDs!","verb:train":"Train the vine.","verb:transfer":"Transfer the data.","verb:travel":"Travel the oceans.","verb:treat":"Treat an oil spill.","verb:trust":"We can trust in God.","verb:try":"Try the yak butter.","verb:turn":"Turn a key.","verb:understand":"I understand what she means.","verb:update":"They can update it.","verb:use":"Use your head!","verb:value":"Value the jewelry and art work in the estate.","verb:vary":"Vary the menu.","verb:visit":"Did you ever visit Paris?","verb:vote":"Vote one's conscience.","verb:wait":"They can wait today.","verb:wake":"Wake old feelings of hatred.","verb:walk":"Walk with God.","verb:want":"I want my own room.","verb:warn":"I warn you against false assumptions.","verb:wash":"Wash the towels, please!","verb:watch":"Watch a basketball game.","verb:wear":"What should I wear today?","verb:weigh":"Weigh heavily on the mind.","verb:win":"Win the game.","verb:wish":"Wish you a nice evening.","verb:withdraw":"They can withdraw today.","verb:wonder":"They can wonder today.","verb:work":"Work the soil.","verb:worry":"I worry about my job.","verb:write":"Write her soon, please!","verb:yell":"They can yell today.","verb:abandon":"Abandon your life to God.","verb:absorb":"Absorb the costs for something.","verb:abuse":"Don't abuse the system.","verb:accelerate":"They can accelerate today.","verb:accommodate":"This hotel can accommodate 250 guests.","verb:accompany":"They can accompany it.","verb:accomplish":"They can accomplish it.","verb:accumulate":"They can accumulate today.","verb:adapt":"They can adapt today.","verb:adjust":"Adjust the clock, please.","verb:administer":"Administer an exam.","verb:advocate":"They can advocate it.","verb:allocate":"They can allocate it.","verb:alter":"They can alter today.","verb:analyze":"Analyze a specimen.","verb:anticipate":"They can anticipate it.","verb:appreciate":"The Germans want to appreciate the Deutsche Mark.","verb:approve":"I approve of his educational policies.","verb:assign":"They can assign it.","verb:associate":"They can associate today.","verb:attain":"They can attain it.","verb:authorize":"They can authorize it.","verb:automate":"Automate the movement of the robot.","verb:broaden":"Broaden the road.","verb:capture":"Capture an idea.","verb:cease":"They can cease today.","verb:clarify":"Clarify the butter.","verb:classify":"Classify these documents.","verb:collaborate":"They can collaborate today.","verb:collapse":"Collapse the music stand.","verb:commence":"They can commence today.","verb:compensate":"They can compensate it.","verb:compile":"Compile a list.","verb:complement":"They can complement it.","verb:comprise":"These few men comprise his entire army.","verb:conceive":"She cannot conceive.","verb:conclude":"They can conclude today.","verb:confront":"You must confront your opponent.","verb:conserve":"Conserve your energy for the ascent to the summit.","verb:constitute":"These constitute my entire belonging.","verb:constrain":"They can constrain it.","verb:consult":"Consult your local broker.","verb:consume":"They can consume it.","verb:contemplate":"Contemplate one's navel.","verb:contradict":"They can contradict it.","verb:cooperate":"They can cooperate today.","verb:coordinate":"Coordinate our efforts.","verb:correspond":"They can correspond today.","verb:cultivate":"Cultivate the land.","verb:dedicate":"They can dedicate it.","verb:demonstrate":"They can demonstrate today.","verb:derive":"Derive pleasure from one's garden.","verb:detect":"They can detect it.","verb:diminish":"They can diminish today.","verb:discriminate":"They can discriminate today.","verb:dominate":"They can dominate today.","verb:eliminate":"Eliminate my debts.","verb:emphasize":"They can emphasize it.","verb:encounter":"They can encounter it.","verb:enhance":"This will enhance your enjoyment.","verb:equivalent":"They can equivalent it.","verb:evolve":"They can evolve today.","verb:exceed":"They can exceed it.","verb:exclude":"They can exclude it.","verb:exhibit":"They can exhibit it.","verb:exploit":"He exploit the new taxation system.","verb:facilitate":"You could facilitate the process by sharing your knowledge.","verb:formulate":"They can formulate it.","verb:foster":"Foster our children's well-being and education.","verb:generate":"The hydroelectric plant needs to generate more electricity.","verb:highlight":"Highlight the area above your eyebrows.","verb:illustrate":"Illustrate a book with drawings.","verb:imply":"They can imply it.","verb:impose":"Social relations impose courtesy.","verb:incorporate":"They can incorporate today.","verb:induce":"Induce a crisis.","verb:initiate":"They can initiate it.","verb:inspect":"Please inspect your father's will carefully.","verb:integrate":"They can integrate today.","verb:interact":"He should interact more with his colleagues.","verb:interpret":"How do you interpret his behavior?","verb:intervene":"They can intervene today.","verb:isolate":"The chemist managed to isolate the compound.","verb:justify":"Justify the margins.","verb:manipulate":"They can manipulate today.","verb:minimize":"Let's minimize the risk.","verb:modify":"Please modify this letter to make it more polite.","verb:motivate":"They can motivate it.","verb:negotiate":"They can negotiate it.","verb:perceive":"I could perceive the ship coming over the horizon.","verb:persist":"They can persist today.","verb:persuade":"You can't persuade me to buy this ugly vase!","verb:predict":"They can predict it.","verb:preserve":"We preserve these archeological findings.","verb:promote":"They can promote today.","verb:propose":"They can propose today.","verb:pursue":"Pursue a hobby.","verb:reinforce":"Let's reinforce good behavior.","verb:reject":"I reject the idea of starting a war.","verb:restore":"Restore law and order.","verb:retain":"I cannot retain so much information.","verb:reverse":"They can reverse today.","verb:revise":"Revise a thesis.","verb:simulate":"They can simulate it.","verb:specify":"Specify the parameters.","verb:strengthen":"This exercise will strengthen your upper body.","verb:substitute":"Substitute regular milk with fat-free milk.","verb:sustain":"The money will sustain our good cause.","verb:transform":"Transform energy to light.","verb:transmit":"Transmit a message.","verb:undergo":"Undergo a strange sensation.","verb:utilize":"How do you utilize this tool?","verb:violate":"Violate my privacy.","verb:yield":"They can yield today.","verb:acquire":"Children acquire language at an amazing rate.","verb:activate":"Activate a metal.","verb:address":"They can address it.","verb:appeal":"Appeal to somebody for help.","verb:assemble":"Assemble your colleagues.","verb:assess":"They can assess it.","verb:attribute":"They can attribute it.","verb:boost":"The tax cut will boost the economy.","verb:cite":"They can cite today.","verb:confine":"They can confine it.","verb:consent":"They can consent it.","verb:consolidate":"Consolidate one's gains.","verb:construct":"Construct a proof.","verb:convey":"They can convey it.","verb:cope":"They can cope today.","verb:criticize":"Those who criticize others often are not perfect, either.","verb:differentiate":"They can differentiate today.","verb:dispose":"They can dispose it.","verb:distort":"They can distort today.","verb:draft":"Draft a speech.","verb:embody":"They can embody it.","verb:emerge":"He felt new emotions emerge.","verb:enforce":"They can enforce it.","verb:engage":"Engage aid, help, services, or support.","verb:enrich":"They can enrich it.","verb:expose":"Expose your students to art.","verb:extract":"Extract a bad tooth.","verb:forecast":"They can forecast it.","verb:fulfill":"They can fulfill it.","verb:govern":"Most transitive verbs govern the accusative case in German.","verb:grasp":"They can grasp it.","verb:guarantee":"Preparation will guarantee success!","verb:implement":"Implement a procedure.","verb:import":"They can import it.","verb:inhibit":"Inhibit the action of the enzyme.","verb:innovate":"They can innovate it.","verb:instruct":"They can instruct it.","verb:intensify":"They can intensify today.","verb:interrupt":"Don't interrupt me when I'm reading.","verb:investigate":"Let's investigate the syntax of Chinese.","verb:launch":"Launch a ship.","verb:legislate":"We cannot legislate how people spend their free time.","verb:mediate":"Mediate between the old and the new.","verb:monitor":"The police monitor the suspect's moves.","verb:neutralize":"They can neutralize it.","verb:occupy":"The young prince will soon occupy the throne.","verb:pose":"They can pose today.","verb:proceed":"They can proceed today.","verb:prohibit":"They can prohibit it.","verb:regulate":"Regulate the temperature.","verb:restrict":"Restrict the use of this parking lot.","verb:retrieve":"Train the dog to retrieve.","verb:resolve":"They can resolve it.","verb:resume":"Resume a title.","verb:stimulate":"Stimulate my appetite.","verb:submit":"I submit to you that the accused is guilty.","verb:supplement":"Supplement your diet.","verb:tackle":"I'll tackle this difficult task.","verb:trigger":"Trigger a gun.","verb:undermine":"They can undermine it.","verb:undertake":"They can undertake today.","verb:verify":"Verify a claim.","verb:withstand":"They can withstand it.","verb:characterize":"They can characterize it.","verb:comprehend":"Do you comprehend the meaning of this letter?","verb:deduce":"They can deduce it.","verb:denote":"They can denote it.","verb:depress":"Depress the space key.","verb:deviate":"They can deviate today.","verb:distinguish":"We distinguish several kinds of maple.","verb:distribute":"The publisher wants to distribute the book in Asia.","verb:enable":"They can enable it.","verb:entail":"What does this move entail?","verb:equip":"They can equip it.","verb:infer":"They can infer it.","verb:insert":"Insert your ticket here.","verb:neglect":"They can neglect it.","verb:offset":"Offset a wall.","verb:optimize":"Optimize your resources.","verb:orient":"Orient the house towards the West.","verb:overlap":"Our vacations overlap.","verb:precede":"Stone tools precede bronze tools.","verb:prescribe":"They can prescribe it.","verb:presume":"They can presume today.","verb:prompt":"They can prompt it.","verb:quantify":"Can you quantify your results?","verb:refine":"Refine pig iron.","verb:render":"Render a verdict.","verb:replicate":"Replicate the cell.","verb:rotate":"Rotate the handle.","verb:secure":"They can secure it.","verb:shift":"Shift the emphasis.","verb:specialize":"Specialize one's research.","verb:stabilize":"They can stabilize today.","verb:suppress":"Suppress a yawn.","verb:suspend":"Suspend the particles.","verb:terminate":"The bronchioles terminate in a capillary bed.","verb:unify":"They can unify today.","verb:validate":"Validate a ticket.","verb:visualize":"Mathematicians often visualize.","verb:abolish":"They can abolish it.","verb:appoint":"They can appoint it.","verb:conceal":"They can conceal it.","verb:depict":"They can depict it.","verb:empower":"They can empower it.","verb:maximize":"Maximize your profits!","verb:mobilize":"They can mobilize today.","verb:moderate":"Moderate your speed.","verb:notify":"They can notify it.","verb:prevail":"They can prevail today.","verb:rehabilitate":"They can rehabilitate it.","verb:restrain":"They can restrain it.","verb:alert":"They can alert it.","verb:align":"Align the wheels of my car.","verb:amend":"Amend the document.","verb:audit":"Audit accounts and tax returns.","verb:benchmark":"They can benchmark it.","verb:categorize":"Children learn early on to categorize.","verb:circulate":"Circulate a rumor.","verb:coincide":"They can coincide today.","verb:compel":"We compel all students to fill out this form.","verb:compromise":"They can compromise today.","verb:configure":"Configure my new computer.","verb:conform":"They can conform today.","verb:contaminate":"They can contaminate it.","verb:customize":"Customize a car.","verb:designate":"They can designate it.","verb:diagnose":"They can diagnose it.","verb:discard":"They can discard it.","verb:disclose":"The curtain rose to disclose a stunning set.","verb:disrupt":"They can disrupt today.","verb:diversify":"Diversify a course of study.","verb:embrace":"They can embrace today.","verb:endure":"They can endure today.","verb:enroll":"They can enroll today.","verb:fluctuate":"They can fluctuate today.","verb:hinder":"They can hinder it.","verb:legitimize":"They can legitimize it.","verb:provoke":"They can provoke it.","verb:sacrifice":"They can sacrifice it.","verb:summarize":"I will now summarize.","verb:upgrade":"They can upgrade today.","verb:urge":"They can urge it.","verb:abstract":"Let's abstract away from this particular example.","verb:acknowledge":"Acknowledge the deed.","verb:aggregate":"They can aggregate it.","verb:amplify":"They can amplify today.","verb:articulate":"They can articulate today.","verb:conceptualize":"They can conceptualize today.","verb:converge":"The lines converge at this point.","verb:correlate":"Do these facts correlate?","verb:devise":"Devise a plan to take over the director's office.","verb:disseminate":"They can disseminate it.","verb:document":"Can you document your claims?","verb:encompass":"They can encompass it.","verb:envision":"I cannot envision him as President.","verb:hypothesize":"They can hypothesize it.","verb:leverage":"We need to leverage this company.","verb:navigate":"Is anyone volunteering to navigate during the trip?","verb:outline":"Outline his ideas.","verb:prioritize":"They can prioritize it.","verb:streamline":"They can streamline it.","verb:substantiate":"They can substantiate it.","verb:synthesize":"His operas synthesize music and drama in perfect harmony.","verb:translate":"Poetry often does not translate.","verb:authenticate":"They can authenticate it.","verb:concur":"They can concur today.","noun:time":"It is time to go.","noun:person":"A weapon was hidden on his person.","noun:back":"His back was nicely tanned.","noun:way":"If I had my way.","noun:need":"The need is important.","noun:right":"He feels he is in the right.","noun:work":"Picasso's work can be divided into periods.","noun:year":"A Martian year takes 687 of our days.","noun:day":"Every dog has his day.","noun:life":"Pottery was his life.","noun:world":"His world was shattered.","noun:love":"It was 40 love.","noun:man":"Jeeves was Bertie Wooster's man.","noun:home":"His home is New Jersey.","noun:look":"He went out to have a look.","noun:use":"Long use had hardened him to it.","noun:part":"The government must do its part.","noun:state":"His state is in the deep south.","noun:help":"The help started today.","noun:thing":"It is a remarkable thing.","noun:game":"The game is 6 all.","noun:house":"The house was full.","noun:place":"Took his place.","noun:school":"The school was built in 1932.","noun:end":"The end was exciting.","noun:show":"That ceremony is just for show.","noun:team":"The team works together.","noun:family":"His family has lived in Massachusetts since the Mayflower.","noun:money":"All his money is in real estate.","noun:number":"He has an unlisted number.","noun:city":"Ancient Troy was a great city.","noun:lot":"Has a happy lot.","noun:name":"His name really is George Washington.","noun:night":"I had a restless night.","noun:play":"It is still my play.","noun:company":"The house was filled with company when I arrived.","noun:set":"The smart set goes there.","noun:thought":"The thought is important.","noun:government":"He had considerable experience of government.","noun:group":"The group is important.","noun:public":"The public works together.","noun:top":"Only the top side of the box was painted.","noun:woman":"He was faithful to his woman.","noun:business":"Business is good today.","noun:care":"Care had aged him.","noun:start":"It was off to a good start.","noun:system":"The body has a system of organs for digestion.","noun:week":"The week passed quickly.","noun:case":"That was not the case.","noun:change":"He had a pocketful of change.","noun:point":"Life has lost its point.","noun:support":"The policy found little public support.","noun:music":"You have to face the music.","noun:power":"The power is important.","noun:stop":"His next stop is Atlanta.","noun:water":"The child had to make water.","noun:call":"After two raises there was a call.","noun:head":"Tickets are $5 per head.","noun:job":"She did an outstanding job as Ophelia.","noun:side":"He was on the heavy side.","noun:line":"They were arrayed in line of battle.","noun:order":"I gave the waiter my order.","noun:party":"The party works together.","noun:run":"Nicklaus had a run of birdies.","noun:service":"He did them a service.","noun:country":"The country works together.","noun:season":"It was the Christmas season.","noun:shit":"He took a shit.","noun:child":"The child is here.","noun:general":"The general is here.","noun:area":"It was a mountainous area.","noun:law":"The law came looking for him.","noun:war":"Thousands of people were killed in the war.","noun:whole":"How big is that part compared to the whole?","noun:car":"The car was on the top floor.","noun:face":"The face of the city is changing.","noun:kind":"The kind is important.","noun:president":"A President is elected every four years.","noun:story":"The story was on the 11 o'clock news.","noun:course":"The course had only nine holes.","noun:health":"The health is important.","noun:hope":"He was their best hope for a victory.","noun:news":"It was news to me.","noun:book":"We discussed the book.","noun:friend":"He was my best friend at the university.","noun:information":"We discussed the information.","noun:post":"She was opening her post.","noun:thanks":"Thanks to hard work it was a great success.","noun:video":"She is a star of screen and video.","noun:talk":"There has been talk about you lately.","noun:court":"The king will visit the duke's court.","noun:fact":"Your fears have no basis in fact.","noun:guy":"The guy is here.","noun:hand":"His hand was illegible.","noun:level":"What level is the office on?","noun:mind":"It came to mind.","noun:body":"Wool has more body than rayon.","noun:control":"He had lost control of his sphincters.","noun:death":"Her death came as a terrible shock.","noun:food":"The food is important.","noun:hour":"The hour is getting late.","noun:office":"We used the office.","noun:pay":"The pay has value.","noun:problem":"The problem is important.","noun:history":"History takes the long view.","noun:research":"Their pottery deserves more research than it has received.","noun:room":"The whole room was cheering.","noun:university":"The university works together.","noun:girl":"The baby was a girl.","noun:matter":"Is anything the matter?","noun:air":"It was exposed to the air.","noun:bit":"He had a bit of good luck.","noun:playing":"The playing started today.","noun:class":"She has a lot of class.","noun:idea":"It was not a good idea.","noun:past":"The past passed quickly.","noun:cause":"He had no cause to complain.","noun:member":"Canada is a member of the United Nations.","noun:month":"He was given a month to pay the bill.","noun:move":"His first move was to hire a lawyer.","noun:question":"He was ready to pop the question.","noun:series":"They were investigating a series of bank robberies.","noun:community":"The community works together.","noun:watch":"We used the watch.","noun:future":"The future passed quickly.","noun:light":"Do you have a light?","noun:morning":"The morning passed quickly.","noun:police":"The police works together.","noun:age":"She was now of school age.","noun:deal":"It was a package deal.","noun:reason":"They had good reason to rejoice.","noun:report":"He was a person of bad report.","noun:turn":"It is my turn.","noun:check":"They made a check of their equipment.","noun:development":"The development of his ideas took many years.","noun:form":"Sculpture is a form of art.","noun:heart":"He had a change of heart.","noun:minute":"It only takes a minute.","noun:act":"He did his act three times every evening.","noun:fire":"He went through fire and damnation.","noun:fun":"He was fun to be with.","noun:phone":"We used the phone.","noun:player":"The player is here.","noun:art":"I was never any good at art.","noun:building":"His hobby was the building of boats.","noun:market":"Without competition there would be no market.","noun:plan":"The plan is important.","noun:education":"Education is a preparation for life.","noun:front":"He was well behaved in front of company.","noun:kid":"The kid is here.","noun:list":"We discussed the list.","noun:street":"Cooperation is a two-way street.","noun:college":"The college works together.","noun:current":"The current was measured in amperes.","noun:example":"There is an example on page 10.","noun:experience":"He had a religious experience.","noun:program":"Did you see his program last night?","noun:baby":"This project is his baby.","noun:chance":"Now is your chance.","noun:father":"His father was born in Atlanta.","noun:process":"It was a process of trial and error.","noun:study":"He is a quick study.","noun:word":"He gave his word.","noun:action":"He is out of action.","noun:self":"The self is important.","noun:student":"The student is here.","noun:board":"The board has seven members.","noun:cost":"The cost in human life was enormous.","noun:field":"They are outstanding in their field.","noun:moment":"She is studying at the moment.","noun:mother":"Necessity is the mother of invention.","noun:road":"We used the road.","noun:thinking":"Thinking always made him frown.","noun:town":"The town is responsible for snow removal.","noun:energy":"Energy can take a wide variety of forms.","noun:fight":"The team was full of fight.","noun:force":"May the force be with you.","noun:issue":"The canyon had only one issue.","noun:price":"Her price is far above rubies.","noun:rest":"The gun was steadied on a special rest.","noun:result":"We observed the result.","noun:space":"The space is important.","noun:summer":"The summer passed quickly.","noun:term":"The major term of a syllogism must occur twice.","noun:wife":"The wife is here.","noun:date":"They are up to date.","noun:land":"The land had never been plowed.","noun:project":"The project started today.","noun:shot":"He is a crack shot.","noun:site":"The Israeli web site was damaged by hostile hackers.","noun:account":"Don't do it on my account.","noun:eye":"He has an artist's eye.","noun:parent":"The parent is here.","noun:period":"The period passed quickly.","noun:position":"The cars were in position.","noun:record":"The lawyer has a good record.","noun:club":"The club works together.","noun:film":"The film was shot on location.","noun:lead":"The lead was in the dummy.","noun:security":"The head of security was a former policeman.","noun:share":"They all did their share of the work.","noun:center":"They had to reinforce the center.","noun:couple":"The couple works together.","noun:industry":"Each industry has its own trade publications.","noun:return":"The average return was about 5%.","noun:sense":"Common sense is not so common.","noun:star":"The star is important.","noun:test":"The test is important.","noun:view":"They were soon out of view.","noun:event":"In that event, the first possibility is excluded.","noun:middle":"We visited the middle.","noun:training":"The training started today.","noun:answer":"Their answer was to sue me.","noun:boy":"The baby was a boy.","noun:design":"It was an excellent design for living.","noun:gold":"She has a heart of gold.","noun:king":"The lion is the king of beasts.","noun:policy":"It was a policy of retribution.","noun:society":"The society works together.","noun:average":"He is about average in height.","noun:bank":"The coin bank was empty.","noun:church":"The church was empty.","noun:movie":"They went to a movie every Saturday night.","noun:park":"They went for a walk in the park.","noun:performance":"We discussed the performance.","noun:press":"He gave the button a press.","noun:role":"What is your role on the team?","noun:worth":"We recorded the worth.","noun:bill":"We discussed the bill.","noun:director":"The director is here.","noun:ground":"The ground is important.","noun:meeting":"There was no meeting of minds.","noun:relationship":"The relationship is important.","noun:sound":"The sound is important.","noun:source":"Pittsburgh is the source of the Ohio River.","noun:value":"The value assigned was 16 milliseconds.","noun:evidence":"His trembling was evidence of his fear.","noun:official":"The official is here.","noun:production":"Shakespeare's production of poetry was enormous.","noun:rate":"The rate of change was faster than expected.","noun:round":"There was a round of applause.","noun:stand":"The army made a final stand at the Rhone.","noun:stuff":"The trunk was full of stuff.","noun:tax":"The tax has value.","noun:amount":"The amount he had in cash was insufficient.","noun:drive":"The drive started today.","noun:fall":"Women have been blamed ever since the Fall.","noun:feeling":"He had a queasy feeling.","noun:green":"The green is important.","noun:league":"The league works together.","noun:management":"He was given overall management of the program.","noun:match":"That tie makes a good match with your jacket.","noun:model":"His car was an old model.","noun:picture":"The political picture is favorable.","noun:size":"Size gives body to a fabric.","noun:step":"The step started today.","noun:trust":"The doctor-patient relationship is based on trust.","noun:key":"The key to development is economic integration.","noun:page":"We discussed the page.","noun:range":"The range is important.","noun:review":"The review is important.","noun:science":"The science is important.","noun:trade":"I had no further trade with him.","noun:attention":"She was the center of attention.","noun:brother":"The brother is here.","noun:character":"He is a man of character.","noun:chief":"The chief is here.","noun:cup":"The handle of the cup was missing.","noun:football":"The football started today.","noun:property":"That hat is my property.","noun:quality":"The quality of students has risen.","noun:vote":"They are expecting a large vote.","noun:blood":"The doctor checked the blood.","noun:dog":"We saw the dog.","noun:language":"The language introduced is standard throughout the text.","noun:oil":"The oil was clean.","noun:stage":"At what stage are the social sciences?","noun:title":"We discussed the title.","noun:article":"We discussed the article.","noun:attack":"His plan of attack was misguided.","noun:release":"There was a sudden release of oxygen.","noun:situation":"No human situation is simple.","noun:technology":"The technology started today.","noun:choice":"My only choice is to refuse.","noun:code":"We discussed the code.","noun:council":"The council works together.","noun:cover":"The fox was flushed from its cover.","noun:door":"Education is the door to success.","noun:election":"The results of the election will be announced tonight.","noun:hair":"There is a hair in my soup.","noun:increase":"He gave me an increase in salary.","noun:race":"The race is to the swift.","noun:sign":"It was a sign from God.","noun:staff":"The hospital has an excellent nursing staff.","noun:union":"There is strength in union.","noun:bed":"They found a bed of sandstone.","noun:career":"The general had had a distinguished career.","noun:daughter":"The daughter is here.","noun:figure":"A figure of $17 was suggested.","noun:hospital":"We used the hospital.","noun:loss":"The car was a total loss.","noun:paper":"The paper was clean.","noun:version":"His version of the fight was different from mine.","noun:army":"The army works together.","noun:earth":"It was hell on earth.","noun:goal":"The goal is important.","noun:practice":"Practice makes perfect.","noun:rule":"Violence is the rule not the exception.","noun:sea":"The sea is important.","noun:success":"He is enjoying great success.","noun:access":"The access is important.","noun:base":"It was built on a base of solid rock.","noun:mark":"His answer was just a punctuation mark.","noun:offer":"We discussed the offer.","noun:pas":"The pas started today.","noun:risk":"The risk is important.","noun:sleep":"They had to put their family pet to sleep.","noun:table":"It was a sturdy table.","noun:truth":"He was famous for the truth of his portraits.","noun:ball":"We used the ball.","noun:box":"The royal box was empty.","noun:card":"He had to show his card to get in.","noun:district":"We visited the district.","noun:mine":"We used the mine.","noun:minister":"The minister is here.","noun:note":"He made a note of the appointment.","noun:percent":"The percent is important.","noun:piece":"It was a nice piece of work.","noun:product":"The product of 2 and 3 is 6.","noun:visit":"The visit started today.","noun:wall":"His back was to the wall.","noun:culture":"The culture works together.","noun:fan":"We used the fan.","noun:growth":"The only growth was some salt grass.","noun:officer":"It was an accident, officer.","noun:pain":"That kid is a terrible pain.","noun:respect":"The respect is important.","noun:response":"We observed the response.","noun:river":"The river was navigable for 50 miles.","noun:rock":"That mountain is solid rock.","noun:standard":"We discussed the standard.","noun:album":"We discussed the album.","noun:century":"The century passed quickly.","noun:charge":"His charge was deliver a message.","noun:effect":"He just did it for effect.","noun:network":"The network works together.","noun:peace":"Peace came on November 11th.","noun:sale":"He has just made his first sale.","noun:store":"We used the store.","noun:track":"The track is important.","noun:weight":"The weight is important.","noun:addition":"He was a new addition to the staff.","noun:association":"Conditioning is a form of learning by association.","noun:beat":"He could feel the beat of her heart.","noun:capital":"The capital has value.","noun:committee":"The committee works together.","noun:conference":"The conference works together.","noun:difference":"The difference in her is amazing.","noun:double":"He could be Gingrich's double.","noun:island":"The island is important.","noun:population":"The population works together.","noun:potential":"The potential is important.","noun:pressure":"We observed the pressure.","noun:radio":"We discussed the radio.","noun:station":"We used the station.","noun:text":"Pictures made the text easier to understand.","noun:treatment":"His treatment of the race question is badly biased.","noun:beginning":"He was responsible for the beginning of negotiations.","noun:campaign":"The campaign is important.","noun:content":"The two groups were similar in content.","noun:credit":"He was given credit for his work.","noun:husband":"The husband is here.","noun:ice":"The ice was clean.","noun:individual":"The individual is important.","noun:message":"We discussed the message.","noun:mile":"We recorded the mile.","noun:region":"We visited the region.","noun:speed":"The speed passed quickly.","noun:contact":"The pilot made contact with the base.","noun:drop":"A drop of each sample was analyzed.","noun:foot":"One foot of the chair was on the carpet.","noun:link":"The link is important.","noun:tour":"They took an extended tour of Europe.","noun:welcome":"The welcome is important.","noun:condition":"The condition is important.","noun:nature":"It is his nature to help others.","noun:computer":"We used the computer.","noun:episode":"The episode is important.","noun:income":"The income has value.","noun:justice":"The justice is important.","noun:manager":"The manager is here.","noun:movement":"He had a bowel movement.","noun:photo":"We used the photo.","noun:safety":"The reciprocal of safety is risk.","noun:scene":"He made a scene.","noun:statement":"A Cadillac makes a statement about who you are.","noun:sun":"The shingles were weathered by the sun and wind.","noun:ability":"The ability is important.","noun:coach":"The coach is here.","noun:collection":"The collection works together.","noun:gun":"We used the gun.","noun:knowledge":"The knowledge is important.","noun:search":"The search started today.","noun:subject":"We discussed the subject.","noun:train":"We used the train.","noun:author":"The author is here.","noun:centre":"We visited the centre.","noun:claim":"His claim that he was innocent.","noun:dad":"The dad is here.","noun:fear":"She felt great fear.","noun:fit":"He had a fit.","noun:hotel":"We used the hotel.","noun:judge":"The judge is here.","noun:lady":"The lady is here.","noun:leader":"The leader is here.","noun:letter":"We discussed the letter.","noun:material":"He was university material.","noun:opportunity":"The holiday gave us the opportunity to visit Washington.","noun:secretary":"The secretary is here.","noun:sister":"The sister is here.","noun:unit":"The team is a unit.","noun:worker":"He is a good worker.","noun:bar":"There was no bar against leaving.","noun:battle":"The battle started today.","noun:brain":"The doctor checked the brain.","noun:contract":"We discussed the contract.","noun:degree":"It is all a matter of degree.","noun:feature":"The feature tonight is `Casablanca'.","noun:floor":"He is a floor trader.","noun:hurt":"The hurt is important.","noun:image":"A public image is as fragile as Humpty Dumpty.","noun:insurance":"The insurance has value.","noun:majority":"The majority is important.","noun:opening":"There was a small opening between the trees.","noun:opinion":"The opinion is important.","noun:sport":"He said it in sport.","noun:administration":"Things were quiet during the Eisenhower administration.","noun:approach":"The approach started today.","noun:cancer":"The cancer is important.","noun:dance":"We discussed the dance.","noun:direction":"He had no direction in his life.","noun:master":"The master is here.","noun:stock":"They will cut round stock to 1-inch diameter.","noun:weekend":"The weekend passed quickly.","noun:wonder":"She felt great wonder.","noun:band":"The band works together.","noun:beach":"The beach is important.","noun:cash":"There is a desperate shortage of hard cash.","noun:effort":"The book was her finest effort.","noun:impact":"The book had an important impact on my thinking.","noun:lack":"The lack is important.","noun:operation":"That rule is no longer in operation.","noun:organization":"His compulsive organization was not an endearing quality.","noun:secret":"The combination to the safe was a secret.","noun:spring":"The spring was broken.","noun:activity":"The activity started today.","noun:address":"We discussed the address.","noun:analysis":"The analysis started today.","noun:commission":"The motor was out of commission.","noun:competition":"Business competition can be fiendish at times.","noun:detail":"A detail was sent to remove the fallen trees.","noun:dream":"This dessert is a dream.","noun:finish":"The boat had a metallic finish.","noun:luck":"They say luck is a lady.","noun:marriage":"Their marriage was conducted in the chapel.","noun:patient":"The patient is here.","noun:resource":"The local library is a valuable resource.","noun:skin":"Your skin is the largest organ of your body.","noun:touch":"He has a master's touch.","noun:damage":"How much is the damage?","noun:disease":"The disease is important.","noun:doctor":"She is a doctor of philosophy in physics.","noun:doubt":"The doubt is important.","noun:drink":"Drink was his downfall.","noun:fish":"The shark is a large fish.","noun:machine":"He was endorsed by the Democratic machine.","noun:notice":"He gave notice two months before he moved.","noun:overall":"We used the overall.","noun:professor":"The professor is here.","noun:trip":"He took a trip to the shopping center.","noun:captain":"The captain is here.","noun:crime":"The crime started today.","noun:plant":"We used the plant.","noun:reality":"The reality is important.","noun:spot":"We visited the spot.","noun:winter":"The winter passed quickly.","noun:advice":"We discussed the advice.","noun:agreement":"The two parties were in agreement.","noun:award":"The award started today.","noun:block":"We used the block.","noun:challenge":"The challenge is important.","noun:comment":"We discussed the comment.","noun:equipment":"We used the equipment.","noun:killing":"The killing is important.","noun:nation":"The news was announced to the nation.","noun:primary":"The primary started today.","noun:purpose":"He is a man of purpose.","noun:shop":"We used the shop.","noun:teacher":"Experience is a demanding teacher.","noun:theory":"The architect has a theory that more is less.","noun:agency":"She has free agency.","noun:camera":"We used the camera.","noun:cell":"We used the cell.","noun:coast":"The coast is clear.","noun:drug":"We used the drug.","noun:economy":"The Scots are famous for their economy.","noun:environment":"The environment is important.","noun:executive":"The executive is here.","noun:hall":"The elevators were at the end of the hall.","noun:meaning":"What is the meaning of this proverb?","noun:politics":"Office politics is often counterproductive.","noun:pop":"The pop is here.","noun:status":"He had the status of a minor.","noun:trial":"Candidates must compete in a trial of skill.","noun:weather":"They were hoping for good weather.","noun:application":"It is a job requiring serious application.","noun:coffee":"We enjoyed the coffee.","noun:complex":"The complex is important.","noun:division":"Princeton is in the NCAA Division 1-AA.","noun:evening":"It was the evening of the Roman Empire.","noun:flight":"I took the noon flight to Chicago.","noun:freedom":"The freedom is important.","noun:interview":"We discussed the interview.","noun:library":"They had brandy in the library.","noun:location":"The location is important.","noun:murder":"The murder started today.","noun:queen":"Paris is the queen of cities.","noun:attempt":"They made an attempt on his life.","noun:channel":"The ship went aground in the channel.","noun:distance":"I could see it in the distance.","noun:exchange":"They had a bitter exchange.","noun:fat":"Pizza has too much fat.","noun:glass":"The glass was clean.","noun:protection":"They were huddled together for protection.","noun:ride":"The ride started today.","noun:screen":"We used the screen.","noun:species":"The species works together.","noun:speech":"His speech was garbled.","noun:traffic":"Traffic on the internet is lightest during the night.","noun:tree":"The tree grows here.","noun:airport":"We used the airport.","noun:animal":"The animal is important.","noun:benefit":"The benefit has value.","noun:bottom":"We visited the bottom.","noun:demand":"There is a demand for jobs.","noun:engine":"We used the engine.","noun:investment":"He made an emotional investment in the work.","noun:partner":"The partner is here.","noun:solution":"The solution took three hours.","noun:square":"The square is important.","noun:structure":"He has good bone structure.","noun:wind":"When there is no wind, row.","noun:worry":"It is not work but worry that kills.","noun:brand":"We discussed the brand.","noun:bus":"The fenders had fallen off that old bus.","noun:cent":"We recorded the cent.","noun:count":"We recorded the count.","noun:lake":"The lake is important.","noun:mouth":"The jar had a wide mouth.","noun:owner":"Who is the owner of that friendly smile?","noun:scale":"The scale is important.","noun:score":"The score was 7 to 0.","noun:surface":"The sun has no distinct surface.","noun:throw":"The catcher made a good throw to second base.","noun:wedding":"The wedding is important.","noun:arm":"The doctor checked the arm.","noun:budget":"The budget has value.","noun:estate":"The estate has value.","noun:faith":"The faith is important.","noun:fashion":"The fashion is important.","noun:fund":"The fund has value.","noun:generation":"Dams were built for the generation of electricity.","noun:hearing":"His hearing was impaired.","noun:hill":"The hill is important.","noun:metal":"The metal was clean.","noun:profile":"We discussed the profile.","noun:seat":"The seat of his pants was worn through.","noun:target":"We discussed the target.","noun:understanding":"I knew I could count on his understanding.","noun:village":"The village works together.","noun:agent":"The agent is important.","noun:authority":"He is an authority on corporate law.","noun:basis":"The basis of this drink is orange juice.","noun:draw":"The draw is important.","noun:employee":"The employee is here.","noun:foundation":"There is little foundation for his objections.","noun:gain":"We recorded the gain.","noun:memory":"He can do it from memory.","noun:ring":"It has the ring of sincerity.","noun:rise":"The rise is important.","noun:silver":"The silver was clean.","noun:soul":"Soul was politically significant during the Civil Rights movement.","noun:spread":"The spread is important.","noun:supply":"We recorded the supply.","noun:waste":"The waste was clean.","noun:adult":"The adult is here.","noun:artist":"The artist is here.","noun:chairman":"The chairman is here.","noun:edition":"It was too late for the morning edition.","noun:engineering":"The engineering started today.","noun:grade":"The road had a steep grade.","noun:method":"The method is important.","noun:option":"What option did I have?","noun:prison":"We used the prison.","noun:stone":"He must have a heart of stone.","noun:strength":"It was destroyed by the strength of the gale.","noun:user":"The user is here.","noun:winner":"The winner is here.","noun:bag":"His bag now is learning to play golf.","noun:bet":"He did it on a bet.","noun:camp":"The living room was pure camp.","noun:cast":"Pottery of this cast was found throughout the region.","noun:firm":"The firm works together.","noun:handle":"We used the handle.","noun:leaf":"The leaf grows here.","noun:spirit":"The spirit is here.","noun:television":"We discussed the television.","noun:trouble":"What is the trouble?","noun:advantage":"The experience gave him the advantage over me.","noun:cat":"What a cat she is!","noun:customer":"The customer is here.","noun:dinner":"Dinner will be at 8.","noun:dollar":"We recorded the dollar.","noun:function":"It was a black-tie function.","noun:gift":"The gift has value.","noun:influence":"He was a bad influence on the children.","noun:item":"We discussed the item.","noun:progress":"The progress started today.","noun:shooting":"His shooting was slow but accurate.","noun:wood":"The wood was clean.","noun:background":"He is a lawyer with a sports background.","noun:birth":"The birth passed quickly.","noun:bridge":"We used the bridge.","noun:concept":"The concept is important.","noun:copy":"The clone was a copy of its ancestor.","noun:garden":"We used the garden.","noun:host":"The host is here.","noun:housing":"We used the housing.","noun:journal":"We discussed the journal.","noun:labor":"She was in labor for six hours.","noun:leadership":"He believed that leadership can be taught.","noun:length":"The length of the table was 5 feet.","noun:setting":"You can't do that in a university setting.","noun:skill":"The skill is important.","noun:thousand":"We recorded the thousand.","noun:apple":"We enjoyed the apple.","noun:balance":"The balance is important.","noun:birthday":"The birthday passed quickly.","noun:bitch":"This problem is a real bitch.","noun:bos":"We saw the bos.","noun:connection":"There was a connection via the internet.","noun:dress":"We used the dress.","noun:horse":"We saw the horse.","noun:magic":"The magic is important.","noun:map":"We used the map.","noun:net":"We used the net.","noun:request":"We discussed the request.","noun:stick":"The kid had a candied apple on a stick.","noun:vehicle":"A congregation is a vehicle of group identity.","noun:volume":"The third volume was missing.","noun:wake":"We observed the wake.","noun:aid":"Rescue party went to their aid.","noun:conversation":"We discussed the conversation.","noun:corner":"A piano was in one corner of the room.","noun:criminal":"The criminal is here.","noun:driver":"The driver is here.","noun:farm":"It takes several people to work the farm.","noun:file":"We discussed the file.","noun:fly":"We saw the fly.","noun:guide":"The guide is here.","noun:investigation":"The investigation is important.","noun:responsibility":"The responsibility started today.","noun:roll":"The roll is important.","noun:surprise":"She felt great surprise.","noun:variety":"He had a variety of disorders.","noun:violence":"The violence started today.","noun:weapon":"He was licensed to carry a weapon.","noun:youth":"The youth is here.","noun:breaking":"The breaking started today.","noun:edge":"His voice had an edge to it.","noun:injury":"The injury is important.","noun:iron":"The iron was clean.","noun:magazine":"We discussed the magazine.","noun:parliament":"The parliament works together.","noun:reference":"We discussed the reference.","noun:religion":"He was raised in the Baptist religion.","noun:wine":"We enjoyed the wine.","noun:audience":"He saw that he had lost his audience.","noun:bay":"The bay is important.","noun:core":"The ball has a titanium core.","noun:guard":"He was on guard that night.","noun:medicine":"The medicine is important.","noun:mention":"There was no mention of it.","noun:mountain":"The mountain is important.","noun:presence":"The presence is important.","noun:reaction":"Every action has an equal and opposite reaction.","noun:stress":"Stress is a vasoconstrictor.","noun:taste":"The melon had a delicious taste.","noun:tea":"Tea has fragrant white flowers.","noun:victory":"The victory is important.","noun:afternoon":"The afternoon passed quickly.","noun:assistant":"The assistant is here.","noun:citizen":"The citizen is here.","noun:clothes":"We used the clothes.","noun:emergency":"He never knew what to do in an emergency.","noun:failure":"That year there was a crop failure.","noun:festival":"The festival passed quickly.","noun:fuel":"More fuel is needed during the winter months.","noun:mail":"Your mail is on the table.","noun:pair":"The pair works together.","noun:plane":"We used the plane.","noun:plenty":"It must have cost plenty.","noun:prince":"The prince is here.","noun:quarter":"The wind is coming from that quarter.","noun:session":"It was the opening session of the legislature.","noun:shape":"Geometry is the mathematical science of shape.","noun:sky":"The sky is important.","noun:teaching":"Good classroom teaching is seldom rewarded.","noun:transfer":"The best student was a transfer from LSU.","noun:valley":"The valley is important.","noun:zone":"We visited the zone.","noun:accident":"Winning the lottery was a happy accident.","noun:alternative":"The alternative is important.","noun:bear":"We saw the bear.","noun:boat":"We used the boat.","noun:capacity":"He had drunk beyond his capacity.","noun:climate":"The climate is important.","noun:discussion":"We had a good discussion.","noun:duty":"The duty started today.","noun:governor":"The governor is here.","noun:joint":"The doctor checked the joint.","noun:mix":"Paste made by a mix of flour and water.","noun:museum":"We used the museum.","noun:path":"The path started today.","noun:promise":"We discussed the promise.","noun:purchase":"He could get no purchase on the situation.","noun:rain":"We observed the rain.","noun:spending":"The spending started today.","noun:steel":"The steel was clean.","noun:beer":"We enjoyed the beer.","noun:border":"The rug had a wide blue border.","noun:command":"The corporation has just undergone a change in command.","noun:crew":"The crew works together.","noun:crowd":"The crowd works together.","noun:element":"Water is the element of fishes.","noun:enemy":"The enemy works together.","noun:forest":"The forest works together.","noun:intelligence":"The intelligence is important.","noun:labour":"The labour works together.","noun:limit":"The limit is important.","noun:moon":"The Moon was bright enough to read by.","noun:ocean":"The ocean is important.","noun:profit":"The profit has value.","noun:proof":"The proof is important.","noun:soldier":"The soldier is here.","noun:suit":"What suit is trumps?","noun:appearance":"It was Bernhardt's last appearance in America.","noun:attorney":"The attorney is here.","noun:behavior":"The behavior started today.","noun:chair":"He is second chair violin.","noun:debt":"He is badly in debt.","noun:honor":"We discussed the honor.","noun:jump":"The jump is important.","noun:minimum":"We recorded the minimum.","noun:ray":"We observed the ray.","noun:survey":"His survey of the battlefield was limited.","noun:writer":"The writer is here.","noun:communication":"They could not act without official communication from Moscow.","noun:exercise":"The exercise started today.","noun:express":"We discussed the express.","noun:flow":"The flow is important.","noun:hero":"The hero is here.","noun:joke":"We discussed the joke.","noun:loan":"The loan has value.","noun:planet":"The planet is important.","noun:restaurant":"We used the restaurant.","noun:shopping":"Went shopping for a reliable plumber.","noun:sugar":"We enjoyed the sugar.","noun:transport":"We used the transport.","noun:affair":"It is none of your affair.","noun:appeal":"Their appeal was denied in the superior court.","noun:device":"He was recognized by the device on his shield.","noun:drama":"We discussed the drama.","noun:entry":"We discussed the entry.","noun:era":"The era passed quickly.","noun:factor":"The factor is important.","noun:grant":"The grant has value.","noun:lawyer":"The lawyer is here.","noun:leg":"The doctor checked the leg.","noun:measure":"The measure started today.","noun:mistake":"He made a bad mistake.","noun:platform":"We used the platform.","noun:relation":"He was the hero according to his own relation.","noun:route":"We visited the route.","noun:schedule":"The schedule is important.","noun:shoe":"We used the shoe.","noun:smoke":"He went outside for a smoke.","noun:squad":"The squad works together.","noun:testing":"There are laboratories for commercial testing.","noun:abuse":"The abuse started today.","noun:candidate":"The candidate is here.","noun:concern":"New York traffic is a constant concern.","noun:facility":"The assembly plant is an enormous facility.","noun:fox":"We saw the fox.","noun:hole":"The hole is important.","noun:holiday":"We took a short holiday in Puerto Rico.","noun:laugh":"We discussed the laugh.","noun:lunch":"We enjoyed the lunch.","noun:milk":"We enjoyed the milk.","noun:pack":"We recorded the pack.","noun:payment":"The payment has value.","noun:sector":"The sector is important.","noun:snow":"We observed the snow.","noun:storm":"We observed the storm.","noun:strike":"The strike was scheduled to begin at dawn.","noun:studio":"We used the studio.","noun:sub":"We enjoyed the sub.","noun:actor":"The actor is here.","noun:apartment":"We used the apartment.","noun:chain":"The chain works together.","noun:chapter":"The divorce was an ugly chapter in their relationship.","noun:confidence":"I have confidence in our team.","noun:cook":"The cook is here.","noun:finance":"The finance started today.","noun:identity":"The identity under numerical multiplication is 1.","noun:kitchen":"We used the kitchen.","noun:split":"The split started today.","noun:task":"The task started today.","noun:aircraft":"We used the aircraft.","noun:argument":"They were involved in a violent argument.","noun:conflict":"He was immobilized by conflict and indecision.","noun:debate":"We discussed the debate.","noun:document":"We discussed the document.","noun:escape":"That was a narrow escape.","noun:fault":"It was John's fault.","noun:flower":"The flower grows here.","noun:million":"We recorded the million.","noun:phase":"The phase passed quickly.","noun:requirement":"The requirement is important.","noun:resident":"The resident is here.","noun:revenue":"The revenue has value.","noun:smile":"We discussed the smile.","noun:temperature":"The temperature is important.","noun:troop":"The troop works together.","noun:truck":"We used the truck.","noun:bird":"We saw the bird.","noun:bowl":"We used the bowl.","noun:chicken":"We enjoyed the chicken.","noun:context":"We discussed the context.","noun:coverage":"The dictionary's coverage of standard English is excellent.","noun:display":"Made a display of strength.","noun:meat":"We enjoyed the meat.","noun:ministry":"He is studying for the ministry.","noun:mode":"The mode is important.","noun:neck":"The banjo had a long neck.","noun:novel":"We discussed the novel.","noun:shirt":"We used the shirt.","noun:stadium":"We used the stadium.","noun:surgery":"The surgery is important.","noun:vision":"He had a vision of his own death.","noun:zero":"We recorded the zero.","noun:champion":"The champion is here.","noun:cream":"The cream works together.","noun:crisis":"They went bankrupt during the economic crisis.","noun:jail":"We used the jail.","noun:kingdom":"The kingdom is important.","noun:literature":"Her place in literature is secure.","noun:mayor":"The mayor is here.","noun:orange":"We enjoyed the orange.","noun:selection":"The selection started today.","noun:signal":"The victory was a signal for wild celebration.","noun:stream":"The stream is important.","noun:struggle":"Getting through the crowd was a real struggle.","noun:suicide":"It is a crime to commit suicide.","noun:theme":"It was the usual `boy gets girl' theme.","noun:voting":"The voting started today.","noun:wave":"The wave is important.","noun:alcohol":"We enjoyed the alcohol.","noun:assembly":"We used the assembly.","noun:breakfast":"We enjoyed the breakfast.","noun:combination":"They were a winning combination.","noun:desire":"She felt great desire.","noun:draft":"He took a sleeping draft.","noun:hundred":"We recorded the hundred.","noun:solo":"The solo started today.","noun:ticket":"We discussed the ticket.","noun:wing":"They are the progressive wing of the Republican Party.","noun:bomb":"We used the bomb.","noun:cycle":"The cycle passed quickly.","noun:entertainment":"The entertainment started today.","noun:maximum":"We recorded the maximum.","noun:newspaper":"We discussed the newspaper.","noun:offering":"We discussed the offering.","noun:painting":"House painting was the only craft he knew.","noun:republic":"The republic works together.","noun:reserve":"The reserve is important.","noun:row":"The row works together.","noun:salt":"The salt was clean.","noun:switch":"We used the switch.","noun:territory":"We visited the territory.","noun:threat":"They were under threat of arrest.","noun:wale":"The wale is important.","noun:assistance":"Could not walk without assistance.","noun:bell":"We used the bell.","noun:blow":"He gave his nose a loud blow.","noun:bond":"A $10,000 bond was furnished by an alderman.","noun:circumstance":"The circumstance is important.","noun:cry":"Had a good cry.","noun:danger":"You are in no danger.","noun:delivery":"She had a difficult delivery.","noun:folk":"The folk works together.","noun:gender":"We discussed the gender.","noun:instance":"The instance is important.","noun:motion":"He made a motion to adjourn.","noun:prize":"The prize was a free trip to Europe.","noun:register":"We discussed the register.","noun:tool":"We used the tool.","noun:universe":"The universe is important.","noun:warning":"The warning was to beware of surprises.","noun:attitude":"He had the attitude that work was fun.","noun:branch":"Botany is a branch of biology.","noun:decade":"The decade passed quickly.","noun:definition":"Exercise had given his muscles superior definition.","noun:drawing":"It is shown by the drawing in Fig. 7.","noun:favor":"The outcome was in his favor.","noun:flag":"We used the flag.","noun:frame":"We used the frame.","noun:guest":"The guest is here.","noun:heaven":"We visited the heaven.","noun:independence":"The independence is important.","noun:institution":"He had become an institution in the theater.","noun:load":"We used the load.","noun:plot":"The plot is important.","noun:possibility":"Bankruptcy is always a possibility.","noun:recovery":"The recovery is important.","noun:rent":"The rent has value.","noun:sentence":"His sentence was 5 to 10 years.","noun:tooth":"The doctor checked the tooth.","noun:tip":"We visited the tip.","noun:academy":"The academy works together.","noun:bottle":"We used the bottle.","noun:bunch":"The bunch works together.","noun:category":"The category works together.","noun:cheese":"We enjoyed the cheese.","noun:chemical":"The chemical was clean.","noun:fruit":"The fruit grows here.","noun:index":"The index is important.","noun:lane":"We used the lane.","noun:navy":"The navy works together.","noun:opposition":"Despite opposition from the newspapers he went ahead.","noun:pleasure":"He was tingling with pleasure.","noun:representative":"The representative is here.","noun:scheme":"The scheme is important.","noun:shift":"The shift is important.","noun:tank":"We used the tank.","noun:transportation":"The sentence was one of transportation for life.","noun:yard":"It was a small house with almost no yard.","noun:asset":"The asset is important.","noun:basketball":"The basketball started today.","noun:button":"We used the button.","noun:combat":"The combat started today.","noun:constitution":"We discussed the constitution.","noun:consumer":"The consumer is here.","noun:counter":"We used the counter.","noun:creation":"From its creation the plan was doomed to failure.","noun:crown":"Tomorrow my dentist will fit me for a crown.","noun:depression":"The depression is important.","noun:employment":"He is looking for employment.","noun:excuse":"We discussed the excuse.","noun:expert":"The expert is here.","noun:golf":"The golf started today.","noun:grace":"Their youngest son said grace.","noun:importance":"The importance is important.","noun:object":"The object is important.","noun:pattern":"The pattern is important.","noun:perspective":"The perspective is important.","noun:revolution":"The industrial revolution was also a cultural revolution.","noun:tournament":"The tournament is important.","noun:turkey":"The first experiment was a real turkey.","noun:victim":"The victim is here.","noun:arrest":"The negotiations were in arrest.","noun:ban":"We discussed the ban.","noun:carbon":"The carbon was clean.","noun:circle":"The chairs were arranged in a circle.","noun:concert":"We discussed the concert.","noun:crash":"The crash is important.","noun:error":"The error started today.","noun:existence":"The existence is important.","noun:factory":"We used the factory.","noun:interior":"We visited the interior.","noun:joy":"She felt great joy.","noun:legislation":"We discussed the legislation.","noun:maintenance":"The maintenance started today.","noun:manner":"What manner of man are you?","noun:noise":"Modern music is just noise to me.","noun:origin":"Jupiter was the origin of the radiation.","noun:panel":"We used the panel.","noun:personality":"She is a Hollywood personality.","noun:plate":"We used the plate.","noun:relief":"He has been on relief for many years.","noun:resistance":"The resistance started today.","noun:rice":"We enjoyed the rice.","noun:roof":"There was a roof on salaries.","noun:shame":"She felt great shame.","noun:advertising":"We discussed the advertising.","noun:baseball":"There was a baseball game on every empty lot.","noun:bathroom":"We used the bathroom.","noun:cable":"We discussed the cable.","noun:championship":"The championship is important.","noun:client":"The client is here.","noun:empire":"We visited the empire.","noun:expansion":"The expansion started today.","noun:hide":"The hide was clean.","noun:incident":"The incident is important.","noun:politician":"The politician is here.","noun:print":"His book is no longer in print.","noun:reporting":"We discussed the reporting.","noun:sight":"The train was an unexpected sight.","noun:anniversary":"The anniversary passed quickly.","noun:burn":"The burn is important.","noun:cake":"We used the cake.","noun:contest":"The contest is important.","noun:fee":"The fee has value.","noun:hat":"He took off his politician's hat and talked frankly.","noun:height":"The height is important.","noun:motor":"We used the motor.","noun:peak":"Summer was at its peak.","noun:portion":"Success that was her portion.","noun:pound":"Unlicensed dogs will be taken to the pound.","noun:protein":"The protein was clean.","noun:reform":"The reform started today.","noun:retirement":"The retirement is important.","noun:sample":"The sample is important.","noun:suffering":"The suffering is important.","noun:battery":"Took a battery of achievement tests.","noun:breath":"He was fighting to his last breath.","noun:chest":"The doctor checked the chest.","noun:conduct":"The conduct started today.","noun:fantasy":"The fantasy is important.","noun:grab":"We used the grab.","noun:introduction":"The introduction started today.","noun:license":"When liberty becomes license dictatorship is near.","noun:paint":"We used the paint.","noun:pilot":"The pilot is here.","noun:principal":"The principal has value.","noun:shipping":"The shipping started today.","noun:singer":"The singer is here.","noun:steam":"The steam was clean.","noun:theatre":"We used the theatre.","noun:therapy":"Heat therapy gave the best relief.","noun:witness":"The witness is here.","noun:aim":"He took aim and fired.","noun:cap":"We used the cap.","noun:childhood":"The childhood passed quickly.","noun:comedy":"We discussed the comedy.","noun:comparison":"They made a comparison of noise levels.","noun:defeat":"It was a narrow defeat.","noun:defence":"The defence is important.","noun:democracy":"The democracy is important.","noun:lock":"We used the lock.","noun:nose":"The hound has a good nose.","noun:plastic":"Do you take plastic?","noun:recording":"We used the recording.","noun:suspect":"The suspect is here.","noun:technique":"The technique is important.","noun:tie":"We used the tie.","noun:trend":"We visited the trend.","noun:wealth":"She has a wealth of talent.","noun:approval":"The approval started today.","noun:aspect":"The aspect is important.","noun:bread":"We enjoyed the bread.","noun:convention":"The convention works together.","noun:dancing":"The dancing started today.","noun:egg":"We saw the egg.","noun:engineer":"The engineer is here.","noun:finger":"The doctor checked the finger.","noun:graduate":"The graduate is here.","noun:lift":"He gave me a lift home.","noun:neighborhood":"It is a friendly neighborhood.","noun:permission":"We discussed the permission.","noun:regulation":"Short haircuts were the regulation.","noun:reply":"We discussed the reply.","noun:scientist":"The scientist is here.","noun:shoulder":"The doctor checked the shoulder.","noun:shower":"He took a shower after the game.","noun:tower":"We used the tower.","noun:tradition":"The tradition is important.","noun:wheel":"We used the wheel.","noun:appointment":"The appointment started today.","noun:bush":"The bush grows here.","noun:cabinet":"We used the cabinet.","noun:chocolate":"We enjoyed the chocolate.","noun:coal":"The coal was clean.","noun:criticism":"Constructive criticism is always appreciated.","noun:gallery":"The gallery works together.","noun:highway":"We used the highway.","noun:improvement":"The improvement is important.","noun:inch":"We recorded the inch.","noun:jury":"The jury works together.","noun:monster":"The monster is here.","noun:philosophy":"Self-indulgence was his only philosophy.","noun:pride":"He takes pride in his son's success.","noun:settlement":"The settlement works together.","noun:smell":"It had the smell of treason.","noun:speaker":"The speaker is here.","noun:tone":"We discussed the tone.","noun:topic":"It was a very sensitive topic.","noun:visitor":"The visitor is here.","noun:auto":"We used the auto.","noun:guitar":"We used the guitar.","noun:heading":"We discussed the heading.","noun:meal":"We enjoyed the meal.","noun:partnership":"The partnership works together.","noun:percentage":"The percentage is important.","noun:pocket":"The trapped miners found a pocket of air.","noun:rape":"The rape grows here.","noun:rush":"The linebackers were ready to stop a rush.","noun:soccer":"The soccer started today.","noun:stable":"We used the stable.","noun:symptom":"The symptom is important.","noun:trick":"That offer was a dirty trick.","noun:audio":"We discussed the audio.","noun:bone":"The doctor checked the bone.","noun:chamber":"The upper chamber is the senate.","noun:chart":"We discussed the chart.","noun:circuit":"We took a quick circuit of the park.","noun:clothing":"We used the clothing.","noun:consequence":"That result is of no consequence.","noun:extent":"To a certain extent she was right.","noun:format":"We discussed the format.","noun:gap":"There was a gap in his account.","noun:gate":"We used the gate.","noun:harm":"The harm is important.","noun:household":"It was a good Christian household.","noun:immigration":"The immigration started today.","noun:killer":"That exam was a real killer.","noun:lesson":"He did the lesson for today.","noun:membership":"The membership works together.","noun:mirror":"The best mirror is an old friend.","noun:mount":"The diamond was in a plain gold mount.","noun:proposal":"We discussed the proposal.","noun:province":"It was his province to take care of himself.","noun:recognition":"The recognition is important.","noun:reputation":"The reputation is important.","noun:tear":"The doctor checked the tear.","noun:adventure":"The adventure started today.","noun:assessment":"The assessment is important.","noun:atmosphere":"The atmosphere was thick with fog.","noun:bedroom":"We used the bedroom.","noun:belief":"The belief is important.","noun:closing":"The closing started today.","noun:cloud":"After that mistake he was under a cloud.","noun:contrast":"The contrast is important.","noun:extension":"The wire has an extension of 50 feet.","noun:founder":"The founder is important.","noun:gear":"We used the gear.","noun:hip":"The doctor checked the hip.","noun:package":"The package works together.","noun:poverty":"The poverty is important.","noun:processing":"The processing is important.","noun:railway":"We used the railway.","noun:shock":"He was numb with shock.","noun:silence":"There was a shocked silence.","noun:supporter":"The supporter is here.","noun:ton":"We recorded the ton.","noun:transition":"The transition started today.","noun:voter":"The voter is here.","noun:acid":"The acid was clean.","noun:actress":"The actress is here.","noun:angel":"The angel is here.","noun:anxiety":"The anxiety is important.","noun:bonus":"The bonus is important.","noun:castle":"We used the castle.","noun:charity":"The charity works together.","noun:discovery":"The discovery started today.","noun:duke":"The duke is here.","noun:formula":"He gave us a general formula for attacking polynomials.","noun:fort":"We used the fort.","noun:math":"The math is important.","noun:mystery":"How it got out is a mystery.","noun:penalty":"The penalty started today.","noun:pet":"We saw the pet.","noun:photography":"The photography started today.","noun:protest":"We discussed the protest.","noun:publication":"We discussed the publication.","noun:rating":"The rating is important.","noun:temple":"We used the temple.","noun:trail":"The trail is important.","noun:uncle":"The uncle is here.","noun:arrival":"The arrival started today.","noun:assault":"The assault started today.","noun:bath":"He has a good bath every morning.","noun:component":"The smaller component is hard to reach.","noun:concrete":"The concrete was clean.","noun:expectation":"The expectation is important.","noun:explanation":"The explanation was very simple.","noun:exposure":"The studio had a northern exposure.","noun:fiction":"We discussed the fiction.","noun:guarantee":"There is no guarantee that they are not lying.","noun:happiness":"The happiness is important.","noun:ideal":"The ideal is important.","noun:legend":"We discussed the legend.","noun:mood":"She felt great mood.","noun:muscle":"The doctor checked the muscle.","noun:passion":"He has a passion for cock fighting.","noun:procedure":"The procedure started today.","noun:producer":"Maine is a leading producer of potatoes.","noun:rank":"His salary was determined by his rank and seniority.","noun:replacement":"The replacement started today.","noun:sand":"The sand was clean.","noun:shadow":"The poor child was his mother's shadow.","noun:tape":"The carpenter should have used his tape measure.","noun:thread":"From the air the road was a grey thread.","noun:wage":"The wage has value.","noun:avenue":"They explored every avenue they could think of.","noun:clock":"We used the clock.","noun:commitment":"The commitment is important.","noun:custom":"The custom started today.","noun:desk":"We used the desk.","noun:ear":"He had a keen ear.","noun:electricity":"We observed the electricity.","noun:farmer":"The farmer is here.","noun:gym":"We used the gym.","noun:horror":"She felt great horror.","noun:label":"We discussed the label.","noun:output":"We used the output.","noun:pitch":"The roof had a steep pitch.","noun:welfare":"The welfare started today.","noun:wire":"We used the wire.","noun:anger":"She felt great anger.","noun:architecture":"We used the architecture.","noun:assist":"He gave me an assist with the housework.","noun:belt":"We used the belt.","noun:capture":"The capture started today.","noun:ceremony":"He makes a ceremony of addressing his golf ball.","noun:cop":"The cop is here.","noun:cut":"He is a cut above the rest.","noun:designer":"The designer is here.","noun:diamond":"The diamond has value.","noun:economics":"The economics is important.","noun:establishment":"It was the establishment of his reputation.","noun:ghost":"He looked like he had seen a ghost.","noun:kit":"We used the kit.","noun:lab":"We used the lab.","noun:min":"The min passed quickly.","noun:prayer":"The prayer started today.","noun:principle":"The principle is important.","noun:soil":"American troops were stationed on Japanese soil.","noun:stomach":"He had no stomach for a fight.","noun:trash":"The trash was clean.","noun:virus":"The virus of jealousy is latent in everyone.","noun:bureau":"The bureau works together.","noun:comfort":"His friendship was a comfort.","noun:cousin":"The cousin is here.","noun:crack":"He took a crack at it.","noun:deck":"We used the deck.","noun:dragon":"The dragon is here.","noun:dust":"The furniture was covered with dust.","noun:evolution":"The evolution is important.","noun:illness":"The illness is important.","noun:inspiration":"The inspiration is important.","noun:knife":"We used the knife.","noun:memorial":"We discussed the memorial.","noun:minority":"The minority works together.","noun:priority":"National independence takes priority over class struggle.","noun:promotion":"We discussed the promotion.","noun:reader":"The reader is here.","noun:repair":"The building was in good repair.","noun:root":"The root grows here.","noun:saint":"The saint is here.","noun:telephone":"We used the telephone.","noun:alliance":"The alliance is important.","noun:bid":"He made a bid to gain attention.","noun:butter":"We enjoyed the butter.","noun:conclusion":"His conclusion took the evidence into account.","noun:crap":"The crap was clean.","noun:crystal":"The crystal was clean.","noun:decline":"The decline is important.","noun:delay":"The delay passed quickly.","noun:desert":"We visited the desert.","noun:elite":"The elite works together.","noun:landing":"The plane made a smooth landing.","noun:layer":"We used the layer.","noun:nurse":"The nurse is here.","noun:ownership":"The ownership has value.","noun:participant":"The participant is here.","noun:poetry":"We discussed the poetry.","noun:pot":"We used the pot.","noun:sheet":"The sheet is important.","noun:string":"We used the string.","noun:vacation":"The vacation passed quickly.","noun:associate":"He had to consult his associate before continuing.","noun:bench":"Our team has a strong bench.","noun:broadcast":"We discussed the broadcast.","noun:cricket":"We saw the cricket.","noun:critic":"The critic is here.","noun:disaster":"His policies were a disaster.","noun:entrance":"She made a grand entrance.","noun:fitness":"They had to prove their fitness for the position.","noun:friendship":"The friendship is important.","noun:handling":"The handling started today.","noun:liquid":"The liquid was clean.","noun:makeup":"We used the makeup.","noun:medal":"We discussed the medal.","noun:mortgage":"The mortgage has value.","noun:narrative":"His narrative was interesting.","noun:pan":"We used the pan.","noun:reduction":"The reduction started today.","noun:researcher":"The researcher is here.","noun:shell":"We used the shell.","noun:translation":"We discussed the translation.","noun:amendment":"The amendment started today.","noun:angle":"The angle is important.","noun:bishop":"The bishop is here.","noun:efficiency":"She did the work with great efficiency.","noun:enterprise":"He had doubts about the whole enterprise.","noun:experiment":"It was an experiment in living.","noun:forum":"The forum works together.","noun:grass":"The grass grows here.","noun:mill":"We used the mill.","noun:occasion":"There was no occasion for complaint.","noun:pace":"The pace passed quickly.","noun:passenger":"The passenger is here.","noun:pen":"We used the pen.","noun:possession":"The possession started today.","noun:spin":"He gave the crank a spin.","noun:agriculture":"The agriculture started today.","noun:commerce":"The commerce started today.","noun:currency":"The currency has value.","noun:emotion":"She felt great emotion.","noun:exhibition":"The exhibition started today.","noun:fraud":"The fraud started today.","noun:funeral":"The funeral is important.","noun:honey":"We enjoyed the honey.","noun:honour":"The honour is important.","noun:hook":"We used the hook.","noun:hunter":"The hunter is here.","noun:immigrant":"The immigrant is here.","noun:instruction":"Our instruction was carefully programmed.","noun:legacy":"The legacy has value.","noun:log":"The log was clean.","noun:monitor":"The monitor is here.","noun:prisoner":"The prisoner is here.","noun:ratio":"The ratio is important.","noun:regret":"She felt great regret.","noun:resort":"An appeal to his uncle was his last resort.","noun:reverse":"The reverse is important.","noun:routine":"She had a catchy little routine.","noun:seed":"The seed grows here.","noun:sin":"The sin is important.","noun:spell":"The spell is important.","noun:summary":"He gave a summary of the conclusions.","noun:survival":"The survival is important.","noun:sword":"We used the sword.","noun:tongue":"She has a glib tongue.","noun:ward":"The ward is here.","noun:achievement":"The achievement started today.","noun:behaviour":"The behaviour is important.","noun:coat":"We used the coat.","noun:daddy":"The daddy is here.","noun:destruction":"The destruction started today.","noun:divorce":"The divorce started today.","noun:fate":"The fate is important.","noun:frequency":"The frequency of modulation was 40 cycles per second.","noun:glory":"The glory is important.","noun:headquarters":"Many companies have their headquarters in New York.","noun:heritage":"The heritage is important.","noun:initiative":"The initiative is important.","noun:juice":"We enjoyed the juice.","noun:landscape":"We visited the landscape.","noun:logic":"It made a certain kind of logic.","noun:objective":"The objective is important.","noun:privacy":"The privacy is important.","noun:regard":"A man who has earned high regard.","noun:residence":"We visited the residence.","noun:salary":"The salary has value.","noun:script":"We discussed the script.","noun:strip":"She did a strip right in front of everyone.","noun:tube":"We used the tube.","noun:ambassador":"An ambassador of good will.","noun:breast":"The doctor checked the breast.","noun:chemistry":"The chemistry is important.","noun:consumption":"The consumption of energy has increased steadily.","noun:corruption":"He was held on charges of corruption and racketeering.","noun:cotton":"The cotton was clean.","noun:discount":"The discount started today.","noun:dozen":"We recorded the dozen.","noun:exception":"His authority is beyond exception.","noun:exit":"We used the exit.","noun:fancy":"The fancy is important.","noun:impression":"He made a good impression.","noun:input":"We discussed the input.","noun:leather":"The leather was clean.","noun:lip":"The doctor checked the lip.","noun:luxury":"The luxury is important.","noun:manufacturer":"The manufacturer works together.","noun:outcome":"The outcome is important.","noun:poll":"The poll is important.","noun:removal":"He had surgery for the removal of a malignancy.","noun:reporter":"The reporter is here.","noun:sequence":"The sequence of names was alphabetical.","noun:tennis":"The tennis started today.","noun:theater":"We used the theater.","noun:virgin":"The virgin is here.","noun:wolf":"We saw the wolf.","noun:absence":"He was surprised by the absence of any explanation.","noun:athlete":"The athlete is here.","noun:blue":"She was wearing blue.","noun:bull":"What he said was mostly bull.","noun:commonwealth":"We visited the commonwealth.","noun:contribution":"The contribution started today.","noun:ease":"Getting it off his conscience gave him some ease.","noun:fame":"The fame is important.","noun:flood":"We observed the flood.","noun:instant":"The instant passed quickly.","noun:liberty":"The liberty is important.","noun:photograph":"We used the photograph.","noun:punishment":"The punishment started today.","noun:rally":"The rally works together.","noun:sum":"The sum has value.","noun:swing":"The party went with a swing.","noun:tail":"We saw the tail.","noun:twin":"The twin is here.","noun:veteran":"The veteran is here.","noun:arena":"The arena is important.","noun:boom":"The boom is important.","noun:boot":"We used the boot.","noun:column":"The column works together.","noun:compensation":"The compensation has value.","noun:composition":"The composition is written in four movements.","noun:conservation":"The conservation is important.","noun:density":"The density is important.","noun:difficulty":"Had difficulty walking.","noun:expense":"The expense has value.","noun:fleet":"The fleet works together.","noun:genius":"Mozart was a child genius.","noun:guidance":"We discussed the guidance.","noun:infection":"The infection is important.","noun:intention":"The intention is important.","noun:knee":"The doctor checked the knee.","noun:participation":"The participation started today.","noun:pregnancy":"The pregnancy is important.","noun:premium":"The premium has value.","noun:radical":"The radical was clean.","noun:reward":"Virtue is its own reward.","noun:satellite":"We used the satellite.","noun:teen":"The teen is here.","noun:transmission":"The transmission started today.","noun:trap":"The exam was full of trap questions.","noun:uniform":"We used the uniform.","noun:wildlife":"Chemicals could kill all the wildlife.","noun:bang":"The party went with a bang.","noun:blast":"Celebrating after the game was a blast.","noun:communist":"The communist is here.","noun:complaint":"The complaint is important.","noun:courage":"The courage is important.","noun:cure":"We used the cure.","noun:diversity":"The diversity is important.","noun:eve":"The eve is here.","noun:feedback":"The feedback is important.","noun:fighter":"The fighter is here.","noun:humanity":"The humanity is important.","noun:innovation":"We used the innovation.","noun:instrument":"My greed was the instrument of my destruction.","noun:jacket":"We used the jacket.","noun:listing":"We discussed the listing.","noun:manual":"We discussed the manual.","noun:operator":"Who is the operator of this franchise?","noun:preparation":"Their preparation was more than adequate.","noun:punch":"The punch started today.","noun:purple":"He was born to the purple.","noun:railroad":"We used the railroad.","noun:registration":"The registration started today.","noun:romance":"The romance is important.","noun:tissue":"The doctor checked the tissue.","noun:announcement":"We discussed the announcement.","noun:arsenal":"We used the arsenal.","noun:bite":"The bite is important.","noun:chip":"The chip is important.","noun:discrimination":"The discrimination started today.","noun:disorder":"The files are in complete disorder.","noun:domain":"The domain is important.","noun:engagement":"The engagement started today.","noun:footage":"They had stock footage of lightning, tornados, and hurricanes.","noun:grave":"He went to his grave without forgiving me.","noun:jazz":"We discussed the jazz.","noun:laboratory":"We used the laboratory.","noun:mask":"No mask could conceal his ignorance.","noun:midnight":"The midnight passed quickly.","noun:mouse":"A mouse takes much more room than a trackball.","noun:piano":"We used the piano.","noun:praise":"We discussed the praise.","noun:presentation":"She gave the trophy but he made the presentation.","noun:psychology":"The psychology is important.","noun:restriction":"The restriction is important.","noun:rocket":"We used the rocket.","noun:ruin":"You have brought ruin on this entire family.","noun:slave":"His mother was his abject slave.","noun:stability":"The stability is important.","noun:symbol":"The eagle is a symbol of the United States.","noun:treaty":"We discussed the treaty.","noun:agendum":"We discussed the agendum.","noun:bat":"He was at bat when it happened.","noun:bow":"We used the bow.","noun:calendar":"I have you on my calendar for next Monday.","noun:cape":"The cape is important.","noun:cooperation":"The cooperation started today.","noun:craft":"The craft started today.","noun:darkness":"The darkness is important.","noun:equity":"The equity has value.","noun:estimate":"An estimate of what it would cost.","noun:fortune":"Whatever my fortune may be.","noun:goodbye":"We discussed the goodbye.","noun:hardware":"We used the hardware.","noun:involvement":"There was additional involvement of the liver and spleen.","noun:nut":"The nut grows here.","noun:petition":"We discussed the petition.","noun:regime":"The regime works together.","noun:sauce":"We enjoyed the sauce.","noun:seal":"SEAL is an acronym for Sea Air and Land.","noun:shield":"We used the shield.","noun:stem":"Thematic vowels are part of the stem.","noun:summit":"The summit is important.","noun:throat":"The doctor checked the throat.","noun:tiger":"The tiger is here.","noun:toy":"Private airplanes are a rich man's toy.","noun:warrior":"The warrior is here.","noun:accounting":"We discussed the accounting.","noun:beast":"The beast is important.","noun:beef":"We saw the beef.","noun:carrier":"The bonds were transmitted by carrier.","noun:celebration":"The celebration is important.","noun:celebrity":"He was a baseball celebrity.","noun:certificate":"We discussed the certificate.","noun:clay":"The clay was clean.","noun:colleague":"The colleague is here.","noun:default":"The default started today.","noun:dialogue":"We discussed the dialogue.","noun:execution":"The execution started today.","noun:fool":"The fool is here.","noun:framework":"The framework is important.","noun:franchise":"We discussed the franchise.","noun:furniture":"They had too much furniture for the small apartment.","noun:interaction":"The interaction started today.","noun:jet":"We used the jet.","noun:lighting":"An interior decorator must understand lighting.","noun:loop":"We used the loop.","noun:polish":"The polish is important.","noun:recommendation":"Her pleasant personality is already a recommendation.","noun:sacrifice":"The sacrifice started today.","noun:tale":"We discussed the tale.","noun:volunteer":"The volunteer is here.","noun:alarm":"She felt great alarm.","noun:butt":"We used the butt.","noun:characteristic":"The characteristic is important.","noun:consideration":"Another consideration is the time it would take.","noun:filter":"We used the filter.","noun:galaxy":"`extragalactic nebula' is a former name for `galaxy'.","noun:globe":"The globe is important.","noun:highlight":"The highlight is important.","noun:intent":"His intent was to provide a new translation.","noun:judgment":"He was reluctant to make his judgment known.","noun:knight":"The knight is here.","noun:odds":"The odds is important.","noun:photographer":"The photographer is here.","noun:pump":"We used the pump.","noun:revenge":"The revenge started today.","noun:slip":"The slip started today.","noun:specialist":"The specialist is here.","noun:tap":"The tap is important.","noun:ally":"The ally works together.","noun:auction":"The auction started today.","noun:chaos":"The chaos is important.","noun:concentration":"The concentration is important.","noun:copper":"The copper was clean.","noun:dawn":"It was the dawn of the Roman Empire.","noun:dispute":"He had a dispute with his wife.","noun:earnings":"The earnings has value.","noun:margin":"The margin is important.","noun:mechanism":"The mechanism is important.","noun:opus":"We discussed the opus.","noun:parallel":"The parallel is important.","noun:passage":"The outward passage took 10 days.","noun:pit":"A British term for `quarry' is `stone pit'.","noun:quest":"The quest is important.","noun:radiation":"He was suffering from radiation.","noun:stroke":"The pregnancy was a stroke of bad luck.","noun:tune":"The clarinet was out of tune.","noun:vessel":"The doctor checked the vessel.","noun:acquisition":"The acquisition started today.","noun:autumn":"The autumn passed quickly.","noun:clip":"He could do ten at a clip.","noun:coin":"The coin has value.","noun:conspiracy":"We discussed the conspiracy.","noun:encounter":"There was a brief encounter in the hallway.","noun:equality":"The equality is important.","noun:examination":"The examination started today.","noun:federation":"The federation works together.","noun:intervention":"The intervention started today.","noun:lover":"The lover is here.","noun:mainstream":"His thinking was in the American mainstream.","noun:menu":"The menu was in French.","noun:offense":"The offense started today.","noun:panic":"She felt great panic.","noun:people":"Are your people still alive?","noun:refugee":"The refugee is here.","noun:scope":"The scope is important.","noun:segment":"We used the segment.","noun:spectrum":"We observed the spectrum.","noun:terror":"He was the terror of the neighborhood.","noun:venture":"The venture started today.","noun:arrangement":"The arrangement is important.","noun:boundary":"We visited the boundary.","noun:brick":"We used the brick.","noun:emperor":"The emperor is here.","noun:employer":"The employer is here.","noun:focusing":"The focusing is important.","noun:garage":"We used the garage.","noun:gathering":"The gathering works together.","noun:guideline":"We discussed the guideline.","noun:inquiry":"The inquiry is important.","noun:inspector":"The inspector is here.","noun:khan":"The khan is here.","noun:lion":"We saw the lion.","noun:mercy":"It was a mercy we got out alive.","noun:oxygen":"The oxygen was clean.","noun:pipe":"We used the pipe.","noun:poem":"We discussed the poem.","noun:powder":"The powder was clean.","noun:shelter":"We used the shelter.","noun:signature":"We discussed the signature.","noun:spider":"We saw the spider.","noun:tribute":"We discussed the tribute.","noun:trigger":"We used the trigger.","noun:abortion":"The abortion started today.","noun:bullet":"We used the bullet.","noun:conversion":"The conversion is important.","noun:deposit":"His deposit was refunded when he returned the car.","noun:destination":"We visited the destination.","noun:dirt":"The dirt was clean.","noun:export":"We used the export.","noun:grandfather":"The grandfather is here.","noun:habit":"The habit is important.","noun:neighbor":"Fort Worth is a neighbor of Dallas.","noun:pussy":"The doctor checked the pussy.","noun:robot":"We used the robot.","noun:spy":"The spy is here.","noun:suggestion":"The picnic was her suggestion.","noun:suspension":"The suspension was clean.","noun:treasury":"The treasury has value.","noun:tunnel":"We used the tunnel.","noun:warrant":"We discussed the warrant.","noun:wound":"He feared that mentioning it might reopen the wound.","noun:backing":"The backing started today.","noun:brush":"He gave his hair a quick brush.","noun:burden":"The burden is important.","noun:charter":"We discussed the charter.","noun:civilian":"The civilian is here.","noun:coalition":"The coalition works together.","noun:cock":"The doctor checked the cock.","noun:discipline":"In what discipline is his doctorate?","noun:essay":"We discussed the essay.","noun:healing":"The healing is important.","noun:invasion":"The invasion started today.","noun:opponent":"The opponent is here.","noun:palm":"The doctor checked the palm.","noun:pole":"We used the pole.","noun:pub":"We used the pub.","noun:reception":"We discussed the reception.","noun:rubber":"The rubber was clean.","noun:serial":"We discussed the serial.","noun:snake":"We saw the snake.","noun:stealing":"The stealing started today.","noun:substance":"DNA is the substance of our genes.","noun:syndrome":"Every word has a syndrome of meanings.","noun:usage":"The usage started today.","noun:amateur":"The amateur is here.","noun:bearing":"Those issues have no bearing on our situation.","noun:bin":"We used the bin.","noun:biology":"The biology is important.","noun:canal":"The canal is important.","noun:cruise":"The cruise started today.","noun:custody":"The suspect is in custody.","noun:departure":"The departure started today.","noun:developer":"The developer is here.","noun:eagle":"We saw the eagle.","noun:explosion":"The explosion was heard a mile away.","noun:fever":"The fever is important.","noun:fluid":"The fluid was clean.","noun:imagination":"Imagination reveals what the world could be.","noun:integration":"The integration started today.","noun:integrity":"The integrity is important.","noun:motivation":"We did not understand his motivation.","noun:outfit":"The outfit works together.","noun:pension":"The pension has value.","noun:portrait":"We discussed the portrait.","noun:tension":"The tension is important.","noun:transaction":"The transaction started today.","noun:unemployment":"Unemployment is a serious social evil.","noun:unity":"The unity is important.","noun:viewer":"The viewer is here.","noun:advocate":"The advocate is here.","noun:arc":"We observed the arc.","noun:clinic":"The clinic works together.","noun:creature":"The creature is important.","noun:criterion":"We discussed the criterion.","noun:detective":"The detective is here.","noun:disability":"The disability is important.","noun:dish":"Marriage was scarcely his dish.","noun:duck":"We saw the duck.","noun:excess":"The excess is important.","noun:farming":"Farming is a strenuous life.","noun:fence":"We used the fence.","noun:gravity":"We observed the gravity.","noun:holder":"We used the holder.","noun:meter":"We recorded the meter.","noun:nail":"The doctor checked the nail.","noun:negotiation":"We discussed the negotiation.","noun:nonsense":"We discussed the nonsense.","noun:sink":"The ocean is a sink for carbon dioxide.","noun:slavery":"The slavery is important.","noun:transformation":"The transformation is important.","noun:bronze":"The bronze was clean.","noun:bug":"We saw the bug.","noun:cave":"The cave is important.","noun:diagnosis":"The diagnosis started today.","noun:dose":"We used the dose.","noun:flesh":"The spirit is willing but the flesh is weak.","noun:implement":"We used the implement.","noun:marijuana":"The marijuana grows here.","noun:occupation":"The occupation started today.","noun:patch":"The patch is important.","noun:patience":"The patience is important.","noun:pollution":"The pollution is important.","noun:privilege":"The privilege is important.","noun:relative":"The relative is here.","noun:terrorist":"The terrorist is here.","noun:tourist":"The tourist is here.","noun:airline":"We used the airline.","noun:blade":"The blade grows here.","noun:buck":"We used the buck.","noun:cargo":"We used the cargo.","noun:census":"The census started today.","noun:confusion":"The confusion is important.","noun:corn":"That movie was pure corn.","noun:dealer":"The dealer is here.","noun:destiny":"We are helpless in the face of destiny.","noun:electronics":"The electronics is important.","noun:emphasis":"The red light gave the central figure increased emphasis.","noun:excitement":"He could hardly conceal his excitement when she agreed.","noun:exploration":"The exploration started today.","noun:filling":"An informal British term for `filling' is `stopping'.","noun:humor":"He was in a bad humor.","noun:insight":"The insight is important.","noun:nerve":"The doctor checked the nerve.","noun:nightmare":"The nightmare is important.","noun:pie":"We enjoyed the pie.","noun:poster":"We discussed the poster.","noun:raid":"The raid started today.","noun:ram":"We used the ram.","noun:ranking":"The ranking is important.","noun:scenario":"The scenario is France during the Reign of Terror.","noun:sheep":"We saw the sheep.","noun:taxi":"We used the taxi.","noun:tobacco":"We used the tobacco.","noun:trace":"We recorded the trace.","noun:weakness":"He has a weakness for chocolate.","noun:animation":"The animation is important.","noun:assignment":"The assignment started today.","noun:basement":"We used the basement.","noun:bias":"The bias is important.","noun:carpet":"We used the carpet.","noun:ceiling":"We used the ceiling.","noun:cherry":"The cherry grows here.","noun:chill":"The chill is important.","noun:clue":"We discussed the clue.","noun:collapse":"The roof is in danger of collapse.","noun:compound":"The compound is important.","noun:costume":"We used the costume.","noun:garbage":"The garbage was clean.","noun:grain":"He does not have a grain of sense.","noun:heating":"They have radiant heating.","noun:identification":"Identification of the gun was an important clue.","noun:lap":"His lap was covered with food stains.","noun:liver":"The doctor checked the liver.","noun:mixture":"The mixture was clean.","noun:oak":"The oak grows here.","noun:patent":"We discussed the patent.","noun:perception":"Luther had a new perception of the Bible.","noun:physician":"The physician is here.","noun:pupil":"The pupil is here.","noun:rifle":"We used the rifle.","noun:significance":"Do not underestimate the significance of nuclear power.","noun:soap":"We used the soap.","noun:spray":"The spray was clean.","noun:suite":"We discussed the suite.","noun:verse":"We discussed the verse.","noun:victor":"The victor is here.","noun:acre":"We recorded the acre.","noun:adoption":"The adoption started today.","noun:attendance":"Attendance was up by 50 per cent.","noun:aviation":"The aviation works together.","noun:barrel":"We used the barrel.","noun:chuck":"We enjoyed the chuck.","noun:cinema":"This story would be good cinema.","noun:compliance":"The compliance started today.","noun:contrary":"Public opinion to the contrary he is not guilty.","noun:couch":"We used the couch.","noun:crush":"The crush was clean.","noun:dam":"We used the dam.","noun:decrease":"The decrease is important.","noun:diabetes":"The diabetes is important.","noun:grammar":"The grammar is important.","noun:jam":"We enjoyed the jam.","noun:lease":"The lease has value.","noun:lens":"We used the lens.","noun:loyalty":"The loyalty is important.","noun:metre":"We recorded the metre.","noun:notion":"The notion is important.","noun:propaganda":"We discussed the propaganda.","noun:rat":"We saw the rat.","noun:scandal":"We discussed the scandal.","noun:tactic":"The tactic is important.","noun:treasure":"The treasure has value.","noun:trophy":"We discussed the trophy.","noun:acceptance":"The proposal found wide acceptance.","noun:ash":"The ash was clean.","noun:aunt":"The aunt is here.","noun:bubble":"The bubble is important.","noun:casino":"We used the casino.","noun:counsel":"The counsel is here.","noun:embrace":"The embrace started today.","noun:exhibit":"We discussed the exhibit.","noun:gentleman":"The gentleman is here.","noun:hammer":"We used the hammer.","noun:installation":"The telephone installation took only a few minutes.","noun:laying":"The laying is important.","noun:legislature":"The legislature works together.","noun:liability":"The liability is important.","noun:marathon":"The marathon started today.","noun:marvel":"The marvel is important.","noun:parade":"She made a parade of her sorrows.","noun:paradise":"We visited the paradise.","noun:presidency":"The presidency passed quickly.","noun:remark":"We discussed the remark.","noun:satisfaction":"She felt great satisfaction.","noun:scratch":"The scratch is important.","noun:shade":"It is much cooler in the shade.","noun:sunshine":"We observed the sunshine.","noun:yield":"The yield started today.","noun:admission":"The admission started today.","noun:bacon":"We enjoyed the bacon.","noun:barrier":"Intolerance is a barrier to understanding.","noun:burst":"The burst started today.","noun:casting":"We used the casting.","noun:cattle":"We saw the cattle.","noun:classroom":"We used the classroom.","noun:compromise":"The compromise started today.","noun:crop":"The crop grows here.","noun:earthquake":"The earthquake is important.","noun:harbor":"We visited the harbor.","noun:mathematics":"The mathematics is important.","noun:medication":"We used the medication.","noun:par":"Par for this course is 72.","noun:productivity":"The productivity is important.","noun:salad":"We enjoyed the salad.","noun:scholarship":"The scholarship has value.","noun:soup":"We enjoyed the soup.","noun:stake":"The stake has value.","noun:strain":"His responsibilities were a constant strain.","noun:tackle":"It takes a big man to play tackle.","noun:torture":"She felt great torture.","noun:vegetable":"We enjoyed the vegetable.","noun:violation":"The violation started today.","noun:workshop":"We used the workshop.","noun:accent":"He has a strong German accent.","noun:addiction":"Under Roman law addiction was the justification for slavery.","noun:beam":"We discussed the beam.","noun:bean":"We enjoyed the bean.","noun:binding":"The book had a leather binding.","noun:blank":"We discussed the blank.","noun:buffalo":"We saw the buffalo.","noun:conviction":"The conviction came as no surprise.","noun:cow":"`moo-cow' is a child's term.","noun:curve":"The curve is important.","noun:duration":"The ceremony was of short duration.","noun:grandmother":"The grandmother is here.","noun:horn":"We used the horn.","noun:hurry":"The hurry is important.","noun:inflation":"The inflation is important.","noun:ingredient":"We used the ingredient.","noun:intensity":"The intensity is important.","noun:inventory":"We discussed the inventory.","noun:invitation":"She was an invitation to trouble.","noun:lecture":"A good lecture was my father's idea of discipline.","noun:migration":"The migration started today.","noun:missile":"We used the missile.","noun:northwest":"We visited the northwest.","noun:organ":"The doctor checked the organ.","noun:patrol":"The patrol works together.","noun:pearl":"The pearl has value.","noun:peer":"The peer is here.","noun:pepper":"The pepper grows here.","noun:pig":"We saw the pig.","noun:pile":"The pile works together.","noun:provision":"We discussed the provision.","noun:rod":"We used the rod.","noun:stair":"We used the stair.","noun:sweat":"The cold glasses were streaked with sweat.","noun:thunder":"The thunder is important.","noun:tragedy":"The tragedy is important.","noun:trauma":"The trauma is important.","noun:zoo":"We used the zoo.","noun:accordance":"We discussed the accordance.","noun:arrow":"We discussed the arrow.","noun:bend":"The bend is important.","noun:cabin":"We used the cabin.","noun:cage":"We used the cage.","noun:closet":"We used the closet.","noun:consciousness":"The consciousness is important.","noun:consultant":"The consultant is here.","noun:controller":"The controller is here.","noun:courtesy":"The courtesy started today.","noun:disc":"We used the disc.","noun:embassy":"We used the embassy.","noun:goodness":"The goodness is important.","noun:guilt":"The guilt is important.","noun:helicopter":"We used the helicopter.","noun:miracle":"The miracle is important.","noun:mud":"The mud was clean.","noun:phenomenon":"The phenomenon is important.","noun:profession":"The profession works together.","noun:prospect":"The prospect is important.","noun:publisher":"The publisher works together.","noun:separation":"The separation is important.","noun:ski":"We used the ski.","noun:surgeon":"The surgeon is here.","noun:theft":"The theft started today.","noun:appreciation":"The appreciation is important.","noun:banner":"We used the banner.","noun:brad":"We used the brad.","noun:charm":"Inscribed around its base is a charm in Balinese.","noun:colony":"The colony works together.","noun:cookie":"We enjoyed the cookie.","noun:curriculum":"We discussed the curriculum.","noun:deadline":"The deadline passed quickly.","noun:deer":"We saw the deer.","noun:dive":"We used the dive.","noun:entity":"The entity is important.","noun:feminist":"The feminist is here.","noun:ham":"We enjoyed the ham.","noun:interface":"We used the interface.","noun:jewelry":"We used the jewelry.","noun:jungle":"We visited the jungle.","noun:pursuit":"The pursuit started today.","noun:rap":"It was a bum rap.","noun:reminder":"We discussed the reminder.","noun:resume":"We discussed the resume.","noun:ridge":"The ridge is important.","noun:scholar":"The scholar is here.","noun:variable":"The weather is one variable to be considered.","noun:ace":"We recorded the ace.","noun:attraction":"We observed the attraction.","noun:bankruptcy":"The company had to declare bankruptcy.","noun:capability":"The capability is important.","noun:drum":"We used the drum.","noun:freeze":"The freeze is important.","noun:grandma":"The grandma is here.","noun:grip":"He has a strong grip for an old man.","noun:handful":"Only a handful of responses were received.","noun:harmony":"The harmony is important.","noun:hybrid":"We discussed the hybrid.","noun:keyboard":"We used the keyboard.","noun:mixing":"The mixing started today.","noun:noon":"The noon passed quickly.","noun:potato":"We enjoyed the potato.","noun:preference":"My own preference is for good literature.","noun:proportion":"A dry martini has a large proportion of gin.","noun:rage":"It was all the rage that season.","noun:restoration":"The restoration passed quickly.","noun:silk":"We used the silk.","noun:stamp":"More men of his stamp are needed.","noun:throne":"We used the throne.","noun:urge":"The urge is important.","noun:witch":"The witch is here.","noun:archive":"We used the archive.","noun:array":"It was a bewildering array of books.","noun:belly":"The doctor checked the belly.","noun:booth":"We used the booth.","noun:breakdown":"There was a power breakdown.","noun:citizenship":"The citizenship is important.","noun:cliff":"The cliff is important.","noun:consensus":"The consensus is important.","noun:declaration":"We discussed the declaration.","noun:derby":"We used the derby.","noun:distinction":"The distinction is important.","noun:donation":"The donation has value.","noun:hunger":"The hunger is important.","noun:import":"The import of his announcement was ambiguous.","noun:jurisdiction":"The jurisdiction is important."};
        const WORD_TYPE_LABELS = { verb: '动词', noun: '名词' };

        // ================================================================
        //  核心状态
        // ================================================================
        const progressCache = {};
        let practiceReady = false;
        const state = {
            activeType: 'verb',
            soundEnabled: false,
            words: [],
            questions: [],
            currentIndex: 0,
            errorWords: [],
            isReviewMode: false,
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

        // 干扰项生成：不是简单随机抽错答案，而是优先寻找“意思容易混淆”的词。
        // 目标是正常难度：三个错误选项都应该有一定迷惑性，但不能和正确答案几乎同义到无法判断。
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

        function englishSimilarity(a, b) {
            const enA = (a.en || '').toLowerCase();
            const enB = (b.en || '').toLowerCase();
            let prefix = 0;
            while (prefix < Math.min(enA.length, enB.length) && enA[prefix] === enB[prefix]) prefix++;

            let suffix = 0;
            while (suffix < Math.min(enA.length, enB.length) &&
                   enA[enA.length - 1 - suffix] === enB[enB.length - 1 - suffix] && suffix < 4) suffix++;

            const aStem = enA.replace(/(ing|ed|es|s)$/i, '');
            const bStem = enB.replace(/(ing|ed|es|s)$/i, '');
            const stem = aStem === bStem ? 12 : 0;
            const lenBonus = Math.max(0, 4 - Math.abs(enA.length - enB.length));

            return Math.min(prefix, 4) * 2 + suffix + stem + lenBonus;
        }

        function distractorScore(correctWord, candidateWord) {
            const cnA = correctWord.cn || '';
            const cnB = candidateWord.cn || '';
            const semantic = chineseMeaningSimilarity(cnA, cnB);
            const lexical = englishSimilarity(correctWord, candidateWord);
            const lenA = cnTerms(cnA).join('').length;
            const lenB = cnTerms(cnB).join('').length;
            const lenBonus = Math.max(0, 4 - Math.abs(lenA - lenB));
            const samePunctuation = /[；;，,]/.test(cnA) === /[；;，,]/.test(cnB) ? 2 : 0;

            // 中文意义相近是第一优先级；英文拼写相似只作为辅助。
            return semantic * 3 + lexical + lenBonus + samePunctuation;
        }

        function hasNounMeaningConflict(a, b) {
            const termsA = cnTerms(a);
            const termsB = cnTerms(b);
            return termsA.some(x => termsB.some(y =>
                x === y || (x.length >= 2 && y.length >= 2 && (x.includes(y) || y.includes(x)))
            ));
        }

        const NOUN_CATEGORY_OVERRIDES = {
            time: '时间', person: '人物与社会', world: '地点与环境',
            group: '群体与组织', food: '饮食', way: '思维与学习',
            number: '数量与度量', system: '物品与科技'
        };

        // 每一个干扰项都来自 NOUNS_DATA 中的真实英文词条。
        // 高频易混词先进入专门组，其余名词再按场景、难度和词频匹配。
        const NOUN_PRIORITY_POOLS = {
            way: ['reason', 'result', 'chance']
        };
        const NOUN_CONFUSION_GROUPS = [
            ['way', 'reason', 'result', 'chance', 'cause', 'effect', 'problem', 'solution'],
            ['idea', 'thought', 'opinion', 'fact', 'question', 'answer', 'knowledge', 'belief'],
            ['choice', 'plan', 'goal', 'purpose', 'method', 'opportunity', 'decision', 'option'],
            ['value', 'quality', 'amount', 'number', 'level', 'kind', 'form', 'type'],
            ['system', 'process', 'change', 'growth', 'development', 'progress', 'success', 'failure'],
            ['risk', 'benefit', 'cost', 'price', 'profit', 'loss', 'income', 'value'],
            ['time', 'year', 'month', 'week', 'day', 'hour', 'minute', 'morning', 'night'],
            ['person', 'man', 'woman', 'child', 'friend', 'member', 'student', 'teacher', 'parent'],
            ['family', 'team', 'group', 'company', 'community', 'government', 'organization', 'society'],
            ['home', 'house', 'room', 'office', 'school', 'city', 'country', 'area', 'place'],
            ['book', 'story', 'news', 'report', 'information', 'message', 'word', 'language', 'article'],
            ['school', 'class', 'course', 'education', 'study', 'research', 'test', 'student', 'teacher'],
            ['body', 'head', 'face', 'hand', 'heart', 'back', 'arm', 'leg', 'brain'],
            ['health', 'life', 'death', 'disease', 'pain', 'care', 'treatment', 'medicine'],
            ['love', 'hope', 'fear', 'anger', 'joy', 'feeling', 'trust', 'interest'],
            ['water', 'air', 'fire', 'earth', 'light', 'weather', 'climate', 'energy'],
            ['food', 'meal', 'bread', 'meat', 'fruit', 'drink', 'coffee', 'water'],
            ['law', 'court', 'police', 'crime', 'right', 'rule', 'government', 'policy'],
            ['music', 'art', 'film', 'video', 'game', 'show', 'play', 'picture'],
            ['car', 'phone', 'computer', 'machine', 'building', 'book', 'table', 'door']
        ];

        const NOUN_CONFUSION_INDEX = new Map();
        NOUN_CONFUSION_GROUPS.forEach(group => group.forEach(word => {
            if (!NOUN_CONFUSION_INDEX.has(word)) NOUN_CONFUSION_INDEX.set(word, new Set());
            group.forEach(candidate => { if (candidate !== word) NOUN_CONFUSION_INDEX.get(word).add(candidate); });
        }));

        function preferredNounWords(word) {
            if (NOUN_PRIORITY_POOLS[word.en]) return new Set(NOUN_PRIORITY_POOLS[word.en]);
            return NOUN_CONFUSION_INDEX.get(word.en) || null;
        }

        function effectiveNounCategory(word) {
            return NOUN_CATEGORY_OVERRIDES[word.en] || word.category || '';
        }

        function nounDistractorScore(correctWord, candidateWord) {
            const sameCategory = effectiveNounCategory(correctWord) === effectiveNounCategory(candidateWord) ? 120 : 0;
            const sameLevel = correctWord.level === candidateWord.level ? 34 : 0;
            const frequencyGap = Math.abs((correctWord.frequency || 0) - (candidateWord.frequency || 0));
            const frequencyFit = Math.max(0, 28 - frequencyGap * 24);
            const rankGap = Math.abs((correctWord.rank || 0) - (candidateWord.rank || 0));
            const rankFit = Math.max(0, 18 - rankGap / 250);
            const lenA = cnTerms(correctWord.cn).join('').length;
            const lenB = cnTerms(candidateWord.cn).join('').length;
            const lengthFit = Math.max(0, 8 - Math.abs(lenA - lenB));
            return sameCategory + sameLevel + frequencyFit + rankFit + lengthFit;
        }

        function getDistractors(correctWord, allWords, count = 3) {
            let sourceWords = allWords;
            if (correctWord.pos === 'noun') {
                const preferred = preferredNounWords(correctWord);
                if (preferred) {
                    const preferredWords = allWords.filter(w => preferred.has(w.en));
                    if (preferredWords.length >= count) sourceWords = preferredWords;
                }
            }
            const candidates = sourceWords
                .filter(w => w.en !== correctWord.en && w.cn !== correctWord.cn)
                .filter(w => correctWord.pos !== 'noun' || !hasNounMeaningConflict(correctWord.cn, w.cn))
                .map(w => ({
                    word: w,
                    score: correctWord.pos === 'noun'
                        ? nounDistractorScore(correctWord, w)
                        : distractorScore(correctWord, w)
                }));

            // 优先从高相似度候选中选择，避免出现“电脑 / 跑步 / 天气”这种一眼可排除的答案。
            candidates.sort((a, b) => b.score - a.score || Math.random() - 0.5);

            const strongThreshold = correctWord.pos === 'noun' ? 105 : 12;
            const strongPool = candidates.filter(x => x.score >= strongThreshold);
            const pool = strongPool.length >= count ? strongPool : candidates;
            const preferredPoolSize = correctWord.pos === 'noun' ? 18 : 24;
            const topPoolSize = Math.min(pool.length, Math.max(preferredPoolSize, count * 12));
            const unique = [];
            const usedMeanings = new Set([correctWord.cn.trim()]);
            for (const item of shuffle(pool.slice(0, topPoolSize))) {
                const meaning = item.word.cn.trim();
                if (!meaning || usedMeanings.has(meaning)) continue;
                usedMeanings.add(meaning);
                unique.push(meaning);
                if (unique.length === count) break;
            }
            // 极端情况下从完整词库补齐，但依然保证选项文字不重复。
            if (unique.length < count) {
                for (const item of shuffle(candidates)) {
                    const meaning = item.word.cn.trim();
                    if (!meaning || usedMeanings.has(meaning)) continue;
                    usedMeanings.add(meaning);
                    unique.push(meaning);
                    if (unique.length === count) break;
                }
            }
            return unique;
        }

        function generateOptions(correctWord, allWords) {
            const distractors = getDistractors(correctWord, allWords, 3);
            const opts = [correctWord.cn, ...distractors];
            while (opts.length < 4) opts.push('——');
            return shuffle(opts);
        }

        // ---------- 本地 Cookie 持久化 ----------
        function storageKey() { return `vocab_mcq_state_v4_${state.activeType}`; }
        function errorCookieKey() { return `vocab_mcq_errors_v4_${state.activeType}`; }
        const COOKIE_DAYS = 30;

        // 所有学习进度都保存到 Cookie，默认保留 30 天。
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
            if (!practiceReady || !state.words.length) return;

            const indexMap = new Map(state.words.map((w, i) => [w.en, i]));
            const saved = loadLocalState();
            const correct = saved ? decodeBits(saved.c, state.words.length) : state.words.map(() => false);
            const wrong = saved ? decodeBits(saved.w, state.words.length) : state.words.map(() => false);

            // 错题集合单独维护：正常答对不会误删历史错题；
            // 只有在“错题本”中重新答对时，才从错题本移除。
            const errorSet = new Set(state.errorWords.map(w => w.en));
            const errorBits = state.words.map(w => errorSet.has(w.en));

            state.questions.forEach(q => {
                const i = indexMap.get(q.en);
                if (i === undefined || q.result === null) return;

                if (!state.isReviewMode) {
                    // 普通练习：记录答题结果；若答错则加入错题本。
                    if (q.result === 'correct') {
                        correct[i] = true;
                        wrong[i] = false;
                    } else if (q.result === 'wrong') {
                        correct[i] = false;
                        wrong[i] = true;
                    }
                }
            });

            // 以 errorBits 为唯一来源重建错题集合，避免刷新后丢失。
            state.errorWords = state.words.filter((_, i) => errorBits[i]);

            const payload = {
                v: 4,
                n: state.words.length,
                first: state.words[0].en,
                last: state.words[state.words.length - 1].en,
                c: encodeBits(correct),
                w: encodeBits(wrong),
                e: encodeBits(errorBits),
                // 当前模式只用于恢复页面位置；错题数据本身独立保存。
                mode: state.isReviewMode,
                idx: state.currentIndex,
                savedAt: Date.now()
            };

            payload.questions = state.questions.map(q => ({ ...q, options: q.options ? [...q.options] : null }));
            progressCache[state.activeType] = payload;
            window.MemWordsAccount?.saveProgress(state.activeType, payload);
        }
        function readLegacyState() {
            const raw = cookieGet(storageKey());
            let p = null;
            if (raw) {
                try {
                    p = JSON.parse(raw);
                } catch (_) {
                    p = null;
                }
            }

            // 如果主 Cookie 正常存在但版本是旧版，兼容读取 v2。
            if (!p && state.activeType === 'verb') {
                const legacyRaw = cookieGet('vocab_mcq_state_v3') || cookieGet('vocab_mcq_state_v2');
                if (legacyRaw) {
                    try { p = JSON.parse(legacyRaw); } catch (_) { p = null; }
                }
            }

            if (!p || (p.v !== 3 && p.v !== 2) || p.n !== state.words.length ||
                p.first !== state.words[0].en || p.last !== state.words[state.words.length - 1].en) {
                return null;
            }

            // 独立错题 Cookie 优先；这样刷新/切换模式都不会把错题清空。
            const errorRaw = cookieGet(errorCookieKey()) ||
                (state.activeType === 'verb' ? cookieGet('vocab_mcq_errors_v3') : null);
            if (errorRaw) p.e = errorRaw;
            return p;
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
            if (saved.v === 4) {
                const errors = decodeBits(saved.e, state.words.length);
                state.errorWords = state.words.filter((_, i) => errors[i]);
                state.isReviewMode = !!saved.mode;
                state.questions = saved.questions.map(q => ({ ...q, options: q.options ? [...q.options] : null }));
                state.currentIndex = Math.min(Math.max(0, saved.idx), Math.max(0, state.questions.length - 1));
                return true;
            }
            const correct = decodeBits(saved.c, state.words.length);
            const wrong = decodeBits(saved.w, state.words.length);
            const errors = decodeBits(saved.e, state.words.length);
            state.errorWords = state.words.filter((_, i) => errors[i]);
            state.isReviewMode = !!saved.mode && state.errorWords.length > 0;
            let pool = state.isReviewMode ? [...state.errorWords] : [...state.words];
            state.questions = buildQuestions(pool, state.words);
            // 错题本进入“重新复习”状态时必须允许再次作答，而不是沿用上次的锁定状态。
            if (!state.isReviewMode) {
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
            if (!state.isReviewMode) {
                const completedCount = correct.reduce((sum, v, i) => sum + (v || wrong[i] ? 1 : 0), 0);
                state.currentIndex = Math.min(completedCount, Math.max(0, state.questions.length - 1));
            } else {
                state.currentIndex = Math.min(Number(saved.idx) || 0, Math.max(0, state.questions.length - 1));
            }
            return true;
        }

        function initPractice() {
            if (!state.dataLoaded || state.words.length === 0) {
                renderEmptyState();
                return;
            }

            // 普通练习不随机：始终按照 Word 文件去重后的原始顺序。
            let pool = [...state.words];

            if (state.isReviewMode && state.errorWords.length > 0) {
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

            if (state.isReviewMode) {
                // 错题本从第一道错题开始复习。
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
            saveLocalState();
            window.MemWordsAccount?.saveSettings();
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
            if (state.isReviewMode && state.questions.every(item => item.result !== null)) {
                statusEl.textContent = '🎉 错题复习完成';
                statusEl.className = 'q-status answered';
            } else if (q.result === 'correct') {
                statusEl.textContent = '✅ 回答正确';
                statusEl.className = 'q-status answered';
            } else if (q.result === 'wrong') {
                statusEl.textContent = '❌ 回答错误';
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
                        <div class="${cls}" data-opt="${escapeHTML(opt)}" data-index="${i}">
                            <span class="label">${labels[i]}</span>
                            <span class="text">${escapeHTML(opt)}</span>
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
            window.MemWordsAccount?.saveSettings();
            updateSoundButton();
            if (state.soundEnabled) speakCurrentWord();
            else if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        }

        function handleAnswer(selected) {
            const q = state.questions[state.currentIndex];
            if (q.result !== null) return;

            q.userAnswer = selected;
            if (selected === q.cn) {
                q.result = 'correct';
                // 错题复习时答对，自动从错题本移除。
                if (state.isReviewMode) state.errorWords = state.errorWords.filter(w => w.en !== q.en);
                showAnswerToast('✅ 回答正确');
            } else {
                q.result = 'wrong';
                const wordObj = state.words.find(w => w.en === q.en);
                if (wordObj && !state.errorWords.some(w => w.en === q.en)) state.errorWords.push(wordObj);
                showAnswerToast('❌ 回答错误，正确答案已标出', true);
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
            clearTimeout(autoNextTimer);
            if (state.words.length === 0) {
                alert('请先导入单词数据！');
                return;
            }
            if (confirm('确定要重置当前词类的全部进度和错题吗？此操作将同步到云端。')) {
                state.errorWords = [];
                state.isReviewMode = false;
                state.questions = [];
                delete progressCache[state.activeType];
                initPractice();
                saveLocalState();
            }
        }

        // ================================================================
        //  错题本切换
        // ================================================================
        function toggleErrorBook() {
            clearTimeout(autoNextTimer);
            if (!state.dataLoaded || state.words.length === 0) {
                alert('请先导入单词数据！');
                return;
            }
            state.isReviewMode = !state.isReviewMode;
            if (state.isReviewMode && state.errorWords.length === 0) {
                alert('错题本为空，请先做题积累错题！');
                state.isReviewMode = false;
                return;
            }
            initPractice();
            updateErrorBookUI();
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
            if (!practiceReady || e.target.closest('input, textarea, select, [contenteditable], dialog')) return;
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        });

        // ================================================================
        //  启动
        // ================================================================
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('prevBtn').addEventListener('click', goToPrev);
            document.getElementById('nextBtn').addEventListener('click', goToNext);
            document.getElementById('resetBtn').addEventListener('click', resetAll);
            document.getElementById('errorBookBtn').addEventListener('click', toggleErrorBook);
            document.getElementById('gridToggle').addEventListener('click', toggleGrid);
            document.getElementById('wordTypeSelect').addEventListener('change', (event) => switchWordType(event.target.value));
            document.getElementById('speakWordBtn').addEventListener('click', speakCurrentWord);
            document.getElementById('soundToggle').addEventListener('click', toggleSound);

            updateSoundButton();

            // 直接加载内置数据
            renderEmptyState();
        });

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function loadLocalState() { return progressCache[state.activeType] || null; }
window.Practice = {
    types: Object.keys(WORD_SETS),
    get settings() { return { sound_enabled: state.soundEnabled, active_type: state.activeType }; },
    get ready() { return practiceReady; },
    save: saveLocalState,
    clear() {
        practiceReady = false;
        clearTimeout(autoNextTimer);
        window.speechSynthesis?.cancel();
        for (const key of Object.keys(progressCache)) delete progressCache[key];
        Object.assign(state, { activeType: 'verb', soundEnabled: false, words: [], questions: [], currentIndex: 0, errorWords: [], isReviewMode: false, dataLoaded: false });
        renderEmptyState();
        updateSoundButton();
    },
    validate(type, p) {
        const words = WORD_SETS[type];
        if (!words || !p || ![2,3,4].includes(p.v) || p.n !== words.length || p.first !== words[0].en || p.last !== words.at(-1).en) return false;
        if (p.v !== 4) return true;
        const catalog = new Map(words.map(w => [w.en, w.cn]));
        return Number.isInteger(p.idx) && p.idx >= 0 && Array.isArray(p.questions) && p.questions.length > 0 && p.questions.length <= words.length &&
            new Set(p.questions.map(q => q.en)).size === p.questions.length &&
            p.questions.every(q => q && catalog.get(q.en) === q.cn && [null,'correct','wrong'].includes(q.result) &&
                (q.userAnswer === null || typeof q.userAnswer === 'string') &&
                (q.options === null || (Array.isArray(q.options) && q.options.length === 4 && q.options.every(o => typeof o === 'string' && o.length < 2000))));
    },
    legacy() {
        const previous = { ...state };
        const result = {};
        for (const type of Object.keys(WORD_SETS)) {
            state.activeType = type;
            state.words = WORD_SETS[type];
            const p = readLegacyState();
            if (p) result[type] = p;
        }
        Object.assign(state, previous);
        return result;
    },
    start(snapshots, settings) {
        this.clear();
        for (const [type, p] of Object.entries(snapshots)) {
            if (!this.validate(type, p)) throw new Error('云端进度格式不兼容，请联系维护者，原记录未被覆盖。');
            progressCache[type] = structuredClone(p);
        }
        state.activeType = WORD_SETS[settings.active_type] ? settings.active_type : 'verb';
        state.soundEnabled = settings.sound_enabled === true;
        document.getElementById('wordTypeSelect').value = state.activeType;
        updateSoundButton();
        loadWordsData(WORD_SETS[state.activeType]);
        practiceReady = true;
        saveLocalState();
    }
};
