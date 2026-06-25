"use client";
import Hero from "@/components/Hero";
import Mid from "@/components/Mid";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkShowcase from "@/components/WorkShow";
import StatsStrip from "@/components/StatsStripe";
import SupportCTA from "@/components/SupportCta";

const Page = () => {
  // If you need session/loading, ensure useSession is imported
  // For now, removing unused session variables to satisfy ESLint
  
  return (
    <main className="min-h-screen bg-[#050505] text-slate-100">
     


      <Navbar />
      <Hero />
      <Mid />
      <WorkShowcase />
      <StatsStrip />
      <SupportCTA />
      <Footer />
      
      
    </main>
  );
};

export default Page;
