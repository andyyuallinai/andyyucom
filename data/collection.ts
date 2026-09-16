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

export const galleryLabel: Loc = { en: 'In Context', zh: '场景与陈列' };

const LV_TITLE: Loc = { en: 'Antique Louis Vuitton Chest Trunk', zh: '古董路易威登硬箱' };
const WARDROBE_TITLE: Loc = { en: 'Antique Louis Vuitton Wardrobe Trunk', zh: '古董路易威登衣柜箱' };
const SUITCASE_TITLE: Loc = { en: 'Antique Louis Vuitton Leather Suitcase', zh: '古董路易威登皮革手提箱' };

const spec = (en: string, zh: string): Loc => ({ en, zh });

export const trunkItems: TrunkItem[] = [
  {
    id: 't1', image: '/collections/trunk-01.jpg', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · monogram “APC”', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 定制缩写 “APC”'),
  },
  {
    id: 't2', image: '/collections/trunk-02.jpg', title: LV_TITLE,
    spec: spec('ca. 1890 · Made in France · 110 × 60 × 70 cm · monogram “CH”', '约 1890 年 · 法国制造 · 110 × 60 × 70 cm · 定制缩写 “CH”'),
  },
  {
    id: 't3', image: '/collections/trunk-03.jpg', title: LV_TITLE,
    spec: spec('ca. 1890 · Made in France · 110 × 60 × 70 cm · monogram “EBDeG”, with period travel labels', '约 1890 年 · 法国制造 · 110 × 60 × 70 cm · 定制缩写 “EBDeG”，带年代旅行标签'),
  },
  {
    id: 't4', image: '/collections/trunk-04.jpg', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · monogram “Geneve”', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 定制缩写 “Geneve”'),
  },
  {
    id: 't5', image: '/collections/trunk-05.jpg', title: LV_TITLE,
    spec: spec('ca. 1910 · Made in France · 110 × 55 × 55 cm · monogram “GHR”', '约 1910 年 · 法国制造 · 110 × 55 × 55 cm · 定制缩写 “GHR”'),
  },
  {
    id: 't6', image: '/collections/trunk-06.jpg',
    title: { en: 'Antique Hermès Trunk', zh: '古董爱马仕箱' },
    spec: spec('ca. 1863 · Made in France · 80 × 45 × 25 cm', '约 1863 年 · 法国制造 · 80 × 45 × 25 cm'),
    note: { en: 'The house of Hermès was established in Paris in 1837.', zh: '爱马仕于 1837 年在法国巴黎创立。' },
  },
  {
    id: 't7', image: '/collections/trunk-07.jpg', title: WARDROBE_TITLE,
    spec: spec('ca. 1890 · Made in France · 90 × 52 × 56 cm · monogram “CPL”', '约 1890 年 · 法国制造 · 90 × 52 × 56 cm · 定制缩写 “CPL”'),
    note: { en: 'A fitted wardrobe trunk with drawers and hanging section.', zh: '内设抽屉与挂衣格的衣柜式旅行箱。' },
  },
  {
    id: 't8', image: '/collections/trunk-08.jpg', title: WARDROBE_TITLE,
    spec: spec('ca. 1890 · Made in France · 115 × 52 × 56 cm · monogram “EDZ”', '约 1890 年 · 法国制造 · 115 × 52 × 56 cm · 定制缩写 “EDZ”'),
    note: { en: 'A tall wardrobe trunk fitted with a full bank of drawers.', zh: '高身衣柜箱，内嵌整排抽屉。' },
  },
  {
    id: 't9', image: '/collections/trunk-09.jpg', title: LV_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 55 × 55 cm · monogram “HWS”', '约 1900 年 · 法国制造 · 110 × 55 × 55 cm · 定制缩写 “HWS”'),
  },
  {
    id: 't10', image: '/collections/trunk-10.jpg', title: SUITCASE_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · natural leather', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 原色皮革'),
  },
  {
    id: 't11', image: '/collections/trunk-11.jpg', title: SUITCASE_TITLE,
    spec: spec('ca. 1900 · Made in France · 110 × 35 × 55 cm · monogram “WR”', '约 1900 年 · 法国制造 · 110 × 35 × 55 cm · 定制缩写 “WR”'),
    note: { en: 'Bearing an original “Hôtel Stockholm, Paris” travel label.', zh: '箱身留有原装「Hôtel Stockholm, Paris」旅行标签。' },
  },
  {
    id: 't12', image: '/collections/trunk-12.jpg',
    title: { en: 'Antique Goyard Champagne Box', zh: '古董 Goyard 香槟箱' },
    spec: spec('Goyard · Paris', 'Goyard · 巴黎'),
    note: {
      en: 'Goyard was founded in 1853 by François Goyard; with more than a century and a half of history, it is among the oldest of the French luggage houses. As nineteenth-century railways and steamships opened up mass travel across Europe, royalty and the wealthy set out on journeys of many months, and bespoke trunks were made for every purpose — book trunks, champagne cases, and more.',
      zh: 'Goyard 成立于 1853 年，逾百五十年历史，创办人为 François Goyard，是法国最古老的旅行箱世家之一。十九世纪欧洲火车、轮船兴起，掀起大规模旅行风潮；王室与贵族出行动辄数月，遂有各式定制旅行箱——藏书箱、香槟箱等，皆应运而生。',
    },
  },
  {
    id: 't13', image: '/collections/trunk-13.jpg',
    title: { en: 'Louis Vuitton Limited-Edition VIP Gift Box — Miss France', zh: '路易威登限量版超级 VIP 礼品箱 — Miss France' },
    spec: spec('Louis Vuitton · limited edition of five', '路易威登 · 全球限量五只'),
    note: {
      en: 'A miniature hard trunk created by Louis Vuitton as a gift for its most valued VIP clients — a limited series of only five, in the new pink vintage monogram. An ultra-limited, sealed piece: a diminutive, treasured objet for the home.',
      zh: '路易威登超可爱的 mini 版小硬箱，是赠予顶级 VIP 客人的礼物；此系列全球限量五只，采用全新粉色复古花纹，属超级限量的不可开启款——小巧精致，可作家中珍藏。',
    },
  },
  {
    id: 't14', image: '/collections/trunk-14.jpg',
    title: { en: '“100 Legendary Trunks” — Louis Vuitton Limited Edition', zh: '《100 只传奇古董箱》路易威登限量版' },
    spec: spec('Louis Vuitton · limited-edition volume', '路易威登 · 限量典藏图册'),
    note: {
      en: 'A limited-edition volume chronicling one hundred of Louis Vuitton’s most legendary trunks.',
      zh: '一部限量典藏图册，记录路易威登一百只最具传奇色彩的古董箱。',
    },
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', image: '/collections/gallery-01.jpg' },
  { id: 'g2', image: '/collections/gallery-02.jpg' },
  { id: 'g3', image: '/collections/gallery-03.jpg' },
  { id: 'g4', image: '/collections/gallery-04.jpg' },
  { id: 'g5', image: '/collections/gallery-05.jpg' },
  { id: 'g6', image: '/collections/gallery-06.jpg' },
];
