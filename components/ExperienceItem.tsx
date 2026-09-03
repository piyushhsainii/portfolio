import React from "react";
import { Experience } from "../types";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="group bg-white rounded-[24px] p-4 shadow-[0_8px_24px_-8px_rgba(24,24,27,0.12)] hover:shadow-[0_14px_32px_-8px_rgba(24,24,27,0.18)] transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(24,24,27,0.15)] overflow-hidden">
            {experience.logoUrl ? (
              <img
                src={experience.logoUrl}
                alt={experience.company}
                className="w-16 h-16 object-contain"
              />
            ) : (
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <span>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">
                  {experience.company} <span className="text-sm font-semibold text-zinc-700/80 tracking-tight  smallcase">
                    ({experience.role})
                  </span>
                </h3>

              </div>
            </span>

            <div className="shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f4f5f6] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                {experience.duration}
              </span>
            </div>
          </div>

          <p className="text-sm  tracking-tight text-zinc-600 leading-relaxed max-w-2xl">
            {experience.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#f4f5f6] text-[11px] font-bold text-zinc-500 rounded-full"
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
