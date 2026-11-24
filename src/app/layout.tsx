import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const basePath = "/portfolio";

export const metadata: Metadata = {
  title: "Enes Özdemir",
  description: "Enes Özdemir",
  authors: [{ name: "Enes Özdemir" }],
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Enes Özdemir | Software Engineer / Full-Stack Developer",
    description: "Building resilient web applications and high-throughput systems with clean architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Enes Özdemir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enes Özdemir | Software Engineer / Full-Stack Developer",
    description: "Building resilient web applications and high-throughput systems with clean architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="stylesheet" href={`${basePath}/output.css`} />
      </head>
      <body className="font-sans min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
