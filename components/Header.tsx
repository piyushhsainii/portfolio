import React from "react";
import { USER_DATA } from "../constants";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-40 border-b border-[#f1f5f9]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3"></div>

        <div className="flex items-center gap-6">
          {/* <a
            href={USER_DATA.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#64748b] hover:text-zinc-900 transition-colors"
          >
            Resume
          </a> */}
          {/* <a
            href={`mailto:sainipiyush8860@gmail.com`}
            className="text-sm font-bold text-zinc-900 bg-zinc-50 px-4 py-2 rounded-full border border-zinc-100 hover:bg-zinc-100 transition-colors"
          >
            Contact
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
