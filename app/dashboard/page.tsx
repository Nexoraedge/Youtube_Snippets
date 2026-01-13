"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DummyData } from '@/constents/Data'
import Card_Content from '@/components/Card_Content';
import { getCardData } from '@/lib/actions/general.action';

const Page = () => {
  const [card_passingdata, setCard_passingdata] = useState([])
  let a: any;

  const [datastatus, setDatastatus] = useState("loading");
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
    const fetchData = async () => {
      setDatastatus("loading");
      a = await getCardData();
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
        className="flex flex-col gap-10 overflow-auto py-6 items-center backgroundti text-white px-4"
      >

        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl mt-7 font-saira font-bold flex items-center justify-center flex-wrap"
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
            className="bg-linear-to-r font-saira from-gray-600 via-gray-500 to-gray-400 bg-clip-text text-transparent mx-2 px-1"
          >
            {session?.user?.name || "Player"}
          </motion.span>
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col gap-7 justify-center items-center w-full max-w-7xl mb-6 h-full"
        >

          {/* My Content Section with Horizontal Scroll */}
          <motion.div

            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full lg:w-[60vw] bg-linear-to-br from-slate-800/60 via-gray-900/20 to-slate-800/60 backdrop-blur-xl border border-zinc-500/40 rounded-3xl overflow-hidden shadow-sm shadow-zinc-500/20 relative"
          >

            {/* Background Effects */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 via-pink-600/5 to-blue-600/5"></div> */}


            {/* Header */}
            <div className="relative z-10 px-8 py-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-center bg-linear-to-r font-saira from-gray-100  to-gray-100 bg-clip-text text-transparent"
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
                    scrollbarColor: '#1f1f1f #111'
                  }}
                >
                  {card_passingdata.map((card_data, index: number) => (
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
                      className="text-purple-200 mt-4 font-saira text-center text-lg"
                    >
                      Plz wait for a moment.
                    </motion.p>
                  </div>
                </div>
              )}


            </div>

            {/* <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-slate-800/80 to-transparent pointer-events-none z-20"></div> */}
          </motion.div>

          {/* Starter Kits Section */}
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full lg:w-[60vw] bg-linear-to-br from-slate-800/60 via-gray-900/20 to-slate-800/60 backdrop-blur-xl border border-gray-500/40 rounded-3xl p-8 shadow-sm shadow-zinc-500/20 relative overflow-hidden"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 bg-linear-to-r font-saira from-gray-100 to-gray-200 bg-clip-text text-transparent relative z-10"
            >
              Starter Kits
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-center text-gray-400 mb-8 text-lg"
            >
              Production-ready templates to kickstart your next project
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
            >
              {/* Next-Clerk-Starter-Kit */}
              <a
                href="https://github.com/Nexoraedge/Next-Clerk-Starter-Kit"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-[#0d1117] border border-gray-700/50 rounded-xl p-5 hover:border-[#00C896]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00C896]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                    </svg>
                    <span className="text-[#58a6ff] font-semibold group-hover:underline">Next-Clerk-Starter-Kit</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    A production-ready Next.js starter kit with Clerk authentication, TypeScript, and modern best practices.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-[#3178c6]"></span>
                      TypeScript
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      Star
                    </span>
                  </div>
                </div>
              </a>

              {/* NEXT-NEXT_AUTH-STARTER-kit */}
              <a
                href="https://github.com/Nexoraedge/NEXT-NEXT_AUTH-STARTER-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-[#0d1117] border border-gray-700/50 rounded-xl p-5 hover:border-[#00C896]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00C896]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                    </svg>
                    <span className="text-[#58a6ff] font-semibold group-hover:underline">NEXT-NEXT_AUTH-STARTER-kit</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    A complete Next.js starter kit with NextAuth.js authentication, ready for production deployment.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-[#3178c6]"></span>
                      TypeScript
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      Star
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>


    </section>
  );
};

export default Page;