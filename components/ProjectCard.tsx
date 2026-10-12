import React from "react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
  style?: React.CSSProperties;
  revealClassName?: string;
  revealStyle?: React.CSSProperties;
  variant?: "default" | "bento" | "portfolio";
  mediaClassName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  className,
  style,
  revealClassName,
  revealStyle,
  variant = "default",
  mediaClassName,
}) => {
  const isBento = variant === "bento";
  const isPortfolio = variant === "portfolio";
  const chips = isBento
    ? project.techStack.slice(0, 4)
    : project.techStack;
  const remainingChipCount = Math.max(0, project.techStack.length - chips.length);

  return (
    <div className={className} style={style}>
      <div className={revealClassName} style={revealStyle}>
        <div
          onClick={() => onClick(project)}
          className={`group flex h-full cursor-pointer flex-col overflow-hidden bg-white transition duration-300 ${isPortfolio ? "rounded-sm" : "rounded-[28px] border border-zinc-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_20px_60px_-32px_rgba(0,0,0,0.35)]"}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClick(project);
          }}
        >
          <div
            className={[
              mediaClassName ?? (isPortfolio ? "aspect-[1.36/1]" : isBento ? "aspect-[16/10]" : "aspect-video"),
              "relative overflow-hidden bg-zinc-100",
            ].join(" ")}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={[
                  "w-full h-full object-cover transition-transform duration-500",
                  isPortfolio && project.id === "roomsketch" ? "object-contain" : "",
                  isBento ? "group-hover:scale-[1.03]" : "group-hover:scale-105",
                ].join(" ")}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400 font-medium uppercase tracking-tight text-xs">
                Preview Available
              </div>
            )}

            {!isPortfolio && <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-white/90 backdrop-blur shadow-[0_4px_10px_-4px_rgba(24,24,27,0.2)] text-[10px] font-medium text-zinc-900 rounded-full uppercase">
                {project.type}
              </span>
            </div>}

            <div
              className={[
                "absolute inset-0 transition-opacity duration-300",
                "bg-black/0 opacity-100 transition-colors group-hover:bg-black/5",
              ].join(" ")}
            />
          </div>

          <div className={`flex flex-1 flex-col space-y-3 ${isPortfolio ? "pt-4" : "p-7 sm:p-8"}`}>
            {isPortfolio && <div className="flex flex-wrap gap-1.5">{[project.type, ...chips].slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1.5 text-[11px] font-medium text-zinc-600">{tag}</span>)}</div>}
            <h3
              className={[
                isPortfolio ? "text-[17px] font-semibold tracking-[-0.035em] text-black transition-colors" : "text-2xl font-semibold tracking-[-0.04em] text-black transition-colors",
              ].join(" ")}
            >
              {project.title}
            </h3>
            <div className={`flex-1 text-sm leading-7 text-zinc-600 ${isPortfolio ? "line-clamp-2" : "line-clamp-3"}`}>
              {project.shortDescription}
            </div>

            {!isPortfolio && <div className={isBento ? "flex flex-wrap gap-1.5 pt-4" : "flex flex-wrap gap-1.5 pt-4"}>
              {chips.map((tech) => (
                <span
                  key={tech}
                  className={[
                    "px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full",
                    "border border-zinc-200 bg-zinc-50 text-zinc-500",
                  ].join(" ")}
                >
                  {tech}
                </span>
              ))}
              {isBento && remainingChipCount > 0 && (
                <span className="px-2.5 py-1 bg-[#f4f5f6] text-[10px] font-medium text-zinc-500 uppercase tracking-wider rounded-full">
                  +{remainingChipCount}
                </span>
              )}
            </div>}

            {isBento && (
              <div className="pt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                  View project
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H9M17 7v8"
                    />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
