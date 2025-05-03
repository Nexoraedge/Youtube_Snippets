import { Is_fordata } from '@/constents/Data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Whoissec = () => {
  return (
    <div className='flex flex-col relative right-2 items-center justify-center  md:mt-16 mt-7 gap-12'>
        {
          Is_fordata.map(({id , color , title , description , img}, index) => (
            <div key={id} className="flex gap-2 mx-2 overflow-x-hidden md:gap-4">
              <div className="w-1/4 flex justify-center items-center">
              <Image src={img} alt="img" width={110} height={110} className='rounded-xl' />
              </div>
              <div className="w-3/4 flex gap-2 flex-col">
              <h3 style={{color:color}} className={`text-xl md:text-2xl font-bold`}>{title}</h3>
              <p className='md:text-lg font-normal flex flex-wrap'>{description}</p>
              </div>
            </div>
          ))
        }
        <Link className='w-full' href="/login">
     <button className="relative inline-flex h-15 text-lg  w-full  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer max-sm:px-3 items-center justify-center rounded-full bg-slate-950 px-5 py-1  font-medium text-white backdrop-blur-3xl">
            Get Started &#8599;
          </span>
        </button>
        </Link>
    </div>
  )
}
export default Whoissec;