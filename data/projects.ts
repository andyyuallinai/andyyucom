import { AIProject, ProjectCategory } from '../types';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'platforms',
    label: {
      en: 'AI Product Platforms', zh: 'AI 产品平台', zt: 'AI 產品平台',
      ar: 'منصات منتجات الذكاء الاصطناعي', de: 'KI-Produktplattformen',
      es: 'Plataformas de productos de IA', fr: 'Plateformes de produits IA',
      hi: 'एआई उत्पाद प्लेटफ़ॉर्म', ja: 'AIプロダクトプラットフォーム', ko: 'AI 제품 플랫폼',
      ms: 'Platform Produk AI', ru: 'ИИ-платформы', th: 'แพลตฟอร์มผลิตภัณฑ์ AI',
      vi: 'Nền tảng sản phẩm AI',
    },
  },
  {
    id: 'research',
    label: {
      en: 'Public Data & Research', zh: '公共数据与研究', zt: '公共數據與研究',
      ar: 'البيانات العامة والأبحاث', de: 'Öffentliche Daten & Forschung',
      es: 'Datos públicos e investigación', fr: 'Données publiques et recherche',
      hi: 'सार्वजनिक डेटा और अनुसंधान', ja: '公共データと研究', ko: '공공 데이터 및 연구',
      ms: 'Data Awam & Penyelidikan', ru: 'Открытые данные и исследования',
      th: 'ข้อมูลสาธารณะและการวิจัย', vi: 'Dữ liệu công và nghiên cứu',
    },
  },
  {
    id: 'education',
    label: {
      en: 'Education & Non-profit', zh: '教育与公益', zt: '教育與公益',
      ar: 'التعليم والعمل غير الربحي', de: 'Bildung & Gemeinnütziges',
      es: 'Educación y sin fines de lucro', fr: 'Éducation et associatif',
      hi: 'शिक्षा और गैर-लाभकारी', ja: '教育・非営利', ko: '교육 및 비영리',
      ms: 'Pendidikan & Bukan Untung', ru: 'Образование и НКО',
      th: 'การศึกษาและไม่แสวงหากำไร', vi: 'Giáo dục & Phi lợi nhuận',
    },
  },
];

export const projects: AIProject[] = [
  {
    id: 'unioffer',
    name: 'UniOffer',
    category: 'platforms',
    links: [{ url: 'https://www.unioffer.ai', displayUrl: 'www.unioffer.ai' }],
    role: 'Founder & CEO',
    status: 'live',
    badges: [{
      en: '10 languages', zh: '10 种语言', zt: '10 種語言', ar: '10 لغات',
      de: '10 Sprachen', es: '10 idiomas', fr: '10 langues', hi: '10 भाषाएँ',
      ja: '10言語', ko: '10개 언어', ms: '10 bahasa', ru: '10 языков',
      th: '10 ภาษา', vi: '10 ngôn ngữ',
    }],
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
    badges: [{
      en: 'Global + China', zh: '全球站 + 中国站', zt: '全球站 + 中國站',
      ar: 'عالمي + الصين', de: 'Global + China', es: 'Global + China',
      fr: 'International + Chine', hi: 'वैश्विक + चीन', ja: 'グローバル + 中国',
      ko: '글로벌 + 중국', ms: 'Global + China', ru: 'Глобальный + Китай',
      th: 'ทั่วโลก + จีน', vi: 'Toàn cầu + Trung Quốc',
    }],
  },
  {
    id: 'gci',
    name: 'Global Crisis Index',
    category: 'research',
    links: [{ url: 'https://globalcrisisindex.co.uk', displayUrl: 'globalcrisisindex.co.uk' }],
    role: 'Researcher',
    status: 'live',
    badges: [
      {
        en: '14 languages', zh: '14 种语言', zt: '14 種語言', ar: '14 لغة',
        de: '14 Sprachen', es: '14 idiomas', fr: '14 langues', hi: '14 भाषाएँ',
        ja: '14言語', ko: '14개 언어', ms: '14 bahasa', ru: '14 языков',
        th: '14 ภาษา', vi: '14 ngôn ngữ',
      },
      {
        en: 'Daily automated updates', zh: '每日全自动更新', zt: '每日全自動更新',
        ar: 'تحديثات يومية تلقائية', de: 'Tägliche automatische Updates',
        es: 'Actualizaciones diarias automáticas', fr: 'Mises à jour quotidiennes automatiques',
        hi: 'दैनिक स्वचालित अपडेट', ja: '毎日自動更新', ko: '매일 자동 업데이트',
        ms: 'Kemas kini automatik harian', ru: 'Ежедневное автообновление',
        th: 'อัปเดตอัตโนมัติทุกวัน', vi: 'Cập nhật tự động hằng ngày',
      },
    ],
  },
  {
    id: 'adropedu',
    name: 'A Drop Edu',
    category: 'education',
    links: [{ url: 'https://www.adropedu.com', displayUrl: 'www.adropedu.com' }],
    role: 'Founder / CEO',
    status: 'live',
  },
  {
    id: 'adropfoundation',
    name: 'A Drop Foundation',
    category: 'education',
    links: [{ url: 'https://www.adropfoundation.com', displayUrl: 'www.adropfoundation.com' }],
    role: 'Founder / Chairman',
    status: 'live',
    badges: [{
      en: 'Non-profit', zh: '非营利', zt: '非營利', ar: 'غير ربحي',
      de: 'Gemeinnützig', es: 'Sin fines de lucro', fr: 'À but non lucratif',
      hi: 'गैर-लाभकारी', ja: '非営利', ko: '비영리', ms: 'Bukan untung',
      ru: 'Некоммерческий', th: 'ไม่แสวงหากำไร', vi: 'Phi lợi nhuận',
    }],
  },
];
