import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Card_Content = ({data}: {data: card_data}) => {
  const { title, description, techstack, link, img } = data;  
   
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      
      
      className="w-full flex flex-col relative bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 backdrop-blur-sm rounded-2xl p-6 sm:p-5   h-auto min-h-[440px] md:h-[450px] shadow-lg shadow-purple-900/30 border border-purple-800/30"
    >
      
      
      
      <motion.div 
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="img relative -top-10 sm:-top-12"
      >
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-2 shadow-lg inline-block">
          <Image 
            src={img} 
            alt={title} 
            width={100} 
            height={100} 
            className="rounded-md object-contain hover:rotate-3 transition-all duration-300" 
          />
        </div>
      </motion.div>
      
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex relative -top-6 flex-col gap-4"
      >
        <h2 className="title font-bold tracking-wider text-xl sm:text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">{title}</h2>
        <p className="description font-medium text-gray-300/90 overflow-hidden line-clamp-5 sm:line-clamp-6">{description}</p>
      </motion.div>
      
      {/* Footer with tech stack and link */}
      <div className="footer mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="techstack p-1.5 flex -space-x-2.5 relative rounded-full bg-gradient-to-r from-purple-800 to-purple-900 shadow-inner shadow-purple-950 border border-purple-700/50"
        >
          {techstack.map((tech, index:number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, zIndex: 10 }}
              className="relative z-0 hover:z-10"
            >
              <Image 
                src={tech} 
                alt="tech stack" 
                width={25} 
                height={20} 
                className="rounded-full object-contain bg-gray-900/50 p-0.5" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={link} 
             
            className="link px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-full flex items-center gap-1 transition-all duration-300 shadow-md shadow-purple-900/50 hover:shadow-lg hover:shadow-purple-800/50"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
      
     
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-950/50 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

export default Card_Content;