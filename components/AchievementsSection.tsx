
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const AchievementsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ACHIEVEMENTS.map(item => (
        <div key={item.id} className="p-8 bg-white border border-zinc-200 rounded-2xl hover:border-blue-200 transition-all group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <span className="text-sm font-bold text-[#94a3b8] bg-[#f8fafc] px-3 py-1 rounded-lg">
                {item.year}
              </span>
            </div>
            <p className="text-zinc-500 text-base leading-relaxed">
              {item.context}
            </p>
          </div>
          {item.link && (
            <div className="pt-6">
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
