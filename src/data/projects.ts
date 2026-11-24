import { PersonalInfo, Project } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Enes Özdemir",
  role: {
    en: "Software Engineer",
    tr: "Yazılım Mühendisi",
  },
  tagline: {
    en: "Building resilient web applications and high-throughput systems with clean architecture.",
    tr: "Temiz mimari ile dayanıklı web uygulamaları ve yüksek performanslı sistemler geliştiriyorum.",
  },
  bio: {
    en: "Software Engineer focused on architecting modern, performant web applications and distributed backends. Passionate about clean code, robust system design, and intuitive user experiences.",
    tr: "Modern, yüksek performanslı web uygulamaları ve dağıtık arka uç mimarileri geliştirmeye odaklanan Yazılım Mühendisi. Temiz kod, sağlam sistem tasarımı ve kullanıcı deneyimi konularında tutkulu.",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/enessozdemir/",
    github: "https://github.com/enessozdemir",
    email: "eness.ozdemir@outlook.com",
  },
};

export const projectsData: Project[] = [
  {
    id: "landatolye",
    title: "Land Atölye",
    tagline: {
      en: "Landscape architecture and design atelier showcase",
      tr: "Peyzaj mimarlığı ve tasarım atölyesi platformu",
    },
    description: {
      en: "A modern showcase website for landscape architecture and design projects. Built with responsive layouts, rich visual project presentations, and clean technical navigation.",
      tr: "Peyzaj mimarlığı ve çevre tasarım projeleri için geliştirilmiş modern tanıtım platformu. Responsive düzenler, zengin görsel proje sunumları ve sade navigasyon sunar.",
    },
    images: [
      {
        src: "/images/landatolye/land-1.png",
        alt: "Land Atölye Screenshot",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: {
      en: [
        "Responsive portfolio gallery with optimized image rendering",
        "Fast page transitions and modern design language",
        "Clean project overview sections tailored for client presentation",
      ],
      tr: [
        "Optimize edilmiş görsel yüklemeye sahip responsive portfolyo galerisi",
        "Hızlı sayfa geçişleri ve modern tasarım dili",
        "Müşteri sunumuna özel hazırlanmış sade proje detay bölümleri",
      ],
    },
    liveUrl: "https://landatolye.vercel.app/",
    featured: true,
  },
  {
    id: "taner-peyzaj",
    title: "Taner Peyzaj",
    tagline: {
      en: "Modern web platform for landscape architecture services",
      tr: "Peyzaj mimarlığı hizmetleri için modern web platformu",
    },
    description: {
      en: "A minimalist, responsive website developed to showcase professional landscape architecture services. Built with Next.js, TypeScript, and Tailwind CSS, the platform presents service offerings and project portfolios through a clean visual layout and intuitive navigation.",
      tr: "Profesyonel peyzaj mimarlığı hizmetlerini tanıtmak amacıyla geliştirilen minimalist ve responsive bir web sitesi. Next.js, TypeScript ve Tailwind CSS ile oluşturulan platform, hizmetleri ve proje portföyünü sade bir görsel tasarım ve kullanıcı dostu navigasyon ile sunmaktadır.",
    },
    images: [
      {
        src: "/images/tanerpeyzaj/taner-1.png",
        alt: "Taner Peyzaj Screenshot",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    features: {
      en: [
        "Responsive design optimized for desktop, tablet, and mobile devices",
        "Dedicated sections for project portfolios, service descriptions, and contact information",
        "Smooth animations and visual transitions for an enhanced browsing experience",
        "Minimalist interface with intuitive navigation and a consistent visual design"
      ],
      tr: [
        "Masaüstü, tablet ve mobil cihazlar için optimize edilmiş responsive tasarım",
        "Proje portföyü, hizmet açıklamaları ve iletişim bilgileri için özel sayfalar ve bölümler",
        "Geliştirilmiş kullanıcı deneyimi sağlayan akıcı animasyonlar ve görsel geçişler",
        "Kullanıcı dostu navigasyon ve tutarlı görsel tasarıma sahip minimalist arayüz"
      ],
    },
    liveUrl: "https://tanerpeyzaj.vercel.app/",
    featured: true,
  },
  {
    id: "muhendis-berber",
    title: "Mühendis Berber",
    tagline: {
      en: "Full-stack barbershop management and appointment platform",
      tr: "Full-stack berber yönetimi ve randevu platformu",
    },
    description: {
      en: "A full-stack management platform designed to streamline barbershop operations. Built with React, TypeScript, and Node.js, the application provides appointment and customer management, financial tracking, and an interactive dashboard for monitoring business performance.",
      tr: "Berber işletmelerinin operasyonlarını kolaylaştırmak için geliştirilen full-stack bir yönetim platformu. React, TypeScript ve Node.js kullanılarak geliştirilen uygulama; randevu ve müşteri yönetimi, finansal takip ve işletme performansını izlemeye yönelik interaktif bir dashboard sunmaktadır.",
    },
    images: [
      {
        src: "/images/muhendisberber/muhendis-1.png",
        alt: "Mühendis Berber Screenshot",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Supabase",
      "Vitest"
    ],
    features: {
      en: [
        "Modular frontend architecture with reusable components and centralized state management",
        "Layered REST API with authentication, role-based authorization, validation, logging, and centralized error handling",
        "Financial dashboard with daily, monthly, and yearly income and expense analytics",
        "Appointment and customer management with Supabase-powered data storage",
        "Unit and integration testing across frontend and backend"
      ],
      tr: [
        "Yeniden kullanılabilir bileşenler ve merkezi state yönetimi ile modüler frontend mimarisi",
        "Kimlik doğrulama, rol tabanlı yetkilendirme, veri doğrulama, loglama ve merkezi hata yönetimi içeren katmanlı REST API",
        "Günlük, aylık ve yıllık gelir-gider analizleri sunan finansal dashboard",
        "Supabase tabanlı veri yönetimi ile randevu ve müşteri takibi",
        "Frontend ve backend genelinde unit ve integration testleri"
      ],
    },
    liveUrl: "https://muhendisberber.up.railway.app/",
    featured: true,
  },
];
