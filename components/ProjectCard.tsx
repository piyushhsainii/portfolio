
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="aspect-video bg-zinc-100 relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>
      <div className="p-5 space-y-2 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm line-clamp-2 flex-1">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 bg-zinc-50 border border-zinc-100 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
