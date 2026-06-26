import { Metadata } from 'next';
import IdComponenets from '@/components/IdComponenets';
import { getCurrentData } from '@/lib/actions/general.action';
import { notFound } from 'next/navigation';
import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateMetadata(params: RouteParams): Promise<Metadata> {
  const pageid = await params.params;
  const uid: number = parseInt(pageid.id);
  const currentDataArray: card_data[] = await getCurrentData(uid);
  
  if (!currentDataArray || currentDataArray.length === 0) {
    return { title: 'Not Found' };
  }
  
  const currentData = currentDataArray[0];
  
  return {
    title: `${currentData.title}`,
    description: currentData.description || `Access the exclusive VideoKit, codebase, and resources for ${currentData.title}.`,
    keywords: [currentData.title, "Source Code", "VideoKit", "DhoniDev-Ai", "Web Development", "Tutorial", "SaaS", "Full Stack"],
    alternates: {
      canonical: `https://dhonidev-ai.vercel.app/${uid}`,
    },
    openGraph: {
      type: "article",
      title: `${currentData.title} | DhoniDev-Ai`,
      description: currentData.description || `Access the exclusive VideoKit, codebase, and resources for ${currentData.title}.`,
      url: `https://dhonidev-ai.vercel.app/${uid}`,
      siteName: "DhoniDev-Ai",
      images: [
        {
          url: currentData.cover,
          width: 1200,
          height: 630,
          alt: `${currentData.title} - Full Cover`,
        },
        {
          url: currentData.cover,
          width: 800,
          height: 800,
          alt: `${currentData.title} - Square Snippet`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DhoniAi",
      creator: "@DhoniAi",
      title: `${currentData.title} | DhoniDev-Ai`,
      description: currentData.description || `Access the exclusive VideoKit, codebase, and resources for ${currentData.title}.`,
      images: [currentData.cover],
    }
  };
}
const page = async(params:RouteParams) => {
  const pageid  = await params.params;
  const uid:number = parseInt(pageid.id);
  
  const currentDataArray : card_data[] = await getCurrentData(uid);
  
  if (!currentDataArray || currentDataArray.length === 0) {
    notFound();
  }
  
  const currentData = currentDataArray[0]
   
  
  
  return (
    <main className="min-h-screen flex flex-col font-manrope bg-background text-textPrimary overflow-hidden">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-28 lg:pt-36 pb-12">
        <IdComponenets {...currentData} />
      </div>
      <Footer />
    </main>
  )
}

export default page