"use client";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";



const RootLayout = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }
  if (status === "loading") {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <div className="min-h-screen   ">
  
     <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default RootLayout;
