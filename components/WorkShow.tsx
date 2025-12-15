// components/WorkShowcase.tsx
import { ArrowUpRight, Sparkles } from "lucide-react";

const WorkShowcase = () => {
  return (
    <section id="work" className="w-full pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Featured Work
          </h2>
          <div className="hidden sm:inline-flex items-center text-xs text-slate-400">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            AI-first, production-ready builds.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* ToneGenie Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl p-4 sm:p-5 group">
            <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/80 mb-2">
                ToneGenie · AI Keyboard
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-50 mb-2">
                AI Keyboard Service for Android
              </h3>
              <p className="text-sm text-slate-300/90 mb-3">
                Real-time translation, grammar fixes, and tone control directly
                in your keyboard. Powered by{" "}
                <span className="font-medium text-slate-100">Gemini Flash</span>{" "}
                with an obsession for latency and UX.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Built with Next.js, Edge Functions, and streaming AI endpoints.
              </p>

              <button className="inline-flex items-center text-xs font-medium text-emerald-300 hover:text-emerald-200">
                View case study
                <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </button>
            </div>
          </div>

          {/* Starter Kits Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl p-4 sm:p-5 group">
            <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(0,200,150,0.12),_transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300/80 mb-2">
                Next.js Starter Kits
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-50 mb-2">
                Production-ready AI SaaS Boilerplates
              </h3>
              <p className="text-sm text-slate-300/90 mb-3">
                Pre-wired stacks for{" "}
                <span className="font-medium text-slate-100">
                  Clerk, Supabase, and OpenAI
                </span>
                . Save 10+ hours of setup with auth, billing, DB schema, and
                basic AI flows ready on day one.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Perfect for indie hackers and teams who want to ship quickly
                without fighting boilerplate.
              </p>

              <button className="inline-flex items-center text-xs font-medium text-[#00C896] hover:text-emerald-200">
                Explore starter kits
                <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
