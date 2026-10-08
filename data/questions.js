window.QUIZ_DATA = {
  updated: "2026-10-08",
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
            {q:"「秋天到了，樹葉慢慢變____。」", options:["黃","皇","煌"], a:0, why:"顏色用「黃」，「皇」是皇帝的皇。"},
            {q:"「妹妹很喜歡吃香____。」", options:["蕉","焦","礁"], a:0, why:"水果是香蕉。"},
            {q:"「小明寫字很____真。」", options:["認","真","鎮"], a:0, why:"成語是「認真」。"},
            {q:"「老師教我們要愛護公____。」", options:["物","勿","吻"], a:0, why:"公園、圖書館的東西是公物。"},
            {q:"「上課時要____心聽講。」", options:["專","磚","轉"], a:0, why:"專心的專。"},
            {q:"「農曆新年街上很____鬧。」", options:["熱","熟","執"], a:0, why:"熱鬧。"},
            {q:"「消防隊員很____敢。」", options:["勇","涌","踴"], a:0, why:"勇敢。"},
            {q:"「見到老師要有____貌。」", options:["禮","裡","理"], a:0, why:"禮貌。"}
          ]
        },
        {
          id: "chi-mw",
          title: "量詞與句子",
          questions: [
            {q:"一____鉛筆", options:["支","本","輛"], a:0, why:"長而幼的東西常用「支」。"},
            {q:"一____書", options:["本","隻","朵"], a:0, why:"書本用「本」。"},
            {q:"一____花", options:["朵","張","件"], a:0, why:"花常用「朵」。"},
            {q:"一____汽車", options:["輛","雙","隻"], a:0, why:"車輛用「輛」。"},
            {q:"「因為下雨，____我帶傘。」哪句通順？", options:["因為下雨，所以我帶傘。","因為下雨，但是我帶傘。","因為下雨，還是我帶傘。"], a:0, why:"因為…所以…是一對。"},
            {q:"「小美____喜歡畫畫，____喜歡唱歌。」", options:["不但…還…","雖然…但是…","如果…就…"], a:0, why:"兩件都喜歡，用不但…還…。"},
            {q:"把詞語排成通順的句子：公園／在／玩耍／小朋友", options:["小朋友在公園玩耍。","公園小朋友在玩耍。","玩耍在小朋友公園。"], a:0, why:"誰＋在哪裡＋做什麼。"},
            {q:"「快」的反義詞是？", options:["慢","近","大"], a:0, why:"快對慢。"}
          ]
        },
        {
          id: "chi-read",
          title: "短閱讀",
          passage: "星期天，小恩和爸爸去海洋公園。他們先看海豚表演，海豚跳出水面，觀眾都拍手。之後小恩吃了一支雪糕。回家時，小恩說：「今天真開心！」",
          questions: [
            {q:"小恩星期幾去海洋公園？", options:["星期日","星期一","星期五"], a:0, why:"文中寫星期天。"},
            {q:"小恩和誰一起去？", options:["爸爸","媽媽","同學"], a:0, why:"和爸爸去。"},
            {q:"他們先看什麼？", options:["海豚表演","熊貓","過山車"], a:0, why:"先看海豚表演。"},
            {q:"海豚做了什麼？", options:["跳出水面","在睡覺","吃雪糕"], a:0, why:"海豚跳出水面。"},
            {q:"觀眾有什麼反應？", options:["拍手","哭了","離開"], a:0, why:"觀眾都拍手。"},
            {q:"小恩吃了什麼？", options:["雪糕","漢堡","壽司"], a:0, why:"吃了一支雪糕。"},
            {q:"小恩覺得這一天怎麼樣？", options:["很開心","很無聊","很害怕"], a:0, why:"他說今天真開心。"},
            {q:"這篇文章主要在說？", options:["小恩星期天出遊","小恩在學校上課","海豚的生活習性"], a:0, why:"全文講一次出遊。"}
          ]
        },
        {
          id: "chi-radical",
          title: "部首與近反義詞",
          questions: [
            {q:"「河、湖、海」都有哪個部首？", options:["木","氵","口"], a:1, why:"和水有關的字多用「氵」（三點水）。"},
            {q:"「媽、姐、妹」的部首是？", options:["女","馬","木"], a:0, why:"和女性有關的字，部首多是「女」。"},
            {q:"「樹、林、桌」的部首是？", options:["日","手","木"], a:2, why:"和樹木、木頭有關，部首是「木」。"},
            {q:"「吃、喝、叫」的部首是？", options:["口","心","足"], a:0, why:"和嘴巴有關的動作，部首是「口」。"},
            {q:"「高興」的近義詞是？", options:["傷心","快樂","生氣"], a:1, why:"高興和快樂意思相近。"},
            {q:"「乾淨」的反義詞是？", options:["骯髒","整齊","清潔"], a:0, why:"乾淨對骯髒；「清潔」是近義詞，不是反義詞。"},
            {q:"「早」的反義詞是？", options:["近","晚","高"], a:1, why:"早對晚。"},
            {q:"「開始」的反義詞是？", options:["起來","出發","結束"], a:2, why:"開始對結束。"}
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
            {q:"We borrow books from the school ____.", options:["library","playground","dentist"], a:0, why:"Books are in the library."},
            {q:"When it is ____, I take an umbrella.", options:["rainy","sunny","hungry"], a:0, why:"Rainy weather needs an umbrella."},
            {q:"Miss Chan is our English ____.", options:["teacher","pencil","window"], a:0, why:"A person who teaches is a teacher."},
            {q:"I brush my teeth after ____.", options:["breakfast","library","recess"], a:0, why:"We brush after a meal, like breakfast."},
            {q:"Children play in the ____ at recess.", options:["playground","kitchen","hospital"], a:0, why:"Recess play is in the playground."},
            {q:"I have a toothache. I see the ____.", options:["dentist","pilot","baker"], a:0, why:"A dentist looks after teeth."},
            {q:"My father's father is my ____.", options:["grandfather","uncle","cousin"], a:0, why:"Father's father is grandfather."},
            {q:"I write with a ____.", options:["pencil","apple","shoe"], a:0, why:"We write with a pencil or pen."}
          ]
        },
        {
          id: "eng-gram",
          title: "Grammar",
          questions: [
            {q:"There ____ a book on the desk.", options:["is","are","am"], a:0, why:"One book: there is."},
            {q:"I ____ to school by bus every day.", options:["go","goes","going"], a:0, why:"I + go."},
            {q:"She ____ a red schoolbag.", options:["has","have","having"], a:0, why:"She + has."},
            {q:"This is ____ apple.", options:["an","a","the"], a:0, why:"Apple starts with a vowel sound: an."},
            {q:"There are three ____ in the garden.", options:["cats","cat","cates"], a:0, why:"More than one: cats."},
            {q:"The toys are ____ the box.", options:["in","on","under"], a:0, why:"Inside the box: in."},
            {q:"____ is my brother. He is six.", options:["He","She","They"], a:0, why:"Brother is he."},
            {q:"We ____ shout in the library.", options:["must not","must","can"], a:0, why:"Library rule: must not shout."}
          ]
        },
        {
          id: "eng-read",
          title: "Short reading",
          passage: "Amy gets up at seven o'clock. She eats bread and milk for breakfast. She goes to school by bus. At recess she plays with Tom in the playground. After school she does her homework and reads a story.",
          questions: [
            {q:"What time does Amy get up?", options:["At seven o'clock","At nine o'clock","At noon"], a:0, why:"She gets up at seven."},
            {q:"What does she eat for breakfast?", options:["Bread and milk","Rice and fish","Noodles"], a:0, why:"Bread and milk."},
            {q:"How does she go to school?", options:["By bus","By ferry","On foot"], a:0, why:"By bus."},
            {q:"Who does she play with?", options:["Tom","Miss Chan","her mum"], a:0, why:"She plays with Tom."},
            {q:"Where do they play?", options:["In the playground","In the library","At home"], a:0, why:"In the playground."},
            {q:"What does she do after school?", options:["Homework and reading","Swimming","Shopping"], a:0, why:"Homework and a story."},
            {q:"Amy gets up at seven. This happens ____.", options:["every morning in the story","only on Sunday","at night"], a:0, why:"It is her daily routine."},
            {q:"Which word means 功課?", options:["homework","breakfast","playground"], a:0, why:"Homework is 功課."}
          ]
        },
        {
          id: "eng-school",
          title: "At school",
          questions: [
            {q:"I sit on a ____ in the classroom.", options:["banana","chair","cloud"], a:1, why:"We sit on a chair."},
            {q:"The teacher writes on the ____.", options:["pillow","fridge","blackboard"], a:2, why:"Teachers write on the blackboard (or whiteboard)."},
            {q:"We put our books in a ____.", options:["schoolbag","teapot","ladder"], a:0, why:"Books go in a schoolbag."},
            {q:"At recess we can ____ with friends.", options:["drive a car","play","fly a plane"], a:1, why:"Recess is for playing and resting."},
            {q:"Please ____ your hand before you speak.", options:["eat","kick","raise"], a:2, why:"We raise our hand to speak in class."},
            {q:"There ____ twenty children in our class.", options:["are","is","am"], a:0, why:"Twenty children: use are."},
            {q:"She ____ English every Monday.", options:["learn","learns","learning"], a:1, why:"She + learns (simple present)."},
            {q:"Which one do we use to colour a picture?", options:["ruler only","umbrella","crayon"], a:2, why:"A crayon is for colouring."}
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
            {q:"27 + 15 = ?", options:["42","32","41"], a:0, why:"27+15=42。"},
            {q:"63 − 28 = ?", options:["35","45","31"], a:0, why:"63−28=35。"},
            {q:"40 + 19 = ?", options:["59","69","49"], a:0, why:"40+19=59。"},
            {q:"80 − 46 = ?", options:["34","36","44"], a:0, why:"80−46=34。"},
            {q:"16 + 16 = ?", options:["32","26","36"], a:0, why:"16+16=32。"},
            {q:"54 − 9 = ?", options:["45","63","43"], a:0, why:"54−9=45。"},
            {q:"23 + 38 = ?", options:["61","51","71"], a:0, why:"23+38=61。"},
            {q:"70 − 25 = ?", options:["45","55","95"], a:0, why:"70−25=45。"}
          ]
        },
        {
          id: "math-word",
          title: "應用題",
          questions: [
            {q:"小美有 24 粒糖果，給了弟弟 8 粒，還剩幾粒？", options:["16","32","18"], a:0, why:"24−8=16。"},
            {q:"車上有 35 人，又上了 12 人，現在有幾人？", options:["47","23","45"], a:0, why:"35+12=47。"},
            {q:"一盒有 10 枝鉛筆，3 盒一共有幾枝？", options:["30","13","20"], a:0, why:"10×3=30。"},
            {q:"小明看了 18 頁，還有 15 頁未看，這本書有幾頁？", options:["33","3","28"], a:0, why:"18+15=33。"},
            {q:"媽媽買了 20 個蘋果，吃了 6 個，剩下幾個？", options:["14","26","16"], a:0, why:"20−6=14。"},
            {q:"二年級有 28 個男生和 26 個女生，一共有幾個學生？", options:["54","48","52"], a:0, why:"28+26=54。"},
            {q:"一條繩長 50 厘米，剪去 18 厘米，還剩多長？", options:["32 厘米","68 厘米","28 厘米"], a:0, why:"50−18=32。"},
            {q:"小恩有 5 元，再得到 7 元，現在有幾元？", options:["12 元","2 元","11 元"], a:0, why:"5+7=12。"}
          ]
        },
        {
          id: "math-time",
          title: "時間與貨幣",
          questions: [
            {q:"1 小時有幾分鐘？", options:["60","30","100"], a:0, why:"1 小時 = 60 分鐘。"},
            {q:"半小時是幾分鐘？", options:["30","15","45"], a:0, why:"半小時是 30 分鐘。"},
            {q:"3 時 15 分，長針指向？", options:["3","12","6"], a:0, why:"15 分時長針指 3。"},
            {q:"下午 2 時的下一小時是？", options:["下午 3 時","下午 1 時","中午 12 時"], a:0, why:"再過一小時是下午 3 時。"},
            {q:"$10 + $5 = ?", options:["$15","$5","$50"], a:0, why:"10+5=15。"},
            {q:"一支雪糕 $8，給了 $10，應找回？", options:["$2","$18","$8"], a:0, why:"10−8=2。"},
            {q:"$2 硬幣 4 個是多少？", options:["$8","$6","$4"], a:0, why:"2×4=8。"},
            {q:"一本簿 $6，兩本是多少？", options:["$12","$8","$16"], a:0, why:"6×2=12。"}
          ]
        },
        {
          id: "math-mul",
          title: "乘法（2、5、10）",
          questions: [
            {q:"2 × 6 = ?", options:["12","8","10"], a:0, why:"6 個 2 是 12。"},
            {q:"5 × 4 = ?", options:["9","20","25"], a:1, why:"4 個 5 是 20。"},
            {q:"10 × 7 = ?", options:["17","700","70"], a:2, why:"7 個 10 是 70。"},
            {q:"「3 個 5」用算式寫是？", options:["3 + 5","5 × 3","5 − 3"], a:1, why:"3 個 5 可以寫成 5 × 3，答案是 15。"},
            {q:"一對襪子有 2 隻，6 對一共有幾隻？", options:["8","12","3"], a:1, why:"2 × 6 = 12。"},
            {q:"一袋有 5 個橙，4 袋一共有幾個？", options:["20","9","1"], a:0, why:"5 × 4 = 20。"},
            {q:"每張貼紙 $5，買 6 張要付多少？", options:["$11","$56","$30"], a:2, why:"5 × 6 = 30，要付 $30。"},
            {q:"5、10、15、20，下一個數是？", options:["25","21","30"], a:0, why:"每次加 5，20 + 5 = 25。"}
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
            {q:"個人衛生包括什麼？", options:["身體、衣物和日常用品都要清潔","只是把頭髮梳好","只是把書包收好"], a:0, why:"個人衛生包括身體、衣物和用品的清潔。"},
            {q:"不注意個人衛生，可能會怎樣？", options:["容易生病，外表也不整潔","一定會長得更高","功課會自動完成"], a:0, why:"不清潔會影響健康，也會影響儀容。"},
            {q:"哪一項符合良好的個人衛生？", options:["早晚刷牙，飯前便後洗手","一個月才洗一次澡","用髒毛巾抹面"], a:0, why:"早晚刷牙、飯前便後洗手都是良好習慣。"},
            {q:"刷牙時應該怎樣做？", options:["用牙刷清潔牙齒的每一面","只用清水漱一口","一個星期刷一次"], a:0, why:"要刷到牙齒每一面，不是只漱口。"},
            {q:"洗澡時哪一項是對的？", options:["洗淨身體，並沖走清潔用品","穿著校服洗澡","只洗手，不洗身體"], a:0, why:"洗澡要洗淨身體，並把清潔用品沖掉。"},
            {q:"洗臉時應該？", options:["把面洗乾淨，毛巾要清潔","用地上的毛巾抹面","只抹一下鼻子"], a:0, why:"洗臉要用清潔的毛巾，把面洗乾淨。"},
            {q:"眼鏡和梳子應該？", options:["定期清潔","掉在地上也不用理會","和食物放在一起"], a:0, why:"日常用品都要保持清潔。"},
            {q:"手帕可以幫助我們？", options:["抹汗、抹口，保持清潔","用來寫字","拿來拋着玩"], a:0, why:"手帕用來抹汗、抹口，要勤換勤洗。"},
            {q:"穿襪子的一個好處是？", options:["幫助雙腳保持清潔和舒適","使鞋子更重","就不用洗腳"], a:0, why:"襪子幫助保持雙腳清潔，但仍要每天洗腳。"},
            {q:"食具用完後應該？", options:["清洗乾淨才再使用","放進書包","只用紙巾抹一下就收起"], a:0, why:"食具要洗乾淨，才合乎衛生。"}
          ]
        },
        {
          id: "gs-comm",
          title: "校園與社區",
          questions: [
            {q:"在圖書館應該？", options:["保持安靜","大聲唱歌","奔跑追逐"], a:0, why:"圖書館要安靜。"},
            {q:"過馬路要看？", options:["交通燈和左右來車","只看手機","閉上眼睛"], a:0, why:"要看燈和來車。"},
            {q:"生病時應去？", options:["診所或醫院","公園玩耍","游泳池"], a:0, why:"看醫生。"},
            {q:"消防員的工作包括？", options:["救火和救人","賣菜","教英文"], a:0, why:"消防員救火救人。"},
            {q:"哪一項不是香港常見的公共交通？", options:["雪橇","巴士","港鐵"], a:0, why:"香港有巴士和港鐵，沒有雪橇。"},
            {q:"學校升降旗時，我們應該？", options:["站好、安靜、行注目禮","繼續追逐","坐下吃東西"], a:0, why:"升降旗要莊重。"},
            {q:"垃圾應該放在？", options:["垃圾桶","花槽","水渠"], a:0, why:"放入垃圾桶。"},
            {q:"迷路時可以？", options:["找穿制服的工作人員或報警","跟著陌生人走","躲起來不說話"], a:0, why:"找可信的大人或報警。"}
          ]
        },
        {
          id: "gs-health",
          title: "健康與季節",
          questions: [
            {q:"吃飯前應該？", options:["洗手","跑步","不睡覺"], a:0, why:"洗手減少細菌。"},
            {q:"香港夏天通常？", options:["又熱又潮濕","常常下雪","很乾燥又寒冷"], a:0, why:"香港夏天炎熱潮濕。"},
            {q:"秋天較常見的是？", options:["天氣轉涼，有時乾燥","每天大雪","終日嚴寒"], a:0, why:"秋天轉涼。"},
            {q:"多吃蔬菜水果有助？", options:["身體健康","只會口渴","不用睡覺"], a:0, why:"蔬果對身體好。"},
            {q:"每天應該做適量的？", options:["運動","只躺着","不喝水"], a:0, why:"適量運動。"},
            {q:"颱風襲港時應該？", options:["留在安全的室內","去海邊看浪","爬上高處"], a:0, why:"留在室內安全地方。"},
            {q:"夜晚應該有足夠的？", options:["睡眠","糖果","電視"], a:0, why:"小朋友需要足夠睡眠。"},
            {q:"刷牙最好？", options:["早晚都刷","一個月一次","只在過年刷"], a:0, why:"早晚刷牙。"}
          ]
        },
        {
          id: "gs-plants",
          title: "植物與動物",
          questions: [
            {q:"植物生長通常需要什麼？", options:["只有玩具","陽光、空氣和水","只有糖果"], a:1, why:"植物需要陽光、空氣和水才能生長。"},
            {q:"哪一部分幫助植物從泥土吸收水分？", options:["花瓣","果皮","根"], a:2, why:"根從泥土吸收水分和養分。"},
            {q:"葉子有什麼重要作用？", options:["利用陽光幫助植物製造養分","讓動物睡覺","發出聲音"], a:0, why:"葉子利用陽光幫助植物製造養分。"},
            {q:"哪一種是哺乳動物？", options:["麻雀","狗","金魚"], a:1, why:"狗是哺乳動物；麻雀是鳥類，金魚是魚類。"},
            {q:"蝴蝶通常是由什麼變成的？", options:["石頭","樹葉","毛蟲"], a:2, why:"毛蟲長大後會變成蝴蝶。"},
            {q:"哪一種動物主要住在水裏？", options:["魚","麻雀","兔子"], a:0, why:"魚生活在水中。"},
            {q:"種子發芽後可以長成？", options:["汽車","新的植物","衣服"], a:1, why:"種子發芽後會長成新植物。"},
            {q:"愛護動植物，我們應該？", options:["把垃圾扔到花圃","天天拔花玩","不隨意傷害它們，保持環境清潔"], a:2, why:"要保護動植物和它們的生活環境。"}
          ]
        }
      ]
    }
  ]
};
