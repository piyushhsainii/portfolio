import React, { useState, useCallback, useMemo } from "react";
import { TabType, Project } from "./types";
import { PROJECTS, EXPERIENCES, USER_DATA } from "./constants";
import Header from "./components/Header";
import ProfileHero from "./components/ProfileHero";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import ExperienceItem from "./components/ExperienceItem";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.ABOUT);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case TabType.WORK:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        );
      case TabType.EXPERIENCE:
        return (
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-2 duration-300">
            {EXPERIENCES.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        );
      case TabType.ABOUT:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AboutSection />
          </div>
        );
      case TabType.ACHIEVEMENTS:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AchievementsSection />
          </div>
        );
      default:
        return null;
    }
  }, [activeTab, handleProjectClick]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-5 pb-20">
        {/* Profile Hero Section */}
        <ProfileHero />

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-8 border-b border-zinc-100 mb-10 mt-12 overflow-x-auto no-scrollbar">
          {(Object.values(TabType) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative capitalize whitespace-nowrap ${
                activeTab === tab
                  ? "text-zinc-900"
                  : "text-[#94a3b8] hover:text-zinc-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Dynamic Section Rendering */}
        <section className="min-h-[60vh]">{renderContent}</section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-100">
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
