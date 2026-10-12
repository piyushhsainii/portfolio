import React from "react";
import { USER_DATA } from "../constants";

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-10 max-w-3xl">
      <section className="space-y-2">
        <p className="text-base leading-8 text-zinc-600 sm:text-lg">
          {USER_DATA.summary}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-2 py-1">
            {USER_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700"
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
