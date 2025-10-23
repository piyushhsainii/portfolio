import { Icons } from "@/components/icons";
import { File, HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Piyush Saini",
  initials: "PS",
  url: "https://piyushsaini.me",
  location: "New Delhi, IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: `Nerd today, Boss Tomorrow`,
  summary: `Web3 & Solana Engineer | Founding Engineer at Alace AI. I help turn ideas into reality — from design to full-scale development. Let’s build your MVP and launch fast🚀`,
  avatarUrl:
    "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/PFP.jpg",
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
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "sainipiyush8860@gmail.com",
    tel: "+919953588804",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/piyushhsainii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyush-saini-b860ab1bb/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/piyushsainii",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/14iEOhXNRR_hywklWr0dGW5NbVn2lAWMQ/view?usp=sharing",
        icon: Icons.googleDrive,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Alace AI",
      href: "https://alace.ai",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
      start: "1 Feb 2025",
      end: "Present",
    },
    {
      company: "Dream Launch Studios",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1893716032113823744/EI5zkPl-_400x400.png",
      start: "1 Jan 2025",
      end: "1 Mar 2025",
    },
    {
      company: "Vexio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer ( Remote ) ",
      logoUrl: "https://cdn.vexio.in/vlogo.jpeg?w=48&q=75",
      start: "1 Aug 2024",
      end: "1 Oct 2024",
    },
  ],
  education: [
    {
      school: "BCIIT",
      href: "#",
      degree: "Bachelors in Computer Applications (BCA)",
      logoUrl:
        "http://www.ipu.ac.in/style/head_foot_img/220px-usemGuru_Gobind_Singh_Indraprastha_University12.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      type: "AI",
      title: "Alace AI",
      href: "https://alace.ai/",
      dates: "Feb 2025 - Present",
      active: true,
      description: `AI that runs your ads on autopilot & Improves ROAS & CPA`,
      technologies: ["NextJS", "Typescript", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://alace.ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1745697331/Screenshot_2025-04-27_012454_du8kbr.png",
      video: "",
      preview: {
        title: "Alace AI",
        description: "AI that runs your ads on autopilot & Improves ROAS & CPA",
        technologies: ["NextJS", "Typescript", "PostgreSQL"],
        timePeriod: "Feb 2025 - Present",
        link: "https://alace.ai/",
        videoUrl: "",
        imageUrl:
          "https://res.cloudinary.com/dzow59kgu/image/upload/v1745697331/Screenshot_2025-04-27_012454_du8kbr.png",
      },
    },
    {
      type: "WEB3",
      title: "Rugs-Fun - On Chain Trading Game",
      href: "https://rugs-funn.vercel.app/",
      dates: "Sept 2025 - Oct 2025",
      active: true,
      description: `Trade, risk, and cash out before it rugs. rugs.fun is an on-chain crash game for degens who love the thrill of timing the perfect exit.`,
      technologies: ["NextJS", "Typescript", "Node JS", "Web Sockets"],
      links: [
        {
          type: "Website",
          href: "https://rugs-funn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/rugs-fun/metadataImg.png",
      video: "",
      preview: {
        title: "Rugs-Fun - On Chain Trading Game",
        description:
          "Trade, risk, and cash out before it rugs. rugs.fun is an on-chain crash game for degens who love the thrill of timing the perfect exit",
        technologies: ["NextJS", "Typescript", "PostgreSQL"],
        timePeriod: "Feb 2025 - Present",
        link: "https://rugs-funn.vercel.app",
        videoUrl:
          "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/rugs-fun/rugs.fun_final_video.mp4",
        imageUrl:
          "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/rugs-fun/metadataImg.png",
      },
    },
    {
      type: "WEB3",
      title: "SOL-Backed Stablecoin on Solana",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "A decentralized USD-pegged stablecoin protocol on Solana. Deposit SOL as collateral, mint stablecoins, and maintain stability via oracles and liquidations.",
      technologies: [
        "Solana",
        "DeFi",
        "Stablecoin",
        "SPL Token 2022",
        "Pyth Oracle",
        "Anchor",
        "Blockchain",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      video: "",
      preview: {
        title: "SOL-Backed Stablecoin on Solana",
        description:
          "Deposit SOL → Mint USD-pegged stablecoins. Backed by collateral, powered by Pyth oracle pricing, secured with liquidations.",
        technologies: [
          "Solana",
          "DeFi",
          "Stablecoin",
          "SPL Token 2022",
          "Pyth Oracle",
          "Anchor",
          "Blockchain",
        ],
        timePeriod: "2024 - Present",
        link: "#",
        videoUrl: "",
        imageUrl:
          "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      },
    },
    {
      type: "WEB3",
      title: "SolMint",
      href: "https://sol-minti.vercel.app/",
      dates: "10-08-2025",
      active: true,
      description: `Mint Your Own NFT on Solana Instantly`,
      technologies: ["NextJS", "Solana", "WEB3"],
      links: [
        {
          type: "Website",
          href: "https://sol-minti.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/NFT-CREATION-WALKTHROUGH.mp4",
      preview: {
        title: "Liquid ETH",
        description:
          "Rent high-performance GPUs to run large LLMs, image generation models, and more—all via our streamlined Solana-powered dashboard. Whether you're building AI models, generating art, or crunching data,  Fast. Secure. Pay-as-you-go.",
        technologies: ["NextJS", "Solidity", "WEB3"],
        timePeriod: "1-06-2025 - 1-07-2025",
        link: "https://sol-minti.vercel.app/",
        videoUrl:
          "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/NFT-CREATION-WALKTHROUGH.mp4",
      },
      imageUrl: "",
    },
    {
      type: "WEB3",
      title: "Liquid ETH",
      href: "https://liquid-eth.vercel.app/",
      dates: "1-06-2025 - 1-07-2025",
      active: true,
      description: `Secure, decentralized, and profitable ETH Staking Protocol. Start earning rewards by staking your ETH today.`,
      technologies: ["NextJS", "Solidity", "WEB3"],
      links: [
        {
          type: "Website",
          href: "https://liquid-eth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1752525947/Screenshot_2025-07-15_021504_c0qrhz.png",
      video: "",
      preview: {
        title: "Liquid ETH",
        description:
          "Rent high-performance GPUs to run large LLMs, image generation models, and more—all via our streamlined Solana-powered dashboard. Whether you're building AI models, generating art, or crunching data,  Fast. Secure. Pay-as-you-go.",
        technologies: ["NextJS", "Solidity", "WEB3"],
        timePeriod: "1-06-2025 - 1-07-2025",
        link: "https://liquid-eth.vercel.app/",
        videoUrl: "",
        imageUrl:
          "https://res.cloudinary.com/dzow59kgu/image/upload/v1752525947/Screenshot_2025-07-15_021504_c0qrhz.png",
      },
    },
    {
      type: "AI",
      title: "RunPod – Decentralized GPU Power, On Demand",
      href: "#",
      dates: "Oct 2024 - Dec-2024",
      active: true,
      description: `Rent high-performance GPUs to run large LLMs, image generation models, and more—all via our streamlined Solana-powered dashboard. Whether you're building AI models, generating art, or crunching data,  Fast. Secure. Pay-as-you-go.`,
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "NodeJS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1752521218/FooocusWithLatestAI_z7trqo.mp4",
      preview: {
        title: "RunPod – Decentralized GPU Power, On Demand",
        description:
          "Rent high-performance GPUs to run large LLMs, image generation models, and more—all via our streamlined Solana-powered dashboard. Whether you're building AI models, generating art, or crunching data,  Fast. Secure. Pay-as-you-go.",
        technologies: [
          "React",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "NodeJS",
        ],
        timePeriod: "Oct 2024 - Dec-2024",
        link: "#",
        videoUrl:
          "https://res.cloudinary.com/dzow59kgu/video/upload/v1752521218/FooocusWithLatestAI_z7trqo.mp4",
        imageUrl: "",
      },
    },
    {
      type: "AI SaaS",
      title: "Pixel Brew AI ",
      href: "https://pixelbrew-ai.vercel.app/",
      dates: "Oct 2024 - Dec-2024",
      active: false,
      description: `Launching soon! - Pixel Perfect Thumbnails, Brewed by AI. This Saas model lets you generate your own custom images with PixelBrew AI.`,
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "NodeJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixelbrew-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1729867943/pixelbrew_landingPage_ybdppe.mp4",
      preview: {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities. Built with performance and scalability in mind.",
        technologies: [
          "Vue.js",
          "Node.js",
          "Socket.io",
          "MongoDB",
          "Express",
          "JWT",
        ],
        timePeriod: "January 2024 - February 2024",
        link: "https://example.com/task-manager",
        videoUrl: "/placeholder-video.mp4",
        imageUrl: "/placeholder.svg?height=500&width=600",
      },
    },
    {
      type: "UI Library",
      title: "Velour UI (coming soon🚀 ) ",
      href: "https://ui.velour-ui.tech/",
      dates: "",
      active: false,
      description: `Free Animated & Reusable components.🙌
    A Marketplace for developers and designers.`,
      technologies: ["NodeJS", "React", "Framer Motion", "ThreeJS"],
      links: [
        {
          type: "Website",
          href: "https://ui.velour-ui.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/piyushhsainii/horsepower-cartel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1735200128/Screenshot_2024-12-26_133153_ct3cnp.png",
      video: "",
    },
    {
      type: "Design",
      title: "Orbital AI – Web3 Powered Creative Experiences",
      href: "https://orbital-rust-five.vercel.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Experience the next generation of Web3 creativity with Orbital AI. Generate stunning visuals, interact with dynamic content, and explore a decentralized future of digital art.",
      technologies: [
        "Next.js",
        "React",
        "Web3",
        "Blockchain",
        "AI Art",
        "Canvas Animations",
      ],
      links: [
        {
          type: "Website",
          href: "https://orbital-rust-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Twitter",
          href: "https://twitter.com/piyushhsainii",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/designs-assets/orbital/orbital_metadata.png",
      video: "",
      preview: {
        title: "Orbital AI – Web3 Powered Creative Experiences",
        description:
          "Explore dynamic Web3 creative experiences powered by Orbital AI. Generate, interact, and share AI-driven digital art.",
        technologies: [
          "Next.js",
          "React",
          "Web3",
          "Blockchain",
          "AI Art",
          "Canvas Animations",
        ],
        timePeriod: "2024 - Present",
        link: "https://piyushsaini.me",
        videoUrl: "",
        imageUrl:
          "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/designs-assets/orbital/orbital_metadata.png",
      },
    },
    {
      type: "Design",
      title: "Buy Me a Coffee",
      href: "https://coffee.piyushsaini.me/",
      dates: "25-12-24 - 26-12-2024",
      active: true,
      description: `Buy me a coffee?🙌`,
      technologies: ["Spline", "React"],
      links: [
        {
          type: "Website",
          href: "https://coffee.piyushsaini.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1735200006/CoffeeTemplate_uftbjt.mp4",
      preview: {
        title: "Buy Me a Coffee",
        description: "Buy me a coffee?🙌",
        technologies: ["Spline", "React"],
        timePeriod: "January 2024 - February 2024",
        link: "#",
        videoUrl:
          "https://res.cloudinary.com/dzow59kgu/video/upload/v1735200006/CoffeeTemplate_uftbjt.mp4",
        imageUrl: "",
      },
    },
  ],

  hackathons: [
    {
      title: "Open Source Contribution in 100xdevs Chess Project",
      dates: "Apr 19 2024",
      location: "",
      description:
        "Added a feature to let the user see the valid moves on the board when they are moving ",
      image:
        "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Checkout PR",
          href: "https://github.com/code100x/chess/pull/36",
        },
      ],
    },
  ],
} as const;
