'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, Language, TranslationKeys } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isHindi: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const savedLang = localStorage.getItem('astha-gurukul-lang') as Language;
  if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
    return savedLang;
  }
  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Hydrate language from localStorage after mount
  React.useEffect(() => {
    const savedLang = getInitialLanguage();
    if (savedLang !== language) {
      setLanguageState(savedLang);
    }
    setIsHydrated(true);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('astha-gurukul-lang', lang);
      document.documentElement.lang = lang;
    }
  }, []);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
    isHindi: language === 'hi',
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export { translations };
