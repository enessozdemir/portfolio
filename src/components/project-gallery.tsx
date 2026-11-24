"use client";

import * as React from "react";
import Image from "next/image";
import { ProjectImage } from "@/types";
import { Image as ImageIcon } from "lucide-react";

interface ProjectGalleryProps {
  images?: ProjectImage[];
  projectTitle: string;
}

export function ProjectGallery({ images = [], projectTitle }: ProjectGalleryProps) {
  const [hasError, setHasError] = React.useState(false);

  const currentImage = images.length > 0 ? images[0] : null;

  return (
    <div className="space-y-3">
      {/* Main Image Container preserving natural aspect ratio without distortion or cropping */}
      <div className="relative group overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 shadow-xs flex items-center justify-center">
        {currentImage && !hasError ? (
          <div className="relative w-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={2938}
              height={1580}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
              className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
              onError={() => setHasError(true)}
            />
          </div>
        ) : (
          /* Single Image Placeholder */
          <div className="relative w-full aspect-[2938/1580] flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="space-y-3 z-0">
              <div className="mx-auto p-3.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 text-zinc-500 dark:text-zinc-400 w-fit">
                <ImageIcon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                  {projectTitle} — Screenshot
                </p>
                <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  Awaiting project photo
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption if provided */}
      {currentImage?.caption && !hasError && (
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono italic line-clamp-1 px-1">
          {currentImage.caption}
        </p>
      )}
    </div>
  );
}
