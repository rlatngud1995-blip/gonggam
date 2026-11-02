import type { MetadataRoute } from "next";

import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";

const SERVICE_SLUGS = [
  "apartment",
  "old-house",
  "commercial",
  "school",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/company`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/company/youth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/company/license`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/services/apartment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/old-house`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/commercial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/school`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const regionPages: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${SITE_URL}/regions/${region.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const regionServicePages: MetadataRoute.Sitemap = regions.flatMap(
    (region) =>
      SERVICE_SLUGS.map((service) => ({
        url: `${SITE_URL}/regions/${region.slug}/${service}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  return [
    ...staticPages,
    ...regionPages,
    ...regionServicePages,
  ];
}
