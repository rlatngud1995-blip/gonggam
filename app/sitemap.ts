
import type { MetadataRoute } from "next";
import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";

const SERVICE_SLUGS = [
  "apartment",
  "old-house",
  "commercial",
  "school",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // 실제 콘텐츠 수정일을 확인할 수 없는 경우
  // lastModified를 생략해 부정확한 날짜 제출 방지

  const staticPaths = [
    "/",
    "/company",
    "/company/youth",
    "/company/license",
    "/contact",
    "/services/apartment",
    "/services/old-house",
    "/services/commercial",
    "/services/school",
  ];

  const staticPages: MetadataRoute.Sitemap =
    staticPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
    }));

  const regionPages: MetadataRoute.Sitemap =
    regions.map((region) => ({
      url: `${SITE_URL}/regions/${region.slug}`,
    }));

  const regionServicePages: MetadataRoute.Sitemap =
    regions.flatMap((region) =>
      SERVICE_SLUGS.map((service) => ({
        url: `${SITE_URL}/regions/${region.slug}/${service}`,
      }))
    );

  return [
    ...staticPages,
    ...regionPages,
    ...regionServicePages,
  ];
}
