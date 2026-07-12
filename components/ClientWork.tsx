"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const EXTERNAL_PROJECTS = [
  {
    title: "Ayuniv",
    description: "A premium herbal juice e-commerce platform built for high-performance conversions and seamless checkout.",
    link: "https://ayuniv.in/",
    img: "/img/ayuniv.png",
    tags: ["E-Commerce", "Herbal", "Full Stack"],
    fallbackGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Agrawal Properties",
    description: "A high-conversion real estate landing page and property catalog designed for maximum SEO and lead generation.",
    link: "https://agrawalpropertys.com/",
    img: "/img/agrawal.png",
    tags: ["Real Estate", "SEO", "Landing Page"],
    fallbackGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "PropDesk",
    description: "A comprehensive real estate CRM and property management dashboard for modern agencies.",
    link: "https://propdesk.in",
    img: "/img/propdesk.png",
    tags: ["Next.js", "Dashboard", "CRM"],
    fallbackGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "TypePilot",
    description: "An AI-powered Android Keyboard built from scratch with optimistic updates and clipboard surfacing.",
    link: "https://gettypepilot.com",
    img: "/img/typepilot.png",
    tags: ["Android", "SaaS", "Supabase", "Gemini"],
    fallbackGradient: "from-purple-500/10 to-blue-500/10"
  }
];

const ProjectCard = ({ project }: { project: typeof EXTERNAL_PROJECTS[0] }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title} live site`}
      className="group relative flex flex-col rounded-[2.5rem] bg-surface border border-borderSubtle overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-textMuted"
    >
      {/* Image / Placeholder Area */}
      <div className={`relative w-full h-64 sm:h-72 bg-gradient-to-br ${project.fallbackGradient} overflow-hidden border-b border-borderSubtle p-6 flex items-center justify-center`}>
        {/* If image hasn't errored out, try to show it */}
        {!imgError && (
          <Image
            src={project.img}
            alt={`${project.title} - Built by DhoniDev-Ai`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}

        {/* Placeholder if image fails or is missing */}
        {imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-60 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={48} className="mb-4 text-accentPrimary opacity-50" />
            <h4 className="text-2xl font-fraunces font-bold text-textPrimary mb-2">{project.title}</h4>
            <p className="text-xs text-textMuted uppercase tracking-widest font-bold">Screenshot missing: add {project.img.split('/').pop()} to public/img</p>
          </div>
        )}

        {/* Hover overlay button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-surface text-textPrimary px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Visit Live Site <ArrowUpRight size={18} className="text-accentPrimary" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-8 sm:p-10 flex-1 bg-background">
        <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-textPrimary tracking-tight mb-3 group-hover:text-accentPrimary transition-colors">
          {project.title}
        </h3>
        <p className="text-textMuted leading-relaxed text-sm sm:text-base mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-surface border border-borderSubtle rounded-lg text-xs font-bold text-textPrimary tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default function ClientWork() {
  return (
    <section className="w-full pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col">

        <div className="flex flex-col mb-16 text-center lg:text-left">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-bold mb-4">
            Featured Client Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-medium tracking-tight text-textPrimary max-w-2xl">
            Production-Ready <br className="hidden sm:block" />
            <span className="italic font-light text-textMuted">Digital Empires</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXTERNAL_PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-2 flex justify-center w-full">
          <Link
            href="https://hardik-jain-portfolio.vercel.app/" // TODO: Add your external portfolio link here
            target="_blank"
            className="group flex items-center gap-2 px-8 py-4 bg-background border border-borderSubtle hover:border-accentPrimary rounded-full text-textPrimary font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            View Full Portfolio <ArrowUpRight size={18} className="text-accentPrimary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
