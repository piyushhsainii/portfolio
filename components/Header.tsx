import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-5 z-40 pointer-events-none">
      <div className="mx-auto flex max-w-6xl justify-end px-6">
        <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-zinc-800 bg-black px-2 py-2 text-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] transition hover:px-3">
          <a href="/services" className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-zinc-200">Services <span className="ml-1">↗</span></a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
