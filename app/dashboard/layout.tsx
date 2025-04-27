"use client"
import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    const {data:session , status} = useSession()
   if(status === 'unauthenticated'){
    redirect('/login')
   }
    return (
        <div className='min-h-screen' >
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b -z-10 from-[#0f0c29] via-[#302b63] opacity-50 to-[#24243e] h-screen"/>
           <Navbar />
            {children}
        </div>
    )
}


export default RootLayout