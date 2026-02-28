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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
            Work projects
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {visibleProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onProjectClick}
            variant="bento"
            className={getBentoOffsetClassName(idx)}
            {...withReveal(idx)}
          />
        ))}
      </div>

      {!expanded && projects.length > 4 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400 hover:text-zinc-700 transition-colors"
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
