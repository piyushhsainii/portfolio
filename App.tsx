import React, { useCallback, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import { Project } from "./types";
import { PROJECTS, USER_DATA } from "./constants";
import ProjectModal from "./components/ProjectModal";
import WorkProjectsSection from "./components/WorkProjectsSection";
import ServicesSection from "./components/ServicesSection";
import DesignWorkSection from "./components/DesignWorkSection";
import CreativeStrategySection from "./components/CreativeStrategySection";

type PortfolioPanel = "work" | "design" | "strategy" | "services";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activePanel, setActivePanel] = useState<PortfolioPanel>(() => {
    const section = new URLSearchParams(window.location.search).get("section");
    return section === "work" || section === "design" || section === "strategy" || section === "services" ? section : "services";
  });
  const handleProjectClick = useCallback((project: Project) => setSelectedProject(project), []);
  const closeProjectModal = useCallback(() => setSelectedProject(null), []);
  const showWork = useCallback(() => {
    setActivePanel("work");
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => document.getElementById("work")?.scrollTo({ top: 0, behavior: "smooth" })));
  }, []);

  if (window.location.pathname === "/services") {
    return <div className="min-h-screen bg-white"><main className="mx-auto max-w-6xl px-6"><ServicesSection standalone /></main><footer className="mx-auto max-w-6xl border-t border-zinc-200 px-6 py-10 text-sm text-zinc-500"><a href="/">← Back to portfolio</a></footer></div>;
  }

  return (
    <div className="portfolio-shell min-h-screen bg-white text-zinc-950 lg:h-screen lg:overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-[1720px] grid-cols-1 lg:h-screen lg:grid-cols-[minmax(360px,0.76fr)_minmax(0,1.55fr)]">
        <aside className="relative flex flex-col border-b border-zinc-200 px-7 py-8 sm:px-10 lg:h-screen lg:border-b-0 lg:border-r lg:px-12 lg:py-9 xl:px-16">
          <div className="flex items-center justify-end gap-2 text-xs font-medium text-zinc-600"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />Available for select projects</div>

          <div className="my-12 sm:my-16 lg:my-auto lg:py-12">
            <img src={USER_DATA.avatarUrl} alt={USER_DATA.name} className="mb-5 h-[76px] w-[76px] rounded-full border border-zinc-200 bg-zinc-100 object-cover" />
            <p className="text-xl font-semibold tracking-tight">{USER_DATA.name}</p>
            <a href={USER_DATA.contact.x} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-zinc-500 transition hover:text-black">@piyushsainii</a>

            <h1 className="mt-9 max-w-xl text-[clamp(2rem,4vw,3.35rem)] leading-[1.08] tracking-[-0.055em] text-zinc-500">I build <span className="font-semibold text-zinc-950">products and websites</span> that turn good ideas into things people love using.</h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-zinc-600">I bring design, engineering, and creative strategy together—from useful products and polished websites to research-led campaigns that give brands a clear direction.</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://calendly.com/sainipiyush8860/bizpilot-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700">Book my call <ArrowUpRight size={16} /></a>
              <a href="#work" onClick={(event) => { event.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-200">Explore work <ArrowDown size={15} /></a>
            </div>
            <button type="button" onClick={() => { setActivePanel("strategy"); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-black">Explore my creative strategy work <ArrowUpRight size={14} /></button>
          </div>

          <div className="mt-auto pb-3">
            <h2 className="text-lg font-semibold tracking-tight">Have a project in mind? Let’s chat.</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={USER_DATA.contact.x} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200">X / Twitter</a>
              <a href={USER_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200">LinkedIn</a>
              <a href={USER_DATA.contact.contra} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200">Contra</a>
              <a href="mailto:sainipiyush8860@gmail.com" className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200"><Mail size={14} />Email</a>
              <a href={USER_DATA.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200"><Github size={15} /></a>
            </div>
          </div>
        </aside>

        <main id="work" className="work-scroll min-h-0 scroll-smooth px-5 py-7 sm:px-9 sm:py-9 lg:h-screen lg:overflow-y-auto lg:px-10 xl:px-14">
          <div className="sticky top-0 z-20 -mx-5 -mt-7 mb-8 border-b border-zinc-100 bg-white/95 px-5 pb-4 pt-7 backdrop-blur sm:-mx-9 sm:px-9 lg:-mx-10 lg:px-10 xl:-mx-14 xl:px-14">
            <div className="flex w-fit max-w-full flex-wrap rounded-3xl bg-zinc-100 p-1 text-sm" role="tablist" aria-label="Portfolio sections">
              {([
                ["services", "What I do"],
                ["work", "Work"],
                ["strategy", "Creative strategy"],
                ["design", "Design"],
              ] as const).map(([panel, label]) => (
                <button key={panel} type="button" role="tab" aria-selected={activePanel === panel} onClick={() => setActivePanel(panel)} className={`rounded-full px-5 py-2 transition-colors ${activePanel === panel ? "bg-zinc-950 font-medium text-white shadow-sm" : "text-zinc-500 hover:text-zinc-950"}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          {activePanel === "work" && <section id="projects" className="pb-16"><WorkProjectsSection projects={PROJECTS} onProjectClick={handleProjectClick} shouldAnimateOnMount /></section>}
          {activePanel === "design" && <section className="pb-16"><DesignWorkSection /></section>}
          {activePanel === "strategy" && <section className="pb-16"><CreativeStrategySection /></section>}
          {activePanel === "services" && <section className="pb-16"><ServicesSection onShowWork={showWork} onShowStrategy={() => { setActivePanel("strategy"); document.getElementById("work")?.scrollTo({ top: 0, behavior: "smooth" }); }} /></section>}
          <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500">{USER_DATA.name} · Building products and websites with care.</footer>
        </main>
      </div>
      <ProjectModal project={selectedProject} onClose={closeProjectModal} />
    </div>
  );
};

export default App;
