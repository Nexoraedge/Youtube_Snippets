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
        <div className='' >
           <Navbar />
            {children}
        </div>
    )
}


export default RootLayout