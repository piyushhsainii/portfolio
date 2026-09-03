import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-200">
      <div
        className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-[#f4f5f6] rounded-[32px] shadow-[0_30px_70px_-15px_rgba(24,24,27,0.35)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/70 bg-[#f4f5f6]/90 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white text-[10px] font-medium text-zinc-500 rounded-full uppercase shadow-[0_2px_6px_-2px_rgba(24,24,27,0.15)]">
              {project.type}
            </span>
            <h2 className="text-xl font-medium text-zinc-900">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white rounded-full shadow-[0_2px_8px_-2px_rgba(24,24,27,0.15)] hover:shadow-[0_4px_12px_-2px_rgba(24,24,27,0.22)] transition-shadow"
          >
            <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* Media Preview */}
          <div className="rounded-[24px] overflow-hidden bg-zinc-100 shadow-[0_10px_30px_-10px_rgba(24,24,27,0.2)]">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto aspect-video object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover aspect-video"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Overview</h3>
                <p className="text-zinc-700 leading-relaxed text-sm">{project.fullDescription}</p>
              </section>

              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Problem Statement</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{project.problemStatement}</p>
              </section>

              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Solution & Approach</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{project.solution}</p>
              </section>

              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Key Outcomes</h3>
                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-700 text-sm">
                      <span className="text-blue-500 text-sm mt-1">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-4">
              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#f4f5f6] text-zinc-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-[20px] p-5 shadow-[0_6px_20px_-10px_rgba(24,24,27,0.15)]">
                <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Role</h3>
                <p className="text-zinc-800 font-medium text-sm">{project.role}</p>
              </section>

              <section className="space-y-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 text-white rounded-full font-medium shadow-[0_10px_24px_-8px_rgba(24,24,27,0.4)] hover:bg-zinc-800 transition-colors"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-zinc-900 rounded-full font-medium shadow-[0_6px_18px_-6px_rgba(24,24,27,0.2)] hover:shadow-[0_8px_22px_-6px_rgba(24,24,27,0.28)] transition-shadow"
                  >
                    GitHub Repo
                  </a>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;