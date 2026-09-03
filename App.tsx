import React, { useState, useCallback } from "react";
import { Project } from "./types";
import { PROJECTS, EXPERIENCES, USER_DATA } from "./constants";
import Header from "./components/Header";
import ProfileHero from "./components/ProfileHero";
import ProjectModal from "./components/ProjectModal";
import ExperienceItem from "./components/ExperienceItem";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import WorkProjectsSection from "./components/WorkProjectsSection";
import AssistantWidget from "./components/AssistantWidget";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-5 pb-20">
        {/* Profile Hero Section */}
        <ProfileHero />

        <section className="pt-6">
          <div className="flex flex-col gap-16">
            <div>
              <AboutSection />
            </div>

            <div id="experience">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                  Work experience
                </h2>
                <div className="mt-3 h-px bg-zinc-100" />
              </div>
              <div className="max-w-4xl">
                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <ExperienceItem key={exp.id} experience={exp} />
                  ))}
                </div>
              </div>
            </div>

            <div id="projects">
              <WorkProjectsSection
                projects={PROJECTS}
                onProjectClick={handleProjectClick}
                shouldAnimateOnMount
              />
            </div>

            <div id="achievements">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                  Achievements
                </h2>
                <div className="mt-3 h-px bg-zinc-100" />
              </div>
              <AchievementsSection />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-white/70">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-zinc-900 font-bold text-lg">{USER_DATA.name}</p>
            <p className="text-zinc-400 text-sm font-medium">
              Built with Engineering Precision. © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href={USER_DATA.contact.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              X (Twitter)
            </a>
            <a
              href={USER_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href={USER_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={closeProjectModal} />

    </div>
  );
};

export default App;
