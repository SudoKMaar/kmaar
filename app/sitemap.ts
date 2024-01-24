import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "hourly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "hourly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/codepen`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discord`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/facebook`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/github`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/instagram`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/linkedin`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/reddit`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/resume`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/snapchat`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/twitter`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gfg`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
