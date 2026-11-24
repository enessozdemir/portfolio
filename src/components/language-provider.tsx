"use client";

import * as React from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, tr: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getLanguageSnapshot(): Language {
  const saved = localStorage.getItem("preferred-language") as Language | null;
  if (saved === "en" || saved === "tr") {
    return saved;
  }
  const browserLang = navigator.language?.toLowerCase();
  return browserLang && browserLang.startsWith("tr") ? "tr" : "en";
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred-language", lang);
    forceUpdate();
  };

  const t = (en: string, tr: string) => (language === "tr" ? tr : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
