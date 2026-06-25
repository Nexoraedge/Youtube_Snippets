import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0B1120]/80 backdrop-blur-xl mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="font-outfit font-bold text-xl tracking-wide text-white">DhoniDev-Ai</span>
          <p className="text-sm text-slate-400">© 2026 DhoniDev-Ai. All rights reserved.</p>
        </div>
        <div className="flex gap-4 items-center">

        <Link target="_blank" href={"https://x.com/DhoniAi"} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300">
          <FaXTwitter size={20} className="text-zinc-400 hover:text-white transition-colors" />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/dhoni.dev_ai"} className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300">
          <FaInstagram size={20} className="text-zinc-400 hover:text-pink-500 transition-colors" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/devdhoni-ai/"}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin size={20} className="text-zinc-400 hover:text-[#0077B6] transition-colors" />
        </Link>
        <Link target="_blank" href={"https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg"}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <FaYoutube size={20} className="text-zinc-400 hover:text-[#FF0000] transition-colors" />
        </Link>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
