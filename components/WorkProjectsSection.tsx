import React, { useMemo, useState } from "react";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface WorkProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  shouldAnimateOnMount?: boolean;
}

const WorkProjectsSection: React.FC<WorkProjectsSectionProps> = ({
  projects,
  onProjectClick,
  shouldAnimateOnMount = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = useMemo(() => {
    return expanded ? projects : projects.slice(0, 4);
  }, [expanded, projects]);

  const shouldRevealOnMount = shouldAnimateOnMount && !expanded;

  const withReveal = (index: number) => {
    if (!shouldRevealOnMount)
      return { revealClassName: undefined, revealStyle: undefined };
    const delay = Math.min(index, 8) * 90;
    return {
      revealClassName: "ps-reveal-up",
      revealStyle: { animationDelay: `${delay}ms` } as React.CSSProperties,
    };
  };

  const getBentoOffsetClassName = (index: number) => {
    const pos = index % 4;
    if (pos === 1) return "md:mt-10";
    if (pos === 2) return "md:mt-2";
    if (pos === 3) return "md:mt-6";
    return "";
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">A few things I’ve made</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">
            Products, made real.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-6 md:gap-y-11">
        {visibleProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onProjectClick}
            variant="portfolio"
            {...withReveal(idx)}
          />
        ))}
      </div>

      {!expanded && projects.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 transition hover:border-black hover:text-black"
          >
            View more
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkProjectsSection;
