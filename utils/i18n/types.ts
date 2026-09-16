export type Lang =
  | 'en' | 'zh' | 'zt' | 'ar' | 'de' | 'es' | 'fr'
  | 'hi' | 'ja' | 'ko' | 'ms' | 'ru' | 'th' | 'vi';

export interface LangMeta {
  code: Lang;
  native: string;
  dir: 'ltr' | 'rtl';
  htmlLang: string;
}

export const LANGS: LangMeta[] = [
  { code: 'en', native: 'English', dir: 'ltr', htmlLang: 'en' },
  { code: 'zh', native: '简体中文', dir: 'ltr', htmlLang: 'zh-Hans' },
  { code: 'zt', native: '繁體中文', dir: 'ltr', htmlLang: 'zh-Hant' },
  { code: 'ar', native: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  { code: 'de', native: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
  { code: 'es', native: 'Español', dir: 'ltr', htmlLang: 'es' },
  { code: 'fr', native: 'Français', dir: 'ltr', htmlLang: 'fr' },
  { code: 'hi', native: 'हिन्दी', dir: 'ltr', htmlLang: 'hi' },
  { code: 'ja', native: '日本語', dir: 'ltr', htmlLang: 'ja' },
  { code: 'ko', native: '한국어', dir: 'ltr', htmlLang: 'ko' },
  { code: 'ms', native: 'Bahasa Melayu', dir: 'ltr', htmlLang: 'ms' },
  { code: 'ru', native: 'Русский', dir: 'ltr', htmlLang: 'ru' },
  { code: 'th', native: 'ไทย', dir: 'ltr', htmlLang: 'th' },
  { code: 'vi', native: 'Tiếng Việt', dir: 'ltr', htmlLang: 'vi' },
];

export const LANG_CODES: Lang[] = LANGS.map((l) => l.code);
