import type { MetadataRoute } from "next";

const SITE_URL = "https://jeonggaminterior.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /*
       * 모든 일반 검색엔진
       * Google, Bing 등
       */
      {
        userAgent: "*",
        allow: "/",
      },

      /*
       * NAVER 검색로봇
       */
      {
        userAgent: "Yeti",
        allow: "/",
      },

      /*
       * ChatGPT Search
       */
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
