// ============ Articles dataset (bilingual) ============
// featured: shown in Selected Work. All appear in the Writing list.
const ARTICLES = [
  { date:"2026.07", url:"https://mp.weixin.qq.com/s/4k0hjKCfp2JVGQ-WQ3YfJg?scene=1",
    zh:{tag:"中文话剧 · 剧评", t:"话剧《我们成为的她》评论", d:"评梁咏琪主演的话剧《我们成为的她》——改编自韩国现象级小说《82年生的金智英》，谈舞台转译与女性叙事。"},
    en:{tag:"Theatre · Review", t:"The Woman We Become — a stage review", d:"On the play starring Gigi Leung, adapted from the phenomenal Korean novel Kim Ji-young, Born 1982 — stage translation and female narrative."},
    pub:{zh:"剧焦", en:"Jujiao (Drama Focus)"},
    kind:"drama", featured:true },
  { date:"2026.07", url:"https://www.lifeweek.com.cn/article/269970",
    zh:{tag:"香港电影 · 影评", t:"香港电影《爸爸》评论", d:"评这部香港电影，谈家庭创伤、伦理困境与本土叙事。"},
    en:{tag:"Hong Kong Film · Review", t:"Papa — a critical review", d:"On the Hong Kong film — family trauma, moral dilemma and local storytelling."},
    kind:"film", featured:true },
  { date:"2026.06", url:"https://www.lifeweek.com.cn/article/269488",
    zh:{tag:"韩国电影 · 影评", t:"韩国电影《与王生活的男人》评论", d:"从类型与作者性切入，评析这部韩国新片的叙事野心与完成度。"},
    en:{tag:"Korean Film · Review", t:"The King's Warden — a critical review", d:"Reading the Korean film through genre and authorship: its narrative ambition and execution."},
    kind:"film", featured:false },
  { date:"2026.05", url:"https://www.lifeweek.com.cn/article/266745",
    zh:{tag:"韩国电影 · 影评", t:"韩国电影《世界的主人》评论", d:"关于女性成长、创伤后遗与当代韩国电影语法的一次细读。"},
    en:{tag:"Korean Film · Review", t:"The World of Love — a critical review", d:"A close reading of emotion, genre and the grammar of contemporary Korean cinema."},
    kind:"film", featured:true },
  { date:"2026.04", url:"https://www.lifeweek.com.cn/article/265119",
    zh:{tag:"迪士尼动画 · 评论", t:"迪士尼动画《河狸变身计划》评论", d:"从动画工艺与叙事策略，看迪士尼新作的野心与局限。"},
    en:{tag:"Disney Animation · Commentary", t:"On the Disney animation Hoppers", d:"Craft and storytelling strategy in Disney's latest — ambition and its limits."},
    kind:"film", featured:false },
  { date:"2026.04", url:"https://www.lifeweek.com.cn/article/265994",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《真相捕捉》第三季评论", d:"评这部英国剧集的第三季，谈监控、深伪技术与真相的政治。"},
    en:{tag:"British Series · Review", t:"The Capture, Season 3", d:"On the British series' third season — surveillance, deepfakes and the politics of truth."},
    kind:"film", featured:false },
  { date:"2026.03", url:"https://www.lifeweek.com.cn/article/264044",
    zh:{tag:"美国电影 · 特写", t:"《至尊马蒂》评论与提莫西·查拉梅的人物特写", d:"以一部美国电影为切口，解读查拉梅的表演与明星形象建构。"},
    en:{tag:"American Film · Feature", t:"Marty Supreme & Timothée Chalamet", d:"A feature on the American film and on Chalamet's performance and stardom."},
    kind:"film", featured:false },
  { date:"2026.03", url:"https://www.lifeweek.com.cn/article/263755",
    zh:{tag:"英国舞台剧 · 剧评", t:"NT Live《非穷尽列举》评论", d:"评英国国家剧院现场影像作品，谈舞台影像的评论视角。"},
    en:{tag:"British Theatre · Review", t:"National Theatre Live: Inter Alia", d:"A review of the NT Live production — a critical lens on theatre-on-screen."},
    kind:"drama", featured:true },
  { date:"2026.03", url:"https://www.lifeweek.com.cn/article/263616",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《强制窃贼》评论", d:"评这部Prime英国剧集，谈犯罪类型与叙事张力。"},
    en:{tag:"British Series · Review", t:"Steal (Prime series)", d:"On the Prime British series — the heist genre and narrative tension."},
    kind:"film", featured:false },
  { date:"2026.02", url:"https://www.lifeweek.com.cn/article/263154",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《夜班经理》第二季评论", d:"评这部英国剧集的续作，谈改编、谍战类型与角色回归。"},
    en:{tag:"British Series · Review", t:"The Night Manager, Season 2", d:"On the British series' return — adaptation, the spy genre and character."},
    featured:false },
  { date:"2026.01", url:"https://www.lifeweek.com.cn/article/261230",
    zh:{tag:"Disney+ 韩剧 · 剧评", t:"Disney+ 韩剧《韩国制造》评论", d:"评这部 Disney+ 韩剧，谈平台策略与韩国叙事的碰撞。"},
    en:{tag:"Disney+ K-Drama · Review", t:"Made in Korea (Disney+ series)", d:"On the Disney+ Korean series — platform strategy meets Korean storytelling."},
    featured:false },
  { date:"2026.01", url:"https://www.lifeweek.com.cn/article/259579",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《双雌大盗》评论", d:"评这部英国剧集，谈女性犯罪二人组与喜剧节奏。"},
    en:{tag:"British Series · Review", t:"Frauds — a critical review", d:"On the British series — its female con-artist duo and comic timing."},
    kind:"film", featured:false },
  { date:"2025.12", url:"https://www.lifeweek.com.cn/article/257634",
    zh:{tag:"Disney+ 韩剧 · 剧评", t:"Disney+ 韩剧《操控游戏》评论", d:"评这部 Disney+ 韩剧，谈剧作机关与类型野心。"},
    en:{tag:"Disney+ K-Drama · Review", t:"The Manipulated (Disney+ series)", d:"A review of the Disney+ Korean series — plotting and genre ambition."},
    featured:false },
  { date:"2025.12", url:"https://www.lifeweek.com.cn/article/256556",
    zh:{tag:"迪士尼动画 · 深度", t:"《疯狂动物城2》深度解析", d:"逐层拆解迪士尼这部动画续作的世界观、隐喻与产业意义。"},
    en:{tag:"Disney Animation · Deep-dive", t:"Zootopia 2 — an in-depth breakdown", d:"Unpacking the Disney sequel's worldbuilding, metaphors and industry meaning."},
    kind:"film", featured:true },
  { date:"2025.11", url:"https://www.lifeweek.com.cn/article/255931",
    zh:{tag:"美国剧集 · 剧评", t:"美剧《大楼里只有谋杀》第五季评论", d:"评这部 Hulu 剧集的第五季，谈推理喜剧的延续与自我更新。"},
    en:{tag:"Hulu Series · Review", t:"Only Murders in the Building, Season 5", d:"On the Hulu series' fifth season — the cozy-mystery comedy's continuation and renewal."},
    kind:"film", featured:false },
  { date:"2025.10", url:"https://www.lifeweek.com.cn/article/263928",
    zh:{tag:"奥斯卡 · 深度", t:"奥斯卡影片《一战再战》深度分析", d:"深度解读这部奥斯卡获奖美国电影的形式、主题与获奖语境。"},
    en:{tag:"Oscar Winner · Analysis", t:"One Battle After Another — an in-depth analysis", d:"A deep analysis of the Oscar-winning American film: form, theme and context."},
    kind:"film", featured:true },
  { date:"2025.10", url:"https://www.lifeweek.com.cn/article/254453",
    zh:{tag:"日本动画 · 评论", t:"日本动画《小城日常》评论", d:"评这部日本动画剧集，谈日常喜剧与小城生活的质感。"},
    en:{tag:"Japanese Animation · Commentary", t:"City the Animation", d:"On the Japanese animated series — everyday comedy and the texture of small-town life."},
    kind:"film", featured:false },
  { date:"2025.09", url:"https://www.lifeweek.com.cn/article/253746",
    zh:{tag:"香港电影 · 影评", t:"香港电影《看我今天怎么说》评论", d:"评这部香港电影，谈本土语境、聋人题材与叙事伦理。"},
    en:{tag:"Hong Kong Film · Review", t:"The Way We Talk — a critical review", d:"On the Hong Kong film — local context, deaf subject matter and narrative ethics."},
    featured:false },
  { date:"2025.08", url:"https://www.lifeweek.com.cn/article/253076",
    zh:{tag:"日本电影 · 影评", t:"日本电影《初吻》评论", d:"评这部日本电影，谈情感设定与类型语法。"},
    en:{tag:"Japanese Film · Review", t:"1st Kiss — a critical review", d:"A review of the Japanese film — its emotional premise and genre grammar."},
    featured:false },
  { date:"2025.08", url:"https://www.lifeweek.com.cn/article/252183",
    zh:{tag:"美国动画剧 · 回顾", t:"《瑞克和莫蒂》八季回顾", d:"回望这部美国热门动画剧集横跨八季的演变与文化位置。"},
    en:{tag:"US Animated Series · Retrospective", t:"Rick and Morty across eight seasons", d:"A retrospective on the hit animated series' evolution and cultural place."},
    featured:false },
  { date:"2025.07", url:"https://www.lifeweek.com.cn/article/250360",
    zh:{tag:"美国剧集 · 影评", t:"美剧《匹兹堡医护前线》评论", d:"评这部美国高口碑剧集，谈实时叙事与职业剧的当代形态。"},
    en:{tag:"US Series · Review", t:"The Pitt — a critical review", d:"On the hit American series — real-time storytelling and the modern procedural."},
    featured:true },
  { date:"2025.07", url:"https://www.lifeweek.com.cn/article/251812",
    zh:{tag:"华语电影 · 评论", t:"姜文电影《你行！你上！》批评文章", d:"以批评视角进入姜文新作，谈作者风格与话语姿态。"},
    en:{tag:"Chinese Film · Essay", t:"On Jiang Wen's You Are the Best", d:"A critical essay on Jiang Wen's film — authorial style and rhetorical stance."},
    featured:false },
  { date:"2025.07", url:"https://www.lifeweek.com.cn/article/251647",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《悬案解码》第三季评论", d:"评这部Netflix英国剧集的第三季，谈悬案叙事与角色深度。"},
    en:{tag:"Netflix Series · Review", t:"Dept. Q, Season 3", d:"On the Netflix British series' third season — cold-case storytelling and character depth."},
    kind:"film", featured:false },
  { date:"2025.06", url:"https://www.lifeweek.com.cn/article/247603",
    zh:{tag:"迪士尼电影 · 评论", t:"迪士尼电影《星际宝贝史迪奇》评论", d:"评这部迪士尼真人改编，谈经典 IP 的翻拍策略与情感内核。"},
    en:{tag:"Disney Film · Commentary", t:"Lilo & Stitch", d:"On the Disney live-action remake — reboot strategy and the emotional core of a classic IP."},
    kind:"film", featured:false },
  { date:"2025.05", url:"https://www.lifeweek.com.cn/article/246588",
    zh:{tag:"日本动画 · 回顾", t:"《攻壳机动队》三十周年回顾", d:"纪念这部动画的三十周年，重估它的美学遗产与思想影响。"},
    en:{tag:"Japanese Animation · Retrospective", t:"Ghost in the Shell at 30", d:"A retrospective on the animated film's 30th anniversary — aesthetic legacy and ideas."},
    kind:"film", featured:true },
  { date:"2025.04", url:"https://www.lifeweek.com.cn/article/245602",
    zh:{tag:"日本电影 · 评论", t:"日本电影《黎明的一切》评论文章", d:"评这部日本电影，谈疾病、共处与温柔的日常。"},
    en:{tag:"Japanese Film · Essay", t:"All the Long Nights", d:"A critical essay on the Japanese film — illness, coexistence and quiet everyday tenderness."},
    kind:"film", featured:false },
  { date:"2025.04", url:"https://www.lifeweek.com.cn/article/245426",
    zh:{tag:"英国剧集 · 剧评", t:"英剧《道格拉斯被取消了》评论", d:"评这部英国剧集，谈取消文化、媒体伦理与喜剧锋芒。"},
    en:{tag:"British Series · Review", t:"Douglas Is Cancelled", d:"On the British series — cancel culture, media ethics and comic edge."},
    kind:"film", featured:false },
  { date:"2025.03", url:"https://www.lifeweek.com.cn/article/243373",
    zh:{tag:"迪士尼电影 · 评论", t:"迪士尼电影《白雪公主》批评文章", d:"以批评视角进入这部迪士尼真人改编，谈经典重述的争议与得失。"},
    en:{tag:"Disney Film · Essay", t:"Snow White", d:"A critical essay on the Disney live-action remake — the controversy and stakes of retelling a classic."},
    kind:"film", featured:false },

];

