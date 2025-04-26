"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const {data:session , status}= useSession();
    
  return (
    <>
   <header className='w-full z-50 h-20  flex items-center justify-between  px-10 sm:px-15 backdrop-blur-lg '>
   <Link href={'/'} >
        <Image src={"/img/avatar.jpg"} alt="logo" width={50} height={50} className='rounded-full object-contain' />
     </Link>
   <nav className='flex items-center  justify-between'>
     
     <ul className='list-none flex max-sm:hidden  gap-12'>
        <li  className='hover-text cursor-pointer'>
            <Link href={'/'} className='hover-text'>Resources</Link>
        </li>
        <li  className='hover-text cursor-pointer'>
            <Link href={'/'} className='hover-text'>Test_Links</Link>
        </li>
     </ul>
    </nav>
  
    {status === 'unauthenticated' ? (
      <button className="sign cursor-pointer ">
        <Link href={'/login'} className='hover-text'>Login to your account</Link>
      </button>
    ) : (
      session?.user?.image && (
        <Image src={session?.user?.image} alt={session?.user?.name || 'profile'} width={50} height={50} className='rounded-full object-contain' />
      )
    )}
   </header>
    </>
  )
}

export default Navbar