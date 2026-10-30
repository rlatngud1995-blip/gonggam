import type { MetadataRoute } from "next";
import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";

const SERVICE_SLUGS = [
  "old-house",
  "commercial",
  "apartment",
  "school",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * 중요도 구조
   *
   * 1. 메인
   * 2. 핵심 서비스
   * 3. 회사 신뢰 정보
   * 4. 지역 대표 페이지
   * 5. 지역 + 서비스 상세 페이지
   */

  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/company`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/company/license`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${SITE_URL}/company/youth`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  /*
   * 서비스 핵심 페이지
   *
   * 예)
   * /services/apartment
   * /services/commercial
   */

  const servicePages: MetadataRoute.Sitemap =
    SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  /*
   * 지역 대표 페이지
   *
   * 예)
   * /regions/buldang
   * /regions/dujeong
   */

  const regionPages: MetadataRoute.Sitemap =
    regions.map((region) => ({
      url: `${SITE_URL}/regions/${region.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }));

  /*
   * 지역 + 서비스 조합
   *
   * 예)
   * /regions/buldang/apartment
   * /regions/buldang/commercial
   * /regions/dujeong/old-house
   */

  const regionServicePages: MetadataRoute.Sitemap =
    regions.flatMap((region) =>
      SERVICE_SLUGS.map((service) => ({
        url: `${SITE_URL}/regions/${region.slug}/${service}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    );

  return [
    ...corePages,
    ...servicePages,
    ...regionPages,
    ...regionServicePages,
  ];
}
