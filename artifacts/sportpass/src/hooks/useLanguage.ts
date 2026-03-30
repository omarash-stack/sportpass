import { useState, useEffect, createContext, useContext } from "react";

export type Language = "en" | "ar";

export interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  isRTL: boolean;
  t: (obj: { en: string; ar: string }) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  isRTL: false,
  t: (obj) => obj.en,
});

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}

export function useLanguageProvider() {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("sportpass-lang");
    return (stored === "ar" ? "ar" : "en") as Language;
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    localStorage.setItem("sportpass-lang", lang);
  }, [lang, isRTL]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (obj: { en: string; ar: string }): string => obj[lang];

  return { lang, toggleLang, isRTL, t };
}
