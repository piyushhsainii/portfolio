import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PortfolioSection() {
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
      title: "Design Templates",
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
    <section className="max-h-[1300px] mb-6 max-w-[1300px] overflow-y-auto mx-auto px-4 py-16 md:py-24">
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
