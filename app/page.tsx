"use client";
import Hero from "@/components/Hero";
import Mid from "@/components/Mid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkShowcase from "@/components/WorkShow";
import StatsStrip from "@/components/StatsStripe";
import SupportCTA from "@/components/SupportCta";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/dashboard");
  //   }
  // }, [status, router]);

  if (status === "loading") {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
         <div className="loader"></div> 

        </div>
      </>
    );
  }

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
