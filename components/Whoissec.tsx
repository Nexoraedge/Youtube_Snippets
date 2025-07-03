import { Is_fordata } from '@/constents/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const WhoIsSec = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
    >
      {Is_fordata.map(({ id, color, title, description, img }) => (
        <motion.div
          key={id}
          variants={item}
          className="group relative flex flex-col rounded-2xl overflow-hidden card-hover"
        >
          {/* Card background with gradient */}
          <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-md rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-2xl" 
            style={{ backgroundImage: `linear-gradient(to right, ${color}20, transparent)` }}></div>
          
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-2xl border border-gray-700 group-hover:border-opacity-0 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-2xl border border-opacity-0 group-hover:border-opacity-100 transition-all duration-300"
            style={{ borderColor: color }}></div>
          
          <div className="relative flex items-start p-6 z-10">
            {/* Image with glow effect */}
            <div className="mr-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300" 
                  style={{ backgroundColor: color }}></div>
                <div className="relative bg-slate-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700">
                  <Image
                    src={img}
                    alt={title}
                    width={64}
                    height={64}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2" style={{ color }}>
                {title}
              </h3>
              <p className="text-gray-300 mb-4">
                {description}
              </p>
              
              {/* Animated indicator */}
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: color }}></div>
                <span className="text-sm font-medium" style={{ color }}>Perfect match</span>
              </div>
            </div>
            
            {/* Hover reveal more info icon */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-4 right-4"
            >
              <div className="p-2 rounded-full" style={{ backgroundColor: `${color}20` }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color }}>
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    
    </motion.div>
  );
};

export default WhoIsSec;