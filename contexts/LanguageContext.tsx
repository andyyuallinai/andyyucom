import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations } from '../utils/translations';
import { Lang, LANGS, LANG_CODES } from '../utils/i18n/types';

export type Language = Lang;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const STORAGE_KEY = 'site-lang';

const readStoredLanguage = (): Language => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (LANG_CODES as string[]).includes(stored)) {
      return stored as Language;
    }
  } catch {
    // storage unavailable — fall through to default
  }
  return 'en';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable — selection just won't persist
    }
  };

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === language);
    if (!meta) return;
    const root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    root.setAttribute('data-lang', language);
  }, [language]);

  const t = translations[language] ?? translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
