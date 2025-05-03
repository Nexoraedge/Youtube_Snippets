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

  // If on login page, don't show admin layout
  if (window.location.pathname === "/admin/Admin_logni_1043") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="min-h-screen absolute top-0 left-0 right-0 opacity-60 max-sm:opacity-40 -z-20" style={{
                backgroundImage: "url('./img/bg-dev.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}></div>
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-30 w-64 transform transition duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-center border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Admin Dashboard</h2>
        </div>
        <nav className="mt-5">
          <div className="px-2">
            <Link href="/admin/dashboard" className="flex items-center rounded-md px-4 py-2 text-gray-100 hover:bg-gray-700">
              Dashboard
            </Link>
            <Link href="/admin/upload" className="flex items-center rounded-md px-4 py-2 text-gray-100 hover:bg-gray-700">
              Upload
            </Link>
            <Link href="/admin/settings" className="flex items-center rounded-md px-4 py-2 text-gray-100 hover:bg-gray-700">
              Settings
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between bg-white px-6 shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 focus:outline-none md:hidden"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <div className="ml-auto flex items-center">
            {session?.user?.name && (
              <span className="mr-4 text-sm font-medium text-gray-700">
                Hello, {session.user.name}
              </span>
            )}
            <Link href="/api/auth/signout" className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600">
              Sign Out
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}