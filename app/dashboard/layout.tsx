"use client";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";


const RootLayout = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }
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
    <div className="min-h-screen bg-gradient-to-b -z-10 from-[#0f0c29] via-[#302b63]  to-[#24243e]">
  
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