// ============ Movieview magazine scans (print reviews) ============
const MAGAZINE = [
  { img:"/assets/magazine/mv-2026-01-all-her-fault.jpg",
    zh:{show:"《都是她的错》", plat:"Peacock 剧集", issue:"《看电影》2026 年第 1 期"},
    en:{show:"All Her Fault", plat:"Peacock series", issue:"Movieview, Issue 1, 2026"} },
  { img:"/assets/magazine/mv-2025-12-task.jpg",
    zh:{show:"《特别小组》", plat:"HBO剧集", issue:"《看电影》2025 年第 12 期"},
    en:{show:"Task", plat:"HBO series", issue:"Movieview, Issue 12, 2025"} },
  { img:"/assets/magazine/mv-2025-11-monster.jpg",
    zh:{show:"《怪物：艾德·盖恩的故事》", plat:"Netflix 剧集", issue:"《看电影》2025 年第 11 期"},
    en:{show:"Monster: The Ed Gein Story", plat:"Netflix series", issue:"Movieview, Issue 11, 2025"} },
  { img:"/assets/magazine/mv-2025-10-wednesday.jpg",
    zh:{show:"《星期三》第二季", plat:"Netflix 剧集", issue:"《看电影》2025 年第 10 期"},
    en:{show:"Wednesday, Season 2", plat:"Netflix series", issue:"Movieview, Issue 10, 2025"} },
  { img:"/assets/magazine/mv-2025-09-our-unwritten-seoul.jpg",
    zh:{show:"《未知的首尔》", plat:"韩国剧集", issue:"《看电影》2025 年第 9 期"},
    en:{show:"Our Unwritten Seoul", plat:"Korean series", issue:"Movieview, Issue 9, 2025"} },
  { img:"/assets/magazine/mv-2025-08-world-between-us.jpg",
    zh:{show:"《我们与恶的距离2》", plat:"台湾剧集", issue:"《看电影》2025 年第 8 期"},
    en:{show:"The World Between Us: After the Flames", plat:"Taiwanese series", issue:"Movieview, Issue 8, 2025"} },
  { img:"/assets/magazine/mv-2025-07-andor.jpg",
    zh:{show:"《安多》", plat:"Disney+ 剧集", issue:"《看电影》2025 年第 7 期"},
    en:{show:"Andor", plat:"Disney+ series", issue:"Movieview, Issue 7, 2025"} },
  { img:"/assets/magazine/mv-2025-06-black-mirror.jpg",
    zh:{show:"《黑镜》第七季", plat:"Netflix 剧集", issue:"《看电影》2025 年第 6 期"},
    en:{show:"Black Mirror, Season 7", plat:"Netflix series", issue:"Movieview, Issue 6, 2025"} },
  { img:"/assets/magazine/mv-2025-05-the-hot-spot.jpg",
    zh:{show:"《热点》", plat:"日本剧集", issue:"《看电影》2025 年第 5 期"},
    en:{show:"The Hot Spot", plat:"Japanese series", issue:"Movieview, Issue 5, 2025"} }
];

