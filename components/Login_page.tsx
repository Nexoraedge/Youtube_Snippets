"use client";
import { signIn } from "next-auth/react";
import Loginpage from "./Loginpage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Github, Twitter, Facebook } from 'lucide-react';

const Login_page = ({
  currentData,
  uid,
}: {
  currentData: any;
  uid: number;
}) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && uid && currentData) {
      router.push(`/${uid}`);
    }
  }, [status, uid, currentData, router]);

  if (!uid || uid === 0 || !currentData) {
    return <Loginpage />;
  }

  const { title, description, techstack, img, cover, share_link } = currentData;

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 sm:p-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('/asset/bg-login.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}>
          {/* Subtle overlay to ensure form readability and premium feel */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[6px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-0 md:gap-8">
        
        {/* Left Side: Product Info */}
        <div className="flex-1 bg-surface/80 md:bg-surface/60 backdrop-blur-2xl border border-borderSubtle border-b-0 md:border-b rounded-t-[2.5rem] rounded-b-none md:rounded-[2.5rem] p-6 sm:p-12 shadow-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accentPrimary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-accentPrimary/20 transition-colors duration-700" />
          
          <Link href={share_link || '#'} className="relative z-10 mb-6 sm:mb-8 inline-block w-fit">
            <Image
              src={cover}
              alt="cover"
              width={320}
              height={180}
              className="w-48 sm:w-64 h-auto aspect-video rounded-2xl sm:rounded-3xl border border-borderSubtle shadow-xl object-cover"
            />
          </Link>

          <div className="relative z-10 flex flex-col w-full gap-2 sm:gap-4">
            <h1 className="text-3xl sm:text-5xl font-fraunces font-bold text-textPrimary tracking-tight">
              {title}
            </h1>
            <p className="text-textMuted text-base sm:text-lg leading-relaxed font-light mb-0 sm:mb-8 max-w-lg hidden sm:block">
              {description}
            </p>

            <div className="p-5 sm:p-6 bg-background/50 border border-borderSubtle rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-2 sm:mt-0 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Image
                  src={img}
                  alt="app icon"
                  width={60}
                  height={60}
                  className="rounded-xl shadow-sm border border-borderSubtle w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
                <p className="text-sm font-semibold text-textPrimary">
                  We are happy to <br className="hidden sm:block"/>have you here!
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {techstack && techstack.map((tech: string, index: number) => (
                  <Image
                    key={index}
                    src={tech}
                    alt="tech"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-[450px] bg-surface/80 backdrop-blur-2xl border border-borderSubtle border-t md:border-t rounded-b-[2.5rem] rounded-t-none md:rounded-[2.5rem] p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center relative">
          
          <Link href={'/'} className="group relative mb-8">
              <div className="absolute inset-0 bg-accentPrimary/20 blur-xl rounded-full group-hover:bg-accentPrimary/40 transition-colors duration-500"></div>
              <Image src={"/img/logo.png"} alt="logo" width={70} height={70} className='relative rounded-full ring-4 ring-background shadow-xl object-contain group-hover:scale-105 transition-transform duration-500' />
          </Link>

          <h2 className="text-2xl font-fraunces font-bold text-textPrimary mb-2 tracking-tight text-center">Quick Login</h2>
          <p className="text-textMuted text-sm font-medium mb-10 text-center">Sign in to get instant access</p>

          <div className="w-full flex flex-col gap-4">
              {/* Google */}
              <button
                  onClick={() => signIn("google")}
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border border-gray-200 rounded-2xl py-3.5 px-4 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
              >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
      </div>
    </main>
  );
};

export default Login_page;
