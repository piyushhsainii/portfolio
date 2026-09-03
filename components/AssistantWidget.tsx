import React, { useState } from "react";
import { Sparkles, Wallet2, Database, LayoutGrid, ChevronRight, Mail } from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface AssistantWidgetProps {
  onNavigate: (sectionId: string) => void;
  contactHref: string;
}

// Small hand-drawn "mascot" face to match the reference art style
const MascotFace: React.FC = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
    <path
      d="M13 15c0 3-1 6-3 8"
      stroke="#3f3f46"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <path
      d="M27 15c0 3 1 6 3 8"
      stroke="#3f3f46"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <path
      d="M17 26c1.2 1 2 1.4 3 1.4s1.8-.4 3-1.4"
      stroke="#3f3f46"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  </svg>
);

const AssistantWidget: React.FC<AssistantWidgetProps> = ({ onNavigate, contactHref }) => {
  const [open, setOpen] = useState(false);

  const actions: QuickAction[] = [
    {
      icon: <Wallet2 className="w-4 h-4 text-zinc-700" strokeWidth={2} />,
      label: "See work experience",
      onClick: () => onNavigate("experience"),
    },
    {
      icon: <Database className="w-4 h-4 text-zinc-700" strokeWidth={2} />,
      label: "Browse projects",
      onClick: () => onNavigate("projects"),
    },
    {
      icon: <LayoutGrid className="w-4 h-4 text-zinc-700" strokeWidth={2} />,
      label: "View achievements",
      onClick: () => onNavigate("achievements"),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div
          className="mb-4 w-[300px] sm:w-[340px] rounded-[28px] bg-[#eceef0] shadow-[0_20px_45px_-10px_rgba(24,24,27,0.25)] pt-3 pb-8 px-3 relative animate-[fadeUp_0.25s_ease-out]"
          style={{ animationFillMode: "backwards" }}
        >
          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(8px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

          {/* Glass gradient pill */}
          <div className="relative mb-1">
            <div className="flex items-center gap-2 px-4 py-3 rounded-[20px] bg-gradient-to-r from-emerald-100/70 via-white/40 to-sky-100/70 backdrop-blur-md shadow-[0_8px_20px_-6px_rgba(24,24,27,0.15)]">
              <Sparkles className="w-4 h-4 text-zinc-600" strokeWidth={2} />
              <span className="text-[15px] font-medium text-zinc-600 tracking-tight">
                Suggested for you
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="mt-1">
            {actions.map((action, idx) => (
              <button
                key={action.label}
                onClick={() => {
                  action.onClick();
                  setOpen(false);
                }}
                className={[
                  "w-full flex items-center gap-4 py-4 px-2 text-left group",
                  idx !== actions.length - 1 ? "border-b border-zinc-300/40" : "",
                ].join(" ")}
              >
                <span className="w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(24,24,27,0.08)] flex items-center justify-center shrink-0">
                  {action.icon}
                </span>
                <span className="flex-1 text-[16px] font-medium text-zinc-800 tracking-tight">
                  {action.label}
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          {/* Ghost input */}
          <div className="mt-4 text-center">
            <a
              href={contactHref}
              className="text-[15px] text-zinc-400 font-medium tracking-tight hover:text-zinc-500 transition-colors"
            >
              ask anything…
            </a>
          </div>
        </div>
      )}

      {/* Floating trigger — overlaps panel bottom like the reference */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle quick actions"
        className={[
          "w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-white",
          "shadow-[0_10px_30px_-8px_rgba(24,24,27,0.35)] flex items-center justify-center",
          "hover:scale-105 active:scale-95 transition-transform duration-200",
          open ? "-mt-7" : "",
        ].join(" ")}
      >
        <MascotFace />
      </button>
    </div>
  );
};

export default AssistantWidget;
