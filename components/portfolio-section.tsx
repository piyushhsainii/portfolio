"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Rugs-Fun - On Chain Trading Game",
      description:
        "Trade, risk, and cash out before it rugs. An adrenaline-fueled on-chain crash game for degens who love the thrill of timing the perfect exit. Built with NextJS, TypeScript, Node.js, and Web Sockets for real-time trading.",
      tag: "WEB3 Gaming",
      category: "web3",
      logo: "/Rugs-funv2-1.png",
      bgColor: "bg-[#2F81F7]",
      illustration: "/rugsfun.mp4",
      link: "https://rugs-funn.vercel.app/",
      showOnWebsite: true,
      isVideo: true,
    },
    {
      title: "Alace AI",
      description:
        "AI-powered advertising platform that runs your ads on autopilot, continuously optimizing to improve ROAS and CPA. Built with NextJS, TypeScript, and PostgreSQL for enterprise-scale performance.",
      tag: "AI SaaS",
      category: "web2",
      logo: "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
      bgColor: "bg-[#6366F1]",
      illustration: "/alace_ai_final_preview.mp4",
      link: "https://alace.ai/",
      showOnWebsite: true,
      isVideo: true,
    },
    {
      title: "SOL-Backed Stablecoin on Solana",
      description:
        "A decentralized USD-pegged stablecoin protocol on Solana. Deposit SOL as collateral, mint stablecoins, and maintain stability via Pyth oracles and liquidations. Built with Anchor, SPL Token 2022, and real-time oracle pricing.",
      tag: "WEB3 DeFi",
      category: "web3",
      logo: "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      bgColor: "bg-[#14F195]",
      illustration:
        "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/aura.jpg",
      link: "https://my-stable-coin.vercel.app/",
      showOnWebsite: true,
    },
    {
      title: "Design Engineer Portfolio",
      description: "My Design Portfolio",
      tag: "Design Template",
      category: "design",
      logo: null,
      bgColor: "bg-[#8B5CF6]",
      illustration: "/summarywork.mp4",
      link: "https://designs.piyushsaini.me",
      showOnWebsite: true,
      isVideo: true,
    },
    {
      title: "SolMint",
      description:
        "Mint Your Own NFT on Solana Instantly. A streamlined NFT creation platform built with NextJS and Solana Web3, enabling users to create and mint NFTs on the Solana blockchain with just a few clicks.",
      tag: "WEB3 NFT",
      category: "web3",
      logo: null,
      bgColor: "bg-[#9945FF]",
      illustration: "/NFT-CREATION-WALKTHROUGH.mp4",
      link: "https://sol-minti.vercel.app/",
      showOnWebsite: true,
      isVideo: true,
    },
    {
      title: "Delusion Calculator",
      description: "",
      tag: "",
      category: "web2",
      logo: null,
      bgColor: "bg-[#627EEA]",
      illustration: "/DelusionCalculatorHero.png",
      link: "https://delusion-calculator.vercel.app/",
      showOnWebsite: true,
    },
    {
      title: "Liquid ETH",
      description:
        "Secure, decentralized, and profitable ETH Staking Protocol. Start earning rewards by staking your ETH today. Built with NextJS and Solidity, offering liquid staking tokens for maximum capital efficiency.",
      tag: "WEB3 Staking",
      category: "web3",
      logo: null,
      bgColor: "bg-[#627EEA]",
      illustration:
        "https://res.cloudinary.com/dzow59kgu/image/upload/v1752525947/Screenshot_2025-07-15_021504_c0qrhz.png",
      link: "https://liquid-eth.vercel.app/",
      showOnWebsite: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web3", label: "Web3" },
    { id: "web2", label: "Web2" },
    { id: "design", label: "Design" },
  ];

  // Filter projects based on active filter and showOnWebsite
  const filteredProjects = projects.filter((project) => {
    if (!project.showOnWebsite) return false;
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section className="mb-6 max-w-[1300px] mx-auto px-4 py-16 md:py-24">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              featured projects
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all border-2 border-black ${
                activeFilter === filter.id
                  ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="space-y-8 mb-12 max-h-[1300px] overflow-y-auto w-[85%] mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] m-5 border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-9 flex flex-col justify-center bg-white">
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
                className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[450px]`}
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
