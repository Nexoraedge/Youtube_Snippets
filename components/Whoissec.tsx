import { Is_fordata } from '@/constents/Data';
import Image from 'next/image';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WhoIsSec = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[500px] gap-3 lg:gap-4 max-w-6xl mx-auto">
      {Is_fordata.map(({ id, title, description, img }) => (
        <div
          key={id}
          className="group relative flex-1 overflow-hidden cursor-pointer rounded-3xl lg:rounded-[2.5rem] bg-surface border border-borderSubtle transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[4] active:flex-[4] focus-within:flex-[4] outline-none shadow-sm hover:shadow-2xl hover:border-textMuted flex flex-col justify-end p-6 sm:p-8"
          tabIndex={0}
        >
          {/* Unexpanded Desktop State (Visible only on desktop when not hovered) */}
          <div className="absolute inset-0 p-8 flex flex-col items-center justify-between transition-all duration-500 lg:group-hover:opacity-0 lg:group-hover:-translate-y-4 lg:group-focus-within:opacity-0 hidden lg:flex">
            <div className="bg-background p-4 rounded-2xl border border-borderSubtle shadow-sm">
              <Image src={img} alt={title} width={40} height={40} className="object-contain" />
            </div>
            {/* We use writing-mode vertical-rl and rotate 180 so it reads bottom-to-top cleanly without bounding box issues */}
            <h3 
              className="text-2xl font-fraunces font-semibold text-textMuted tracking-wide whitespace-nowrap mb-4"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {title}
            </h3>
          </div>

          {/* Expanded / Mobile State (Fades in on desktop hover, always visible on mobile) */}
          <div className="relative z-10 flex flex-col h-full justify-between opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 w-full lg:w-[26rem]">
            
            {/* Top Icon */}
            <div className="shrink-0 bg-background p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-borderSubtle shadow-sm w-fit transition-transform duration-700 group-hover:scale-105">
              <Image src={img} alt={title} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>

            {/* Bottom Text Content */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-fraunces font-semibold text-textPrimary tracking-wide">
                {title}
              </h3>

              <p className="text-textMuted leading-relaxed text-sm sm:text-base lg:text-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                {description}
              </p>
              
              <div className="mt-2 inline-flex items-center px-5 py-2.5 rounded-full border border-borderSubtle text-sm font-bold text-textPrimary bg-surface hover:bg-background transition-colors w-fit shadow-sm group/btn lg:opacity-0 lg:group-hover:opacity-100 duration-700 delay-150">
                Explore <ArrowUpRight className="ml-2 w-4 h-4 text-accentPrimary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default WhoIsSec;