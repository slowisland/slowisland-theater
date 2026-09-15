/**
 * 慢島劇團 Slow Island Theatre - 互動核心邏輯
 */

// 劇目資料庫（嚴格依演出年序由新到舊排列：2026 -> 2008）
const productions = [
  {
    id: "galangal-lemongrass-poppy",
    title: "南薑．香茅．罌粟花",
    enTitle: "Poppy, Lemongrass and Galangal",
    category: "migration",
    categoryName: "移民與歷史記憶",
    year: "2013 - 2026",
    featured: true,
    tagline: "廚房裡的跨國飄浪史，以味蕾喚醒被遺忘的滇緬記憶",
    enTagline: "A transnational odyssey cooked in the kitchen, awakening forgotten Yunnan-Burmese memories through taste.",
    image: "images/唐健哲攝影02023拷貝.jpg",
    gallery: [
      "images/唐健哲攝影02023拷貝.jpg",
      "images/唐健哲攝影02979拷貝.jpg",
      "images/唐健哲攝影03271拷貝.jpg",
      "images/_唐健哲攝影9506拷貝.jpg",
      "images/南薑香茅罌粟花_主視覺.jpg",
      "images/南薑2016劇照/南薑2016劇照01.jpg",
      "images/南薑2016劇照/南薑2016劇照02.jpg",
      "images/南薑2014讀劇/讀劇 24 歆彥.jpg",
      "images/南薑2014讀劇/讀劇 31 豆豆.jpg",
      "images/南薑2014讀劇/讀劇 74 3人.jpg"
    ],
    photoCredit: "唐健哲、慢島劇團",
    description: "以家族食譜為線索，深入台灣的滇緬泰邊境移民聚落。跨世代滇緬移民與新住民二代的生命溯源，藉由一道道南薑、香茅與香料的撲鼻香氣，在舞台上熬煮出被主流歷史遺忘的流離故事。",
    enDescription: "Tracing family recipes into Taiwan's Yunnan-Burmese-Thai borderland communities, reclaiming ancestral roots through simmering spices.",
    director: "姜富琴",
    playwright: "姜富琴 / 製作人：林欣怡",
    bookUrl: "https://www.books.com.tw/products/0011049232?srsltid=AfmBOopPQ7z_6pL5QOyTnyilCyWtgiE9WIKGb8Yc5oU34VxaD9fnF5SE",
    cast: "李明哲、王珂瑤（緬甸華人移民二代）、張昌緬（緬甸華人移民二代）、鍾得凡、王言煥、楊奇殷、張櫂均、江芷蓉；特別演出：田珈伃",
    credits: [
      "製作人｜林欣怡",
      "執行製作｜莊博旭",
      "行銷宣傳｜田珈伃（泰國華人移民二代）",
      "主要演出者｜李明哲、王珂瑤（緬甸華人移民二代）、張昌緬（緬甸華人移民二代）、鍾得凡、王言煥、楊奇殷、張櫂均、江芷蓉",
      "特別演出｜田珈伃",
      "導演助理｜高子鈞",
      "舞台設計｜林仕倫",
      "舞台製作公司｜山峸製作設計",
      "燈光設計｜歐衍穀",
      "服裝設計｜彭郁勻",
      "音樂設計｜申承羲",
      "影像設計｜吳俊輝、葉澈",
      "舞台監督｜王宣文",
      "舞台技術指導｜劉柏言",
      "舞台技術人員｜傅子峻、葉岫穎、連威豪、陳冠廷",
      "燈光技術指導｜王信偉",
      "燈光技術人員｜劉凱民、高德宇",
      "影像技術指導｜余竑賢、蕭如君",
      "劇團行政｜邱子謙",
      "音響｜焦點音樂、余忠皓、黃致誠、簡睿均",
      "梳化、服管｜呂姿瑩、孫小婷",
      "主視覺設計｜歐陽文慧",
      "劇名標準字設計｜陳慧瑜",
      "社群編輯｜羅靖茹",
      "演出錄影｜尕華城文化實驗室、陳小樺、梁紹文、欒誠偉",
      "劇照攝影｜唐健哲、林育全",
      "前台執行｜劉芸倩",
      "現場廚師｜和明龍、王志珠",
      "特別協力單位｜金三角文化基金會",
      "【聲音演出】",
      "緬文：張蘭芳女士、王子杰",
      "中文：江謝保、彭云緹、曾歆雁、曾紫庭",
      "【雲南話顧問】",
      "楊文聰、彭積美、張彩蓉、李忠杰、王志珠、陳新順"
    ],
    highlights: [
      "獲選桃園鐵玫瑰藝術節重點展演作品",
      "編劇暨導演：姜富琴",
      "融合現場料理香氣與生命田調的感官沉浸",
      "深刻觸動滇緬二代與常民觀眾的集體記憶",
      "劇照攝影：唐健哲、林育全",
      "正式出版原創劇本（博客來熱銷中）"
    ],
    youtubeEmbedId: "oU6rtkHSN-E",
    youtubeUrl: "https://www.youtube.com/watch?v=oU6rtkHSN-E&t=2s",
    reviews: [
      {
        title: "故土、血脈與國家，誰才能定義「家」？——《南薑．香茅．罌粟花》",
        media: "表演藝術評論台",
        author: "白斐嵐",
        date: "2026.05",
        tag: "深度劇評",
        url: "https://pareviews.ncafroc.org.tw/comments/3705e687-2598-4d97-a38b-2b64da0010b2",
        quote: "從飲食、血脈、離散與家的定義切入，深度探討滇緬跨世代移民的生命歸宿、歷史傷痕與身分認同。"
      },
      {
        title: "《南薑．香茅．罌栗花》十三年： 從家族記憶出發，走向一代人的遷徙史詩",
        media: "臺北市文化快遞",
        author: "本期專題報導",
        date: "2026.02",
        tag: "十三年創作史詩專題",
        url: "https://cultureexpress.taipei/Topic/C000004?ID=b830a53b-e2d0-4271-89a3-aec46ba62dd3&PageType=1",
        quote: "這部作品如同一鍋反覆熬煮的湯，每一次重演與修訂，都是將記憶重新撈起，讓那些尚未說完的故事逐漸沉澱、成形。自2011年《擺夷外婆＆雲南外公的廚房》走過十三年，走向一代人的遷徙史詩。"
      },
      {
        title: "橫跨四國、三代人生命溯源 慢島劇團《南薑 香茅 罌粟花》上演",
        media: "經濟日報",
        author: "文化藝文焦點",
        date: "2026.02",
        tag: "媒體特寫報導",
        url: "https://money.udn.com/money/story/122328/9490742",
        quote: "橫跨中、緬、泰、台四國邊境，跨越三代人的生命溯源史詩，以料理香氣與家族記憶重構當代舞台。"
      },
      {
        title: "2026 桃園鐵玫瑰藝術節焦點：從劇場、空間田調，探索藝術如何形塑時間",
        media: "ShoppingDesign 設計採買誌",
        author: "編輯部推薦",
        date: "2026",
        tag: "設計美學特寫",
        url: "https://www.shoppingdesign.com.tw/post/view/13089?",
        quote: "深入解析慢島劇團《南薑．香茅．罌粟花》如何以料理香氣與物件劇場，跨越四國三代人的遷徙歷程。"
      },
      {
        title: "《南薑．香茅．罌粟花》 溫柔訴說被掩蓋的故事",
        media: "PAR 表演藝術雜誌",
        author: "蕭文華",
        date: "2026.04",
        tag: "排練特寫與評論",
        url: "https://par.npac-ntch.org/tw/article/doc/HHSTPDT67C",
        quote: "從味覺記憶出發，溫柔訴說被掩蓋的故事。記錄排練現場與慢島劇團如何藉由料理氣味喚起被主流歷史遮蔽的常民生命記憶。"
      },
      {
        title: "2026上半年表演藝術攻略｜全臺「五大藝術節＆10檔演出」推薦",
        media: "Marie Claire 美麗佳人",
        author: "美麗佳人編輯部",
        date: "2026.01",
        tag: "年度必看演出推薦",
        url: "https://www.marieclaire.com.tw/lifestyle/art/91258",
        quote: "「獻給想理解我們從何而來的你。」本劇從『一道煮不出的家鄉味』出發，藉由追尋父親味道的旅程，踏上一條橫跨雲南、緬甸、泰國到臺灣的華人移民史。"
      },
      {
        title: "多國劇團齊聚！鐵玫瑰藝術節15周年 探索多元文化",
        media: "聯合新聞網",
        author: "生活文化版",
        date: "2026.01",
        tag: "藝術節專題報導",
        url: "https://udn.com/news/story/7324/9277151",
        quote: "鐵玫瑰藝術節15周年焦點節目報導，聚焦慢島劇團深刻的田調力量，探索多元族群文化與歷史記憶。"
      },
      {
        title: "慢島劇團《南薑．香茅．罌粟花》鐵玫瑰藝術節專題推薦",
        media: "鐵玫瑰藝術節專題焦點",
        author: "官方社群特寫",
        date: "2026",
        tag: "藝術節精選節目",
        url: "https://reurl.cc/O6exn3",
        quote: "慢島劇團年度重點大戲，融合現場料理香氣與滇緬移民深刻田調，引領觀眾走進歷史與常民生命現場。"
      },
      {
        title: "橫跨四國、三代人生命溯源 慢島劇團《南薑 香茅 罌粟花》上演",
        media: "聯合新聞網",
        author: "文化藝文焦點",
        date: "2026.02",
        tag: "媒體特寫報導",
        url: "https://udn.com/news/story/7266/9490742",
        quote: "橫跨中、緬、泰、台四國邊境，跨越三代人的生命溯源史詩，以料理香氣與家族記憶重構當代舞台。"
      },
      {
        title: "歷史的縫隙與個體的歸途——編導姜富琴《南薑．香茅．罌粟花》的十年拓墾",
        media: "台新藝術基金會 ARTalks",
        author: "ARTalks 專訪",
        date: "2026",
        tag: "主創編導深度專訪",
        url: "https://talks.taishinart.org.tw/members/735/40018",
        quote: "深度專訪編導姜富琴，剖析十年創作拓墾歷程，如何由家族食譜出發，在歷史的巨大縫隙中為無名流離者尋找個體的歸途。"
      }
    ]
  },
  {
    id: "The Sea Floaters",
    title: "海上漂浮者",
    enTitle: "The Sea Floaters",
    category: "social",
    categoryName: "社會與勞動",
    year: "2025",
    featured: false,
    tagline: "在無邊大洋中搖晃的靈魂，遠洋漁工的孤寂與呼喚",
    enTagline: "Souls adrift on the boundless ocean — the solitude and desperate calls of distant-water fishermen.",
    image: "images/海上漂浮者.jpg",
    gallery: [
      "images/海上漂浮者/20121211-海上漂浮者-0005.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0080.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0290.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0334.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0371.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0445.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0494.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0700.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-0904.jpg",
      "images/海上漂浮者/20121211-海上漂浮者-1041.jpg"
    ],
    photoCredit: "慢島劇團",
    description: "關注遠洋漁業中外籍漁工的人權與身心處境。捨棄繁複佈景，運用純粹的聲響與肢體張力，呈現人在極限自然與勞動剝削中的漂泊與尊嚴。",
    enDescription: "A piercing investigation into the human rights and psychological plight of migrant fishermen in the distant-water fishing industry. Stripping away ornate stage sets, the production harnesses raw vocal acoustics and visceral physical theatre to portray human vulnerability, exploitation, and enduring dignity against the untamed sea.",
    director: "楊維真、王珂瑤",
    playwright: "王珂瑤 | 原始文本：宋云亨",
    cast: "楊維真、Anastasia Melati Listyorini（印尼舞者）、王珂瑤",
    credits: [
      "【製作與主創團隊】",
      "製作人｜劉宇真",
      "創作成員｜楊維真、王珂瑤",
      "原始劇本｜宋云亨、王珂瑤",
      "戲劇顧問｜林欣怡",
      "排練助理｜謝華容",
      "【演員名單】",
      "演出者｜王珂瑤（說書人）、楊維真（現代舞）、Anastasia Melati Listyorini（特邀印尼宮廷舞者）",
      "【設計與技術團隊】",
      "音樂設計｜蔣韜",
      "空間裝置｜劉季易",
      "燈光技術指導｜簡芳瑜",
      "【行政、宣傳與紀錄】",
      "票務暨現場製作｜莊博旭",
      "社群媒體小編｜羅靖茹",
      "劇照攝影｜陳又維",
      "演出錄影｜尕華城文化實驗室",
      "【主辦與演出單位】",
      "演出單位｜慢島劇團（2025 桃園市傑出演藝團隊）",
      "共同主辦｜PLAYground 南村劇場、慢島劇團",
      "服裝贊助｜OMAKE"       
    ],
    highlights: [
      "實驗性聲音設計還原大洋孤舟的幽閉與恐懼",
      "以詩意的劇場語言直視冷硬人權議題"
    ],
    youtubeEmbedId: "DjBFBay4Ka0",
    youtubeUrl: "https://www.youtube.com/watch?v=DjBFBay4Ka0",
    reviews: [
      {
        title: "外籍漁工的陰性書寫《海上漂浮者》",
        media: "表演藝術評論台",
        author: "林乃文",
        date: "2026.01.05",
        tag: "專文劇評",
        url: "https://pareviews.ncafroc.org.tw/comments/1b53c8a2-686f-475b-b785-c64853333a02",
        quote: "由三位女性藝術家，為現實中幾乎全為男性的遠洋漁船勞動者完成一次陰性書寫。以聲音、身體與道具的簡潔語彙，書寫外籍漁工的處境，透過創作者內化之後的美學投影。"
      }
    ]
  },
  {
    id: "die-and-return",
    title: "死去活來２～死去回來",
    enTitle: "To Die and Return 2",
    category: "social",
    categoryName: "黑色喜劇與生死告別",
    year: "2024 桃園藝術綠洲",
    featured: false,
    tagline: "向黃春明鄉土小說致敬，荒誕黑色喜劇裡的老人生存悲歌與道別練習",
    enTagline: "An homage to Huang Chun-ming's nativist fiction — a bittersweet black comedy exploring elderly care, survival, and parting.",
    image: "images/死去活來2.jpg",
    gallery: [
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1247.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1386.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1501.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1732.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC2028.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC2339.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC2750.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_Z620216.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_Z620532.jpg",
      "images/1101 《死去回來》彩排 攝影／林育全/舞台圖慢島劇團《死去回來》彩排 攝影／林育全_Z620452.jpg"
    ],
    photoCredit: "林育全",
    description: "向鄉土文學泰斗黃春明致敬，由新銳劇作家林國峰編導、喜劇笑匠吳世偉等人主演的黑色喜劇。一個人可以死幾次？粉娘帶著最後一口氣回家，整個家族悲喜交加看粉娘躺下又起來！以歷史建築米倉劇場為演出場地，搬演這些老古董的故事，幽默呈現老人生存的悲歌、照護荒謬與深情道別。",
    enDescription: "A raucous black comedy on elderly care and the art of saying goodbye.",
    director: "林國峰",
    playwright: "林國峰",
    cast: "吳世偉、李潔亭、李淑文、李本善、羅香菱、劉大瑋",
    credits: [
      "【製作與主創團隊】",
      "製作人｜王珂瑤",
      "原著小說｜黃春明《放生》（〈死去活來〉篇章）",
      "編劇、導演｜林國峰",
      "導演助理｜王廷瑋",
      "【演員名單】",
      "主要演出｜吳世偉、李潔亭、李淑文、李本善、羅香菱、劉大瑋",
      "【設計與技術團隊】",
      "舞台設計｜吳修和",
      "舞台空間結構｜劉季易",
      "燈光設計｜黃俊諺",
      "音樂設計｜蔡秉衡",
      "服裝設計｜黃泳淇",
      "妝髮設計｜鍾其甫",
      "妝髮助理｜黃琪元",
      "舞台監督｜張婷婷",
      "音響技術指導｜劉曲恩",
      "燈光技術指導｜林致謙",
      "舞台燈光技術人員｜虞仕駿、吳孟庭",
      "【行政、宣傳與紀錄】",
      "執行製作｜莊博旭",
      "平面設計｜歐陽文慧",
      "行銷宣傳／劇團行政｜許雅婷",
      "劇團行政｜唐園荷、邱子謙",
      "社群媒體小編｜羅靖茹",
      "劇照攝影｜林育全",
      "演出錄影｜尕華城文化實驗室",
      "【指導與主辦單位】",
      "指導單位｜桃園市政府、桃園市議會",
      "主辦單位｜桃園市政府文化局",
      "演出單位｜慢島劇團（獲選 2024 桃園藝術綠洲創作計畫）"
    ],
    highlights: [
      "向台灣鄉土文學大師黃春明致敬之作",
      "新銳劇作家林國峰編導、喜劇笑匠吳世偉主演",
      "獲選 2024 桃園藝術綠洲創作計畫",
      "搬演荒誕家庭紛爭與道別練習"
    ],
    youtubeEmbedId: "93O2Y6bsMyc",
    youtubeUrl: "https://www.youtube.com/watch?v=93O2Y6bsMyc",
    reviews: [
      {
        title: "向黃春明鄉土小說致敬——慢島劇團《死去活來２～死去回來》",
        media: "OPENTIX 兩廳院文化生活",
        date: "2024.11",
        tag: "節目介紹與展演焦點",
        url: "https://www.opentix.life/event/1806231511107076097",
        quote: "講述主角粉娘『死去又活來』引發的荒誕家庭紛爭，呈現老人生存的悲歌與道別練習。"
      },
      {
        title: "國藝會成果檔案庫—綠洲島嶼｜慢島劇團《死去活來２～死去回來》",
        media: "國家文化藝術基金會成果檔案庫",
        date: "2024",
        tag: "官方成果典藏",
        url: "https://archive.ncafroc.org.tw/result?id=9757aed9463b41459b3ad3d6a4f5aac5",
        quote: "搬演這些老古董的故事，呈現老年人生的苦澀幽默與緩慢等待。"
      },
      {
        title: "慢島劇團《死去活來2：死去回來》簡介影片與彩排紀錄",
        media: "慢島劇團官方社群影音",
        date: "2024.10",
        tag: "影音特寫",
        url: "https://www.facebook.com/SlowIsland/videos/%E6%85%A2%E5%B3%B6%E5%8A%87%E5%9C%98%E6%AD%BB%E5%8E%BB%E6%B4%BB%E4%BE%86-%F0%9D%9F%AE%E6%AD%BB%E5%8E%BB%E5%9B%9E%E4%BE%86/1046735357243253/",
        quote: "一個人可以死幾次？粉娘帶著最後一口氣回家，整個家族悲喜交加看粉娘躺下又起來！"
      }
    ]
  },
  {
    id: "hybrid-vibration",
    title: "混血振動",
    enTitle: "Hybrid Vibration",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    year: "2023 - 2024",
    featured: false,
    tagline: "身體與音律的交疊共振，空間與歷史的交錯共鳴",
    enTagline: "The overlapping resonance of body and rhythm, echoing space and historical memory.",
    image: "images/混血振動.jpg",
    gallery: [
      "images/混血振動 226彩排照片選 小樺陳/Saito 紙鶴陳小樺攝影.JPG",
      "images/混血振動 226彩排照片選 小樺陳/安琪 陳小樺攝影.JPG",
      "images/混血振動 226彩排照片選 小樺陳/楊維真與唐明 撥弦陳小樺攝影.JPG",
      "images/混血振動 226彩排照片選 小樺陳/楊維真與唐明 桌子陳小樺攝影.JPG",
      "images/混血振動 226彩排照片選 小樺陳/楊維真面具 陳小樺攝影.JPG",
      "images/混血振動 226彩排照片選 小樺陳/楊維真面具3人陳小樺攝影.JPG",
      "images/楊維真與唐明 攝影許雅婷/DSC_0289.JPG",
      "images/楊維真與唐明 攝影許雅婷/DSC_0569.JPG",
      "images/楊維真與唐明 攝影許雅婷/維真劇照_01.jpg",
      "images/楊維真與唐明 攝影許雅婷/維真劇照_04.jpg"
    ],
    photoCredit: "陳小樺、許雅婷",
    description: "跨領域實驗聲音劇場。從身體的混血、語言的雜交到器樂的跨界，讓觀眾用耳朵與皮膚直接感受文化的共振。",
    enDescription: "A cross-disciplinary experimental sound-theatre piece exploring hybridized bodies, linguistic creolization, and cross-genre instrumentation. Audiences experience cultural collisions and sonic reverberations directly through ear and skin.",
    director: "楊維真",
    playwright: "慢島跨領域創作群 / 文本顧問：邱安琪 / 音樂總監：Damien Bernard",
    cast: "楊維真、Damien Bernard（唐明）、齊藤伸一",
    credits: [
      "【核心創作與演職團隊】",
      "編導｜楊維真",
      "共創暨演出｜楊維真、Damien Bernard（唐明）、齊藤伸一",
      "文本顧問｜邱安琪",
      "音樂總監｜Damien Bernard",
      "技術統籌｜劉季易",
      "演出場地｜歷史建築「大院子」",
      "【劇團團隊】",
      "團長｜王珂瑤",
      "前期製作｜許雅婷",
      "主視覺及設計｜６７１",
      "宣傳和現場協力｜羅靖茹"
    ],
    highlights: [
      "回歸聲音與身體震動的純粹本質",
      "跨界展演，融會傳統樂器、撥弦與當代實驗聲響",
      "探索身體混血、語言雜交與族群音律共振",
      "劇照攝影：陳小樺"
    ],
    youtubeEmbedId: "peOk4aKjfQY",
    youtubeUrl: "https://www.youtube.com/watch?v=peOk4aKjfQY",
    extraVideos: [
      {
        label: "慢慢飛小小藝術季演出",
        embedId: "JShgoeVu__c",
        url: "https://www.youtube.com/watch?v=JShgoeVu__c&t=6s"
      }
    ],
    reviews: []
  },
  {
    id: "childrens-secret-parcels",
    title: "孩子們的祕密快遞",
    enTitle: "Children's Secret Parcels",
    category: "children",
    categoryName: "兒童思辨",
    year: "2023 首演 / 巡演",
    featured: false,
    tagline: "包裹裡裝滿世界各地戰火下孩子的故事，以拼布，物件劇場 溫柔對話和平",
    enTagline: "Parcels packed with wartime children's tales worldwide — a tender dialogue on peace through patchwork and object theatre.",
    image: "images/孩子們的祕密快遞.jpg",
    gallery: [
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8476.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8480.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8487.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8493.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8527.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8535.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8536.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8555.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8642.jpg",
      "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8739.jpg"
    ],
    photoCredit: "蕭登及（米倉藝術節提供）",
    description: "由林欣怡編導、結合「易起拼布」藝術，以戰爭下的兒童生活、砲火下的移居與難民為主題，透過拼布演繹因戰亂顛沛流離的孩童日常。從〈一千歲的小女孩〉、〈被怪獸帶走的孩子〉到〈沒有太陽的日子〉，將遙遠而沉重的國際人權議題化為溫暖而富有思辨力量的親子劇場。",
    enDescription: "Written and directed by Lin Hsin-yi in collaboration with patchwork artistry, this production addresses children living under bombardment, displacement, and refugee migrations. Moving vignettes—including 'The Thousand-Year-Old Girl' and 'Days Without Sun'—transform harrowing global human rights issues into warm, thoughtful family theatre.",
    director: "林欣怡",
    playwright: "林欣怡 / 拼布：易起拼布 / 音樂設計：李昀 燈光設計：簡芳瑜",
    cast: "劉峻豪、王珂瑤",
    credits: [
      "導演｜林欣怡",
      "拼布｜易起拼布",
      "編劇｜林欣怡",
      "音樂設計｜李昀",
      "演員｜劉峻豪、王珂瑤",
      "燈光設計、技術舞監｜簡芳瑜",
      "燈光技術指導｜連偲妘",
      "裝台技術｜張紹承、許皓宇",
      "製作人｜王珂瑤",
      "宣傳、前台｜羅靖茹",
      "劇團行政、票務｜唐園荷",
      "舞台美術｜劉季易",
      "現場製作｜莊博旭",
      "平面設計｜林育全",
      "劇團經理｜許雅婷",
      "錄影剪接｜尕華城電影社"
    ],
    highlights: [
      "獲選國家文化藝術基金會專案補助",
      "巡演台北河神的丸子、台南愛國婦人會館等全台多處",
      "結合手工拼布藝術，溫柔對話戰火與難民議題",
      "寫給未曾經歷戰爭的孩子，也寫給守護每個孩子的大人"
    ],
    youtubeEmbedId: "G6bgdp0gT7g",
    youtubeUrl: "https://www.youtube.com/watch?v=G6bgdp0gT7g",
    reviews: [
      {
        title: "《孩子們的祕密快遞》官方新聞稿——以拼布溫柔陪伴孩子思考和平",
        media: "國藝會成果檔案庫 (PDF 官方新聞稿)",
        date: "2023",
        tag: "官方新聞稿",
        url: "https://archive.ncafroc.org.tw/upload/result/9439-E2022/9439-E2022_%E6%96%B0%E8%81%9E%E7%A8%BF_%E5%AD%98%E5%AD%90%E5%80%91%E7%9A%84%E7%A5%95%E5%AF%86%E5%BF%AB%E9%81%9E%E6%96%B0%E8%81%9E%E7%A8%BF_1726225496614.pdf",
        quote: "以戰爭下的兒童生活、砲火下的移居與難民為主題，將艱澀議題轉化為溫柔動人的親子偶劇。"
      },
      {
        title: "《孩子們的祕密快遞》OPENTIX 節目介紹與展演資訊",
        media: "OPENTIX 兩廳院文化生活",
        date: "2023 - 2024",
        tag: "節目介紹",
        url: "https://www.opentix.life/event/1894994922931609601",
        quote: "由林欣怡編導、結合易起拼布藝術，以細膩拼布演繹戰火與和平的深刻思辨。"
      },
      {
        title: "國藝會成果檔案庫—孩子們的祕密快遞｜慢島劇團",
        media: "國家文化藝術基金會成果檔案庫",
        date: "2023",
        tag: "官方成果典藏",
        url: "https://archive.ncafroc.org.tw/result?id=b0a3faff0b15493eac5a4b5a96d61049",
        quote: "慢島劇團將難民與戰火議題以柔軟的拼布質地結合演出，深獲親子與教育界熱烈迴響。"
      }
    ]
  },
  {
    id: "a-play-for-the-living-in-a-time-of-extinction",
    title: "寫給滅絕時代",
    enTitle: "A Play for the Living in a Time of Extinction",
    category: "social",
    categoryName: "跨國共製與生態思辨",
    year: "2022 兩廳院秋天藝術節",
    featured: false,
    tagline: "2022 秋天藝術節跨國共製：在物種消逝的臨界點，以人力發電劇場叩問生態未來",
    enTagline: "2022 Autumn Play Festival Co-Production: Questioning our ecological future through pedal-powered zero-carbon theatre.",
    image: "images/寫給滅絕時代.jpg",
    gallery: [
      "images/寫給滅絕時代.jpg",
      "images/2021寫給滅絕時代/_DSC0882_DxO - 複製.jpg",
      "images/2021寫給滅絕時代/_DSC1403_DxO.jpg",
      "images/2021寫給滅絕時代/_DSC1937_DxO.jpg",
      "images/2021寫給滅絕時代/_DSC2044_DxO.jpg"
    ],
    photoCredit: "國家兩廳院提供",
    description: "兩廳院秋天藝術節跨國旗艦共製計畫，林欣怡擔任台灣導演、慢島劇團擔任製作執行。由英國導演 Katie Mitchell 與劇作家 Miranda Rose Hall 發起之跨國永續戲劇。演出現場全數電力皆由單車人力踩踏即時發電供應，在極低碳排的劇場形式中，直面全球第六次物種大滅絕的生態危機與人類責任。",
    enDescription: "A flagship sustainable international co-production initiated by British director Katie Mitchell and playwright Miranda Rose Hall, directed in Taiwan by Lin Hsin-yi with Slow Island Theatre. Powered entirely by live cycling generators on stage, this ultra-low-carbon production confronts the sixth mass extinction and humanity's planetary responsibility.",
    director: "凱蒂・米契爾 Katie Mitchell（原創構想・導演） / 林欣怡（台灣導演）",
    playwright: "米蘭達‧蘿絲‧霍爾 Miranda Rose Hall（原創劇本） / 國家兩廳院（臺北）演出製作",
    cast: "游以德（演員）",
    credits: [
      "【台灣在地團隊】",
      "台灣導演、劇本改編｜林欣怡",
      "田調顧問、劇本改編｜謝一誼",
      "演員、劇本改編｜游以德",
      "演員顧問｜余曉萍",
      "製作人｜藍貝芝、黃靖媛",
      "發電裝置設計｜王仲堃",
      "舞台設計｜林欣伊",
      "燈光設計｜劉柏欣",
      "音樂設計｜李慈湄",
      "舞台監督｜鄧湘庭",
      "導演助理｜王熙淳",
      "執行製作｜莊博旭",
      "行銷宣傳｜周劭璇",
      "發電裝置設計助理｜莊金龍、許瑋庭",
      "舞台設計助理｜吳映竺",
      "舞台技術指導｜胡皓恩",
      "光影協創｜楊雯涵",
      "燈光技術指導｜唐敬雅、王芳寧",
      "造型執行｜吳宇真",
      "製作執行｜慢島劇團",
      "【原創團隊】",
      "構思、導演｜凱蒂・米契爾（Katie Mitchell）",
      "劇本｜米蘭達‧蘿絲‧霍爾（Miranda Rose Hall）",
      "台灣導演｜林欣怡（Hsin-I Lin）",
      "戲劇構作｜南多‧席爾（Ntando Cele）",
      "作曲｜保羅‧克拉克（Paul Clark）",
      "額外聲音設計｜電子農民（Elisha Millard）",
      "演出製作單位｜國家兩廳院（臺北）"
    ],
    highlights: [
      "國家兩廳院秋天藝術節跨國共製旗艦作品",
      "林欣怡擔任台灣導演與劇本改編，慢島劇團製作執行",
      "全場舞台照明與音響皆由單車騎士現場踏踩發電",
      "直視地球生態臨界點的深刻反思"
    ],
    youtubeEmbedId: "4vy3PIdo_4s",
    youtubeUrl: "https://youtu.be/4vy3PIdo_4s",
    reviews: [
      {
        title: "寫給「誰」的滅絕時代？用劇場談永續，讓我們有意識地去浪費",
        media: "典藏 ARTouch",
        author: "李橋河",
        date: "2022.12",
        tag: "專文劇評",
        url: "https://artouch.com/art-views/content-131568.html",
        quote: "李橋河專文評《寫給滅絕時代》，反思兩廳院參與 STAGES 永續劇場聯盟與人類世劇場美學，直視劇場永續倡議中的意識與邊界。"
      },
      {
        title: "如果要讓劇場變綠？在劇場裡談人類世",
        media: "國藝會線上誌",
        author: "吳思鋒",
        date: "2022.11",
        tag: "專文劇評",
        url: "https://mag.ncafroc.org.tw/article_detail?sid=883",
        quote: "劇評人吳思鋒發表於國藝會線上誌，批判性檢視作品中的劇院中心論與全球不公正議題，深入探討永續轉型的真實挑戰。"
      },
      {
        title: "如何觀看跨國共製劇作《寫給滅絕時代》？從一場植物園散策到高實驗性劇場演出",
        media: "MOT TIMES 明日誌",
        author: "MOT TIMES 明日誌",
        date: "2022.10",
        tag: "深度報導",
        url: "https://www.mottimes.com/article/detail/4926",
        quote: "詳細記錄台北植物園走讀至林欣怡導演、謝一誼田調與游以德獨角戲的生態體驗，呈現劇場突破殿堂限制走入自然場域的實踐。"
      },
      {
        title: "藝術與永續共融跨國共製《寫給滅絕時代》——導演林欣怡如何面對史上最嚴苛用電挑戰？",
        media: "環境資訊中心",
        author: "環境資訊中心",
        date: "2022.10",
        tag: "專題專訪",
        url: "https://e-info.org.tw/node/235578",
        quote: "報導林欣怡導演團隊如何突破 150W 腳踏車踩踏發電限制並融入亞泥等在地議題，探討當代劇場人如何直面能源與生態極限。"
      },
      {
        title: "那，臺灣要給出什麼樣的聲音？——《寫給滅絕時代》的在地視角",
        media: "國家兩廳院 NTCH",
        author: "國家兩廳院",
        date: "2022.10",
        tag: "深度對談",
        url: "https://npac-ntch.org/discover/voice/6684-%E9%82%A3%EF%BC%8C%E8%87%BA%E7%81%A3%E8%A6%81%E7%B5%A6%E5%87%BA%E4%BB%80%E9%BA%BC%E6%A8%A3%E7%9A%84%E8%81%B2%E9%9F%B3%EF%BC%9F%E2%80%94%E2%80%94%E3%80%8A%E5%AF%AB%E7%B5%A6%E6%BB%85%E7%B5%95%E6%99%82%E4%BB%A3%E3%80%8B%E7%9A%84%E5%9C%A8%E5%9C%B0%E8%A6%96%E8%A7%92%EF%BC%88%E4%B8%8B%E7%AF%87%EF%BC%89",
        quote: "國家兩廳院專訪導演林欣怡談零差旅國際共製與台灣在地對話歷程，思索台灣在面對全球生態危機時所發出的原創劇場聲音。"
      },
      {
        title: "2022秋天藝術節：跨國共製《寫給滅絕時代》官方專題紀錄",
        media: "國家兩廳院 NTCH",
        author: "兩廳院影音",
        date: "2022.10",
        tag: "跨國共製旗艦",
        url: "https://youtu.be/4vy3PIdo_4s",
        quote: "慢島劇團作為台灣演出執行單位，與歐洲頂尖劇場團隊遠端共製，以人力踩踏發電直視全球第六次大滅絕危機。"
      }
    ]
  },
  {
    id: "storytellers",
    title: "自由的說書人",
    enTitle: "Storytellers",
    category: "social",
    categoryName: "社會與人權思辨",
    year: "2022 首演",
    featured: false,
    tagline: "在歷史與當代的斷裂處，落語、獨腳戲與即興音樂的犀利對談",
    enTagline: "Sharp dialogues at the fracture of history and modernity through Rakugo, monologue, and live accordion improvisation.",
    image: "images/自由的說書人.jpg",
    gallery: [
      "images/2021 自由的說書人/IMG_7404.jpg",
      "images/2021 自由的說書人/IMG_7538.jpg",
      "images/2021 自由的說書人/IMG_7720.jpg",
      "images/2021 自由的說書人/IMG_米倉劇場提供24.jpg",
      "images/2021 自由的說書人/IMG_米倉劇場提供57.jpg",
      "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _DSC7467.jpg",
      "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _DSC7598.jpg",
      "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _DSC7919.jpg",
      "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _林育全7609.jpg",
      "images/2021 自由的說書人/自由的說書人 音樂 張瀚中.jpg"
    ],
    photoCredit: "林育全、米倉劇場提供",
    description: "慢島劇團極具思辨張力的實驗之作，首演於米倉黑盒子劇場「慢島慢慢飛小小藝術季」。本劇由三位風格各異的說書人搭配音樂家張瀚中的現場手風琴即興音樂，呈現三段源自海洋與島嶼的深刻故事：張艥米（文本：蔣仁杰）訴說台灣賽鴿的飛行命運與島嶼飄浪；戴華旭（共創：開樂亭凡笑／戴開成）以日式落語結合常民詼諧語調笑看人間悲歡；王珂瑤（共創：宋云亨）深情凝視海洋移工、女性與島嶼生存的真實困頓。在虛構與紀實之間自由穿梭，直視當代人權、勞動與生命尊嚴。",
    enDescription: "A provocative experimental piece interweaving three compelling island and maritime tales with live accordion improvisation: homing pigeon races mirroring island drift; humorous Japanese Rakugo examining everyday human foibles; and intimate examinations of migrant maritime workers and female survival. Freely traversing documentary and fiction, the piece stares unflinchingly into labor, dignity, and contemporary human rights.",
    director: "米倉劇場藝術節獨角說書人形式（三段關於海洋與島嶼的故事）",
    playwright: "張艥米、戴華旭、戴開成、王珂瑤 / 製作人：黃馨玉",
    cast: "張艥米、戴華旭、戴開成、王珂瑤",
    credits: [
      "【製作團隊】",
      "演出計畫｜米倉劇場藝術節（三段關於海洋與島嶼的故事）",
      "製作人｜黃馨玉",
      "【說書人與共創／文本團隊】",
      "說書人｜張艥米（文本撰寫：蔣仁杰）",
      "說書人｜戴華旭（共同創作：開樂亭凡笑／戴開成）",
      "說書人｜王珂瑤（共同創作：宋云亨）",
      "【設計與技術團隊】",
      "燈光設計／舞台監督｜林育全",
      "文宣攝影｜林育全",
      "劇團行政｜唐園荷",
      "劇團宣傳｜羅靖茹"
    ],
    highlights: [
      "首演於米倉黑盒子劇場「慢島慢慢飛小小藝術季」",
      "日式落語、獨腳戲與現場手風琴即興音樂的跨界融合",
      "以說書人的自由姿態穿梭於虛構與紀實之間"
    ],
    youtubeEmbedId: "GgyAoxNLkr8",
    youtubeUrl: "https://www.youtube.com/watch?v=GgyAoxNLkr8",
    reviews: []
  },
  {
    id: "wild-pistil",
    title: "狂放的花蕊",
    enTitle: "Wild Pistil",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    year: "2021 晴耕雨讀小書院",
    featured: false,
    tagline: "在獨立書店草地與書頁間，女性生命與自然花語的狂野吟唱",
    enTagline: "A wild chant of feminine awakening and floral vitality amidst bookstore lawns and literary pages.",
    image: "images/狂放的花蕊.jpg",
    gallery: [
      "images/狂放的花蕊照片/257359347_10223418382221507_300265933313899992_n.jpeg",
      "images/狂放的花蕊照片/259631074_10223418379701444_8370516118624315365_n.jpeg",
      "images/狂放的花蕊照片/259773892_10223418382381511_5141404045705171636_n.jpeg",
      "images/狂放的花蕊照片/260411704_10223418381141480_8822518646197429072_n.jpeg",
      "images/狂放的花蕊照片/260684056_10223418378741420_2672059856363914891_n.jpeg",
      "images/狂放的花蕊照片/IMG_2232.jpg",
      "images/狂放的花蕊照片/姿君.jpeg",
      "images/狂放的花蕊照片/姿君2.jpeg",
      "images/狂放的花蕊照片/姿君唱.jpeg",
      "images/狂放的花蕊照片/螢幕快照 2022-06-21 上午11.06.27.png"
    ],
    photoCredit: "慢島劇團",
    description: "特定場域實驗演出，於龍潭獨立書店「晴耕雨讀小書院」草地與古樸院落開演。由楊維真與許淑慧主創與演出，結合自然綠意、人聲吟唱、身體舞動與樂器敲擊，在微風與書香之間綻放女性生命野性而純粹的內在覺醒。",
    enDescription: "A site-specific experimental performance staged on the lawns and historic courtyard of Longtan's independent bookstore. Blending lush greenery, vocal chanting, dance movement, and acoustic percussion, it celebrates the wild, uninhibited awakening of womanhood nestled between gentle breezes and the scent of books.",
    director: "楊維真",
    playwright: "晴耕雨讀小書院藝文沙龍 / 製作人：王珂瑤、許雅婷",
    cast: "《獨舞篇》表演者：楊維真、現場樂師：許淑慧；《女高音篇》表演者：郭姿君、現場樂師：陳芷芸",
    credits: [
      "【製作團隊】",
      "演出地點｜桃園獨立書店「晴耕雨讀小書院」",
      "製作人｜王珂瑤、許雅婷",
      "【演出陣容】",
      "《獨舞篇》表演者｜楊維真",
      "《獨舞篇》現場樂師｜許淑慧",
      "《女高音篇》表演者｜郭姿君",
      "《女高音篇》現場樂師｜陳芷芸"
    ],
    highlights: [
      "晴耕雨讀小書院特定場域環境演出",
      "結合文學、肢體與器樂吟詠女性內在覺醒",
      "自然環境與親密觀演關係的詩意碰撞"
    ],
    youtubeEmbedId: "01Gh5mlNd-4",
    youtubeUrl: "https://www.youtube.com/watch?v=01Gh5mlNd-4",
    reviews: [
      {
        title: "柔軟的傻，是這樣推送著巧勁《狂放的花蕊－獨舞》",
        media: "表演藝術評論台",
        author: "戴君安",
        date: "2021.12.09",
        tag: "專文劇評",
        url: "https://pareviews.ncafroc.org.tw/comments/3becc45a-4c5a-4682-84c9-860dac3a3694",
        quote: "舞者楊維真和樂師許淑慧，兩人將西方音樂與當代的肢體、南管的曲調，與梨園身段糅合於一體，在龍潭晴耕雨讀小書院的二手書房木地板與草地上，展開一場親密而具有巧勁的身體對話。"
      }
    ]
  },
  {
    id: "ninis-secret",
    title: "妮妮的小祕密",
    enTitle: "Nini's Little Secret",
    category: "children",
    categoryName: "兒童偶戲",
    year: "2021 - 至今",
    featured: false,
    tagline: "溫柔陪伴孩子守護自己的身體，巡迴偏鄉與校園的親子偶戲",
    enTagline: "Tenderly accompanying children to protect their bodies — a touring puppetry show for grassroots communities and schools.",
    image: "images/妮妮的小祕密.jpg",
    gallery: [
      "images/妮妮的小祕密/2022華山版/0707.jpg",
      "images/妮妮的小祕密/2022華山版/0707_01.jpg",
      "images/妮妮的小祕密/2022華山版/0707_03.jpg",
      "images/妮妮的小祕密/2022華山版/0707_04.jpg",
      "images/妮妮的小祕密/2022華山版/0707_07.jpg",
      "images/妮妮的小祕密/2022華山版/0707_12.jpg",
      "images/妮妮的小祕密/2022華山版/0707_19.jpg",
      "images/妮妮的小祕密/2022華山版/0709妮妮_01.jpg",
      "images/妮妮的小祕密/2022華山版/20220708-0710_220712_0001.jpg",
      "images/妮妮的小祕密/2022華山版/20220708-0710_220712_0011.jpg"
    ],
    photoCredit: "許雅婷、羅靖茹",
    description: "改編自和英出版社「家族相簿」，慢島劇團以細膩生動的偶戲操作、親切童趣的音樂，帶領孩子學習辨識「好的祕密」與「不好的祕密」，溫柔而堅定地傳遞身體界線與身體自主權的核心觀念。",
    enDescription: "Adapted from Heryin Publishing's picture book, this delicate puppetry production uses whimsical music and lively puppet craft to help children distinguish between 'good secrets' and 'bad secrets', tenderly yet firmly imparting the vital concepts of bodily boundaries and personal autonomy.",
    director: "蔣禎耘（偶戲導演） / 陳小樺（影像導演、後製剪接）",
    playwright: "改編自和英出版社「家族相簿」 / 音樂設計：鯉魚 / 製作人：許雅婷、王珂瑤 ",
    cast: "盧侑典、陳韻如、王珂瑤；配音：劉季易、鯉魚、盧侑典、王珂瑤、黃好好",
    credits: [
      "共同製作｜尕華城文化實驗室、慢島劇團",
      "影像導演、後製剪接｜陳小樺",
      "製作人｜王珂瑤",
      "執行製作｜許雅婷",
      "偶戲導演｜蔣禎耘",
      "音樂設計｜鯉魚",
      "戲偶製作｜陳玉琦",
      "演員｜盧侑典、陳韻如、王珂瑤",
      "配音｜劉季易、鯉魚、盧侑典、王珂瑤、黃好好",
      "攝影｜陳君典、陳俊樺",
      "劇照｜許雅婷、羅靖茹",
      "行政｜唐園荷",
      "道具設計｜吳亮萱＆山峸製作設計",
      "標準字設計｜林育全",
      "【原著改編與特別鳴謝】",
      "改編出處｜「妮妮的小祕密」改編自和英出版社「家族相簿」",
      "特別感謝｜和英出版社、周逸芬、林欣怡、阿義老師、Mickey"
    ],
    highlights: [
      "改編自和英出版社「家族相簿」",
      "長期巡演全台偏鄉小學、幼兒園與藝術節",
      "演出結合身體自主權互動工作坊",
      "深受教育界、家長與兒童肯定"
    ],
    youtubeEmbedId: "tAOKBfeZeXk",
    youtubeUrl: "https://www.youtube.com/watch?v=tAOKBfeZeXk",
    extraVideos: [
      { label: "精選偶戲片段", embedId: "VNPjph4giks", url: "https://www.youtube.com/watch?v=VNPjph4giks" },
      { label: "校園推廣短片", embedId: "hSuyHvoxUs4", url: "https://www.youtube.com/watch?v=hSuyHvoxUs4" }
    ],
    reviews: [
      {
        title: "告別說教！花蓮藝文下鄉偶戲引導偏鄉學童認識身體自主權",
        media: "中時新聞網",
        date: "2026.09",
        tag: "藝文下鄉報導",
        url: "https://www.chinatimes.com/realtimenews/20260907001777-260421",
        quote: "報導花蓮縣文化局邀請慢島劇團下鄉至偏鄉國小巡演《妮妮的小祕密》，以故事與偶戲引導學童建立身體自主權與學習求助。"
      },
      {
        title: "慢島劇團《妮妮的小祕密》走進花蓮南北校園以溫柔偶戲陪伴孩子認識身體界線",
        media: "花蓮縣文化局",
        date: "2026",
        tag: "官方新聞稿",
        url: "https://www.hccc.gov.tw/zh-tw/News/Detail/15636",
        quote: "官方新聞稿，介紹慢島劇團自 110 年起投入幼兒身體界線議題、全臺巡演逾 60 場的成果與活動細節。"
      },
      {
        title: "你的感覺好重要！慢島劇團《妮妮的小祕密》 引導小朋友認識身體界線",
        media: "中央廣播電臺 (Rti)",
        date: "2022",
        tag: "電台深度專訪",
        url: "https://www.rti.org.tw/news/view/id/2136479",
        quote: "專訪慢島劇團團長王珂瑤，探討本劇改編繪本《家族相簿》之初衷，以及演後帶領孩童練習「說不要」與積極同意權。"
      },
      {
        title: "你的感覺好重要！慢島劇團《妮妮的小秘密》 引導小朋友認識身體界線",
        media: "僑務電子報 OCAC NEWS",
        date: "2022.06",
        tag: "文教專題報導",
        url: "https://ocacnews.net/article/313170",
        quote: "報導《妮妮的小祕密》於華山親子藝術節的演出訊息，引導幼童認識身體界線與表達情緒。"
      },
      {
        title: "2024玩聚場藝術節演出——妮妮的小祕密",
        media: "C-LAB 臺灣當代文化實驗場",
        date: "2024",
        tag: "藝術節展演資訊",
        url: "https://playarts.clab.org.tw/program/Niniandherlittlesecrets",
        quote: "玩聚場藝術節的節目介紹網頁，包含劇目介紹與慢島劇團簡介。"
      },
      {
        title: "慢島劇團用偶戲揭熟人性騷擾為兒童發聲",
        media: "輔大生命力新聞",
        date: "2021",
        tag: "深度專題採訪",
        url: "https://vita.tw/%E6%85%A2%E5%B3%B6%E5%8A%87%E5%9C%98%E7%94%A8%E5%81%B6%E6%88%B2%E6%8F%AD%E7%86%9F%E4%BA%BA%E6%80%A7%E9%A8%B7%E6%93%BE-%E7%82%BA%E5%85%92%E7%AB%A5%E7%99%BC%E8%81%B2/",
        quote: "輔大生命力新聞專訪慢島劇團團長王珂瑤，報導《妮妮的小祕密》如何以偶戲引導兒童認識熟人性騷擾與身體自主權。"
      },
      {
        title: "慢島劇團用偶戲揭熟人性騷擾 為兒童發聲",
        media: "PeoPo 公民新聞",
        author: "吳宜蒨、謝逢晏、林筠珈",
        date: "2021",
        tag: "公民媒體專題",
        url: "https://www.peopo.org/news/702646",
        quote: "生命力新聞同步刊登於 PeoPo 之完整新聞內文，包含詳細劇照與人物採訪。"
      }
    ]
  },
  {
    id: "men-from-the-highland",
    title: "高地來的男人",
    enTitle: "Men From Indochina",
    category: "migration",
    categoryName: "移民與歷史記憶",
    year: "2020 桃園藝術綠洲",
    featured: false,
    tagline: "從借土養命到落地生根，走私馬幫與老兵穿越砲火的滇緬生命史",
    enTagline: "From borrowing soil to taking root — the war-torn saga of Yunnan-Burmese muleteers and veteran soldiers.",
    image: "images/高地來的男人.jpg",
    gallery: [
      "images/2020高地來的男人劇照/DSC00621.jpg",
      "images/2020高地來的男人劇照/DSC00653.jpg",
      "images/2020高地來的男人劇照/一寸山河一寸血.jpg",
      "images/2020高地來的男人劇照/余程.jpg",
      "images/2020高地來的男人劇照/方立忠.jpg",
      "images/2020高地來的男人劇照/明哲jpg.jpg",
      "images/2020高地來的男人劇照/昭華唱歌.jpg",
      "images/2020高地來的男人劇照/楊定國 氣勢.jpg",
      "images/2020高地來的男人劇照/楊鵬與余程.jpg",
      "images/2020高地來的男人劇照/滅村後.jpg"
    ],
    photoCredit: "王傢軍",
    description: "在台灣有不少滇緬泰孤軍移民來台，他們的二代、三代都已經在這塊土地落地生根，但當年祖父輩們穿過砲彈槍聲、越過大荒大山，落腳台灣的這段歷史故事，如今卻已經快被遺忘。慢島劇團繼《雲裡的女人》之後推出《高地來的男人》，從女性廚房轉向男性戰火與走私馬幫，打破傳統愛國悲情，探討這群漂浪者「借土養命」的堅韌生命歷程。",
    enDescription: "Shifting focus from domestic kitchens to frontline artillery and contraband mule caravans, this production chronicles the forgotten male veterans of the Yunnan Anti-Communist National Salvation Army. Transcending patriotic melodrama, it illuminates the fierce tenacity of wanderers who 'borrowed soil to sustain life' before finally rooting their lives in Taiwan.",
    director: "姜富琴",
    playwright: "姜富琴 / 製作人：王珂瑤、林欣怡",
    cast: "李明哲、江謝保 Pablo、鍾得凡、王言煥、張昌緬、彭艷婷",
    credits: [
      "製作人｜王珂瑤、林欣怡",
      "編劇。導演｜姜富琴",
      "排練助理｜莊博旭",
      "燈光設計｜歐衍穀",
      "舞台設計｜袁浩程",
      "服裝設計｜彭郁勻",
      "音樂設計｜倍帝愛波",
      "合作配樂、混音｜江元宏 Yuanzi",
      "演出｜李明哲、江謝保 Pablo、鍾得凡、王言煥、張昌緬、彭艷婷",
      "行銷票務｜田珈伃",
      "舞台監督｜蘇懷恩",
      "平面設計｜歐陽文慧",
      "演出影像拍攝剪輯｜陳小樺、陳君典",
      "劇照攝影｜王傢軍",
      "服化助理｜黃寶誼",
      "舞台設計助理｜吳亮萱",
      "燈光音響技術人員｜林安國、陳崇仁、趙之邦",
      "泰文翻譯｜胡文亞、鍾得凡",
      "緬文翻譯｜張蘭芳",
      "顧問｜李立劭、王子杰",
      "宣傳片拍攝｜狠主流",
      "紀錄影像來源提供｜邊城啟示錄導演 李立劭",
      "特別感謝｜雷雨田將軍、陳茂修將軍、蔣少良將軍、朱成亮先生、中華救助總會",
      "前台｜胡之之"
    ],
    highlights: [
      "慢島劇團滇緬故事系列（中壢5號倉庫藝文基地）",
      "打破愛國悲情大敘事，走入「借土養命」的微型史",
      "劇照攝影：王傢軍",
      "文史顧問：李立劭導演（《邊城啟示錄》）與王子杰"
    ],
    youtubeEmbedId: "AZ79sESdRwI",
    youtubeUrl: "https://www.youtube.com/watch?v=AZ79sESdRwI",
    reviews: [
      {
        title: "從借土養命到落地生根的離散史《高地來的男人》",
        media: "表演藝術評論台",
        author: "白斐嵐",
        date: "2020.12",
        tag: "深度劇評",
        url: "https://pareviews.ncafroc.org.tw/comments/edd44be2-0172-480a-8917-9d62161f8446",
        quote: "剖析作品從女性廚房轉向男性戰火與馬幫的視角。指出作品打破傳統愛國悲情，跟隨走私馬幫與老兵，探討『國家被土地所取代，地上的黑土堆始終在那』的『借土養命』精神。"
      },
      {
        title: "紀錄滇緬孤軍生命故事 慢島劇團推《高地來的男人》",
        media: "中央廣播電台 RTI",
        author: "江昭倫報導",
        date: "2020.12",
        tag: "央廣專題特寫",
        url: "https://www.youtube.com/watch?v=AZ79sESdRwI",
        quote: "祖父輩們穿過砲彈槍聲、越過大荒大山，落腳台灣的這段歷史故事快被遺忘，慢島劇團繼《雲裡的女人》之後再度推出《高地來的男人》，透過家族紀錄動人的移民生命故事。"
      }
    ]
  },
  {
    id: "women-in-the-clouds",
    title: "雲裡的女人",
    enTitle: "Women From Indochina",
    category: "migration",
    categoryName: "移民與歷史記憶",
    year: "2018 桃園藝術綠洲",
    featured: false,
    tagline: "廚房裡飄出的牛趴敷湯香，第17屆台新藝術獎季提名之作",
    enTagline: "The fragrant steam of beef soup from the kitchen — nominated for the 17th Taishin Arts Award.",
    image: "images/雲裡的女人.jpg",
    gallery: [
      "images/雲裡的女人/IMG_5452.PNG",
      "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109a.jpg",
      "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109c.jpg",
      "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109e.jpg",
      "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109h.jpg",
      "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109m.jpg",
      "images/雲裡的女人/雲裡的女人1009A.jpg",
      "images/雲裡的女人/雲裡的女人1229A.jpg",
      "images/雲裡的女人/雲裡的女人719A.jpg",
      "images/雲裡的女人/雲裡的女人956A.jpg"
    ],
    photoCredit: "王傢軍",
    description: "慢島劇團滇緬移民故事首部曲。以父親留下的家傳菜「牛趴敷湯」為引子，將艱澀幽微的滇緬邊境離散史轉化為充滿滋味與人情溫度的微型史。在特定場域中還原異鄉的廚房視角，打破以男性為中心的戰爭敘事，溫柔撫慰流徙一代的情感。",
    enDescription: "Recreating an immigrant kitchen around heirloom beef offal soup, subverting male-centric war narratives to comfort displaced women.",
    director: "姜富琴（2018年國家文化藝術基金會駐團藝術家）",
    playwright: "製作人：王珂瑤、林欣怡",
    cast: "李明哲、張昌緬、彭艷婷、曾歆雁、曾紫庭、鍾得凡",
    credits: [
      "編導｜姜富琴（2018年國家文化藝術基金會駐團藝術家）",
      "演員｜李明哲、張昌緬、彭艷婷、曾歆雁、曾紫庭、鍾得凡",
      "排練助理｜莊博旭",
      "肢體動作設計｜彭艷婷",
      "舞台設計｜袁浩程",
      "燈光設計｜歐衍穀",
      "音樂設計｜紀柏豪、楊茜茹",
      "服裝設計｜彭郁勻",
      "服裝管理｜莊佩雯",
      "梳化執行｜呂姿瑩",
      "舞台監督｜林欣怡",
      "舞台技術人員｜山峸製作設計",
      "燈光技術人員｜王翊同、林翰生、江坤哲",
      "平面設計｜歐陽文慧",
      "劇照攝影｜王傢軍",
      "演出錄影｜賀顯光、任德昌",
      "藝術總監｜王珂瑤",
      "製作人｜黃馨玉、邱子謙",
      "燈光執行｜有夠亮有限公司",
      "音樂執行｜融聲創意 Zone Sound Creative"
    ],
    highlights: [
      "榮獲第 17 屆台新藝術獎季提名殊榮",
      "首演於中壢5號倉庫藝文基地，特定場域廚房沉浸式演出",
      "以家傳食譜「牛趴敷湯」取代族譜，溫柔翻轉男性戰爭大敘事",
      "劇照攝影：王傢軍"
    ],
    youtubeEmbedId: "oP_vSHbE9Xw",
    youtubeUrl: "https://www.youtube.com/watch?v=oP_vSHbE9Xw",
    reviews: [
      {
        title: "在記載之外的真實《雲裡的女人》",
        media: "表演藝術評論台",
        author: "王奎藺",
        date: "2018.11",
        tag: "台新藝術獎提名劇評",
        url: "https://pareviews.ncafroc.org.tw/comments/ea3817f3-a8fe-4a7e-b212-4326c53da4fc",
        quote: "分析作品如何從尋找家傳『牛趴敷湯』切入，將艱澀的滇緬邊境離散史轉化為可親的微型史；並讚賞特定場域的活用、真實語言口音的還原，以及女性廚房視角對傳統男性戰爭大敘事的溫柔翻轉。"
      },
      {
        title: "我們都是食譜的繼承人——慢島劇團《雲裡的女人》",
        media: "PAR 表演藝術雜誌",
        author: "白斐嵐",
        date: "2018.12",
        tag: "專文特寫",
        url: "https://par.npac-ntch.org/tw/article/doc/F78SDPFPPI",
        quote: "對位美國亞裔離散歷史，探討作品如何以『食譜』取代『族譜』，透過缺少的『那一味』喚起家族與時代記憶，並分析母系傳承在離散敘事中的獨特地位。"
      }
    ]
  },
  {
    id: "midsummer-nights-dream",
    title: "仲夏夜之夢",
    enTitle: "A Midsummer Night's Dream",
    category: "site-specific",
    categoryName: "環境與場域劇場",
    year: "2016 首演 / 2018 - 2019 全台巡演",
    featured: false,
    tagline: "在書院草地與工廠綠洲中，莎翁奇幻愛情喜劇的狂歡盛宴",
    enTagline: "Shakespeare's enchanted romantic comedy staged across bookstore meadows and industrial oases.",
    image: "images/仲夏夜之夢.jpg",
    gallery: [
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_0452.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_0789.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_1015.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_1375.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_1619.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_1980.jpg",
      "images/2016仲夏夜之夢/20161020_仲夏夜之夢_2302.jpg",
      "images/2016仲夏夜之夢/20161028_仲夏夜之夢_0531.jpg",
      "images/2016仲夏夜之夢/20161028_仲夏夜之夢_0925.jpg",
      "images/2016仲夏夜之夢/20161028_仲夏夜之夢_1197.jpg"
    ],
    photoCredit: "許瑋、慢島劇團",
    description: "美國導演 John Maloney 與慢島劇團攜手合作，用「環境劇場（Site-Specific）」重新詮釋莎士比亞最膾炙人口的浪漫喜劇。巡演遍及桃園「晴耕雨讀小書院」、臺北「臺灣博物館南門園區」及台南「InOasis 工業綠洲・奔放 E 倉庫」，八位演員全方位扮裝嬉鬧、串演，打破鏡框舞台與階級界線，在綠地森林與工業空間中展開一場錯點鴛鴦譜的奇幻愛情冒險。",
    enDescription: "Directed by American director John Maloney in collaboration with Slow Island Theatre, this site-specific reinterpretation of Shakespeare's beloved comedy toured independent bookstores, museum courtyards, and warehouse oases. Eight versatile actors played multiple roles, dismantling the proscenium arch to stage a whirlwind of mistaken identities, forest magic, and festive revelry.",
    director: "John Maloney",
    playwright: "威廉・莎士比亞（William Shakespeare） / 藝術總監：王珂瑤",
    cast: "2019巡演版：李潔亭、呂寰宇、吳佩庭、胡禦之、張迪凱、黃建豪、蕭東意、羅香菱；2016野台祭：蕭慧文、李潔亭、黃建豪、徐宏愷、呂寰宇、張迪凱、羅香菱、王珂瑤",
    credits: [
      "【2019 仲夏夜之夢（全台巡演版）】",
      "原著劇本｜威廉・莎士比亞（William Shakespeare）",
      "導演｜John Maloney",
      "藝術總監｜王珂瑤",
      "製作人｜林欣怡、邱子謙",
      "演員陣容｜李潔亭、呂寰宇、吳佩庭、胡禦之、張迪凱、黃建豪、蕭東意、羅香菱",
      "舞台、小道具設計｜袁浩程",
      "燈光設計｜偕志語",
      "服裝設計｜張義宗",
      "舞台監督｜Morris（黃珮涵）",
      "平面設計｜藍姆設計",
      "導演助理｜李瑋",
      "宣傳劇照｜王傢軍",
      "【2016 台北場 & 桃園場（莎翁野台祭）】",
      "演出場地｜桃園晴耕雨讀小書院、台北臺灣博物館-南門園區",
      "藝術總監｜王珂瑤",
      "製作人｜邱子謙",
      "執行製作｜林易衡",
      "原著劇本｜威廉・莎士比亞（William Shakespeare）",
      "導演｜John Maloney",
      "導演助理｜林怡萱",
      "舞台監督｜黃珮涵（Morris）",
      "舞台、小道具設計｜袁浩程",
      "燈光設計｜廖嘉皇",
      "服化設計｜張義宗",
      "平面設計｜藍姆設計",
      "劇照攝影｜王傢軍",
      "演員陣容｜蕭慧文、李潔亭、黃建豪、徐宏愷、呂寰宇、張迪凱、羅香菱、王珂瑤"
    ],
    highlights: [
      "巡迴台北、桃園、台南全台熱烈口碑巡演",
      "美國導演 John Maloney 跨國執導，八位實力派演員嬉鬧串演",
      "打破典型黑盒子，將工廠倉庫與戶外草皮轉化為莎翁魔法森林",
      "隨環境遊走的沉浸式觀演體驗"
    ],
    youtubeEmbedId: "hD3uYbi833A",
    youtubeUrl: "https://www.youtube.com/watch?v=hD3uYbi833A",
    reviews: [
      {
        title: "國藝會補助成果檔案庫—莎翁野台祭-仲夏夜之夢｜慢島劇團",
        media: "國家文化藝術基金會成果檔案庫",
        date: "2016",
        tag: "官方成果典藏",
        url: "https://archive.ncafroc.org.tw/result?id=2a2d16843fc2416bb1552b9e427b1b01",
        quote: "美國導演 John Maloney 與慢島劇團合作，選在桃園晴耕雨讀小書院及臺博館南門園區等戶外特色空間進行環境劇場演出，打破空間限制詮釋莎翁愛情喜劇。"
      },
      {
        title: "台灣現代戲劇暨表演影音資料庫 (ETI)—環境劇場《仲夏夜之夢》",
        media: "ETI 戲劇影音資料庫",
        date: "2019",
        tag: "演出影音檔案",
        url: "https://www.eti-tw.com/work/kAM53Hvh59AcvD6Gg",
        quote: "將古老經典置放於現代非典型場域，八位演員嬉鬧串演，創造隨環境遊走的生動觀演體驗。"
      }
    ]
  },
  {
    id: "iron-factory",
    title: "鐵工廠",
    enTitle: "The Factory",
    category: "social",
    categoryName: "社會與勞動",
    year: "2013",
    featured: false,
    tagline: "鐵屑與汗水交織的生命之歌，底層勞動者的熱血歌舞",
    enTagline: "An anthem forged in iron filings and sweat — the passionate song and dance of grassroots industrial laborers.",
    image: "images/鐵工廠.jpg",
    gallery: [
      "images/2013鐵工廠宣傳照 劇照/_38C5953.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4062.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4067.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4085.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4096.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4370.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4454.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4470.jpg",
      "images/2013鐵工廠宣傳照 劇照/_O7A4524.jpg",
      "images/2013鐵工廠宣傳照 劇照/鐵工廠 龐克.jpg"
    ],
    photoCredit: "慢島劇團",
    description: "以台灣基層工業廠區為背景的大型原創歌舞劇。深刻描繪閩南、客家工人與來自東南亞的外籍移工，在巨大機械轟鳴與高溫鐵火中，所碰撞出的生命溫度與深厚情誼。",
    enDescription: "A full-scale original musical set against Taiwan's industrial foundry heartlands. It vividly captures the solidarity, warmth, and resilience shared between Hokkien and Hakka workers and Southeast Asian migrant laborers amidst deafening machinery and scorching smelting furnaces.",
    director: "林欣怡",
    playwright: "陳雅柔、林欣怡 / 製作人：王珂瑤、黃馨玉",
    cast: "主要演員：賴佩霞（飾演「陳姐」）、范姜（拷秋勤主唱）、高敏海、羅香菱、李潔亭、張機米、張忠瑞、徐宏愷、涂又仁（又仁）、鍾芸、吳皓揚；特定場次：朱正明（廣藝場）、宋小海（桃園場）",
    credits: [
      "【製作與設計團隊】",
      "製作人｜王珂瑤、黃馨玉",
      "導演｜林欣怡",
      "編劇｜陳雅柔、林欣怡",
      "音樂設計｜陳世興",
      "歌唱指導｜馬任重",
      "舞蹈設計｜孫梲泰",
      "燈光設計｜洪國城",
      "舞台設計｜詹子嵐 River",
      "服裝設計｜林俞伶",
      "梳化設計｜張義宗",
      "設計助理｜邱婉婕",
      "音樂執行｜楊子瑄",
      "執行製作｜吳皓揚",
      "排練助理｜鍾芸",
      "舞台監督｜廖曉佩、陳家如",
      "技術人員｜胡懷丰、胡福江、陳彥慈、簡芳瑜",
      "【演員名單】",
      "主要演員｜賴佩霞（飾演女主角「陳姐」）、范姜（曾任知名樂團「拷秋勤」主唱）、高敏海、羅香菱、李潔亭、張機米、張忠瑞、徐宏愷、涂又仁（又仁）、鍾芸、吳皓揚",
      "特定場次演員｜朱正明（參與廣藝場演出）、宋小海（參與桃園展演中心場演出）"
    ],
    highlights: [
      "大型原創勞工歌舞劇，以節奏強烈的金屬敲擊聲轉化為劇場樂音",
      "深刻直面外籍移工勞動環境與跨族群融合",
      "展現台灣底層製造業工人堅韌的生命力"
    ],
    youtubeEmbedId: "1UjfnYz9V8U",
    youtubeUrl: "https://youtu.be/1UjfnYz9V8U",
    reviews: [
      {
        title: "慢島劇團《鐵工廠》劇評（鴻鴻）",
        media: "PAR 表演藝術雜誌",
        author: "鴻鴻",
        date: "2013",
        tag: "達人推薦劇評",
        url: "https://par.npac-ntch.org/tw/article/doc/DLF4ZHIM39",
        quote: "知名詩人與劇評人鴻鴻專文評論，讚許作品以黑色喜劇與混搭歌舞展現這個世代獨特的嘻哈反抗術。"
      },
      {
        title: "慢島鐵工廠 歌舞勞工心聲",
        media: "中國時報",
        date: "2013.10",
        tag: "新聞特寫",
        url: "https://www.chinatimes.com/newspapers/20131014000381-260115",
        quote: "報導《鐵工廠》將桃園觀音工廠搬上舞台，透過 11 首輕快原創歌曲呈現本土與移工的心聲。"
      },
      {
        title: "慢島劇團為基層勞工訴心曲",
        media: "非常木蘭",
        date: "2013",
        tag: "深度專訪",
        url: "https://www.verymulan.com/story/%E6%85%A2%E5%B3%B6%E5%8A%87%E5%9C%98%E3%80%80%E7%82%BA%E5%9F%BA%E5%B1%A4%E5%8B%9E%E5%B7%A5%E8%A8%B4%E5%BF%83%E6%9B%B2-54.html",
        quote: "深度專訪團長王珂瑤與編導林欣怡，紀錄劇組入住移工宿舍採集故事與「台式樂觀 X 泰式樂天」的創作歷程。"
      },
      {
        title: "台灣首齣勞工音樂劇 慢島劇團《鐵工廠-莎瓦哩卡！阿工仔》",
        media: "苦勞網",
        date: "2013",
        tag: "社運媒體專題",
        url: "https://www.coolloud.org.tw/node/75984",
        quote: "社運媒體專題，詳細介紹作品以桃園平均 35 歲的年輕勞工現境為藍本的創作初衷。"
      },
      {
        title: "直擊外籍勞工樂天性子！廣藝委託創作慢島劇團《鐵工廠》",
        media: "廣藝部落格",
        date: "2013",
        tag: "委託創作專題",
        url: "https://quantaarts.pixnet.net/blog/posts/5053064036",
        quote: "廣藝基金會委託創作專題，介紹歌手賴佩霞、拷秋勤樂團主唱范姜等跨界卡司與田調經驗。"
      },
      {
        title: "The karaoke girls return (Special Feature on Factory & Moon Girl)",
        media: "Taipei Times (台北時報)",
        author: "Noah Buchan",
        date: "2015.01",
        tag: "外媒英文焦點專題",
        url: "https://www.taipeitimes.com/News/feat/archives/2015/01/30/2003610400",
        quote: "報導深入介紹慢島劇團 2013 年與台灣國際勞工協會合作的《鐵工廠》，以音樂喜劇呈現泰國、印尼移工與台灣在地勞工的小人物喜悲故事。"
      }
    ]
  },
  {
    id: "Awaking of Love",
    title: "夢醒時分",
    enTitle: "Awaking of Love",
    category: "social",
    categoryName: "時代與女性記憶",
    year: "2012 桃園大劇場首演",
    featured: false,
    tagline: "作品比身體更永垂不朽，八〇年代陳淑樺經典旋律裡的青春悲歡",
    enTagline: "Art outlives the mortal body — youth, sorrow, and choices scored to Sarah Chen's 1980s pop anthems.",
    image: "images/夢醒時分.jpg",
    gallery: [
      "images/夢醒時分陳又維拍攝/04.春去春又回.jpg",
      "images/夢醒時分陳又維拍攝/06.說你愛我1.jpg",
      "images/夢醒時分陳又維拍攝/06.說你愛我2.jpg",
      "images/夢醒時分陳又維拍攝/06.說你愛我3.jpg",
      "images/夢醒時分陳又維拍攝/08.亞瑟潘的四個朋友1.jpg",
      "images/夢醒時分陳又維拍攝/08.亞瑟潘的四個朋友2.jpg",
      "images/夢醒時分陳又維拍攝/10.那一夜你喝了酒.jpg",
      "images/夢醒時分陳又維拍攝/11.一半一半.jpg",
      "images/夢醒時分陳又維拍攝/13.這樣愛你對不對.jpg",
      "images/夢醒時分陳又維拍攝/14.孤單.jpg"
    ],
    photoCredit: "陳又維",
    description: "2012 年於桃園展演中心大劇場隆重登場的慢島時代點唱機音樂劇。由金鐘編劇吳世偉執導、劉柏珊擔任製作人，以臺灣八〇年代傳奇女歌手陳淑樺的經典名曲（《夢醒時分》、《那一夜你喝了酒》、《你走你的路》）為情感脈絡，細膩勾勒五、六年級世代的青春成長與女性生命的抉擇。誠如劇中婆婆所言：「作品，比身體更永垂不朽。」",
    enDescription: "Staged at Taoyuan Arts Center, this jukebox musical weaves iconic 1980s pop hits by Sarah Chen into the emotional coming-of-age journey of Taiwan's 1960s-1970s generation. Delicately portraying women's self-discovery and life choices, the play echoes its central motif: 'Our creative work outlasts the fleeting human body.'",
    director: "吳世偉",
    playwright: "吳世偉 / 製作人：王珂瑤、劉柏珊",
    cast: "主要演員：吳嘉佳、施柏全、張稜、王珂瑤、胡禦之；舞者：張詠興、洪儷今、楊明貴、吹吹、邱雅郡、謝禎玲；現場樂團【Vanilla】：吳品賢、劉黔明、洪思遠、簡曉軒、潘偉凡",
    credits: [
      "【核心製作團隊】",
      "製作人｜王珂瑤、劉柏珊",
      "導演｜吳世偉",
      "導演助理｜蔡承祐",
      "舞台監督｜賴亮嘉",
      "【設計團隊】",
      "舞台設計｜詹子嵐",
      "燈光設計｜歐衍穀",
      "服裝設計｜林玉媛",
      "舞蹈設計｜桑華 RITA",
      "梳化設計｜張義宗",
      "平面設計｜莊博霖",
      "劇照攝影｜陳又維",
      "主視覺攝影｜楊偉新",
      "【現場演出陣容】",
      "主要演員｜吳嘉佳、施柏全、張稜、王珂瑤、胡禦之",
      "舞者｜張詠興、洪儷今、楊明貴、吹吹、邱雅郡、謝禎玲",
      "現場樂團【Vanilla】吉他手｜吳品賢",
      "現場樂團【Vanilla】貝斯手｜劉黔明",
      "現場樂團【Vanilla】鼓手｜洪思遠",
      "現場樂團【Vanilla】鍵盤手｜簡曉軒、潘偉凡",
      "【主辦、贊助與執行】",
      "指導單位｜文化部、桃園縣政府",
      "主辦單位｜桃園縣政府文化局、桃園縣政府藝文設施管理中心",
      "執行單位｜慢島劇團（2012年桃園縣傑出演藝團隊）",
      "數位鋼琴贊助｜CASIO 卡西歐",
      "爵士鼓贊助｜功學社",
      "排練場地贊助｜夢想社區"
    ],
    highlights: [
      "慢島劇團挑戰桃園展演中心大劇場千人座席",
      "以陳淑樺經典流行音樂為靈魂的原創音樂劇",
      "金鐘編劇吳世偉執導、劉柏珊擔任製作人，深刻引起廣大都會女性與熟齡觀眾共鳴"
    ],
    youtubeEmbedId: "BLuZrTo_V00",
    youtubeUrl: "https://www.youtube.com/watch?v=BLuZrTo_V00",
    reviews: [
      {
        title: "慢島劇團音樂劇《夢醒時分》演出報導",
        media: "人間福報",
        date: "2012.10",
        tag: "媒體專題報導",
        url: "https://www.merit-times.com/news/130596",
        quote: "以歌手陳淑樺的經典金曲串連起多位女性的故事，由金鐘編劇吳世偉執導、劉柏珊擔任製作人，展現慢島劇團對於女性情感與時代抉擇的深刻關注。"
      },
      {
        title: "非常木蘭—慢島劇團女性生命與情感抒情特寫",
        media: "非常木蘭",
        date: "2012",
        tag: "女性情感深度特寫",
        url: "https://www.verymulan.com/story/%E6%85%A2%E5%B3%B6%E5%8A%87%E5%9C%98%E3%80%80%E7%82%BA%E5%9F%BA%E5%B1%A4%E5%8B%9E%E5%B7%A5%E8%A8%B4%E5%BF%83%E6%9B%B2-54.html",
        quote: "慢島劇團 2012 年流行音樂劇，以歌手陳淑樺的經典金曲串連起多位女性的故事，展現慢島劇團對於女性情感與身體細膩抒情的深刻關注。"
      }
    ]
  },
  {
    id: "moon-lady",
    title: "月孃",
    enTitle: "Moon Girls",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    year: "2010 首演 / 經典巡演",
    featured: false,
    tagline: "穿梭全台卡拉OK店的傳奇喜劇，最接地氣的女人心事",
    enTagline: "A legendary comedy touring karaoke parlors across Taiwan — the down-to-earth secrets and sisterhood of working-class women.",
    image: "images/月孃.jpg",
    gallery: [
      "images/月孃/1拷貝.JPG",
      "images/月孃/DSC_5626 拷貝2.JPG",
      "images/月孃/DSC_5934 拷貝2.JPG",
      "images/月孃/DSC_6400 拷貝2.JPG",
      "images/月孃/DSC_6415 拷貝2.JPG",
      "images/月孃/宣傳照 拷貝2.jpeg",
      "images/2010 2012月孃/moon girl 2.JPG",
      "images/2010 2012月孃/moon girl3宣傳照.jpeg",
      "images/2010 2012月孃/moon girl4.jpg",
      "images/2010 2012月孃/moongirl 5.JPG"
    ],
    photoCredit: "慢島劇團",
    description: "描述在卡拉OK店成長的三位結拜姊妹，在霓虹閃爍、酒杯交錯與點歌機旋律中交織的愛恨情仇。打破傳統黑盒子劇場，直接走入全台卡拉OK實景空間與長照安養院巡迴演出，笑中帶淚，深刻引發市井常民大眾共鳴。2014年更受邀遠赴巴西第一屆國際喜劇演員藝術節演出，以台灣味十足的卡拉OK喜劇跨越語言隔閡征服南美洲觀眾。",
    enDescription: "A comedy touring karaoke parlors across Taiwan and invited to Brazil, showcasing authentic grassroots sisterhood.",
    director: "陳里丹（Dan Chumley）",
    playwright: "簡莉穎 / 製作人：林欣怡",
    cast: "藍貝芝、洪珮菁、李潔亭、竺定誼、王珂瑤",
    credits: [
      "【主要製作與設計人員】",
      "導演｜陳里丹（Dan Chumley）",
      "編劇｜簡莉穎",
      "製作人｜林欣怡",
      "音樂設計／現場演奏｜鄭捷任",
      "巡迴版現場演奏｜常磊、張聖潔",
      "舞台設計｜陳師慧（2010首演版舞台設計：郭家伶）",
      "燈光設計｜徐福君",
      "巡迴場燈光技術｜徐瓏瑄",
      "服裝設計｜張義宗",
      "影像設計／攝影｜陳小樺",
      "巡迴場影像協助｜李立邇"
    ],
    highlights: [
      "慢島劇團經典長壽劇，巡迴全省卡拉OK與社區安養院逾數十場",
      "開創台灣卡拉OK店實景沉浸式場域戲劇先鋒",
      "融合台語金曲、笑鬧市井與女性生命抉擇",
      "2014年受邀赴巴西第一屆國際喜劇演員藝術節演出，以台灣卡拉OK征服南美觀眾",
      "促成 2015 巴西 MEU CLOWN 小丑劇團來台交流演出《汽球交響樂》"
    ],
    youtubeEmbedId: "bQ4YNLCCd-M",
    youtubeUrl: "https://www.youtube.com/watch?v=bQ4YNLCCd-M",
    extraVideos: [
      {
        label: "國際巡演紀錄",
        embedId: "xSezpuOwBkc",
        url: "https://www.youtube.com/watch?v=xSezpuOwBkc&t=18s"
      },
      {
        label: "養老院巡演紀錄",
        embedId: "YzY2LsF1bVY",
        url: "https://www.youtube.com/watch?v=YzY2LsF1bVY"
      },
      {
        label: "小小藝術季紀錄",
        embedId: "JShgoeVu__c",
        url: "https://www.youtube.com/watch?v=JShgoeVu__c&t=6s"
      }
    ],
    reviews: [
      {
        title: "【藝術文化】慢島劇團音樂劇《月孃》 用歌曲走進民眾生活",
        media: "自由時報 自由藝文網",
        date: "2015.01",
        tag: "媒體特寫報導",
        url: "https://art.ltn.com.tw/article/paper/846810",
        quote: "打破傳統劇場黑盒子，直接在卡拉OK店實體空間巡迴演出，用親切的台語金曲與姐妹心事走進市井大眾生活。"
      },
      {
        title: "台灣慢島劇團 巴西小鎮發光",
        media: "自由時報電子報",
        date: "2014.08",
        tag: "國際巡演交流",
        url: "https://news.ltn.com.tw/news/world/breakingnews/1075975",
        quote: "慢島劇團受邀赴巴西UEM大學國際喜劇藝術節演出《月孃》，跨越語言藩籬，在南美舞台贏得熱烈滿堂彩。"
      },
      {
        title: "The karaoke girls return",
        media: "Taipei Times (台北時報)",
        date: "2015.01",
        tag: "外媒專題特寫",
        url: "https://www.taipeitimes.com/News/feat/archives/2015/01/30/2003610400",
        quote: "When Slow Island Theater Group's popular musical 'Moon Girls' premiered, their choice of venue took theater directly into Taiwanese karaoke parlors."
      },
      {
        title: "整個城市都是我的小劇場／慢島劇團王珂瑤專訪",
        media: "甘樂文創",
        date: "2015",
        tag: "人物專訪",
        url: "https://www.thecan.com.tw/tw/log/detail/923",
        quote: "甘樂文創專訪團長王珂瑤，分享《月孃》實地在全台卡拉OK店與安養院巡演的場域戲劇經驗。"
      },
      {
        title: "寶島．慢島音樂喜劇「月孃」",
        media: "蕃新聞 (YamNews)",
        date: "2011.12",
        tag: "演出焦點報導",
        url: "https://n.yam.com/Article/20111223117333",
        quote: "報導《月孃》於寧夏夜市卡拉OK首演爆滿及受邀至桃園縣政府文化局巡演資訊。"
      },
      {
        title: "國藝會補助成果檔案庫—音樂喜劇《月孃》2014巡迴演出",
        media: "國家文化藝術基金會成果檔案庫",
        date: "2014",
        tag: "官方成果典藏",
        url: "https://archive.ncafroc.org.tw/result?id=48f61aff19aa4405bf3aaaa98777b82d",
        quote: "國藝會成果記錄《月孃》深入高雄、宜蘭及全台巷弄角落卡拉OK實景演出。"
      }
    ]
  },
  {
    id: "the-nose",
    title: "鼻子記",
    enTitle: "The Nose",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    year: "2009 兩廳院新人新視野",
    featured: false,
    tagline: "把氣味搬上舞台，觀眾席下藏著調香師的感官先鋒之作",
    enTagline: "Bringing scent onto the stage — a sensory pioneer hiding perfumers beneath audience seats.",
    image: "images/鼻子記.jpg",
    gallery: [
      "images/鼻子記/091116_thesmellof 拷貝.jpg",
      "images/鼻子記/20091121-0002-20091122-鼻子記.jpg",
      "images/鼻子記/20091121-0100-20091122-鼻子記 拷貝.jpg",
      "images/鼻子記/20091121-0204-20091122-鼻子記 拷貝.jpg",
      "images/鼻子記/20091121-0389-20091122-鼻子記 拷貝.jpg",
      "images/鼻子記/20091121-0401-20091122-鼻子記 拷貝.jpg",
      "images/鼻子記/DSC_1064 拷貝.JPG",
      "images/鼻子記/DSC_1075 拷貝.JPG",
      "images/鼻子記/DSC_1156 拷貝.JPG",
      "images/鼻子記/DSC_1193 拷貝.JPG"
    ],
    photoCredit: "陳又維",
    description: "兩廳院「新人新視野」獲選作品，由王珂瑤編導。慢島劇團創立初期的標誌性突破之作，挑戰傳統劇場僅限視聽的框架，大膽將「氣味／嗅覺」引入演出，甚至在觀眾席下隱藏調香師，配合劇情即時散發相符的香氣，讓觀眾在昏暗舞台中藉由香氣、焦味、草木與潮濕氣息，觸發深層潛意識記憶。",
    enDescription: "Selected for the National Theater & Concert Hall's 'New Aspect' series, this groundbreaking early work by Slow Island Theatre shattered conventional audiovisual limits by introducing olfactory storytelling. Concealed perfumers released real scents synchronized with the narrative—from delicate perfumes to burnt ashes, damp earth, and pine—awakening subconscious visceral memories.",
    director: "王珂瑤",
    playwright: "演員共同創作 / 製作人：黎方（台北）、黃馨玉（台南）",
    cast: "台北場：藍貝芝、胡禦之、洪珮菁、鄭宜府；台南場：胡禦之、陳彥壯（壯壯）、Cleo",
    credits: [
      "【台北場（實驗劇場版本）】",
      "導演｜王珂瑤",
      "製作人｜黎方",
      "劇本｜演員共同創作",
      "演員陣容｜藍貝芝、胡禦之、洪珮菁、鄭宜府",
      "舞台設計｜詹子嵐",
      "燈光設計｜歐衍穀",
      "服裝設計｜林秀美",
      "音樂設計｜施惟捷",
      "影像設計｜VAL",
      "舞蹈設計｜Biag",
      "平面設計｜Happy",
      "香氛設計｜伊聖詩芳療生活館",
      "劇照攝影｜陳又維",
      "導演助理｜莊博霖、李杭聲",
      "【台南場（黑蝸牛工作室巡演版本）】",
      "導演｜王珂瑤",
      "製作人｜黃馨玉",
      "演員陣容｜胡禦之、陳彥壯（壯壯）、Cleo",
      "音樂設計｜李昀",
      "平面設計｜CLEO",
      "舞台協力｜袁浩程",
      "現場樂團｜陳融融、老王、鳳梨",
      "台南製作協力｜郭人豪、董淑貞",
      "【台北文山劇場場次】",
      "平面設計｜詹雨樹",
      "【主辦、贊助與補助】",
      "主辦單位｜臺北市立社會教育館（文山劇場演出場次）",
      "執行／演出單位｜慢島劇團",
      "氣味贊助｜伊聖詩芳療生活館（ESCENTS，於劇場空間實地施放氣味）",
      "硬體贊助｜BenQ（明基電通）",
      "技術贊助｜台北數位藝術中心",
      "專案補助｜國家文化藝術基金會（國藝會）與國家兩廳院共同企劃「新人新視野」專案",
      "巡演補助｜國家文化藝術基金會「常態補助-延伸的視野」（2011年台南黑蝸牛工作室巡演場次）"
    ],
    highlights: [
      "兩廳院「新人新視野」獲選作品",
      "台灣早期極具先鋒性的氣味感知劇場",
      "觀眾席下隱藏調香師，配合劇情即時散發相符香氣",
      "確立慢島劇團不拘泥於傳統舞台的感官實驗基因"
    ],
    youtubeEmbedId: "X6OdwmSe0zI",
    youtubeUrl: "https://www.youtube.com/watch?v=X6OdwmSe0zI",
    reviews: [
      {
        title: "【藝術文化】氣味作媒介 鼻子記演嗅覺",
        media: "自由時報 (LTN)",
        date: "2011.06",
        tag: "藝術文化焦點報導",
        url: "https://art.ltn.com.tw/article/paper/502375",
        quote: "慢島劇團挑戰傳統劇場僅限視聽的框架，將『氣味／嗅覺』引入演出，甚至在觀眾席下隱藏調香師，配合劇情即時散發相符的香氣。"
      },
      {
        title: "國藝會補助成果檔案庫—王珂瑤《鼻子記》",
        media: "國家文化藝術基金會成果檔案庫",
        date: "2009",
        tag: "新人新視野成果典藏",
        url: "https://archive.ncafroc.org.tw/result/youngstar/info/bd9eba06880ac6f70189b41698835aa6",
        quote: "獲選兩廳院新人新視野專案，大膽突破傳統鏡框舞台，探索嗅覺氣味與空間記憶的對話。"
      },
      {
        title: "整個城市都是我的小劇場／慢島劇團王珂瑤",
        media: "甘樂文創",
        date: "2010",
        tag: "創團專訪",
        url: "https://www.thecan.com.tw/tw/log/detail/923",
        quote: "專訪慢島劇團團長王珂瑤談《鼻子記》的嗅覺劇場實驗，如何跨出黑盒子，在城市各個角落構築有溫度的小劇場。"
      }
    ]
  },
  {
    id: "mint-rosemary-unknown-flowers",
    title: "薄荷、迷迭香和不知名的花",
    enTitle: "Mint, Rosemary and Unknown Flowers",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    year: "2008 藝穗節首獎 / 2010 台北藝術節",
    featured: false,
    tagline: "慢島劇團創團先鋒之作，希臘神話與現代都會愛情的雙重視角",
    enTagline: "Slow Island's foundational breakthrough — Greek myth meets contemporary urban romance.",
    image: "images/薄荷迷迭香和不知名的花.jpg",
    gallery: [
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2372 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2419 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2495 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2502 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2529 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/IMG_6294 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/IMG_6694 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/IMG_7035 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/y2918 拷貝.JPG",
      "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/y3389 拷貝.JPG"
    ],
    photoCredit: "慢島劇團（2010 臺北藝術節）",
    description: "慢島劇團 2008 年創團初期的標誌性代表作，榮獲第一屆臺北藝穗節最高榮譽「大家都滿意獎」（最受觀眾喜愛獎），並受邀於 2010 臺北藝術節演出。由編劇吳世偉執導、於慧蘭擔任製作人，以希臘神話與現代都會男女的情感糾葛為軸，結合場域戲劇深入剖析愛情中的佔有、屈服與個體自主。團長王珂瑤當時在南海藝廊外鋪設許多薄荷與迷迭香，開創慢島劇團對感官與空間場域結合的探索：「在愛情中，有人如薄荷匍匐在地任人踐踏；有人如迷迭香耐旱少蟲害；還是，妳願意做一株不需情臆、不需名字、也不任人定義的花？」",
    enDescription: "Slow Island's founding production in 2008, winning the highest honor 'Audience Favorite Award' at the 1st Taipei Fringe Festival. Blending Greek mythology with modern romance, it probes possession, submission, and autonomy in love. Director Wang Ko-yao planted mint and rosemary outside the venue, pioneering Slow Island's signature exploration of sensory theatre: 'In love, will you be mint trampled underfoot, drought-hardy rosemary, or an unnamed flower that needs no definition?'",
    director: "吳世偉",
    playwright: "編劇／導演：吳世偉 / 製作人：於慧蘭",
    cast: "胡禦之、林欣怡、陳彥壯（壯壯）、王珂瑤",
    credits: [
      "【創團首獎製作榮譽】",
      "獲獎榮譽｜第一屆台北藝穗節首獎（大家都滿意獎）",
      "【核心主創與演職團隊】",
      "製作人｜於慧蘭",
      "編劇／導演｜吳世偉",
      "主要演員｜胡禦之、林欣怡、陳彥壯（壯壯）、王珂瑤",
      "舞台設計｜鄭培絢",
      "燈光設計｜歐衍穀",
      "服裝設計｜林秀美"
    ],
    highlights: [
      "榮獲 2008 首屆臺北藝穗節最高榮譽「大家都滿意獎」",
      "獲邀 2010 臺北藝術節正式展演節目",
      "編導鬼才吳世偉執導、於慧蘭擔任製作人",
      "南海藝廊外鋪設薄荷與迷迭香，開創慢島劇團對感官與空間結合的探索"
    ],
    youtubeEmbedId: "cOyn_MNqN2Y",
    youtubeUrl: "https://www.youtube.com/watch?v=cOyn_MNqN2Y",
    reviews: [
      {
        title: "Theatre: Mint, Rosemary and Unknown Flowers",
        media: "Taipei Times (台北時報英文專題報導)",
        date: "2010.08",
        tag: "國際英文專題",
        url: "https://www.taipeitimes.com/News/feat/archives/2010/08/27/2003481432",
        quote: "Slow Island Theater Group explores olfactory theatre and modern relationships through the sensual and aromatic tale of herbs and untamed flowers."
      },
      {
        title: "整個城市都是我的小劇場——慢島劇團王珂瑤專訪",
        media: "甘樂文創",
        date: "2010",
        tag: "創團深度專訪",
        url: "https://www.thecan.com.tw/tw/log/detail/923",
        quote: "慢島劇團 2008 年創團作品，榮獲台北藝穗節『最受觀眾喜愛獎』，並受邀於 2010 台北藝術節演出。團長王珂瑤當時在南海藝廊外鋪設許多薄荷與迷迭香，開創慢島劇團對感官與空間場域結合的探索。"
      }
    ]
  }
];

