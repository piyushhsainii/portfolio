"use client";
import { Mail } from "lucide-react";

export function Navigation() {
  const playClickSound = () => {
    // Create a short, crisp click sound using Web Audio API
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Short, crisp click sound
    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.1
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const scrollToSection = (sectionId: string) => {
    playClickSound();

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 100; // Approximate navigation height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <button
          onClick={() => scrollToSection("hero")}
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity active:scale-95"
        >
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </button>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity active:scale-95"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity active:scale-95"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity active:scale-95"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity active:scale-95"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity active:scale-95"
          >
            Experience
          </button>
        </div>

        <a
          href="mailto:sainipiyush8860@gmail.com"
          onClick={playClickSound}
          className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0 flex items-center justify-center transition-colors active:scale-95"
        >
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </a>
      </nav>
    </div>
  );
}
