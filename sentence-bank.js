// 每行一道独立题目：成分:短语 | 成分:短语 # 中文。
// 按主句层级标记；分组说明用于解释该组共同考查的句法结构。
function extendSentenceBank(bank) {
  const base = {
    S: '是句子陈述的主体，整个名词短语作主语，包含内部的限定词和修饰语。',
    V: '构成谓语；助动词、情态动词和否定词与实义动词一起标记。',
    O: '是谓语动作所涉及的对象，整体作宾语。',
    C: '补充说明主语的性质或身份，作表语；系动词本身归入 V。',
    A: '说明动作发生的时间、地点、方式、原因或目的，整体作状语。',
    IO: '表示接受事物的人，作间接宾语。',
    DO: '表示被给予、传递或告知的事物，作直接宾语。'
  };
  function add(level, tip, explanations, source) {
    source.trim().split('\n').filter(Boolean).forEach(line => {
      const [structure, zh] = line.split('#').map(s => s.trim());
      const parts = structure.split('|').map(piece => {
        const colon = piece.indexOf(':');
        const role = piece.slice(0, colon).trim(), phrase = piece.slice(colon + 1).trim();
        return [role, phrase, `“${phrase}”${explanations[role] || base[role]}`];
      });
      bank[level].items.push({parts, zh, tip});
    });
  }

  add(0, '主谓结构：有些动词不需要宾语，句子也能表达完整意思。', {V:'是不及物动词，独立构成谓语，后面不需要宾语。'}, `
S:The baby | V:smiled. # 宝宝笑了。
S:The sun | V:rose. # 太阳升起来了。
S:My phone | V:rang. # 我的手机响了。
S:The audience | V:laughed. # 观众笑了。
S:The leaves | V:fell. # 叶子落了。
S:The children | V:cheered. # 孩子们欢呼起来。
S:An accident | V:happened. # 一起事故发生了。
S:The snow | V:melted. # 雪融化了。
`);
  add(0, '主谓宾结构：找出动作的执行者、动作和动作对象。', {}, `
S:Emma | V:likes | O:music. # 艾玛喜欢音乐。
S:My father | V:cooks | O:dinner. # 我爸爸做晚饭。
S:The dog | V:chased | O:a ball. # 那只狗追逐一个球。
S:We | V:need | O:some water. # 我们需要一些水。
S:Jack | V:opened | O:the window. # 杰克打开了窗户。
S:Her sister | V:wears | O:glasses. # 她姐姐戴眼镜。
S:The farmer | V:grows | O:vegetables. # 那位农民种蔬菜。
S:I | V:forgot | O:my keys. # 我忘了带钥匙。
`);
  add(0, '主系表结构：表语描述主语，不能把它当作动作的宾语。', {V:'在本句中是系动词，连接主语和描述主语的表语。'}, `
S:The sky | V:is | C:blue. # 天空是蓝色的。
S:My aunt | V:is | C:a doctor. # 我姑姑是一名医生。
S:The children | V:seem | C:happy. # 孩子们似乎很开心。
S:This cake | V:tastes | C:sweet. # 这块蛋糕尝起来很甜。
S:The weather | V:became | C:cold. # 天气变冷了。
S:Your idea | V:sounds | C:great. # 你的想法听起来很棒。
S:The towel | V:feels | C:soft. # 这条毛巾摸起来很柔软。
S:He | V:looks | C:tired. # 他看起来很累。
`);
  add(0, '留意时间和地点状语，状语可以出现在句首或句末。', {}, `
S:The bus | V:arrived | A:at noon. # 公交车中午到了。
A:Yesterday, | S:Lucy | V:visited | O:her grandmother. # 昨天，露西看望了奶奶。
S:The cat | V:sleeps | A:on the sofa. # 猫在沙发上睡觉。
S:We | V:walk | A:to school. # 我们步行去学校。
S:Ben | V:plays | O:tennis | A:on Sundays. # 本每逢周日打网球。
A:At night, | S:the stars | V:shine. # 夜晚，星星闪烁。
S:My parents | V:work | A:in a hospital. # 我父母在医院工作。
S:The boy | V:closed | O:the door | A:quietly. # 男孩轻轻关上了门。
`);
  add(0, '情态动词、助动词和否定词都归入完整谓语 V。', {}, `
S:I | V:can swim. # 我会游泳。
S:She | V:does not eat | O:meat. # 她不吃肉。
S:You | V:must wear | O:a seat belt. # 你必须系安全带。
S:They | V:will arrive | A:tomorrow. # 他们明天会到。
S:My brother | V:cannot drive. # 我哥哥不会开车。
S:We | V:should help | O:our neighbors. # 我们应该帮助邻居。
S:The shop | V:does not open | A:on Mondays. # 这家店周一不开门。
S:It | V:may rain | A:tonight. # 今晚可能下雨。
`);
  add(0, '进行时中的 be 和动词的 -ing 形式一起构成谓语。', {}, `
S:The birds | V:are flying. # 鸟儿正在飞翔。
S:Anna | V:is drinking | O:tea. # 安娜正在喝茶。
S:We | V:are watching | O:a film. # 我们正在看一部电影。
S:The baby | V:is sleeping | A:upstairs. # 宝宝正在楼上睡觉。
S:My mother | V:was washing | O:the dishes. # 我妈妈当时正在洗碗。
S:The students | V:are drawing | O:pictures. # 学生们正在画画。
S:The wind | V:is blowing | A:hard. # 风正猛烈地吹着。
S:He | V:was reading | O:a newspaper. # 他当时正在读报纸。
`);
  add(0, '区分名词短语和状语：修饰名词的词随名词整体归类。', {}, `
S:Two small rabbits | V:ate | O:a carrot. # 两只小兔子吃了一根胡萝卜。
S:This old bridge | V:is | C:beautiful. # 这座古桥很美。
S:Our new teacher | V:speaks | O:French. # 我们的新老师说法语。
S:A tall man | V:knocked | A:at the door. # 一个高个子男人敲了门。
S:The red train | V:stopped | A:suddenly. # 那列红色火车突然停了下来。
S:My best friend | V:bought | O:a bicycle. # 我最好的朋友买了一辆自行车。
S:These fresh flowers | V:smell | C:wonderful. # 这些鲜花闻起来很香。
S:A young musician | V:played | O:the piano | A:beautifully. # 一位年轻音乐家优美地弹奏了钢琴。
`);

  add(1, '双宾语：IO 是接受者，DO 是所给予或传递的内容。疑问句中 Could 与 lend 都标为 V。', {}, `
S:My grandmother | V:told | IO:me | DO:a funny story. # 奶奶给我讲了一个有趣的故事。
S:Oliver | V:sent | IO:his parents | DO:a postcard. # 奥利弗给父母寄了一张明信片。
S:The waiter | V:brought | IO:us | DO:two cups of coffee. # 服务员给我们端来了两杯咖啡。
S:She | V:taught | IO:the children | DO:a new song. # 她教了孩子们一首新歌。
S:My uncle | V:bought | IO:me | DO:a warm jacket. # 叔叔给我买了一件暖和的夹克。
S:The guide | V:showed | IO:the visitors | DO:an ancient map. # 导游给游客们看了一张古代地图。
V:Could | S:you | V:lend | IO:me | DO:your umbrella? # 你能把雨伞借给我吗？
S:The company | V:offered | IO:her | DO:a better job. # 公司给她提供了一份更好的工作。
`);
  add(1, '宾语补足语 C 描述宾语的状态或身份，与宾语 O 分开标记。', {C:'补充说明前面宾语的状态或身份，作宾语补足语，并非另一个宾语。'}, `
S:The news | V:made | O:us | C:excited. # 这个消息让我们很兴奋。
S:The volunteers | V:kept | O:the room | C:clean. # 志愿者们让房间保持整洁。
S:We | V:found | O:the museum | C:closed. # 我们发现博物馆关门了。
S:The team | V:elected | O:Maria | C:captain. # 队员们选玛丽亚当队长。
S:His friends | V:call | O:him | C:Max. # 他的朋友们叫他麦克斯。
S:The warm sun | V:kept | O:the hikers | C:comfortable. # 温暖的阳光让徒步者感到舒适。
S:They | V:consider | O:the plan | C:too risky. # 他们认为这个计划风险太大。
S:The loud noise | V:drove | O:the dog | C:crazy. # 巨大的噪音让那只狗烦躁不安。
`);
  add(1, '动词后的非谓语短语可以作宾语补足语；整个短语标为 C。', {C:'是非谓语短语，说明宾语要做或正在做的动作，整体作宾语补足语。'}, `
S:The coach | V:asked | O:the players | C:to run faster. # 教练要求队员们跑得更快。
S:My parents | V:allow | O:me | C:to travel alone. # 父母允许我独自旅行。
S:We | V:heard | O:someone | C:singing downstairs. # 我们听到有人正在楼下唱歌。
S:She | V:watched | O:the children | C:cross the road. # 她看着孩子们穿过马路。
S:The teacher | V:encouraged | O:us | C:to ask questions. # 老师鼓励我们提问。
S:His joke | V:made | O:everyone | C:laugh. # 他的笑话让大家都笑了。
S:I | V:want | O:you | C:to stay here. # 我想让你留在这里。
S:The guard | V:noticed | O:a stranger | C:waiting near the gate. # 保安注意到一个陌生人正在大门附近等候。
`);
  add(1, '被动语态的 be 与过去分词整体标为 V；by 短语在本练习中归为 A。', {V:'含有被动语态的助动词和过去分词，整体构成谓语。',A:'说明时间、地点或动作执行者；被动句中的 by 短语在本练习中归为状语。'}, `
S:The bridge | V:was built | A:in 1998. # 这座桥建于1998年。
S:The letters | V:are delivered | A:every morning. # 信件每天早上投递。
S:This song | V:was written | A:by a young singer. # 这首歌由一位年轻歌手创作。
S:The broken window | V:has been repaired. # 破损的窗户已经修好了。
S:The meeting | V:will be held | A:in the main hall. # 会议将在大厅举行。
S:The rooms | V:are being cleaned | A:now. # 房间现在正在打扫。
S:All the tickets | V:had been sold | A:by Friday. # 到周五时，所有票都已售出。
S:This medicine | V:must be stored | A:in a cool place. # 这种药必须存放在阴凉处。
`);
  add(1, '本练习将短语动词及其小品词或固定介词整体标为 V。', {V:'是本句的完整短语动词，固定搭配中的小品词或介词一并归入 V。'}, `
S:She | V:looks after | O:her little brother. # 她照顾弟弟。
S:We | V:ran out of | O:milk. # 我们的牛奶用完了。
S:The students | V:handed in | O:their homework. # 学生们交了作业。
S:He | V:gave up | O:smoking. # 他戒烟了。
S:I | V:am looking for | O:my glasses. # 我正在找眼镜。
S:They | V:put off | O:the meeting. # 他们推迟了会议。
S:The engineer | V:figured out | O:the problem. # 工程师弄清了问题。
S:We | V:look forward to | O:the summer holiday. # 我们期待暑假。
`);
  add(1, '动名词或不定式可以整体作宾语；不要把它们拆成第二个谓语。', {O:'是动名词或不定式短语，整体充当谓语的宾语；内部的动作对象也一并归入 O。'}, `
S:She | V:enjoys | O:reading mystery novels. # 她喜欢读悬疑小说。
S:We | V:decided | O:to leave early. # 我们决定早点离开。
S:He | V:avoided | O:answering the question. # 他避免回答那个问题。
S:They | V:hope | O:to visit the island. # 他们希望游览那座岛。
S:My sister | V:finished | O:writing her report. # 我姐姐写完了报告。
S:I | V:promised | O:to return the book. # 我答应归还那本书。
S:The child | V:practiced | O:tying his shoes. # 那个孩子练习系鞋带。
S:The driver | V:refused | O:to stop the car. # 司机拒绝停车。
`);
  add(1, '留意完成时、插入的状语以及带修饰语的名词短语。', {}, `
S:The girl with curly hair | V:has won | O:the first prize. # 那个卷发女孩获得了一等奖。
A:During the storm, | S:the old house | V:shook | A:violently. # 暴风雨中，那座老房子剧烈摇晃。
S:Our neighbors | V:have lived | A:in this village | A:for twenty years. # 我们的邻居在这个村庄住了二十年。
S:The man near the entrance | V:is carrying | O:a large wooden box. # 入口附近的男人正搬着一个大木箱。
A:Without a word, | S:the visitor | V:left | O:the office. # 来访者一言不发地离开了办公室。
S:The little boy | V:has never seen | O:such a huge ship. # 那个小男孩从未见过这么大的船。
S:The road through the mountains | V:became | C:extremely dangerous. # 穿过群山的那条路变得极其危险。
A:By the end of the day, | S:the workers | V:had completed | O:the repairs. # 到那天结束时，工人们已经完成了维修。
`);

  add(2, '状语从句整体归为 A；不要再拆分从句内部的主谓宾。', {A:'是完整的状语从句，在主句中说明时间、原因、条件、让步或方式；引导词一起归入 A。'}, `
A:When the bell rang, | S:the students | V:closed | O:their books. # 铃响时，学生们合上了书。
S:We | V:postponed | O:the trip | A:because the roads were icy. # 因为道路结冰，我们推迟了旅行。
A:If you follow the instructions, | S:the machine | V:will work | A:properly. # 如果你遵照说明操作，机器就会正常运转。
A:Unless the weather improves, | S:we | V:will cancel | O:the picnic. # 除非天气好转，否则我们将取消野餐。
S:She | V:continued | O:her work | A:while everyone else was resting. # 别人都在休息时，她还在继续工作。
A:Before you make a decision, | S:you | V:should consider | O:the risks. # 在作决定之前，你应该考虑风险。
A:Even though he was exhausted, | S:he | V:finished | O:the race. # 尽管精疲力竭，他还是跑完了比赛。
S:The chef | V:prepared | O:the dish | A:as his grandmother had taught him. # 厨师按照祖母教他的方法做了这道菜。
`);
  add(2, '定语从句随它修饰的名词短语整体归类。', {S:'在主句中作主语；修饰主语中心词的定语从句与中心词整体标记。',O:'在主句中作宾语；修饰宾语中心词的定语从句与中心词整体标记。'}, `
S:The woman who lives next door | V:runs | O:a small bakery. # 住在隔壁的女士经营一家小面包店。
S:The house where I grew up | V:has been sold. # 我长大的那所房子已经被卖掉了。
S:The scientist whose research won the award | V:is | C:my former teacher. # 研究成果获奖的那位科学家是我以前的老师。
S:The reason why he left | V:remains | C:a mystery. # 他离开的原因仍是个谜。
S:The photos that were taken last summer | V:look | C:amazing. # 去年夏天拍的那些照片看起来很棒。
S:I | V:remember | O:the day when we first met. # 我记得我们初次见面的那一天。
S:She | V:returned | O:the camera that she had borrowed. # 她归还了借来的相机。
S:We | V:admire | O:the volunteers who rescued the animals. # 我们敬佩救出那些动物的志愿者。
`);
  add(2, '主语从句或非谓语短语整体作 S，主句的谓语在它后面。', {S:'是主语从句或非谓语短语，整体充当主句主语，内部成分不再拆分。'}, `
S:Whether he will accept the offer | V:is | C:uncertain. # 他是否会接受这个提议还不确定。
S:What matters most | V:is | C:your health. # 最重要的是你的健康。
S:Whoever finishes first | V:will receive | O:a small gift. # 谁先完成，谁就会得到一份小礼物。
S:How the thief entered the building | V:remains | C:unclear. # 小偷如何进入大楼仍不清楚。
S:That she remembered my birthday | V:surprised | O:me. # 她记得我的生日，这让我很惊讶。
S:Learning a new language | V:takes | O:time and patience. # 学习一门新语言需要时间和耐心。
S:To solve the problem without help | V:seemed | C:impossible. # 不借助帮助解决这个问题似乎不可能。
S:What the team needs | V:is | C:a clear plan. # 团队需要的是一个明确的计划。
`);
  add(2, '宾语从句整体标为 O，包括引导词和从句内部的所有成分。', {O:'是完整的宾语从句，充当主句谓语的宾语；内部成分不再重复标记。'}, `
S:I | V:wonder | O:whether the museum is open today. # 我想知道博物馆今天是否开放。
S:She | V:explained | O:why the experiment had failed. # 她解释了实验为何失败。
S:The detective | V:discovered | O:where the missing painting was hidden. # 侦探发现了失踪的画藏在哪里。
S:We | V:did not know | O:who had sent the flowers. # 我们不知道是谁送的花。
S:The teacher | V:asked | O:how we had solved the puzzle. # 老师询问我们是如何解开谜题的。
S:He | V:realized | O:that he had left his passport at home. # 他意识到自己把护照落在了家里。
S:You | V:can choose | O:whatever you like. # 你可以选择任何你喜欢的东西。
S:Nobody | V:understands | O:what caused the sudden change. # 没有人明白是什么导致了这次突变。
`);
  add(2, '系动词后的从句整体作表语 C；主句系动词单独归为 V。', {C:'是系动词后的完整表语从句，用于说明主语的内容，整体标为 C。'}, `
S:The problem | V:is | C:that we have very little time. # 问题在于我们的时间很少。
S:My question | V:is | C:whether we can afford the trip. # 我的问题是我们是否负担得起这次旅行。
S:This | V:is | C:where the river meets the sea. # 这里就是河流汇入大海的地方。
S:The truth | V:is | C:that nobody checked the figures. # 事实是没有人核对这些数字。
S:That | V:is | C:why I changed my mind. # 那就是我改变主意的原因。
S:The best part | V:was | C:that everyone could join in. # 最棒的是每个人都能参与。
S:Our main concern | V:is | C:how the children will get home. # 我们最担心的是孩子们如何回家。
S:The situation | V:is not | C:what we expected. # 情况并非我们所预料的那样。
`);
  add(2, '非谓语短语作状语时，连同内部成分整体标为 A。', {A:'是非谓语状语短语，表示目的、时间、原因或伴随情况，内部词语统一标记为 A。'}, `
A:Having finished her homework, | S:Lisa | V:went | A:outside. # 完成作业后，莉萨出去了。
A:Surrounded by mountains, | S:the village | V:remains | C:peaceful. # 这个村庄被群山环绕，依旧宁静。
S:He | V:lowered | O:his voice | A:to avoid waking the baby. # 他压低了声音，以免吵醒宝宝。
A:Not knowing the address, | S:we | V:asked | O:a local resident. # 由于不知道地址，我们询问了一位当地居民。
S:The children | V:ran | A:across the field, | A:laughing loudly. # 孩子们跑过田野，大声笑着。
A:Compared with last year, | S:this year's harvest | V:is | C:much better. # 与去年相比，今年的收成好得多。
A:To catch the early train, | S:they | V:left | A:before sunrise. # 为了赶上早班火车，他们日出前就出发了。
A:Having been warned about the danger, | S:the climbers | V:chose | O:a safer route. # 被提醒注意危险后，登山者选择了一条更安全的路线。
`);
  add(2, '包含多个层次时，先找主句骨架；从句和非谓语短语按整体归类。', {S:'整体作主句主语；若含定语从句或主语从句，其内部成分不重复拆分。',O:'整体作主句宾语；其中的定语从句或嵌套从句也包含在 O 内。',A:'整体作主句状语；引导词以及从句或非谓语短语的内部成分一并归入 A。',C:'在此补充说明主语的内容或宾语的状态，整个从句或非谓语短语归为 C。'}, `
A:After the guests who lived nearby had left, | S:we | V:cleaned | O:the kitchen. # 住在附近的客人离开后，我们打扫了厨房。
S:The report that the committee published | V:confirmed | O:that the water was safe. # 委员会发布的报告证实水是安全的。
S:What surprised me most | V:was | C:that she had solved the problem alone. # 最令我惊讶的是她独自解决了问题。
A:If you read the article that I sent you, | S:you | V:will understand | O:why the project matters. # 如果你读了我发给你的文章，就会明白这个项目为何重要。
S:The teacher who noticed my mistake | V:asked | O:me | C:to explain how I had reached the answer. # 发现我错误的老师要求我解释是如何得出答案的。
A:Although the route was longer than we expected, | S:the guide | V:kept | O:everyone | C:calm. # 尽管路线比预想的更长，导游仍使大家保持镇定。
S:The woman whose bag had been stolen | V:told | IO:the officer | DO:what had happened. # 包被偷的那位女士向警察讲述了发生的事情。
A:To make sure that nobody was left behind, | S:the leader | V:checked | O:the list that we had prepared. # 为确保没有人掉队，领队核对了我们准备的名单。
`);
}
