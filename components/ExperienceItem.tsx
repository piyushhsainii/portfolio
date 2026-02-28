import React from "react";
import { Experience } from "../types";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="group bg-white border border-zinc-100 rounded-2xl p-6 sm:p-7 hover:shadow-sm transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-2xl border border-zinc-100 bg-white flex items-center justify-center shadow-sm overflow-hidden">
            {experience.logoUrl ? (
              <img
                src={experience.logoUrl}
                alt={experience.company}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">
                {experience.company}
              </h3>
              <div className="text-sm sm:text-base font-semibold text-zinc-900/80 tracking-tight mt-0.5">
                {experience.role}
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                {experience.duration}
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
            {experience.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-zinc-100 text-[11px] font-bold text-zinc-500 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
