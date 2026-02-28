import React from "react";
import { ACHIEVEMENTS } from "../constants";

const AchievementsSection: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-7 border-b border-zinc-100 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  {item.year}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      View
                    </a>
                  )}
                </div>
                <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {item.context}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
