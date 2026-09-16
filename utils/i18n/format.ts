import { Lang, LANGS } from './types';

// Format an ISO date (YYYY-MM-DD) in the given language, e.g.
// en -> "February 21, 2026", zh -> "2026年2月21日", ja -> "2026年2月21日".
export const formatDate = (iso: string, lang: Lang): string => {
  const meta = LANGS.find((l) => l.code === lang);
  const locale = meta?.htmlLang ?? 'en';
  const date = new Date(iso + 'T00:00:00Z');
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  } catch {
    return iso;
  }
};
