"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If no session exists and page is not login, redirect to login
  if (status === "unauthenticated" && window.location.pathname !== "/admin/Admin_logni_1043") {
    redirect("/admin/Admin_logni_1043");
    return null;
  }

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }


  if (window.location.pathname === "/admin/Admin_logni_1043") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between backdrop-blur-2xl bg-gray-400 px-6 shadow-sm">
          <nav className="flex text-gray-700 justify-evenly">
            <Link href="/admin/dashboard" className="rounded-md px-3 py-1 text-sm font-medium">Dashboard</Link>
            <Link href="/admin/upload" className="rounded-md px-3 py-1 text-sm font-medium">Upload</Link>
          
          </nav>
          <div className="ml-auto flex items-center">
            <span className="mr-4 text-sm font-medium text-gray-700">
                Hello Admin
              </span>
            <Link href="/api/auth/signout" className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600">
              Sign Out
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-neutral-800 via-neutral-600  to-neutral-800 p-5">
          {children}
        </main>
      </div>
    </div>
  );
}