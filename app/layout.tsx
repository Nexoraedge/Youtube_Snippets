
import type { Metadata } from "next";
import { Inter, Outfit, Saira } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next"
import Report_bug from "@/components/Report_bug";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const getSaira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DhoniDev-Ai",
  description: "DhoniDev-Ai - Turning Code into Digital Empires",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3019966740942573"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${getSaira.variable} min-h-screen overflow-x-hidden antialiased bg-[#0B1120] text-slate-100 font-inter`}
      >

        <Providers>

          {children}
          <Report_bug />
          <Analytics />
        </Providers>

      </body>
    </html>
  );
}
