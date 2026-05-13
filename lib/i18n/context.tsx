"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { zh_TW } from "./translations/zh-TW";
import { zh_CN } from "./translations/zh-CN";

export type Locale = "zh-TW" | "zh-CN";

type Translations = typeof zh_TW;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const translations: Record<Locale, Translations> = {
  "zh-TW": zh_TW,
  "zh-CN": zh_CN,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh-TW");

  const value: LanguageContextType = {
    locale,
    setLocale,
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
