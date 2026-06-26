"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Github, Twitter, Facebook } from 'lucide-react'

const Login_page = () => {
    const { status } = useSession()
    if (status === 'authenticated') {
        redirect('/dashboard')
    }

    return (
        <main className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div className="absolute inset-0 z-0" style={{
                backgroundImage: "url('/asset/bg-login.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Subtle overlay to ensure form readability and premium feel */}
                <div className="absolute inset-0 bg-background/10 backdrop-blur-[4px]"></div>
            </div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-surface/80 backdrop-blur-2xl border border-borderSubtle rounded-[2.5rem] p-10 sm:p-12 shadow-2xl flex flex-col items-center">

                <Link href={'/'} className="group relative mb-8">
                    <div className="absolute inset-0 bg-accentPrimary/20 blur-xl rounded-full group-hover:bg-accentPrimary/40 transition-colors duration-500"></div>
                    <Image src={"/img/logo.png"} alt="logo" width={80} height={80} className='relative rounded-full ring-4 ring-background shadow-xl object-contain group-hover:scale-105 transition-transform duration-500' />
                </Link>

                <h1 className="text-3xl font-fraunces font-bold text-textPrimary mb-2 tracking-tight">Welcome Back</h1>
                <p className="text-textMuted text-sm font-medium mb-10 text-center">Sign in to access your dashboard</p>

                <div className="w-full flex flex-col gap-4">
                    {/* Google */}
                    <button
                        onClick={() => signIn("google")}
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border border-gray-200 rounded-2xl py-3.5 px-4 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Github */}
                    <button
                        onClick={() => signIn("github")}
                        className="w-full flex items-center justify-center gap-3 bg-[#24292F] hover:bg-[#1b1f23] text-white rounded-2xl py-3.5 px-4 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <Github className="w-5 h-5" />
                        Continue with GitHub
                    </button>

                    {/* Facebook */}
                    <button
                        onClick={() => signIn("facebook")}
                        className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-2xl py-3.5 px-4 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <Facebook className="w-5 h-5 fill-current" />
                        Continue with Facebook
                    </button>

                    {/* Twitter */}
                    <button
                        disabled
                        className="w-full flex items-center justify-center gap-3 bg-surface/50 border border-borderSubtle text-textMuted rounded-2xl py-3.5 px-4 font-semibold text-sm opacity-60 cursor-not-allowed mt-2"
                    >
                        <Twitter className="w-5 h-5" />
                        Twitter (Coming Soon)
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Login_page