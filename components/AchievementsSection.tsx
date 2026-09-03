import React from "react";
import { ACHIEVEMENTS } from "../constants";

const AchievementsSection: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_10px_30px_-10px_rgba(24,24,27,0.15)]">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={item.id}
            className={[
              "p-6 sm:p-7",
              idx !== ACHIEVEMENTS.length - 1 ? "border-b border-zinc-100/80" : "",
            ].join(" ")}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="shrink-0">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f4f5f6] text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 shadow-[inset_0_1px_2px_rgba(24,24,27,0.04)]">
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
