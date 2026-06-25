import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const STARTUPS = [
  {
    id: 1,
    title: 'ToneGenie',
    type: 'AI Keyboard App',
    description: 'An AI-powered keyboard for Android. Real-time translation, grammar fixes, and tone control powered by Gemini Flash.',
    tech: ['Next.js', 'Supabase', 'Kotlin'],
    link: '#',
    status: 'Live',
    color: '#00C896'
  },
  {
    id: 2,
    title: 'CodeSnippets',
    type: 'Developer Tool',
    description: 'A premium platform to save, share, and monetize code snippets directly from your IDE.',
    tech: ['React', 'Node.js', 'Tailwind'],
    link: '#',
    status: 'Beta',
    color: '#3B82F6'
  },
  {
    id: 3,
    title: 'TypePilot',
    type: 'SaaS Platform',
    description: 'Autonomous AI agents that navigate your SaaS platform and perform complex actions based on user prompts.',
    tech: ['Next.js', 'OpenAI', 'PostgreSQL'],
    link: '#',
    status: 'Development',
    color: '#A855F7'
  }
];

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-inter">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
            <span className="p-1 mr-2 bg-emerald-400 rounded-full animate-pulse"></span>
            My Ventures
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gradient">
            Startups & Products
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A collection of products, companies, and SaaS tools I have built and launched. Everything from developer tools to consumer AI apps.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STARTUPS.map((startup, i) => (
            <div 
              key={startup.id} 
              className="group relative flex flex-col glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top gradient border effect */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${startup.color}, transparent)` }}
              ></div>

              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
                  style={{ color: startup.color }}
                >
                  {/* Placeholder icon since we don't have images */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  {startup.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{startup.title}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: startup.color }}>{startup.type}</p>
              
              <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
                {startup.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {startup.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded-md text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>

              <Link 
                href={startup.link}
                className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors mt-auto"
              >
                View Project <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
