import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Menu from "./menu";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

const PHONE = "041-415-0410";

const FAVICON =
  "/6A9A856E-A3D2-40CD-BC08-474E745F7456.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "정감공간 | 천안 인테리어·리모델링",
    template: "%s | 정감공간",
  },

  description:
    "천안 인테리어 전문기업 정감공간. 구축 인테리어, 상가 인테리어, 아파트 인테리어, 학교 리모델링. 실내건축공사업 면허 보유, 청년창업기업.",

  keywords: [
    "정감공간",
    "천안 인테리어",
    "천안 인테리어 업체",
    "천안 인테리어 잘하는곳",
    "천안 리모델링",
    "천안 구축 인테리어",
    "천안 상가 인테리어",
    "천안 아파트 인테리어",
    "천안 학교 리모델링",
  ],

  icons: {
    icon: FAVICON,
    shortcut: FAVICON,
    apple: FAVICON,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "정감공간",
    title: "정감공간 | 천안 인테리어·리모델링",
    description:
      "공간에 정감을 더하다. 천안 인테리어·리모델링 전문기업 정감공간.",
    url: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "정감공간",
    url: SITE_URL,
    telephone: PHONE,
    description:
      "천안 구축 인테리어, 상가 인테리어, 아파트 인테리어, 학교 리모델링 전문기업",
    founder: {
      "@type": "Person",
      name: "정경훈",
    },
    areaServed: {
      "@type": "City",
      name: "천안시",
    },
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* HEADER */}
        <header className="jg-header">
          <div className="jg-header-inner">
            <Link href="/" className="jg-logo">
              <strong>정감공간</strong>

              <span>
                JEONGGAM SPACE
              </span>
            </Link>

            <Menu />
          </div>
        </header>

        {/* PAGE */}
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

                <Link href="/#services">
                  시공 분야
                </Link>

                <Link href="/contact">
                  견적 문의
                </Link>
              </nav>
            </div>

            <div className="jg-footer-info">
              <div>
                <span>대표</span>
                <strong>정경훈</strong>
              </div>

              <div>
                <span>대표번호</span>
                <a href="tel:0414150410">
                  {PHONE}
                </a>
              </div>

              <div>
                <span>시공지역</span>
                <strong>천안 전 지역</strong>
              </div>
            </div>

            <div className="jg-footer-bottom">
              <span>
                실내건축공사업 면허 보유 ·
                청년창업기업
              </span>

              <span>
                © {new Date().getFullYear()} JEONGGAM
                SPACE
              </span>
            </div>
          </div>
        </footer>

        {/* 모바일 전화 */}
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
