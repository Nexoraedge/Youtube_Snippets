import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-20 bg-neutral-900 px-5 justify-between items-center  rounded-tr-4xl rounded-tl-4xl w-full ">
      <div className='text-neutral-50 hover:text-neutral-500'>©Copyright 2025 JS Mastery Pro</div>
      <div className="img">
        
       <Link href="https://www.instagram.com/" className="inline-block">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-instagram">
          <rect width="16" height="16" x="4" y="4" rx="2"/>
          <path d="M16 8v8l4 4v-8l-4-4z"/>
        </svg>
       </Link>
       <Link href={"https://www.facebook.com/"} className="inline-block">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-facebook">
           <path d="M18 2h-5a4 4 0 0 0-4 4v9a3 3 0 0 1-1 2H9a3 3 0 0 1-3-3V9a4.61 4.61 0 0 1 1-2h1m10 0H18v9a4 4 0 0 0 4 4v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4z"/>
         </svg>
       </Link>
       <Link href={"https://www.twitter.com/"} className="inline-block">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-twitter">
           <path d="M23 7v4l-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2-2-2-2z"/>
           <path d="M11 14L2 22h20L11 14z"/>
         </svg>
       </Link>
       <Link href={"https://www.linkedin.com/"} className="inline-block">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-linkedin">
           <path d="M16 8v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z"/>
           <path d="M8 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/>
         </svg>
       </Link>
       <Link href={"https://www.youtube.com/"} className="inline-block">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-youtube">
           <path d="M19.33 10.33L18 12l-1.33-1.33L14 12l-1.33 1.33L12 12l-1.33-1.33L8 12l-1.33 1.33L4 12L2.67 9.67L1 12l1.67 1.67L3 12l1.67-1.67L5 12l1.67 1.67L7 12l1.67-1.67L9 12l1.67 1.67L11 12l1.67-1.67L13 12l1.67 1.67L15 12l1.67-1.67L17 12l1.67 1.67L19 12z"/>
         </svg>
       </Link>
     </div>
   </footer>
  )
}

export default Footer