// ============ i18n dictionary ============
const I18N = {
  zh: {
    "brand.name":"杨祖占","brand.en":"Julian Yang",
    "nav.about":"简介","nav.focus":"研究方向","nav.work":"代表作品","nav.writing":"文章","nav.print":"纸媒","nav.podcast":"播客","nav.collab":"合作",
    "hero.eyebrow":"影视 · 戏剧评论 / 播客制作 / 文化记者",
    "hero.title":"在银幕与<br>舞台之间，<br>看见更大的世界。",
    "hero.lede":"我是杨祖占（Julian Yang），常驻上海的自由撰稿人与影视戏剧评论人。为《三联生活周刊》《看电影》撰写长文，主理播客「袭击电影院」，长期关注东亚电影、精品动画、热门剧集与流行文化。",
    "hero.cta1":"看代表作品","hero.cta2":"谈合作",
    "hero.stat1.k":"发表长文","hero.stat1.v":"《三联生活周刊》27 篇",
    "hero.stat2.k":"写作语言","hero.stat2.v":"中文 · 英文",
    "hero.stat3.k":"深耕领域","hero.stat3.v":"亚洲电影 · 热门剧集 · 精品动画",
    "about.title":"个人简介",
    "about.p1":"我长期从事影视文化写作，写作横跨影视评论、戏剧评论与文化观察。长期为《三联生活周刊》《看电影》撰写文章，多数达到十万以上阅读量，也负责过电影节报道与统筹。",
    "about.p2":"我关注艺术电影与独立创作，也追踪主流剧集与动画——从韩国、日本、香港的作者电影，到好莱坞奥斯卡话题作、热门剧集与精品动画，再到剧场与高清影像。除了写字，我和另一位电影媒体人共同主理播客「袭击电影院」。",
    "about.p3":"主要以中文写作，英文亦可采访与国际约稿。如果你在找一个能同时驾驭批评深度与大众传播、并能跨语言工作的合作者，我们大概能聊得来。",
    "about.tag1":"影视评论","about.tag2":"戏剧评论","about.tag3":"播客制作","about.tag4":"电影节报道","about.tag5":"跨语言约稿",
    "focus.title":"研究与写作方向",
    "focus.1.t":"东亚作者电影与剧集","focus.1.d":"韩国、日本、华语电影的观察研究，从院线到流媒体的评论追踪。",
    "focus.2.t":"好莱坞与英美剧集","focus.2.d":"奥斯卡话题作、名导新片与英美高口碑剧集的深度评论与解析。",
    "focus.3.t":"动画与视觉叙事","focus.3.d":"迪士尼、皮克斯与日本动画——从《攻壳机动队》到《疯狂动物城2》的美学与产业观察。",
    "focus.4.t":"戏剧与舞台影像","focus.4.d":"剧场作品、文学改编与高清现场影像，关注文本与舞台的转译。",
    "work.title":"代表作品",
    "work.intro":"精选近期具代表性的评论与解析。完整文章见下方「文章」列表。",
    "work.film":"影视评论","work.drama":"戏评",
    "work.readlink":"阅读全文 →",
    "writing.title":"新媒体写作",
    "writing.intro":"按时间排列的文章流，主要发表于《三联生活周刊》官方微信公众号，也包括《剧焦》等媒体稿件。此列表持续更新。",
    "writing.pub":"三联生活周刊",
    "print.title":"杂志专栏",
    "print.intro":"《看电影》（Movieview）是国内领先的影评纸本杂志。作为“剧集贩”专栏的固定撰稿人，我每月为全球新剧撰写评论。以下为杂志数字版各期中发表文章的扫描图（点击可看大图）。",
    "print.hint":"点图看大图",
    "podcast.title":"播客","podcast.name":"袭击电影院 Cinema Attack",
    "podcast.desc":"两个从业多年的电影媒体人（祖占、唐朝）共同发起的一档播客节目。从文字到语言，用声音与对话，碰撞新的火花——聊电影、聊剧集、聊行业。",
    "podcast.apple":"Apple Podcast 收听 →","podcast.xyz":"小宇宙（扫码订阅）","podcast.guest":"邀我做嘉宾",
    "collab.title":"合作方式",
    "collab.1.t":"约稿 / 专栏","collab.1.d":"影视、戏剧、文化类写作；可承接中文、英文选题。",
    "collab.2.t":"播客 / 对谈嘉宾","collab.2.d":"受邀参与节目录制，或就影视戏剧议题做深度对谈。",
    "collab.3.t":"电影节 / 活动","collab.3.d":"电影节现场报道、场刊撰写、映后主持与统筹协调。",
    "collab.4.t":"翻译 / 跨语言协作","collab.4.d":"中英之间的采访、写作与内容适配，服务国际约稿。",
    "contact.title":"想一起做点什么？","contact.lede":"编辑约稿、嘉宾邀约、活动合作，都欢迎来信。",
    "contact.email":"写信给我 · youngformovie@163.com","contact.note":"常驻上海 · 可远程与跨时区协作",
    "qr.xhs.n":"小红书 · 杨祖占","qr.xhs.d":"小红书扫码找到我",
    "qr.wx.n":"公众号 · 祖占电影手册","qr.wx.d":"微信扫码关注",
    "qr.xyz.n":"小宇宙 · 袭击电影院","qr.xyz.d":"扫码订阅播客",
    "footer.copy":"© 2026 杨祖占 Julian Yang · 影视戏剧评论 / 媒体写作","footer.update":"本页持续更新 · Last updated 2026.07"
  },
  en: {
    "brand.name":"Julian Yang","brand.en":"杨祖占",
    "nav.about":"About","nav.focus":"Focus","nav.work":"Selected Work","nav.writing":"Writing","nav.print":"Print","nav.podcast":"Podcast","nav.collab":"Collaborate",
    "hero.eyebrow":"Film & Theatre Critic / Podcast Producer / Culture Journalist",
    "hero.title":"Writing and listening,<br>between screen, stage and text.",
    "hero.lede":"I'm Julian Yang (杨祖占), a Shanghai-based freelance writer and critic of film and theatre. I write long-form pieces for Sanlian Lifeweek, co-host the podcast Cinema Attack, and move between East Asia, Europe and Hollywood. This page tells you, in one click, who I am, what I write, and what we can build together.",
    "hero.cta1":"See selected work","hero.cta2":"Let's collaborate",
    "hero.stat1.k":"Long-form pieces","hero.stat1.v":"27 in Sanlian Lifeweek",
    "hero.stat2.k":"Working languages","hero.stat2.v":"Chinese · English",
    "hero.stat3.k":"Areas of focus","hero.stat3.v":"East Asia · Europe · Hollywood",
    "about.title":"About",
    "about.p1":"With a background in film and media studies, my writing spans film criticism, theatre reviews and cultural commentary. Over recent years I've published a dozen long-form pieces in Sanlian Lifeweek — several passing 100,000 reads — and coordinated film-festival coverage.",
    "about.p2":"I follow arthouse and independent work, and track mainstream series and animation too — from Korean, Japanese and Hong Kong auteur films to Oscar contenders, Disney+ K-dramas, Disney animation, and British theatre via NT Live. Beyond writing, I co-host the podcast Cinema Attack with a fellow film journalist.",
    "about.p3":"Chinese is my mother tongue; I work in English for interviews, writing and international commissions. If you're looking for a collaborator who pairs critical depth with a feel for how things travel — across languages — we'll likely get along.",
    "about.tag1":"Film criticism","about.tag2":"Theatre reviews","about.tag3":"Podcast production","about.tag4":"Festival coverage","about.tag5":"Cross-language commissions",
    "focus.title":"Research & Writing Focus",
    "focus.1.t":"East Asian Film & Series","focus.1.d":"Authorship and industry currents in Korean, Japanese and Hong Kong film and TV, tracked from cinema to Disney+.",
    "focus.2.t":"Hollywood & Anglo-American TV","focus.2.d":"In-depth reviews of Oscar contenders, name-director releases and acclaimed British and American series.",
    "focus.3.t":"Animation & Visual Storytelling","focus.3.d":"Disney, Pixar and Japanese animation — from Ghost in the Shell to Zootopia 2, aesthetics and industry.",
    "focus.4.t":"Theatre & Stage-on-Screen","focus.4.d":"Stage productions, literary adaptation and NT Live, attentive to how text becomes stage.",
    "work.title":"Selected Work",
    "work.intro":"A selection of recent, representative reviews and analyses. See the full list under Writing below.",
    "work.film":"Film & TV","work.drama":"Theatre",
    "work.readlink":"Read full piece →",
    "writing.title":"Writing",
    "writing.intro":"A chronological stream of pieces, mostly long-form for Sanlian Lifeweek. Updated over time.",
    "writing.pub":"Sanlian Lifeweek",
    "print.title":"Print Reviews · Movieview Column",
    "print.intro":"Movieview is a leading print film magazine in China. As a regular contributor to its review column, I write monthly critical pieces on new global series. Below are scans of my articles from various issues of the magazine's digital edition (click to enlarge).",
    "print.hint":"Click to enlarge",
    "podcast.title":"Podcast","podcast.name":"Cinema Attack 袭击电影院",
    "podcast.desc":"A podcast started by two longtime film journalists (Zuzhan and Tangchao Sanketang). From text to voice — conversation as a way to strike new sparks: on film, on series, on the industry.",
    "podcast.apple":"Listen on Apple Podcasts →","podcast.xyz":"Xiaoyuzhou (scan to subscribe)","podcast.guest":"Invite me as a guest",
    "collab.title":"Ways to Collaborate",
    "collab.1.t":"Commissions / Columns","collab.1.d":"Long-form and criticism on film, theatre and culture; can take on Chinese or English assignments.",
    "collab.2.t":"Podcast / Guest talks","collab.2.d":"Guesting on shows, or in-depth conversations on film and theatre topics.",
    "collab.3.t":"Festivals / Events","collab.3.d":"On-site festival reporting, catalogue writing, post-screening hosting and coordination.",
    "collab.4.t":"Translation / Cross-language","collab.4.d":"Interviews, writing and content adaptation across Chinese and English for international work.",
    "contact.title":"Want to build something together?","contact.lede":"Commissions, guest invitations and event collaborations are all welcome. I usually reply within one to two working days.",
    "contact.email":"Write to me · youngformovie@163.com","contact.note":"Based in Shanghai · open to remote & cross-timezone work",
    "qr.xhs.n":"Xiaohongshu · Julian Yang","qr.xhs.d":"RED ID 5328275193 · scan to find me",
    "qr.wx.n":"WeChat · Zuzhan's Cinema Notebook","qr.wx.d":"Scan in WeChat to follow",
    "qr.xyz.n":"Xiaoyuzhou · Cinema Attack","qr.xyz.d":"Press & hold / scan to subscribe",
    "footer.copy":"© 2026 Julian Yang 杨祖占 · Film & Theatre Criticism / Media Writing","footer.update":"Continuously updated · Last updated 2026.07"
  }
};

