export type Language = "en" | "tr";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  images: ProjectImage[];
  technologies: string[];
  features: {
    en: string[];
    tr: string[];
  };
  liveUrl?: string;
  featured: boolean;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  role: {
    en: string;
    tr: string;
  };
  tagline: {
    en: string;
    tr: string;
  };
  bio: {
    en: string;
    tr: string;
  };
  social: SocialLinks;
}
