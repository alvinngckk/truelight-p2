window.QUIZ_DATA = {
  updated: "2026-10-10",
  subjects: [
    {
      id: "chi",
      name: "中文",
      emoji: "📖",
      blurb: "生字、部首、詞語、句子同短閱讀",
      quizzes: [
        {
          id: "chi-words",
          title: "生字詞語",
          questions: [
            {q:"「秋天到了，樹葉慢慢變____，像一片片小蝴蝶。」", options:["煌","黃","皇"], a:1, why:"顏色用「黃」；「皇」是皇帝，「煌」多用於輝煌。"},
            {q:"哪一組詞語全都寫對？", options:["香蕉、認真、禮貌","香焦、認真、禮貌","香蕉、認鍼、禮貌"], a:0, why:"香蕉、認真、禮貌都是正確寫法。"},
            {q:"「上課時要____心聽講，才聽得明白。」", options:["轉","磚","專"], a:2, why:"專心的專；「磚」是磚頭，「轉」是轉動。"},
            {q:"「農曆新年街上很____鬧，到處都是人。」", options:["熱","熟","執"], a:0, why:"熱鬧；「熟」是熟識，「執」是執拾。"},
            {q:"「消防隊員很____敢，常常救人。」和「見到老師要有____貌」空缺應填？", options:["勇／禮","涌／裡","踴／理"], a:0, why:"勇敢、禮貌。"},
            {q:"「老師教我們要愛護公____，例如課室的桌椅。」", options:["吻","物","勿"], a:1, why:"公物是大家共用的東西。"},
            {q:"「妹妹很喜歡吃香____，顏色黃黃的。」哪字最合適？", options:["礁","蕉","焦"], a:1, why:"水果是香蕉。"},
            {q:"把正確的一組選出來：____真寫字、____鬧的街道", options:["鎮／熱","認／熱","認／熟"], a:1, why:"認真、熱鬧。"}
          ]
        },
        {
          id: "chi-mw",
          title: "量詞與句子",
          questions: [
            {q:"「一____鉛筆、一____書、一____花」正確量詞是？", options:["本／支／朵","支／本／朵","支／朵／本"], a:1, why:"鉛筆用支、書用本、花用朵。"},
            {q:"「一____汽車停在路邊。」", options:["雙","隻","輛"], a:2, why:"車輛用「輛」。"},
            {q:"哪一句最通順？", options:["因為下雨，但是我帶傘。","因為下雨，所以我帶傘。","因為下雨，還是我帶傘。"], a:1, why:"因為…所以…成對使用。"},
            {q:"「小美____喜歡畫畫，____喜歡唱歌。」表示兩樣都喜歡：", options:["不但…還…","雖然…但是…","如果…就…"], a:0, why:"兩件都喜歡用不但…還…。"},
            {q:"詞語：公園／在／玩耍／小朋友 → 最通順的是？", options:["公園小朋友在玩耍。","玩耍在小朋友公園。","小朋友在公園玩耍。"], a:2, why:"誰＋在哪裡＋做什麼。"},
            {q:"「快」的反義詞是？「高」的反義詞較接近？", options:["慢／低","近／大","慢／大"], a:0, why:"快對慢，高對低。"},
            {q:"「雖然天氣很熱，____大家仍然去操場跑步。」", options:["所以","但是","因為"], a:1, why:"雖然…但是…表示轉折。"},
            {q:"哪一句量詞用錯了？", options:["一輛單車","一本書","一朵汽車"], a:2, why:"汽車不用「朵」，應用「輛」。"}
          ]
        },
        {
          id: "chi-read",
          title: "短閱讀",
          passage: "星期天，小恩和爸爸去海洋公園。他們先看海豚表演，海豚跳出水面，觀眾都拍手。之後小恩吃了一支雪糕。回家時，小恩說：「今天真開心！」爸爸笑着說：「下次我們再來看熊貓。」",
          questions: [
            {q:"小恩是哪一天去海洋公園？", options:["星期一","星期日","星期五"], a:1, why:"文中寫星期天。"},
            {q:"小恩和誰一起去？之後爸爸提到下次想看什麼？", options:["媽媽；海豚","同學；雪糕","爸爸；熊貓"], a:2, why:"和爸爸去；爸爸說下次看熊貓。"},
            {q:"他們「先」看了什麼？", options:["海豚表演","熊貓","過山車"], a:0, why:"先看海豚表演。"},
            {q:"觀眾為什麼拍手？", options:["因為海豚跳出水面","因為小恩哭了","因為要回家"], a:0, why:"海豚表演令觀眾拍手。"},
            {q:"小恩吃了什麼？用量詞說正確的是？", options:["一個雪糕","一支雪糕","一輛雪糕"], a:1, why:"文中寫一支雪糕。"},
            {q:"從「今天真開心」可知小恩的心情是？", options:["害怕","無聊","愉快"], a:2, why:"開心即愉快。"},
            {q:"這篇文章主要寫什麼？", options:["小恩星期天出遊的經過","海豚怎樣睡覺","小恩在學校上課"], a:0, why:"全文講一次出遊。"},
            {q:"根據文章，下面哪句正確？", options:["他們最後先看熊貓","小恩一個人去","他們看完表演後小恩才吃雪糕"], a:2, why:"先看表演，之後吃雪糕；熊貓是下次才看。"}
          ]
        },
        {
          id: "chi-radical",
          title: "部首與近反義詞",
          questions: [
            {q:"「河、湖、海」都有哪個部首？為甚麼？", options:["木，因為和水無關","氵，因為和水有關","口，因為要喝水"], a:1, why:"和水有關的字多用「氵」（三點水）。"},
            {q:"「媽、姐、妹」的部首是？", options:["女","馬","木"], a:0, why:"和女性有關，部首多是「女」。"},
            {q:"「樹、林、桌」的部首是？", options:["日","手","木"], a:2, why:"和樹木、木頭有關，部首是「木」。"},
            {q:"「吃、喝、叫」的部首是？哪一個字也屬同一部首？", options:["心；想","口；吹","足；跑"], a:1, why:"口部；「吹」也有口字旁。"},
            {q:"「高興」的近義詞是？", options:["傷心","快樂","生氣"], a:1, why:"高興和快樂意思相近。"},
            {q:"「乾淨」的反義詞是？", options:["骯髒","整齊","清潔"], a:0, why:"乾淨對骯髒；清潔是近義詞。"},
            {q:"「早」對「____」；「開始」對「____」", options:["近／起來","晚／結束","高／出發"], a:1, why:"早對晚，開始對結束。"},
            {q:"哪一組全是反義詞？", options:["大小、快慢、長短","大小、快慢、快樂","高低、開始、乾淨"], a:0, why:"大小、快慢、長短都是反義詞對。"}
          ]
        }
      ]
    },
    {
      id: "eng",
      name: "英文",
      emoji: "🔤",
      blurb: "Vocabulary, grammar and a short story",
      quizzes: [
        {
          id: "eng-vocab",
          title: "Vocabulary",
          questions: [
            {q:"We borrow books from the school ____. We play ball in the ____.", options:["playground / library","library / playground","dentist / kitchen"], a:1, why:"Books → library; play → playground."},
            {q:"When it is ____, I take an umbrella. When it is ____, I wear sunglasses.", options:["sunny / rainy","rainy / sunny","hungry / rainy"], a:1, why:"Rainy needs an umbrella; sunny needs sunglasses."},
            {q:"Miss Chan teaches English. She is our ____.", options:["pencil","window","teacher"], a:2, why:"A person who teaches is a teacher."},
            {q:"I brush my teeth after ____. I have a toothache, so I see the ____.", options:["breakfast / dentist","library / baker","recess / pilot"], a:0, why:"Brush after a meal; dentist looks after teeth."},
            {q:"My father's father is my ____. My mother's sister is my ____.", options:["uncle / grandfather","grandfather / aunt","cousin / uncle"], a:1, why:"Father's father = grandfather; mother's sister = aunt."},
            {q:"I write with a ____ and colour with a ____.", options:["shoe / apple","pencil / crayon","apple / shoe"], a:1, why:"Write with a pencil; colour with a crayon."},
            {q:"Which place is for sick people?", options:["playground","hospital","kitchen"], a:1, why:"A hospital is for sick people."},
            {q:"Choose the odd one out (not a school place):", options:["library","classroom","bakery"], a:2, why:"A bakery is not a school place."}
          ]
        },
        {
          id: "eng-gram",
          title: "Grammar",
          questions: [
            {q:"There ____ a book on the desk. There ____ three books on the shelf.", options:["are / is","is / are","am / are"], a:1, why:"One book → is; three books → are."},
            {q:"I ____ to school by bus every day. She ____ to school on foot.", options:["go / goes","goes / go","going / goes"], a:0, why:"I + go; She + goes."},
            {q:"She ____ a red schoolbag. We ____ blue schoolbags.", options:["have / has","has / have","having / have"], a:1, why:"She + has; We + have."},
            {q:"This is ____ apple. That is ____ book.", options:["a / an","an / a","the / an"], a:1, why:"Apple → an; book → a."},
            {q:"There are three ____ in the garden.", options:["cat","cates","cats"], a:2, why:"Plural: cats."},
            {q:"The toys are ____ the box. The book is ____ the desk.", options:["in / on","on / in","under / in"], a:0, why:"Inside → in; on top → on."},
            {q:"____ is my brother. ____ is my sister.", options:["She / He","They / She","He / She"], a:2, why:"Brother → He; sister → She."},
            {q:"We ____ shout in the library. We ____ listen to the teacher.", options:["must / must not","must not / must","can / must not"], a:1, why:"Must not shout; must listen."}
          ]
        },
        {
          id: "eng-read",
          title: "Short reading",
          passage: "Amy gets up at seven o'clock. She eats bread and milk for breakfast. She goes to school by bus. At recess she plays with Tom in the playground. After school she does her homework and reads a story. On Sunday she visits Grandma.",
          questions: [
            {q:"What time does Amy get up?", options:["At nine o'clock","At seven o'clock","At noon"], a:1, why:"She gets up at seven."},
            {q:"What does she eat for breakfast?", options:["Rice and fish","Noodles","Bread and milk"], a:2, why:"Bread and milk."},
            {q:"How does she go to school?", options:["By bus","By ferry","On foot"], a:0, why:"By bus."},
            {q:"Who does she play with at recess, and where?", options:["Miss Chan in the library","Tom in the playground","Mum at home"], a:1, why:"Tom in the playground."},
            {q:"What does she do after school?", options:["Swimming and shopping","Homework and reading","Only watching TV"], a:1, why:"Homework and a story."},
            {q:"When does Amy visit Grandma?", options:["On Sunday","Every morning","At night only"], a:0, why:"On Sunday she visits Grandma."},
            {q:"Which word means 功課?", options:["breakfast","homework","playground"], a:1, why:"Homework is 功課."},
            {q:"Which sentence is TRUE?", options:["Amy never plays at recess.","Amy goes to school by ferry.","Amy reads a story after school."], a:2, why:"She does homework and reads a story after school."}
          ]
        },
        {
          id: "eng-school",
          title: "At school",
          questions: [
            {q:"I sit on a ____. The teacher writes on the ____.", options:["chair / blackboard","cloud / pillow","banana / fridge"], a:0, why:"Chair to sit; blackboard to write."},
            {q:"We put our books in a ____.", options:["teapot","schoolbag","ladder"], a:1, why:"Books go in a schoolbag."},
            {q:"At recess we can ____ with friends. Please ____ your hand before you speak.", options:["drive / eat","play / raise","fly / kick"], a:1, why:"Play at recess; raise your hand to speak."},
            {q:"There ____ twenty children in our class.", options:["is","am","are"], a:2, why:"Twenty children → are."},
            {q:"She ____ English every Monday.", options:["learn","learns","learning"], a:1, why:"She + learns."},
            {q:"Which one do we use to colour a picture?", options:["ruler only","umbrella","crayon"], a:2, why:"A crayon is for colouring."},
            {q:"Choose the best classroom rule:", options:["Run and shout in the library.","Listen when the teacher talks.","Throw books on the floor."], a:1, why:"We should listen to the teacher."},
            {q:"A ____ helps us draw straight lines.", options:["crayon","ruler","schoolbag"], a:1, why:"A ruler draws straight lines."}
          ]
        }
      ]
    },
    {
      id: "math",
      name: "數學",
      emoji: "🔢",
      blurb: "加減、乘法、應用題、時間同貨幣",
      quizzes: [
        {
          id: "math-add",
          title: "加減法",
          questions: [
            {q:"12 + 7 = ?", options:["19","17","21"], a:0, why:"12+7=19。"},
            {q:"25 − 8 = ?", options:["15","17","18"], a:1, why:"25−8=17。"},
            {q:"30 + 14 = ?", options:["44","34","40"], a:0, why:"30+14=44。"},
            {q:"48 − 20 = ?", options:["18","38","28"], a:2, why:"48−20=28。"},
            {q:"9 + 9 + 2 = ?", options:["18","20","22"], a:1, why:"9+9=18，再加2是20。"},
            {q:"36 − 6 = ?", options:["30","32","26"], a:0, why:"36−6=30。"},
            {q:"15 + 16 = ?", options:["21","41","31"], a:2, why:"15+16=31。"},
            {q:"50 − 12 = ?", options:["38","42","28"], a:0, why:"50−12=38。"}
          ]
        },
        {
          id: "math-word",
          title: "應用題",
          questions: [
            {q:"小美有 15 粒糖果，給了弟弟 6 粒，還剩幾粒？", options:["9","11","21"], a:0, why:"15−6=9。"},
            {q:"車上有 18 人，又上了 5 人，現在有幾人？", options:["13","23","22"], a:1, why:"18+5=23。"},
            {q:"一盒有 10 枝鉛筆，2 盒一共有幾枝？", options:["12","20","8"], a:1, why:"10×2=20。"},
            {q:"小明看了 12 頁，還有 8 頁未看，這本書有幾頁？", options:["4","16","20"], a:2, why:"12+8=20。"},
            {q:"媽媽買了 16 個蘋果，吃了 4 個，還剩幾個？", options:["12","20","10"], a:0, why:"16−4=12。"},
            {q:"二年級有 20 個男生和 15 個女生，一共有幾個學生？", options:["30","35","25"], a:1, why:"20+15=35。"},
            {q:"一條繩長 30 厘米，剪去 10 厘米，現在多長？", options:["40 厘米","10 厘米","20 厘米"], a:2, why:"30−10=20。"},
            {q:"小恩有 8 元，再得到 5 元，一共有幾元？", options:["13 元","3 元","15 元"], a:0, why:"8+5=13。"}
          ]
        },
        {
          id: "math-time",
          title: "時間與貨幣",
          questions: [
            {q:"1 小時有幾分鐘？", options:["60","30","100"], a:0, why:"1 小時＝60 分鐘。"},
            {q:"3 時整，長針指向哪一個數字？", options:["3","12","6"], a:1, why:"整點时长針指 12。"},
            {q:"下午 2 時的下一小時是？", options:["下午 3 時","下午 1 時","中午 12 時"], a:0, why:"下一小時是下午 3 時。"},
            {q:"$10 + $5 = ?", options:["$15","$5","$50"], a:0, why:"10+5=15。"},
            {q:"一支雪糕 $8，給了 $10，應找回多少？", options:["$18","$2","$8"], a:1, why:"10−8=2。"},
            {q:"$2 硬幣 3 個是多少？", options:["$5","$6","$3"], a:1, why:"2×3=6。"},
            {q:"一本簿 $5，兩本是多少？", options:["$10","$7","$15"], a:0, why:"5×2=10。"},
            {q:"由早上 9 時到 10 時，過了多久？", options:["30 分鐘","2 小時","1 小時"], a:2, why:"9 時到 10 時是 1 小時。"}
          ]
        },
        {
          id: "math-mul",
          title: "乘法（2、5、10）",
          questions: [
            {q:"2 × 4 = ?", options:["6","8","10"], a:1, why:"4 個 2 是 8。"},
            {q:"5 × 3 = ?", options:["15","8","10"], a:0, why:"3 個 5 是 15。"},
            {q:"10 × 5 = ?", options:["15","500","50"], a:2, why:"5 個 10 是 50。"},
            {q:"「4 個 2」等於？", options:["6","8","4"], a:1, why:"4 個 2 = 2×4 = 8。"},
            {q:"一對襪子有 2 隻，5 對一共有幾隻？", options:["10","7","12"], a:0, why:"2×5=10。"},
            {q:"一袋有 5 個橙，3 袋一共有幾個？", options:["8","15","10"], a:1, why:"5×3=15。"},
            {q:"每張貼紙 $5，買 4 張要付多少？", options:["$20","$9","$15"], a:0, why:"5×4=20。"},
            {q:"2、4、6、8，下一個數是？", options:["9","12","10"], a:2, why:"每次加 2，下一個是 10。"}
          ]
        }
      ]
    },
    {
      id: "gs",
      name: "常識",
      emoji: "🌏",
      blurb: "個人衛生、校園、社區同季節",
      quizzes: [
        {
          id: "gs-hygiene-12",
          title: "個人衛生（第1、2課）",
          questions: [
            {q:"個人衛生主要包括什麼？", options:["只是把書包收好","身體、衣物和日常用品都要清潔","只是把頭髮梳好"], a:1, why:"個人衛生包括身體、衣物和用品的清潔。"},
            {q:"不注意個人衛生，較可能出現什麼情況？", options:["容易生病，外表也不整潔","一定會長得更高","功課會自動完成"], a:0, why:"不清潔會影響健康和儀容。"},
            {q:"哪一組做法都符合良好個人衛生？", options:["早晚刷牙；飯前便後洗手","一個月洗一次澡；用髒毛巾抹面","只用清水漱口當刷牙；不洗手吃飯"], a:0, why:"早晚刷牙、飯前便後洗手都是好習慣。"},
            {q:"刷牙時為什麼要刷牙齒的每一面？", options:["因為這樣牙膏才會用完","為了更徹底清除食物殘渣和牙菌膜","因為一個星期刷一次就夠"], a:1, why:"要清潔每一面，不是只漱口。"},
            {q:"洗澡時哪一項正確？", options:["穿著校服洗澡","只洗手，不洗身體","洗淨身體，並沖走清潔用品"], a:2, why:"要洗淨身體並把清潔用品沖掉。"},
            {q:"洗臉和毛巾的正確做法是？", options:["把面洗乾淨，毛巾要清潔","用地上的毛巾抹面","只抹一下鼻子"], a:0, why:"要用清潔毛巾把面洗乾淨。"},
            {q:"眼鏡、梳子等用品應該怎樣？手帕又有什麼用途？", options:["定期清潔；可抹汗、抹口","掉在地上不管；用來寫字","和食物放一起；拿來拋玩"], a:0, why:"用品要清潔；手帕用來抹汗、抹口。"},
            {q:"穿襪子的好處是？穿完襪子還需要什麼？", options:["使鞋子更重；就不用洗腳","幫助雙腳清潔舒適；仍要每天洗腳","就不用洗腳；可以一星期不換襪"], a:1, why:"襪子幫助保持清潔，但仍要洗腳和換襪。"},
            {q:"食具用完後正確做法是？", options:["放進書包","清洗乾淨才再使用","只用紙巾抹一下就收起"], a:1, why:"食具要洗乾淨才合乎衛生。"},
            {q:"以下哪一項「不符合」良好個人衛生？", options:["飯前洗手","用自己的潔淨手帕","把用過的紙巾丟在地上"], a:2, why:"垃圾應放入垃圾桶，不可隨地丟棄。"}
          ]
        },
        {
          id: "gs-comm",
          title: "校園與社區",
          questions: [
            {q:"在圖書館應該怎樣？為什麼？", options:["保持安靜，方便大家閱讀","大聲唱歌，令氣氛熱鬧","奔跑追逐，鍛鍊身體"], a:0, why:"圖書館要安靜，方便閱讀。"},
            {q:"過馬路時要注意什麼？", options:["只看手機","交通燈和左右來車","閉上眼睛快跑"], a:1, why:"要看燈和來車，確保安全。"},
            {q:"生病時應去哪裡？消防員的工作包括？", options:["診所或醫院；救火和救人","公園玩耍；賣菜","游泳池；教英文"], a:0, why:"生病看醫生；消防員救火救人。"},
            {q:"哪一項不是香港常見的公共交通？", options:["巴士","港鐵","雪橇"], a:2, why:"香港有巴士和港鐵，沒有雪橇。"},
            {q:"學校升降旗時，我們應該？", options:["繼續追逐","站好、安靜、行注目禮","坐下吃東西"], a:1, why:"升降旗要莊重。"},
            {q:"垃圾應該放在哪裡？迷路時可以怎樣？", options:["垃圾桶；找穿制服的工作人員或報警","花槽；跟着陌生人走","水渠；躲起來不說話"], a:0, why:"垃圾入桶；迷路找可信的大人或報警。"},
            {q:"在課室裏，下面哪一項做得對？", options:["把椅子推高阻擋通道","專心聽課，保持課室整潔","把食物碎屑掃到同學座位下"], a:1, why:"要專心並保持整潔。"},
            {q:"社區裏幫助我們送信的是？", options:["郵差","消防員救火時","巴士司機賣票時"], a:0, why:"郵差負責送信。"}
          ]
        },
        {
          id: "gs-health",
          title: "健康與季節",
          questions: [
            {q:"吃飯前應該做什麼？為甚麼？", options:["跑步，增加食慾","洗手，減少細菌進入口中","不睡覺，保持清醒"], a:1, why:"洗手可減少細菌。"},
            {q:"香港夏天通常怎樣？秋天較常見的是？", options:["又熱又潮濕；天氣轉涼，有時乾燥","常常下雪；終日嚴寒","很乾燥又寒冷；每天大雪"], a:0, why:"夏天炎熱潮濕；秋天轉涼。"},
            {q:"多吃蔬菜水果有助？每天還應該？", options:["身體健康；做適量運動","只會口渴；只躺着","不用睡覺；不喝水"], a:0, why:"蔬果和適量運動都對身體好。"},
            {q:"颱風襲港時應該？", options:["去海邊看浪","爬上高處拍照","留在安全的室內"], a:2, why:"留在室內安全地方。"},
            {q:"夜晚小朋友需要足夠的？刷牙最好？", options:["睡眠；早晚都刷","糖果；一個月一次","電視；只在過年刷"], a:0, why:"需要足夠睡眠；早晚刷牙。"},
            {q:"哪一種天氣最適合穿厚外套？", options:["炎熱潮濕的夏天中午","清涼乾燥的冬天早上","溫暖的春天午后"], a:1, why:"冬天清涼時適合穿厚外套。"},
            {q:"運動後覺得很熱，較好的做法是？", options:["立刻喝大量冰水並吹強風","適當休息，補充溫水，抹汗","脫掉所有衣服在室外睡覺"], a:1, why:"適當休息和補水較安全。"},
            {q:"下面哪一組都是健康生活習慣？", options:["偏食、熬夜、不運動","均衡飲食、足夠睡眠、適量運動","只吃甜食、長時間看螢幕"], a:1, why:"均衡飲食、睡眠和運動都重要。"}
          ]
        },
        {
          id: "gs-plants",
          title: "植物與動物",
          questions: [
            {q:"植物生長通常需要什麼？", options:["只有玩具","陽光、空氣和水","只有糖果"], a:1, why:"植物需要陽光、空氣和水。"},
            {q:"哪一部分幫助植物從泥土吸收水分？葉子有什麼重要作用？", options:["花瓣；發出聲音","果皮；讓動物睡覺","根；利用陽光幫助製造養分"], a:2, why:"根吸水；葉子幫助製造養分。"},
            {q:"哪一種是哺乳動物？", options:["麻雀","狗","金魚"], a:1, why:"狗是哺乳動物。"},
            {q:"蝴蝶通常是由什麼變成的？種子發芽後可以長成？", options:["石頭；汽車","毛蟲；新的植物","樹葉；衣服"], a:1, why:"毛蟲變成蝴蝶；種子長成新植物。"},
            {q:"哪一種動物主要住在水裏？", options:["魚","麻雀","兔子"], a:0, why:"魚生活在水中。"},
            {q:"愛護動植物，我們應該？", options:["把垃圾扔到花圃","天天拔花玩","不隨意傷害它們，保持環境清潔"], a:2, why:"要保護動植物和環境。"},
            {q:"為什麼很多植物的葉子是綠色的？", options:["因為葉子含有幫助吸收陽光的物質","因為葉子都是塑料做的","因為動物把葉子塗成綠色"], a:0, why:"綠色葉子含有幫助進行光合作用的物質（小二程度：幫助吸收陽光製造養分）。"},
            {q:"貓、狗、人同屬？金魚較接近？", options:["鳥類；昆蟲","哺乳動物；魚類","昆蟲；哺乳動物"], a:1, why:"貓狗人是哺乳動物；金魚是魚類。"}
          ]
        }
      ]
    }

  ],
  specials: [
    {
      id: "times",
      name: "單位乘數樂園",
      tagline: "乘數小勇士 · 星星火箭出發！",
      blurb: "揀一組乘數表，做完有星星貼紙獎",
      tables: [
        {
          id: "times-2",
          title: "2 的乘數",
          badge: "🚀",
          color: "rocket",
          questions: [
            {q:"2 × 1 = ?", options:["2","1","3"], a:0, why:"1 個 2 是 2。"},
            {q:"2 × 3 = ?", options:["5","6","4"], a:1, why:"3 個 2 是 6。"},
            {q:"2 × 5 = ?", options:["7","12","10"], a:2, why:"5 個 2 是 10。"},
            {q:"2 × 7 = ?", options:["14","12","16"], a:0, why:"7 個 2 是 14。"},
            {q:"2 × 8 = ?", options:["18","16","10"], a:1, why:"8 個 2 是 16。"},
            {q:"2 × 9 = ?", options:["18","11","20"], a:0, why:"9 個 2 是 18。"},
            {q:"「6 個 2」等於？", options:["8","12","10"], a:1, why:"6 個 2 = 2×6 = 12。"},
            {q:"每袋有 2 粒糖，4 袋一共有幾粒？", options:["6","8","4"], a:1, why:"2×4=8。"}
          ]
        },
        {
          id: "times-3",
          title: "3 的乘數",
          badge: "🌟",
          color: "star",
          questions: [
            {q:"3 × 2 = ?", options:["5","6","9"], a:1, why:"2 個 3 是 6。"},
            {q:"3 × 4 = ?", options:["12","7","9"], a:0, why:"4 個 3 是 12。"},
            {q:"3 × 5 = ?", options:["8","15","18"], a:1, why:"5 個 3 是 15。"},
            {q:"3 × 6 = ?", options:["9","16","18"], a:2, why:"6 個 3 是 18。"},
            {q:"3 × 7 = ?", options:["21","24","10"], a:0, why:"7 個 3 是 21。"},
            {q:"3 × 8 = ?", options:["11","24","18"], a:1, why:"8 個 3 是 24。"},
            {q:"「3 個 3」等於？", options:["6","9","12"], a:1, why:"3 個 3 = 3×3 = 9。"},
            {q:"每盤有 3 個蘋果，5 盤一共有幾個？", options:["15","8","12"], a:0, why:"3×5=15。"}
          ]
        },
        {
          id: "times-4",
          title: "4 的乘數",
          badge: "🍊",
          color: "fruit",
          questions: [
            {q:"4 × 2 = ?", options:["6","8","4"], a:1, why:"2 個 4 是 8。"},
            {q:"4 × 3 = ?", options:["12","7","16"], a:0, why:"3 個 4 是 12。"},
            {q:"4 × 5 = ?", options:["9","24","20"], a:2, why:"5 個 4 是 20。"},
            {q:"4 × 6 = ?", options:["24","10","20"], a:0, why:"6 個 4 是 24。"},
            {q:"4 × 7 = ?", options:["11","28","24"], a:1, why:"7 個 4 是 28。"},
            {q:"4 × 8 = ?", options:["32","12","28"], a:0, why:"8 個 4 是 32。"},
            {q:"「4 個 4」等於？", options:["8","16","12"], a:1, why:"4 個 4 = 4×4 = 16。"},
            {q:"3 袋橙，每袋 4 個，一共有幾個？", options:["7","12","16"], a:1, why:"4×3=12。"}
          ]
        },
        {
          id: "times-5",
          title: "5 的乘數",
          badge: "✋",
          color: "hand",
          questions: [
            {q:"5 × 2 = ?", options:["10","7","15"], a:0, why:"2 個 5 是 10。"},
            {q:"5 × 3 = ?", options:["8","15","20"], a:1, why:"3 個 5 是 15。"},
            {q:"5 × 4 = ?", options:["9","25","20"], a:2, why:"4 個 5 是 20。"},
            {q:"5 × 6 = ?", options:["30","11","25"], a:0, why:"6 個 5 是 30。"},
            {q:"5 × 7 = ?", options:["12","35","30"], a:1, why:"7 個 5 是 35。"},
            {q:"5 × 8 = ?", options:["40","13","45"], a:0, why:"8 個 5 是 40。"},
            {q:"「5 個 5」等於？", options:["10","25","20"], a:1, why:"5 個 5 = 5×5 = 25。"},
            {q:"每盒有 5 枝筆，4 盒一共有幾枝？", options:["9","20","25"], a:1, why:"5×4=20。"}
          ]
        },

        {
          id: "times-6",
          title: "6 的乘數",
          badge: "🐝",
          color: "bee",
          questions: [
            {q:"6 × 2 = ?", options:["8","12","16"], a:1, why:"2 個 6 是 12。"},
            {q:"6 × 3 = ?", options:["18","9","12"], a:0, why:"3 個 6 是 18。"},
            {q:"6 × 4 = ?", options:["10","20","24"], a:2, why:"4 個 6 是 24。"},
            {q:"6 × 5 = ?", options:["30","11","36"], a:0, why:"5 個 6 是 30。"},
            {q:"6 × 6 = ?", options:["12","36","30"], a:1, why:"6 個 6 是 36。"},
            {q:"6 × 7 = ?", options:["42","13","36"], a:0, why:"7 個 6 是 42。"},
            {q:"「8 個 6」等於？", options:["14","48","42"], a:1, why:"8 個 6 = 6×8 = 48。"},
            {q:"每盒有 6 粒朱古力，3 盒一共有幾粒？", options:["9","18","12"], a:1, why:"6×3=18。"}
          ]
        },
        {
          id: "times-7",
          title: "7 的乘數",
          badge: "🌈",
          color: "rainbow",
          questions: [
            {q:"7 × 2 = ?", options:["9","14","21"], a:1, why:"2 個 7 是 14。"},
            {q:"7 × 3 = ?", options:["21","10","28"], a:0, why:"3 個 7 是 21。"},
            {q:"7 × 4 = ?", options:["11","24","28"], a:2, why:"4 個 7 是 28。"},
            {q:"7 × 5 = ?", options:["35","12","42"], a:0, why:"5 個 7 是 35。"},
            {q:"7 × 6 = ?", options:["13","42","36"], a:1, why:"6 個 7 是 42。"},
            {q:"7 × 7 = ?", options:["49","14","56"], a:0, why:"7 個 7 是 49。"},
            {q:"「8 個 7」等於？", options:["15","56","49"], a:1, why:"8 個 7 = 7×8 = 56。"},
            {q:"每排有 7 個座位，4 排一共有幾個座位？", options:["11","28","21"], a:1, why:"7×4=28。"}
          ]
        },
        {
          id: "times-8",
          title: "8 的乘數",
          badge: "🐙",
          color: "octopus",
          questions: [
            {q:"8 × 2 = ?", options:["10","16","24"], a:1, why:"2 個 8 是 16。"},
            {q:"8 × 3 = ?", options:["24","11","32"], a:0, why:"3 個 8 是 24。"},
            {q:"8 × 4 = ?", options:["12","28","32"], a:2, why:"4 個 8 是 32。"},
            {q:"8 × 5 = ?", options:["40","13","48"], a:0, why:"5 個 8 是 40。"},
            {q:"8 × 6 = ?", options:["14","48","40"], a:1, why:"6 個 8 是 48。"},
            {q:"8 × 7 = ?", options:["56","15","64"], a:0, why:"7 個 8 是 56。"},
            {q:"「8 個 8」等於？", options:["16","64","56"], a:1, why:"8 個 8 = 8×8 = 64。"},
            {q:"每箱有 8 罐汽水，3 箱一共有幾罐？", options:["11","24","16"], a:1, why:"8×3=24。"}
          ]
        },
        {
          id: "times-9",
          title: "9 的乘數",
          badge: "🎈",
          color: "balloon",
          questions: [
            {q:"9 × 2 = ?", options:["11","18","27"], a:1, why:"2 個 9 是 18。"},
            {q:"9 × 3 = ?", options:["27","12","36"], a:0, why:"3 個 9 是 27。"},
            {q:"9 × 4 = ?", options:["13","32","36"], a:2, why:"4 個 9 是 36。"},
            {q:"9 × 5 = ?", options:["45","14","54"], a:0, why:"5 個 9 是 45。"},
            {q:"9 × 6 = ?", options:["15","54","45"], a:1, why:"6 個 9 是 54。"},
            {q:"9 × 7 = ?", options:["63","16","72"], a:0, why:"7 個 9 是 63。"},
            {q:"「8 個 9」等於？", options:["17","72","63"], a:1, why:"8 個 9 = 9×8 = 72。"},
            {q:"每組有 9 個小朋友，2 組一共有幾人？", options:["11","18","27"], a:1, why:"9×2=18。"}
          ]
        },
        {
          id: "times-10",
          title: "10 的乘數",
          badge: "🎯",
          color: "target",
          questions: [
            {q:"10 × 2 = ?", options:["12","20","30"], a:1, why:"2 個 10 是 20。"},
            {q:"10 × 3 = ?", options:["30","13","40"], a:0, why:"3 個 10 是 30。"},
            {q:"10 × 4 = ?", options:["14","50","40"], a:2, why:"4 個 10 是 40。"},
            {q:"10 × 5 = ?", options:["50","15","60"], a:0, why:"5 個 10 是 50。"},
            {q:"10 × 6 = ?", options:["16","60","70"], a:1, why:"6 個 10 是 60。"},
            {q:"10 × 7 = ?", options:["70","17","80"], a:0, why:"7 個 10 是 70。"},
            {q:"「8 個 10」等於？", options:["18","80","100"], a:1, why:"8 個 10 = 10×8 = 80。"},
            {q:"每包有 10 粒貼紙，3 包一共有幾粒？", options:["13","30","20"], a:1, why:"10×3=30。"}
          ]
        },
        {
          id: "times-mix",
          title: "綜合挑戰",
          badge: "🏆",
          color: "trophy",
          pick: 10,
          questions: [
            {q:"2 × 6 = ?", options:["12","8","14"], a:0, why:"6 個 2 是 12。"},
            {q:"2 × 9 = ?", options:["11","18","20"], a:1, why:"9 個 2 是 18。"},
            {q:"3 × 4 = ?", options:["7","12","9"], a:1, why:"4 個 3 是 12。"},
            {q:"3 × 8 = ?", options:["24","11","18"], a:0, why:"8 個 3 是 24。"},
            {q:"4 × 5 = ?", options:["9","20","16"], a:1, why:"5 個 4 是 20。"},
            {q:"4 × 7 = ?", options:["28","11","24"], a:0, why:"7 個 4 是 28。"},
            {q:"5 × 3 = ?", options:["8","15","20"], a:1, why:"3 個 5 是 15。"},
            {q:"5 × 8 = ?", options:["40","13","45"], a:0, why:"8 個 5 是 40。"},
            {q:"6 × 2 = ?", options:["8","12","16"], a:1, why:"2 個 6 是 12。"},
            {q:"6 × 5 = ?", options:["30","11","36"], a:0, why:"5 個 6 是 30。"},
            {q:"6 × 8 = ?", options:["14","48","42"], a:1, why:"8 個 6 是 48。"},
            {q:"7 × 2 = ?", options:["9","14","21"], a:1, why:"2 個 7 是 14。"},
            {q:"7 × 4 = ?", options:["28","11","21"], a:0, why:"4 個 7 是 28。"},
            {q:"7 × 6 = ?", options:["13","42","36"], a:1, why:"6 個 7 是 42。"},
            {q:"8 × 3 = ?", options:["24","11","32"], a:0, why:"3 個 8 是 24。"},
            {q:"8 × 6 = ?", options:["14","48","40"], a:1, why:"6 個 8 是 48。"},
            {q:"8 × 8 = ?", options:["16","64","56"], a:1, why:"8 個 8 是 64。"},
            {q:"9 × 2 = ?", options:["11","18","27"], a:1, why:"2 個 9 是 18。"},
            {q:"9 × 5 = ?", options:["45","14","54"], a:0, why:"5 個 9 是 45。"},
            {q:"9 × 7 = ?", options:["16","63","72"], a:1, why:"7 個 9 是 63。"},
            {q:"10 × 3 = ?", options:["13","30","40"], a:1, why:"3 個 10 是 30。"},
            {q:"10 × 7 = ?", options:["70","17","80"], a:0, why:"7 個 10 是 70。"},
            {q:"「5 個 6」等於？", options:["11","30","36"], a:1, why:"5 個 6 = 6×5 = 30。"},
            {q:"「8 個 7」等於？", options:["15","56","49"], a:1, why:"8 個 7 = 7×8 = 56。"},
            {q:"「9 個 4」等於？", options:["13","36","45"], a:1, why:"9 個 4 = 4×9 = 36。"},
            {q:"每袋有 6 個橙，4 袋一共有幾個？", options:["10","24","18"], a:1, why:"6×4=24。"},
            {q:"每組有 7 人，5 組一共有幾人？", options:["12","35","28"], a:1, why:"7×5=35。"},
            {q:"每箱有 8 罐汽水，3 箱一共有幾罐？", options:["11","24","16"], a:1, why:"8×3=24。"},
            {q:"每包有 9 粒貼紙，2 包一共有幾粒？", options:["11","18","27"], a:1, why:"9×2=18。"},
            {q:"10 × 9 = ?", options:["19","90","100"], a:1, why:"9 個 10 是 90。"}
          ]
        }
      ]
    }
  ]
};