// ============ Render articles ============
function renderArticles(lang){
  const dict = I18N[lang];
  const writingList = document.getElementById("writingList");

  const workCard = (a)=>{
    const c = a[lang];
    return `<article class="work-item">
      <div class="work-item__meta">
        <span class="work-item__tag">${c.tag}</span>
        <span class="work-item__year">${a.date}</span>
      </div>
      <h3 class="work-item__title"><a href="${a.url}" target="_blank" rel="noopener">${c.t}</a></h3>
      <p class="work-item__desc">${c.d}</p>
      <a class="work-item__link" href="${a.url}" target="_blank" rel="noopener">${dict["work.readlink"]}</a>
    </article>`;
  };
  const featured = ARTICLES.filter(a=>a.featured);
  const filmEl = document.getElementById("workListFilm");
  const dramaEl = document.getElementById("workListDrama");
  if(filmEl) filmEl.innerHTML = featured.filter(a=>a.kind!=="drama").map(workCard).join("");
  if(dramaEl) dramaEl.innerHTML = featured.filter(a=>a.kind==="drama").map(workCard).join("");

  // Magazine (Movieview) print gallery
  const magGrid = document.getElementById("magGrid");
  if(magGrid){
    magGrid.innerHTML = MAGAZINE.map((m,i)=>{
      const c = m[lang];
      return `<figure class="mag-card" data-mag="${i}" tabindex="0" role="button" aria-label="${c.show} — ${c.issue}">
        <div class="mag-card__img"><img src="${m.img}" alt="${c.show}${lang==='zh'?' 剧评':' review'} — ${c.issue}" loading="lazy"><span class="mag-card__zoom">${dict["print.hint"]}</span></div>
        <figcaption class="mag-card__cap">
          <span class="mag-card__show">${c.show}</span>
          <span class="mag-card__meta">${c.plat} · ${c.issue}</span>
        </figcaption>
      </figure>`;
    }).join("");
  }

  writingList.innerHTML = ARTICLES.map(a=>{
    const c = a[lang];
    const pub = a.pub ? a.pub[lang] : dict["writing.pub"];
    return `<li class="writing-row">
      <a href="${a.url}" target="_blank" rel="noopener">
        <span class="writing-row__date">${a.date}</span>
        <span class="writing-row__title">${c.t}</span>
        <span class="writing-row__pub">${pub}</span>
      </a>
    </li>`;
  }).join("");
}

