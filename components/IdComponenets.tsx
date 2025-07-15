"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const VideoKitPage = (props: card_data) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const router = useRouter();
  const { title, cover, links, ytvidlink, Share_link, id } = props;
  const { status } = useSession();
  //console.log(id);
  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      router.push(`/login/${id}/`);
    }
    
  }, [status, id]);

  return (
    <section className="min-h-screen py-12 mt-12  text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl  font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Video Kit
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Links List */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-4 sm:p-6 h-full">
              <div className="space-y-4  overflow-y-auto ">
                <div className="p-4 rounded-xl cursor-pointer transition-all duration-300 flex max-md:flex-col items-center gap-4">
                  <Image
                    src={cover}
                    alt="avatar"
                    width={120}
                    height={80}
                    className="rounded-lg "
                  />
                  <div className="title w-full flex flex-col gap-3 ">
                    <h2 className="text-2xl max-md:text-center md:text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-semibold">
                      {title}
                    </h2>
                    <Link
                      target="_blank"
                      href={Share_link}
                      className="text-zinc-300 max-md:justify-center flex gap-3 text-sm md:pl-5"
                    >
                      click here{" "}
                      <Image
                        src={"/asset/arrowsh.gif"}
                        alt="arrow"
                        width={20}
                        className=""
                        height={12}
                      />
                    </Link>
                  </div>
                </div>
                {links.map((link) => {
                  const isSnippet = link.img.includes("snippet");
                  return (
                    <motion.div
                      key={link.id}
                      className="rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50"
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSnippet ? (
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(link.link);
                            setCopiedId(link.id);
                            setTimeout(() => setCopiedId(null), 1500);
                          }}
                          className="flex gap-4 p-4 items-center w-full text-left group"
                        >
                          <div className="w-14 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                            <div className="w-10 h-10 bg-slate-600 rounded flex items-center justify-center">
                              <Image
                                src={link.img}
                                alt="snippet icon"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between px-2 w-full">
                            <span className="font-medium text-neutral-200">
                              {link.title}
                            </span>
                            <span className="relative text-neutral-200 inline-flex text-right">
                              <Image
                                src="/asset/copy.gif"
                                alt="copy"
                                title="copy"
                                width={100}
                                height={100}
                                className="w-8 rounded-2xl cursor-pointer  "
                              />
                              <span
                                className="absolute -top-7 right-0 bg-slate-800 text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              >
                                {copiedId === link.id ? "Copied!" : "Copy"}
                              </span>
                            </span>
                          </div>
                        </button>
                      ) : (
                        <Link
                          target="_blank"
                          href={link.link}
                          className="flex gap-4 p-4 items-center w-full"
                        >
                          <div className="w-14 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                            <div className="w-10 h-10 bg-slate-600 rounded flex items-center justify-center">
                              <Image
                                src={link.img}
                                alt="avatar"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between px-2 w-full">
                            <span className="font-medium text-neutral-200">
                              {link.title}
                            </span>
                            <span className="text-neutral-200 inline-flex text-right">
                              <Image
                                src="/asset/arrowsh.gif"
                                alt="arrow"
                                width={25}
                                height={15}
                              />
                            </span>
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Link Details */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                <div className="mb-4">
                  <h2 className="text-2xl bg-gradient-to-br from-zinc-700 via-zinc-500 to-zinc-700 bg-clip-text text-transparent font-bold mb-2">
                    Watch Now 👇🏻
                  </h2>
                </div>

                <div className="aspect-video w-full bg-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={ytvidlink}
                    allowFullScreen
                    title="YouTube video player"
                  ></iframe>
                </div>

                <div className="mt-auto">
                  <div className="text-center text-zinc-300 text-xl font-semibold mb-10">
                    Or Explore More
                  </div>
                  <Link href={"/dashboard"} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="relative inline-flex h-15 text-lg  w-full  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer max-sm:px-3 items-center justify-center rounded-full bg-slate-950 px-5 py-1  font-medium text-white backdrop-blur-3xl">
                        Visit Website
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoKitPage;
