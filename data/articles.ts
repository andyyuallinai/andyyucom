import type { Lang } from '../utils/i18n/types';

export type ArticleLocalized = Partial<Record<Lang, string>> & { en: string };

export interface ArticleMeta {
  id: string;
  title: ArticleLocalized;
  excerpt: ArticleLocalized;
  date: ArticleLocalized;
  tag: ArticleLocalized;
}

export const articleList: ArticleMeta[] = [
  {
    id: '1',
    title: { en: `CUBE PRINCIPLE - E: ELEVATE & EVOLVING AI Workflow Ascension: Upgrading from Executor to Director`, zh: `CUBE PRINCIPLE - E：ELEVATE & EVOLVING AI 工作流升维术：把自己从执行者，升级成导演`, zt: `CUBE PRINCIPLE - E：ELEVATE & EVOLVING AI 工作流升維術：把自己從執行者，升級成導演` },
    excerpt: { en: `The biggest buzz in Silicon Valley isn't that "AI can write," but that AI is starting to "take tasks": breaking down steps, invoking tools, running workflows, and delivering results. OpenAI recently brought the "AI Colleague/Collaborator" platform direction to the forefront (Frontier is used to build and manage enterprise-grade agents), and the signal is clear: in the future of work, you won't just use a model; you'll bring a team of agents to work.`, zh: `硅谷这波最炸的不是“AI 会写”，而是AI 开始“接任务”：自己拆步骤、调工具、跑流程、交付结果。OpenAI 最近把“AI 同事/协作体”的平台化方向推到台前（Frontier 用来构建与管理企业级 agents），信号很明确：未来的工作，不是你用一个模型，而是你带一队智能体上班。`, zt: `矽谷這波最炸的不是「AI 會寫」，而是AI 開始「接任務」：自己拆步驟、調工具、跑流程、交付結果。OpenAI 最近把「AI 同事/協作體」的平台化方向推到台前（Frontier 用來構建與管理企業級 agents），信號很明確：未來的工作，不是你用一個模型，而是你帶一隊智能體上班。` },
    date: { en: `February 21, 2026`, zh: `2026年2月21日`, zt: `2026年2月21日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '2',
    title: { en: `CUBE 理论：从指挥官到造物主，开启你的“Vibe Coding”进化论！`, zh: `CUBE 理论：从指挥官到造物主，开启你的“Vibe Coding”进化论！`, zt: `CUBE 理論：從指揮官到造物主，開啟你的「Vibe Coding」進化論！` },
    excerpt: { en: `如果说 C (Command) 是学会给 AI 下圣旨，U (Use) 是让 AI 像呼吸一样自然地融入流，那今天我们要聊的 B (Build)，就是真正划分“数字平民”与“数字贵族”的分水岭。`, zh: `如果说 C (Command) 是学会给 AI 下圣旨，U (Use) 是让 AI 像呼吸一样自然地融入流，那今天我们要聊的 B (Build)，就是真正划分“数字平民”与“数字贵族”的分水岭。`, zt: `如果說 C (Command) 是學會給 AI 下聖旨，U (Use) 是讓 AI 像呼吸一樣自然地融入流，那今天我們要聊的 B (Build)，就是真正劃分「數字平民」與「數字貴族」的分水嶺。` },
    date: { en: `February 1, 2026`, zh: `2026年2月1日`, zt: `2026年2月1日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '3',
    title: { en: `U：USE｜从工具到同事：硅谷与麦肯锡，如何通过AI智能体把工作变成一条自动运转的生产线`, zh: `U：USE｜从工具到同事：硅谷与麦肯锡，如何通过AI智能体把工作变成一条自动运转的生产线`, zt: `U：USE｜從工具到同事：矽谷與麥肯錫，如何通過AI智能體把工作變成一條自動運轉的生產線` },
    excerpt: { en: `在硅谷，“会用 AI”已不值钱；值钱的是你能不能把它变成一条流水线`, zh: `在硅谷，“会用 AI”已不值钱；值钱的是你能不能把它变成一条流水线`, zt: `在矽谷，「會用 AI」已不值錢；值錢的是你能不能把它變成一條流水線` },
    date: { en: `January 15, 2026`, zh: `2026年1月15日`, zt: `2026年1月15日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '4',
    title: { en: `CUBE · C：为什么会下 Command 的人，正在碾压会用 AI 的人`, zh: `CUBE · C：为什么会下 Command 的人，正在碾压会用 AI 的人`, zt: `CUBE · C：為什麼會下 Command 的人，正在碾壓會用 AI 的人` },
    excerpt: { en: `C = Command 不是“命令机器”，而是“指挥智能”。在硅谷，真正会用 AI 的人，很少把自己当“使用者”。他们更像——指挥官（Commander）。`, zh: `C = Command 不是“命令机器”，而是“指挥智能”。在硅谷，真正会用 AI 的人，很少把自己当“使用者”。他们更像——指挥官（Commander）。`, zt: `C = Command 不是「命令機器」，而是「指揮智能」。在矽谷，真正會用 AI 的人，很少把自己當「使用者」。他們更像——指揮官（Commander）。` },
    date: { en: `January 1, 2026`, zh: `2026年1月1日`, zt: `2026年1月1日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '5',
    title: { en: `Why Ivan Zhao's Notion Is the Best Business Case for the CUBE Principle`, zh: `为什么 Ivan Zhao 的 Notion 就是 CUBE 原理体系最好的商业案例？`, zt: `為什麼 Ivan Zhao 的 Notion 就是 CUBE 原理體系最好的商業案例？` },
    excerpt: { en: `In Silicon Valley VC circles, everyone talks about the survival crisis of 'AI wrappers'. Notion instead lights up a higher possibility for applied AI — not merely a product, but a system that institutionalises intelligence.`, zh: `在硅谷的 VC 圈子里，大家都在谈论“AI 套壳”的生存危机。而 Notion 却像一束光，照亮了 AI 落地的一种高级可能性——它不仅是产品，更是一套将 AI 智能制度化的系统。`, zt: `在矽谷的 VC 圈子裡，大家都在談論「AI 套殼」的生存危機。而 Notion 卻像一束光，照亮了 AI 落地的一種高級可能性——它不僅是產品，更是一套將 AI 智能制度化的系統。` },
    date: { en: `January 23, 2026`, zh: `2026年1月23日`, zt: `2026年1月23日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '6',
    title: { en: `The CUBE Principle: Turning AI from Tool into System`, zh: `CUBE原则：将AI从工具变为系统的方法论`, zt: `CUBE原則：將AI從工具變為系統的方法論` },
    excerpt: { en: `The CUBE Principle, first proposed by me: a methodology for turning AI from a tool into a system. CUBE: Architecting Intelligence into Impact.`, zh: `我首次提出的 The CUBE Principle：把 AI 从“工具”变成“系统”的方法论。CUBE: Architecting Intelligence into Impact.`, zt: `我首次提出的 The CUBE Principle：把 AI 從「工具」變成「系統」的方法論。CUBE: Architecting Intelligence into Impact.` },
    date: { en: `January 22, 2026`, zh: `2026年1月22日`, zt: `2026年1月22日` },
    tag: { en: `AI`, zh: `AI`, zt: `AI` },
  },
  {
    id: '7',
    title: { en: `Cooking Is One's Highest Form of Aesthetic Taste`, zh: `做饭，就是一个人最高的美学审美`, zt: `做飯，就是一個人最高的美學審美` },
    excerpt: { en: `A person's true taste begins in the kitchen. This is no sentimental aphorism, but a profound philosophy of living.`, zh: `一个人真正的审美和品味，从做饭开始。这并不是一句矫情的生活格言，而是一种极深的生活哲学。`, zt: `一個人真正的審美和品味，從做飯開始。這並不是一句矯情的生活格言，而是一種極深的生活哲學。` },
    date: { en: `November 4, 2025`, zh: `2025年11月4日`, zt: `2025年11月4日` },
    tag: { en: `Life`, zh: `生活`, zt: `生活` },
  },
  {
    id: '8',
    title: { en: `Cooking Is the Best Philosophy of Corporate Strategy`, zh: `做饭，就是最好的企业管理战略哲学`, zt: `做飯，就是最好的企業管理戰略哲學` },
    excerpt: { en: `Every dinner party I prepare is a strategic exercise in miniature — cooking looks like an art of pleasing the palate, yet it is a management philosophy of integrating resources, balancing human nature, and creating value.`, zh: `每一次宴请宾客的准备过程，都像是一场企业的战略演练——烹饪表面上是满足味蕾的艺术，实则是一门整合资源、平衡人性与创造价值的管理哲学。`, zt: `每一次宴請賓客的準備過程，都像是一場企業的戰略演練——烹飪表面上是滿足味蕾的藝術，實則是一門整合資源、平衡人性與創造價值的管理哲學。` },
    date: { en: `November 2, 2025`, zh: `2025年11月2日`, zt: `2025年11月2日` },
    tag: { en: `Life`, zh: `生活`, zt: `生活` },
  },
  {
    id: '9',
    title: { en: `The Quiet Way of Cooking`, zh: `做饭的静谧之道`, zt: `做飯的靜謐之道` },
    excerpt: { en: `Every act of cooking is an inward pilgrimage — in the slow flow of time, one comes to know order, compassion, and purity. I like to compare cooking to practice.`, zh: `每一次烹饪，都是一场内在的朝圣——在时间的缓流中，体悟秩序、慈悲与纯净。我喜欢把做饭比作修行。`, zt: `每一次烹飪，都是一場內在的朝聖——在時間的緩流中，體悟秩序、慈悲與純淨。我喜歡把做飯比作修行。` },
    date: { en: `October 28, 2025`, zh: `2025年10月28日`, zt: `2025年10月28日` },
    tag: { en: `Life`, zh: `生活`, zt: `生活` },
  },
];
