import { en } from './en';
import { zh } from './zh';
import { zt } from './zt';
import { ar } from './ar';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { ja } from './ja';
import { ko } from './ko';
import { ms } from './ms';
import { ru } from './ru';
import { th } from './th';
import { vi } from './vi';
import type { ArticleStrings } from './types';
import type { Lang } from '../../utils/i18n/types';

export const articleStringsByLang: Record<Lang, ArticleStrings> = {
  en, zh, zt, ar, de, es, fr, hi, ja, ko, ms, ru, th, vi,
};

export const getArticleStrings = (lang: Lang, id: string) =>
  articleStringsByLang[lang]?.[id] ?? articleStringsByLang.en[id];
