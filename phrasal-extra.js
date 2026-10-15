// 保留原有 pv-1～pv-60 的标识，扩容不会改变已有学习记录。
// 每行：短语|中文|结构+难度|用法|例句|译文|例句|译文|词序题名词|中文|代词
function addPhrasals(topic, source) {
 source.trim().split('\n').filter(Boolean).forEach(line=>{
  const [phrase,meaning,code,note,en1,zh1,en2,zh2,noun,zh,pronoun]=line.split('|').map(s=>s.trim());
  const grammar=code[0],level=Number(code[1]);
  const pattern=grammar==='S'?`可分；代词居中：${phrase.split(' ')[0]} ${pronoun} ${phrase.split(' ').slice(1).join(' ')}。`:grammar==='I'?'本义项不可分，宾语放在整个搭配后。':'本卡采用不带直接宾语的用法。';
  PHRASALS.push({id:`pv-${PHRASALS.length+1}`,phrase,meaning,topic,level,grammar,note:pattern+note,examples:[{en:en1,zh:zh1},{en:en2,zh:zh2}],...(grammar==='S'?{order:[noun,zh,pronoun]}:{})});
 });
}
addPhrasals('日常', `
ask for|请求；索要|I1|后接想要的东西或帮助。|You can {ask for} help at any time.|你随时可以寻求帮助。|She {asked for} a glass of water.|她要了一杯水。
ask around|四处打听|N2|向多个人询问信息；不是 ask someone around。|I will {ask around} before buying a bike.|买自行车前我会四处打听一下。|He {asked around} but nobody knew the answer.|他四处打听，但没人知道答案。
ask out|邀请约会|S2|本卡特指邀请某人约会。|He wants to {ask out} Maya.|他想邀请玛雅约会。|She {asked out} her classmate.|她邀请了同学约会。|Maya|玛雅|her
add up|把数字加起来|S1|本卡练及物用法；不带宾语时还可表示“说得通”。|Please {add up} these numbers.|请把这些数字加起来。|I {added up} all the prices.|我把所有价格加了起来。|the numbers|这些数字|them
break up|分手|N2|这里描述恋爱关系结束；另有“拆散”等及物用法。|They might {break up} after this argument.|这次争吵后他们可能分手。|The couple {broke up} last year.|那对情侣去年分手了。
calm down|平静下来|N1|这里主语自己恢复平静；calm someone down 是及物用法。|Try to {calm down} before speaking.|说话前尽量平静下来。|He {calmed down} after a short walk.|散步一会儿后他平静下来了。
cheer up|使高兴起来|S1|本卡练及物用法；不带宾语的 Cheer up! 表示“振作点”。|A funny film can {cheer up} my sister.|一部搞笑电影能让妹妹高兴起来。|The visit {cheered up} our neighbor.|这次探望让邻居高兴了起来。|my sister|妹妹|her
dress up|盛装打扮|N1|可接 for an event；dress up as a character 表示装扮成某个角色。|We usually {dress up} for the party.|我们通常为聚会盛装打扮。|They {dressed up} as pirates.|他们装扮成了海盗。
fall out|闹翻；吵架|N2|可用 fall out with someone，也可用 over 引出争执原因。|Friends sometimes {fall out} over small things.|朋友有时会因小事闹翻。|They {fell out} over money.|他们因为钱闹翻了。
get back|回来；返回|N1|本卡不带宾语；get something back（取回）是另一种结构。|Please {get back} before dinner.|请在晚饭前回来。|We {got back} late last night.|我们昨晚很晚才回来。
get over|从疾病或打击中恢复|I2|后接疾病、困难或打击。|It takes time to {get over} the flu.|流感康复需要时间。|She {got over} her disappointment.|她从失望中走了出来。
give away|赠送|S1|本卡练免费送出物品；另有“泄露”的意思。|We will {give away} these old books.|我们会把这些旧书送人。|He {gave away} his spare bicycle.|他把闲置的自行车送人了。|the books|这些书|them
grow up|长大|N1|指从儿童成长为成人；不表示植物生长。|Children {grow up} so quickly.|孩子们长得真快。|She {grew up} in a seaside town.|她在一个海滨小镇长大。
hang out|闲逛；消磨时间|N1|常接 with someone，语气较口语化。|We often {hang out} at the cafe.|我们常在咖啡馆消磨时间。|They {hung out} together after class.|他们课后在一起闲逛。
lie down|躺下|N1|过去式为 lay down；不要与 lay something down（放下）混淆。|You should {lie down} for a while.|你应该躺一会儿。|He {lay down} on the sofa.|他在沙发上躺下了。
move in|搬进来|N1|与某人同住可说 move in with someone。|Our new neighbors will {move in} tomorrow.|我们的新邻居明天搬来。|She {moved in} last weekend.|她上周末搬进来了。
move out|搬出去|N1|可用 move out of a house 表示搬离某个住所。|We need to {move out} by Friday.|我们必须在周五之前搬出去。|He {moved out} of his parents' house.|他搬离了父母的家。
pass away|去世|N2|比较委婉的说法，通常用于人。|Many people fear that a sick relative may {pass away}.|许多人担心生病的亲人可能去世。|Her grandfather {passed away} peacefully.|她的祖父安详地去世了。
pay back|偿还借款|S1|可偿还钱，也可 pay someone back 表示还钱给某人。|I will {pay back} the money tomorrow.|我明天会把钱还上。|She {paid back} the loan in full.|她全额偿还了贷款。|the money|这笔钱|it
put back|放回|S1|把物品放回原来的位置；不是 put away（收好）。|Please {put back} the book after reading.|读完请把书放回去。|He {put back} the cup on the shelf.|他把杯子放回架子上。|the book|这本书|it
turn up|调高音量|S1|本卡练音量；不及物用法还可表示“出现”。|Please {turn up} the radio.|请把收音机音量调大。|She {turned up} the music.|她调高了音乐的音量。|the radio|收音机音量|it
turn over|翻转|S1|本卡练把物品翻到另一面。|Please {turn over} the card.|请把卡片翻过来。|He {turned over} the page.|他翻过了那一页。|the card|卡片|it
tidy up|整理整齐|S1|本卡带宾语，侧重收拾物品的位置；clean up 更强调清洁。|I need to {tidy up} my desk.|我需要整理书桌。|They {tidied up} the bedroom.|他们整理了卧室。|the desk|书桌|it
use up|用尽|S1|up 强调用到一点不剩，和 run out of 的结构不同。|Do not {use up} all the hot water.|不要用光所有热水。|We {used up} the last of the paint.|我们用完了最后一点油漆。|the water|这些水|it
wear out|把……用坏；磨损|S2|本卡是物品因使用而损坏；也可形容使人筋疲力尽。|Daily running can {wear out} your shoes.|每天跑步会磨坏鞋子。|He {wore out} his favorite jacket.|他把最喜欢的夹克穿破了。|the shoes|这双鞋|them
work on|致力于；从事|I1|后接任务、项目或需要改进的东西。|I need to {work on} my cooking skills.|我需要提高厨艺。|She {worked on} the garden all afternoon.|她整个下午都在打理花园。
join in|参加活动|I1|本卡带活动作宾语；区别于 join a club（加入组织）。|Everyone can {join in} the game.|每个人都可以参加这个游戏。|He {joined in} the discussion.|他参加了讨论。
log in|登录|N1|登录到某系统可接 to；login 连写通常是名词或形容词。|You must {log in} before changing your password.|更改密码前必须登录。|She {logged in} using her email address.|她用电子邮箱登录了。
log out|退出登录|N1|退出某系统可用 log out of。|Remember to {log out} on a shared computer.|使用公用电脑时记得退出登录。|He {logged out} after checking his messages.|他查看消息后退出了登录。
plug in|插上电源|S1|可分；插座位置可用 into 引出。|Please {plug in} the charger.|请插上充电器。|She {plugged in} the lamp.|她给台灯插上了电源。|the charger|充电器|it
`);
addPhrasals('出行', `
back away|向后退|N2|常表示为避开危险而后退，可接 from。|You should {back away} from the edge.|你应该从边缘向后退。|The hikers {backed away} from the snake.|徒步者们往后退，远离了那条蛇。
bring along|随身带来|S1|强调来某处时把人或物一并带来。|Please {bring along} a jacket.|请带一件夹克来。|She {brought along} her camera.|她随身带来了相机。|the camera|相机|it
bump into|偶然遇见|I1|本卡练偶遇某人；也可字面表示撞上。|You might {bump into} an old friend here.|你可能在这里偶遇老朋友。|I {bumped into} my teacher at the station.|我在车站偶遇了老师。
check on|查看……是否正常|I2|强调确认某人或某物的状态。|We should {check on} the passengers.|我们应该查看乘客的情况。|The driver {checked on} the children.|司机查看了孩子们的情况。
come across|偶然发现|I2|本卡指无意间找到物品或信息，不是刻意查找。|You may {come across} an unusual shop in this street.|你可能会在这条街偶然发现一家特别的店。|We {came across} a hidden beach.|我们偶然发现了一片隐蔽的海滩。
come along|一起来|N1|可用 come along with us 表示跟我们一起去。|Would you like to {come along}?|你想一起来吗？|My cousin {came along} with us.|我的表弟和我们一起来了。
drive off|驾车离去|N1|本卡主语自己开车离开，不带直接宾语。|We watched the taxi {drive off}.|我们看着出租车开走了。|He {drove off} without saying goodbye.|他没有道别就开车离开了。
fill up|装满；加满|S1|本卡带容器作宾语，常用于加满油箱或水瓶。|Please {fill up} the tank.|请把油箱加满。|We {filled up} our water bottles.|我们把水瓶装满了。|the tank|油箱|it
get around|到处走动；出行|N2|强调在某地区内往来，可说明交通方式。|It is easy to {get around} by bus.|坐公交出行很方便。|We {got around} on rented bikes.|我们骑租来的自行车出行。
get away|离开去度假|N2|本卡指暂时离开日常环境休息，不是逃跑义项。|We hope to {get away} for a few days.|我们希望外出休假几天。|They {got away} for the weekend.|他们外出度周末了。
go ahead|先走|N1|本卡指比别人先出发；也可表示开始做事。|You can {go ahead} without me.|你可以不等我先走。|She {went ahead} to find the campsite.|她先走一步去找营地。
go back|返回原处|N1|强调回到先前的地方；与 come back 的视角不同。|We need to {go back} to the hotel.|我们需要返回酒店。|He {went back} for his passport.|他返回去拿护照了。
go out|外出|N1|本卡指离开住所去活动；另有熄灭等义项。|We might {go out} after dinner.|我们晚饭后可能外出。|They {went out} to explore the town.|他们出去游览了小镇。
go through|经历；接受某种程序|I2|本卡常用于检查或手续；不是 go across（横穿）。|All travelers must {go through} security checks.|所有旅客都必须接受安检。|We {went through} a long inspection.|我们接受了长时间的检查。
head back|往回走|N1|可接 to 加目的地，表示朝原来的方向返回。|We should {head back} before sunset.|我们应该在日落前往回走。|They {headed back} to the village.|他们往村子走回去了。
hurry up|赶快|N1|常用作催促，但对陌生人直接使用可能显得不耐烦。|We need to {hurry up} or we will miss the train.|我们得快点，否则会错过火车。|He {hurried up} when he saw the time.|他看到时间后加快了动作。
keep away from|远离|I1|三词结构，后接要避开的地点或事物。|Please {keep away from} the cliff.|请远离悬崖。|We {kept away from} the flooded road.|我们避开了被淹的道路。
keep off|不要踏入；远离某表面|I1|常用于草地等告示；后接要避开的区域。|Please {keep off} the grass.|请勿践踏草坪。|Visitors {kept off} the wet paint.|游客们避开了未干的油漆。
leave behind|忘带；留下|S1|本卡指离开时忘了带物品。|Do not {leave behind} your bag.|不要落下你的包。|She {left behind} her phone at the hotel.|她把手机落在了酒店。|the bag|包|it
look out|当心|N1|本卡是提醒注意危险，可单独用作警告。|You need to {look out} on these icy paths.|走这些结冰的小路时你得当心。|He shouted that we should {look out}.|他喊着让我们当心。
move on|继续前行|N1|本卡指离开一处后继续前往下一处。|Let us {move on} to the next village.|我们继续去下一个村庄吧。|The group {moved on} after a short rest.|队伍短暂休息后继续前行。
pull over|靠边停车|N2|本卡指司机把车开到路边停下，不带宾语。|Please {pull over} at a safe place.|请在安全的地方靠边停车。|The taxi {pulled over} near the entrance.|出租车在入口附近靠边停了下来。
slow down|减速|N1|本卡不带宾语，表示速度自行降低或驾驶者放慢速度。|You should {slow down} near the school.|你在学校附近应该减速。|The bus {slowed down} before the turn.|公交车转弯前减速了。
speed up|加速|N1|本卡不带宾语；也可带宾语表示使某事加快。|The train began to {speed up}.|火车开始加速。|She {sped up} on the straight road.|她在直路上加快了速度。
stand back|往后站|N1|为安全或让出空间而往后站，常接 from。|Please {stand back} from the platform edge.|请站得离站台边缘远一些。|Everyone {stood back} as the doors opened.|门打开时，大家都往后站了。
stay over|留宿|N2|通常指在别人家过夜。|You can {stay over} if it gets late.|如果太晚，你可以留宿。|We {stayed over} at a friend's house.|我们在朋友家留宿了。
take along|随身带去|S1|强调去某处时带上某物，和 bring along 的方向视角不同。|You should {take along} a map.|你应该带上一张地图。|He {took along} a small first-aid kit.|他随身带了一个小急救包。|the map|地图|it
turn around|转身；掉头|N1|本卡不带宾语，表示人或车辆改变方向。|We need to {turn around} here.|我们得在这里掉头。|She {turned around} when someone called her name.|有人叫她的名字时，她转过身来。
watch out|小心|N1|警告危险；若说要小心什么，常接 for。|You must {watch out} on the steep steps.|走陡峭台阶时你必须小心。|We had to {watch out} for falling rocks.|我们必须小心落石。
go away|走开；离开|N1|本卡为离开某处，不接直接宾语。|The tourists will {go away} tomorrow.|游客们明天离开。|He {went away} for a week.|他离开了一周。
`);
addPhrasals('学习', `
ask about|询问有关……的事|I1|后接想了解的话题。|You can {ask about} the exam format.|你可以询问考试形式。|She {asked about} the homework.|她询问了作业的情况。
brush up on|温习；重拾技能|I2|三词结构，强调复习曾经学过但已生疏的知识。|I need to {brush up on} my French.|我需要温习法语。|He {brushed up on} his grammar before the test.|他考前复习了语法。
catch on|领会；理解|N2|本卡不带宾语，强调开始明白一个意思或规则。|Do not worry if you do not {catch on} immediately.|如果你没有立刻领会，不要担心。|She {caught on} after the second example.|听完第二个例子后，她明白了。
check over|仔细检查|S1|本卡带要检查的材料作宾语。|Please {check over} your essay.|请仔细检查你的作文。|He {checked over} the calculations.|他仔细核对了计算结果。|the essay|作文|it
cross out|划掉|S1|用横线表示删除，不等于擦除。|Please {cross out} the wrong answer.|请划掉错误答案。|She {crossed out} an unnecessary sentence.|她划掉了一个多余的句子。|the answer|答案|it
draw up|拟定|S2|常接 plan、list、document 等，强调正式写出。|We should {draw up} a revision plan.|我们应该拟定复习计划。|The students {drew up} a list of questions.|学生们拟了一份问题清单。|the plan|计划|it
fall behind|落后|N2|这里不带宾语；也可接 with 或 in 说明落后的方面。|You may {fall behind} if you miss lessons.|缺课可能让你落后。|He {fell behind} after being ill.|生病后他落后了。
get across|把意思讲清楚|S2|本卡表示使他人理解某个观点。|A diagram can {get across} the main idea.|图示能把主要意思讲清楚。|She {got across} her message clearly.|她把要说的话清楚地传达了。|the message|这个意思|it
get through|通过考试|I2|本卡指成功通过某项考试；另有接通电话等义项。|I hope to {get through} the final exam.|我希望通过期末考试。|She {got through} the driving test.|她通过了驾驶考试。
go into|详细讨论|I2|本卡用于细节或原因，表示深入说明。|We will {go into} the details next week.|我们下周将详细讨论细节。|The lecturer {went into} the reasons for the change.|讲师详细讲解了变化的原因。
hand out|分发|S1|通常把材料分给多人；与 hand in（上交）方向相反。|Please {hand out} the worksheets.|请分发练习纸。|The teacher {handed out} the test papers.|老师分发了试卷。|the worksheets|练习纸|them
look back on|回顾|I2|三词结构，后接一段经历或过去的事件。|We can {look back on} our progress with pride.|我们可以自豪地回顾自己的进步。|She {looked back on} her school days fondly.|她深情地回顾学生时代。
look into|调查；研究|I2|强调着手了解原因或事实，不是 look up（查阅）。|We need to {look into} the cause of the error.|我们需要研究错误的原因。|The class {looked into} local history.|全班研究了当地历史。
make out|辨认出|S2|本卡常用于看不清或听不清的内容。|Can you {make out} the handwriting?|你能辨认这段手写文字吗？|I could not {make out} the words on the board.|我辨认不出黑板上的字。|the handwriting|这段手写文字|it
mix up|混淆|S1|常用 mix up A and B；两者作为一组宾语时也可用 them。|Do not {mix up} these two words.|不要混淆这两个单词。|He {mixed up} the dates.|他把日期搞混了。|the words|这些词|them
note down|记下|S1|与 write down 近义，强调记录信息以便记住。|Please {note down} the deadline.|请记下截止日期。|She {noted down} the key points.|她记下了要点。|the deadline|截止日期|it
pick out|挑出；选出|S1|从一组事物中选出某个或某些。|Please {pick out} the correct sentence.|请选出正确的句子。|He {picked out} three useful examples.|他挑出了三个有用的例子。|the sentence|这个句子|it
read out|朗读出|S1|侧重把书面内容读给别人听。|Please {read out} the instructions.|请朗读说明。|She {read out} the poem to the class.|她向全班朗读了这首诗。|the poem|这首诗|it
rule out|排除|S2|通过判断排除某种可能或选项。|We can {rule out} the first option.|我们可以排除第一个选项。|The evidence {ruled out} that explanation.|证据排除了那种解释。|the option|这个选项|it
run through|快速演练或过一遍|I2|本卡指快速复习一套内容或演练流程。|Let us {run through} the presentation once.|我们把演示快速演练一遍吧。|They {ran through} the main points.|他们快速过了一遍要点。
sign up|报名|N1|本卡不带直接宾语；可接 for a course。|You can {sign up} online.|你可以在网上报名。|She {signed up} for a writing course.|她报名参加了写作课。
sum up|总结|S2|常用于把主要观点简明归纳。|Please {sum up} the argument.|请总结这个论点。|He {summed up} the findings in one paragraph.|他用一段话总结了研究结果。|the argument|这个论点|it
take down|记下|S1|本卡练记录信息；另有拆除等义项。|Please {take down} my phone number.|请记下我的电话号码。|She {took down} the teacher's instructions.|她记下了老师的指示。|the number|号码|it
take in|理解；吸收信息|S2|强调在头脑中消化信息；本卡不练欺骗等义项。|It is hard to {take in} all this information.|一下子理解所有这些信息很难。|He {took in} every word of the lecture.|他理解了讲座中的每一句话。|the information|这些信息|it
think over|仔细考虑|S2|强调在决定前权衡；think it over。|Please {think over} my suggestion.|请仔细考虑我的建议。|She {thought over} the question before answering.|她仔细考虑问题后才回答。|the suggestion|这个建议|it
think through|全面想清楚|S2|强调考虑一个计划的各个步骤及后果。|We need to {think through} the plan.|我们需要把计划全面想清楚。|He {thought through} the consequences.|他全面考虑了后果。|the plan|这个计划|it
try out|试用；试验|S1|通过使用来检验方法或物品是否合适。|Let us {try out} this new method.|我们试试这个新方法吧。|The class {tried out} a memory technique.|全班试用了一种记忆技巧。|the method|这个方法|it
turn in|提交|S1|在提交作业的语境里与 hand in 近义；还有其他义项。|Please {turn in} your assignment today.|请今天交作业。|He {turned in} his report before noon.|他中午前交了报告。|the assignment|作业|it
write up|整理写成|S2|把笔记、研究或经历整理成完整文字。|I need to {write up} my notes.|我需要把笔记整理成文。|She {wrote up} the experiment for her report.|她把实验过程整理写进了报告。|the notes|这些笔记|them
zoom in|放大画面|N1|本卡不带宾语；可接 on 说明聚焦的区域。|You can {zoom in} to read the small text.|你可以放大画面来阅读小字。|The teacher {zoomed in} on the diagram.|老师放大了图示。
`);
addPhrasals('工作', `
act on|根据……采取行动|I2|后接建议、信息或指示。|We should {act on} the customer's feedback.|我们应该根据客户反馈采取行动。|The manager {acted on} our advice.|经理采纳了我们的建议并采取行动。
agree on|就……达成一致|I1|后接共同确定的方案、时间或事项。|We need to {agree on} a date.|我们需要商定一个日期。|They {agreed on} a fair price.|他们商定了一个公平的价格。
apply for|申请|I1|后接希望获得的职位、许可或资金。|She plans to {apply for} the position.|她打算申请这个职位。|He {applied for} a research grant.|他申请了研究经费。
back down|让步；退让|N2|可接 from，表示放弃原先坚持的立场。|Neither side wants to {back down}.|双方都不愿让步。|The director {backed down} after the complaints.|收到投诉后，主管让步了。
branch out|拓展业务领域|N2|常接 into，表示开始涉足新领域。|The shop plans to {branch out} into online sales.|商店计划拓展到网上销售。|The company {branched out} into design services.|公司拓展了设计服务业务。
break off|中断；终止|S2|本卡指终止谈话或谈判。|They may {break off} the negotiations.|他们可能中止谈判。|The two firms {broke off} their talks.|两家公司中止了磋商。|the talks|磋商|them
bring about|导致；促成|S2|通常指带来变化或结果；bring it about。|The policy could {bring about} real change.|这项政策可能带来真正的改变。|Their efforts {brought about} an improvement.|他们的努力带来了改善。|the change|这个改变|it
bring forward|把时间提前|S2|本卡指把事件安排到更早的时间；put off 则表示推迟。|Can we {bring forward} the meeting?|我们能把会议提前吗？|They {brought forward} the deadline by a week.|他们把截止日期提前了一周。|the meeting|会议|it
bring in|引入；请来|S2|本卡指请外部人员参与工作。|We should {bring in} an expert.|我们应该请一位专家来。|They {brought in} a consultant to help.|他们请来了一位顾问帮忙。|the expert|这位专家|her
build up|逐步建立|S2|强调积累形成，而不是一次完成。|We need to {build up} customer trust.|我们需要逐步建立客户信任。|She {built up} a successful business.|她逐步建立了一家成功的企业。|the business|这项业务|it
call back|回电话|S1|本卡以人作宾语；不带宾语也可表示稍后再打来。|Please {call back} the customer.|请给客户回电话。|He {called back} the manager that afternoon.|他那天下午给经理回了电话。|the customer|这位客户|her
carry on|继续|N1|本卡不带直接宾语；carry on with a task 表示继续某项任务。|We should {carry on} despite the delay.|尽管有延误，我们也应该继续。|The team {carried on} after a short break.|团队短暂休息后继续了。
close down|关闭；使停业|S1|本卡带商店或机构作宾语；也可不带宾语表示自行停业。|They plan to {close down} the old factory.|他们计划关闭旧工厂。|The owner {closed down} the shop.|店主关闭了商店。|the factory|工厂|it
come about|发生；产生|N2|常用于询问或解释事情是如何发生的。|How did this change {come about}?|这个变化是怎么发生的？|The opportunity {came about} by chance.|这个机会是偶然出现的。
count on|依靠；指望|I2|后接可以依靠的人或事物。|You can {count on} our support.|你可以指望我们的支持。|She {counted on} her team to finish the work.|她指望团队完成工作。
cut back on|削减|I2|三词结构，常用于开支或资源消耗。|We must {cut back on} travel costs.|我们必须削减差旅费用。|The office {cut back on} paper use.|办公室减少了纸张使用。
do without|将就不用|I2|表示在没有某人或某物的情况下应付。|We will have to {do without} extra staff.|我们将不得不在没有额外人手的情况下应付。|They {did without} a printer for a week.|他们一周没有打印机也应付过来了。
draw on|利用经验或知识|I2|后接经验、资源或知识，表示从中获取帮助。|We can {draw on} our past experience.|我们可以利用以往的经验。|She {drew on} her training to solve the problem.|她利用所受培训解决了问题。
end up|最终处于某种情况|N2|后常接 -ing、形容词或介词短语，而非直接名词宾语。|We might {end up} working late.|我们可能最终得加班。|He {ended up} in charge of the project.|他最终成了项目负责人。
get down to|开始认真做|I2|to 是介词，后接名词或动名词。|Let us {get down to} work.|我们开始认真工作吧。|She {got down to} writing the proposal.|她开始认真撰写提案。
go ahead with|着手进行|I2|三词结构，强调按计划推进某项行动。|We will {go ahead with} the launch.|我们将按计划进行发布。|They {went ahead with} the repairs.|他们着手开展了维修。
go on|继续进行|N1|本卡不带宾语，描述活动持续。|The meeting may {go on} for another hour.|会议可能还要持续一小时。|The discussion {went on} until noon.|讨论一直持续到中午。
lay off|裁员；解雇|S2|常指因经营原因减少雇员；过去式为 laid off。|The firm may {lay off} some workers.|公司可能会裁减一些工人。|The factory {laid off} fifty employees.|工厂裁减了五十名员工。|the workers|这些工人|them
leave out|遗漏；省略|S1|本卡指未把某项内容包括在内。|Do not {leave out} the key details.|不要遗漏关键细节。|He {left out} an important figure.|他漏掉了一个重要数字。|the details|这些细节|them
let down|使失望|S1|后接对你有期待的人；不是 let someone go。|I do not want to {let down} my team.|我不想让团队失望。|The supplier {let down} several customers.|供应商让几位客户失望了。|the team|团队成员|them
look up to|敬佩；尊敬|I2|三词结构，区别于 look up（查阅）。|Many employees {look up to} their mentor.|许多员工敬佩自己的导师。|She {looked up to} her first manager.|她敬佩自己的第一位经理。
pay off|还清|S2|强调把债务全部付清；pay back 不一定强调全部还清。|We hope to {pay off} the loan this year.|我们希望今年还清贷款。|The company {paid off} its debts.|公司还清了债务。|the loan|贷款|it
step down|辞职；退位|N2|常用于离开领导职位，可接 as 加职位。|The chair plans to {step down} next month.|主席计划下个月辞职。|She {stepped down} as director.|她辞去了主管职务。
take on|承担任务或责任|S2|本卡练接受责任；还可表示雇用等其他意思。|Do not {take on} too much work.|不要承担太多工作。|He {took on} a challenging project.|他承担了一个有挑战性的项目。|the project|这个项目|it
turn out|结果是|N2|本卡常接 to be，说明最终发现的情况。|The task may {turn out} to be simple.|这项任务最终可能很简单。|The estimate {turned out} to be correct.|估算结果被证明是正确的。
`);
