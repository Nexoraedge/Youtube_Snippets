import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
   <header className='w-full z-50 h-20  flex items-center justify-between  px-10 sm:px-15 backdrop-blur-lg '>
   <Link href={'/'} className="img">
        <Image src={"/img/avatar.jpg"} alt="logo" width={50} height={50} className='rounded-full object-contain' />
     </Link>
   <nav className='flex items-center  justify-between'>
     
     <ul className='list-none flex max-sm:hidden  gap-13'>
        <li  className='hover-text cursor-pointer'>
            <Link href={'/'} className='hover-text'>Resources</Link>
        </li>
        <li  className='hover-text cursor-pointer'>
            <Link href={'/'} className='hover-text'>Test_Links</Link>
        </li>
     </ul>
    </nav>
  
     <button className="sign cursor-pointer hover-text ">Login to your account</button>
    
   </header>
    </>
  )
}

export default Navbar