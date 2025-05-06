"use client";
import Hero from "@/components/Hero";
import Mid from "@/components/Mid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

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
    <>
      <Navbar />
      <Hero />
      <Mid />
      <Footer />
      
    </>
  );
};

export default Page;
