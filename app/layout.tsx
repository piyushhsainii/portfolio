import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google";

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Piyush Saini | Full-Stack Engineer - Web2, AI & Web3",
  description:
    "Full-Stack Engineer specializing in Web2, AI SaaS, and Web3 development. Building scalable solutions, DeFi protocols, and intelligent platforms. Available for full-time opportunities and freelance projects.",
  keywords: [
    "Piyush Saini",
    "Full-Stack Engineer",
    "Web3 Developer",
    "Solana Engineer",
    "AI SaaS",
    "DeFi",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Blockchain Developer",
    "Rust",
    "Solidity",
    "Freelance Developer",
    "Full-Time Developer",
  ],
  authors: [{ name: "Piyush Saini", url: "https://piyushsaini.me" }],
  creator: "Piyush Saini",
  publisher: "Piyush Saini",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://piyushsaini.me",
    title: "Piyush Saini | Full-Stack Engineer - Web2, AI & Web3",
    description:
      "Full-Stack Engineer specializing in Web2, AI SaaS, and Web3 development. Building scalable solutions, DeFi protocols, and intelligent platforms. Available for full-time opportunities and freelance projects.",
    siteName: "Piyush Saini Portfolio",
    images: [
      {
        url: "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/paperfolio%20(1).png",
        width: 1200,
        height: 630,
        alt: "Piyush Saini - Full-Stack Engineer",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Piyush Saini | Full-Stack Engineer - Web2, AI & Web3",
    description:
      "Full-Stack Engineer specializing in Web2, AI SaaS, and Web3 development. Available for full-time opportunities and freelance projects.",
    creator: "@piyushsainii",
    images: [
      "https://apneajyhbpncbciasirk.supabase.co/storage/v1/object/public/nft-storage/paperfolio%20(1).png",
    ],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Alternate languages (if you have multilingual site)
  // alternates: {
  //   canonical: "https://piyushsaini.me",
  //   languages: {
  //     "en-US": "https://piyushsaini.me",
  //   },
  // },

  // App metadata
  metadataBase: new URL("https://piyushsaini.me"),

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${onest.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
