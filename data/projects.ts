import { AIProject, ProjectCategory } from '../types';

export const projectCategories: ProjectCategory[] = [
  { id: 'platforms', label: { en: 'AI Product Platforms', zh: 'AI 产品平台' } },
  { id: 'research', label: { en: 'Public Data & Research', zh: '公共数据与研究' } },
  { id: 'education', label: { en: 'Education & Non-profit', zh: '教育与公益' } },
];

export const projects: AIProject[] = [
  {
    id: 'unioffer',
    name: 'UniOffer',
    category: 'platforms',
    links: [{ url: 'https://www.unioffer.ai', displayUrl: 'www.unioffer.ai' }],
    role: 'Founder & CEO',
    status: 'live',
    badges: [{ en: '10 languages', zh: '10 种语言' }],
    description: {
      en: `An AI-native university admissions platform — making the application process transparent, structured, and affordable for every student.

**The problem we solve.** University admissions has long been dominated by information asymmetry and expensive human consulting — quality guidance costs thousands of pounds, the process is opaque, and student stress goes unattended.

**Technology & strengths.** Purpose-built AI agents run the entire journey: an Application Readiness Engine (ARE) that continuously assesses each student's preparedness, an essay studio, an interview question bank, and one-click student profile sites — alongside Cozie, a wellbeing companion fully isolated from application data, because student wellbeing comes before conversion. The platform supports 10 languages.

**Methodology.** We decompose the "black box" of traditional consulting into structured, executable workflows — AI handles what can be standardised; humans keep the judgment calls. We hold ourselves to honest marketing: no admission-rate promises, no manufactured anxiety.

**Social value.** Structured admissions guidance at a fraction of the cost of human consultants — opening it to more families while helping schools cut costs, improve efficiency, and strengthen their admissions reputation; a free tier lets any student start.`,
      zh: `AI 原生的大学申请平台，让申请过程对每个学生透明、有结构、可负担。

**我们解决的问题。** 大学申请长期被信息不对称和高价人工咨询主导——优质指导动辄数千英镑，普通家庭难以负担；流程不透明让学生在焦虑中摸索，心理压力无人接住。

**技术与优势。** 多个真实落地的 AI Agent 贯穿申请全流程：申请就绪引擎（ARE）持续评估每位学生的准备度、文书工作室、面试题库、一键生成学生个人主页；配备与申请数据完全隔离的心理陪伴 Cozie，把学生身心健康放在转化率之前；平台支持 10 种语言，服务全球申请者。

**方法论。** 把传统咨询的"黑箱经验"拆解为结构化、可执行的工作流，AI 负责可标准化的部分，关键判断留给人。我们坚持诚实营销原则——不承诺录取率、不制造焦虑，只呈现可验证的过程价值。

**社会价值。** 以远低于传统人工顾问的价格，把结构化申请指导开放给更广泛的家庭，同时帮助学校降本增效、提升升学口碑；免费层让任何学生都能起步。`,
    },
  },
  {
    id: 'luckq',
    name: 'LuckQ',
    category: 'platforms',
    links: [
      { url: 'https://luckq.ai', displayUrl: 'luckq.ai' },
      { url: 'https://luckq.com.cn', displayUrl: 'luckq.com.cn' },
    ],
    role: 'Founder',
    status: 'live',
    badges: [{ en: 'Global + China', zh: '全球站 + 中国站' }],
    description: {
      en: `A self-discovery assessment and AI coaching platform for luck and personal growth — turning "luck" from unknowable fate into observable, practisable behaviour.

**The problem we solve.** Most people treat luck as destiny — superstition on one side, helplessness on the other. "Fortune-telling" products lean on mystical language and unverifiable claims, deepening anxiety instead of easing it.

**Technology & strengths.** A four-dimension behavioural profile test; a personalisation engine that writes each report from the user's actual answers, trajectory, and own words — no two reports alike, even at the same score; a 240-item deep question bank hardened by two rounds of adversarial review and line-by-line human rewriting; an AI coach with built-in crisis-support guardrails. Two sites — luckq.ai globally, luckq.com.cn in China.

**Methodology.** Grounded in psychology research, "getting luckier" becomes small daily practices — 7-day and 21-day camps with day-by-day check-ins and a closing report. Our content iron rules: no mystical language, checkable citations, no false precision, every claim falsifiable.

**Social value.** Helping people build a quantified understanding of their own luck-related behavioural patterns in scientifically honest language — and handing the agency for change back to the user.`,
      zh: `自我认知测评与 AI 幸运成长教练平台——把"运气"从不可知的宿命，变成可观察、可练习的行为。

**我们解决的问题。** 大多数人把运气归于命运，要么迷信、要么无力。市面上的"测运"产品充斥玄学话术和不可验证的断言，反而加深焦虑。

**技术与优势。** 四个维度的行为剖面测评；个性化报告引擎依据每位用户的真实作答、轨迹和原话生成——同分也不会出现相同的报告；240 题深度题库经过两轮对抗式评审和逐题人工重写；AI 教练全程对话陪伴，并内置危机守护机制。中英双站（luckq.ai / luckq.com.cn）分别服务全球与中国用户。

**方法论。** 以心理学研究为内核，把"变幸运"落成每日可执行的小练习——7 天/21 天训练营、逐日打卡与结营报告。我们给自己立了内容铁律：不用玄学话术、引用可查证、不做虚假精确、所有断言可证伪。

**社会价值。** 用科学边界内的语言，帮助用户建立对自身幸运行为模式的量化认知，把改变的主动权交回用户手里。`,
    },
  },
  {
    id: 'gci',
    name: 'Global Crisis Index',
    category: 'research',
    links: [{ url: 'https://globalcrisisindex.co.uk', displayUrl: 'globalcrisisindex.co.uk' }],
    role: 'Researcher',
    status: 'live',
    badges: [
      { en: '14 languages', zh: '14 种语言' },
      { en: 'Daily automated updates', zh: '每日全自动更新' },
    ],
    description: {
      en: `Global Crisis Index — answering "how dangerous is the world right now" in one calm, consistent probabilistic language.

**The problem we solve.** Information about major global risks is scattered and often reaches the public as emotional, fragmented headlines; there is no continuous, quantified, multilingual public view.

**Technology & strengths.** A fully automated data pipeline with a proprietary attribution algorithm fetches, computes, and publishes on a daily schedule with no manual intervention; the site is published in 14 languages so readers everywhere see the same quantified picture.

**Methodology.** Probabilities from multiple public sources are combined by odds pooling, with the proprietary attribution algorithm optimising the statistical weighting of each source — aggregation, never simple addition, so risk is not overstated; the methodology is open for readers to examine.

**Social value.** A free public-information product that helps people reason about global risk with probabilities instead of emotion.`,
      zh: `全球危机指数——用统一的概率语言，冷静地回答"世界现在有多危险"。

**我们解决的问题。** 重大风险信息散落在各类来源中，公众看到的往往是情绪化、碎片化的标题；缺少一个持续、量化、多语言的公共视角。

**技术与优势。** 全自动数据管线搭配自研归因算法，每日定时抓取、计算并发布，无需人工干预；官网覆盖 14 种语言，让不同语言的读者获得同一份量化视角。

**方法论。** 采用概率聚合（odds pooling）方法整合多个公开概率来源，并以自研归因算法优化各来源的统计概率权重——聚合而非简单相加，避免夸大风险；方法论公开透明，读者可以自行检验。

**社会价值。** 作为免费的公共信息产品，帮助公众用概率而非情绪理解全球风险。`,
    },
  },
  {
    id: 'adropedu',
    name: 'A Drop Edu',
    category: 'education',
    links: [{ url: 'https://www.adropedu.com', displayUrl: 'www.adropedu.com' }],
    role: 'Founder / CEO',
    status: 'live',
    description: {
      en: `A London-based education service platform (operated by META SOLUTION TECHNOLOGIES LTD) serving K-12 students and families on the path to future-ready skills.

**The problem we solve.** Future-defining skills — algorithms, artificial intelligence, robotics, digital technologies — are largely absent from traditional classrooms, and families lack systematic, trustworthy support for school admissions and international education pathways.

**Technology & strengths.** A proprietary K-12 coding curriculum and academic development programmes, spanning coding courses, academic tutoring, private school counselling, and international education projects — delivered through an established network of schools, education providers, and programme partners.

**Methodology.** A "curriculum + programme + counselling" model: coding courses and academic tutoring build the foundations, experiential programmes such as international summer camps widen horizons, and counselling threads each student's individual pathway through it all.

**Social value.** Helping students build future-ready skills and a global outlook from the K-12 stage, and giving families dependable guidance on their education journey.`,
      zh: `位于伦敦的教育服务平台（META SOLUTION TECHNOLOGIES LTD 旗下品牌），服务 K-12 学生与家庭的未来技能之路。

**我们解决的问题。** 算法、人工智能、机器人、数字技术这些定义未来的能力，在传统课堂中往往缺位；家庭在升学与国际教育路径上，也缺少系统、可信赖的专业支持。

**技术与优势。** 自有 K-12 编程课程体系与学术发展项目，覆盖编程课程、学术辅导、私立学校升学咨询与国际教育项目，并与学校、教育机构及项目合作伙伴建立了稳定的协作网络。

**方法论。** 以"课程 + 项目 + 咨询"组合交付：编程课程与学术辅导打好基础，国际夏令营等体验式项目拓宽视野，升学咨询则贯穿每个学生的个体路径规划。

**社会价值。** 帮助学生在 K-12 阶段就建立面向未来的技能与全球视野，为家庭的教育之路提供可依赖的引导。`,
    },
  },
  {
    id: 'adropfoundation',
    name: 'A Drop Foundation',
    category: 'education',
    links: [{ url: 'https://www.adropfoundation.com', displayUrl: 'www.adropfoundation.com' }],
    role: 'Founder / Chairman',
    status: 'live',
    badges: [{ en: 'Non-profit', zh: '非营利' }],
    description: {
      en: `A UK-based educational charity dedicated to inspiring young people to learn, grow, and contribute positively to society.

**The problem we solve.** The qualities young people need most in a fast-changing world — curiosity, independent thinking, resilience, a sense of purpose — rarely emerge from exam-driven schooling alone, and many students lack guidance in discovering their passions and direction. We believe education should be free.

**Technology & strengths.** A diverse portfolio of initiatives: educational programmes and mentoring that support student growth and leadership; an interview series and thought-leadership content featuring pioneers across disciplines; nature-based and experiential learning camps; and coding and digital-skills training with an AI-first mindset. Registered in the UK as a company limited by guarantee without share capital — a transparent, non-profit governance structure.

**Methodology.** Built for long-term impact: encouraging lifelong learning and intellectual curiosity, supporting personal purpose and wellbeing, promoting community engagement and social responsibility, and helping young people become confident global citizens.

**Social value.** Free educational public good for the next generation — helping young people discover their passions, build confidence, embrace challenges, and develop resilience in a rapidly changing global environment, unlocking their potential to make lasting positive contributions to society.`,
      zh: `总部位于英国的教育公益机构，致力于激励年轻人学习、成长并积极回馈社会。

**我们解决的问题。** 快速变化的时代里，年轻人最需要的好奇心、独立思考、韧性与使命感，很难从应试路径中自然获得；许多学生也缺少发现自身热情与方向的引导。我们相信教育应当是免费的。

**技术与优势。** 多元的项目组合：支持学生成长与领导力的教育项目和导师辅导；邀请各领域先行者的访谈系列与思想内容；自然教育与体验式营地；以及以 AI-first 思维开展的编程与数字技能训练。机构在英国注册为不设股本的担保有限公司，治理透明的非营利架构。

**方法论。** 以长期影响为导向：鼓励终身学习与求知欲，支持个人使命感与身心健康，促进社区参与和社会责任，帮助年轻人成为自信的全球公民。

**社会价值。** 面向下一代的免费教育公益——帮助年轻人发现热情、建立自信、拥抱挑战，在快速变化的全球环境中建立韧性，释放他们为社会作出持久积极贡献的潜能。`,
    },
  },
];
