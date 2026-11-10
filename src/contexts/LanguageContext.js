import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en" ? "Pablo Díaz | Portfolio" : "Pablo Díaz | Portafolio";
  }, [language]);

  const value = {
    language,
    isEnglish: language === "en",
    toggleLanguage: () =>
      setLanguage((currentLanguage) =>
        currentLanguage === "es" ? "en" : "es"
      ),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
