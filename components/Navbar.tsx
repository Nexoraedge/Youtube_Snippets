'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const handleToggle = () => setOpen(prev => !prev);

  const handleClickOutside = (e:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
    <header className='w-full z-50 h-20 flex items-center fixed top-0 justify-between px-10 sm:px-15 backdrop-blur-lg'>
      <Link href={session?.user ? "/dashboard" : '/'}>
        <Image src="/img/avatar.jpg" alt="logo" width={50} height={50} className='rounded-md object-contain' />
      </Link>

      <nav className='flex items-center justify-between'>
        <ul className='list-none flex max-sm:hidden gap-12'>
          <li className='hover-text cursor-pointer flex gap-1'>
            <Image src={"/asset/lock.gif"} alt="locked" width={20} height={20} /> Resources
          </li>
          <li className='hover-text cursor-pointer flex gap-1'>
            <Image src={"/asset/lock.gif"} alt="locked" width={20} height={20} /> Test_Links
          </li>
        </ul>
      </nav>

      {status === 'unauthenticated' ? (
        <Link href={'/login'}>
          <button  className="relative inline-flex h-12 max-sm:h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full max-sm:px-3  px-5 py-1 text-sm max-sm:text-xs font-medium text-white backdrop-blur-3xl">
                                    Login                                </span>
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
              <div className="absolute top-16 right-0 w-44 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-fade-in">
                <ul className=" text-sm py-2 text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/dashboard" className="flex gap-2 items-center px-4 py-2  bg-gray-700 ">
                    <Image src={"/asset/home.gif"} alt="dashboard" width={20} height={20} />Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className=" px-4 py-2 text-gray-500 items-center flex gap-2">
                   <Image src={"/asset/lock.gif"} alt="locked" width={20} height={20} />Settings
                    </Link>
                  </li>
                </ul>
                <div className=" border-t dark:border-gray-600">
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="w-full text-left cursor-pointer flex gap-2 items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-red-400 dark:hover:text-white"
                  >
                    <Image src={"/asset/exit.gif"} alt="signOut" width={20} height={20} />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </header>
  )
  
}

export default Navbar;
