import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { User } from "lucide-react";

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
              Hey! I'm Piyush Saini, a Web3 & Solana Engineer. I help turn ideas
              into reality — from design to full-scale development. Currently{" "}
              <span className="font-semibold text-[#10B981]">
                open to full-time opportunities
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#10B981]">
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
      logo: "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/rugs-fun/metadataImg.png",
      bgColor: "bg-[#2F81F7]",
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/rugs-fun/metadataImg.png",
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
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/NFT-CREATION-WALKTHROUGH.mp4",
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
      showOnWebsite: true,
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
      showOnWebsite: true,
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
      showOnWebsite: true,
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
      showOnWebsite: true,
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
      showOnWebsite: true,
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
      </div>
    </section>
  );
}
