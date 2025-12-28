export interface Project {
  id: string;
  title: string;
  type?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  video?: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  role: string;
  outcomes: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  summary: string;
  technologies: string[];
  logoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  year: string;
  link?: string;
}

export enum TabType {
  ABOUT = "about",
  WORK = "work",
  EXPERIENCE = "experience",
  ACHIEVEMENTS = "achievements",
}
