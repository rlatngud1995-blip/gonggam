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
    default: "정감공간 | 천안 인테리어·리모델링 전문",
    template: "%s | 정감공간",
  },

  /*
   * 네이버 권장 길이를 고려해
   * 핵심 내용만 80자 이내로 정리
   */
  description:
    "천안 인테리어 전문 정감공간. 아파트·구축·상가 인테리어와 학교 리모델링을 진행합니다.",

  keywords: [
    "정감공간",

    "천안 인테리어",
    "천안 인테리어 업체",
    "천안 인테리어업체",
    "천안 리모델링",
    "천안 리모델링 업체",

    "천안 아파트 인테리어",
    "천안 아파트 리모델링",

    "천안 구축 인테리어",
    "천안 구축 아파트 인테리어",
    "천안 구축 리모델링",

    "천안 상가 인테리어",
    "천안 상업공간 인테리어",
    "천안 매장 인테리어",

    "천안 학교 리모델링",
    "천안 학교 인테리어",
    "천안 교육시설 인테리어",

    "천안 실내건축공사업",
    "천안 실내건축공사업 면허",
    "천안 실내건축면허",
    "천안 인테리어 면허업체",

    "천안 청년창업기업",
    "천안 청년 창업기업",
    "천안 청년기업",
  ],

  authors: [
    {
      name: BRAND,
      url: SITE_URL,
    },
  ],

  creator: BRAND,

  publisher: BRAND,

  applicationName: BRAND,

  category: "인테리어 · 리모델링",

  /*
   * 네이버 서치어드바이저
   * 사이트 소유확인
   */
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

    title: "정감공간 | 천안 인테리어·리모델링 전문",

    description:
      "천안 아파트·구축·상가 인테리어와 학교 리모델링 전문 정감공간.",

    images: [
      {
        url: "/IMG_2042.jpeg",
        width: 1200,
        height: 630,
        alt: "천안 인테리어 전문 정감공간",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "정감공간 | 천안 인테리어·리모델링 전문",

    description:
      "천안 아파트·구축·상가 인테리어와 학교 리모델링 전문 정감공간.",

    images: ["/IMG_2042.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,

      noimageindex: false,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: true,
    email: false,
    address: false,
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

        image: [
          `${SITE_URL}/IMG_2040.jpeg`,
          `${SITE_URL}/IMG_2041.jpeg`,
          `${SITE_URL}/IMG_2042.jpeg`,
          `${SITE_URL}/IMG_2043.jpeg`,
        ],

        description:
          "천안 아파트·구축·상가 인테리어와 학교 리모델링을 진행하는 정감공간.",

        areaServed: [
          {
            "@type": "City",
            name: "천안시",
          },

          {
            "@type": "AdministrativeArea",
            name: "천안시 서북구",
          },

          {
            "@type": "AdministrativeArea",
            name: "천안시 동남구",
          },
        ],

        knowsAbout: [
          "천안 인테리어",
          "천안 아파트 인테리어",
          "천안 구축 인테리어",
          "천안 상가 인테리어",
          "천안 학교 리모델링",
          "실내건축공사",
          "주거공간 리모델링",
          "상업공간 인테리어",
          "교육시설 리모델링",
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

        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${FAVICON}`,
        },

        telephone: PHONE,

        founder: {
          "@type": "Person",
          name: "정경훈",
        },

        description:
          "천안 실내건축공사업 면허 보유 청년창업기업 정감공간.",
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
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* HEADER */}

        <header className="jg-header">
          <div className="jg-header-inner">
            <Link
              href="/"
              className="jg-logo"
              aria-label="정감공간 메인페이지"
            >
              <strong>정감공간</strong>

              <span>JEONGGAM SPACE</span>
            </Link>

            <Menu />
          </div>
        </header>

        {/* MAIN */}

        <main>{children}</main>

        {/* FOOTER */}

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
                  아파트
                </Link>

                <Link href="/services/old-house">
                  구축
                </Link>

                <Link href="/services/commercial">
                  상가
                </Link>

                <Link href="/services/school">
                  학교
                </Link>

                <Link href="/contact">
                  견적문의
                </Link>
              </nav>
            </div>

            <div className="jg-footer-info">
              <div>
                <span>COMPANY</span>

                <strong>
                  정감공간
                </strong>
              </div>

              <div>
                <span>CEO</span>

                <strong>
                  정경훈
                </strong>
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
                  천안 전 지역
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
                CHEONAN · INTERIOR · REMODELING
              </span>
            </div>
          </div>
        </footer>

        {/* MOBILE CALL */}

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
