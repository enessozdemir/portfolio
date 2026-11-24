import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
