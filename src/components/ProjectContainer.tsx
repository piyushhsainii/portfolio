"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./project-card";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/data/resume";

const CARD_WIDTH = 320; // same as your ProjectCard width
const GAP = 16; // match space-x-4 (4*4px = 16px)
const BLUR_FADE_DELAY = 0.04;

const ProjectContainer = ({ type }: { type: string }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    setShowLeftArrow(!atStart);
    setShowRightArrow(!atEnd);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollPosition();

    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: CARD_WIDTH + GAP, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -(CARD_WIDTH + GAP), behavior: "smooth" });
  };

  return (
    <div className="relative max-w-[850px] mx-auto ">
      {/* Scroll container */}
      <div className="brightness-75 my-2 font-light text-xl tracking-widest">
        {" "}
        {type}{" "}
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden no-scrollbar space-x-4 scroll-smooth py-2 w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {DATA.projects
          .filter((project) => project.active)
          .filter((project) => project.type === type)
          .map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <div
                className="flex-shrink-0 scroll-snap-align-start h-full"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video ?? ""}
                  links={project.links}
                  // @ts-ignore
                  preview={project.preview}
                />
              </div>
            </BlurFade>
          ))}
      </div>

      {/* Left Scroll Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-start pl-2 hover:opacity-100 opacity-80 transition pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Scroll Arrow */}
      {showRightArrow && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/60 to-transparent flex items-center justify-end pr-2 hover:opacity-100 opacity-80 transition pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProjectContainer;
