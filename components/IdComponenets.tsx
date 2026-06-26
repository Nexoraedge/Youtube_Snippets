"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Check, Copy } from "lucide-react";
import { useRouter } from "next/navigation";

const VideoKitPage = (props: card_data) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const router = useRouter();
  const { title, cover, links, ytvidlink, share_link, id } = props;
  const { status } = useSession();
  
  const PAYMENT_CONFIG = {
    qrCodeImgPath: '/img/QR.png',
    upiId: 'hardikjain2030@okhdfcbank',
    paypalLink: 'https://paypal.me/DhoniDevAi',
  };

  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      router.push(`/login/${id}/`);
    }
  }, [status, id, router]);

  const [copied, setCopied] = useState(false);
  
  const handleCopyUpi = () => {
    navigator.clipboard.writeText(PAYMENT_CONFIG.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Side - Links List */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div data-lenis-prevent="true" className="glass-card h-[60vh] lg:h-[82vh] overflow-y-auto rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-borderSubtle pb-8 mb-2">
              <div className="shrink-0 rounded-2xl overflow-hidden shadow-md border border-borderSubtle/60 group-hover:shadow-lg transition-all bg-surface flex items-center justify-center">
                {cover ? (
                  <Image
                    src={cover}
                    alt="cover"
                    width={160}
                    height={112}
                    className="w-32 h-24 sm:w-40 sm:h-28 object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-32 h-24 sm:w-40 sm:h-28 bg-borderSubtle/30 flex items-center justify-center">
                    <span className="text-textMuted text-xs font-medium">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 text-center sm:text-left w-full">
                <h2 className="text-2xl sm:text-3xl text-gradient font-fraunces font-bold leading-tight">
                  {title}
                </h2>
                {share_link && (
                  <Link
                    target="_blank"
                    href={share_link}
                    className="text-accentPrimary hover:text-[#B84020] font-semibold text-sm flex gap-2 items-center justify-center sm:justify-start transition-colors"
                  >
                    View Original
                    <Image
                      src="/asset/arrowsh.gif"
                      alt="arrow"
                      width={16}
                      height={10}
                      className="opacity-80"
                    />
                  </Link>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {links.map((link) => {
                const isSnippet = link.img.includes("snippet");
                return (
                  <motion.div
                    key={link.id}
                    className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 flex items-center bg-surface/70 backdrop-blur-sm border border-borderSubtle/60 shadow-sm hover:shadow-md hover:border-accentPrimary/30 hover:-translate-y-1 group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accentPrimary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {isSnippet ? (
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(link.link);
                          setCopiedId(link.id);
                          setTimeout(() => setCopiedId(null), 1500);
                        }}
                        className="flex items-center gap-5 p-4 w-full text-left relative z-10"
                      >
                        <div className="w-14 h-14 shrink-0 rounded-xl bg-surface border border-borderSubtle/50 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[inset_0_2px_10px_rgba(217,92,55,0.08)] transition-all">
                          <Image
                            src={link.img}
                            alt="icon"
                            width={28}
                            height={28}
                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <span className="font-semibold text-textPrimary text-lg">
                            {link.title}
                          </span>
                          <div className="relative flex items-center">
                            <span className="text-textMuted group-hover:text-accentPrimary transition-colors flex items-center gap-2 text-sm font-medium">
                              {copiedId === link.id ? (
                                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-md text-xs">Copied!</span>
                              ) : (
                                <Copy size={18} />
                              )}
                            </span>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <Link
                        target="_blank"
                        href={link.link || "#"}
                        className="flex items-center gap-5 p-4 w-full relative z-10"
                      >
                        <div className="w-14 h-14 shrink-0 rounded-xl bg-surface border border-borderSubtle/50 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[inset_0_2px_10px_rgba(217,92,55,0.08)] transition-all">
                          <Image
                            src={link.img}
                            alt="icon"
                            width={28}
                            height={28}
                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <span className="font-semibold text-textPrimary text-lg">
                            {link.title}
                          </span>
                          <Image
                            src="/asset/arrowsh.gif"
                            alt="arrow"
                            width={20}
                            height={12}
                            className="opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Video & Support */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div data-lenis-prevent="true" className="glass-card h-[60vh] lg:h-[82vh] overflow-y-auto rounded-3xl p-6 sm:p-8 flex flex-col gap-8">
            <div className="aspect-video w-full bg-borderSubtle rounded-2xl overflow-hidden shadow-md shrink-0 border border-borderSubtle/50">
              <iframe
                className="w-full h-full"
                src={ytvidlink}
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>

            <div className="w-full mt-auto bg-surface/80 border border-borderSubtle rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
              <div className="text-center">
                <h4 className="text-accentPrimary font-fraunces font-bold text-xl mb-1">
                  Support the Creator
                </h4>
                <h3 className="text-textMuted font-medium text-sm">
                  Enjoying the free resources? Fuel the next build.
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-borderSubtle shrink-0">
                  <Image src={PAYMENT_CONFIG.qrCodeImgPath} alt="QR Code" width={100} height={100} className="w-24 h-24 object-contain" />
                </div>
                
                <div className="flex flex-col gap-3 w-full max-w-sm">
                  <div
                    onClick={handleCopyUpi}
                    className="flex justify-between items-center px-4 py-3 bg-background border border-borderSubtle rounded-xl cursor-pointer hover:border-accentPrimary/50 transition-colors group shadow-sm"
                  >
                    <span className="text-textPrimary font-mono text-sm tracking-tight truncate mr-2">{PAYMENT_CONFIG.upiId}</span>
                    <button className="text-textMuted shrink-0 group-hover:text-accentPrimary transition-colors">
                      {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full my-1">
                    <div className="h-[1px] bg-borderSubtle flex-1"></div>
                    <span className="text-[10px] text-textMuted font-bold uppercase tracking-widest">Or</span>
                    <div className="h-[1px] bg-borderSubtle flex-1"></div>
                  </div>
                  
                  <a
                    href={PAYMENT_CONFIG.paypalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden w-full flex items-center justify-center gap-2 bg-[#0070BA] hover:bg-[#005ea6] text-white py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    Open PayPal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoKitPage;
