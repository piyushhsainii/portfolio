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

      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-[#f4f4f2] font-sans shadow-[0_30px_80px_-24px_rgba(0,0,0,0.45)]">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-[#f4f4f2]/95 p-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              {project.type}
            </span>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-black">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-zinc-200 bg-white p-2 text-zinc-500 transition hover:border-black hover:text-black"
          >
            <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8 overflow-y-auto p-6 sm:p-8">
          {/* Media Preview */}
          <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100">
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
                className={`w-full h-auto aspect-video ${project.id === "roomsketch" ? "bg-zinc-100 object-contain" : "object-cover"}`}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Overview</h3>
                <p className="text-sm leading-7 text-zinc-600">{project.fullDescription}</p>
              </section>

              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Problem Statement</h3>
                <p className="text-sm leading-7 text-zinc-600">{project.problemStatement}</p>
              </section>

              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Solution & Approach</h3>
                <p className="text-sm leading-7 text-zinc-600">{project.solution}</p>
              </section>

              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Key Outcomes</h3>
                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-700 text-sm">
                      <span className="mt-1 text-black">•</span><span className="text-sm leading-6 text-zinc-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-4">
              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-zinc-200 bg-white p-6">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Role</h3>
                <p className="text-sm font-semibold text-black">{project.role}</p>
              </section>

              <section className="space-y-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
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
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white py-3 text-sm font-bold text-black transition hover:border-black"
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
