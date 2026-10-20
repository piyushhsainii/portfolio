import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { strandvale } from "./strandvaleData";

const root = "/strandvale/";

const CreativeStrategySection: React.FC = () => {
  const [concept, setConcept] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleAds = strandvale.ads.filter((ad) => concept === "All" || ad.concept === concept);

  return <div className="space-y-12">
    <header className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Creative strategist</p>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Research into direction.<br />Direction into creative.</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">I turn audience questions into campaign ideas, messaging, and creative briefs. My work connects category research, customer objections, awareness stages, and visual storytelling to a clear plan for what to test next.</p>
      <div className="mt-5 flex flex-wrap gap-2">{["Audience research", "Creative concepts", "Copy & art direction", "Testing strategy"].map((item) => <span key={item} className="rounded-full bg-zinc-100 px-3 py-2 text-xs text-zinc-600">{item}</span>)}</div>
    </header>

    <article className="space-y-10">
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-[#111]">
        <img src={root + "feed-overview.png"} alt="STRANDVALE campaign shown in Instagram and Facebook feed mockups" className="w-full" />
        <div className="px-6 pb-7 text-white sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Independent concept · Scalp care · US market</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">STRANDVALE</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300">A research-led creative system for a fictional scalp-serum brand: one recognizable product identity, six strategic concepts, and eighteen distinct executions.</p>
          <a href={root + "index.html"} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">View full case study <ArrowUpRight size={16} /></a>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-zinc-200 border-y border-zinc-200 py-6 text-center">{[["07", "Research insights"], ["06", "Strategic concepts"], ["18", "Creative executions"]].map(([number, label]) => <div key={label}><p className="text-3xl font-semibold tracking-tight">{number}</p><p className="mt-2 text-xs text-zinc-500">{label}</p></div>)}</div>

      <div className="grid gap-7 sm:grid-cols-2">
        <section><h4 className="text-lg font-semibold tracking-tight">The challenge</h4><p className="mt-3 text-sm leading-7 text-zinc-600">Build a differentiated campaign in a crowded scalp-care category. The work needed to explain the category, address routine friction, and make product information easier to inspect while keeping a consistent brand identity.</p></section>
        <section><h4 className="text-lg font-semibold tracking-tight">My role</h4><p className="mt-3 text-sm leading-7 text-zinc-600">Category and competitor research, customer-language analysis, awareness mapping, concept development, copy, visual direction, and an exploratory testing framework.</p></section>
      </div>

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Research → strategy</p>
        <h4 className="mt-3 text-2xl font-semibold tracking-tight">Start with the questions people actually ask.</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">{[
          ["Routine friction", "Questions about finish, residue, timing, and application became a creative territory about fitting a new step into everyday life."],
          ["Proof literacy", "Competitor evidence language informed concepts that help shoppers distinguish ingredient stories from finished-product evidence."],
          ["Purchase clarity", "Price and commitment questions shaped a proposed first-bottle offer with clear quantity, shipping, and subscription terms."],
        ].map(([title, body]) => <div key={title} className="rounded-xl border border-zinc-200 p-5"><h5 className="font-semibold">{title}</h5><p className="mt-3 text-sm leading-6 text-zinc-600">{body}</p></div>)}</div>
      </section>

      <section>
        <h4 className="text-2xl font-semibold tracking-tight">Six ideas across the customer journey.</h4>
        <p className="mt-3 text-sm leading-7 text-zinc-600">Each concept has a defined audience awareness stage and a question to investigate. Three executions explore different scenes, formats, compositions, and copy while the amber, cream, and cobalt product identity stays recognizable.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">{strandvale.concepts.map((item) => <div key={item.id} className="border-t border-zinc-200 pt-5"><p className="text-xs text-zinc-500">{item.id} · {item.funnel} funnel · {item.awareness}</p><h5 className="mt-2 text-lg font-semibold tracking-tight">{item.name}</h5><p className="mt-2 text-sm leading-6 text-zinc-600">{item.hypothesis}</p></div>)}</div>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3"><h4 className="text-2xl font-semibold tracking-tight">Explore the creative system.</h4><span className="text-xs text-zinc-500">{visibleAds.length} creatives</span></div>
        <div className="my-5 flex flex-wrap gap-2" role="group" aria-label="Filter creative concepts">{["All", ...strandvale.concepts.map((item) => item.id)].map((id) => <button type="button" key={id} aria-pressed={concept === id} onClick={() => setConcept(id)} className={`rounded-full px-4 py-2 text-xs font-medium ${concept === id ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>{id === "All" ? "All concepts" : id}</button>)}</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3">{visibleAds.map((ad) => <figure key={ad.id}><button type="button" onClick={() => setSelectedImage(ad.master)} aria-label={`Enlarge ${ad.headline}`} className="block w-full overflow-hidden rounded-lg bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4"><img src={root + ad.preview} alt={ad.headline} loading="lazy" className="aspect-[4/5] w-full object-contain transition-transform duration-300 hover:scale-[1.02]" /></button><figcaption className="mt-3"><p className="text-[10px] uppercase tracking-wider text-zinc-400">{ad.id} · {ad.awareness}</p><p className="mt-1 text-sm font-medium leading-5">{ad.headline}</p><p className="mt-1 text-xs leading-5 text-zinc-500">{ad.format}</p></figcaption></figure>)}</div>
      </section>

      <section className="rounded-xl bg-zinc-100 p-6 sm:p-8"><h4 className="text-xl font-semibold tracking-tight">A testing plan, with a clear learning goal.</h4><p className="mt-3 text-sm leading-7 text-zinc-600">The first round explores complete creative packages. Since visual treatment and copy change together, it cannot isolate a winning hook. A follow-up would hold the scene and other variables steady to investigate the promising element.</p><p className="mt-3 text-sm leading-7 text-zinc-600">This is an independent fictional brand concept. The deliverable is the research, strategy, and creative system; the campaign has not run, and there are no measured performance or product-efficacy results.</p><div className="mt-5 flex flex-wrap gap-4 text-sm font-medium"><a href={root + "index.html"} target="_blank" rel="noreferrer" className="underline underline-offset-4">Read the complete case study ↗</a><a href={root + "STRANDVALE-creative-presentation.pdf"} target="_blank" rel="noreferrer" className="underline underline-offset-4">Open presentation PDF ↗</a></div></section>
    </article>

    {selectedImage && <div role="dialog" aria-modal="true" aria-label="Creative preview" onKeyDown={(event) => { if (event.key === "Escape") setSelectedImage(null); if (event.key === "Tab") event.preventDefault(); }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5" onClick={() => setSelectedImage(null)}><button type="button" autoFocus onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold">Close ×</button><img src={root + selectedImage} alt="Expanded STRANDVALE creative" className="max-h-[88vh] max-w-full object-contain" /></div>}
  </div>;
};

export default CreativeStrategySection;

