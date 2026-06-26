import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Consulting & Mentorship',
  description: 'Book a 1-on-1 mentorship session, architecture review, or hire me to build your production-ready SaaS or AI tool MVP from scratch.',
};
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MessageCircle, Phone, Video, Check, Code, Megaphone, ArrowUpRight } from 'lucide-react';

const TIERS = [
  {
    id: 'chat',
    name: 'Quick Chat',
    price: '₹50',
    unit: '/ session',
    description: 'Perfect for quick questions, architecture reviews, or debugging help over WhatsApp.',
    icon: MessageCircle,
    color: '#D95C37', // Terracotta
    bg: 'bg-surface border border-borderSubtle',
    text: 'text-textPrimary',
    muted: 'text-textMuted',
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
    unit: '/ session',
    description: 'A 30-minute 1-on-1 audio call to discuss your career, tech stack, or roadmap.',
    icon: Phone,
    color: '#00C896', // Emerald
    popular: true,
    bg: 'bg-surface border border-borderSubtle',
    text: 'text-textPrimary',
    muted: 'text-textMuted',
    features: [
      '30 Minute Live Call',
      'Architecture Brainstorming',
      'Career Advice',
      'Direct Voice Support'
    ]
  },
  {
    id: 'meeting',
    name: 'Deep Dive Meeting',
    price: '₹200',
    unit: '/ session',
    description: 'A full 45-60 minute video meeting with screen sharing for complex debugging or system design.',
    icon: Video,
    color: '#A855F7', // Purple
    bg: 'bg-surface border border-borderSubtle',
    text: 'text-textPrimary',
    muted: 'text-textMuted',
    features: [
      '45-60 Minute Video Meeting',
      'Screen Sharing & Pair Programming',
      'System Design Review',
      'Actionable Follow-up Notes'
    ]
  }
];

