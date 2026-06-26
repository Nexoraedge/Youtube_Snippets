import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-textPrimary text-surface mt-24 rounded-t-[2rem] sm:rounded-t-[3.5rem] relative overflow-hidden pt-16 sm:pt-24 px-6 sm:px-12 pb-4">
      {/* Glow Effect inside Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accentPrimary/20 blur-[100px] pointer-events-none rounded-full" />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-10 mb-20 sm:mb-32 relative z-10">

        {/* Left Side: Brand & Mission */}
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            Let's build <br className="hidden sm:block" />
            <span className="text-accentPrimary italic font-light">something extraordinary.</span>
          </h3>
          <p className="text-surface/60 font-light leading-relaxed text-sm sm:text-base">
            I craft production-ready web applications, high-performance AI tools, and elegant user experiences for the modern web.
          </p>
        </div>

        {/* Right Side: Links & Socials */}
        <div className="flex flex-col lg:items-end gap-8 lg:gap-6 w-full lg:w-auto">
          <div className="flex flex-wrap items-center gap-4">
            <Link target="_blank" href={"https://x.com/DhoniAi"} className="p-3 sm:p-4 rounded-full bg-surface/5 hover:bg-accentPrimary hover:-translate-y-1 transition-all duration-300 group">
              <FaXTwitter size={20} className="text-surface/70 group-hover:text-surface transition-colors" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/dhoni.dev_ai"} className="p-3 sm:p-4 rounded-full bg-surface/5 hover:bg-accentPrimary hover:-translate-y-1 transition-all duration-300 group">
              <FaInstagram size={20} className="text-surface/70 group-hover:text-surface transition-colors" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/devdhoni-ai/"} className="p-3 sm:p-4 rounded-full bg-surface/5 hover:bg-accentPrimary hover:-translate-y-1 transition-all duration-300 group">
              <FaLinkedin size={20} className="text-surface/70 group-hover:text-surface transition-colors" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg"} className="p-3 sm:p-4 rounded-full bg-surface/5 hover:bg-accentPrimary hover:-translate-y-1 transition-all duration-300 group">
              <FaYoutube size={20} className="text-surface/70 group-hover:text-surface transition-colors" />
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-surface/50 font-medium tracking-wide uppercase">
            <Link href="/consult" className="hover:text-accentPrimary transition-colors">Consulting</Link>
            <Link href="https://hardik-jain-portfolio.vercel.app/" className="hover:text-accentPrimary transition-colors">Portfolio</Link>
            <Link href="mailto:hardikjain2030@gmail.com" className="hover:text-accentPrimary transition-colors">Contact</Link>
          </div>
          <p className="text-surface/30 text-xs sm:text-sm mt-2 lg:mt-0">© {new Date().getFullYear()} DhoniDev-Ai. All rights reserved.</p>
        </div>

      </div>

      {/* Massive Typography spanning full width */}
      <div className="relative z-0 w-full flex items-end justify-center mt-20 overflow-hidden pointer-events-none">
        <h1 className="font-fraunces font-bold text-[12vw] leading-[0.8] tracking-tighter text-surface/[0.05] select-none text-center whitespace-nowrap">
          DHONIDEV-AI
        </h1>
      </div>

    </footer>
  );
};

export default Footer;
