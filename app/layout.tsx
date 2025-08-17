
import type { Metadata } from "next";
import { Roboto_Slab} from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next"
import Report_bug from "@/components/Report_bug";
// import { SessionProvider } from "next-auth/react";

const geistSans = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "DevDhoni-AI",
  description: "Learn and Explore about AI , AI related tools and AI related projects . This page is by DevdhoniAi youtube creater. You can find more about AI and AI related tools and AI related projects on this page and Assets  , Links and Snippets are also available on this page. ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} min-h-screen overflow-x-hidden  antialiased`}
      >
        
       <Providers>
       
          {children}
          <Report_bug/>
          <Analytics />    
       </Providers>
       
      </body>
    </html>
  );
}
