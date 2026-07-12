import { MetadataRoute } from 'next'
import { getCardData } from '@/lib/actions/general.action'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dhonidev-ai.vercel.app' // Update this if your Vercel domain changes

  // Fetch all projects dynamically to include them in the sitemap
  let projects: any[] = [];
  try {
    projects = await getCardData();
  } catch (error) {
    console.error("Failed to fetch projects for sitemap", error);
  }

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/${project.id}`,
    lastModified: new Date(project.created_at || new Date()),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consult`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/startups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectEntries,
  ]
}