// 『劇場人生存手冊』專題訪談資料庫（源自慢島劇團官方 Blog）
const handbookArticles = [
  {
    id: "ray-tseng",
    name: "曾睿琁",
    role: "燈光設計 / 國際巡演技術統籌",
    date: "2025.03.09",
    quote: "去思考想做劇場的原因，以及你和劇場互相供給的是什麼。這對我來說很重要，會影響一個人選擇用什麼方式在劇場裡工作。",
    summary: "台灣屏東人，北藝大劇設系主修燈光設計，2020年獲亞洲文化協會紐約獎助金。作品跨足音樂劇場與概念性肢體，經常擔任國際巡演技術統籌。暢談接案工作者如何安排生活開銷與創作熱忱。",
    url: "https://slowislandart.blogspot.com/2025/03/blog-post.html"
  },
  {
    id: "hsin-yi-lin",
    name: "林欣怡",
    role: "導演｜製作人｜編劇｜策展｜演員",
    date: "2025.02.26",
    quote: "對於自己還在尋找的方向或者想要生活的狀態不要太心急，不要太急著要『夠格』成為怎樣的人。不然那個對於人脈、專業經驗種種的不安全感會讓人非常焦慮，要鼓勵自己多一點耐心。",
    summary: "政大民族系畢業、英國密德薩斯大學劇場導演創作碩士。持續參與海筆子帳篷戲劇行動、不想睡遊戲社編導，曾任台北藝穗節策展人。分享從監控公司企劃逃跑、多重身分斜槓到以接案為生的人生哲學。",
    url: "https://slowislandart.blogspot.com/2025/02/blog-post_26.html"
  },
  {
    id: "tzu-heng-lin",
    name: "林子恆",
    role: "演員",
    date: "2025.02.17",
    quote: "如何在這個行業的不穩定中讓自己穩定的經營某個收入，讓它提供你從事這份工作的安全感，或者說底氣。令你在某些需求浮現的時刻，能說服自己放下，而非全然地緊抓或奉獻。這跟藝術信仰無關，而是回歸人的狀態，並試圖去關照它。",
    summary: "台灣劇場實力派演員，涉獵西方經典改編、當代原創劇作與影視展演。深入探討如何在接案生活的不確定中建立自處的底氣與心理平衡。",
    url: "https://slowislandart.blogspot.com/2025/02/blog-post_17.html"
  },
  {
    id: "wen-chun-lai",
    name: "賴玟君",
    role: "娩娩工作室團長｜演員",
    date: "2025.02.13",
    quote: "好像因為念了戲劇系，讓我知道自己是什麼樣子、人是什麼樣子。",
    summary: "娩娩工作室團長、劇場實力演員。採訪：陳雅柔，編排：羅靖茹。直面小劇團經營的生存挑戰與女性生命經驗，分享在挫折與熱愛間摸索前行的真摯告白。",
    url: "https://slowislandart.blogspot.com/2025/02/blog-post_13.html"
  },
  {
    id: "hsiu-ho-wu",
    name: "吳修和",
    role: "舞台設計",
    date: "2025.02.11",
    quote: "如果可以找到更積極的方式去參與一個製作，也許會比較不覺得乏味，也更容易從這份工作得到成就感。",
    summary: "劇場空間與舞台設計創作者。採訪：陳雅柔，編排：羅靖茹。從技術執行的磨練到空間敘事的建構，分享如何將設計思維化為更深度的劇場參與。",
    url: "https://slowislandart.blogspot.com/2025/02/blog-post.html"
  },
  {
    id: "chi-chuan-wu",
    name: "吳季娟",
    role: "製作人 / 策展人",
    date: "2025.02.11",
    quote: "那種群體共識帶給我很深刻的感覺，每一次進劇場的時刻都是。",
    summary: "資深獨立製作人與藝術節策展人。深入剖析獨立製作在有限資源下的排解策略，以及在每一次進劇場的群體共振中尋找不可替代的價值。",
    url: "https://slowislandart.blogspot.com/2025/02/200213-200013142014-8-9.html"
  },
  {
    id: "chao-yang-wang",
    name: "王肇陽",
    role: "演員",
    date: "2025.01.26",
    quote: "保持敏銳而踏實的感知，把生活裡的挫敗與養分化為舞台上的呼吸。",
    summary: "常年活躍於非常林奕華等重要劇團的實力演員。採訪：陳雅柔，編排：羅靖茹。分享演員在長期演出與接案節奏中的身心調適，以及如何面對職業瓶頸與自我對話。",
    url: "https://slowislandart.blogspot.com/2025/01/httpschaoyang1030.html"
  }
];

