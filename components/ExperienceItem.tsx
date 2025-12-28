
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-12 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-[23px] top-4 bottom-0 w-[2px] bg-zinc-100 group-last:bg-transparent" />
      
      {/* Logo/Dot Container */}
      <div className="absolute left-0 top-1.5 w-12 h-12 rounded-xl border border-zinc-100 bg-white flex items-center justify-center shadow-sm z-10 overflow-hidden">
        {experience.logoUrl ? (
          <img src={experience.logoUrl} alt={experience.company} className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-3 h-3 rounded-full bg-zinc-300" />
        )}
      </div>

      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-zinc-900">{experience.role}</h3>
          <span className="text-sm font-semibold text-zinc-400 bg-zinc-50 px-2 py-1 rounded">{experience.duration}</span>
        </div>
        <div className="text-blue-600 font-bold text-lg">{experience.company}</div>
        <p className="text-zinc-600 mt-4 leading-relaxed max-w-2xl text-lg">
          {experience.summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-4">
          {experience.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-white border border-zinc-100 text-xs font-bold text-zinc-500 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
