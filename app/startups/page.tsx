import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Startups & Products',
  description: 'Explore my portfolio of production-ready SaaS tools, AI platforms, and developer utilities including The PropDesk and TypePilot.',
};
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const STARTUPS = [


  {
    id: 1,
    title: 'The PropDesk',
    type: 'Real Estate CRM',
    description: 'A specialized property management CRM built for the Indian market. Features an AI-driven Smart Match Engine, local unit support (Gaj, Bigha), and 1-click WhatsApp property sharing.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: 'https://thepropdesk.in',
    status: 'Live',
    color: '#D95C37'
  },
  {
    id: 2,
    title: 'TypePilot',
    type: 'AI Keyboard App',
    description: 'An intelligent Android keyboard powered by the Gemini API. Delivers real-time translation, dynamic tone adjustments, and grammar fixes directly within any app you type in.',
    tech: ['Kotlin', 'Supabase', 'Gemini API'],
    link: 'https://gettypepilot.com',
    status: 'Live',
    color: '#00C896'
  },
  {
    id: 3,
    title: 'ToneGenie',
    type: 'Chrome Extension',
    description: 'An AI-powered text enhancement extension for Google Chrome. Seamlessly refine your writing tone, draft smart replies, and eliminate grammar mistakes on any web page.',
    tech: ['React', 'Chrome APIs', 'Tailwind'],
    link: 'https://tone-genie.vercel.app',
    status: 'Beta',
    color: '#3B82F6'
  }
];

export default function StartupsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-textPrimary">
      <Navbar />

      <div className="flex-1 pt-32 sm:pt-40 pb-32 px-6 max-w-7xl mx-auto w-full">
        {/* Editorial Header Section */}
        <div className="flex flex-col mb-20">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-bold mb-4">
            My Ventures
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-fraunces font-medium tracking-tighter mb-8 leading-[1.1]">
            Startups & <br className="hidden sm:block" />
            <span className="italic font-light text-accentPrimary">Products</span>
          </h1>
          <p className="text-textMuted max-w-2xl text-lg sm:text-xl font-light leading-relaxed">
            A curated collection of production-ready SaaS tools, AI platforms, and developer utilities I have engineered and launched to the world.
          </p>
        </div>

        {/* Editorial Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STARTUPS.map((startup, i) => (
            <div
              key={startup.id}
              className="group relative flex flex-col bg-surface border border-borderSubtle rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-textMuted"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-8 right-8">
                <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-borderSubtle bg-background text-textPrimary shadow-sm group-hover:border-textMuted transition-colors">
                  {startup.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-background border border-borderSubtle shadow-sm mb-8 text-textMuted group-hover:scale-110 group-hover:text-accentPrimary transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-textMuted font-bold mb-2 group-hover:text-accentPrimary transition-colors">
                  {startup.type}
                </p>
                <h3 className="text-3xl font-fraunces font-semibold text-textPrimary mb-4 tracking-tight">
                  {startup.title}
                </h3>

                <p className="text-textMuted text-base mb-8 leading-relaxed font-light">
                  {startup.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {startup.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 bg-background border border-borderSubtle rounded-md text-textMuted font-medium shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={startup.link}
                  className="inline-flex items-center text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors mt-4 w-fit"
                >
                  Explore Project <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