// 智慧劇目資料庫查詢助手（支援各類別名、大小寫、中英文與劇名格式容錯）
function findProduction(idOrTitle) {
  if (!idOrTitle) return null;
  const raw = String(idOrTitle).trim();
  const clean = raw.toLowerCase();

  // 1. 直接 ID 比對
  let found = productions.find(p => p.id === raw || p.id.toLowerCase() === clean);
  if (found) return found;

  // 2. 中文劇名比對（自動忽略書名號）
  const stripped = raw.replace(/[《》]/g, "").trim();
  found = productions.find(p => p.title.replace(/[《》]/g, "").trim() === stripped);
  if (found) return found;

  // 3. 英文劇名比對
  found = productions.find(p => p.enTitle && p.enTitle.toLowerCase() === clean);
  if (found) return found;

  // 4. 常見別名映射表
  const aliasMap = {
    "the sea floaters": "The Sea Floaters",
    "the-sea-floaters": "The Sea Floaters",
    "ocean-floaters": "The Sea Floaters",
    "ocean-drifters": "The Sea Floaters",
    "the factory": "iron-factory",
    "the-factory": "iron-factory",
    "the-ironworks": "iron-factory",
    "moon-girls": "moon-lady",
    "moon-girl": "moon-lady",
    "moon-lady": "moon-lady",
    "awaking of love": "Awaking of Love",
    "awaking-of-love": "Awaking of Love",
    "awakening": "Awaking of Love",
    "childrens-secret-parcels": "childrens-secret-parcels",
    "childrens-secret-express": "childrens-secret-parcels",
    "extinction": "a-play-for-the-living-in-a-time-of-extinction",
    "the-free-storyteller": "storytellers",
    "storyteller-sea": "storytellers",
    "storytellers": "storytellers",
    "blooming-stamens": "wild-pistil",
    "wild-pistil": "wild-pistil",
    "nini-secret": "ninis-secret",
    "ninis-secret": "ninis-secret",
    "highland-man": "men-from-the-highland",
    "men-from-the-highland": "men-from-the-highland",
    "women-in-clouds": "women-in-the-clouds",
    "women-in-the-clouds": "women-in-the-clouds",
    "midsummer-night": "midsummer-nights-dream",
    "midsummer-nights-dream": "midsummer-nights-dream",
    "nose-record": "the-nose",
    "the-nose": "the-nose",
    "herbal-garden": "mint-rosemary-unknown-flowers",
    "mint-rosemary-unknown-flowers": "mint-rosemary-unknown-flowers"
  };

  const targetId = aliasMap[clean];
  if (targetId) {
    found = productions.find(p => p.id === targetId || p.id.toLowerCase() === targetId.toLowerCase());
    if (found) return found;
  }

  // 5. 部分模糊匹配
  found = productions.find(p => p.id.toLowerCase().includes(clean) || p.title.includes(stripped));
  return found || productions[0];
}
window.findProduction = findProduction;

