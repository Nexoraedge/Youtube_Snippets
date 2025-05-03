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
  console.log(card_passingdata);
 
 
 
  
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
      className="flex flex-col gap-10  py-6 items-center text-white px-4"
    >

      <motion.h1
        variants={item}
        className="text-3xl md:text-5xl mt-7   font-bold flex items-center justify-center flex-wrap"
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
        className="flex flex-col  gap-7 w-full max-w-4xl  mb-6 h-full "
      >

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col w-full  bg-slate-800/50 backdrop-blur-md border border-purple-500/30 rounded-xl px-7 py-9 shadow-lg  overflow-y-hidden overflow-x-auto  shadow-purple-500/10 "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mx-auto flex-wrap">
            My Content
          </h2>
          <div className=" gap-7 max-md:gap-20 text-base h-full flex flex-col md:flex-row  justify-center">
            {datastatus === "authenticated" ? card_passingdata.map((card_passingdata, index:number) => (
              <Card_Content key={index} data={card_passingdata} />
            )) : <div className=" flex justify-center items-center">
            <div className="loader"></div>
          </div>}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col w-full bg-slate-800/50 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-lg shadow-purple-500/10   mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-7  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Play a while
          </h2>
          <div className="flex justify-center items-center ]">
            <TicTacToe />
          </div>
        </motion.div>


      </motion.div>
    </motion.div>
    </section>
  );
};

export default Page;