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
            "group cursor-pointer overflow-hidden flex flex-col h-full bg-white",
            isBento
              ? "rounded-[28px] shadow-[0_10px_30px_-10px_rgba(24,24,27,0.15)] hover:shadow-[0_18px_40px_-12px_rgba(24,24,27,0.25)] transition-shadow duration-200"
              : "rounded-[20px] shadow-[0_8px_24px_-10px_rgba(24,24,27,0.15)] hover:shadow-[0_16px_34px_-10px_rgba(24,24,27,0.22)] transition-all duration-200 hover:-translate-y-1",
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
              <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400 font-medium uppercase tracking-tight text-xs">
                Preview Available
              </div>
            )}

            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-white/90 backdrop-blur shadow-[0_4px_10px_-4px_rgba(24,24,27,0.2)] text-[10px] font-medium text-zinc-900 rounded-full uppercase">
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
                isBento ? "text-xl tracking-tight" : "text-xl",
                "group-hover:text-blue-600 font-serif font-medium ",
              ].join(" ")}
            >
              {project.title}
            </h3>
            <div className={isBento ? "text-zinc-700 text-base leading-relaxed line-clamp-3 flex-1" : "text-zinc-700 text-lg tracking-tight line-clamp-2 flex-1"}>
              {project.shortDescription}
            </div>

            <div className={isBento ? "flex flex-wrap gap-1.5 pt-4" : "flex flex-wrap gap-1.5 pt-4"}>
              {chips.map((tech) => (
                <span
                  key={tech}
                  className={[
                    "px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full",
                    "bg-[#f4f5f6] text-zinc-500",
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
            </div>

            {isBento && (
              <div className="pt-5 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-tight text-zinc-400">
                  View project
                </span>
                <span className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_-4px_rgba(24,24,27,0.18)] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
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