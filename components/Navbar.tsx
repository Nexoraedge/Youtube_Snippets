'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { LayoutDashboard, Settings, LogOut } from 'lucide-react'
const Navbar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleToggle = () => setOpen(prev => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='w-full z-50 h-20 sm:h-24 flex items-center fixed top-0 justify-between px-6 sm:px-12 bg-background/80 backdrop-blur-xl border-b border-borderSubtle transition-all duration-300'>
      <Link href={session?.user ? "/dashboard" : '/'} className="flex items-center gap-3 group">
        <Image src="/img/logo.png" alt="logo" width={40} height={40} className='rounded-full object-cover ring-2 ring-borderSubtle group-hover:ring-accentPrimary/50 transition-all duration-300 shadow-md' />
        <span className="font-outfit font-bold text-xl tracking-wide hidden sm:block text-textPrimary">DhoniDev-Ai</span>
      </Link>

      <nav className='flex items-center justify-between'>
        <ul className='list-none flex max-sm:hidden gap-8 items-center text-sm font-semibold'>
          <li>
            <Link href={'/startups'} className='text-textMuted hover:text-accentPrimary transition-colors duration-200'>Startups</Link>
          </li>
          <li>
            <Link href={'/consult'} className='text-textMuted hover:text-accentPrimary transition-colors duration-200 flex items-center gap-1.5'>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentPrimary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accentPrimary"></span>
              </span>
              Consulting
            </Link>
          </li>
          <li>
            <Link href={'/about'} className='text-textMuted hover:text-accentPrimary transition-colors duration-200'>About us</Link>
          </li>
        </ul>
      </nav>

      {status === 'unauthenticated' ? (
        <Link href={'/login'}>
          <button className="h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-textPrimary text-surface text-xs sm:text-sm font-bold tracking-wide hover:bg-accentPrimary hover:-translate-y-0.5 transition-all duration-300 shadow-md">
            Login
          </button>
        </Link>
      ) : (
        session?.user?.image && (
          <div className='relative flex flex-col items-center gap-3' ref={dropdownRef}>
            <button
              onClick={handleToggle}
              className='cursor-pointer focus:outline-none transition-transform duration-200 hover:scale-105'
              title="User Menu"
            >
              <Image
                src={session.user.image}
                alt="profile"
                width={50}
                height={50}
                className='rounded-full object-cover'
              />
            </button>

            {open && (
              <div className="absolute top-[3.5rem] right-0 w-52 bg-surface border border-borderSubtle rounded-2xl shadow-xl animate-fade-in overflow-hidden flex flex-col p-2">
                
                {/* Mobile-only Nav Links */}
                <div className="sm:hidden flex flex-col border-b border-borderSubtle pb-1 mb-1">
                  <Link href="/startups" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-textPrimary hover:bg-textPrimary/5 rounded-xl transition-colors">
                    Startups
                  </Link>
                  <Link href="/consult" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-textPrimary hover:bg-textPrimary/5 rounded-xl transition-colors">
                    Consulting
                  </Link>
                  <Link href="/about" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-textPrimary hover:bg-textPrimary/5 rounded-xl transition-colors">
                    About us
                  </Link>
                </div>

                <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-textPrimary hover:bg-textPrimary/5 rounded-xl transition-colors">
                  <LayoutDashboard size={18} className="text-textMuted" />
                  Dashboard
                </Link>
                <div className="h-px w-full bg-borderSubtle my-1" />
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                >
                  <LogOut size={18} className="text-red-500" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        )
      )}
    </header>
  )

}

export default Navbar;
