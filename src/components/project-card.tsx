"use client";

import { Project } from "@/types";
import { ProjectGallery } from "./project-gallery";
import { useLanguage } from "./language-provider";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const { language, t } = useLanguage();

  return (
    <article
      id={project.id}
      className="py-12 first:pt-0 last:pb-0 border-b last:border-b-0 border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
          isEven ? "" : "lg:[&>div:first-child]:order-2"
        }`}
      >
        {/* Gallery / Screenshot Showcase Column (7 cols) */}
        <div className="lg:col-span-7 w-full">
          <ProjectGallery images={project.images} projectTitle={project.title} />
        </div>

        {/* Information & Tech Specs Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-5">
          {/* Header & Tagline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                {t("Project", "Proje")} {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Project name linked directly to live website if available */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded"
              >
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:underline">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
              </a>
            ) : (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
            )}

            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {project.tagline[language]}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.description[language]}
          </p>

          {/* Key Engineering Features / Highlights */}
          {project.features?.[language]?.length > 0 && (
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
                {t("Technical Highlights", "Teknik Öne Çıkanlar")}
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                {project.features[language].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
              {t("Technologies", "Teknolojiler")}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 font-mono text-xs text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links (Live Demo only, source code button removed) */}
          {project.liveUrl && (
            <div className="pt-2 flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <span>{t("Live Demo", "Canlı Önizleme")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
