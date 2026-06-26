import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-manrope relative overflow-hidden">
      <Navbar />
      
      {/* Editorial Card */}
      <div
        className="relative w-full max-w-md bg-surface border border-borderSubtle rounded-3xl p-10 text-center shadow-md z-10 mt-14 animate-fade-in"
      >
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-background p-4 rounded-full border border-borderSubtle">
            <Coffee className="w-12 h-12 text-accentPrimary" />
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-5xl font-fraunces font-medium text-textPrimary mb-4 tracking-tight">
          Thank You!
        </h1>
        <p className="text-textMuted text-lg mb-10 leading-relaxed">
          Your support fuels my next open-source build. Enjoy your Chai!
        </p>

        {/* Done Button */}
        <Link 
          href="/"
          className="w-full bg-textPrimary hover:bg-black text-surface py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:-translate-y-1"
        >
          Return Home <Heart size={16} className="text-accentPrimary fill-accentPrimary" />
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;