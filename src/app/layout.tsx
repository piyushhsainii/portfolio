import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Piyush Saini",
  description: "Nerd Today, Boss Tomorrow",
  openGraph: {
    title: "Piyush Saini",
    description: "Nerd Today, Boss Tomorrow",
    images: [
      {
        url: "https://res.cloudinary.com/dzow59kgu/image/upload/v1752593263/portfolioImg_fbovbd.png", // Relative to the public/ directory
        width: 1200,
        height: 630,
        alt: "Piyush Saini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Saini",
    description: "Nerd Today, Boss Tomorrow",
    images: [
      "https://res.cloudinary.com/dzow59kgu/image/upload/v1752593263/portfolioImg_fbovbd.png",
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
