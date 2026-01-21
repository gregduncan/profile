import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gregduncan.co.uk';

  // Get current date for lastModified
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // GDCD years (2004-2025)
  const gdcdYears = Array.from({ length: 22 }, (_, i) => 2004 + i);
  const gdcdPages = gdcdYears.map((year) => ({
    url: `${baseUrl}/gdcd/${year}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...gdcdPages];
}