// ==========================================================================
// 首頁精選舞台劇照藝廊 (Homepage Curated Stage Gallery)
// ==========================================================================
const curatedStagePhotos = [
  {
    "image": "images/唐健哲攝影02023拷貝.jpg",
    "title": "南薑．香茅．罌粟花",
    "category": "migration",
    "categoryName": "移民與歷史記憶",
    "year": "2026 桃園鐵玫瑰焦點劇作",
    "photoCredit": "唐健哲",
    "caption": "圍聚於廚房餐桌前的滇緬移民二代，在香料蒸騰中重尋家族根源。",
    "showId": "galangal-lemongrass-poppy"
  },
  {
    "image": "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8432.jpg",
    "title": "孩子們的祕密快遞",
    "category": "children",
    "categoryName": "親子偶戲",
    "year": "2023 米倉藝術節",
    "photoCredit": "蕭登及（米倉藝術節提供）",
    "caption": "以拼布與童趣物件溫柔對話戰火人權，深受大小朋友喜愛的舞台瞬間。",
    "showId": "childrens-secret-express"
  },
  {
    "image": "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1458.jpg",
    "title": "死去活來２～死去回來",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2024 桃園藝術綠洲",
    "photoCredit": "林育全",
    "caption": "向鄉土文學黃春明致敬，荒誕家庭喜劇裡的老人生存悲歌與道別練習。",
    "showId": "die-and-return"
  },
  {
    "image": "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _DSC7598.jpg",
    "title": "自由的說書人",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2022 首演",
    "photoCredit": "林育全",
    "caption": "落語、獨腳戲與手風琴即興音樂交融，以說書人的自由姿態直擊心靈。",
    "showId": "the-free-storyteller"
  },
  {
    "image": "images/混血振動 226彩排照片選 小樺陳/楊維真與唐明 撥弦陳小樺攝影.JPG",
    "title": "混血振動",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2023 - 2024",
    "photoCredit": "陳小樺",
    "caption": "跨領域實驗聲音劇場，回歸身體與撥弦共鳴箱的純粹震動。",
    "showId": "hybrid-vibration"
  },
  {
    "image": "images/妮妮的小祕密/2022華山版/0707_04.jpg",
    "title": "妮妮的小祕密",
    "category": "children",
    "categoryName": "親子偶戲",
    "year": "2022 華山親子節",
    "photoCredit": "許雅婷、羅靖茹",
    "caption": "細膩偶戲陪伴孩子守護身體界線，在全台校園與偏鄉引發熱烈迴響。",
    "showId": "ninis-secret"
  },
  {
    "image": "images/2020高地來的男人劇照/一寸山河一寸血.jpg",
    "title": "高地來的男人",
    "category": "migration",
    "categoryName": "移民與歷史記憶",
    "year": "2020 桃園藝術綠洲",
    "photoCredit": "王傢軍",
    "caption": "從借土養命到落地生根，馬幫與邊境軍人穿越砲火的滇緬生命史",
    "showId": "men-from-the-highland"
  },
  {
    "image": "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109a.jpg",
    "title": "雲裡的女人",
    "category": "migration",
    "categoryName": "移民與歷史記憶",
    "year": "2018 桃園藝術綠洲",
    "photoCredit": "王傢軍",
    "caption": "第17屆台新藝術獎季提名，在中壢5號倉庫以牛趴敷湯香喚起母系記憶。",
    "showId": "women-in-the-clouds"
  },
  {
    "image": "images/2021寫給滅絕時代/_DSC1403_DxO.jpg",
    "title": "寫給滅絕時代",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2021 兩廳院秋天藝術節",
    "photoCredit": "國家兩廳院提供",
    "caption": "國際綠色戲劇授權，零碳排獨腳戲在兩廳院實驗劇場直面第六次大滅絕。",
    "showId": "a-play-for-the-living-in-a-time-of-extinction"
  },
  {
    "image": "images/海上漂浮者/20121211-海上漂浮者-0005.jpg",
    "title": "海上漂浮者",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2025",
    "photoCredit": "慢島劇團",
    "caption": "大洋孤舟上的漂泊身姿，以純粹肢體與幽閉聲響直面遠洋漁工人權。",
    "showId": "ocean-drifters"
  },
  {
    "image": "images/夢醒時分陳又維拍攝/04.春去春又回.jpg",
    "title": "夢醒時分",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2012 桃園大劇場",
    "photoCredit": "陳又維",
    "caption": "陳淑樺經典旋律裡的青春悲歡，「作品比身體更永垂不朽」。",
    "showId": "Awaking of Love"
  },
  {
    "image": "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2495 拷貝.JPG",
    "title": "薄荷、迷迭香和不知名的花",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2010 臺北藝術節",
    "photoCredit": "慢島劇團",
    "caption": "創團首獎標誌之作，希臘神話與都會愛情的植物芬芳意象對話。",
    "showId": "mint-rosemary-unknown-flowers"
  },
  {
    "image": "images/2013鐵工廠宣傳照 劇照/20131025-0173-鐵工廠 拷貝.jpg",
    "title": "鐵工廠",
    "category": "social",
    "categoryName": "社會關懷與跨界",
    "year": "2013 大型歌舞",
    "photoCredit": "慢島劇團",
    "caption": "金屬敲擊與高溫鐵火中，台灣基層工人與外籍移工的生命之歌。",
    "showId": "iron-factory"
  },
  {
    "image": "images/2019仲夏夜之夢 許瑋/仲夏夜0118.jpg",
    "title": "仲夏夜之夢",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2019 全台巡演",
    "photoCredit": "許瑋",
    "caption": "在戶外草皮與非典型空間中，八位演員嬉鬧串演莎翁愛情奇幻盛宴。",
    "showId": "midsummer-nights-dream"
  },
  {
    "image": "images/月孃/DSC_6400 拷貝2.JPG",
    "title": "月孃",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2010 首演 / 經典巡演",
    "photoCredit": "慢島劇團",
    "caption": "穿梭全台卡拉OK店的傳奇喜劇，最接地氣的姊妹心事與台語金曲。",
    "showId": "moon-lady"
  },
  {
    "image": "images/混血振動 226彩排照片選 小樺陳/Saito 紙鶴陳小樺攝影.JPG",
    "title": "混血振動",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2023 - 2024",
    "photoCredit": "陳小樺",
    "caption": "紙鶴與實驗聲響的交會，讓觀眾用皮膚與耳朵感受文化共鳴。",
    "showId": "hybrid-vibration"
  },
  {
    "image": "images/狂放的花蕊照片/姿君.jpeg",
    "title": "狂放的花蕊",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2021 晴耕雨讀小書院",
    "photoCredit": "慢島劇團",
    "caption": "獨立書店草地與書頁間，女性生命與自然花語的狂野吟唱。",
    "showId": "wild-pistil"
  },
  {
    "image": "images/2020高地來的男人劇照/余程.jpg",
    "title": "高地來的男人",
    "category": "migration",
    "categoryName": "移民與歷史記憶",
    "year": "2020 桃園藝術綠洲",
    "photoCredit": "王傢軍",
    "caption": "從借土養命到落地生根，馬幫與邊境軍人穿越砲火的滇緬生命史",
    "showId": "men-from-the-highland"
  },
  {
    "image": "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8669.jpg",
    "title": "孩子們的祕密快遞",
    "category": "children",
    "categoryName": "親子偶戲",
    "year": "2023 米倉藝術節",
    "photoCredit": "蕭登及（米倉藝術節提供）",
    "caption": "充滿詩意的拼布織毯，化作包裹遠方孩童心願的溫暖之舟。",
    "showId": "childrens-secret-express"
  },
  {
    "image": "images/唐健哲攝影02979拷貝.jpg",
    "title": "南薑．香茅．罌粟花",
    "category": "migration",
    "categoryName": "移民與歷史記憶",
    "year": "2016 經典場景",
    "photoCredit": "唐健哲",
    "caption": "廚房裡的跨國飄浪史，一道道香氣在舞台上熬煮出流徙悲歡。",
    "showId": "galangal-lemongrass-poppy"
  },
  {
    "image": "images/鼻子記/20091121-0036-20091122-鼻子記 拷貝.jpg",
    "title": "鼻子記",
    "category": "site-specific",
    "categoryName": "場域與感官實驗",
    "year": "2009 兩廳院新人新視野",
    "photoCredit": "陳又維",
    "caption": "把氣味搬上舞台！觀眾席下隱藏調香師，台灣早期先鋒嗅覺劇場。",
    "showId": "the-nose"
  },
  {
    "image": "images/巴西小丑MEU CLOWN 來台/演出區/演出中 002.JPG",
    "title": "巴西小丑 MEU CLOWN 來台",
    "category": "social",
    "categoryName": "國際交流與駐村",
    "year": "國際交流計畫",
    "photoCredit": "慢島劇團國際專案",
    "caption": "跨國小丑藝術節駐村與工作坊，為在地社區帶來滿滿歡笑與活力。",
    "showId": null
  }
];

