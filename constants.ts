import { Project, Experience, Achievement } from "./types";
export const PROJECTS: Project[] = [
  {
    id: "roomsketch",
    title: "RoomSketch",
    type: "Product / Web App",
    shortDescription:
      "Browser-based floor plan editor with a live, synced 3D preview — draw a wall, watch it appear in 3D instantly, then walk through the space before anything's built.",
    fullDescription:
      "Built a node-based floor plan editor where every wall, door, window, and stair is real geometry the moment it's drawn — rendered live in a resizable split view next to the 2D canvas, with no re-modeling or export step. Layered in a materials system (60+ finishes across walls, floors, doors, and furniture), a first-person Walk Mode for exploring the space at eye level, and shareable links so clients can open the model on any device with no plugin.",
    image: "/room-sketch-hero.jpeg",
    video: "/initial-hero-video.mp4",
    problemStatement:
      "Turning a floor plan into something a client can actually picture usually means stitching together a CAD tool, a separate 3D renderer, and a lot of manual re-modeling every time a wall moves. There's no single tool where the 2D plan and the 3D model stay in sync as you draw, and walking through the space before it's built typically means a completely separate rendering pipeline.",
    solution:
      "Built a node-based floor plan editor where every wall, door, window, and stair is real geometry the moment it's drawn — rendered live in a resizable split view next to the 2D canvas, with no re-modeling or export step. Layered in a materials system (60+ finishes across walls, floors, doors, and furniture), a first-person Walk Mode for exploring the space at eye level, and shareable links so clients can open the model on any device with no plugin.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Three.js",
      "Tailwind CSS",
      "Supabase",
    ],
    role: "Sole Developer",
    outcomes: [
      "Real-time synced 2D floor plan editor and 3D scene, zero re-modeling step",
      "60+ materials across walls, floors, doors, and furniture, applied per room",
      "First-person Walk Mode plus Orbit and Top-down camera views",
      "Shareable client links — opens on any device, no plugin required",
      "Currently pre-launch, building in public with an open waitlist",
    ],
    links: {
      live: "https://roomsketch.vercel.app/",
    },
  },
  {
    id: "solwill",
    title: "Solwill",
    type: "Web3",
    shortDescription:
      "Trustless crypto inheritance protocol on Solana — set up an on-chain will and protect your digital assets forever.",
    fullDescription:
      "SolWill is the first trustless crypto inheritance protocol on Solana. It lets you create an on-chain will, assign heirs with basis point splits, and check in regularly to prove you're alive. If you stop checking in, the smart contract triggers automatically and heirs claim their exact share of SOL, tokens, and NFTs — no lawyers, no custodians, no admin key.",
    image: "/solwill-hero.png",
    video: "/solwill-demo.mp4",
    problemStatement:
      "Over $140 billion in crypto is permanently lost because private keys die with their owners. There is no succession mechanism — no bank to call, no recovery process, no way for family to access assets.",
    solution:
      "Built a fully on-chain inheritance protocol using Anchor smart contracts. Assets are locked in a program-controlled vault. A permissionless trigger fires after the owner misses their check-in deadline, and heirs claim their proportional share atomically — enforced entirely by code.",
    techStack: [
      "NextJS",
      "TypeScript",
      "Rust",
      "Anchor",
      "Solana",
      "Zustand",
      "Framer Motion",
      "Helius",
    ],
    role: "Sole Developer",
    outcomes: [
      "First trustless inheritance protocol deployed on Solana devnet",
      "End-to-end flow: create will, deposit assets, add heirs, check in, trigger, claim",
      "Consumer-grade UI with sub-second interactions and hold-to-confirm check-in gesture",
      "Built and submitted to Solana Colosseum Frontier Hackathon",
    ],
    links: {
      live: "https://solwill.vercel.app",
      github: "https://github.com/piyushhsainii/solwill",
    },
  },
  //  {
  //   id: "llm-gateway",
  //   title: "LLM Gateway",
  //   type: "Developer Infrastructure",
  //   shortDescription:
  //     "Rust-powered reverse proxy that gives you one URL for every LLM — bring your own keys, set cost caps, and never get surprised by a bill.",
  //   fullDescription:
  //     "LLM Gateway is an open-source reverse proxy built in Rust that sits between your application and every major LLM provider — OpenAI, Anthropic, and Google. Drop in one URL, bring your own API keys, and get hard cost caps, automatic provider fallbacks, semantic caching, and per-key rate limiting out of the box. Zero prompt storage, sub-millisecond overhead, and a consumer-grade dashboard to monitor usage in real time.",
  //   image: "/LLM_PROXY_HERO.png",
  //   video: "/#",
  //   problemStatement:
  //     "Switching between LLM providers requires code changes, separate SDKs, and manual cost tracking. Teams routinely get surprise bills from runaway scripts, have no fallback when a provider goes down, and have to trust third-party services with their raw prompt data.",
  //   solution:
  //     "Built a Rust-powered reverse proxy that exposes a single OpenAI-compatible endpoint. All provider switching, key management, cost enforcement, and caching happens at the gateway layer — zero application code changes required. Smart contracts are replaced by hard budget limits enforced in-process before a request ever leaves the server.",
  //   techStack: [
  //     "Rust",
  //     "Next.js",
  //     "TypeScript",
  //     "React",
  //     "Tailwind CSS",
  //     "Bun",
  //   ],
  //   role: "Sole Developer",
  //   outcomes: [
  //     "Single URL drop-in replacement for OpenAI, Anthropic, and Google APIs",
  //     "Sub-millisecond gateway overhead with zero prompt data stored",
  //     "Hard cost caps that cut off requests the moment a budget is hit",
  //     "Automatic provider fallback with zero configuration required",
  //     "Consumer-grade dashboard with real-time token, cost, and latency monitoring",
  //     "Open sourced on GitHub",
  //   ],
  //   links: {
  //     live: "https://lllm-gateway.vercel.app/",
  //     github: "https://github.com/piyushhsainii/lllm-gateway",
  //   },
  // }
  //    {
  //   id: "Perp",
  //   title: "Perp - Perpetual Futures Exchange",
  //   type: "Web3",
  //   shortDescription:
  //     "Bilingual crypto seed round platform — invest in CPS tokens before public launch with bank or crypto payment flows.",
  //   fullDescription:
  //     "ChainPass is a full-stack seed round investment platform for the CPS token launch. It features a simulated investor onboarding flow with email/password auth, a live investment calculator with 300% seed multiplier projections, multi-chain crypto payment submission across 8 assets, a real-time investor dashboard with transaction history and downloadable receipts, and full English/Spanish localization with automatic browser locale detection.",
  //   image: "/preview.png",
  //   video: "#",
  //   problemStatement:
  //     "Early-stage token projects lack polished, trustworthy seed round interfaces — most rely on generic forms or manual Telegram coordination, creating friction and eroding investor confidence before launch.",
  //   solution:
  //     "Built a production-grade seed round platform with a guided investment flow, live token allocation calculator, multi-chain crypto payment verification, and a per-investor dashboard — all localized in English and Spanish for Latin American and global audiences.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "React",
  //     "Tailwind CSS",
  //     "Motion",
  //     "Solidity",
  //     "Ethers.js",
  //     "PostgreSQL",
  //     "JWT",
  //   ],
  //   role: "Sole Developer",
  //   outcomes: [
  //     "Bilingual platform (EN/ES) with automatic locale detection and URL-based language switching",
  //     "Live investment calculator with real-time 300% seed multiplier and CPS token projection",
  //     "Multi-chain crypto payment flow supporting USDT, BTC, ETH, BNB, SOL, XRP, DOGE, LTC",
  //     "Investor dashboard with transaction history, status tracking, and receipt generation",
  //     "On-chain allocation tracking via Solidity SeedVault contract with TGE-locked claims",
  //   ],
  //   links: {
  //     live: "#",
  //     github: "https://github.com/piyushhsaniii/perp",
  //   },
  // },
  // {
  //   id: "syncpay",
  //   title: "SyncPay",
  //   type: "Web3",
  //   shortDescription:
  //     "Trustless on-chain payroll protocol on Solana — stream salaries every second and let employees claim what they've earned, the moment they've earned it.",
  //   fullDescription:
  //     "SyncPay is a Web3 employer-of-record payroll console built on Solana. Employers fund a program-controlled vault and set a pay rate in tokens per second. A StreamAccount PDA tracks every second of accrued pay — employees connect their wallet and withdraw anytime. No banks, no payroll processors, no waiting for month-end. Everything is enforced by the Anchor smart contract.",
  //   image: "/syncpay-hero.png",
  //   video: "/syncpay-demo.mp4",
  //   problemStatement:
  //     "Traditional payroll batches payments once or twice a month through banks that charge fees, delay transfers, and exclude contractors without local accounts. Workers deliver value continuously but get paid on an arbitrary cycle — often waiting 30 days for work completed on day one.",
  //   solution:
  //     "Built a fully on-chain salary streaming protocol using Anchor smart contracts. Employers deposit into a MasterVault PDA and create StreamAccounts with a per-second rate. Employees claim accrued earnings in a single transaction — the program calculates elapsed seconds × rate and transfers the exact amount owed, with no admin key and no privileged caller.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Rust",
  //     "Anchor",
  //     "Solana",
  //     "SPL Token-2022",
  //     "Privy",
  //     "Zustand",
  //     "Tailwind CSS",
  //   ],
  //   role: "Full-Stack Developer",
  //   outcomes: [
  //     "End-to-end payroll flow: fund vault, create stream, accrue earnings, withdraw — all on-chain",
  //     "Real-time earnings counter ticking up every second in the employee dashboard",
  //     "MasterVault and StreamAccount PDAs deployed and verified on Solana devnet",
  //     "Built and submitted to Solana Colosseum Frontier Hackathon",
  //   ],
  //   links: {
  //     live: "https://sync-pay-six.vercel.app",
  //     github: "https://github.com/ShubhamMewara/SyncPay",
  //   },
  // },
  // {
  //   id: "alace-ai",
  //   title: "Alace AI",
  //   type: "AI",
  //   shortDescription:
  //     "Instant AI insights, custom analysis, and automated actions for better ROAS and conversions.",
  //   fullDescription:
  //     "Alace AI is an AI-powered advertising platform that continuously optimizes ad performance to improve ROAS and CPA. Built for scale with enterprise-grade infrastructure.",
  //   image: "/chatad.png",
  //   video: "/Video_Project_2.mp4",
  //   problemStatement:
  //     "Manual ad optimization leads to wasted budget, slow iteration, and poor campaign performance.",
  //   solution:
  //     "Built an autonomous system that optimizes ads in real time using performance signals across platforms.",
  //   techStack: ["NextJS", "Typescript", "PostgreSQL"],
  //   role: "Founding Engineer",
  //   outcomes: [
  //     "Improved ROAS and CPA automatically",
  //     "Reduced manual ad management effort",
  //     "Scalable enterprise-ready architecture",
  //   ],
  //   links: {
  //     live: "https://alace.ai/",
  //   },
  // },
  // {
  //   id: "chat-pilot",
  //   title: "ChatPilot",
  //   type: "AI Chatbot SaaS",
  //   shortDescription:
  //     "Embeddable AI chatbot for websites and businesses that solves users simple to complex querues",
  //   fullDescription:
  //     "ChatPilot is a multi-tenant AI chatbot platform that allows businesses to deploy intelligent, customizable chatbots on their websites using a single script tag. The chatbot is designed to primarily assist anonymous visitors by answering FAQs, guiding users through products or services, and reducing drop-offs. Businesses can securely connect knowledge sources, APIs, and tools to their chatbot while maintaining strict data isolation and access control. ChatPilot progressively enhances conversations when users are authenticated, enabling deeper, personalized support for SaaS applications.",
  //   image: "/Chat-pilot-metdata.png",
  //   video: "/chat-pilot-initial-walkthrough.mp4",
  //   problemStatement:
  //     "Most websites lose users because visitors are confused, overwhelmed, or unable to find answers quickly. Traditional chatbots are either rule-based, hard to configure, insecure, or require users to log in before receiving meaningful help.",
  //   solution:
  //     "ChatPilot provides a plug-and-play AI chatbot that works instantly for anonymous visitors and safely upgrades for authenticated users. Using a secure widget, server-side AI orchestration, and role-based access to data and tools, ChatPilot ensures visitors get helpful answers while businesses retain full control over their data, branding, and behavior.",
  //   techStack: [
  //     "Next.js (App Router)",
  //     "TypeScript",
  //     "Supabase (Postgres + RLS + Storage)",
  //     "OpenAI",
  //     "Edge Functions",
  //     "WebSockets / Streaming",
  //     "TailwindCSS",
  //     "Shadow DOM Widgets",
  //   ],
  //   role: "Founder & Lead Engineer",
  //   outcomes: [
  //     "Instant AI assistance for anonymous website visitors",
  //     "Secure multi-tenant chatbot architecture with strict data isolation",
  //     "Embeddable widget via a single script tag",
  //     "Custom branding, themes, and domain-level access control",
  //     "Progressive enhancement for authenticated SaaS users",
  //   ],
  //   links: {
  //     live: "https://www.chatpilot-agent.com/",
  //   },
  // },
  // {
  //   id: "sol-ball",
  //   title: "Sol Ball",
  //   type: "Web3 Game",
  //   shortDescription:
  //     "PvP online soccer arena where players bet on skill, not luck.",
  //   fullDescription:
  //     "Sol Ball is a real-time, Haxball-inspired multiplayer soccer game built on Solana. Players compete in fast-paced 3v3 matches, place skill-based bets on games, and receive instant on-chain payouts after each match. The platform combines smooth physics-based gameplay with transparent, trustless betting mechanics, creating a competitive experience where skill is the only deciding factor.",
  //   image: "/metadata-preview-solball.png",
  //   video: "/SolBallFinalWalkthrough.mp4",
  //   problemStatement:
  //     "Most online betting games rely on chance, opaque systems, or centralized control, leading to unfair outcomes, lack of transparency, and low trust among players.",
  //   solution:
  //     "Sol Ball introduces a skill-first multiplayer betting experience with server-authoritative gameplay and on-chain settlement. Matches are resolved purely by gameplay performance, while Solana smart contracts handle escrow, payouts, and revenue splits automatically and transparently.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Solana",
  //     "Privy",
  //     "WebSockets",
  //     "Node.js",
  //     "PostgreSQL",
  //     "TailwindCSS",
  //   ],
  //   role: "Founding Engineer",
  //   outcomes: [
  //     "Skill-based PvP betting with instant on-chain payouts",
  //     "Transparent escrow and reward distribution via smart contracts",
  //     "Low-latency real-time multiplayer gameplay",
  //     "Scalable architecture for competitive online matches",
  //   ],
  //   links: {
  //     live: "https://solball.vercel.app/",
  //   },
  // },

  // {
  //   id: "Motion-Studio",
  //   title: "Motion Studio",
  //   type: "AI Media",
  //   shortDescription:
  //     " Generate launch video for your Saas. Built using remotion + Next JS",
  //   fullDescription:
  //     "Motion Studio is a Next.js + Remotion-based video generation system that turns structured product inputs into premium, cinematic marketing videos. It uses a scene graph, a virtual camera layer, and a motion orchestrator to avoid slideshow pacing and instead guide attention through continuous camera-led storytelling. The editor supports drafts, template variants, and deterministic text animation primitives (typewriter + word highlight), producing consistent, high-quality renders with preview-first iteration and gated high-quality exports.",
  //   image: "/Motion-Studio-Hero-Preview.png",
  //   video: "/Motion-Studio-Initial-walkthrough-Music.mp4",
  //   problemStatement:
  //     "Most product videos are slow and expensive to produce, and template-based generators often look like slideshows with hard cuts, inconsistent pacing, and low perceived quality.",
  //   solution:
  //     "Motion Studio generates authored-feeling motion videos from a single content form using deterministic Remotion primitives. A scene graph keeps the video structured, a virtual camera creates continuity and cinematic exploration, and reusable text animation primitives handle narrative moments and emphasis. Draft saving and credit-gated exporting ensure users never lose work and can unlock high-quality exports when ready.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Remotion",
  //     "Supabase",
  //     "PostgreSQL",
  //     "Node.js",
  //     "CSS Modules",
  //   ],
  //   role: "Founding Engineer",
  //   outcomes: [
  //     "Scene Graph + Virtual Camera foundation enabling continuous-shot storytelling",
  //     "Motion Orchestrator for centralized, state-driven animation sequencing",
  //     "Reusable text animation primitives (typewriter + word highlight) integrated across templates",
  //     "Draft save + resume workflow with credit-gated export UX",
  //     "Template system with light/dark SaaS variants and content-aware layout selection",
  //   ],
  //   links: {
  //     live: "",
  //   },
  // },
  // {
  //   id: "audit-desk",
  //   title: "Audit Desk",
  //   type: "Website Conversion Audit Tool",
  //   shortDescription:
  //     "A fast, no-login website audit that shows exactly what’s holding conversions back.",
  //   fullDescription:
  //     "Audit Desk is a one-time, deep website diagnostics tool designed to uncover clarity gaps, conversion friction, and usability issues that quietly cost businesses leads. By analyzing structure, layout, messaging, and user flow, Audit Desk delivers an objective, easy-to-understand audit without requiring accounts, setup, or ongoing subscriptions. Each audit is securely delivered via email, allowing founders, consultants, and teams to quickly understand what’s broken, why it matters, and what to fix next.",
  //   image: "/audit-desk-metadata.png",
  //   video: "",
  //   problemStatement:
  //     "Most websites lose potential customers due to unclear messaging, poor structure, and subtle usability issues. These problems often go unnoticed, leading businesses to spend more on ads or redesigns without understanding the real conversion blockers.",
  //   solution:
  //     "Audit Desk provides a structured, objective website audit that highlights where visitors hesitate, lose trust, or drop off. Instead of guesswork, businesses get clear insights and prioritized recommendations to improve conversions using their existing traffic.",
  //   techStack: [
  //     "Next.js (App Router)",
  //     "TypeScript",
  //     "Vercel Serverless Functions",
  //     "OpenAI (via Vercel AI SDK)",
  //     "TailwindCSS",
  //     "Resend (Email Delivery)",
  //     "Dodo Payments SDK",
  //   ],
  //   role: "Founder & Product Engineer",
  //   outcomes: [
  //     "Clear visibility into conversion and clarity issues",
  //     "Reduced guesswork before redesigns or ad spend",
  //     "Actionable recommendations prioritized by impact",
  //     "Secure, no-login audit delivery",
  //     "Faster decision-making with objective diagnostics",
  //   ],
  //   links: {
  //     live: "https://audit-desk.vercel.app/",
  //   },
  // },
  // {
  //   id: "rugs-fun",
  //   title: "Rugs-Fun - On Chain Trading Game",
  //   type: "WEB3",
  //   shortDescription: "An adrenaline-fueled on-chain crash game for degens.",
  //   fullDescription:
  //     "Rugs-Fun is a real-time on-chain trading game where players must time their exit before the rug pulls. Built with WebSockets for ultra-low latency gameplay.",
  //   image: "/Rugs-funv2-1.png",
  //   video: "/rugsfun.mp4",
  //   problemStatement:
  //     "Existing on-chain games lacked real-time responsiveness and excitement.",
  //   solution:
  //     "Implemented a real-time WebSocket-based trading engine synced with on-chain logic.",
  //   techStack: ["NextJS", "Typescript", "Node JS", "Web Sockets"],
  //   role: "Lead Developer",
  //   outcomes: [
  //     "High player engagement",
  //     "Smooth real-time multiplier updates",
  //     "Secure on-chain fund handling",
  //   ],
  //   links: {
  //     live: "#",
  //   },
  // },
  // {
  //   id: "social-pilot",
  //   title: "Social Pilot",
  //   type: "AI",
  //   shortDescription:
  //     "AI Social Distribution Agent for content repurposing & growth.",
  //   fullDescription:
  //     "Social Pilot transforms long-form content into platform-optimized posts, schedules distribution, and engages with audiences automatically.",
  //   image: "/social-pilot-hero-preview.png",
  //   video: "/social-pilot-hero-preview1.mp4",
  //   problemStatement:
  //     "Creators struggle to distribute content consistently across platforms.",
  //   solution:
  //     "Built an AI agent that repurposes, schedules, and engages automatically.",
  //   techStack: ["NextJS", "Typescript", "AI Agents"],
  //   role: "Product Engineer",
  //   outcomes: [
  //     "Automated content distribution",
  //     "Consistent social presence",
  //     "Improved creator engagement",
  //   ],
  //   links: {
  //     live: "https://social-pilot-agent.vercel.app/",
  //   },
  // },
  // {
  //   id: "biz-pilot",
  //   title: "Biz Pilot",
  //   type: "AI Automation Platform",
  //   shortDescription:
  //     "AI agent systems for marketing, sales, and support that automate work, increase conversions, and drive real revenue.",
  //   fullDescription:
  //     "BizPilot is an AI-powered agentic automation platform designed to help businesses streamline operations and drive growth across marketing, sales, and customer support. The platform deploys intelligent agents that integrate directly with existing tools such as Excel, Salesforce, WhatsApp, and analytics systems. These agents autonomously execute workflows, analyze business data, and recommend actions that improve revenue, efficiency, and customer experience without requiring teams to change how they work.",
  //   image: "/bizPilotPreview.png",
  //   video: "/bizPilotPreviewCompact2.mp4",
  //   problemStatement:
  //     "Businesses rely on fragmented tools and manual processes across marketing, sales, and support, leading to inefficiencies, slow decision-making, and missed revenue opportunities.",
  //   solution:
  //     "BizPilot introduces AI-driven agent systems that automate workflows, manage data across tools, and provide real-time decision intelligence. By embedding agents directly into existing business stacks, BizPilot enables teams to scale operations, improve responsiveness, and achieve measurable growth without adding operational complexity.",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "AI Agent Frameworks",
  //     "Node.js",
  //     "PostgreSQL",
  //     "APIs & Webhooks",
  //     "TailwindCSS",
  //   ],
  //   role: "Founder & Product Engineer",
  //   outcomes: [
  //     "Automated marketing, sales, and support workflows using AI agents",
  //     "Seamless integration with existing business tools and data sources",
  //     "Improved lead conversion, response times, and operational efficiency",
  //     "Scalable agentic systems tailored to individual business needs",
  //   ],
  //   links: {
  //     live: "https://biz-pilot-agent.vercel.app/",
  //   },
  // },

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
  // {
  //   id: "design-portfolio",
  //   title: "Design Engineer Portfolio",
  //   type: "Design",
  //   shortDescription: "Personal design engineering portfolio.",
  //   fullDescription:
  //     "A design-focused portfolio showcasing projects, work experience, and achievements with strong motion and visual hierarchy.",
  //   image: "/design-portfolio-prevoew.png",
  //   video: "/summarywork.mp4",
  //   problemStatement:
  //     "Need for a portfolio that balances design aesthetics with engineering depth.",
  //   solution: "Built a motion-rich portfolio using modern web technologies.",
  //   techStack: ["NextJS", "Tailwind", "Motion"],
  //   role: "Designer & Engineer",
  //   outcomes: ["Clear project storytelling", "Strong personal brand presence"],
  //   links: {
  //     live: "https://designs.piyushsaini.me",
  //   },
  // },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Alace AI",
    role: "Full Stack Engineer",
    duration: "Feb 2025 - Oct- 2025",
    summary:
      "Driving the technical vision and core engineering for an AI-led ad-tech startup.",
    technologies: ["NextJS", "Typescript", "AI", "PostgreSQL"],
    logoUrl: "/Section1.png",
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
      "https://framerusercontent.com/images/rKC1LALHbNtZYkT0FyStUFiOw.png?width=199&height=126",
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
  summary: `I’m a Full-Stack Developer working across Web2, Web3, and AI systems, focused on building agentic solutions and automations that solve real problems.

I help turn ideas into production-ready products — handling everything from system design and frontend UX to backend architecture, blockchain integrations, and AI agents.`,
  avatarUrl: "/bwillustration.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Web Sockets",
    "Postgres",
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