export default function ConsultPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-textPrimary">
      <Navbar />

      <div className="flex-1 pt-32 sm:pt-40 pb-32 px-6 max-w-7xl mx-auto w-full">
        {/* Editorial Header Section */}
        <div className="flex flex-col mb-20">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-bold mb-4">
            1-on-1 Mentorship & Services
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-fraunces font-medium tracking-tighter mb-8 leading-[1.1]">
            Work <br className="hidden sm:block" />
            <span className="italic font-light text-accentPrimary">With Me</span>
          </h1>
          <p className="text-textMuted max-w-2xl text-lg sm:text-xl font-light leading-relaxed">
            Whether you need a quick code review, a deep architectural dive, or a full production-ready app built from scratch, I have a tier for you.
          </p>
        </div>

        {/* Bento Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Top Row: 3 Standard Tiers */}
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${tier.bg} ${tier.popular ? 'md:-translate-y-4 shadow-xl border-textMuted' : 'shadow-sm hover:border-textMuted'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-textPrimary text-surface text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-sm whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-background border border-borderSubtle mb-8 shadow-sm`}
                  style={{ color: tier.color }}
                >
                  <Icon size={24} />
                </div>

                <h3 className={`text-2xl font-fraunces font-semibold ${tier.text} mb-2 tracking-tight`}>{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl font-bold ${tier.text}`}>{tier.price}</span>
                  <span className={`${tier.muted} text-sm font-medium`}>{tier.unit}</span>
                </div>

                <p className={`${tier.muted} text-sm mb-8 leading-relaxed font-light min-h-[60px]`}>
                  {tier.description}
                </p>

                <div className="flex-1">
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${tier.text} font-medium`}>
                        <Check size={18} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/checkout/${tier.id}`}
                  className="w-full text-center py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: tier.popular ? 'var(--color-textPrimary)' : 'transparent',
                    color: tier.popular ? 'var(--color-surface)' : 'var(--color-textPrimary)',
                    border: tier.popular ? 'none' : '1px solid var(--color-borderSubtle)'
                  }}
                >
                  Book {tier.name}
                </Link>
              </div>
            );
          })}

          {/* Bottom Row: 2 Premium Bento Cards */}

          {/* Project Enquiry Card (Deep Espresso / Brown) */}
          <div className="md:col-span-2 relative flex flex-col md:flex-row gap-10 rounded-[2.5rem] p-8 sm:p-10 bg-textPrimary text-surface shadow-2xl overflow-hidden group border border-textPrimary/50 hover:border-accentPrimary/30 transition-colors duration-500">
            {/* Subtle Texture/Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accentPrimary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-accentPrimary/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/3" />

            <div className="flex-[1.5] relative z-10 flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-surface/5 border border-surface/10 mb-8 shadow-sm text-accentPrimary">
                <Code size={24} />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces font-semibold text-surface mb-3 tracking-tight">Project Enquiry</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-surface">Starts at ₹49,999</span>
              </div>
              <p className="text-surface/70 text-base sm:text-lg mb-10 leading-relaxed font-light max-w-lg">
                Looking to build a production-ready SaaS or AI tool? Hire me to architect, design, and build your MVP from scratch with uncompromising quality.
              </p>

              <Link
                href="mailto:hardikjain2030@gmail.com?subject=Project%20Enquiry"
                className="mt-auto inline-flex items-center justify-center py-4 px-8 rounded-full font-bold text-sm bg-accentPrimary text-surface hover:bg-white hover:text-textPrimary transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
              >
                Discuss Your Project <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="flex-1 relative z-10 flex flex-col justify-center mt-8 md:mt-0">
              <div className="bg-surface/5 border border-surface/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm h-full flex flex-col justify-center shadow-inner">
                <p className="text-surface/50 text-xs uppercase tracking-widest font-bold mb-6">Standard Deliverables</p>
                <ul className="space-y-5">
                  {[
                    'Full Stack Next.js Architecture',
                    'AI Integration (OpenAI/Gemini)',
                    'Stripe/LemonSqueezy Billing',
                    'Supabase/PostgreSQL Backend',
                    'Premium UI/UX Branding',
                    'Deployment & Handover'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-surface/90 font-medium">
                      <Check size={18} className="shrink-0 text-accentPrimary mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsorships Card (Terracotta / Accent) */}
          <div className="md:col-span-1 relative flex flex-col rounded-[2.5rem] p-8 sm:p-10 bg-accentPrimary text-surface shadow-2xl overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-black/10 border border-white/20 mb-8 shadow-sm text-surface">
                <Megaphone size={24} />
              </div>

              <h3 className="text-3xl font-fraunces font-semibold text-surface mb-6 tracking-tight">Sponsorships</h3>

              <div className="flex flex-col gap-4 mb-8">
                {/* Short */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-surface">₹1,100</span>
                    <span className="text-surface/80 text-xs font-medium uppercase tracking-wider">/ Short</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/20" />

                {/* Video */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-surface">₹2,500</span>
                    <span className="text-surface/80 text-xs font-medium uppercase tracking-wider">/ Video</span>
                  </div>
                  <span className="text-surface/70 text-xs mt-1">Full video (under 10 mins)</span>
                </div>

                {/* Bundle */}
                <div className="mt-2 flex flex-col bg-white/10 rounded-2xl p-4 border border-white/20 shadow-sm relative overflow-hidden group/bundle">
                  <div className="absolute top-0 right-0 bg-white text-accentPrimary text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Best Value</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-surface">₹3,500</span>
                    <span className="text-surface/80 text-xs font-medium uppercase tracking-wider">/ Bundle</span>
                  </div>
                  <span className="text-surface/90 text-sm font-medium">2 Shorts + 1 Video</span>
                </div>
              </div>

              <p className="text-surface/90 text-sm mb-8 leading-relaxed font-light">
                Reach a highly engaged, technical audience of developers and founders.
              </p>

              <Link
                href="mailto:hardikjain2030@gmail.com?subject=Sponsorship%20Enquiry"
                className="mt-auto w-full text-center py-4 rounded-full font-bold text-sm bg-surface text-accentPrimary hover:bg-transparent hover:text-surface border border-transparent hover:border-surface transition-all duration-300 shadow-md"
              >
                Partner With Me
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
