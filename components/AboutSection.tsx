import React from "react";
import { USER_DATA } from "../constants";

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
          About Me
        </h2>
        <p className="text-xl tracking-tighter text-zinc-800 leading-relaxed font-normal">
          {USER_DATA.summary}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {USER_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            Focus Areas
          </h3>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
              Founding Engineering & MVPs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
              AI Agent Automations
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
              On-chain Gaming & DeFi
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
              Performance Optimized Frontends
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
