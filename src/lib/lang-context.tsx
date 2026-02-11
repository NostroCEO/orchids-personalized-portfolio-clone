'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { type Locale, translations } from './translations';

interface LangContextType {
  locale: Locale;
  t: typeof translations['fr'];
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  const toggle = () => setLocale((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
