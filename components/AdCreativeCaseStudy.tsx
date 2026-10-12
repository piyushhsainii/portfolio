import React from "react";

const creatives = [
  { src: "/aurelia-ad-review.png", alt: "Aurelia Skin review-led static ad concept" },
  { src: "/aurelia-ad-before-after.png", alt: "Aurelia Skin before and after static ad concept" },
  { src: "/aurelia-ad-product.png", alt: "Aurelia Skin product and ingredient static ad concept" },
  { src: "/aurelia-ad-lifestyle.png", alt: "Aurelia Skin morning routine lifestyle static ad concept" },
];

const AdCreativeCaseStudy: React.FC = () => (
  <article className="border-t border-zinc-200 pt-12">
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Creative case study · Aurelia Skin</p>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black sm:text-4xl">One product. Four reasons to stop scrolling.</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">A concept campaign for a peptide serum, built around different customer motivations. Each static ad gives the same product a distinct story—from relatable review humor to visible results, ingredient confidence, and a feel-good morning ritual.</p>
    </div>

    <div className="mb-8 overflow-hidden rounded-sm bg-[#fbf5ef]">
      <img src="/aurelia-case-study.png" alt="Aurelia Skin static ad campaign case study and creative overview" loading="lazy" className="mx-auto max-h-[640px] w-full object-contain" />
    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {creatives.map((creative) => (
        <figure key={creative.src} className="overflow-hidden rounded-sm bg-zinc-100">
          <img src={creative.src} alt={creative.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
        </figure>
      ))}
    </div>

    <div className="mt-7 grid gap-5 border-t border-zinc-100 pt-6 sm:grid-cols-3">
      <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">The brief</p><p className="mt-2 text-sm leading-6 text-zinc-700">Make a premium skincare serum feel desirable, approachable, and easy to understand in a single glance.</p></div>
      <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">The approach</p><p className="mt-2 text-sm leading-6 text-zinc-700">Explore four distinct creative hooks while keeping product, palette, and brand cues consistent across the set.</p></div>
      <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">The deliverable</p><p className="mt-2 text-sm leading-6 text-zinc-700">A cohesive set of static social ad concepts ready to adapt for paid and organic placements.</p></div>
    </div>
  </article>
);

export default AdCreativeCaseStudy;
