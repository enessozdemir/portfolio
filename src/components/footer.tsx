"use client";

import { useLanguage } from "./language-provider";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 transition-colors flex justify-center items-center">
      <a
        href="#hero"
        aria-label="Back to top"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
      >
        <span>{t("Top ", "Yukarı")}</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </a>
    </footer>
  );
}
