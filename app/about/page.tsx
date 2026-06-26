import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about DhoniDev-Ai, my mission to empower developers to code 10x faster, and my journey building production-ready AI tools and SaaS architectures.',
};
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Youtube, Twitter, Linkedin, ArrowUpRight, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-textPrimary">
      <Navbar />
      
      <div className="flex-1 pt-32 sm:pt-40 pb-32 px-6 max-w-7xl mx-auto w-full">
        {/* Editorial Header Section */}
        <div className="flex flex-col mb-20 text-center items-center">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-bold mb-4">
            The Story Behind The Code
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-fraunces font-medium tracking-tighter mb-8 leading-[1.1] max-w-4xl">
            Empowering Developers to <br className="hidden sm:block" />
            <span className="italic font-light text-accentPrimary">Code 10x Faster</span>
          </h1>
          <p className="text-textMuted max-w-2xl text-lg sm:text-xl font-light leading-relaxed">
            I am DhoniDev-Ai, a full-stack engineer and content creator. I explore the bleeding edge of AI-powered IDEs, web infrastructure, and modern SaaS architectures—and I share everything I learn.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {/* Mission Card */}
          <div className="md:col-span-1 rounded-[2.5rem] p-10 sm:p-12 bg-surface border border-borderSubtle flex flex-col shadow-sm hover:shadow-xl hover:border-textMuted transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-background border border-borderSubtle mb-8 text-accentPrimary shadow-sm">
              <Target size={28} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-fraunces font-semibold text-textPrimary mb-6 tracking-tight">My Mission</h3>
            <p className="text-textMuted leading-relaxed font-light text-lg">
              The software landscape is shifting rapidly. With tools like Cursor, Windsurf, and Google Antigravity, the barrier to building complex software has never been lower. My mission is to demystify these AI tools and teach developers how to harness them to build production-ready applications with incredible speed.
            </p>
          </div>

          {/* YouTube Channel Stats/Info Card (Deep Espresso) */}
          <div className="md:col-span-1 rounded-[2.5rem] p-10 sm:p-12 bg-textPrimary text-surface flex flex-col shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accentPrimary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-accentPrimary/30 transition-colors duration-700" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-surface/10 border border-surface/20 mb-8 text-accentPrimary relative z-10 shadow-sm">
              <Youtube size={28} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-fraunces font-semibold text-surface mb-6 tracking-tight relative z-10">The Channel</h3>
            <p className="text-surface/70 leading-relaxed font-light text-lg mb-10 relative z-10">
              Through my YouTube channel, I provide deep-dive tutorials on deploying websites, integrating Authentication, leveraging databases like Supabase, and mastering modern frameworks like Next.js and Laravel.
            </p>
            
            <Link 
              href="https://youtube.com/@DhoniDev-Ai"
              target="_blank"
              className="mt-auto inline-flex items-center justify-center py-4 px-8 rounded-full font-bold text-sm bg-accentPrimary text-surface hover:bg-white hover:text-textPrimary transition-all duration-300 shadow-lg w-fit relative z-10"
            >
              Subscribe on YouTube <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Social Links & Bio */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-surface border border-borderSubtle rounded-[3rem] p-10 sm:p-16 shadow-xl">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shrink-0 border-8 border-background shadow-2xl">
             <Image src="/img/avatar.jpg" alt="DhoniDev-Ai" width={300} height={300} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-fraunces font-bold text-textPrimary mb-3 tracking-tight">DhoniDev-Ai</h2>
            <p className="text-accentPrimary font-bold text-sm uppercase tracking-widest mb-6">Full Stack Engineer & Creator</p>
            
            <p className="text-textMuted text-lg font-light leading-relaxed mb-10">
              I believe in building in public. By sharing my journey of creating SaaS platforms and exploring AI, I hope to inspire the next generation of builders to execute their ideas without fear.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link href="https://youtube.com/@DhoniDev-Ai" target="_blank" className="w-14 h-14 rounded-full bg-background border border-borderSubtle flex items-center justify-center hover:border-textMuted hover:text-accentPrimary transition-all duration-300 shadow-sm hover:shadow-md">
                <Youtube size={24} />
              </Link>
              <Link href="https://x.com/DhoniAi" target="_blank" className="w-14 h-14 rounded-full bg-background border border-borderSubtle flex items-center justify-center hover:border-textMuted hover:text-accentPrimary transition-all duration-300 shadow-sm hover:shadow-md">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/devdhoni-ai/" target="_blank" className="w-14 h-14 rounded-full bg-background border border-borderSubtle flex items-center justify-center hover:border-textMuted hover:text-accentPrimary transition-all duration-300 shadow-sm hover:shadow-md">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}