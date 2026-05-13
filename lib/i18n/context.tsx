"use client";

import { createContext, useContext, ReactNode } from "react";
import { zh_TW } from "./translations/zh-TW";
import { zh_CN } from "./translations/zh-CN";
import { Locale, defaultLocale } from "./config";

type Translations = typeof zh_TW;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
}

const translations: Record<Locale, Translations> = {
  "zh-TW": zh_TW,
  "zh-CN": zh_CN,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children,
  locale = defaultLocale,
}: { 
  children: ReactNode;
  locale?: Locale;
}) {
  const value: LanguageContextType = {
    locale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { translations };
