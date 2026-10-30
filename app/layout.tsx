import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import Menu from "./menu";

const SITE_URL = "https://jeonggaminterior.com";
const BRAND = "정감공간";
const PHONE = "041-415-0410";

const FAVICON =
  "/6A9A856E-A3D2-40CD-BC08-474E745F7456.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "정감공간 | 천안·아산 인테리어·리모델링",
    template: "%s | 정감공간",
  },

  description:
    "천안·아산 인테리어 전문 정감공간. 주거·상업·교육·공공공간 인테리어와 리모델링을 진행합니다.",

  verification: {
    other: {
      "naver-site-verification":
        "0a370484ba94148225f7dd44f2917f346fbc4a74",
    },
  },

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],

    shortcut: FAVICON,
    apple: FAVICON,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",

    url: SITE_URL,

    siteName: BRAND,

    title:
      "정감공간 | 천안·아산 인테리어·리모델링",

    description:
      "천안·아산 주거·상업·교육·공공공간 인테리어 전문 정감공간.",

    images: [
      {
        url: "/IMG_2042.jpeg",
        width: 1200,
        height: 630,
        alt: "정감공간 인테리어",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  themeColor: "#ffffff",

  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "GeneralContractor",

        "@id": `${SITE_URL}/#business`,

        name: BRAND,

        alternateName: "JEONGGAM SPACE",

        url: SITE_URL,

        telephone: PHONE,

        logo: `${SITE_URL}${FAVICON}`,

        description:
          "천안과 아산을 중심으로 주거공간, 상업공간, 교육기관, 공공기관 인테리어와 리모델링을 진행하는 정감공간.",

        areaServed: [
          {
            "@type": "City",
            name: "천안시",
          },
          {
            "@type": "City",
            name: "아산시",
          },
        ],

        knowsAbout: [
          "주거공간 인테리어",
          "아파트 인테리어",
          "빌라 인테리어",
          "상가 인테리어",
          "상업공간 인테리어",
          "학교 리모델링",
          "교육시설 인테리어",
          "복지시설 인테리어",
          "공공기관 인테리어",
          "실내건축공사",
        ],

        founder: {
          "@type": "Person",
          name: "정경훈",
        },

        slogan: "공간에 정감을 더하다.",
      },

      {
        "@type": "Organization",

        "@id": `${SITE_URL}/#organization`,

        name: BRAND,

        alternateName: "JEONGGAM SPACE",

        url: SITE_URL,

        telephone: PHONE,

        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${FAVICON}`,
        },

        founder: {
          "@type": "Person",
          name: "정경훈",
        },

        description:
          "실내건축공사업 면허를 보유한 천안·아산 인테리어 전문기업 정감공간.",
      },

      {
        "@type": "WebSite",

        "@id": `${SITE_URL}/#website`,

        url: SITE_URL,

        name: BRAND,

        alternateName: "JEONGGAM SPACE",

        inLanguage: "ko-KR",

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ).replace(/</g, "\\u003c"),
          }}
        />

        <header className="jg-header">
          <div className="jg-header-inner">
            <Link
              href="/"
              className="jg-logo"
              aria-label="정감공간 메인페이지"
            >
              <strong>정감공간</strong>

              <span>
                JEONGGAM SPACE
              </span>
            </Link>

            <Menu />
          </div>
        </header>

        <main>{children}</main>

        <footer className="jg-footer">
          <div className="jg-footer-inner">
            <div className="jg-footer-top">
              <div>
                <Link
                  href="/"
                  className="jg-footer-logo"
                >
                  정감공간
                </Link>

                <p>
                  공간에 정감을 더하다.
                </p>
              </div>

              <nav
                className="jg-footer-nav"
                aria-label="하단 메뉴"
              >
                <Link href="/company">
                  회사소개
                </Link>

                <Link href="/services/apartment">
                  주거공간
                </Link>

                <Link href="/services/commercial">
                  상업공간
                </Link>

                <Link href="/services/school">
                  교육기관
                </Link>

                <Link href="/contact">
                  견적문의
                </Link>
              </nav>
            </div>

            <div className="jg-footer-info">
              <div>
                <span>COMPANY</span>
                <strong>정감공간</strong>
              </div>

              <div>
                <span>CEO</span>
                <strong>정경훈</strong>
              </div>

              <div>
                <span>CONTACT</span>

                <a href="tel:0414150410">
                  041-415-0410
                </a>
              </div>

              <div>
                <span>AREA</span>

                <strong>
                  천안 / 아산 전 지역
                </strong>
              </div>

              <div>
                <span>LICENSE</span>

                <Link href="/company/license">
                  실내건축공사업 면허 보유
                </Link>
              </div>

              <div>
                <span>COMPANY TYPE</span>

                <Link href="/company/youth">
                  청년창업기업
                </Link>
              </div>
            </div>

            <div className="jg-footer-bottom">
              <span>
                © {new Date().getFullYear()} JEONGGAM SPACE.
                ALL RIGHTS RESERVED.
              </span>

              <span>
                CHEONAN · ASAN · INTERIOR
              </span>
            </div>
          </div>
        </footer>

        <a
          href="tel:0414150410"
          className="jg-mobile-call"
          aria-label="정감공간 전화 상담"
        >
          전화 상담하기 · 041-415-0410
        </a>
      </body>
    </html>
  );
}