// ============ Language switching ============
function applyLang(lang){
  const dict = I18N[lang];
  document.documentElement.lang = (lang === "zh") ? "zh" : "en";
  document.body.setAttribute("data-lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-toggle__opt").forEach(o=>{
    o.classList.toggle("is-active", o.getAttribute("data-lang") === lang);
  });
  renderArticles(lang);
}
let currentLang = "zh";
applyLang(currentLang);
document.querySelector("[data-lang-toggle]").addEventListener("click",()=>{
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLang(currentLang);
});

// ============ Theme toggle ============
(function(){
  const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark':'light';
  r.setAttribute('data-theme', d);
  const icon = m => m==='dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  t.innerHTML = icon(d);
  t.addEventListener('click',()=>{
    d = d==='dark'?'light':'dark';
    r.setAttribute('data-theme', d);
    t.innerHTML = icon(d);
  });
})();

// ============ Mobile menu ============
(function(){
  const btn = document.querySelector('[data-menu-toggle]'), nav = document.getElementById('mobileNav');
  btn.addEventListener('click',()=>{
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('is-open'); btn.setAttribute('aria-expanded','false');
  }));
})();

// ============ Header scroll state ============
(function(){
  const h = document.getElementById('header');
  const onScroll = ()=> h.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
})();

