import { LanguageContext, useLanguageProvider } from "@/hooks/useLanguage";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const value = useLanguageProvider();
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
