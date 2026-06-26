"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card_Content from '@/components/Card_Content';
import { getCardData } from '@/lib/actions/general.action';
import { Github, Star } from 'lucide-react';
import Loader from '@/components/Loader';

const Page = () => {
  const [card_passingdata, setCard_passingdata] = useState<any[]>([])
  const [datastatus, setDatastatus] = useState("loading");
  const { data: session } = useSession();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setDatastatus("loading");
      const fetchedData = await getCardData();
      setCard_passingdata(fetchedData);
      setDatastatus("authenticated");
    }
    fetchData();
  }, [])

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className='min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto w-full'>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col gap-12 items-center"
      >

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-4"
        >
          <h1 className="text-sm uppercase tracking-widest text-accentPrimary font-bold">
            Workspace
          </h1>
          <h2 className="text-4xl sm:text-6xl font-fraunces font-medium tracking-tighter leading-[1.1] text-textPrimary">
            Your Creative <span className="italic">Hub</span>.
          </h2>
          <p className="text-textMuted text-lg sm:text-xl font-light leading-relaxed">
            Here is a curated collection of our latest projects, starter kits, and resources. Dive back in and continue building something extraordinary.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          variants={item}
          className="flex flex-col gap-10 w-full"
        >

          {/* My Content Section with Horizontal Scroll */}
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full bg-surface/50 backdrop-blur-2xl border border-borderSubtle rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            {/* Header */}
            <div className="px-8 sm:px-12 pt-12 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-borderSubtle/50">
              <div>
                <h2 className="text-3xl sm:text-4xl font-fraunces font-bold text-textPrimary tracking-tight">
                  My Content
                </h2>
                <p className="text-textMuted mt-2 text-base font-light">
                  Explore my latest projects and creations
                </p>
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div className="relative px-6 sm:px-10 py-10">
              {datastatus === "authenticated" ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-8 overflow-x-auto scrollbar-custom pb-6 pt-2 px-2"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#4a362a transparent'
                  }}
                >
                  {card_passingdata.map((card_data, index: number) => (
                    <Card_Content key={index} data={card_data} />
                  ))}
                </motion.div>
              ) : (
                <div className="flex justify-center items-center py-20">
                  <div className="flex flex-col items-center gap-8">
                    <Loader />
                    <p className="text-textMuted font-light">Loading your projects...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Starter Kits Section */}
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-full bg-surface/50 backdrop-blur-2xl border border-borderSubtle rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-fraunces font-bold text-textPrimary tracking-tight">
                Starter Kits
              </h2>
              <p className="text-textMuted mt-2 text-base font-light">
                Production-ready templates to kickstart your next project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Next-Clerk-Starter-Kit */}
              <a
                href="https://github.com/Nexoraedge/Next-Clerk-Starter-Kit"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-background/50 border border-borderSubtle rounded-3xl p-8 hover:border-accentPrimary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Github className="w-6 h-6 text-textMuted group-hover:text-textPrimary transition-colors" />
                    <span className="text-lg font-bold text-textPrimary group-hover:text-accentPrimary transition-colors tracking-tight">Next-Clerk-Starter</span>
                  </div>
                  <p className="text-textMuted text-sm leading-relaxed mb-6 flex-grow">
                    A production-ready Next.js starter kit with Clerk authentication, TypeScript, and modern best practices.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-textMuted font-medium pt-4 border-t border-borderSubtle">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      TypeScript
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                      <Star size={14} />
                      Star on GitHub
                    </span>
                  </div>
                </div>
              </a>

              {/* NEXT-NEXT_AUTH-STARTER-kit */}
              <a
                href="https://github.com/Nexoraedge/NEXT-NEXT_AUTH-STARTER-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-background/50 border border-borderSubtle rounded-3xl p-8 hover:border-accentPrimary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Github className="w-6 h-6 text-textMuted group-hover:text-textPrimary transition-colors" />
                    <span className="text-lg font-bold text-textPrimary group-hover:text-accentPrimary transition-colors tracking-tight">NextAuth-Starter</span>
                  </div>
                  <p className="text-textMuted text-sm leading-relaxed mb-6 flex-grow">
                    A complete Next.js starter kit with NextAuth.js authentication, ready for production deployment.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-textMuted font-medium pt-4 border-t border-borderSubtle">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      TypeScript
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                      <Star size={14} />
                      Star on GitHub
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;