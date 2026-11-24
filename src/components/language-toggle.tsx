"use client";

import * as React from "react";
import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-0.5 text-xs font-mono">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en"
            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("tr")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "tr"
            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100"
        }`}
      >
        TR
      </button>
    </div>
  );
}