// ==========================================================================
// 慢島劇團 影音紀錄專區資料庫 (Slow Island Video Archive - 19 Videos)
// ==========================================================================
const mediaVideos = [
  {
    id: "galangal-lemongrass-poppy",
    title: "《南薑．香茅．罌粟花》宣傳片花與演出精華",
    category: "migration",
    categoryName: "移民與歷史記憶",
    tag: "宣傳片花",
    year: "2026 鐵玫瑰焦點劇作",
    embedId: "oU6rtkHSN-E",
    url: "https://www.youtube.com/watch?v=oU6rtkHSN-E",
    image: "images/唐健哲攝影03271拷貝.jpg",
    caption: "廚房餐桌前的滇緬二代，在香料蒸騰中重尋家族根源與離散孤軍史詩。"
  },
  {
    id: "moon-lady",
    title: "《月孃》卡拉OK實景巡演紀實",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "現場實況",
    year: "經典長壽巡演",
    embedId: "bQ4YNLCCd-M",
    url: "https://www.youtube.com/watch?v=bQ4YNLCCd-M",
    image: "images/月孃/DSC_6400 拷貝2.JPG",
    caption: "深入全台卡拉OK店的傳奇實景喜劇，最接地氣的台語金曲與笑中帶淚人生。"
  },
  {
    id: "moon-lady-international",
    title: "《月孃》國際巡演紀實（巴西喜劇藝術節）",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "國際巡演",
    year: "2014 巴西喜劇藝術節",
    embedId: "xSezpuOwBkc",
    url: "https://www.youtube.com/watch?v=xSezpuOwBkc&t=18s",
    image: "images/月孃/1拷貝.JPG",
    caption: "受邀遠赴巴西第一屆國際喜劇演員藝術節演出，以台語金曲與在地姐妹情誼征服南美舞台。"
  },
  {
    id: "moon-lady-nursing-home",
    title: "《月孃》長照安養院巡演紀實",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "長照巡演",
    year: "全台安養院巡演",
    embedId: "YzY2LsF1bVY",
    url: "https://www.youtube.com/watch?v=YzY2LsF1bVY",
    image: "images/月孃/DSC_5626 拷貝2.JPG",
    caption: "打破黑盒子走入全台安養院與長照機構實地演出，用溫暖歌聲陪伴長輩重溫青春與笑容。"
  },
  {
    id: "ninis-secret-mv",
    title: "《妮妮的小祕密》主題曲 MV 與巡演紀錄",
    category: "children",
    categoryName: "親子偶戲",
    tag: "主題曲 MV",
    year: "2022 華山親子版",
    embedId: "tAOKBfeZeXk",
    url: "https://www.youtube.com/watch?v=tAOKBfeZeXk&t=5s",
    image: "images/妮妮的小祕密/2022華山版/0707_04.jpg",
    caption: "以溫柔布偶與洗腦旋律陪伴孩子認識身體界線、守護自我身體自主權。"
  },
  {
    id: "ninis-secret-clip",
    title: "《妮妮的小祕密》校園巡迴精選偶戲片段",
    category: "children",
    categoryName: "親子偶戲",
    tag: "精選偶戲",
    year: "全台校園巡演",
    embedId: "hSuyHvoxUs4",
    url: "https://www.youtube.com/watch?v=hSuyHvoxUs4",
    image: "images/妮妮的小祕密.jpg",
    caption: "偏鄉校園面對面零距離偶戲互動，為師生與孩童帶來最生動的保護教育。"
  },
  {
    id: "die-and-return",
    title: "《死去活來２～死去回來》排練與演出精華",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "彩排精華",
    year: "2024 桃園藝術綠洲",
    embedId: "93O2Y6bsMyc",
    url: "https://www.youtube.com/watch?v=93O2Y6bsMyc",
    image: "images/1101 《死去回來》彩排 攝影／林育全/LYQ241101 慢島劇團《死去回來》彩排 攝影／林育全_DSC1458.jpg",
    caption: "向黃春明鄉土文學致敬，荒誕爆笑的家庭告別劇中直面老人生存悲歌。"
  },
  {
    id: "hybrid-vibration",
    title: "《混血振動》大院子歷史建物聲音劇場",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "跨域現場",
    year: "2024 大院子演出",
    embedId: "peOk4aKjfQY",
    url: "https://www.youtube.com/watch?v=peOk4aKjfQY&t=8s",
    image: "images/混血振動 226彩排照片選 小樺陳/楊維真與唐明 撥弦陳小樺攝影.JPG",
    caption: "歷史建物大院子跨域肢體與即興音樂，回歸身體與撥弦共鳴的純粹振動。"
  },
  {
    id: "hybrid-vibration-micang",
    title: "《楊維真與唐明》慢島慢慢飛2023小小藝術季",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "跨域雙人",
    year: "2023 米倉劇場演出",
    embedId: "JShgoeVu__c",
    url: "https://www.youtube.com/watch?v=JShgoeVu__c&t=6s",
    image: "images/楊維真與唐明 攝影許雅婷/DSC_0289.JPG",
    caption: "楊維真融合鈴木訓練與梨園科步的當代肢體，對話唐明自製無鍵長笛與自由爵士聲響。"
  },
  {
    id: "childrens-secret-express",
    title: "《孩子們的祕密快遞》米倉藝術節演出精選",
    category: "children",
    categoryName: "親子偶戲",
    tag: "偶戲精華",
    year: "2023 米倉藝術節",
    embedId: "G6bgdp0gT7g",
    url: "https://www.youtube.com/watch?v=G6bgdp0gT7g",
    image: "images/孩子們的祕密快遞  攝影蕭登及 2023米倉/米倉藝術節提供 攝影登及_8432.jpg",
    caption: "以拼布與物件劇場溫柔對話戰火人權，為孩子送上世界最溫暖的心靈包裹。"
  },
  {
    id: "men-from-the-highland",
    title: "《高地來的男人》桃園藝術綠洲演出片段",
    category: "migration",
    categoryName: "移民與歷史記憶",
    tag: "舞台史詩",
    year: "2020 桃園藝術綠洲",
    embedId: "AZ79sESdRwI",
    url: "https://www.youtube.com/watch?v=AZ79sESdRwI",
    image: "images/2020高地來的男人劇照/一寸山河一寸血.jpg",
    caption: "忠貞新村滇緬孤軍田調之作，舞台上的老地圖與邊境戰袍，凝視流離者的一生。"
  },
  {
    id: "women-in-the-clouds",
    title: "《雲裡的女人》中壢五號倉庫實景演出",
    category: "migration",
    categoryName: "移民與歷史記憶",
    tag: "台新季提名",
    year: "2018 第17屆台新提名",
    embedId: "oP_vSHbE9Xw",
    url: "https://www.youtube.com/watch?v=oP_vSHbE9Xw",
    image: "images/雲裡的女人/雲裡的女人 中壢五號藝文文倉庫 20191109a.jpg",
    caption: "鐵道舊倉庫飄散牛趴敷香氣，跨世代女性的生命堅韌在料理香氣中深情交織。"
  },
  {
    id: "a-play-for-the-living-in-a-time-of-extinction",
    title: "《寫給滅絕時代》兩廳院秋天藝術節零碳排演出",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "綠色戲劇",
    year: "2021 兩廳院秋天藝術節",
    embedId: "4vy3PIdo_4s",
    url: "https://www.youtube.com/watch?v=4vy3PIdo_4s",
    image: "images/2021寫給滅絕時代/_DSC1403_DxO.jpg",
    caption: "兩廳院國際綠色戲劇授權，自行車踩踏發電直面全球生態與第六次大滅絕。"
  },
  {
    id: "the-free-storyteller",
    title: "《自由的說書人》落語與即興音樂演出紀錄",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "說書音樂會",
    year: "2022 米倉藝術節",
    embedId: "GgyAoxNLkr8",
    url: "https://www.youtube.com/watch?v=GgyAoxNLkr8",
    image: "images/2021 自由的說書人/LYQ221030 慢島劇團《自由的說書人》最終場演出｜攝影 林育全 _DSC7598.jpg",
    caption: "三位風格迥異的說書人搭配現場手風琴即興演奏，述說海洋與島嶼故事。"
  },
  {
    id: "wild-pistil",
    title: "《狂放的花蕊》晴耕雨讀小書院沙龍精華",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "草地沙龍",
    year: "2021 晴耕雨讀",
    embedId: "01Gh5mlNd-4",
    url: "https://www.youtube.com/watch?v=01Gh5mlNd-4",
    image: "images/狂放的花蕊照片/姿君.jpeg",
    caption: "獨立書店草地與書頁間，女性當代舞與古典女高音的狂野吟唱。"
  },
  {
    id: "ocean-drifters",
    title: "《海上漂浮者》跨國共創肢體聲音精華",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "肢體聲音劇場",
    year: "2025",
    embedId: "DjBFBay4Ka0",
    url: "https://www.youtube.com/watch?v=DjBFBay4Ka0",
    image: "images/海上漂浮者/20121211-海上漂浮者-0005.jpg",
    caption: "大洋孤舟上的漂泊身姿，純粹肢體與幽閉聲響直面遠洋漁工人權。"
  },
  {
    id: "midsummer-nights-dream",
    title: "《仲夏夜之夢》草地浪漫野台喜劇精華",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "莎翁野台祭",
    year: "2016-2019 全台巡演",
    embedId: "hD3uYbi833A",
    url: "https://www.youtube.com/watch?v=hD3uYbi833A",
    image: "images/2019仲夏夜之夢 許瑋/仲夏夜0118.jpg",
    caption: "非典型空間與草皮上，八位演員嬉鬧串演莎翁愛情奇幻盛宴。"
  },
  {
    id: "iron-factory",
    title: "《鐵工廠》大型原創勞動歌舞劇精華",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "勞動歌舞劇",
    year: "2013 大型歌舞",
    embedId: "1UjfnYz9V8U",
    url: "https://www.youtube.com/watch?v=1UjfnYz9V8U",
    image: "images/2013鐵工廠宣傳照 劇照/20131025-0173-鐵工廠 拷貝.jpg",
    caption: "賴佩霞領銜主演，金屬敲擊與高溫鐵火中，唱響台灣工人與移工生命之歌。"
  },
  {
    id: "Awaking of Love",
    title: "《夢醒時分》陳淑樺金曲時代音樂劇",
    category: "social",
    categoryName: "社會關懷與跨界",
    tag: "流行音樂劇",
    year: "2012 桃園大劇場",
    embedId: "BLuZrTo_V00",
    url: "https://www.youtube.com/watch?v=BLuZrTo_V00",
    image: "images/夢醒時分陳又維拍攝/04.春去春又回.jpg",
    caption: "金鐘編劇吳世偉執導，陳淑樺經典旋律與薩克斯風融合的千人劇場大作。"
  },
  {
    id: "the-nose",
    title: "《鼻子記》兩廳院先鋒嗅覺劇場精選",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "嗅覺感知劇場",
    year: "2009 兩廳院新人新視野",
    embedId: "X6OdwmSe0zI",
    url: "https://www.youtube.com/watch?v=X6OdwmSe0zI",
    image: "images/鼻子記/20091121-0036-20091122-鼻子記 拷貝.jpg",
    caption: "兩廳院新人新視野，觀眾席下隱藏調香師，台灣早期先鋒嗅覺劇場。"
  },
  {
    id: "mint-rosemary-unknown-flowers",
    title: "《薄荷、迷迭香和不知名的花》創團首獎演出",
    category: "site-specific",
    categoryName: "場域與感官實驗",
    tag: "藝穗節首獎",
    year: "2008 藝穗首獎 / 2010 台北節",
    embedId: "cOyn_MNqN2Y",
    url: "https://www.youtube.com/watch?v=cOyn_MNqN2Y",
    image: "images/2010薄荷 迷迭香 與不知名的花 台北藝術節/DSC_2495 拷貝.JPG",
    caption: "第一屆台北藝穗節首獎，植物花草芬芳意象與希臘神話對話的創團代表作。"
  },
  {
    id: "slow-island-intro",
    title: "《慢島劇團簡介》官方形象紀錄短片",
    category: "about",
    categoryName: "劇團形象專題",
    tag: "形象紀錄",
    year: "慢島精神紀錄",
    embedId: "qq_W8N0qOao",
    url: "https://www.youtube.com/watch?v=qq_W8N0qOao&t=3s",
    image: "images/唐健哲攝影02023拷貝.jpg",
    caption: "走過慢島歷年田野調查、排練場與巡演足跡，感受「立足土地、深刻關懷」的創作精神。"
  }
];

