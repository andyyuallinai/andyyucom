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
      en: `An AI-native university admissions platform. Purpose-built AI agents — an application readiness engine, essay studio, question bank, and one-click student profile sites — run the entire application journey, with Cozie, a schema-isolated student wellbeing companion, and support for 10 languages.

**The mission** is to make the university application process transparent, structured, and affordable for every student.`,
      zh: `AI 原生的大学申请平台。以多个真实 AI Agent——申请引擎、文书工作室、题库、一键生成学生个人主页——贯穿申请全流程，配备独立隔离的学生心理陪伴 Cozie，支持 10 种语言。

**使命**是让大学申请过程对每个学生透明、有结构、可负担。`,
    },
  },
  {
    id: 'luckq',
    name: 'LuckQ · 四叶运商',
    category: 'platforms',
    links: [
      { url: 'https://luckq.ai', displayUrl: 'luckq.ai' },
      { url: 'https://luckq.com.cn', displayUrl: 'luckq.com.cn' },
    ],
    role: 'Founder',
    status: 'live',
    badges: [{ en: 'Global + China', zh: '全球站 + 中国站' }],
    description: {
      en: `A self-discovery assessment and AI coaching platform for luck and personal growth. A four-dimension profile test, deeply personalised reports generated from each user's actual answers — no two reports alike, even at the same score — a 240-item deep question bank, and an AI coach. Served globally at luckq.ai and in China at luckq.com.cn.`,
      zh: `自我认知测评与 AI 幸运成长教练平台。四维剖面测评、依据用户真实作答生成的个性化报告（同分不同报告）、240 题深度题库与 AI 教练对话，中英双站分别服务全球与中国用户。`,
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
      { en: '10 languages', zh: '10 种语言' },
      { en: 'Daily automated updates', zh: '每日全自动更新' },
    ],
    description: {
      en: `A global risk-tracking index using probability pooling methodology, published in 10 languages with fully automated daily updates.`,
      zh: `全球危机指数。以概率聚合方法追踪全球重大风险，官网覆盖 10 种语言，数据每日全自动更新。`,
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
      en: `META SOLUTION TECHNOLOGIES LTD operates under the trading name A Drop Edu, an education service platform based in London providing a range of education-related services including K-12 coding curriculum, academic development programmes, private school counselling, and international education projects.

The organisation works with schools, education providers and programme partners to deliver innovative education programmes such as coding courses, academic tutoring, and international summer camps designed to equip students with future-ready skills in areas such as algorithms, artificial intelligence, robotics, and digital technologies.`,
      zh: `META SOLUTION TECHNOLOGIES LTD 以 A Drop Edu 为品牌运营，是一家位于伦敦的教育服务平台，提供 K-12 编程课程、学术发展项目、私立学校升学咨询及国际教育项目等多类教育服务。

机构与学校、教育机构及项目合作伙伴协作，提供编程课程、学术辅导、国际夏令营等创新教育项目，帮助学生掌握算法、人工智能、机器人与数字技术等面向未来的技能。`,
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
      en: `A Drop Foundation is a UK-based educational charity dedicated to inspiring young people to learn, grow, and contribute positively to society. The foundation focuses on nurturing curiosity, independent thinking, and personal development in the next generation through educational programs, mentorship, and community initiatives.

**Mission**
The foundation’s mission is to empower young people to discover their passions, develop confidence, and pursue meaningful life goals. It aims to encourage students to cultivate an independent mindset, build ai-first mindset, embrace challenges, and build resilience in a rapidly changing global environment. believe in education should be for free.

**Vision**
A Drop Foundation envisions a world where young people are inspired to learn, flourish, and serve their communities, unlocking their potential to make lasting positive contributions to society.

**Key Activities**
The foundation promotes educational and personal development through several initiatives, including:
* Educational programs and mentoring to support student growth and leadership.
* Interview series and thought-leadership content featuring pioneers across disciplines to inspire young people and families.
* Learning initiatives and camps, such as nature-based and experiential education programs.
* Technology and creative learning opportunities, including coding and digital skills training, ai-first.

These activities aim to help students explore their interests, develop critical thinking, and prepare for future academic and professional paths.

**Governance and Structure**
A Drop Foundation operates in the United Kingdom and is registered as a private company limited by guarantee without share capital, a structure commonly used for non-profit organisations.

**Impact Approach**
The foundation focuses on long-term impact by:
* encouraging lifelong learning and intellectual curiosity, ai first mindset
* supporting personal purpose and well-being
* promoting community engagement and social responsibility
* helping young people become confident global citizens`,
      zh: `A Drop Foundation 是一家总部位于英国的教育公益机构，致力于激励年轻人学习、成长并积极回馈社会。基金会通过教育项目、导师辅导与社区行动，培养下一代的好奇心、独立思考与个人成长。

**使命**
基金会的使命是帮助年轻人发现自己的热情、建立自信、追求有意义的人生目标，鼓励学生培养独立思维与 AI-first 思维方式，拥抱挑战，在快速变化的全球环境中建立韧性。我们相信教育应当是免费的。

**愿景**
A Drop Foundation 期望一个年轻人被激励去学习、成长并服务社区的世界，释放他们为社会作出持久积极贡献的潜能。

**主要活动**
基金会通过多项行动促进教育与个人发展，包括：
* 支持学生成长与领导力的教育项目和导师辅导。
* 邀请各领域先行者的访谈系列与思想内容，激励年轻人与家庭。
* 学习行动与营地，如自然教育与体验式教育项目。
* 科技与创意学习机会，包括编程与数字技能训练（AI-first）。

这些活动旨在帮助学生探索兴趣、发展批判性思维，为未来的学业与职业道路做好准备。

**治理与架构**
A Drop Foundation 在英国运营，注册为不设股本的担保有限公司，这是非营利组织常用的架构。

**影响力路径**
基金会关注长期影响：
* 鼓励终身学习与求知欲，培养 AI-first 思维
* 支持个人使命感与身心健康
* 促进社区参与和社会责任
* 帮助年轻人成为自信的全球公民`,
    },
  },
];
