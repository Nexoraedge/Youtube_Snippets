import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <section className="flex mt-20  justify-center">
            <div className="container max-auto">
                <div className="flex w-full  md:flex-row mt-5 md:px-10 px-5   gap-5 ">
                    <div className="left  flex flex-col md:px-11 gap-10 xl:gap-20 md:w-1/2 w-screen ">
                        <h1 className="text-3xl  lg:text-5xl  text-center font-bold mt-10 ">
                            Create Your Own <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">New Future </span>utilizing <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ">AI</span>
                        </h1>
                        <p className='text-purple-50 font-normal max-md:text-center  tracking-normal lg:text-lg '>Stop wasting time on scattered tutorials. Get a Ai Powered learnings, build real-world projects, and land your dream job—faster.</p>
                        <div className="buttons flex md:flex-col lg:flex-row gap-5">
                           <Link href="/login"> <button className="relative inline-flex h-12 max-sm:h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full max-sm:px-3   px-5 py-1 text-sm max-sm:text-xs font-medium text-white backdrop-blur-3xl">
                                    Login_tosomething &#8599;
                                </span>
                            </button></Link>
                            <Link target='_blank' href="https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg">
                            <button className="relative inline-flex h-12 max-sm:h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer max-sm:px-3 items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm max-sm:text-xs font-medium text-white backdrop-blur-3xl">
                                    Visit Channel &#8599;
                                </span>
                            </button>
                            </Link>

                            <div className="visit_channel"></div>
                        </div>
                        <div className="flex  text-sm max-sm:text-xs xl:gap-5 gap-3">
                        <div className="some bg-neutral-800/45 flex flex-col overflow-hidden h-15 md:min-w-fit     px-5 py-3 rounded-xl ">
                            <div className="imgwithtext">something added</div>
                            <div className="text"> something needed to be added</div>
                        </div>
                        <div className="some bg-neutral-800/45 flex flex-col overflow-hidden h-15 md:min-w-fit xl:h-17    px-5 py-3 rounded-xl ">
                            <div className="imgwithtext">something added</div>
                            <div className="text"> something needed to be added</div>
                        </div>
                        </div>
                    </div>
                    <div className="right max-md:hidden flex justify-center items-center  md:w-1/2">
                        <Image src={"/asset/sideavt.png"} alt="AI" width={100} height={100} className="w-[80%]" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero