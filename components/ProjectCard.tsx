
import React from "react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
  style?: React.CSSProperties;
  revealClassName?: string;
  revealStyle?: React.CSSProperties;
  variant?: "default" | "bento";
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
  const chips = isBento
    ? project.techStack.slice(0, 4)
    : project.techStack;
  const remainingChipCount = Math.max(0, project.techStack.length - chips.length);

  return (
    <div className={className} style={style}>
      <div className={revealClassName} style={revealStyle}>
        <div
          onClick={() => onClick(project)}
          className={[
            "group cursor-pointer overflow-hidden flex flex-col h-full",
            isBento
              ? "bg-white border border-zinc-100 rounded-[28px] shadow-sm hover:shadow-xl transition-shadow duration-200"
              : "bg-white border border-zinc-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1",
          ].join(" ")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClick(project);
          }}
        >
          <div
            className={[
              mediaClassName ?? (isBento ? "aspect-[16/10]" : "aspect-video"),
              "bg-zinc-100 relative overflow-hidden",
            ].join(" ")}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={[
                  "w-full h-full object-cover transition-transform duration-500",
                  isBento ? "group-hover:scale-[1.03]" : "group-hover:scale-105",
                ].join(" ")}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                Preview Available
              </div>
            )}

            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-white/90 backdrop-blur shadow-sm text-[10px] font-bold text-zinc-900 rounded uppercase">
                {project.type}
              </span>
            </div>

            <div
              className={[
                "absolute inset-0 transition-opacity duration-300",
                isBento
                  ? "bg-gradient-to-b from-black/0 via-black/0 to-black/10 opacity-100"
                  : "bg-black/0 group-hover:bg-black/5 opacity-100",
              ].join(" ")}
            />
          </div>

          <div className={isBento ? "p-6 space-y-2 flex-1 flex flex-col" : "p-5 space-y-2 flex-1 flex flex-col"}>
            <h3
              className={[
                "font-sans text-zinc-900 transition-colors",
                isBento ? "text-xl tracking-tight" : "text-lg",
                "group-hover:text-blue-600",
              ].join(" ")}
            >
              {project.title}
            </h3>
            <p className={isBento ? "text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1" : "text-zinc-500 text-sm line-clamp-2 flex-1"}>
              {project.shortDescription}
            </p>

            <div className={isBento ? "flex flex-wrap gap-1.5 pt-4" : "flex flex-wrap gap-1.5 pt-4"}>
              {chips.map((tech) => (
                <span
                  key={tech}
                  className={[
                    "px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded",
                    isBento
                      ? "bg-zinc-50 border border-zinc-100 text-zinc-500"
                      : "bg-zinc-50 border border-zinc-100 text-zinc-400",
                  ].join(" ")}
                >
                  {tech}
                </span>
              ))}
              {isBento && remainingChipCount > 0 && (
                <span className="px-2 py-0.5 bg-zinc-50 border border-zinc-100 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider rounded">
                  +{remainingChipCount}
                </span>
              )}
            </div>

            {isBento && (
              <div className="pt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                  View project
                </span>
                <span className="w-10 h-10 rounded-full border border-zinc-100 bg-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg
                    className="w-4 h-4 text-zinc-700"
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
