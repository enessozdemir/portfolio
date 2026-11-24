"use client";

import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { useLanguage } from "./language-provider";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-2">
          <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
            {t("Portfolio Showcase", "Portfolyo Projeleri")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            {t("Selected Projects", "Öne Çıkan Projeler")}
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            {t(
              "A curated selection of web applications, system architectures, and developer tooling built with TypeScript, Next.js, and modern technologies.",
              "TypeScript, Next.js ve modern teknolojilerle geliştirilmiş web uygulamaları, sistem mimarileri ve yazılım projeleri."
            )}
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
