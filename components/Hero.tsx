// components/HeroSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 mb-6">
          <span className="p-[3] mr-1 bg-[#00C896] rounded"></span>
          <span>Building AI Tools &amp; Helping 2k+ Devs</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
          Turning Code into{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(120deg,#ffffff,#00C896)]">
            Digital Empires.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto mb-8">
          I&apos;m Hardik Jain, a Full Stack AI Developer based in Jaipur. I
          build production-ready AI apps like{" "}
          <span className="font-medium text-slate-100">ToneGenie</span> and
          create open-source starter kits to help developers ship faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#00C896] text-black hover:bg-[#05e0ac] transition-colors"
          >
            Get Starter Kits
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Link>

          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-white/10 text-slate-100 hover:bg-white/5 transition-colors sm:ml-3 mt-2 sm:mt-0"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
