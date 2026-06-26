import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://dhonidev-ai.vercel.app' // Update this if your Vercel domain changes
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Prevent search engines from crawling private dashboard routes and APIs
      disallow: ['/dashboard/', '/api/', '/login/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
