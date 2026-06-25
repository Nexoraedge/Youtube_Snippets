import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MessageCircle, Phone, Video, Check } from 'lucide-react';

const TIERS = [
  {
    id: 'chat',
    name: 'Quick Chat',
    price: '₹50',
    description: 'Perfect for quick questions, architecture reviews, or debugging help over WhatsApp.',
    icon: MessageCircle,
    color: '#3B82F6', // Blue
    features: [
      'Direct WhatsApp Access',
      'Code Snippet Review',
      'Async Responses (24h SLA)',
      '1 Topic / Question'
    ]
  },
  {
    id: 'call',
    name: 'Audio Call',
    price: '₹100',
    description: 'A 15-minute 1-on-1 audio call to discuss your career, tech stack, or roadmap.',
    icon: Phone,
    color: '#00C896', // Emerald
    popular: true,
    features: [
      '15 Minute Live Call',
      'Architecture Brainstorming',
      'Career Advice',
      'Direct Voice Support'
    ]
  },
  {
    id: 'meeting',
    name: 'Deep Dive Meeting',
    price: '₹200',
    description: 'A full 30-minute video meeting with screen sharing for complex debugging or system design.',
    icon: Video,
    color: '#A855F7', // Purple
    features: [
      '30 Minute Video Meeting',
      'Screen Sharing & Pair Programming',
      'System Design Review',
      'Actionable Follow-up Notes'
    ]
  }
];

export default function ConsultPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 flex flex-col font-inter">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#00C896] mb-6">
            <span className="p-1 mr-2 bg-[#00C896] rounded-full"></span>
            1-on-1 Mentorship
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gradient">
            Book a Consultation
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Need help with your code, architecture, or career? Skip the queue and get direct, 1-on-1 assistance. Choose a tier that fits your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div 
                key={tier.id}
                className={`relative flex flex-col glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'border-[#00C896]/50 shadow-[0_0_30px_rgba(0,200,150,0.15)]' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C896] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6"
                  style={{ color: tier.color }}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-zinc-500 text-sm">/ session</span>
                </div>
                
                <p className="text-zinc-400 text-sm mb-8 h-16">
                  {tier.description}
                </p>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check size={18} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/checkout/${tier.id}`}
                  className="w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: tier.popular ? '#00C896' : 'rgba(255,255,255,0.05)',
                    color: tier.popular ? '#000' : '#fff',
                    border: tier.popular ? 'none' : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  Continue with {tier.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
