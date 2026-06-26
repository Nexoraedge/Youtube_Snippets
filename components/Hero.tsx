// components/HeroSection.tsx
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Moves the hero content down slightly and fades it out as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 overflow-hidden">
      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Elegant Badge */}


        {/* Heading in Fraunces */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-fraunces font-medium tracking-tight text-textPrimary mb-8 leading-[1.1]">
          Turning Code into <br className="hidden sm:block" />
          <span className="text-accentPrimary italic font-light">
            Digital Empires.
          </span>
        </h1>

        {/* Subtext in Manrope */}
        <p className="text-lg sm:text-xl md:text-2xl text-textMuted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          I'm DhoniDev-Ai. I craft production-ready web applications, high-performance AI tools, and elegant user experiences for the modern web.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/consult"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold bg-textPrimary text-surface hover:bg-black transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(45,36,34,0.15)]"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>

          <Link
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold border border-borderSubtle text-textPrimary bg-surface hover:border-textMuted transition-all hover:-translate-y-1 shadow-sm"
          >
            Explore My Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
