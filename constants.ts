import { Project, Experience, Achievement } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "alace-ai",
    title: "Alace AI",
    type: "AI",
    shortDescription:
      "AI-powered advertising platform that runs your ads on autopilot.",
    fullDescription:
      "Alace AI is an AI-powered advertising platform that continuously optimizes ad performance to improve ROAS and CPA. Built for scale with enterprise-grade infrastructure.",
    image: "./public/Alace AI LandingPage V3.png",
    video: "./public/alace_ai_final_preview.mp4",
    problemStatement:
      "Manual ad optimization leads to wasted budget, slow iteration, and poor campaign performance.",
    solution:
      "Built an autonomous system that optimizes ads in real time using performance signals across platforms.",
    techStack: ["NextJS", "Typescript", "PostgreSQL"],
    role: "Founding Engineer",
    outcomes: [
      "Improved ROAS and CPA automatically",
      "Reduced manual ad management effort",
      "Scalable enterprise-ready architecture",
    ],
    links: {
      live: "https://alace.ai/",
    },
  },
  {
    id: "rugs-fun",
    title: "Rugs-Fun - On Chain Trading Game",
    type: "WEB3",
    shortDescription: "An adrenaline-fueled on-chain crash game for degens.",
    fullDescription:
      "Rugs-Fun is a real-time on-chain trading game where players must time their exit before the rug pulls. Built with WebSockets for ultra-low latency gameplay.",
    image: "./public/Rugs-funv2-1.png",
    video: "./public/rugsfun.mp4",
    problemStatement:
      "Existing on-chain games lacked real-time responsiveness and excitement.",
    solution:
      "Implemented a real-time WebSocket-based trading engine synced with on-chain logic.",
    techStack: ["NextJS", "Typescript", "Node JS", "Web Sockets"],
    role: "Lead Developer",
    outcomes: [
      "High player engagement",
      "Smooth real-time multiplier updates",
      "Secure on-chain fund handling",
    ],
    links: {
      live: "https://rugs-funn.vercel.app/",
    },
  },
  {
    id: "social-pilot",
    title: "Social Pilot",
    type: "AI",
    shortDescription:
      "AI Social Distribution Agent for content repurposing & growth.",
    fullDescription:
      "Social Pilot transforms long-form content into platform-optimized posts, schedules distribution, and engages with audiences automatically.",
    image: "./public/social-pilot-hero-preview.png",
    video: "./public/social-pilot-hero-preview1.mp4",
    problemStatement:
      "Creators struggle to distribute content consistently across platforms.",
    solution:
      "Built an AI agent that repurposes, schedules, and engages automatically.",
    techStack: ["NextJS", "Typescript", "AI Agents"],
    role: "Product Engineer",
    outcomes: [
      "Automated content distribution",
      "Consistent social presence",
      "Improved creator engagement",
    ],
    links: {
      live: "https://social-pilot-agent.vercel.app/",
    },
  },
  {
    id: "stablecoin",
    title: "SOL-Backed Stablecoin",
    type: "WEB3",
    shortDescription:
      "A decentralized USD-pegged stablecoin protocol on Solana.",
    fullDescription:
      "Users deposit SOL as collateral to mint a USD-pegged stablecoin. Stability is maintained using Pyth oracles and liquidation mechanisms.",
    image:
      "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
    problemStatement:
      "Lack of transparent and capital-efficient stablecoins on Solana.",
    solution:
      "Designed an over-collateralized stablecoin protocol using real-time oracle pricing.",
    techStack: ["Solana", "Anchor", "Rust", "SPL Token 2022", "Pyth Oracle"],
    role: "Blockchain Engineer",
    outcomes: [
      "Stable USD peg",
      "Secure liquidation system",
      "Fully on-chain transparency",
    ],
    links: {
      live: "https://my-stable-coin.vercel.app/",
    },
  },
  {
    id: "design-portfolio",
    title: "Design Engineer Portfolio",
    type: "Design",
    shortDescription: "Personal design engineering portfolio.",
    fullDescription:
      "A design-focused portfolio showcasing projects, work experience, and achievements with strong motion and visual hierarchy.",
    image: "./public/design-portfolio-prevoew.png",
    video: "./public/summarywork.mp4",
    problemStatement:
      "Need for a portfolio that balances design aesthetics with engineering depth.",
    solution: "Built a motion-rich portfolio using modern web technologies.",
    techStack: ["NextJS", "Tailwind", "Motion"],
    role: "Designer & Engineer",
    outcomes: ["Clear project storytelling", "Strong personal brand presence"],
    links: {
      live: "https://designs.piyushsaini.me",
    },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Alace AI",
    role: "Founding Engineer",
    duration: "Feb 2025 - Present",
    summary:
      "Driving the technical vision and core engineering for an AI-led ad-tech startup.",
    technologies: ["NextJS", "Typescript", "AI", "PostgreSQL"],
    logoUrl:
      "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
  },
  {
    id: "e2",
    company: "Dream Launch Studios",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Mar 2025",
    summary:
      "Delivered high-performance web solutions and MVPs for diverse clients.",
    technologies: ["React", "Node.js", "Solana", "Tailwind"],
    logoUrl:
      "https://pbs.twimg.com/profile_images/1893716032113823744/EI5zkPl-_400x400.png",
  },
  {
    id: "e3",
    company: "Vexio",
    role: "Frontend Engineer",
    duration: "Aug 2024 - Oct 2024",
    summary:
      "Optimized frontend performance and implemented advanced UI features for a remote-first team.",
    technologies: ["React", "Typescript", "UI/UX"],
    logoUrl: "https://cdn.vexio.in/vlogo.jpeg?w=48&q=75",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Open Source Contribution: 100xdevs Chess",
    context: "Added valid move visualization feature to the core project.",
    year: "2024",
    link: "https://github.com/code100x/chess/pull/36",
  },
  {
    id: "a2",
    title: "Bachelors in Computer Applications",
    context: "Completed BCA from BCIIT (GGSIPU).",
    year: "2024",
  },
];

export const USER_DATA = {
  name: "Piyush Saini",
  initials: "PS",
  location: "New Delhi, IN",
  description: "I build products, websites and brands",
  summary:
    "I help turn ideas into reality — from design to full-scale development. Specializing in Web2, AI SaaS, and Web3 applications🚀",
  avatarUrl: "./public/bwillustration.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Web Sockets",
    "Postgres",
    "Shadcn",
    "WEB3",
    "Solidity",
    "Rust",
  ],
  contact: {
    github: "https://github.com/piyushhsainii",
    linkedin: "https://www.linkedin.com/in/piyushhsainii",
    x: "https://x.com/piyushsainii",
    resume:
      "https://drive.google.com/file/d/1y7o7VOm8oiCMGbQMr-8zYU3em1pdcBe_/view?usp=sharing",
  },
};
