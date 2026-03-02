import { Project, Experience, Achievement } from "./types";
export const PROJECTS: Project[] = [
  {
  id: "audit-desk",
  title: "Audit Desk",
  type: "Website Conversion Audit Tool",
  shortDescription:
    "A fast, no-login website audit that shows exactly what’s holding conversions back.",
  fullDescription:
    "Audit Desk is a one-time, deep website diagnostics tool designed to uncover clarity gaps, conversion friction, and usability issues that quietly cost businesses leads. By analyzing structure, layout, messaging, and user flow, Audit Desk delivers an objective, easy-to-understand audit without requiring accounts, setup, or ongoing subscriptions. Each audit is securely delivered via email, allowing founders, consultants, and teams to quickly understand what’s broken, why it matters, and what to fix next.",
  image: "/audit-desk-metadata.png",
  video: "",
  problemStatement:
    "Most websites lose potential customers due to unclear messaging, poor structure, and subtle usability issues. These problems often go unnoticed, leading businesses to spend more on ads or redesigns without understanding the real conversion blockers.",
  solution:
    "Audit Desk provides a structured, objective website audit that highlights where visitors hesitate, lose trust, or drop off. Instead of guesswork, businesses get clear insights and prioritized recommendations to improve conversions using their existing traffic.",
  techStack: [
    "Next.js (App Router)",
    "TypeScript",
    "Vercel Serverless Functions",
    "OpenAI (via Vercel AI SDK)",
    "TailwindCSS",
    "Resend (Email Delivery)",
    "Dodo Payments SDK",
  ],
  role: "Founder & Product Engineer",
  outcomes: [
    "Clear visibility into conversion and clarity issues",
    "Reduced guesswork before redesigns or ad spend",
    "Actionable recommendations prioritized by impact",
    "Secure, no-login audit delivery",
    "Faster decision-making with objective diagnostics",
  ],
  links: {
    live: "https://audit-desk.vercel.app/",
  },
},
  {
    id: "chat-pilot",
    title: "ChatPilot",
    type: "AI Chatbot SaaS",
    shortDescription:
      "Embeddable AI chatbot for websites and businesses that solves users simple to complex querues",
    fullDescription:
      "ChatPilot is a multi-tenant AI chatbot platform that allows businesses to deploy intelligent, customizable chatbots on their websites using a single script tag. The chatbot is designed to primarily assist anonymous visitors by answering FAQs, guiding users through products or services, and reducing drop-offs. Businesses can securely connect knowledge sources, APIs, and tools to their chatbot while maintaining strict data isolation and access control. ChatPilot progressively enhances conversations when users are authenticated, enabling deeper, personalized support for SaaS applications.",
    image: "/Chat-pilot-metdata.png",
    video: "/chat-pilot-initial-walkthrough.mp4",
    problemStatement:
      "Most websites lose users because visitors are confused, overwhelmed, or unable to find answers quickly. Traditional chatbots are either rule-based, hard to configure, insecure, or require users to log in before receiving meaningful help.",
    solution:
      "ChatPilot provides a plug-and-play AI chatbot that works instantly for anonymous visitors and safely upgrades for authenticated users. Using a secure widget, server-side AI orchestration, and role-based access to data and tools, ChatPilot ensures visitors get helpful answers while businesses retain full control over their data, branding, and behavior.",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase (Postgres + RLS + Storage)",
      "OpenAI",
      "Edge Functions",
      "WebSockets / Streaming",
      "TailwindCSS",
      "Shadow DOM Widgets",
    ],
    role: "Founder & Lead Engineer",
    outcomes: [
      "Instant AI assistance for anonymous website visitors",
      "Secure multi-tenant chatbot architecture with strict data isolation",
      "Embeddable widget via a single script tag",
      "Custom branding, themes, and domain-level access control",
      "Progressive enhancement for authenticated SaaS users",
    ],
    links: {
      live: "https://www.chatpilot-agent.com/",
    },
  },
  {
    id: "Motion-Studio",
    title: "Motion Studio",
    type: "AI Media",
    shortDescription:
      " Generate launch video for your Saas. Built using remotion + Next JS",
    fullDescription:
      "Motion Studio is a Next.js + Remotion-based video generation system that turns structured product inputs into premium, cinematic marketing videos. It uses a scene graph, a virtual camera layer, and a motion orchestrator to avoid slideshow pacing and instead guide attention through continuous camera-led storytelling. The editor supports drafts, template variants, and deterministic text animation primitives (typewriter + word highlight), producing consistent, high-quality renders with preview-first iteration and gated high-quality exports.",
    image: "/Motion-Studio-Hero-Preview.png",
    video: "/Motion-Studio-Initial-walkthrough-Music.mp4",
    problemStatement:
      "Most product videos are slow and expensive to produce, and template-based generators often look like slideshows with hard cuts, inconsistent pacing, and low perceived quality.",
    solution:
      "Motion Studio generates authored-feeling motion videos from a single content form using deterministic Remotion primitives. A scene graph keeps the video structured, a virtual camera creates continuity and cinematic exploration, and reusable text animation primitives handle narrative moments and emphasis. Draft saving and credit-gated exporting ensure users never lose work and can unlock high-quality exports when ready.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Remotion",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "CSS Modules",
    ],
    role: "Founding Engineer",
    outcomes: [
      "Scene Graph + Virtual Camera foundation enabling continuous-shot storytelling",
      "Motion Orchestrator for centralized, state-driven animation sequencing",
      "Reusable text animation primitives (typewriter + word highlight) integrated across templates",
      "Draft save + resume workflow with credit-gated export UX",
      "Template system with light/dark SaaS variants and content-aware layout selection",
    ],
    links: {
      live: "",
    },
  },

  {
    id: "sol-ball",
    title: "Sol Ball",
    type: "Web3 Game",
    shortDescription:
      "PvP online soccer arena where players bet on skill, not luck.",
    fullDescription:
      "Sol Ball is a real-time, Haxball-inspired multiplayer soccer game built on Solana. Players compete in fast-paced 3v3 matches, place skill-based bets on games, and receive instant on-chain payouts after each match. The platform combines smooth physics-based gameplay with transparent, trustless betting mechanics, creating a competitive experience where skill is the only deciding factor.",
    image: "/metadata-preview-solball.png",
    video: "/SolBallFinalWalkthrough.mp4",
    problemStatement:
      "Most online betting games rely on chance, opaque systems, or centralized control, leading to unfair outcomes, lack of transparency, and low trust among players.",
    solution:
      "Sol Ball introduces a skill-first multiplayer betting experience with server-authoritative gameplay and on-chain settlement. Matches are resolved purely by gameplay performance, while Solana smart contracts handle escrow, payouts, and revenue splits automatically and transparently.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Solana",
      "Privy",
      "WebSockets",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
    ],
    role: "Founding Engineer",
    outcomes: [
      "Skill-based PvP betting with instant on-chain payouts",
      "Transparent escrow and reward distribution via smart contracts",
      "Low-latency real-time multiplayer gameplay",
      "Scalable architecture for competitive online matches",
    ],
    links: {
      live: "https://solball.vercel.app/",
    },
  },
  {
    id: "alace-ai",
    title: "Alace AI",
    type: "AI",
    shortDescription:
      "Instant AI insights, custom analysis, and automated actions for better ROAS and conversions.",
    fullDescription:
      "Alace AI is an AI-powered advertising platform that continuously optimizes ad performance to improve ROAS and CPA. Built for scale with enterprise-grade infrastructure.",
    image: "/Alace AI LandingPage V3.png",
    video: "/alace_ai_final_preview.mp4",
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
    image: "/Rugs-funv2-1.png",
    video: "/rugsfun.mp4",
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
      live: "#",
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
    image: "/social-pilot-hero-preview.png",
    video: "/social-pilot-hero-preview1.mp4",
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
    id: "biz-pilot",
    title: "Biz Pilot",
    type: "AI Automation Platform",
    shortDescription:
      "AI agent systems for marketing, sales, and support that automate work, increase conversions, and drive real revenue.",
    fullDescription:
      "BizPilot is an AI-powered agentic automation platform designed to help businesses streamline operations and drive growth across marketing, sales, and customer support. The platform deploys intelligent agents that integrate directly with existing tools such as Excel, Salesforce, WhatsApp, and analytics systems. These agents autonomously execute workflows, analyze business data, and recommend actions that improve revenue, efficiency, and customer experience without requiring teams to change how they work.",
    image: "/bizPilotPreview.png",
    video: "/bizPilotPreviewCompact2.mp4",
    problemStatement:
      "Businesses rely on fragmented tools and manual processes across marketing, sales, and support, leading to inefficiencies, slow decision-making, and missed revenue opportunities.",
    solution:
      "BizPilot introduces AI-driven agent systems that automate workflows, manage data across tools, and provide real-time decision intelligence. By embedding agents directly into existing business stacks, BizPilot enables teams to scale operations, improve responsiveness, and achieve measurable growth without adding operational complexity.",
    techStack: [
      "Next.js",
      "TypeScript",
      "AI Agent Frameworks",
      "Node.js",
      "PostgreSQL",
      "APIs & Webhooks",
      "TailwindCSS",
    ],
    role: "Founder & Product Engineer",
    outcomes: [
      "Automated marketing, sales, and support workflows using AI agents",
      "Seamless integration with existing business tools and data sources",
      "Improved lead conversion, response times, and operational efficiency",
      "Scalable agentic systems tailored to individual business needs",
    ],
    links: {
      live: "https://biz-pilot-agent.vercel.app/",
    },
  },

  // {
  //   id: "stablecoin",
  //   title: "SOL-Backed Stablecoin",
  //   type: "WEB3",
  //   shortDescription:
  //     "A decentralized USD-pegged stablecoin protocol on Solana.",
  //   fullDescription:
  //     "Users deposit SOL as collateral to mint a USD-pegged stablecoin. Stability is maintained using Pyth oracles and liquidation mechanisms.",
  //   image:
  //     "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
  //   problemStatement:
  //     "Lack of transparent and capital-efficient stablecoins on Solana.",
  //   solution:
  //     "Designed an over-collateralized stablecoin protocol using real-time oracle pricing.",
  //   techStack: ["Solana", "Anchor", "Rust", "SPL Token 2022", "Pyth Oracle"],
  //   role: "Blockchain Engineer",
  //   outcomes: [
  //     "Stable USD peg",
  //     "Secure liquidation system",
  //     "Fully on-chain transparency",
  //   ],
  //   links: {
  //     live: "https://my-stable-coin.vercel.app/",
  //   },
  // },
  {
    id: "design-portfolio",
    title: "Design Engineer Portfolio",
    type: "Design",
    shortDescription: "Personal design engineering portfolio.",
    fullDescription:
      "A design-focused portfolio showcasing projects, work experience, and achievements with strong motion and visual hierarchy.",
    image: "/design-portfolio-prevoew.png",
    video: "/summarywork.mp4",
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
    logoUrl: "https://www.dreamlaunch.studio/assets/Vector.svg",
  },
  {
    id: "e3",
    company: "Vexio",
    role: "Frontend Engineer",
    duration: "Aug 2024 - Oct 2024",
    summary:
      "Optimized frontend performance and implemented advanced UI features for a remote-first team.",
    technologies: ["React", "Typescript", "UI/UX"],
    logoUrl: "/vexio.png",
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
  avatarUrl: "/bwillustration.png",
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