// DOM 載入後初始化
function initApp() {
  renderRepertoire(productions);
  renderHandbook(handbookArticles);
  initCategoryFilters();
  initStageCarousel();
  initPhotoViewerListeners();
  renderMediaVideos();
  initMediaVideoFilters();
  initModals();
  initMobileMenu();
  initContactForm();
  initStageBackdrop();
  initRepertoireDelegation();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// 綁定劇目卡片全域事件委派（支援「介紹」、「劇評」、「影音」與整卡點擊）
function initRepertoireDelegation() {
  const container = document.getElementById("repertoire-grid");
  if (!container) return;
  if (container.getAttribute && container.getAttribute("data-delegated") === "true") return;
  if (container.dataset && container.dataset.delegated === "true") return;
  
  if (container.setAttribute) container.setAttribute("data-delegated", "true");
  if (container.dataset) container.dataset.delegated = "true";

  if (container.addEventListener) {
    container.addEventListener("click", (e) => {

      const actionEl = e.target && e.target.closest ? e.target.closest("[data-action]") : null;
      if (!actionEl) return;
      const action = (actionEl.getAttribute && actionEl.getAttribute("data-action")) || (actionEl.dataset && actionEl.dataset.action);
      const showId = (actionEl.getAttribute && actionEl.getAttribute("data-show-id")) || (actionEl.dataset && actionEl.dataset.showId);
      if (!showId) return;

      if (action === "show") {
        openShowModal(showId, e);
      } else if (action === "reviews") {
        openReviewsModal(showId, e);
      } else if (action === "video") {
        openVideoModal(showId, null, null, e);
      }
    });
  }
}

// 渲染劇目卡片列表
// ==========================================================================
// 歷年劇作卡片頂部相簿輪播系統 (In-Card Header Photo Carousel - 方案三)
// 特色：卡片頂部左右箭頭輪播、10 張縮圖直選、開啟原圖按鈕、零彈窗、零卡頓
// ==========================================================================
const cardPhotoIndices = {};

function stepCardPhoto(showId, delta, event) {
  if (event) {
    try {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
      if (typeof event.preventDefault === "function") event.preventDefault();
    } catch (e) {}
  }
  const show = findProduction(showId);
  if (!show) return;
  const photos = (show.gallery && show.gallery.length > 0) ? show.gallery : (show.image ? [show.image] : []);
  if (photos.length <= 1) return;

  const currentIndex = cardPhotoIndices[showId] || 0;
  const nextIndex = (currentIndex + delta + photos.length) % photos.length;
  setCardPhotoIndex(showId, nextIndex, event);
}

function setCardPhotoIndex(showId, index, event) {
  if (event) {
    try {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
      if (typeof event.preventDefault === "function") event.preventDefault();
    } catch (e) {}
  }
  const show = findProduction(showId);
  if (!show) return;
  const photos = (show.gallery && show.gallery.length > 0) ? show.gallery : (show.image ? [show.image] : []);
  if (photos.length === 0) return;

  const safeId = String(showId).replace(/\s+/g, "-");
  const targetIndex = Math.max(0, Math.min(typeof index === "number" ? index : parseInt(index, 10) || 0, photos.length - 1));
  cardPhotoIndices[showId] = targetIndex;

  const targetPhoto = photos[targetIndex];
  const encodedPhoto = encodeURI(targetPhoto);

  const imgEl = document.getElementById("card-carousel-img-" + safeId);
  const counterEl = document.getElementById("card-counter-" + safeId);
  const rawLinkEl = document.getElementById("card-raw-link-" + safeId);

  if (imgEl) {
    imgEl.style.opacity = "0.35";
    imgEl.src = encodedPhoto;
    setTimeout(() => {
      imgEl.style.opacity = "1";
    }, 60);
  }
  if (counterEl) {
    counterEl.textContent = `${targetIndex + 1} / ${photos.length}`;
  }
  if (rawLinkEl) {
    rawLinkEl.href = encodedPhoto;
  }

  // 更新縮圖高亮狀態
  const dots = document.querySelectorAll(`.card-thumb-dot-${safeId}`);
  dots.forEach((dot, idx) => {
    if (idx === targetIndex) {
      dot.classList.remove("border-stone-300", "opacity-60");
      dot.classList.add("border-[#8c1d1d]", "ring-2", "ring-[#8c1d1d]", "opacity-100", "scale-105");
    } else {
      dot.classList.remove("border-[#8c1d1d]", "ring-2", "ring-[#8c1d1d]", "opacity-100", "scale-105");
      dot.classList.add("border-stone-300", "opacity-60");
    }
  });
}

window.stepCardPhoto = stepCardPhoto;
window.setCardPhotoIndex = setCardPhotoIndex;

function renderRepertoire(items) {
  const container = document.getElementById("repertoire-grid");
  if (!container) return;

  container.innerHTML = "";
  initRepertoireDelegation();

  items.forEach(show => {
    const safeId = show.id.replace(/\s+/g, "-");
    const card = document.createElement("div");
    card.className = "show-card bg-white rounded-2xl overflow-hidden border border-[#e6dfd3] flex flex-col shadow-sm hover:shadow-md transition-shadow";
    if (card.setAttribute) card.setAttribute("data-category", show.category);
    if (card.dataset) card.dataset.category = show.category;

    const featuredBadge = show.featured 
      ? `<span class="absolute top-3 left-3 bg-[#b85038] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-20">當季主推 Featured</span>` 
      : "";

    const reviewCount = show.reviews ? show.reviews.length : 0;
    const videoUrl = show.youtubeUrl || (show.youtubeEmbedId ? `https://www.youtube.com/watch?v=${show.youtubeEmbedId}` : "https://www.youtube.com/@SlowislandArtTheatre");

    // 劇照清單（精選 10 張，支援封面輪播與縮圖一秒直選）
    const photos = (show.gallery && show.gallery.length > 0) ? show.gallery : (show.image ? [show.image] : []);
    const totalPhotos = photos.length;
    const initialPhoto = photos[0];
    const encodedInitialPhoto = encodeURI(initialPhoto);
    const photoCreditText = show.photoCredit ? `📷 ${show.photoCredit}` : "";

    // 輪播縮圖選單列（10 張精緻微縮圖列，方便使用者直接點選直達）
    const thumbsStripHtml = totalPhotos > 1 ? `
      <div class="px-2.5 py-2 bg-[#fbf8f2] border-b border-[#ebdcca] flex items-center gap-1.5 overflow-x-auto select-none" style="scrollbar-width: thin;">
        <span class="text-[10px] text-[#8c1d1d] font-bold shrink-0 pl-1">劇照：</span>
        <div class="flex items-center gap-1.5 min-w-max">
          ${photos.map((src, i) => `
            <button type="button" onclick="setCardPhotoIndex('${show.id}', ${i}, event)" class="card-thumb-dot-${safeId} shrink-0 w-8 h-6 sm:w-9 sm:h-6.5 rounded overflow-hidden border transition-all cursor-pointer ${i === 0 ? 'border-[#8c1d1d] ring-2 ring-[#8c1d1d] opacity-100 scale-105' : 'border-stone-300 opacity-60 hover:opacity-100'}" title="切換至《${show.title}》第 ${i + 1} 張劇照">
              <img src="${encodeURI(src)}" alt="縮圖 ${i + 1}" class="w-full h-full object-cover pointer-events-none" loading="lazy">
            </button>
          `).join("")}
        </div>
      </div>
    ` : "";

    const cardHeaderHtml = `
      <!-- 卡片頂部相簿輪播區塊 (方案三：左右箭頭流暢輪播 + 10 張縮圖直選，免開彈窗、零卡頓) -->
      <div class="relative h-60 sm:h-64 bg-[#1e1915] overflow-hidden select-none group/carousel" id="card-carousel-box-${safeId}">
        ${featuredBadge}

        <!-- 當前主劇照 (點擊直接在新分頁開啟原圖) -->
        <a href="${encodedInitialPhoto}" target="_blank" rel="noopener noreferrer" id="card-main-link-${safeId}" class="block w-full h-full cursor-pointer" title="點擊在新分頁開啟《${show.title}》高畫質劇照">
          <img id="card-carousel-img-${safeId}" src="${encodedInitialPhoto}" alt="${show.title} 劇照" class="w-full h-full object-cover transition-opacity duration-200">
        </a>
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>

        ${totalPhotos > 1 ? `
          <!-- 左箭頭：上一張 -->
          <button type="button" onclick="stepCardPhoto('${show.id}', -1, event)" class="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#8c1d1d] text-white flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-lg text-sm font-bold cursor-pointer" title="上一張劇照 (←)">
            ❮
          </button>

          <!-- 右箭頭：下一張 -->
          <button type="button" onclick="stepCardPhoto('${show.id}', 1, event)" class="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#8c1d1d] text-white flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-lg text-sm font-bold cursor-pointer" title="下一張劇照 (→)">
            ❯
          </button>
        ` : ""}

        <!-- 右上角：開啟高畫質原圖外開按鈕 -->
        <div class="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <a id="card-raw-link-${safeId}" href="${encodedInitialPhoto}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-[11px] font-semibold text-amber-200 hover:text-white bg-black/65 hover:bg-[#8c1d1d] px-2.5 py-1 rounded-full border border-white/20 transition-all shadow flex items-center gap-1 cursor-pointer" title="在瀏覽器新分頁開啟高畫質原圖">
            <span>開啟原圖 ↗</span>
          </a>
        </div>

        <!-- 底部資訊列：分類、攝影師署名與張數計數器 -->
        <div class="absolute bottom-2.5 left-3 right-3 z-10 flex justify-between items-end text-white pointer-events-none">
          <div class="flex items-center gap-1.5 max-w-[70%] truncate">
            <span class="text-[11px] font-medium tracking-wider uppercase bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">${show.categoryName}</span>
            ${photoCreditText ? `<span class="text-[10px] text-stone-300 truncate bg-black/40 px-1.5 py-0.5 rounded hidden sm:inline">${photoCreditText}</span>` : ""}
          </div>
          <span id="card-counter-${safeId}" class="text-[11px] text-stone-200 font-mono bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20 shadow">
            1 / ${totalPhotos}
          </span>
        </div>
      </div>
      ${thumbsStripHtml}
    `;

    // 劇評清單
    let inCardReviewsHtml = "";
    if (reviewCount >= 1 && show.id !== "galangal-lemongrass-poppy") {
      if (reviewCount === 1) {
        const r = show.reviews[0];
        inCardReviewsHtml = `
          <div class="mt-2.5 pt-2.5 border-t border-[#f4eee3] text-xs">
            <div class="flex items-center justify-between gap-2 py-1.5 px-2.5 rounded-lg bg-[#faf6ee] border border-[#ebdcca] text-[11px] shadow-sm">
              <span class="text-[#8c1d1d] font-bold text-[10px] shrink-0 bg-[#8c1d1d]/10 px-1.5 py-0.5 rounded">${r.media || "劇評"}</span>
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-[#23150f] hover:text-[#8c1d1d] hover:underline truncate flex-1 font-medium font-sans" title="${r.title}">
                ${r.title}
              </a>
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#8c1d1d] font-bold shrink-0 hover:underline px-1" title="開新分頁閱讀專文全文">
                ↗
              </a>
            </div>
          </div>
        `;
      } else {
        inCardReviewsHtml = `
          <div class="mt-2.5 pt-2.5 border-t border-[#f4eee3] text-xs">
            <button type="button" onclick="toggleCardReviews('${safeId}', event)" class="w-full text-[11px] text-[#8c1d1d] hover:text-[#b85038] font-semibold py-1.5 px-2.5 rounded-lg bg-[#faf6ee] hover:bg-[#f4e8d3] transition-colors flex items-center justify-between cursor-pointer border border-[#ebdcca]">
              <span class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#8c1d1d]"></span>
                <span>收錄 <strong>${reviewCount}</strong> 篇各界專文劇評與媒體報導</span>
              </span>
              <span id="toggle-label-${safeId}" class="text-[10px] font-medium text-[#8c7e72]">展開清單 ▼</span>
            </button>
            <div id="card-reviews-${safeId}" class="hidden space-y-1.5 bg-[#faf6ef] p-3 rounded-xl border border-[#ebdcca] text-[11px] mt-1.5 shadow-inner">
              ${show.reviews.map((r, i) => `
                <div class="flex items-center justify-between gap-2 py-1 border-b border-[#ebdcca]/50 last:border-b-0">
                  <span class="text-[#8c1d1d] font-bold text-[10px] shrink-0 bg-[#8c1d1d]/10 px-1.5 py-0.5 rounded">${r.media || "評論"}</span>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-[#23150f] hover:text-[#8c1d1d] hover:underline truncate flex-1 font-medium font-sans" title="${r.title}">
                    ${r.title}
                  </a>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#8c1d1d] font-bold shrink-0 hover:underline px-1" title="開新分頁閱讀全文">
                    ↗
                  </a>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }
    }

    // 卡片底部影音與評論
    let cardFooterHtml = "";
    if (show.id === "galangal-lemongrass-poppy") {
      cardFooterHtml = `
        <div class="mt-auto pt-4 border-t border-[#f4eee3] flex flex-col gap-2.5">
          <div class="w-full">
            <a href="https://www.youtube.com/watch?v=oU6rtkHSN-E&t=2s" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-center text-xs font-bold py-2.5 px-3 rounded-xl bg-[#b85038]/10 text-[#b85038] hover:bg-[#b85038] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm w-full" title="前往 YouTube 觀看官方片花預告（新分頁開啟）">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>觀看官方片花預告（YouTube） ↗</span>
            </a>
          </div>

          <div class="mt-1 pt-2.5 border-t border-[#ebdcca] text-xs">
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center gap-1.5 text-xs font-bold text-[#8c1d1d]">
                <span class="w-2 h-2 rounded-full bg-[#8c1d1d]"></span>
                <span>歷年專文劇評與媒體報導（共 10 篇）</span>
              </span>
            </div>
            <div class="space-y-1.5 bg-[#faf6ef] p-3 rounded-xl border border-[#ebdcca] text-[11px] shadow-inner max-h-56 overflow-y-auto">
              ${show.reviews.map(r => `
                <div class="flex items-center justify-between gap-2 py-1 border-b border-[#ebdcca]/50 last:border-b-0">
                  <span class="text-[#8c1d1d] font-bold text-[10px] shrink-0 bg-[#8c1d1d]/10 px-1.5 py-0.5 rounded">${r.media || "評論"}</span>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-[#23150f] hover:text-[#8c1d1d] hover:underline truncate flex-1 font-medium font-sans" title="${r.title}">
                    ${r.title}
                  </a>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#8c1d1d] font-bold shrink-0 hover:underline px-1" title="開新分頁閱讀全文">
                    ↗
                  </a>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    } else {
      cardFooterHtml = `
        <div class="mt-auto pt-4 border-t border-[#f4eee3] flex flex-col gap-2">
          <div class="w-full">
            <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-center text-xs font-semibold py-2.5 px-3 rounded-xl bg-[#b85038]/10 text-[#b85038] hover:bg-[#b85038] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm w-full" title="前往 YouTube 觀看官方影音紀錄（新分頁開啟）">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>觀看官方影音（YouTube） ↗</span>
            </a>
          </div>
          ${show.extraVideos && show.extraVideos.length > 0 ? `
            <div class="flex flex-wrap gap-1.5 pt-0.5">
              ${show.extraVideos.map(v => `
                <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[120px] text-center text-[10.5px] font-semibold py-1.5 px-2 rounded-lg bg-[#faede6] text-[#b84e12] hover:bg-[#b84e12] hover:text-white transition-all flex items-center justify-center gap-1 border border-[#f0cbba]/70 truncate shadow-2xs" title="前往 YouTube 觀看《${show.title} - ${v.label}》（新分頁開啟）">
                  <svg class="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span class="truncate">${v.label} ↗</span>
                </a>
              `).join("")}
            </div>
          ` : ""}
          ${inCardReviewsHtml}
        </div>
      `;
    }

    let creditsInCardHtml = "";
    if (show.credits && show.credits.length > 0) {
      creditsInCardHtml = `
        <div class="mt-2.5 pt-2.5 border-t border-[#f4eee3] text-xs">
          <button type="button" onclick="toggleCardCredits('${safeId}', event)" class="w-full text-[11px] text-[#23150f] hover:text-[#8c1d1d] font-semibold py-1.5 px-2.5 rounded-lg bg-[#faf6ee] hover:bg-[#f4e8d3] transition-colors flex items-center justify-between cursor-pointer border border-[#ebdcca]" title="點擊展開/收起《${show.title}》完整演職員與製作團隊名單">
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#8c1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span>演職人員完整名單（共 <strong>${show.credits.length}</strong> 項）</span>
            </span>
            <span id="toggle-credits-label-${safeId}" class="text-[10px] font-medium text-[#8c7e72]">展開名單 ▼</span>
          </button>
          <div id="card-credits-${safeId}" class="hidden space-y-1.5 bg-[#faf6ef] p-3 rounded-xl border border-[#ebdcca] text-[11px] mt-1.5 shadow-inner max-h-56 overflow-y-auto">
            ${show.credits.map(c => `
              <div class="py-0.5 text-[#4a3e39] ${c.startsWith('【') ? 'font-bold text-[#8c1d1d] pt-1.5 border-t border-[#ebdcca]/40' : ''}">${c}</div>
            `).join("")}
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      ${cardHeaderHtml}
      <div class="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 class="font-serif text-2xl font-bold text-[#22211e] mb-1 cursor-pointer hover:text-[#b85038] transition-colors" data-action="show" data-show-id="${show.id}" onclick="openShowModal('${show.id}', event)" title="點擊查看《${show.title}》完整介紹與演職人員">${show.title}</h3>
        <p class="text-xs text-[#b85038] font-medium tracking-wide uppercase mb-3">${show.enTitle}</p>
        
        <!-- 核心精神標語 (雙語呈現) -->
        <div class="mb-3 bg-[#fcf8f2] p-2.5 rounded-xl border-l-2 border-[#d96523]">
          <p class="text-xs italic font-serif text-[#8c1d1d] font-semibold leading-relaxed">
            “${show.tagline}”
          </p>
          ${show.enTagline ? `
            <p class="text-[11px] font-sans not-italic text-stone-500 font-normal mt-1 leading-relaxed">
              "${show.enTagline}"
            </p>
          ` : ""}
        </div>

        <!-- 劇情簡介 (中英雙語呈現) -->
        <div class="mb-3 p-3 rounded-xl bg-[#faf6ee] border border-[#ebdcca] text-xs">
          <div class="flex items-center gap-1.5 text-[11px] font-bold text-[#8c1d1d] mb-1.5 uppercase tracking-wider">
            <span class="w-1.5 h-1.5 rounded-full bg-[#8c1d1d]"></span>
            <span>劇情簡介 / Synopsis</span>
          </div>
          <p class="text-xs text-[#4a3e39] leading-relaxed">
            ${show.description}
          </p>
          ${show.enDescription ? `
            <p class="text-[11px] text-[#7a6f66] italic font-sans leading-relaxed border-t border-[#ebdcca]/70 pt-2 mt-2">
              ${show.enDescription}
            </p>
          ` : ""}
        </div>

        <!-- 核心編導與主演摘要 -->
        <div class="mb-2 p-2.5 rounded-xl bg-[#fdfbf7] border border-[#ebdcca] text-[11px] space-y-1">
          <div class="flex items-start gap-1">
            <span class="text-[#8c1d1d] font-bold shrink-0">編導｜</span>
            <span class="text-[#23150f] font-medium">${show.director}</span>
          </div>
          ${show.cast ? `
            <div class="flex items-start gap-1">
              <span class="text-[#8c1d1d] font-bold shrink-0">演出｜</span>
              <span class="text-[#23150f] font-medium line-clamp-2">${show.cast}</span>
            </div>
          ` : ""}
        </div>

        ${creditsInCardHtml}

        ${cardFooterHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderHandbook(articles) {
  const container = document.getElementById("handbook-grid");
  if (!container) return;

  container.innerHTML = "";

  articles.forEach(art => {
    const card = document.createElement("article");
    card.className = "bg-white rounded-2xl p-6 sm:p-7 border border-[#e6dfd3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="bg-[#8c1d1d]/10 text-[#8c1d1d] font-bold text-xs px-2.5 py-1 rounded-md">
            劇場生存者
          </span>
          <span class="text-xs text-[#6e5548] font-mono">${art.date}</span>
        </div>

        <h3 class="font-serif text-2xl font-bold text-[#23150f] mb-1">
          ${art.name}
        </h3>
        <p class="text-xs text-[#d96523] font-semibold tracking-wide uppercase mb-4">
          ${art.role}
        </p>

        <blockquote class="text-xs sm:text-sm text-[#5c3e2e] italic bg-[#fcf8f2] p-4 rounded-xl border-l-4 border-[#d96523] mb-4 leading-relaxed font-serif">
          “${art.quote}”
        </blockquote>

        <p class="text-xs sm:text-sm text-[#6e5548] leading-relaxed mb-6">
          ${art.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-[#f4eee3] flex items-center justify-between">
        <span class="text-xs text-[#8c1d1d] font-medium">訪談企劃：陳雅柔</span>
        <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#8c1d1d] hover:text-[#d96523] transition-colors">
          <span>閱讀專訪全文</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// 劇目分類篩選
function initCategoryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active", "bg-[#38493d]", "text-white"));
      buttons.forEach(b => b.classList.add("bg-white", "text-[#69655d]"));
      
      btn.classList.add("active", "bg-[#38493d]", "text-white");
      btn.classList.remove("bg-white", "text-[#69655d]");

      const cat = (btn.getAttribute && btn.getAttribute("data-category")) || (btn.dataset && btn.dataset.category) || "all";
      if (cat === "all") {
        renderRepertoire(productions);
      } else {
        const filtered = productions.filter(p => p.category === cat);
        renderRepertoire(filtered);
      }
    });
  });
}

let lastModalOpenTime = 0;

function toggleCardReviews(showId, event) {
  if (event) {
    try {
      if (typeof event.preventDefault === "function") event.preventDefault();
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }
  const safeId = showId ? showId.replace(/\s+/g, "-") : "";
  const el = document.getElementById("card-reviews-" + safeId) || document.getElementById("card-reviews-" + showId);
  const label = document.getElementById("toggle-label-" + safeId) || document.getElementById("toggle-label-" + showId);
  if (!el) return;
  const isHidden = el.classList.contains("hidden");
  if (isHidden) {
    el.classList.remove("hidden");
    if (label) label.textContent = "收起清單 ▲";
  } else {
    el.classList.add("hidden");
    if (label) label.textContent = "展開清單 ▼";
  }
}
window.toggleCardReviews = toggleCardReviews;

function toggleCardCredits(showId, event) {
  if (event) {
    try {
      if (typeof event.preventDefault === "function") event.preventDefault();
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }
  const safeId = showId ? showId.replace(/\s+/g, "-") : "";
  const el = document.getElementById("card-credits-" + safeId) || document.getElementById("card-credits-" + showId);
  const label = document.getElementById("toggle-credits-label-" + safeId) || document.getElementById("toggle-credits-label-" + showId);
  if (!el) return;
  const isHidden = el.classList.contains("hidden");
  if (isHidden) {
    el.classList.remove("hidden");
    if (label) label.textContent = "收起名單 ▲";
  } else {
    el.classList.add("hidden");
    if (label) label.textContent = "展開名單 ▼";
  }
}
window.toggleCardCredits = toggleCardCredits;

// 切換卡片頂部預覽劇照（點擊劇照縮圖即時切換封面，零卡頓）
function switchCardPhoto(showId, photoUrl, thumbEl, event) {
  if (event) {
    try {
      if (typeof event.preventDefault === "function") event.preventDefault();
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }
  const safeId = showId ? showId.replace(/\s+/g, "-") : "";
  const mainImg = document.getElementById("card-main-img-" + safeId) || document.getElementById("card-main-img-" + showId);
  if (mainImg) {
    mainImg.src = encodeURI(photoUrl);
    mainImg.dataset.currentSrc = photoUrl;
  }
  const card = thumbEl ? thumbEl.closest(".show-card") : null;
  if (card) {
    card.querySelectorAll(".card-photo-thumb").forEach(el => {
      el.classList.remove("ring-2", "ring-[#8c1d1d]", "border-[#8c1d1d]");
    });
  }
  if (thumbEl) {
    thumbEl.classList.add("ring-2", "ring-[#8c1d1d]", "border-[#8c1d1d]");
  }
}
window.switchCardPhoto = switchCardPhoto;

// 展開 / 收合各劇卡片內的其他劇照清單
function toggleShowGallery(showId, event) {
  if (event) {
    try {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }
  const safeId = showId ? String(showId).replace(/\s+/g, "-") : "";
  const el = document.getElementById("card-gallery-" + safeId) || document.getElementById("card-gallery-" + showId);
  const label = document.getElementById("toggle-gallery-label-" + safeId) || document.getElementById("toggle-gallery-label-" + showId);
  if (!el) return;
  const isHidden = el.classList.contains("hidden");
  if (isHidden) {
    el.classList.remove("hidden");
    if (label) label.textContent = "收起劇照 ▲";
  } else {
    el.classList.add("hidden");
    if (label) label.textContent = "展開劇照 ▼";
  }
}
window.toggleShowGallery = toggleShowGallery;
window.toggleCardGallery = toggleShowGallery;

function openPhotoZoom(showId, photoIndex, photoUrl, thumbEl, event) {
  openPhotoViewer(showId, photoIndex, event);
}
window.openPhotoZoom = openPhotoZoom;

// 模態框初始化
function initModals() {
  // 點擊背景關閉（加上 250ms 時間閾值防誤觸）
  const backdrops = document.querySelectorAll(".modal-backdrop");
  backdrops.forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (Date.now() - lastModalOpenTime < 250) return;
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // ESC 鍵關閉
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

// 開啟劇目詳情
function openShowModal(showId, event) {
  if (event) {
    try {
      event.preventDefault();
      event.stopPropagation();
    } catch (e) {}
  }

  const show = findProduction(showId);
  if (!show) {
    console.warn("未找到劇目資料：", showId);
    return;
  }

  const modal = document.getElementById("show-modal");
  const modalBody = document.getElementById("show-modal-body");
  if (!modal || !modalBody) {
    console.warn("未找到劇目詳情彈窗容器元素！");
    return;
  }

  const highlightsList = show.highlights && show.highlights.length > 0 
    ? `<div class="mt-4">
        <h5 class="text-xs uppercase tracking-wider text-[#b85038] font-bold mb-2">作品亮點與迴響</h5>
        <ul class="list-disc list-inside text-sm text-[#69655d] space-y-1">
          ${show.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
       </div>`
    : "";

  const creditsHtml = show.credits && show.credits.length > 0
    ? `<div class="mt-4 p-4 rounded-xl bg-[#faf6ef] border border-[#e8dfd1] text-xs text-[#554f47]">
        <h5 class="text-xs uppercase tracking-wider text-[#8c1d1d] font-bold mb-2.5 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#8c1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          完整演職員表與製作團隊
        </h5>
        <div class="space-y-1.5 leading-relaxed">
          ${show.credits.map(c => {
            if (c.startsWith("【")) {
              return `<div class="font-bold text-[#8c1d1d] pt-2 pb-0.5 border-b border-[#ebdcca]">${c}</div>`;
            }
            return `<div>${c}</div>`;
          }).join("")}
        </div>
      </div>`
    : "";

  const extraVideosHtml = show.extraVideos && show.extraVideos.length > 0
    ? show.extraVideos.map(v => `
        <button onclick="openVideoModal('${show.title} - ${v.label}', '${v.embedId}', '${v.url}')" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#faede6] text-[#b84e12] border border-[#f0cbba] hover:bg-[#b84e12] hover:text-white transition-colors text-xs font-semibold shadow-sm">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <span>${v.label}</span>
        </button>
      `).join("")
    : "";

  const galleryHtml = show.gallery && show.gallery.length > 0
    ? (() => {
        const totalCount = show.gallery.length;
        const initialCount = 15;
        const initialPhotos = show.gallery.slice(0, initialCount);
        const extraPhotos = show.gallery.slice(initialCount);
        const hasExtra = extraPhotos.length > 0;

        const renderThumb = (img, idx) => `
          <div class="relative rounded-xl overflow-hidden aspect-[4/3] border border-[#e6dfd3] bg-[#22211e] group cursor-pointer shadow-sm hover:shadow-md transition-all duration-200" onclick="openLightboxForShow('${show.id}', ${idx})" title="點擊開啟全螢幕大圖燈箱 (${idx+1}/${totalCount})">
            <img src="${encodeURI(img)}" alt="${show.title} 劇照" loading="lazy" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300 pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2 pointer-events-none">
              <span class="text-[11px] text-white/95 font-mono font-bold drop-shadow">${idx+1}/${totalCount}</span>
              <span class="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white shadow">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
              </span>
            </div>
          </div>
        `;

        return `
          <div class="mt-6 pt-5 border-t border-[#ebdcca]">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3.5">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#8c1d1d]"></span>
                <h5 class="text-xs uppercase tracking-wider text-[#8c1d1d] font-bold">精選劇照藝廊 (${totalCount} 張完整收錄)</h5>
              </div>
              ${show.photoCredit ? `<span class="text-xs text-[#6e5548] font-medium bg-[#faf6ee] px-2.5 py-1 rounded-lg border border-[#e6dfd3]">劇照攝影：${show.photoCredit}</span>` : ""}
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              ${initialPhotos.map((img, idx) => renderThumb(img, idx)).join("")}
            </div>

            ${hasExtra ? `
              <div id="extra-gallery-${show.id}" class="hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-2.5">
                ${extraPhotos.map((img, i) => renderThumb(img, initialCount + i)).join("")}
              </div>
              <div class="text-center mt-3">
                <button id="toggle-gallery-btn-${show.id}" onclick="toggleShowGallery('${show.id}')" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#faf6ee] hover:bg-[#8c1d1d] text-[#8c1d1d] hover:text-white border border-[#e6dfd3] hover:border-[#8c1d1d] text-xs font-semibold transition-all duration-200 shadow-sm">
                  <span>展開查看全部 ${totalCount} 張劇照（還有 ${extraPhotos.length} 張）</span>
                  <svg id="toggle-gallery-icon-${show.id}" class="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
              </div>
            ` : ""}

            <p class="text-[11px] text-[#8c7e72] mt-2.5 text-right flex items-center justify-end gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#8c1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>
              點擊任一縮圖即可開啟全螢幕大圖燈箱，支援鍵盤左右方向鍵與手機滑動翻頁
            </p>
          </div>
        `;
      })()
    : "";

  const bookBtn = show.bookUrl
    ? `<a href="${show.bookUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8c1d1d] hover:bg-[#5e1212] text-white font-medium transition-colors text-sm shadow-md">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        <span>購買原創劇本（博客來） ↗</span>
       </a>`
    : "";

  const hasReviews = show.reviews && show.reviews.length > 0;

  const reviewsHtml = hasReviews
    ? `
      <div class="mt-6 pt-5 border-t border-[#ebdcca]">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#8c1d1d]"></span>
            <h5 class="text-xs uppercase tracking-wider text-[#8c1d1d] font-bold">專文劇評與媒體露出 (${show.reviews.length} 篇完整收錄)</h5>
          </div>
        </div>
        <div class="space-y-3">
          ${show.reviews.map(r => `
            <div class="p-4 rounded-2xl bg-[#faf6ef] border border-[#e8dfd1] hover:border-[#8c1d1d]/50 hover:shadow-md transition-all cursor-pointer group" onclick="if(!event.target.closest('a') && '${r.url}'){window.open('${r.url}', '_blank');}">
              <div class="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                <div class="flex items-center gap-2">
                  <span class="bg-[#8c1d1d]/10 text-[#8c1d1d] font-bold text-[11px] px-2.5 py-0.5 rounded-md">
                    ${r.media || "媒體露出"}
                  </span>
                  ${r.tag ? `<span class="bg-[#d96523]/10 text-[#d96523] font-semibold text-[10px] px-2 py-0.5 rounded border border-[#d96523]/20">${r.tag}</span>` : ""}
                </div>
                <span class="text-[11px] text-[#6e5548] font-mono">${r.date ? `${r.date} ` : ""}${r.author ? `· 文 / ${r.author}` : ""}</span>
              </div>
              <h6 class="font-serif text-base font-bold text-[#23150f] mb-1.5 leading-snug group-hover:text-[#8c1d1d] transition-colors">
                ${r.url ? `
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-start justify-between gap-2" onclick="event.stopPropagation()">
                    <span>${r.title}</span>
                    <span class="text-xs text-[#8c1d1d] font-sans font-semibold shrink-0">閱讀全文 ↗</span>
                  </a>
                ` : r.title}
              </h6>
              ${r.quote ? `<p class="text-xs text-[#6e5548] italic bg-[#fcf8f2] p-3 rounded-xl border-l-2 border-[#d96523] mb-2.5 leading-relaxed">“${r.quote}”</p>` : ""}
              ${r.url ? `
                <div class="pt-2.5 border-t border-[#ebdcca]/60 flex items-center justify-between">
                  <span class="text-xs text-[#8c7e72]">${r.media} 官方授權評論</span>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#8c1d1d] hover:bg-[#5e1212] px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer shadow-sm" onclick="event.stopPropagation()">
                    <span>點擊開啟專文全文 ↗</span>
                  </a>
                </div>
              ` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    `
    : "";

  modalBody.innerHTML = `
    <div class="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6 bg-[#22211e]">
      <img src="${encodeURI(show.image)}" alt="${show.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6 text-white">
        <span class="inline-block bg-[#8c1d1d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
          ${show.categoryName} · ${show.year}
        </span>
        <h2 class="font-serif text-3xl md:text-4xl font-bold mb-1">${show.title}</h2>
        <p class="text-stone-300 text-sm tracking-wide uppercase">${show.enTitle}</p>
      </div>
    </div>

    <div class="space-y-6 text-[#22211e]">
      <div>
        <div class="mb-4 border-l-4 border-[#d96523] pl-4">
          <p class="text-lg font-serif italic text-[#8c1d1d] font-medium leading-relaxed">
            “${show.tagline}”
          </p>
          ${show.enTagline ? `
            <p class="text-xs font-sans not-italic text-stone-500 font-normal mt-1 leading-relaxed">
              "${show.enTagline}"
            </p>
          ` : ""}
        </div>
        <div class="mb-2 flex items-center gap-1.5 text-xs font-bold text-[#8c1d1d] uppercase tracking-wider">
          <span class="w-2 h-2 rounded-full bg-[#8c1d1d]"></span>
          <span>劇情簡介與創作背景 / Synopsis & Creative Background</span>
        </div>
        <p class="text-base text-[#6e5548] leading-relaxed">
          ${show.description}
        </p>
        ${show.enDescription ? `
          <p class="text-sm text-[#7a6f66] italic font-sans leading-relaxed border-t border-[#ebdcca] pt-3 mt-3">
            ${show.enDescription}
          </p>
        ` : ""}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#f4e8d3] text-sm">
        <div>
          <span class="text-xs text-[#8c1d1d] font-bold block uppercase tracking-wider">編劇暨導演 / 藝術概念</span>
          <span class="text-[#23150f] font-semibold">${show.director}</span>
        </div>
        <div>
          <span class="text-xs text-[#8c1d1d] font-bold block uppercase tracking-wider">創作形式 / 製作陣容</span>
          <span class="text-[#23150f] font-semibold">${show.playwright}</span>
        </div>
        <div class="md:col-span-2">
          <span class="text-xs text-[#8c1d1d] font-bold block uppercase tracking-wider">演出陣容</span>
          <span class="text-[#23150f] font-semibold">${show.cast}</span>
        </div>
      </div>

      ${creditsHtml}

      ${highlightsList}

      ${reviewsHtml}

      ${galleryHtml}

      <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e6dfd3]">
        <div class="flex flex-wrap items-center gap-3">
          <a href="${show.youtubeUrl || (show.youtubeEmbedId ? `https://www.youtube.com/watch?v=${show.youtubeEmbedId}` : 'https://www.youtube.com/@SlowislandArtTheatre')}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d96523] text-white font-medium hover:bg-[#b84e12] transition-colors text-sm shadow-md" title="前往 YouTube 觀看官方影音紀錄（新分頁開啟）">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>觀看官方影音（YouTube） ↗</span>
          </a>
          ${extraVideosHtml}
          ${bookBtn}
        </div>
        <a href="#contact" onclick="closeAllModals()" class="text-sm font-medium text-[#8c1d1d] hover:text-[#d96523] underline underline-offset-4">
          洽詢本劇巡演邀約 →
        </a>
      </div>
    </div>
  `;

  // 重置內部滾動區域位置至最頂部
  modalBody.scrollTop = 0;
  if (modal) modal.scrollTop = 0;

  lastModalOpenTime = Date.now();
  modal.style.display = "flex";
  void modal.offsetHeight;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
window.openShowModal = openShowModal;

// 開啟劇評媒體彈窗
function openReviewsModal(showId, event) {
  if (event) {
    try {
      event.preventDefault();
      event.stopPropagation();
    } catch (e) {}
  }

  const show = findProduction(showId);
  if (!show) return;

  const modal = document.getElementById("reviews-modal");
  const modalBody = document.getElementById("reviews-modal-body");
  if (!modal || !modalBody) return;

  let contentHtml = "";

  if (show.reviews && show.reviews.length > 0) {
    contentHtml = `
      <div class="mb-4 flex items-center justify-between text-xs text-[#6e5548] bg-[#f8efe3] px-4 py-2.5 rounded-xl border border-[#e8dac5]">
        <span>本劇共收錄 <strong>${show.reviews.length}</strong> 篇各界專文評論、媒體報導與成果典藏</span>
        <span class="text-[#8c1d1d] font-semibold hidden sm:inline-block">點擊即可閱讀全文 ↗</span>
      </div>
      <div class="space-y-4">
        ${show.reviews.map(rev => `
          <article class="p-5 sm:p-6 rounded-2xl bg-white border border-[#e6dfd3] shadow-sm hover:shadow-md hover:border-[#8c1d1d]/50 transition-all cursor-pointer group" onclick="if(!event.target.closest('a') && '${rev.url}'){window.open('${rev.url}', '_blank');}">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="bg-[#8c1d1d]/10 text-[#8c1d1d] font-bold text-xs px-2.5 py-1 rounded-md">
                  ${rev.media || "媒體評論"}
                </span>
                ${rev.tag ? `<span class="bg-[#d96523]/10 text-[#d96523] font-semibold text-[11px] px-2.5 py-0.5 rounded-md border border-[#d96523]/20">${rev.tag}</span>` : ""}
              </div>
              <span class="text-xs text-[#6e5548] font-mono">
                ${rev.date ? `${rev.date} · ` : ""}${rev.author ? `文 / ${rev.author}` : ""}
              </span>
            </div>
            <h4 class="font-serif text-lg sm:text-xl font-bold text-[#23150f] mb-2 leading-snug group-hover:text-[#8c1d1d] transition-colors">
              ${rev.url ? `
                <a href="${rev.url}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-start justify-between gap-2" onclick="event.stopPropagation()">
                  <span>${rev.title}</span>
                  <span class="text-xs text-[#8c1d1d] font-sans font-semibold shrink-0 mt-1">閱讀全文 ↗</span>
                </a>
              ` : rev.title}
            </h4>
            ${rev.quote ? `<p class="text-sm text-[#6e5548] italic bg-[#fcf8f2] p-3.5 rounded-xl border-l-2 border-[#d96523] mb-3.5 leading-relaxed">“${rev.quote}”</p>` : ""}
            ${rev.url ? `
              <div class="pt-3 border-t border-[#f4eee3] flex items-center justify-between">
                <span class="text-xs text-stone-500 font-medium">${rev.media} · 全文評介</span>
                <a href="${rev.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-[#8c1d1d] hover:bg-[#5e1212] px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-sm" onclick="event.stopPropagation()">
                  <span>點擊開啟專文全文 ↗</span>
                </a>
              </div>
            ` : ""}
        `).join("")}
      </div>
      <div class="mt-8 pt-5 border-t border-[#e6dfd3] flex flex-wrap items-center justify-between gap-3 text-xs">
        <button type="button" onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-[#23150f] hover:bg-[#8c1d1d] text-white font-semibold transition-colors shadow-sm cursor-pointer">
          ✕ 關閉劇評視窗
        </button>
        <div class="flex items-center gap-2">
          <button type="button" onclick="openShowModal('${show.id}', event)" class="px-4 py-2.5 rounded-xl border border-[#8c1d1d] text-[#8c1d1d] hover:bg-[#8c1d1d] hover:text-white font-semibold transition-colors cursor-pointer">
            瀏覽《${show.title}》完整介紹 →
          </button>
        </div>
      </div>
    `;
  } else {
    contentHtml = `
      <div class="py-10 px-6 text-center rounded-2xl bg-white border border-[#e6dfd3] shadow-sm">
        <div class="w-14 h-14 bg-[#f8efe3] text-[#8c1d1d] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#e8dac5]">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        </div>
        <span class="inline-block bg-[#8c1d1d]/10 text-[#8c1d1d] text-xs font-bold px-3 py-1 rounded-full mb-3">
          專文評論整理建檔中
        </span>
        <h4 class="font-serif text-xl font-bold text-[#23150f] mb-2">
          《${show.title}》
        </h4>
        <p class="text-sm text-[#6e5548] max-w-md mx-auto leading-relaxed mb-6">
          本劇的各界專文評論、媒體報導與藝術節特寫正由劇團行政團隊整理建檔中，即將陸續更新收錄！
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onclick="openShowModal('${show.id}', event)" class="cursor-pointer text-xs font-medium py-2 px-4 rounded-xl border border-[#b85038] text-[#b85038] hover:bg-[#b85038] hover:text-white transition-colors">
            瀏覽劇目完整介紹
          </button>
          <button type="button" onclick="openVideoModal('${show.id}', event)" class="cursor-pointer text-xs font-medium py-2 px-4 rounded-xl bg-[#d96523] text-white hover:bg-[#b84e12] transition-colors">
            觀看演出影音紀錄
          </button>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="mb-6 pb-4 border-b border-[#e6dfd3]">
      <div class="flex items-center gap-2 text-xs font-semibold text-[#8c1d1d] uppercase tracking-wider mb-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
        <span>Slow Island Theatre Reviews & Press</span>
      </div>
      <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#23150f]">
        ${show.title} · 劇評與媒體報導
      </h3>
      <p class="text-xs text-[#6e5548] mt-1 font-mono">${show.enTitle} (${show.year})</p>
    </div>
    ${contentHtml}
  `;

  // 重置內部滾動區域位置至最頂部
  modalBody.scrollTop = 0;
  if (modal) modal.scrollTop = 0;

  lastModalOpenTime = Date.now();
  modal.style.display = "flex";
  void modal.offsetHeight;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
window.openReviewsModal = openReviewsModal;

// 開啟 YouTube 影片彈窗（支援劇目 ID、標題、embedId 與多種參數傳入模式）
function openVideoModal(param1, param2, param3, param4) {
  let evt = null;
  if (param4 && typeof param4.preventDefault === "function") evt = param4;
  else if (param3 && typeof param3.preventDefault === "function") evt = param3;
  else if (param2 && typeof param2.preventDefault === "function") evt = param2;

  if (evt) {
    try {
      evt.preventDefault();
      evt.stopPropagation();
    } catch (e) {}
  }

  let title = "慢島劇團精彩影音";
  let embedId = null;
  let youtubeUrl = null;

  const show = findProduction(param1);
  if (show) {
    title = show.title;
    embedId = show.youtubeEmbedId || null;
    youtubeUrl = show.youtubeUrl || (embedId ? `https://www.youtube.com/watch?v=${embedId}` : "https://www.youtube.com/@SlowislandArtTheatre");
  } else if (typeof param1 === "string") {
    title = param1;
    embedId = (typeof param2 === "string" && !param2.startsWith("http")) ? param2 : null;
    youtubeUrl = (typeof param3 === "string") ? param3 : (typeof param2 === "string" && param2.startsWith("http") ? param2 : (embedId ? `https://www.youtube.com/watch?v=${embedId}` : null));
  }

  const modal = document.getElementById("video-modal");
  const modalTitle = document.getElementById("video-modal-title");
  const videoContainer = document.getElementById("video-container");
  const directLink = document.getElementById("video-direct-link");

  if (modalTitle) modalTitle.textContent = `${title} - 官方影音紀錄`;
  const targetUrl = youtubeUrl || (embedId ? `https://www.youtube.com/watch?v=${embedId}` : "https://www.youtube.com/@SlowislandArtTheatre");
  if (directLink) {
    directLink.href = targetUrl;
    directLink.target = "_blank";
  }

  if (videoContainer) {
    if (embedId) {
      let startParam = "";
      if (targetUrl && /t=(\d+)/.test(targetUrl)) {
        const match = targetUrl.match(/t=(\d+)/);
        if (match && match[1]) {
          startParam = `&start=${match[1]}`;
        }
      }
      videoContainer.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0${startParam}" 
          title="${title}" 
          class="w-full h-full rounded-xl"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      videoContainer.innerHTML = `
        <div class="p-8 text-center text-stone-300 flex flex-col items-center justify-center h-full">
          <p class="mb-4">本劇精采影音紀錄已上架至官方頻道</p>
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md">
            前往 YouTube 觀看影片 ▶
          </a>
        </div>
      `;
    }
  }

  if (modal) {
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) modalContent.scrollTop = 0;
    modal.scrollTop = 0;
    lastModalOpenTime = Date.now();
    modal.style.display = "flex";
    void modal.offsetHeight;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
window.openVideoModal = openVideoModal;

window.embedYouTubeIframe = function(embedId, title) {
  const videoContainer = document.getElementById("video-container");
  if (videoContainer && embedId) {
    videoContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0&modestbranding=1" 
        title="${title}" 
        class="w-full h-full"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  }
};

// 關閉所有彈窗
function closeAllModals() {
  if (typeof closePhotoViewer === "function") {
    closePhotoViewer();
  }
  if (typeof closeLightbox === "function") {
    closeLightbox();
  }
  const backdrops = document.querySelectorAll(".modal-backdrop");
  backdrops.forEach(b => {
    b.classList.remove("active");
    b.style.display = "none";
  });
  
  // 清理影片以停止音訊播放
  const videoContainer = document.getElementById("video-container");
  if (videoContainer) {
    videoContainer.innerHTML = "";
  }
  
  try {
    document.body.style.overflow = "";
    if (document.body.style.removeProperty) document.body.style.removeProperty("overflow");
    document.documentElement.style.overflow = "";
    if (document.documentElement.style.removeProperty) document.documentElement.style.removeProperty("overflow");
  } catch (e) {}
}
window.closeAllModals = closeAllModals;

// 手機漢堡選單
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 聯絡表單發送反饋 (整合 Formspree: https://formspree.io/f/meaqynoa)
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value : "";
    const message = messageInput ? messageInput.value.trim() : "";

    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "送出洽詢訊息";

    // 建立備用 mailto 連結以防任何例外狀況
    const mailtoUrl = `mailto:slowislandart@gmail.com?subject=${encodeURIComponent("【慢島劇團官網合作洽詢】" + subject)}&body=${encodeURIComponent("姓名: " + name + "\n聯絡信箱: " + email + "\n\n洽詢內容:\n" + message)}`;

    // 按鈕切換為發送中狀態
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center justify-center gap-2">
          <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>發送中，請稍候...</span>
        </span>
      `;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("_subject", `【慢島劇團官網合作洽商】${name} - ${subject}`);

      const response = await fetch("https://formspree.io/f/meaqynoa", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        // 發送成功提示
        const formContainer = document.getElementById("form-feedback-container");
        if (formContainer) {
          formContainer.innerHTML = `
            <div class="p-8 bg-[#eaf0eb] border border-[#38493d]/20 rounded-2xl text-center space-y-3">
              <div class="w-14 h-14 bg-[#38493d] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="font-serif text-xl font-bold text-[#243028]">洽詢訊息已成功送出！</h4>
              <p class="text-sm text-[#38493d] leading-relaxed max-w-md mx-auto">
                感謝您的來信！慢島劇團行政團隊已收到您的邀約與合作需求，我們將會盡速透過您留下的 Email（<strong class="font-mono text-ink">${escapeHtml(email)}</strong>）與您聯繫回覆。
              </p>
              <div class="pt-3">
                <button type="button" onclick="location.reload()" class="px-5 py-2.5 rounded-xl bg-white border border-[#38493d]/30 text-xs font-semibold text-[#243028] hover:bg-[#38493d] hover:text-white transition-all shadow-xs">
                  發送另一則洽詢訊息
                </button>
              </div>
            </div>
          `;
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "發送失敗，伺服器未回應正常狀態");
      }
    } catch (err) {
      console.error("Formspree submission error:", err);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
      const formContainer = document.getElementById("form-feedback-container");
      if (formContainer) {
        const existingNotice = document.getElementById("form-error-notice");
        if (!existingNotice) {
          const errorNotice = document.createElement("div");
          errorNotice.id = "form-error-notice";
          errorNotice.className = "p-4 mt-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800";
          errorNotice.innerHTML = `
            <span>連線暫時發生狀況，您亦可：</span>
            <a href="${mailtoUrl}" class="font-bold underline ml-1 text-terracotta">點此直接以電子郵件寄送洽詢內容 ↗</a>
          `;
          formContainer.appendChild(errorNotice);
        }
      }
    }
  });
}


// ==========================================================================
// 劇照適中尺寸檢視系統 (Photo Viewer Modal System)
// 特色：適中尺寸（不用太大）、每檔精選 10 張、零卡頓、按鍵支援、底部縮圖快速切換
// ==========================================================================
let currentViewerShow = null;
let currentViewerPhotos = [];
let currentViewerIndex = 0;

function openPhotoViewer(showId, index, event) {
  if (event) {
    try {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }

  const show = findProduction(showId) || productions.find(p => p.id === showId || p.id === (showId ? String(showId).replace(/-/g, " ") : ""));
  if (!show) return;

  const photos = (show.gallery && show.gallery.length > 0) ? show.gallery : (show.image ? [show.image] : []);
  if (photos.length === 0) return;

  currentViewerShow = show;
  currentViewerPhotos = photos;
  currentViewerIndex = Math.max(0, Math.min(typeof index === "number" ? index : 0, photos.length - 1));

  const modal = document.getElementById("photo-viewer-modal");
  if (!modal) return;

  // 顯示彈窗
  modal.classList.remove("hidden");
  modal.classList.add("active");
  modal.style.display = "flex";

  try {
    document.body.style.overflow = "hidden";
  } catch (e) {}

  updatePhotoViewer();
}

function updatePhotoViewer() {
  if (!currentViewerShow || currentViewerPhotos.length === 0) return;

  const titleEl = document.getElementById("pv-title");
  const counterEl = document.getElementById("pv-counter");
  const imgEl = document.getElementById("pv-img");
  const stripEl = document.getElementById("pv-thumbs-strip");
  const rawLinkEl = document.getElementById("pv-raw-link");
  const rawLinkMobileEl = document.getElementById("pv-raw-link-mobile");
  const fallbackBox = document.getElementById("pv-fallback-box");
  const fallbackLinkEl = document.getElementById("pv-fallback-direct-link");
  const creditEl = document.getElementById("pv-credit");
  const photoNameEl = document.getElementById("pv-photo-name");

  const total = currentViewerPhotos.length;
  const currentPhoto = currentViewerPhotos[currentViewerIndex];
  const encodedPhoto = encodeURI(currentPhoto);

  if (titleEl) {
    titleEl.textContent = `《${currentViewerShow.title}》`;
  }
  if (counterEl) {
    counterEl.textContent = `${currentViewerIndex + 1} / ${total}`;
  }

  // 設定原圖外開連結（供使用者直接點擊開啟高畫質原檔）
  if (rawLinkEl) {
    rawLinkEl.href = encodedPhoto;
  }
  if (rawLinkMobileEl) {
    rawLinkMobileEl.href = encodedPhoto;
  }
  if (fallbackLinkEl) {
    fallbackLinkEl.href = encodedPhoto;
  }
  if (fallbackBox) {
    fallbackBox.classList.add("hidden");
  }

  // 攝影師署名與照片檔名顯示
  if (creditEl) {
    creditEl.textContent = currentViewerShow.photoCredit ? `📷 攝影：${currentViewerShow.photoCredit}` : "";
  }
  if (photoNameEl) {
    let cleanName = "";
    try {
      const parts = currentPhoto.split("/");
      cleanName = decodeURIComponent(parts[parts.length - 1] || "");
    } catch (e) {
      cleanName = currentPhoto.split("/").pop() || "";
    }
    photoNameEl.textContent = cleanName || `劇照 ${currentViewerIndex + 1}`;
  }

  // 載入主劇照並加上錯誤備援機制
  if (imgEl && currentPhoto) {
    imgEl.style.display = "block";
    imgEl.alt = `${currentViewerShow.title} 劇照 (${currentViewerIndex + 1}/${total})`;

    imgEl.onerror = function() {
      // 容錯機制 1：若 encodedPhoto 載入失敗，嘗試原未編碼字串
      if (imgEl.src !== currentPhoto) {
        imgEl.src = currentPhoto;
      } else if (currentViewerShow.image && imgEl.src !== currentViewerShow.image) {
        // 容錯機制 2：若原字串仍失敗，改以該劇代表主圖做備援
        imgEl.src = encodeURI(currentViewerShow.image);
      } else if (fallbackBox) {
        // 容錯機制 3：若圖片載入仍受阻，展示直接連結區塊
        fallbackBox.classList.remove("hidden");
      }
    };

    imgEl.src = encodedPhoto;
  }

  // 底部縮圖快速導覽列 (10 張縮圖，高亮當前張)
  if (stripEl) {
    stripEl.innerHTML = currentViewerPhotos.map((src, idx) => {
      const isActive = idx === currentViewerIndex;
      const borderClass = isActive
        ? "border-[#8c1d1d] ring-2 ring-[#8c1d1d] scale-105 opacity-100"
        : "border-white/20 opacity-60 hover:opacity-100";
      return `
        <button type="button" onclick="setPhotoIndex(${idx}); event.stopPropagation();" class="shrink-0 w-12 h-9 sm:w-14 sm:h-10 rounded-md overflow-hidden border transition-all cursor-pointer ${borderClass}" title="切換至第 ${idx + 1} 張">
          <img src="${encodeURI(src)}" alt="縮圖 ${idx + 1}" class="w-full h-full object-cover pointer-events-none">
        </button>
      `;
    }).join("");
  }
}

function setPhotoIndex(idx) {
  if (currentViewerPhotos.length === 0) return;
  currentViewerIndex = Math.max(0, Math.min(idx, currentViewerPhotos.length - 1));
  updatePhotoViewer();
}

function nextPhoto() {
  if (currentViewerPhotos.length <= 1) return;
  currentViewerIndex = (currentViewerIndex + 1) % currentViewerPhotos.length;
  updatePhotoViewer();
}

function prevPhoto() {
  if (currentViewerPhotos.length <= 1) return;
  currentViewerIndex = (currentViewerIndex - 1 + currentViewerPhotos.length) % currentViewerPhotos.length;
  updatePhotoViewer();
}

function openShowModalFromViewer() {
  if (!currentViewerShow || !currentViewerShow.id) return;
  const sId = currentViewerShow.id;
  closePhotoViewer();
  if (typeof openShowModal === "function") {
    openShowModal(sId);
  }
}
window.openShowModalFromViewer = openShowModalFromViewer;

function closePhotoViewer() {
  const modal = document.getElementById("photo-viewer-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.add("hidden");
    modal.style.display = "none";
  }

  const showModal = document.getElementById("show-modal");
  const reviewsModal = document.getElementById("reviews-modal");
  const videoModal = document.getElementById("video-modal");
  const isOtherModalActive =
    (showModal && showModal.classList.contains("active")) ||
    (reviewsModal && reviewsModal.classList.contains("active")) ||
    (videoModal && videoModal.classList.contains("active"));

  if (!isOtherModalActive) {
    try {
      document.body.style.overflow = "";
      if (document.body.style.removeProperty) document.body.style.removeProperty("overflow");
      document.documentElement.style.overflow = "";
      if (document.documentElement.style.removeProperty) document.documentElement.style.removeProperty("overflow");
    } catch (e) {}
  }
}

function initPhotoViewerListeners() {
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("photo-viewer-modal");
    if (modal && (modal.classList.contains("active") || modal.style.display === "flex")) {
      if (e.key === "Escape") {
        closePhotoViewer();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      }
    }
  });
}

// 舊函式與外部相容別名
function openLightbox(images, index, title, photoCredit, showId) {
  if (showId) {
    openPhotoViewer(showId, index);
  } else if (images && images.length > 0) {
    currentViewerShow = { title: title ? String(title).replace(/[《》]/g, "") : "劇照精選" };
    currentViewerPhotos = images;
    currentViewerIndex = Math.max(0, Math.min(index || 0, images.length - 1));
    const modal = document.getElementById("photo-viewer-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("active");
      modal.style.display = "flex";
      try { document.body.style.overflow = "hidden"; } catch (e) {}
      updatePhotoViewer();
    }
  }
}

function openLightboxForShow(showId, index) {
  openPhotoViewer(showId, index);
}

function closeLightbox() {
  closePhotoViewer();
}

function nextLightboxPhoto() {
  nextPhoto();
}

function prevLightboxPhoto() {
  prevPhoto();
}

const initLightboxListeners = initPhotoViewerListeners;

window.openPhotoViewer = openPhotoViewer;
window.updatePhotoViewer = updatePhotoViewer;
window.setPhotoIndex = setPhotoIndex;
window.nextPhoto = nextPhoto;
window.prevPhoto = prevPhoto;
window.closePhotoViewer = closePhotoViewer;
window.openShowModalFromViewer = openShowModalFromViewer;
window.initPhotoViewerListeners = initPhotoViewerListeners;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.openLightboxForShow = openLightboxForShow;
window.nextLightboxPhoto = nextLightboxPhoto;
window.prevLightboxPhoto = prevLightboxPhoto;
window.initLightboxListeners = initLightboxListeners;

// ==========================================================================
// 慢島光影 · 舞台精彩劇照精選大輪播系統 (Stage Photo Carousel System)
// ==========================================================================
var currentCarouselIndex = 0;
var carouselAutoplayTimer = null;
var isCarouselPlaying = true;

function initStageCarousel() {
  const container = document.getElementById("stage-carousel-container");
  if (!container || !curatedStagePhotos || curatedStagePhotos.length === 0) return;

  // 1. 渲染底部縮圖導覽條
  const strip = document.getElementById("carousel-thumbnails-strip");
  if (strip) {
    strip.innerHTML = curatedStagePhotos.map((photo, i) => `
      <button type="button" onclick="goToCarouselSlide(${i})" class="carousel-thumb-btn ${i === 0 ? 'active' : ''}" id="carousel-thumb-${i}" title="切換至《${photo.title}》劇照 (${i + 1}/${curatedStagePhotos.length})">
        <img src="${encodeURI(photo.image)}" alt="${photo.title} 縮圖" class="w-full h-full object-cover pointer-events-none" loading="lazy">
      </button>
    `).join("");
  }

  // 2. 初始化顯示第一張
  updateCarouselDisplay(0);

  // 3. 啟動自動輪播
  startCarouselAutoplay();

  // 4. 滑鼠懸停時暫停輪播，移開後自動恢復
  container.addEventListener("mouseenter", () => {
    pauseCarouselAutoplay();
  });
  container.addEventListener("mouseleave", () => {
    if (isCarouselPlaying) {
      startCarouselAutoplay();
    }
  });

  // 5. 行動裝置觸控滑動手勢支援
  let touchStartX = 0;
  let touchStartTime = 0;
  container.addEventListener("touchstart", (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].clientX;
      touchStartTime = Date.now();
    }
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    const diffTime = Date.now() - touchStartTime;

    if (diffTime < 600 && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextCarouselSlide();
      } else {
        prevCarouselSlide();
      }
    }
  }, { passive: true });
}

function updateCarouselDisplay(index) {
  if (!curatedStagePhotos || curatedStagePhotos.length === 0) return;
  currentCarouselIndex = (index + curatedStagePhotos.length) % curatedStagePhotos.length;
  const photo = curatedStagePhotos[currentCarouselIndex];
  if (!photo) return;

  const imgEl = document.getElementById("carousel-main-img");
  const titleEl = document.getElementById("carousel-title");
  const captionEl = document.getElementById("carousel-caption");
  const yearEl = document.getElementById("carousel-year");
  const creditEl = document.getElementById("carousel-credit");
  const badgeEl = document.getElementById("carousel-category-badge");
  const counterEl = document.getElementById("carousel-counter");

  if (imgEl) {
    imgEl.style.opacity = "0.25";
    imgEl.src = encodeURI(photo.image);
    imgEl.alt = `${photo.title} 舞台劇照`;
    setTimeout(() => {
      imgEl.style.opacity = "1";
    }, 60);
  }

  if (titleEl) titleEl.textContent = `《${photo.title}》`;
  if (captionEl) captionEl.textContent = photo.caption;
  if (yearEl) yearEl.textContent = photo.year;
  if (creditEl) creditEl.textContent = `📷 劇照攝影：${photo.photoCredit}`;
  if (badgeEl) badgeEl.textContent = photo.categoryName;
  if (counterEl) counterEl.textContent = `${currentCarouselIndex + 1} / ${curatedStagePhotos.length}`;

  // 更新縮圖高亮，並僅在縮圖容器內水平捲動，絕不干擾網頁全頁垂直視角
  const allThumbs = document.querySelectorAll(".carousel-thumb-btn");
  const strip = document.getElementById("carousel-thumbnails-strip");
  allThumbs.forEach((btn, i) => {
    if (i === currentCarouselIndex) {
      btn.classList.add("active");
      if (strip) {
        try {
          const targetLeft = btn.offsetLeft - (strip.clientWidth / 2) + (btn.clientWidth / 2);
          if (typeof strip.scrollTo === "function") {
            strip.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
          } else {
            strip.scrollLeft = Math.max(0, targetLeft);
          }
        } catch (e) {}
      }
    } else {
      btn.classList.remove("active");
    }
  });
}

function nextCarouselSlide() {
  updateCarouselDisplay(currentCarouselIndex + 1);
}

function prevCarouselSlide() {
  updateCarouselDisplay(currentCarouselIndex - 1);
}

function goToCarouselSlide(index) {
  updateCarouselDisplay(index);
}

function startCarouselAutoplay() {
  if (typeof clearInterval === "function") clearInterval(carouselAutoplayTimer);
  if (typeof setInterval === "function") {
    carouselAutoplayTimer = setInterval(() => {
      nextCarouselSlide();
    }, 4000);
  }
}

function pauseCarouselAutoplay() {
  if (typeof clearInterval === "function") clearInterval(carouselAutoplayTimer);
}

function toggleCarouselAutoplay() {
  isCarouselPlaying = !isCarouselPlaying;
  const btnIcon = document.getElementById("carousel-play-icon");
  const statusDot = document.getElementById("carousel-status-dot");

  if (isCarouselPlaying) {
    startCarouselAutoplay();
    if (btnIcon) btnIcon.textContent = "⏸ 暫停輪播";
    if (statusDot) {
      statusDot.classList.remove("bg-stone-500");
      statusDot.classList.add("bg-emerald-400", "animate-pulse");
      statusDot.title = "自動輪播中";
    }
  } else {
    pauseCarouselAutoplay();
    if (btnIcon) btnIcon.textContent = "▶ 恢復輪播";
    if (statusDot) {
      statusDot.classList.remove("bg-emerald-400", "animate-pulse");
      statusDot.classList.add("bg-stone-500");
      statusDot.title = "已暫停輪播";
    }
  }
}

// 統一劇照展開/收合處理
function toggleShowGallery(showId, event) {
  if (event) {
    try {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    } catch (e) {}
  }
  const safeId = showId ? String(showId).replace(/\s+/g, "-") : "";
  const cardEl = document.getElementById("card-gallery-" + safeId) || document.getElementById("card-gallery-" + showId);
  if (cardEl) {
    const label = document.getElementById("toggle-gallery-label-" + safeId) || document.getElementById("toggle-gallery-label-" + showId);
    const isHidden = cardEl.classList.contains("hidden");
    if (isHidden) {
      cardEl.classList.remove("hidden");
      if (label) label.textContent = "收起劇照 ▲";
    } else {
      cardEl.classList.add("hidden");
      if (label) label.textContent = "展開劇照 ▼";
    }
    return;
  }

  const extra = document.getElementById(`extra-gallery-${showId}`);
  const btn = document.getElementById(`toggle-gallery-btn-${showId}`);
  const icon = document.getElementById(`toggle-gallery-icon-${showId}`);
  if (extra && btn) {
    const isHidden = extra.classList.contains("hidden");
    if (isHidden) {
      extra.classList.remove("hidden");
      btn.querySelector("span").textContent = "收合部分劇照";
      if (icon) icon.classList.add("rotate-180");
    } else {
      extra.classList.add("hidden");
      const show = findProduction(showId);
      const total = show && show.gallery ? show.gallery.length : 0;
      const remaining = total > 15 ? total - 15 : 0;
      btn.querySelector("span").textContent = `展開查看全部 ${total} 張劇照（還有 ${remaining} 張）`;
      if (icon) icon.classList.remove("rotate-180");
    }
  }
}

// 相容性函式別名
function renderHomepageGallery() {
  initStageCarousel();
}
function initHomepageGalleryFilters() {}
function openHomepageLightbox() {}

window.initStageCarousel = initStageCarousel;
window.nextCarouselSlide = nextCarouselSlide;
window.prevCarouselSlide = prevCarouselSlide;
window.goToCarouselSlide = goToCarouselSlide;
window.toggleCarouselAutoplay = toggleCarouselAutoplay;
window.renderHomepageGallery = renderHomepageGallery;
window.initHomepageGalleryFilters = initHomepageGalleryFilters;
window.openHomepageLightbox = openHomepageLightbox;
window.toggleShowGallery = toggleShowGallery;

// ==========================================================================
// 影音專區渲染與篩選系統 (Media Video Archive System)
// ==========================================================================
function renderMediaVideos(filter = "all") {
  const container = document.getElementById("media-video-grid");
  if (!container) return;

  const filtered = filter === "all"
    ? mediaVideos
    : mediaVideos.filter(v => v.category === filter);

  container.innerHTML = filtered.map((video) => {
    const badgeClass = video.category === "migration" ? "badge-migration" :
                       video.category === "social" ? "badge-social" :
                       video.category === "children" ? "badge-children" : 
                       video.category === "site-specific" ? "badge-sitespecific" : "bg-[#8c1d1d]";

    return `
      <div class="bg-[#1e1915]/80 hover:bg-[#251e18] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/60 transition-all duration-300 flex flex-col group shadow-lg hover:shadow-2xl">
        <!-- 影片封面與播放按鈕：點擊直連 YouTube 官方影片頁面播放 -->
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="relative aspect-[16/9] bg-stone-900 overflow-hidden block cursor-pointer group/thumb" title="前往 YouTube 觀看《${video.title}》（新分頁開啟）">
          <img src="${video.image}" alt="${video.title}" loading="lazy" class="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          
          <!-- 中央紅色播放鍵 -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 group-hover/thumb:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 transition-all duration-300 ring-4 ring-red-600/30 group-hover/thumb:ring-red-600/60">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>

          <!-- 左上角分類標籤 -->
          <div class="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
            <span class="${badgeClass} text-[11px] font-semibold text-white px-2.5 py-0.5 rounded-full shadow-md">
              ${video.categoryName}
            </span>
            <span class="bg-black/70 backdrop-blur-sm text-stone-200 text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
              ${video.tag}
            </span>
          </div>

          <!-- 右下角標示 -->
          <span class="absolute bottom-2.5 right-3 bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube ↗</span>
          </span>
        </a>

        <!-- 卡片資訊與直達按鈕 -->
        <div class="p-5 flex flex-col flex-grow justify-between bg-[#191512]/60">
          <div>
            <div class="text-[11px] text-amber-300/90 font-mono mb-1 font-semibold">${video.year}</div>
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="block group/title">
              <h3 class="font-serif text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover/title:text-amber-300 transition-colors">
                ${video.title} ↗
              </h3>
            </a>
            <p class="text-xs text-stone-300 leading-relaxed line-clamp-2 mb-4">
              ${video.caption}
            </p>
          </div>

          <div class="pt-3 border-t border-white/10">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md text-xs sm:text-sm hover:scale-[1.01]" title="前往 YouTube 觀看《${video.title}》（新分頁開啟）">
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>前往 YouTube 觀看官方影音 ↗</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}
window.renderMediaVideos = renderMediaVideos;

function initMediaVideoFilters() {
  const filterBtns = document.querySelectorAll(".media-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-red-600", "text-white", "shadow-md");
        b.classList.add("bg-stone-900/80", "text-stone-300");
      });
      btn.classList.add("active", "bg-red-600", "text-white", "shadow-md");
      btn.classList.remove("bg-stone-900/80", "text-stone-300");
      const filter = (btn.getAttribute && btn.getAttribute("data-filter")) || (btn.dataset && btn.dataset.filter) || "all";
      renderMediaVideos(filter);
    });
  });
}
window.initMediaVideoFilters = initMediaVideoFilters;

// ==================== 全站劇場沉浸背景控制 (Theatrical Stage Backdrop) ====================
const stageBackdropOptions = [
  {
    name: "天使村",
    desc: "天使村共饗、熱氣與生活煙火氣",
    src: "images/唐健哲攝影02023拷貝.jpg"
  },
  {
    name: "大舞台全景光影",
    desc: "磅礴舞台燈光與空間張力",
    src: "images/_唐健哲攝影9506拷貝.jpg"
  },
  {
    name: "楊定國之夢",
    desc: "大象意象與歷史夢境",
    src: "images/唐健哲攝影02979拷貝.jpg"
  },
  {
    name: "香茅炊煙特寫",
    desc: "南薑香茅鍋釜與舞台炊煙",
    src: "images/唐健哲攝影03271拷貝.jpg"
  }
];

let currentBackdropIndex = 0;

function changeStageBackdrop(index) {
  if (index < 0 || index >= stageBackdropOptions.length) return;
  currentBackdropIndex = index;
  const layer = document.getElementById("backdrop-img-layer");
  if (layer) {
    layer.style.opacity = "0.35";
    setTimeout(() => {
      layer.style.backgroundImage = `url('${stageBackdropOptions[index].src}')`;
      layer.style.opacity = "1";
    }, 200);
  }
  
  // 更新縮圖按鈕高亮邊框
  const btns = document.querySelectorAll(".backdrop-thumb-btn");
  btns.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active-backdrop", "border-amber-500");
      btn.classList.remove("border-transparent");
    } else {
      btn.classList.remove("active-backdrop", "border-amber-500");
      btn.classList.add("border-transparent");
    }
  });

  try {
    localStorage.setItem("slowIsland_stageBackdropIndex", index);
  } catch (e) {}
}
window.changeStageBackdrop = changeStageBackdrop;

function updateBackdropOpacity(val) {
  const wash = document.getElementById("backdrop-wash-layer");
  const label = document.getElementById("backdrop-opacity-label");
  if (label) label.textContent = val + "%";
  if (wash) {
    const num = parseFloat(val);
    const alpha = Math.max(0.15, (1 - (num / 100) * 0.95)).toFixed(2);
    wash.style.opacity = alpha;
  }
  try {
    localStorage.setItem("slowIsland_stageBackdropVal", val);
  } catch (e) {}
}
window.updateBackdropOpacity = updateBackdropOpacity;

function toggleBackdropMenu() {
  const menu = document.getElementById("backdrop-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}
window.toggleBackdropMenu = toggleBackdropMenu;

function initStageBackdrop() {
  try {
    const savedIdx = localStorage.getItem("slowIsland_stageBackdropIndex");
    if (savedIdx !== null) {
      changeStageBackdrop(parseInt(savedIdx, 10));
    }
    const savedVal = localStorage.getItem("slowIsland_stageBackdropVal");
    const slider = document.getElementById("backdrop-opacity-slider");
    if (savedVal !== null) {
      if (slider) slider.value = savedVal;
      updateBackdropOpacity(savedVal);
    } else {
      if (slider) slider.value = 35;
      updateBackdropOpacity(35);
    }
  } catch (e) {}
}
window.initStageBackdrop = initStageBackdrop;


