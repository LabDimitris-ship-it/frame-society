import type { MetadataRoute } from "next";
import { businesses } from "@/data/businesses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://frame-society.vercel.app";

  const pages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const businessPages = businesses.map((business) => ({
    url: `${base}/${business.category}/${business.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...businessPages];
}