// ============ Lightbox (QR + magazine scans) ============
(function(){
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCap');
  const qrMap = {
    xyz:{src:'assets/qr-xyz.jpg', zh:'小宇宙 · 袭击电影院 — 扫码订阅', en:'Xiaoyuzhou · Cinema Attack — scan to subscribe'}
  };
  function open(src, caption){
    img.src = src; img.alt = caption; cap.textContent = caption;
    box.hidden = false; document.body.style.overflow='hidden';
    box.classList.toggle('lightbox--tall', box.dataset.mode==='scan');
  }
  // QR buttons
  document.querySelectorAll('[data-qr-open]').forEach(b=>{
    b.addEventListener('click',()=>{
      const m = qrMap[b.getAttribute('data-qr-open')]; if(!m) return;
      box.dataset.mode='qr';
      open(m.src, m[currentLang]||m.zh);
    });
  });
  // Magazine cards (event delegation, since re-rendered on lang change)
  const magGrid = document.getElementById('magGrid');
  if(magGrid){
    function openMag(el){
      const i = +el.getAttribute('data-mag'); const m = MAGAZINE[i]; if(!m) return;
      const c = m[currentLang]; box.dataset.mode='scan';
      open(m.img, `${c.show} · ${c.plat} — ${c.issue}`);
    }
    magGrid.addEventListener('click', e=>{
      const el = e.target.closest('[data-mag]'); if(el) openMag(el);
    });
    magGrid.addEventListener('keydown', e=>{
      if((e.key==='Enter'||e.key===' ')){ const el=e.target.closest('[data-mag]'); if(el){ e.preventDefault(); openMag(el); } }
    });
  }
  function close(){ box.hidden = true; document.body.style.overflow=''; }
  document.querySelector('[data-qr-close]').addEventListener('click', close);
  box.addEventListener('click', e=>{ if(e.target===box) close(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !box.hidden) close(); });
})();
