import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
  },
  typescript:{
    ignoreBuildErrors:true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com', 
      },
      {
        protocol: 'https',
        hostname: 'xafyqdmsvmpkdzjfnmzl.supabase.co',
      },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      
    ],
  },
};

export default nextConfig;
