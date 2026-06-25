import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Glassmorphism Card */}
      <Navbar />
      <div
        className="relative w-full max-w-md bg-[#1A1D21] backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center"
        style={{
          boxShadow:
            '0 0 40px -10px rgba(59, 130, 246, 0.15), 0 0 40px -10px rgba(249, 115, 22, 0.15)',
        }}
      >
        {/* Coffee Cup Icon with Glow */}
        <div className="mb-6 flex justify-center">
          <Coffee className="w-16 h-16 text-orange-200/80 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-wide">
          Thank You!
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          You&apos;ve fueled my day. Enjoy your Chai!
        </p>

        {/* Done Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3.5 rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-sm shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
          Done <Heart size={20} className="text-red-200 fill-red-200/50" />
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;