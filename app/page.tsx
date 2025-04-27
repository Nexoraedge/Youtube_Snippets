"use client"; 
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
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
      <h1 className="text-4xl text-center mt-10">
        {/* Welcome {session?.user?.name || "Guest"}! */}
      </h1>
    </>
  );
};

export default Page;
