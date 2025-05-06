// app/providers.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <SessionProvider>
      
      {children}
      
    </SessionProvider>
  );
}
