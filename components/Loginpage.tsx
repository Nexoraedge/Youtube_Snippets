"use client"
import {signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'


const Login_page = () => {
    const {data:session , status} = useSession()
    if(status === 'authenticated'){
        redirect('/dashboard')
    }
   
    
    
    return (
        <>
        
            <div className="min-h-screen  absolute top-0 left-0 right-0  opacity-60 max-sm:opacity-40 -z-20" style={{
                backgroundImage: "url('../img/bg-dev.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}></div>
            <div className="flex gap-7 md:flex-row flex-col justify-center items-center min-h-screen max-md:justify-center mx-10 max-md:mx-5 max-md:py-10">
               
                <div className=" backdrop-blur-sm border-[1px]    flex flex-col  px-10 py-7 rounded-t-full rounded-2xl items-center justify-center ">
                  <Link href={'/'} > <Image src={"/img/avatar.jpg"}  alt="logo" width={100} height={100} className='rounded-full my-5 object-contain' /> </Link>
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#059393]   to-[#04c6d7]">Login</h1>
                        <div className="container py-5 flex flex-col items-center gap-2.5">
                            {/* Google */}
                            <button
                            onClick={() => signIn("google")}
                             type="button" className="text-zinc-100 hover:text-zinc-300 cursor-pointer border-[1px] focus:border-0 w-[100%]  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Google
                            </button>
{/* github */}
                            <button 
                            onClick={() => signIn("github")}
                            type="button" className="text-zinc-100 hover:text-zinc-300 cursor-pointer border-[1px] focus:border-0 w-[100%]  focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Github
                            </button>
                            {/* facebook */}
                            <button
                            onClick={() => signIn("facebook")}
                             type="button" className="text-zinc-100 hover:text-zinc-300 cursor-pointer border-[1px] focus:border-0 w-[100%]  focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Facebook
                            </button>

                            <button
                            onClick={() => signIn("x")}
                            type="button" className="text-zinc-400 hover:text-zinc-600 cursor-pointer border-[1px] focus:border-0 w-[100%]  focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                                 <Image
                                                  src="/asset/lock.gif"
                                                  alt="Not Available"
                                                  width={100}
                                                  height={100}
                                                  className="w-4 h-4 me-2"
                                                />
                                Sign in with Twitter
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Login_page