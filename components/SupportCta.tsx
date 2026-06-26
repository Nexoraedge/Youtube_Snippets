// components/SupportCTA.tsx
import Link from "next/link";
import { Coffee } from "lucide-react";

const SupportCTA = () => {
  return (
    <section className="w-full pb-32 pt-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-textPrimary px-8 py-16 sm:px-16 sm:py-20 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 group border border-textPrimary/50">
          
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accentPrimary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-accentPrimary/30 transition-colors duration-700" />

          <div className="flex-1 relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces font-medium text-surface mb-6 tracking-tight leading-[1.1]">
              Fuel my next <br className="hidden md:block" />
              <span className="italic font-light text-accentPrimary">open-source build.</span>
            </h3>
            <p className="text-base sm:text-lg text-surface/70 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Every chai goes directly into building more tools, production-ready starter kits,
              and deep-dive engineering content for the community.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/payment"
              className="inline-flex items-center justify-center rounded-full bg-accentPrimary px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-bold text-surface hover:bg-white hover:text-textPrimary transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <Coffee className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              Buy Me a Chai
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
