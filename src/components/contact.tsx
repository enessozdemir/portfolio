"use client";

import { personalInfo } from "@/data/projects";
import { useLanguage } from "./language-provider";
import { ArrowUpRight } from "lucide-react";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {t("Get in Touch", "İletişime Geç")}
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t(
                "Whether you are discussing engineering opportunities, seeking architecture consultations, or interested in collaborating on challenging technical problems, my inbox is open.",
                "Yeni iş fırsatları, mimari danışmanlık veya teknik projelerde iş birliği için dilediğiniz zaman iletişime geçebilirsiniz."
              )}
            </p>
          </div>

          {/* Single row using full container width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 w-full">
            {/* 1. LinkedIn */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                  <PiLinkedinLogo className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">LinkedIn</div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline truncate">
                    {t("Profile", "Bağlantı Kur")}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 ml-2" />
            </a>

            {/* 2. GitHub */}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                  <PiGithubLogo className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">GitHub</div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline truncate">
                    {t("Repositories", "Depolar")}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 ml-2" />
            </a>

            {/* 3. Email */}
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="group p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                  <HiOutlineMail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Email</div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline truncate">
                    {personalInfo.social.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
