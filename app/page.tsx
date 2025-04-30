"use client"; 
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
        <Navbar />
        <h1 className="text-4xl bg-zinc-400  mt-25 font-bold bg-clip-text text-center">
          Loading...
        </h1>
      </>
    );
  }

  return (
    <>
    <Navbar />
     <Hero />
    </>
  );
};

export default Page;
