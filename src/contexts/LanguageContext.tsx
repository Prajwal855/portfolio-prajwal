import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import i18n from '../i18n';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const normalizeLanguage = (lng: string): string => {
  if (lng.startsWith('fr')) return 'fr';
  if (lng.startsWith('de')) return 'de';
  if (lng.startsWith('ru')) return 'ru';
  if (lng.startsWith('hi')) return 'hi';
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): string => {
    const resolved = i18n.resolvedLanguage || i18n.language || 'en';
    return normalizeLanguage(resolved);
  };

  const [language, setLanguageState] = useState<string>(getInitialLanguage());

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      setLanguageState(normalizeLanguage(lng));
    };

    i18n.on('languageChanged', onLanguageChanged);
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

  const setLanguage = (nextLanguage: string) => {
    const normalized = normalizeLanguage(nextLanguage);
    i18n.changeLanguage(normalized);
    setLanguageState(normalized);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
