import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col font-inter overflow-hidden">
      <Navbar />
      <div className="flex-1 min-h-[70vh] flex flex-col items-center justify-center py-20 max-w-3xl mx-auto w-full px-6">
        
        <div className="flex flex-col items-center text-center relative z-10 w-full my-auto">
          <style dangerouslySetInnerHTML={{__html: `
            .my-custom-face-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 350px;
              background: transparent;
              color: #D95C37;
            }
            .my-custom-face-container .face { width: 200px; }
            .my-custom-face-container .face__eyes,
            .my-custom-face-container .face__eye-lid,
            .my-custom-face-container .face__mouth-left,
            .my-custom-face-container .face__mouth-right,
            .my-custom-face-container .face__nose,
            .my-custom-face-container .face__pupil { animation: eyes 1s 0.3s forwards; }
            .my-custom-face-container .face__eye-lid,
            .my-custom-face-container .face__pupil { animation-duration: 4s; animation-delay: 1.3s; animation-iteration-count: infinite; }
            .my-custom-face-container .face__eye-lid { animation-name: eye-lid; }
            .my-custom-face-container .face__mouth-left { animation-name: mouth-left; }
            .my-custom-face-container .face__mouth-right { animation-name: mouth-right; }
            .my-custom-face-container .face__nose { animation-name: nose; }
            .my-custom-face-container .face__pupil { animation-name: pupil; }
            @keyframes eye-lid { 0%, 40%, 45%, 100% { transform: translateY(0); } 42.5% { transform: translateY(17.5px); } }
            @keyframes eyes { from { transform: translateY(112.5px); } to { transform: translateY(15px); } }
            @keyframes pupil { 0%, 37.5%, 40%, 45%, 87.5%, 100% { stroke-dashoffset: 0; transform: translate(0, 0); } 12.5%, 25%, 62.5%, 75% { transform: translate(-35px, 0); } 42.5% { stroke-dashoffset: 35; transform: translate(0, 17.5px); } }
            @keyframes mouth-left { from, 50% { stroke-dashoffset: -102; } to { stroke-dashoffset: 0; } }
            @keyframes mouth-right { from, 50% { stroke-dashoffset: 102; } to { stroke-dashoffset: 0; } }
            @keyframes nose { from { transform: translate(0, 0); } to { transform: translate(0, 22.5px); } }
          `}} />
          <div className="my-custom-face-container scale-75 sm:scale-100 flex justify-center items-center h-[300px]">
            <svg className="face" viewBox="0 0 320 380" style={{ width: '200px', height: '237px' }}>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="25"
              >
                <g className="face__eyes" transform="translate(0,112.5)">
                  <g transform="translate(15,0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120"></polyline>
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    ></polyline>
                  </g>
                  <g transform="translate(230,0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120"></polyline>
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    ></polyline>
                  </g>
                </g>
                <rect
                  className="face__nose"
                  x="132.5"
                  y="112.5"
                  width="55"
                  height="155"
                  rx="4"
                  ry="4"
                ></rect>
                <g transform="translate(65,334)" strokeDasharray="102 102">
                  <path className="face__mouth-left" d="M 0 30 C 0 30 40 0 95 0"></path>
                  <path className="face__mouth-right" d="M 95 0 C 150 0 190 30 190 30"></path>
                </g>
              </g>
            </svg>
          </div>
          <h1 className="text-4xl sm:text-6xl font-fraunces font-bold text-textPrimary mt-4 tracking-tight">Page Not Found</h1>
          <p className="text-textMuted mt-4 mb-10 text-lg">It seems you've wandered off the map.</p>
          <Link 
            href="/" 
            className="px-8 py-4 bg-textPrimary hover:bg-accentPrimary text-surface font-semibold rounded-2xl flex items-center transition-all shadow-md hover:-translate-y-1"
          >
            Return Home
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
