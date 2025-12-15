
"use client";

import React, { useState } from 'react';
import { Heart, QrCode, Copy, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { redirect } from 'next/navigation';

// === Configuration ===
// TODO: Update these with your actual details
const PAYMENT_CONFIG = {
  // Ensure this image is in your public folder, e.g., /public/assets/qr.png
  qrCodeImgPath: '/img/QR.png', 
  upiId: 'hardikjain2030@okhdfc',
  paypalLink: 'https://paypal.me/DhoniDevAi',
};
// =====================

const PremiumPaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'paypal'>('upi');
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(PAYMENT_CONFIG.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Full screen background container with deep dark theme and subtle glows
    <div className="min-h-screen bg-[#050608] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-gray-500/30">
      
      <Navbar />

      {/* Ambient Background Glows (optional, for extra premium feel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* === The Premium Glass Card === */}
      <div 
        className="relative w-full max-w-[420px]  min-h-[85vh] mt-14 bg-[#0A0D12]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-7 text-center z-10"
        style={{
          // Adding the subtle warm/cool outer glow from the design
          boxShadow: '0 0 40px -10px rgba(59, 130, 246, 0.1), 0 0 40px -10px rgba(249, 115, 22, 0.1)'
        }}
      >
        
        {/* Header Section */}
        <div className="mb-6">
            {/* Optional: You could keep a small chai icon here if you want */}
            {/* <Coffee className="w-10 h-10 text-orange-300 mx-auto mb-3 opacity-80" /> */}
          <h1 className="text-3xl font-serif font-bold text-white mb-2 tracking-tight">
            Fuel the Code
          </h1>
          <p className="text-slate-400 text-sm">
            Support development with a Chai!
          </p>
          
        </div>

        {/* Method Toggle Switch */}
        <div className="bg-black/40 p-1 rounded-full flex items-center mb-8 border border-white/5 relative overflow-hidden">
          <button
            onClick={() => setPaymentMethod('upi')}
            className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 relative z-10 ${
              paymentMethod === 'upi' ? 'text-white bg-linear-to-r from-gray-600/80 to-gray-500/80 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <QrCode size={16}/> UPI / QR
          </button>
          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 relative z-10 ${
              paymentMethod === 'paypal' ? 'text-white bg-linear-to-r from-gray-700/80 to-gray-600/80 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
             PayPal
          </button>
        </div>


        {/* === Payment Content Body === */}
        <div className="min-h-[220px] flex items-center justify-center">
          
          {paymentMethod === 'upi' ? (
            // ---- UPI View ----
            <div className="w-full flex flex-col items-center animate-fadeIn">
              <div className="bg-white p-3 rounded-2xl shadow-sm shadow-gray-900/20 mb-5 ring-4 ring-white/5">
                {/* REPLACE src below with your actual QR code image path */}
                <img 
                  src={PAYMENT_CONFIG.qrCodeImgPath} 
                  alt="Scan to Pay" 
                  className="w-40 h-40 object-contain" 
                />
              </div>
              
              {/* UPI ID Copy Section */}
              <div 
                onClick={handleCopyUpi}
                className="flex items-center gap-3 px-4 py-2 bg-black/30 border border-white/10 rounded-xl cursor-pointer hover:bg-black/50 transition-colors group"
              >
                <span className="text-slate-300 font-mono text-sm">{PAYMENT_CONFIG.upiId}</span>
                <button className="text-slate-500 group-hover:text-white transition-colors">
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-slate-500 text-xs mt-2">Tap to copy UPI ID</p>
            </div>
          ) : (
            // ---- PayPal View ----
             <div className="w-full flex flex-col items-center justify-center animate-fadeIn">
                 <p className="text-slate-300 mb-6 text-center">Use PayPal for secure international support.</p>
                 <a 
                    href={PAYMENT_CONFIG.paypalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden w-full max-w-[260px] flex items-center justify-center gap-3 bg-[#0070BA] hover:bg-[#005ea6] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-gray-500/20 hover:shadow-gray-500/40 hover:-translate-y-1"
                 >
                     {/* Shiny overlay animation */}
                     <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] skew-y-12 transition-transform duration-700 ease-in-out"></div>
                     
                     <span className="relative z-10 flex items-center gap-2">
                     Open PayPal
                     </span>
                 </a>
             </div>
          )}
        </div>

        {/* Footer Action Button (matching the "Done" button style) */}
        <div className="mt-8">
          <button
          onClick={ handleredirect=>{
            redirect("/thankyou");
          }}
          className="w-full bg-gray-700 cursor-pointer hover:from-gray-600 hover:to-gray-700 text-white py-3.5 rounded-2xl font-medium text-base shadow-lg shadow-gray-500/25 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
            I've Sent the Support <Heart size={18} className="text-gray-200 fill-gray-200/30" />
          </button>
          <p className="text-slate-500 text-xs mt-3">Thank you for fueling the project!</p>
        </div>

      </div>
    </div>
  );
};

export default PremiumPaymentPage;