import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <PortfolioSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <Footer />
    </main>
  );
}
