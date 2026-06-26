"use client";

import React, { useState } from 'react';
import { Heart, QrCode, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// === Configuration ===
const PAYMENT_CONFIG = {
  qrCodeImgPath: '/img/QR.png',
  upiId: 'hardikjain2030@okhdfcbank',
  paypalLink: 'https://paypal.me/DhoniDevAi',
};

const PremiumPaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'paypal'>('upi');
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(PAYMENT_CONFIG.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-manrope bg-background text-textPrimary overflow-hidden relative">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-accentPrimary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C896]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-32 pb-20 flex items-center justify-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface/40 backdrop-blur-3xl border border-borderSubtle/60 rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden"
        >
          {/* Left Column: Editorial / Brand */}
          <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-textPrimary text-surface overflow-hidden group">
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accentPrimary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/10 border border-surface/20 text-accentPrimary text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8">
                <Sparkles size={14} /> Support the Creator
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-medium tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                Fuel the <br />
                <span className="italic font-light text-accentPrimary">Code.</span>
              </h1>
              
              <p className="text-surface/70 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-md">
                Building open-source tools, high-performance web applications, and in-depth tutorials takes time and lots of coffee. Your support keeps the servers running and the code flowing.
              </p>

              <div className="flex items-center gap-4 text-surface/50 text-xs sm:text-sm font-medium border-t border-surface/10 pt-6 sm:pt-8">
                <span>Secure Payments</span>
                <span className="w-1.5 h-1.5 rounded-full bg-surface/30"></span>
                <span>Global Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Payment Interactive */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col bg-surface/50 relative">
            
            {/* Method Toggle Switch */}
            <div className="bg-background/80 backdrop-blur-md p-1.5 rounded-2xl flex items-center mb-10 sm:mb-12 border border-borderSubtle shadow-inner relative overflow-hidden">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-3 sm:py-3.5 text-sm font-bold rounded-xl transition-all duration-500 relative z-10 ${paymentMethod === 'upi' ? 'text-surface bg-textPrimary shadow-md' : 'text-textMuted hover:text-textPrimary'
                  }`}
              >
                <QrCode size={18} /> UPI / India
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-3 sm:py-3.5 text-sm font-bold rounded-xl transition-all duration-500 relative z-10 ${paymentMethod === 'paypal' ? 'text-surface bg-textPrimary shadow-md' : 'text-textMuted hover:text-textPrimary'
                  }`}
              >
                International
              </button>
            </div>

            {/* Payment Content Body */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[280px]">
              <AnimatePresence mode="wait">
                {paymentMethod === 'upi' ? (
                  // ---- UPI View ----
                  <motion.div 
                    key="upi"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full flex flex-col items-center"
                  >
                    <div className="bg-white p-4 sm:p-5 rounded-[2rem] border border-borderSubtle shadow-xl mb-6 sm:mb-8 group hover:-translate-y-2 transition-transform duration-500">
                      <Image
                        src={PAYMENT_CONFIG.qrCodeImgPath}
                        alt="Scan to Pay"
                        width={200}
                        height={200}
                        className="object-contain"
                        unoptimized
                      />
                    </div>

                    <div
                      onClick={handleCopyUpi}
                      className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-background border border-borderSubtle rounded-2xl cursor-pointer hover:border-textMuted hover:shadow-md transition-all duration-300 w-full max-w-[320px] group"
                    >
                      <div className="flex flex-col">
                        <span className="text-textMuted text-[10px] uppercase font-bold tracking-widest mb-1">UPI ID</span>
                        <span className="text-textPrimary font-mono text-xs sm:text-sm tracking-wide">{PAYMENT_CONFIG.upiId}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-borderSubtle group-hover:border-accentPrimary group-hover:text-accentPrimary transition-colors shadow-sm shrink-0">
                        {copied ? <Check size={18} className="text-[#00C896]" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  // ---- PayPal View ----
                  <motion.div 
                    key="paypal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0070BA]/10 text-[#0070BA] rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
                      <Heart size={36} className="fill-[#0070BA]" />
                    </div>
                    <p className="text-textMuted mb-8 sm:mb-10 text-center text-sm sm:text-base font-light max-w-[280px] leading-relaxed">
                      Securely support the channel from anywhere in the world using PayPal.
                    </p>
                    <a
                      href={PAYMENT_CONFIG.paypalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden w-full max-w-[320px] flex items-center justify-center gap-3 bg-[#0070BA] hover:bg-[#005ea6] text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Donate via PayPal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Action Button */}
            <div className="mt-auto pt-8 sm:pt-10">
              <button
                onClick={() => router.push("/thankyou")}
                className="w-full bg-background border border-borderSubtle text-textPrimary hover:border-textPrimary py-4 sm:py-5 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group"
              >
                I've Sent the Support <Heart size={16} className="text-accentPrimary group-hover:scale-110 transition-transform" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumPaymentPage;