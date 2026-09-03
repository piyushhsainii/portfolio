import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f4f5f6]/80 backdrop-blur-xl z-40 border-b border-white/60 shadow-[0_1px_0_rgba(24,24,27,0.03)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3"></div>

        <div className="flex items-center gap-6">
          {/* <a
            href={USER_DATA.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Resume
          </a> */}
          {/* <a
            href={`mailto:sainipiyush8860@gmail.com`}
            className="text-sm font-semibold text-zinc-800 bg-white px-4 py-2 rounded-full shadow-[0_4px_14px_-4px_rgba(24,24,27,0.15)] hover:shadow-[0_6px_18px_-4px_rgba(24,24,27,0.2)] transition-shadow"
          >
            Contact
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
