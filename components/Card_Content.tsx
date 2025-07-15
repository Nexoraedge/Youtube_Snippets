import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Card_Content = ({data}: {data: card_data}) => {
  const { title, description, techstack, link, img , id } = data;  
   
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 20px 25px -5px rgba(168, 85, 247, 0.3)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      className="flex-shrink-0 w-[340px] sm:w-[400px] flex flex-col relative bg-gradient-to-br from-slate-800/90 via-purple-900/50 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 max-sm:px-4  h-[520px] shadow-2xl shadow-purple-900/40 border border-purple-500/30 hover:border-purple-400/50 group overflow-hidden"
    >
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-blue-600/10 rounded-3xl"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Image section */}
      <motion.div 
        initial={{ y: 0, scale: 1 }}
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mb-6"
      >
        <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-4 shadow-xl border border-purple-500/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-sm"></div>
          <Image 
            src={img} 
            alt={title} 
            width={120} 
            height={120} 
            className="relative z-10 rounded-xl object-contain hover:rotate-6 transition-all duration-500 shadow-lg" 
          />
        </div>
      </motion.div>
      
      {/* Content section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-4 flex-grow relative z-10"
      >
        <h2 className="title font-bold tracking-wide text-2xl leading-tight bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 text-transparent bg-clip-text group-hover:from-purple-200 group-hover:via-pink-300 group-hover:to-purple-200 transition-all duration-300">
          {title}
        </h2>
        
        <div className="flex-grow">
          <p className="description font-medium text-gray-300/90 leading-relaxed text-sm line-clamp-6 group-hover:text-gray-200/95 transition-colors duration-300">
            {description}
          </p>
        </div>
      </motion.div>
      
      {/* Footer with tech stack and link */}
      <div className="footer pt-6 flex justify-between gap-4 relative z-10">
        
        {/* Tech stack */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="techstack flex justify-center"
        >
          <div className="flex -space-x-3 p-3 rounded-2xl bg-gradient-to-r from-purple-800/40 to-purple-900/40 shadow-inner shadow-purple-950/50 border border-purple-600/40 backdrop-blur-sm">
            {techstack.map((tech, index:number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, zIndex: 10, y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative z-0 hover:z-10"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-purple-500/30 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex  justify-center"
        >
          <Link 
            href={`${process.env.NEXT_PUBLIC_URL}/${id}/`} 
            className="link px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-800/60 border border-purple-500/30 hover:border-purple-400/50 group/btn"
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none rounded-b-3xl"></div>
    </motion.div>
  );
};

export default Card_Content;