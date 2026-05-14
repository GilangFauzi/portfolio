import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && (saved === "id" || saved === "en")) return saved;
    } catch {}
    const browserLang = navigator.language?.split("-")[0];
    return browserLang === "id" ? "id" : "en";
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  return function t(objOrStr) {
    if (typeof objOrStr === "object" && objOrStr !== null) {
      return objOrStr[lang] || objOrStr.en || "";
    }
    return objOrStr;
  };
}
