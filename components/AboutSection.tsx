import React from "react";
import { USER_DATA } from "../constants";

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-10 max-w-3xl">
      <section className="space-y-2">
        <p className="text-sm sm:text-base text-[#64748b] font-medium tracking-tight">
          {USER_DATA.summary}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-tight mb-3">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-2 py-1">
            {USER_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white text-zinc-700 text-xs font-medium rounded-full shadow-[0_4px_12px_-4px_rgba(24,24,27,0.12)] whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;