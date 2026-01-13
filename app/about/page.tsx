"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Zap,
  Video,
  MessageSquare,
  BookOpen,
  Wrench,
  Shield,
  Lock,
  Heart,
  Users,
  Mail,
  ArrowRight,
  CheckCircle2,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

// Feature card data
const features = [
  {
    icon: Video,
    title: "YouTube Snippet Generation",
    description:
      "Turn long YouTube videos into short, viral clips automatically with AI.",
  },
  {
    icon: Zap,
    title: "Productivity Tools",
    description:
      "Developer and creator tools designed to save time and boost output.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description:
      "Tutorials on AI, automation, and content creation for everyone.",
  },
];

// Commitment items
const commitments = [
  "Building tools that are helpful, not misleading",
  "Respecting user privacy and data",
  "Providing accurate, clear, and responsible AI-powered features",
  "Continuously improving based on community feedback",
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00C896]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 mr-2 text-[#00C896]" />
            <span>AI-Powered Tools for Creators</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(120deg,#ffffff,#00C896)]">
              DevDhoni AI
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            A creator-driven platform built to help YouTubers, developers, and
            digital creators use artificial intelligence to work faster, create
            better content, and grow their online presence.
          </p>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-[#00C896]/30 hover:bg-white/[0.04] transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00C896]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-6 w-6 text-[#00C896]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  Simple & Powerful
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Tools that remove friction from everyday creative work —
                  built for speed and simplicity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-[#00C896]/30 hover:bg-white/[0.04] transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00C896]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-[#00C896]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  For Everyone
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Making advanced AI accessible to all creators, not just big
                  companies or professional editors.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-[#00C896]/30 hover:bg-white/[0.04] transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00C896]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-[#00C896]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  Save Time & Grow
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every product is built with a single goal: help you save time
                  and grow faster using AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              What We{" "}
              <span className="text-[#00C896]">Do</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We create and curate AI-powered tools that solve real problems for
              creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 hover:border-[#00C896]/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C896]/5 rounded-full blur-2xl translate-x-16 -translate-y-16 group-hover:bg-[#00C896]/10 transition-colors duration-300" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C896]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C896]/20 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-[#00C896]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-50 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DevDhoni AI Exists Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#00C896]/5 via-transparent to-transparent backdrop-blur-xl p-8 sm:p-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C896]/5 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
                Why DevDhoni AI{" "}
                <span className="text-[#00C896]">Exists</span>
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  The world is moving fast, and creators are expected to do more
                  than ever — record, edit, write, publish, market, and analyze.
                </p>
                <p>
                  We believe creators shouldn&apos;t have to spend hours doing
                  repetitive or technical work when{" "}
                  <span className="text-[#00C896] font-medium">
                    AI can handle it for them
                  </span>
                  .
                </p>
                <p>
                  DevDhoni AI exists to bridge that gap — combining practical
                  tools with easy-to-understand AI so anyone can use it,{" "}
                  <span className="text-slate-100 font-medium">
                    even without technical knowledge
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Behind Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              Who Is{" "}
              <span className="text-[#00C896]">Behind</span> DevDhoni AI
            </h2>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C896] to-[#00A378] flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-black">D</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-slate-50">
                    DevDhoni
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20">
                    Creator
                  </span>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  DevDhoni AI is created and maintained by an independent
                  developer and content creator. The platform is built in public
                  alongside YouTube and social media content, sharing how tools
                  are made, how AI can be used in real life, and how creators
                  can grow using technology.
                </p>
                <p className="text-slate-300 text-sm mb-5">
                  This transparency helps us stay honest, user-focused, and
                  continuously improving.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg"
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-200"
                  >
                    <Youtube className="h-4 w-4 text-slate-400 hover:text-red-500" />
                  </Link>
                  <Link
                    href="https://x.com/DhoniAi"
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <Twitter className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/devdhoni-ai/"
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/dhoni.dev_ai"
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/10 hover:border-pink-500/20 transition-all duration-200"
                  >
                    <Instagram className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
                Our{" "}
                <span className="text-[#00C896]">Commitment</span>
              </h2>

              <div className="space-y-4">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00C896] flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-80">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00C896]/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[#00C896]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    Privacy First
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We do not sell or misuse personal data. Any data used in our
                  tools is only processed to deliver the service you request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-[#00C896]/20 bg-gradient-to-br from-[#00C896]/10 via-transparent to-transparent backdrop-blur-xl p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C896]/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C896]/5 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#00C896]/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-7 w-7 text-[#00C896]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Have feedback, questions, or ideas? We would love to hear from
                you. Let&apos;s build the future of AI-powered creation together.
              </p>

              <Link
                href="mailto:hardikjain2030@gmail.com"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-[#00C896] text-black hover:bg-[#05e0ac] transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;