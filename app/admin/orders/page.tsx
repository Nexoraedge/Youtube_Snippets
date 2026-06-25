'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Order = {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email: string;
  status: 'pending' | 'confirmed' | 'failed';
  product_id: string;
  utr_number: string;
  amount: number;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders/all'); // We need to create this or use a Supabase client call directly here. Let's assume we create it.
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleVerify = async (id: string, status: 'confirmed' | 'failed') => {
    try {
      const res = await fetch(`/api/orders/${id}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (res.ok) {
        toast.success(`Order marked as ${status}`);
        fetchOrders();
      } else {
        toast.error('Failed to update order');
      }
    } catch {
      toast.error('An error occurred');
    }
  };

  if (loading) {
    return <div className="p-10 text-white">Loading orders...</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-[#050505] text-slate-100 font-inter">
      <ToastContainer theme="dark" />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Manage Consultations</h1>
        <button onClick={fetchOrders} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm">
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orders.length === 0 && (
          <p className="text-zinc-500">No orders found.</p>
        )}
        {orders.map((order) => (
          <div key={order.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{order.customer_name}</h3>
                <span className="text-sm text-zinc-400">{order.customer_email}</span>
                <span className={`px-2.5 py-1 text-xs font-bold rounded-full uppercase ${
                  order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                  order.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-zinc-300 grid grid-cols-2 gap-y-1 gap-x-4 max-w-md">
                <span className="text-zinc-500">Service:</span>
                <span className="capitalize font-medium text-emerald-400">{order.product_id} (₹{order.amount})</span>
                
                <span className="text-zinc-500">UTR:</span>
                <span className="font-mono text-white">{order.utr_number}</span>
                
                <span className="text-zinc-500">Date:</span>
                <span>{new Date(order.created_at).toLocaleString()}</span>
              </div>
            </div>

            {order.status === 'pending' && (
              <div className="flex gap-3">
                <button 
                  onClick={() => handleVerify(order.id, 'confirmed')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                >
                  <CheckCircle2 size={18} /> Confirm Payment
                </button>
                <button 
                  onClick={() => handleVerify(order.id, 'failed')}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                >
                  <XCircle size={18} /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
