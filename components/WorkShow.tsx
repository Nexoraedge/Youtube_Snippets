// components/WorkShowcase.tsx
import { ArrowUpRight } from "lucide-react";

const WorkShowcase = () => {
  return (
    <section id="work" className="w-full pb-20 pt-10 px-4 relative overflow-hidden">
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full flex justify-center">
        <h1 className="font-fraunces font-bold text-[22vw] sm:text-[20vw] leading-none tracking-tighter text-textPrimary/[0.03] select-none whitespace-nowrap">
          PORTFOLIO
        </h1>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col mb-12">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-semibold mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-fraunces font-medium tracking-tight text-textPrimary">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* 1. PropDesk Card */}
          <div className="relative overflow-hidden rounded-2xl border border-borderSubtle bg-surface/80 backdrop-blur-md p-8 group shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-accentPrimary font-bold mb-3">
                Property Management
              </p>
              <h3 className="text-2xl font-fraunces font-semibold text-textPrimary mb-3">
                The PropDesk
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                Modern property management software designed for real estate professionals to streamline operations, billing, and tenant tracking.
              </p>
              
              <div className="flex items-center text-xs font-semibold text-accentPrimary uppercase tracking-wider mb-6">
                Next.js • Supabase • TailwindCSS
              </div>

              <a href="https://thepropdesk.in" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-textPrimary group-hover:text-accentPrimary transition-colors">
                View live site
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* 2. TypePilot Card */}
          <div className="relative overflow-hidden rounded-2xl border border-borderSubtle bg-surface/80 backdrop-blur-md p-8 group shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-textMuted font-bold mb-3">
                AI Keyboard
              </p>
              <h3 className="text-2xl font-fraunces font-semibold text-textPrimary mb-3">
                TypePilot
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                Real-time translation, grammar fixes, and tone control directly
                in your keyboard. Powered by Gemini Flash with an obsession for latency and UX.
              </p>
              
              <div className="flex items-center text-xs font-semibold text-textMuted uppercase tracking-wider mb-6">
                Next.js • Edge Functions • Android IME
              </div>

              <a href="https://gettypepilot.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-textPrimary group-hover:text-accentPrimary transition-colors">
                Get TypePilot
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* 3. ToneGenie Extension Card */}
          <div className="relative overflow-hidden rounded-2xl border border-borderSubtle bg-surface/80 backdrop-blur-md p-8 group shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-textMuted font-bold mb-3">
                Chrome Extension
              </p>
              <h3 className="text-2xl font-fraunces font-semibold text-textPrimary mb-3">
                ToneGenie
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                AI-powered text enhancer for Chrome. Instantly rewrite, summarize, or change the tone of your writing anywhere on the web.
              </p>
              
              <div className="flex items-center text-xs font-semibold text-textMuted uppercase tracking-wider mb-6">
                React • Chrome API • AI
              </div>

              <a href="https://tone-genie.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-textPrimary group-hover:text-accentPrimary transition-colors">
                Add to Chrome
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* 4. Starter Kits Card */}
          <div className="relative overflow-hidden rounded-2xl border border-borderSubtle bg-surface/80 backdrop-blur-md p-8 group shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-textMuted font-bold mb-3">
                Open Source
              </p>
              <h3 className="text-2xl font-fraunces font-semibold text-textPrimary mb-3">
                AI SaaS Boilerplates
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                Pre-wired stacks for Next.js and Clerk Auth. Save 10+ hours of setup with authentication, billing, and basic AI flows ready on day one.
              </p>
              
              <div className="flex items-center text-xs font-semibold text-textMuted uppercase tracking-wider mb-6">
                Next.js • Clerk Auth • Tailwind
              </div>

              <a href="https://github.com/Nexoraedge" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-textPrimary group-hover:text-accentPrimary transition-colors">
                Explore on GitHub
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
