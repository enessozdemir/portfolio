"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "./language-provider";
import { personalInfo } from "@/data/projects";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("Home", "Ana Sayfa"), href: "#hero" },
    { label: t("Projects", "Projeler"), href: "#projects" },
    { label: t("Contact", "İletişim"), href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-zinc-900 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
          <span className="font-semibold">{personalInfo.name}</span>
          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600 text-xs">/ dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Language and Theme Toggles */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="p-1.5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
