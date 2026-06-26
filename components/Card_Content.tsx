import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Card_Content = ({ data }: { data: card_data }) => {
  const { title, description, techstack, img, id } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{
        boxShadow: "0 5px 5px -2px rgba(71, 80, 89, 0.4), 0 2px 5px -2px rgba(71, 80, 89, 0.3)"
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className="shrink-0 w-[340px] sm:w-[400px] flex flex-col relative bg-surface/80 backdrop-blur-2xl rounded-[2.5rem] p-8 max-sm:px-6 h-[520px] border border-borderSubtle hover:border-accentPrimary/30 group overflow-hidden shadow-xl"
    >

      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-accentPrimary/40 rounded-full animate-pulse"></div>
      </div>

      {/* Image section */}
      <motion.div
        initial={{ y: 0, scale: 1 }}
        whileHover={{ y: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mb-6"
      >
        <div className="relative bg-background/50 rounded-3xl p-4 shadow-sm border border-borderSubtle backdrop-blur-md">
          <Image
            src={img}
            alt={title}
            width={120}
            height={120}
            className="relative z-10 rounded-xl object-contain hover:rotate-6 transition-all duration-500 shadow-sm shadow-black/10"
          />
        </div>
      </motion.div>

      {/* Content section */}
      <div className="flex flex-col gap-4 grow relative z-10">
        <h2 className="title font-fraunces font-bold tracking-tight text-2xl leading-tight text-textPrimary group-hover:text-accentPrimary transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        <div className="grow">
          <p className="description font-light text-textMuted leading-relaxed text-sm line-clamp-5 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Footer with tech stack and link */}
      <div className="footer pt-6 flex justify-between gap-4 relative z-10">

        {/* Tech stack */}
        <motion.div

          className="techstack flex justify-center"
        >
          <div className="flex -space-x-3 p-2 rounded-2xl bg-background/50 shadow-inner border border-borderSubtle backdrop-blur-sm">
            {techstack.map((tech, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, zIndex: 10, y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative z-0 hover:z-10"
              >
                <div className="w-8 h-8 rounded-full cursor-grab bg-surface border-2 border-background flex items-center justify-center shadow-sm transition-all duration-300">
                  <Image
                    src={tech}
                    alt="tech stack"
                    width={20}
                    height={20}
                    className="rounded-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Link button */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_URL}/${id}/`}
            className="link px-6 py-3 bg-textPrimary hover:bg-accentPrimary text-surface font-semibold rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md group/btn"
          >
            <span>View Project</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </motion.svg>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-surface to-transparent pointer-events-none rounded-b-[2.5rem]"></div>
    </motion.div>
  );
};

export default Card_Content;