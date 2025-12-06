import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { User } from "lucide-react";

import { Mail, FolderOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
              Piyush Saini
            </span>
            , a Full-Stack Engineer from{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
              New Delhi
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            I help turn ideas into reality — from design to full-scale
            development. Specializing in{" "}
            <span className="font-bold text-[#2F81F7]">Web2</span>,{" "}
            <span className="font-bold text-[#7C3AED]">AI SaaS</span>, and{" "}
            <span className="font-bold text-[#9945FF]">Web3</span> applications.
            Building scalable full-stack solutions, DeFi protocols, and
            intelligent platforms. Currently{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-[#10B981]">
              <span className="inline-block w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
              open to full-time opportunities
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-[#10B981]">
              <span className="inline-block w-2 h-2 bg-[#10B981] rounded-full"></span>
              available for freelance projects
            </span>
            . Let's build your MVP and launch fast! 🚀
          </p>
          {/* 
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a
              href="https://x.com/piyushsainii"
              className="inline-flex items-center justify-center gap-2 bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
          </div> */}
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/jacked_pfp.jpg"
              alt="Piyush Saini - Web3 & Solana Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Web3 Development",
      description:
        "Building decentralized applications on Solana and Ethereum. From DeFi protocols to NFT marketplaces, staking platforms, and on-chain gaming experiences using Rust, Solidity, and Anchor.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=350&fit=crop",
    },
    {
      title: "AI SaaS Development",
      description:
        "Creating intelligent SaaS platforms powered by machine learning. Specialized in building AI-driven advertising tools, image generation systems, and automation platforms that scale.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=350&fit=crop",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with React, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable, performant applications from concept to production deployment.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=350&fit=crop",
    },
    {
      title: "Smart Contract Development",
      description:
        "Writing secure and efficient smart contracts for DeFi protocols, token standards (SPL, ERC-20), staking mechanisms, and complex on-chain logic using Solidity and Rust.",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=350&fit=crop",
    },
    {
      title: "UI/UX Design & Development",
      description:
        "Crafting beautiful, interactive user interfaces with Framer Motion, Shadcn UI, and TailwindCSS. From landing pages to complex dashboards, focusing on user experience and conversion.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=350&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad{" "}
              <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">
                set of services
              </span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              From Web3 and AI to full-stack development, I offer comprehensive
              engineering services to turn your ideas into production-ready
              applications. Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">
                    {service.title}
                  </h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <svg
                  className="w-[92px] h-[92px]"
                  viewBox="0 0 92 92"
                  fill="none"
                >
                  <circle cx="46" cy="46" r="46" fill="#000" />
                  <path
                    d="M46 30v32M30 46h32"
                    stroke="#FFC224"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">
                Get in touch
              </h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a
                high chance that I will be able to help!
              </p>
              <a
                href="mailto:sainipiyush8860@gmail.com"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px] transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/jacked_pfp.jpg"
              alt="Piyush Saini - Web3 & Solana Engineer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                great work?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Hey! I'm Piyush Saini, a Full-Stack Engineer. I help turn ideas
              into reality — from design to full-scale development. Currently{" "}
              <span className="relative inline-flex items-center gap-2 font-semibold text-[#10B981]">
                <svg
                  className="w-4 h-4 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="#10B981" />
                  <circle cx="12" cy="12" r="6" fill="#FFF" />
                </svg>
                open to full-time opportunities
              </span>{" "}
              and{" "}
              <span className="relative inline-flex items-center gap-2 font-semibold text-[#10B981]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11l3 3L22 4"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                available for freelance projects
              </span>
              . Let's build your MVP and launch fast! 🚀
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Open to Full-Time & Freelance Work
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Available for full-time engineering roles and freelance
                  projects. Specializing in building AI-powered platforms, Web3
                  applications, and scalable full-stack solutions from concept
                  to deployment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  15+ successful projects shipped
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  From AI SaaS platforms to Web3 DeFi protocols, NFT
                  marketplaces, and on-chain gaming experiences. Specialized in
                  React, Next.js, TypeScript, Solana, and Rust.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://piyushsaini.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] justify-center transition-colors"
          >
            <User className="w-5 h-5" />
            More about me
          </a>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const experiences = [
    {
      period: "Feb 2025 - Present",
      title: "Founding Engineer",
      description:
        "Building the core infrastructure and AI systems at Alace AI. Leading full-stack development to create an autonomous advertising platform that optimizes ROAS and CPA using machine learning algorithms.",
      icon: "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
      company: "Alace AI",
      location: "Remote",
    },
    {
      period: "Jan 2025 - Mar 2025",
      title: "Full Stack Developer",
      description:
        "Developed and deployed scalable web applications for Dream Launch Studios. Implemented modern frontend architectures and backend services, focusing on performance optimization and user experience.",
      icon: "https://pbs.twimg.com/profile_images/1893716032113823744/EI5zkPl-_400x400.png",
      company: "Dream Launch Studios",
      location: "Remote",
    },
    {
      period: "Aug 2024 - Oct 2024",
      title: "Frontend Engineer",
      description:
        "Built responsive and performant user interfaces at Vexio. Collaborated with design and backend teams to deliver seamless user experiences using modern React patterns and best practices.",
      icon: "https://cdn.vexio.in/vlogo.jpeg?w=48&q=75",
      company: "Vexio",
      location: "Remote",
    },
  ];

  const projects = [
    {
      title: "Alace AI",
      description:
        "AI-powered advertising platform that runs your ads on autopilot, continuously optimizing to improve ROAS and CPA. Built with NextJS, TypeScript, and PostgreSQL for enterprise-scale performance.",
      tag: "AI SaaS",
      logo: "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
      bgColor: "bg-[#6366F1]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1745697331/Screenshot_2025-04-27_012454_du8kbr.png",
      link: "https://alace.ai/",
      showOnWebsite: true,
    },
    {
      title: "Rugs-Fun - On Chain Trading Game",
      description:
        "Trade, risk, and cash out before it rugs. An adrenaline-fueled on-chain crash game for degens who love the thrill of timing the perfect exit. Built with NextJS, TypeScript, Node.js, and Web Sockets for real-time trading.",
      tag: "WEB3 Gaming",
      logo: "Rugs-funv2.png",
      bgColor: "bg-[#2F81F7]",
      illustration: "Rugs-funv2.png",
      link: "https://rugs-funn.vercel.app/",
      showOnWebsite: true,
    },
    {
      title: "SOL-Backed Stablecoin on Solana",
      description:
        "A decentralized USD-pegged stablecoin protocol on Solana. Deposit SOL as collateral, mint stablecoins, and maintain stability via Pyth oracles and liquidations. Built with Anchor, SPL Token 2022, and real-time oracle pricing.",
      tag: "WEB3 DeFi",
      logo: "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      bgColor: "bg-[#14F195]",
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      link: "https://my-stable-coin.vercel.app/",
      showOnWebsite: true,
    },
    {
      title: "SolMint",
      description:
        "Mint Your Own NFT on Solana Instantly. A streamlined NFT creation platform built with NextJS and Solana Web3, enabling users to create and mint NFTs on the Solana blockchain with just a few clicks.",
      tag: "WEB3 NFT",
      logo: null,
      bgColor: "bg-[#9945FF]",
      illustration: "/NFT-CREATION-WALKTHROUGH.mp4",
      link: "https://sol-minti.vercel.app/",
      showOnWebsite: true,
      isVideo: true,
    },
    {
      title: "Liquid ETH",
      description:
        "Secure, decentralized, and profitable ETH Staking Protocol. Start earning rewards by staking your ETH today. Built with NextJS and Solidity, offering liquid staking tokens for maximum capital efficiency.",
      tag: "WEB3 Staking",
      logo: null,
      bgColor: "bg-[#627EEA]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1752525947/Screenshot_2025-07-15_021504_c0qrhz.png",
      link: "https://liquid-eth.vercel.app/",
      showOnWebsite: true,
    },
    {
      title: "RunPod – Decentralized GPU Power, On Demand",
      description:
        "Rent high-performance GPUs to run large LLMs, image generation models, and more—all via our streamlined Solana-powered dashboard. Whether you're building AI models, generating art, or crunching data, Fast. Secure. Pay-as-you-go.",
      tag: "AI Infrastructure",
      logo: null,
      bgColor: "bg-[#7C3AED]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1752521218/FooocusWithLatestAI_z7trqo.mp4",
      link: "#",
      showOnWebsite: false,
      isVideo: true,
    },
    {
      title: "Pixel Brew AI",
      description:
        "Pixel Perfect Thumbnails, Brewed by AI. This SaaS model lets you generate your own custom images with PixelBrew AI. Built with React, TypeScript, PostgreSQL, and advanced AI image generation models.",
      tag: "AI SaaS",
      logo: null,
      bgColor: "bg-[#EC4899]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1729867943/pixelbrew_landingPage_ybdppe.mp4",
      link: "https://pixelbrew-ai.vercel.app/",
      showOnWebsite: false,
      isVideo: true,
    },
    {
      title: "Velour UI",
      description:
        "Free Animated & Reusable components. A Marketplace for developers and designers featuring beautiful, production-ready components built with React, Framer Motion, and ThreeJS. Coming soon!",
      tag: "UI Library",
      logo: null,
      bgColor: "bg-[#F59E0B]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1735200128/Screenshot_2024-12-26_133153_ct3cnp.png",
      link: "https://ui.velour-ui.tech/",
      showOnWebsite: false,
    },
    {
      title: "Personal Branding Template",
      description:
        "A stunning personal branding template built with NextJS and Framer Motion. Features smooth animations, modern design patterns, and fully customizable sections perfect for creators and professionals.",
      tag: "Design Template",
      logo: null,
      bgColor: "bg-[#8B5CF6]",
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/designs-assets/elite-coaching.mp4",
      link: "https://elite-coaching-green.vercel.app/",
      showOnWebsite: false,
      isVideo: true,
    },
    {
      title: "Campaign Marketing Landing Page",
      description:
        "A high-converting campaign marketing landing page built with React. Features modern UI/UX design, engaging animations, and optimized conversion funnels for maximum impact.",
      tag: "Landing Page",
      logo: null,
      bgColor: "bg-[#10B981]",
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/climateLandingDemo.mp4",
      link: "https://climate-landing.vercel.app/",
      showOnWebsite: false,
      isVideo: true,
    },
    {
      title: "Buy Me a Coffee",
      description:
        "Buy me a coffee? An interactive 3D experience built with Spline and React, featuring stunning visuals and smooth animations. A creative take on the classic support platform.",
      tag: "3D Design",
      logo: null,
      bgColor: "bg-[#D97706]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/video/upload/v1735200006/CoffeeTemplate_uftbjt.mp4",
      link: "https://coffee.piyushsaini.me/",
      showOnWebsite: false,
      isVideo: true,
    },
  ];

  // Filter projects to show only those with showOnWebsite: true
  const visibleProjects = projects.filter((project) => project.showOnWebsite);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              featured projects
            </span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                {project.logo && (
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={120}
                      height={32}
                      className="h-6 md:h-8 w-auto object-contain"
                    />
                  </div>
                )}

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View live project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}
              >
                {project.isVideo ? (
                  <video
                    src={project.illustration}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://piyushsaini.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all projects
          </a>
        </div>
      </div>
    </section>
  );
}
