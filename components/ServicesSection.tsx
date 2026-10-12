import React, { useState } from "react";
import { ArrowUpRight, Check, Clapperboard, Code2, Sparkles, X } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Clapperboard,
    title: "AI UGC & Product Videos",
    description: "Turn your product into scroll-stopping content for Instagram, TikTok, and ads — without a camera crew or influencer budget.",
    items: ["AI-generated UGC-style ads featuring your product", "Cinematic product showcase videos", "Delivered in 2–3 days, ready to post"],
    action: "View sample work",
    href: "#projects",
  },
  {
    number: "02",
    icon: Code2,
    title: "Motion & Animated Websites",
    description: "A static site doesn't hold attention. I build fast, animation-driven websites that keep visitors engaged and guide them toward action.",
    items: ["Custom motion-first landing page or website", "Built for conversion, not just aesthetics", "Fast turnaround, mobile-optimized"],
    action: "View sample work",
    href: "#projects",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Automation & Custom Tools",
    description: "If there's a manual process eating up your time, I can build a lightweight AI tool to handle it.",
    items: ["Custom automation around your exact workflow", "No subscription lock-in — built once, yours to keep", "Free working demo before you commit"],
    action: "Get a free demo",
    href: "mailto:sainipiyush8860@gmail.com?subject=Free%20AI%20automation%20demo",
  },
];

const ServicesSection: React.FC<{ standalone?: boolean; onShowWork?: () => void }> = ({ standalone = false, onShowWork }) => {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [sampleTitle, setSampleTitle] = useState("");

  const openSample = (title: string) => {
    setSampleTitle(title);
    setSampleOpen(true);
  };

  return <section id="services" className={standalone ? "pt-28 pb-24" : "scroll-mt-24"}>
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Services</p>
      <h1 className="text-4xl font-semibold tracking-[-0.05em] text-black sm:text-6xl">Useful work, made to move.</h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600">I help brands and founders stand out with AI-powered content and fast, high-impact web experiences — no long contracts, no bloated agency process.</p>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      {services.map(({ number, icon: Icon, title, description, items, action, href }) => (
        <article key={title} className="group flex min-h-[520px] flex-col rounded-[28px] border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_20px_60px_-32px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-zinc-400"><span>{number}</span><Icon size={21} strokeWidth={1.6} className="text-black" /></div>
          <h2 className="mt-16 text-2xl font-semibold tracking-[-0.04em] text-black">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600">{description}</p>
          <ul className="mt-7 space-y-3 text-sm text-zinc-700">{items.map((item) => <li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-black" />{item}</li>)}</ul>
          <div className="mt-auto border-t border-zinc-100 pt-6"><button type="button" onClick={() => action === "View sample work" ? openSample(title) : (window.location.href = href)} className="mt-0 inline-flex items-center gap-2 text-sm font-bold text-black underline decoration-zinc-300 underline-offset-4 transition group-hover:decoration-black">{action}<ArrowUpRight size={16} /></button></div>
        </article>
      ))}
    </div>

    <div className="mt-4 flex flex-col justify-between gap-6 rounded-[28px] bg-black p-8 text-white sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Why work with me</p><p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-200">No retainers. No long onboarding. You get a sample of the actual work before you pay for the full thing.</p></div><a href="mailto:sainipiyush8860@gmail.com?subject=Let's%20work%20together" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200">Book a call <ArrowUpRight size={16} /></a></div>
    {sampleOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="sample-dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSampleOpen(false); }}>
      <div className="w-full max-w-lg rounded-[28px] bg-white p-7 shadow-2xl sm:p-9">
        <div className="flex items-start justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Sample work</p><h2 id="sample-dialog-title" className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">{sampleTitle}</h2></div><button type="button" aria-label="Close dialog" onClick={() => setSampleOpen(false)} className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-black"><X size={19} /></button></div>
        <p className="mt-5 leading-7 text-zinc-600">I’ll share the most relevant examples and walk you through the thinking, process, and outcomes behind the work.</p>
        <button type="button" onClick={() => { setSampleOpen(false); onShowWork?.(); }} className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800">See selected projects <ArrowUpRight size={16} /></button>
      </div>
    </div>}
  </section>;
};

export default ServicesSection;
