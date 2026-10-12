import React from "react";
import AdCreativeCaseStudy from "./AdCreativeCaseStudy";

const designProjects = [
  {
    name: "InvitePost",
    type: "Product design · Motion",
    description: "A warm, tactile invitation experience that makes creating a card and sharing it feel like part of the celebration.",
    image: "/invitepost-design.png",
    video: "/invitepost-showcase.mp4",
    tags: ["Product UI", "Brand", "Motion"],
  },
  {
    name: "Loop",
    type: "SaaS website · Motion",
    description: "A dark, editorial landing page for a learning product, pairing a clear visual system with motion-led storytelling.",
    image: "/loop-design.png",
    video: "/loop-walkthrough.mp4",
    tags: ["Web design", "Art direction", "Motion"],
  },
  {
    name: "Loop · Retention cards",
    type: "Motion study",
    description: "A small motion study that turns a learning habit into a progress story you can understand at a glance.",
    image: "/loop-cards-design.png",
    video: "/loop-cards.mp4",
    tags: ["Motion design", "Product storytelling", "SaaS"],
  },
  {
    name: "Ironclad Labs",
    type: "Brand website",
    description: "A calm, technical identity and service experience for a team building practical workflow automation.",
    image: "/ironclad-design.png",
    tags: ["Web design", "Visual identity", "UX"],
  },
  {
    name: "Alder & Oak",
    type: "SaaS website concept",
    description: "A premium renovation brand concept focused on trust, considered materials, and a guided customer journey.",
    image: "/alder-oak-design.png",
    tags: ["Web design", "Art direction", "Responsive"],
  },
];

const DesignWorkSection: React.FC = () => (
  <div className="space-y-16">
    <section>
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Design work</p>
        <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">Thoughtful details, clear direction.</h2>
        <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">Selected product interfaces, brand worlds, and website concepts—designed to feel considered and work beautifully.</p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {designProjects.map((project) => (
          <article key={project.name} className="group min-w-0">
            <div className="relative aspect-[1.36/1] overflow-hidden rounded-sm bg-zinc-100">
              {project.video ? (
                <video src={project.video} poster={project.image} autoPlay muted loop playsInline aria-label={`${project.name} design walkthrough`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              ) : (
                <img src={project.image} alt={`${project.name} website design`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1.5 text-[11px] font-medium text-zinc-600">{tag}</span>)}
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <h3 className="text-[17px] font-semibold tracking-tight text-zinc-950">{project.name}</h3>
              <span className="text-right text-xs text-zinc-500">{project.type}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{project.description}</p>
          </article>
        ))}
      </div>
    </section>

    <AdCreativeCaseStudy />
  </div>
);

export default DesignWorkSection;
