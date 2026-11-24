"use client";

import { personalInfo } from "@/data/projects";
import { useLanguage } from "./language-provider";
import { ArrowRight, Terminal } from "lucide-react";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="pt-20 pb-24 md:pt-32 md:pb-36 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>{t("Available for engineering challenges", "Yeni projelere ve iş birliklerine açık")}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
              {personalInfo.role[language]}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {personalInfo.bio[language]}
          </p>

          {/* CTAs & Socials */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <span>{t("Explore Projects", "Projeleri İncele")}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <span>{t("Get in Touch", "İletişime Geç")}</span>
            </a>

            {/* Quick links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <PiLinkedinLogo className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <PiGithubLogo className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.social.email}`}
                aria-label="Send Email"
                className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <HiOutlineMail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
