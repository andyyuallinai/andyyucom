import type { Lang } from '../utils/i18n/types';

export type Localized = Partial<Record<Lang, string>> & { en: string };

export type TagKey = 'ai' | 'life';

export interface ArticleMeta {
  id: string;
  iso: string; // ISO date; the displayed date is formatted per-language via Intl
  tag: TagKey;
}

// Newest first — matches the order the list is displayed in.
export const articleList: ArticleMeta[] = [
  { id: '1', iso: '2026-02-21', tag: 'ai' },
  { id: '2', iso: '2026-02-01', tag: 'ai' },
  { id: '3', iso: '2026-01-15', tag: 'ai' },
  { id: '4', iso: '2026-01-01', tag: 'ai' },
  { id: '5', iso: '2026-01-23', tag: 'ai' },
  { id: '6', iso: '2026-01-22', tag: 'ai' },
  { id: '7', iso: '2025-11-04', tag: 'life' },
  { id: '8', iso: '2025-11-02', tag: 'life' },
  { id: '9', iso: '2025-10-28', tag: 'life' },
];

export const tagLabels: Record<TagKey, Localized> = {
  ai: {
    en: 'AI', zh: 'AI', zt: 'AI', ar: 'AI', de: 'AI', es: 'IA', fr: 'IA',
    hi: 'AI', ja: 'AI', ko: 'AI', ms: 'AI', ru: 'ИИ', th: 'AI', vi: 'AI',
  },
  life: {
    en: 'Life', zh: '生活', zt: '生活', ar: 'الحياة', de: 'Leben', es: 'Vida',
    fr: 'Vie', hi: 'जीवन', ja: '生活', ko: '삶', ms: 'Kehidupan', ru: 'Жизнь',
    th: 'ชีวิต', vi: 'Đời sống',
  },
};

// Label for the "read more on the original blog" link to andyyu.org.
export const moreReadingLabel: Localized = {
  en: 'More writing on andyyu.org',
  zh: '更多文章见 andyyu.org',
  zt: '更多文章見 andyyu.org',
  ar: 'مزيد من المقالات على andyyu.org',
  de: 'Mehr Texte auf andyyu.org',
  es: 'Más escritos en andyyu.org',
  fr: 'Plus d’écrits sur andyyu.org',
  hi: 'और लेख andyyu.org पर',
  ja: 'andyyu.org でさらに読む',
  ko: 'andyyu.org에서 더 읽기',
  ms: 'Lagi tulisan di andyyu.org',
  ru: 'Больше текстов на andyyu.org',
  th: 'อ่านเพิ่มเติมที่ andyyu.org',
  vi: 'Đọc thêm tại andyyu.org',
};

export const moreReadingSub: Localized = {
  en: 'These nine essays are selected from my personal blog. The full archive of writing lives at andyyu.org.',
  zh: '这里的九篇文章选自我的个人博客，完整的写作合集都在 andyyu.org。',
  zt: '這裡的九篇文章選自我的個人部落格，完整的寫作合集都在 andyyu.org。',
  ar: 'هذه المقالات التسع مختارة من مدونتي الشخصية. الأرشيف الكامل للكتابات موجود على andyyu.org.',
  de: 'Diese neun Essays sind eine Auswahl aus meinem persönlichen Blog. Das vollständige Archiv findet sich auf andyyu.org.',
  es: 'Estos nueve ensayos son una selección de mi blog personal. El archivo completo está en andyyu.org.',
  fr: 'Ces neuf essais sont une sélection de mon blog personnel. L’ensemble des textes se trouve sur andyyu.org.',
  hi: 'ये नौ निबंध मेरे निजी ब्लॉग से चुने गए हैं। लेखन का पूरा संग्रह andyyu.org पर है।',
  ja: 'この9編は個人ブログからの抜粋です。すべての文章は andyyu.org にあります。',
  ko: '이 아홉 편은 개인 블로그에서 고른 글입니다. 전체 글은 andyyu.org에 있습니다.',
  ms: 'Sembilan esei ini dipilih daripada blog peribadi saya. Arkib penuh penulisan ada di andyyu.org.',
  ru: 'Эти девять эссе выбраны из моего личного блога. Полный архив текстов — на andyyu.org.',
  th: 'บทความทั้งเก้านี้คัดจากบล็อกส่วนตัวของผม คลังงานเขียนทั้งหมดอยู่ที่ andyyu.org',
  vi: 'Chín bài viết này được chọn từ blog cá nhân của tôi. Toàn bộ kho bài viết nằm ở andyyu.org.',
};

export const BLOG_URL = 'https://andyyu.org';
