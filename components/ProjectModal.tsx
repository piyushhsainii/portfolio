
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
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-zinc-100 text-[10px] font-bold text-zinc-500 rounded uppercase">
              {project.type}
            </span>
            <h2 className="text-xl font-bold text-zinc-900">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* Media Preview */}
          <div className="rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
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
              <section>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Overview</h3>
                <p className="text-zinc-700 leading-relaxed text-sm">{project.fullDescription}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Problem Statement</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{project.problemStatement}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Solution & Approach</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{project.solution}</p>
              </section>

              <section>
                <h3 className="text-sm text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Key Outcomes</h3>
                <ul className="">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-700">
                      <span className="text-blue-500 text-sm mt-1.5">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-2">
              <section>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Role</h3>
                <p className="text-zinc-800 font-medium">{project.role}</p>
              </section>

              <section className="pt-4 border-t border-zinc-100">
                <div className="flex flex-col gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-colors"
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
                      className="flex items-center justify-center gap-2 w-full py-3 border border-zinc-200 text-zinc-900 rounded-xl font-bold hover:bg-zinc-50 transition-colors"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
