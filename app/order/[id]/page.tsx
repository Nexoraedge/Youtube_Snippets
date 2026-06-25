'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, CheckCircle2, XCircle, Video, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

type Order = {
  id: string;
  status: 'pending' | 'confirmed' | 'failed';
  product_id: string;
  utr_number: string;
  meet_link?: string;
  whatsapp_number?: string;
};

export default function OrderTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/${id}`);
        if (res.ok) {
          const data = await res.json();
          setOrder(data.order);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();

    // Poll every 10 seconds if pending
    const interval = setInterval(() => {
      if (order?.status === 'pending' || !order) {
        fetchOrder();
      }
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, order?.status]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] text-slate-100 flex items-center justify-center">
        <div className="loader"></div>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-[#050505] text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <XCircle className="mx-auto text-red-500 mb-4" size={48} />
          <h1 className="text-2xl font-bold mb-2">Order Not Found</h1>
          <p className="text-zinc-400">The tracking ID does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-inter">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-4 sm:px-6 max-w-2xl mx-auto w-full">
        <div className="glass-card rounded-3xl p-8 text-center animate-fade-in relative overflow-hidden">
          
          {order.status === 'pending' && (
            <>
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/20">
                <div className="h-full bg-yellow-500 w-1/3 animate-pulse rounded-full"></div>
              </div>
              <Clock className="mx-auto text-yellow-500 mb-6" size={56} />
              <h1 className="text-3xl font-bold text-white mb-4">Verifying Payment...</h1>
              <p className="text-zinc-400 mb-8">
                We have received your UTR (<span className="text-white font-mono">{order.utr_number}</span>). 
                Please hold tight while we manually verify it with the bank. This usually takes 5-10 minutes. 
                This page will update automatically.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-zinc-300">
                Tracking ID: <span className="font-mono">{order.id}</span>
              </div>
            </>
          )}

          {order.status === 'confirmed' && (
            <>
              <div className="absolute inset-0 bg-[#00C896]/5 pointer-events-none"></div>
              <CheckCircle2 className="mx-auto text-[#00C896] mb-6" size={64} />
              <h1 className="text-3xl font-bold text-white mb-4">Payment Confirmed!</h1>
              <p className="text-zinc-400 mb-8">
                Your payment has been successfully verified. Access your consultation below.
              </p>

              {order.product_id === 'chat' ? (
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/918114406691?text=Hi%20Hardik!%20My%20Order%20ID%20is%20${order.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                  >
                    <MessageCircle size={24} />
                    Start WhatsApp Chat
                  </a>
                  <p className="text-xs text-zinc-500">Please mention your Order ID when messaging.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <a 
                    href={order.meet_link || "https://cal.com/hardik-jain"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#00C896] hover:bg-[#05e0ac] text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(0,200,150,0.3)]"
                  >
                    {order.product_id === 'call' ? <Phone size={24} /> : <Video size={24} />}
                    Book your Slot on Cal.com
                  </a>
                  <p className="text-xs text-zinc-500">You will receive an email with the Google Meet link once booked.</p>
                </div>
              )}
            </>
          )}

          {order.status === 'failed' && (
            <>
              <XCircle className="mx-auto text-red-500 mb-6" size={56} />
              <h1 className="text-3xl font-bold text-white mb-4">Verification Failed</h1>
              <p className="text-zinc-400 mb-8">
                We could not verify the UTR number provided. Please check if you entered the correct 12-digit UTR. 
                If the amount was deducted, please contact support with your Tracking ID.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-zinc-300 mb-6">
                Tracking ID: <span className="font-mono">{order.id}</span>
              </div>
              <Link 
                href="/consult"
                className="w-full border border-white/20 hover:bg-white/5 text-white font-bold py-3.5 rounded-xl transition-all flex justify-center items-center gap-2"
              >
                Try Again
              </Link>
            </>
          )}

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
