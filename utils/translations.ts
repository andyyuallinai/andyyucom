import { en } from './i18n/en';
import { zh } from './i18n/zh';
import { zt } from './i18n/zt';
import { ar } from './i18n/ar';
import { de } from './i18n/de';
import { es } from './i18n/es';
import { fr } from './i18n/fr';
import { hi } from './i18n/hi';
import { ja } from './i18n/ja';
import { ko } from './i18n/ko';
import { ms } from './i18n/ms';
import { ru } from './i18n/ru';
import { th } from './i18n/th';
import { vi } from './i18n/vi';
import type { Lang } from './i18n/types';

export const translations: Record<Lang, typeof en> = {
  en, zh, zt, ar, de, es, fr, hi, ja, ko, ms, ru, th, vi,
};
