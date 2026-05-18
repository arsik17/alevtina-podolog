"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ru from "./translations/ru";
import kk from "./translations/kk";

export type Locale = "ru" | "kk";

type Translations = typeof ru;

const translations: Record<Locale, Translations> = { ru, kk };

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType>({
  locale: "ru",
  setLocale: () => {},
  t: ru,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
