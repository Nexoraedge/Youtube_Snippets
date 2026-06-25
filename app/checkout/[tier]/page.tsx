'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Copy, CheckCircle2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TIER_DETAILS: Record<string, { name: string; price: number }> = {
  chat: { name: 'Quick Chat', price: 50 },
  call: { name: 'Audio Call', price: 100 },
  meeting: { name: 'Deep Dive Meeting', price: 200 }
};

const UPI_ID = 'hardikjain2030@okhdfcbank';

export default function CheckoutPage({ params }: { params: Promise<{ tier: string }> }) {
  const router = useRouter();
  const { tier } = React.use(params);
  const tierInfo = TIER_DETAILS[tier];
  
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    utr: ''
  });

  if (!tierInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Invalid tier selected.
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.utr.length !== 12) {
      toast.error('UTR Number must be exactly 12 digits long.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: formData.name,
          customer_email: formData.email,
          utr_number: formData.utr,
          order_type: 'consultation',
          product_id: tier,
          amount: tierInfo.price
        })
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to submit order');

      // Redirect to tracking page
      router.push(`/order/${result.data[0].id}`);
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-inter">
      <Navbar />
      <ToastContainer theme="dark" />
      
      <div className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Payment Instructions & QR */}
          <div className="w-full md:w-1/2 glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Complete Payment</h2>
            <p className="text-zinc-400 mb-6 text-sm">
              Scan the QR code below or use the UPI ID to pay <span className="font-bold text-white">₹{tierInfo.price}</span> for your {tierInfo.name}.
            </p>

            <div className="bg-white p-4 rounded-2xl flex items-center justify-center mb-6 w-48 mx-auto">
              {/* Ensure you have /public/img/QR.png available */}
              <Image src="/img/QR.png" alt="UPI QR Code" width={160} height={160} className="object-contain" />
            </div>

            <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-xl p-3 mb-6">
              <span className="text-sm font-mono text-zinc-300">{UPI_ID}</span>
              <button 
                onClick={handleCopy}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {copied ? <CheckCircle2 size={18} className="text-[#00C896]" /> : <Copy size={18} />}
              </button>
            </div>
            
            <div className="flex items-start gap-3 bg-[#00C896]/10 border border-[#00C896]/20 rounded-xl p-4">
              <ShieldCheck className="text-[#00C896] shrink-0 mt-0.5" size={20} />
              <p className="text-xs text-zinc-300">
                This is a manual verification system. Once you pay, enter your 12-digit UTR below. We will verify the payment and provide your access link.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Confirm Your Order</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00C896]/50 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00C896]/50 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">12-Digit UTR Number</label>
                <input 
                  type="text" 
                  required
                  maxLength={12}
                  minLength={12}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-[#00C896]/50 transition-all"
                  placeholder="123456789012"
                  value={formData.utr}
                  onChange={e => setFormData({...formData, utr: e.target.value.replace(/[^0-9]/g, '')})}
                />
                <p className="text-xs text-zinc-500 mt-2">Find this in your UPI app (GPay, PhonePe, Paytm) after successful payment.</p>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#00C896] hover:bg-[#05e0ac] text-black font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center gap-2 mt-4"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Submit & Verify'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
