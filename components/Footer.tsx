import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook , FaInstagram , FaTwitter , FaLinkedin , FaYoutube } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-20 bg-neutral-900 gap-2 px-5 sm:justify-between justify-center flex-col-reverse sm:flex-row items-center  rounded-tr-4xl rounded-tl-4xl w-full ">
      <div className='text-neutral-50 hover:text-neutral-500'>©Copyright 2025 JS Mastery Pro</div>
      <div className="img flex gap-2">
        
       <Link href="https://www.instagram.com/" className="inline-block">
       <FaInstagram
        size={24}
        color='#E1306C'
        />
       </Link>
       <Link href={"https://www.facebook.com/"} className="inline-block">
       <FaFacebook
        size={24}
        color='#3B5998'
        />
       </Link>
       <Link href={"https://www.twitter.com/"} className="inline-block">
         <FaTwitter
          size={24}
          color='#1DA1F2'
          />
       </Link>
       <Link href={"https://www.linkedin.com/"} className="inline-block">
         <FaLinkedin
          size={24}
          color='#0077B6'
          />
       </Link>
       <Link href={"https://www.youtube.com/"} className="inline-block">
         <FaYoutube
          size={24}
          color='#FF0000'
          />
       </Link>
     </div>
   </footer>
  )
}
export default Footer