import type { Lang } from '../utils/i18n/types';

export type Loc = Partial<Record<Lang, string>> & { en: string };

export interface TrunkItem {
  id: string;
  image: string;
  title: Loc;
  spec: Loc;
  note?: Loc;
}

export interface GalleryImage {
  id: string;
  image: string;
}

export const collectionIntro = {
  title: {
    en: 'Vintage Louis Vuitton Trunks',
    zh: '路易威登古董硬箱',
  } as Loc,
  subtitle: {
    en: 'A private collection of antique nineteenth- and early-twentieth-century travel trunks.',
    zh: '十九至二十世纪初古董旅行硬箱私人藏品。',
  } as Loc,
};


const LV_TITLE: Loc = { en: 'Antique Louis Vuitton Chest Trunk', zh: '古董路易威登硬箱' };
const WARDROBE_TITLE: Loc = { en: 'Antique Louis Vuitton Wardrobe Trunk', zh: '古董路易威登衣柜箱' };
const SUITCASE_TITLE: Loc = { en: 'Antique Louis Vuitton Leather Suitcase', zh: '古董路易威登皮革手提箱' };

const spec = (en: string, zh: string): Loc => ({ en, zh });

export const trunkItems: TrunkItem[] = [
  {
    id: 't1', image: '/collections/trunk-01.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · monogram “APC”', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 定制缩写 “APC”'),
  },
  {
    id: 't2', image: '/collections/trunk-02.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1890 · Made in France · 110 × 60 × 70 cm · monogram “CH”', '约 1890 年 · 法国制造 · 110 × 60 × 70 cm · 定制缩写 “CH”'),
  },
  {
    id: 't3', image: '/collections/trunk-03.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1890 · Made in France · 110 × 60 × 70 cm · monogram “EBDeG”, with period travel labels', '约 1890 年 · 法国制造 · 110 × 60 × 70 cm · 定制缩写 “EBDeG”，带年代旅行标签'),
  },
  {
    id: 't4', image: '/collections/trunk-04.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · monogram “Geneve”', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 定制缩写 “Geneve”'),
  },
  {
    id: 't5', image: '/collections/trunk-05.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1910 · Made in France · 110 × 55 × 55 cm · monogram “GHR”', '约 1910 年 · 法国制造 · 110 × 55 × 55 cm · 定制缩写 “GHR”'),
  },
  {
    id: 't6', image: '/collections/trunk-06.jpg?v=2',
    title: { en: 'Antique Hermès Trunk', zh: '古董爱马仕箱' },
    spec: spec('ca. 1863 · Made in France · 80 × 45 × 25 cm', '约 1863 年 · 法国制造 · 80 × 45 × 25 cm'),
    note: { en: 'The house of Hermès was established in Paris in 1837.', zh: '爱马仕于 1837 年在法国巴黎创立。' },
  },
  {
    id: 't7', image: '/collections/trunk-07.jpg?v=2', title: WARDROBE_TITLE,
    spec: spec('ca. 1890 · Made in France · 90 × 52 × 56 cm · monogram “CPL”', '约 1890 年 · 法国制造 · 90 × 52 × 56 cm · 定制缩写 “CPL”'),
    note: { en: 'A fitted wardrobe trunk with drawers and hanging section.', zh: '内设抽屉与挂衣格的衣柜式旅行箱。' },
  },
  {
    id: 't8', image: '/collections/trunk-08.jpg?v=2', title: WARDROBE_TITLE,
    spec: spec('ca. 1890 · Made in France · 115 × 52 × 56 cm · monogram “EDZ”', '约 1890 年 · 法国制造 · 115 × 52 × 56 cm · 定制缩写 “EDZ”'),
    note: { en: 'A tall wardrobe trunk fitted with a full bank of drawers.', zh: '高身衣柜箱，内嵌整排抽屉。' },
  },
  {
    id: 't9', image: '/collections/trunk-09.jpg?v=2', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 55 × 55 cm · monogram “HWS”', '约 1900 年 · 法国制造 · 110 × 55 × 55 cm · 定制缩写 “HWS”'),
  },
];

