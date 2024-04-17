import type { Metadata } from "next";
import { Inter , Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: [ "latin"] });

export const metadata: Metadata = {
  title: "Piyush Saini",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pfp.png" />
      </head>
      <body className={raleway.className}>
        {children}
        </body>
    </html>
  );
}
