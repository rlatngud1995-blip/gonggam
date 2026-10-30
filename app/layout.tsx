
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jeonggamspace.vercel.app";

const PHONE = "041-415-0410";
const TEL = "tel:0414150410";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "정감공간 | 천안 인테리어 전문업체",
    template: "%s | 정감공간",
  },

  description:
    "천안 인테리어 전문업체 정감공간. 구축 인테리어, 상가 인테리어, 아파트 인테리어, 학교 리모델링. 실내건축공사업 면허 보유 청년창업기업. 대표 정경훈. 상담 041-415-0410.",

  keywords: [
    "정감공간",
    "천안 인테리어",
    "천안 인테리어 잘하는곳",
    "천안 인테리어 업체",
    "천안 구축 인테리어",
    "천안 상가 인테리어",
    "천안 아파트 인테리어",
    "천안 학교 리모델링",
    "천안 실내건축공사업",
    "천안 실내건축면허",
    "천안 청년창업기업",
  ],

  openGraph: {
    title: "정감공간 | 공간의 가치를 디자인하다",
    description:
      "천안 인테리어 전문기업 정감공간. 구축·상가·아파트 인테리어 및 학교 리모델링.",
    url: SITE_URL,
    siteName: "정감공간",
    locale: "ko_KR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const navigation = [
  { name: "회사소개", href: "/company" },
  { name: "시공분야", href: "/#services" },
  { name: "시공사례", href: "/#portfolio" },
  { name: "견적문의", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "정감공간",
    url: SITE_URL,
    telephone: PHONE,
    description:
      "천안 구축 인테리어, 상가 인테리어, 아파트 인테리어 및 학교 리모델링 전문업체",
    areaServed: {
      "@type": "City",
      name: "천안시",
    },
    founder: {
      "@type": "Person",
      name: "정경훈",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "정감공간 인테리어 서비스",
      itemListElement: [
        "구축 인테리어",
        "상가 인테리어",
        "아파트 인테리어",
        "학교 리모델링",
      ].map((name) => ({
        "@type": "OfferCatalog",
        name,
      })),
    },
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

        <header className="site-header">
          <div className="header-inner">
            <Link
              href="/"
              className="site-logo"
              aria-label="정감공간 홈"
            >
              정감공간<span>.</span>
            </Link>

            <nav
              className="desktop-nav"
              aria-label="주 메뉴"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <a
              href={TEL}
              className="header-contact"
            >
              상담문의 <span>↗</span>
            </a>
          </div>
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                정감공간.
              </Link>

              <p>
                공간의 가치를 디자인하다.
              </p>

              <p className="footer-description">
                공간을 이해하고,
                <br />
                새로운 가치를 만들어갑니다.
              </p>
            </div>

            <div className="footer-company">
              <h3>JEONGGAM SPACE</h3>
              <p>상호명 : 정감공간</p>
              <p>대표 : 정경훈</p>
              <p>대표번호 : {PHONE}</p>
              <p>실내건축공사업 면허 보유</p>
              <p>청년창업기업</p>
            </div>

            <div className="footer-menu">
              <h3>QUICK LINKS</h3>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} JEONGGAM
              SPACE. All rights reserved.
            </p>
          </div>
        </footer>

        <a
          href={TEL}
          className="mobile-call-button"
          aria-label="정감공간 전화 상담"
        >
          전화 상담하기 · {PHONE}
        </a>
      </body>
    </html>
  );
}
