"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import TicTacToe from '@/components/TicTacToe';
import { motion } from 'framer-motion';
import { DummyData } from '@/constents/Data'
import Card_Content from '@/components/Card_Content';
import { getCardData } from '@/lib/actions/general.action';

const Page = () => { 
  const [card_passingdata, setCard_passingdata] = useState([])
  let a:any;
  
  const [datastatus , setDatastatus] = useState("loading");
  const { data: session, status } = useSession();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
   
  useEffect(() => {
    const fetchData=async()=>{
      setDatastatus("loading");
      a=await getCardData();
      setCard_passingdata(a);
      setDatastatus("authenticated");
    }
    fetchData();
  }, [])
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className='mt-14'>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col gap-10 overflow-auto py-6 items-center text-white px-4"
      >

        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl mt-7 font-bold flex items-center justify-center flex-wrap"
        >
          Hello
          <motion.span
            animate={{
              backgroundPosition: ['0%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mx-2 px-1"
          >
            {session?.user?.name|| "Player"}
          </motion.span>
          Welcome
          <motion.img
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            src="/asset/rose.gif"
            className="h-8 w-8 ml-2"
            alt="rose"
          />
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col gap-7 justify-center items-center w-full max-w-7xl mb-6 h-full"
        >

          {/* My Content Section with Horizontal Scroll */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full lg:w-[60vw] bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-slate-800/60 backdrop-blur-xl border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 relative"
          >
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-blue-600/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            
            {/* Header */}
            <div className="relative z-10 px-8 py-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-clip-text text-transparent"
              >
                My Content
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center text-gray-400 mt-3 text-lg"
              >
                Explore my latest projects and creations
              </motion.p>
            </div>
            
            {/* Scrollable Content Container */}
            <div className="relative sm:px-8 px-2  pb-10">
              {datastatus === "authenticated" ? (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-8 overflow-x-auto scrollbar-custom pb-4"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8b5cf6 #1e293b'
                  }}
                >
                  {card_passingdata.map((card_data, index:number) => (
                    <Card_Content key={index} data={card_data} />
                  ))}
                </motion.div>
              ) : (
                <div className="flex justify-center items-center py-20">
                  <div className="relative">
                    <div className="loader"></div>
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-purple-300 mt-4 text-center text-lg"
                    >
                      Loading projects...
                    </motion.p>
                  </div>
                </div>
              )}
              
              
            </div>
            
           {/* <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-800/80 to-transparent pointer-events-none z-20"></div> */}
          </motion.div>

          {/* TicTacToe Game Section */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-slate-800/60 backdrop-blur-xl border border-purple-500/40 rounded-3xl p-8 shadow-2xl shadow-purple-500/20 relative overflow-hidden"
          >
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 bg-clip-text text-transparent relative z-10"
            >
              Play a while
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center items-center relative z-10"
            >
              <TicTacToe />
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
      
      
    </section>
  );
};

export default Page;