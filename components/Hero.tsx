// components/HeroSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Premium glowing orb in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C896]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default shadow-[0_0_15px_rgba(0,200,150,0.1)]">
          <span className="relative flex h-2.5 w-2.5 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C896] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C896]"></span>
          </span>
          <span>Building AI Tools &amp; Helping 2k+ Devs</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-outfit font-bold tracking-tight text-white mb-6 leading-tight">
          Turning Code into <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-[#00C896]">
            Digital Empires.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          I&apos;m DhoniDev-Ai, a Full Stack AI Developer. I build production-ready AI apps like <span className="font-medium text-white">ToneGenie</span> and create open-source starter kits to help developers ship faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/consult"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-[#00C896] text-black hover:bg-[#05e0ac] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,200,150,0.3)] hover:shadow-[0_0_30px_rgba(0,200,150,0.5)]"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>

          <Link
            href="/startups"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105"
          >
            View My Startups
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
