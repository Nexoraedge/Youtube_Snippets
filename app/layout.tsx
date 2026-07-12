
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next"
import Report_bug from "@/components/Report_bug";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhonidev-ai.vercel.app"),
  title: {
    default: "DhoniDev-Ai | Turning Code into Digital Empires",
    template: "%s | DhoniDev-Ai",
  },
  description: "DhoniDev-Ai crafts production-ready web applications, high-performance AI tools, and elegant user experiences for the modern web.",
  keywords: ["DhoniDev-Ai", "Next.js", "React", "Web Development", "AI Developer", "Software Consultant"],
  authors: [{ name: "DhoniDev-Ai" }],
  creator: "DhoniDev-Ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhonidev-ai.vercel.app/",
    siteName: "DhoniDev-Ai",
    title: "DhoniDev-Ai | Turning Code into Digital Empires",
    description: "Production-ready web applications, high-performance AI tools, and elegant user experiences for the modern web.",
    images: [
      {
        url: "https://dhonidev-ai.vercel.app/img/logo.png",
        width: 800,
        height: 600,
        alt: "DhoniDev-Ai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DhoniDev-Ai | Turning Code into Digital Empires",
    description: "Production-ready web applications, high-performance AI tools, and elegant user experiences.",
    creator: "@DhoniAi",
    images: ["https://dhonidev-ai.vercel.app/img/logo.png"],
  },
  verification: {
    google: "D87VTnJsolS_W9I3yySE_xQryr4Lbl-y_u53LdVgtS8",
  },
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
        className={`${fraunces.variable} ${manrope.variable} min-h-screen overflow-x-hidden antialiased bg-background text-textPrimary font-manrope`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "DhoniDev-Ai",
                  "url": "https://dhonidev-ai.vercel.app/",
                  "sameAs": [
                    "https://youtube.com/@DhoniDev-Ai",
                    "https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg"
                  ]
                },
                {
                  "@type": "WebSite",
                  "name": "DhoniDev-Ai",
                  "url": "https://dhonidev-ai.vercel.app/"
                }
              ]
            })
          }}
        />
        
        <Providers>
          <SmoothScroll>
            {children}
            <Report_bug />
            <Analytics />
          </SmoothScroll>
        </Providers>

      </body>
    </html>
  );
}
