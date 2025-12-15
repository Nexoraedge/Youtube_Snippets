// components/SupportCTA.tsx
import Link from "next/link";
import { Coffee } from "lucide-react";

const SupportCTA = () => {
  return (
    <section className="w-full pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#00C896]/15 via-black to-black backdrop-blur-xl px-5 py-6 sm:px-7 sm:py-7">
          {/* Subtle top spotlight */}
          <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)] opacity-70" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-200/90 mb-1">
                Support
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-50 mb-1.5">
                Enjoying the free resources? Fuel my next build.
              </h3>
              <p className="text-sm text-slate-300/90 max-w-md">
                Every chai goes directly into building more tools, starter kits,
                and deep-dive videos for the dev community.
              </p>
            </div>

            <Link
              href="/payment"
              className="inline-flex items-center rounded-full border border-[#00C896]/60 bg-[#00C896]/15 px-4 py-2 text-sm font-medium text-[#00C896] hover:bg-[#00C896]/25 transition-colors"
            >
              <Coffee className="h-4 w-4 mr-1.5" />
              Buy Me a Chai
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
