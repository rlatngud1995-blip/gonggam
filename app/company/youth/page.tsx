import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://jeonggaminterior.com";
const PHONE = "041-415-0410";

export const metadata: Metadata = {
  title: "천안 청년창업기업 인테리어 업체 | 정감공간",

  description:
    "천안·아산 청년창업기업 정감공간. 주거·상업·교육·공공공간 인테리어 전문기업.",

  alternates: {
    canonical: `${SITE_URL}/company/youth`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/company/youth`,
    title: "천안 청년창업기업 인테리어 업체 | 정감공간",
    description:
      "천안·아산 청년창업기업 정감공간. 인테리어와 리모델링을 진행합니다.",
    images: [
      {
        url: "/IMG_2065.jpeg",
        alt: "정감공간 창업기업 확인서",
      },
    ],
  },
};

export default function YouthCompanyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "정감공간",
    alternateName: "JEONGGAM SPACE",
    url: SITE_URL,
    telephone: PHONE,
    description:
      "천안과 아산을 중심으로 인테리어와 리모델링을 진행하는 청년창업기업 정감공간.",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}

      <section className="company-sub-hero">
        <div className="company-container">
          <div className="company-kicker">
            <span>JEONGGAM SPACE</span>
            <span>YOUTH STARTUP COMPANY</span>
          </div>

          <div className="company-sub-title">
            <p>천안 · 아산 인테리어 전문기업</p>

            <h1>
              청년창업기업
              <br />
              정감공간
            </h1>

            <p>
              정감공간은 창업기업 확인을 받은 기업으로
              천안과 아산을 중심으로 다양한 공간의 인테리어와
              리모델링을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="company-black">
        <div className="company-container">
          <div className="company-label company-label-light">
            <span>01</span>
            <p>YOUTH STARTUP COMPANY</p>
          </div>

          <div className="company-intro-grid">
            <h2>
              새로운 감각과
              <br />
              책임감 있는
              <br />
              공간 시공
            </h2>

            <div>
              <p>
                정감공간은 공간을 사용하는 사람의 입장에서
                동선과 실용성, 디자인을 함께 고려합니다.
              </p>

              <p>
                주거공간부터 상업공간, 교육기관,
                복지시설과 공공기관까지 공간의 목적에 맞는
                인테리어와 리모델링을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}

      <section
        className="company-info-section"
        style={{
          background: "#fff",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>02</span>
            <p>CERTIFICATE</p>
          </div>

          <div
            style={{
              marginTop: "55px",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                border: "1px solid #d8d8d8",
                padding: "clamp(10px, 2vw, 22px)",
                background: "#fff",
              }}
            >
              <Image
                src="/IMG_2065.jpeg"
                alt="정감공간 창업기업 확인서"
                width={1400}
                height={1900}
                sizes="(max-width: 800px) 100vw, 900px"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>

            <div
              style={{
                marginTop: "22px",
                paddingTop: "20px",
                borderTop: "1px solid #111",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 7px",
                    color: "#888",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                  }}
                >
                  CERTIFICATE
                </p>

                <strong
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  창업기업 확인서
                </strong>
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontSize: "13px",
                  lineHeight: 1.8,
                }}
              >
                정감공간의 기업 확인 정보를
                <br />
                확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}

      <section
        className="company-info-section"
        style={{
          background: "#f5f5f5",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>03</span>
            <p>JEONGGAM SPACE</p>
          </div>

          <div className="company-info-list">
            <div>
              <span>상호</span>
              <strong>정감공간</strong>
            </div>

            <div>
              <span>대표</span>
              <strong>정경훈</strong>
            </div>

            <div>
              <span>시공지역</span>
              <strong>천안 / 아산 전 지역</strong>
            </div>

            <div>
              <span>전문분야</span>

              <strong>
                아파트 · 빌라 · 상가 · 학교 · 복지시설 · 공공기관
              </strong>
            </div>

            <div>
              <span>대표번호</span>

              <a href="tel:0414150410">
                041-415-0410
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}

      <section className="company-cert-section">
        <div className="company-container">
          <div className="company-label">
            <span>04</span>
            <p>RELATED INFORMATION</p>
          </div>

          <div
            style={{
              marginTop: "55px",
              borderTop: "1px solid #111",
            }}
          >
            <Link
              href="/company/license"
              style={{
                minHeight: "90px",
                padding: "0 5px",
                borderBottom: "1px solid #bbb",
                color: "#000",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: "#999",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                  }}
                >
                  LICENSE
                </span>

                <strong
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="company-contact-section">
        <div className="company-container">
          <p>CONTACT</p>

          <h2>
            천안·아산 인테리어
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="company-contact-actions">
            <a href="tel:0414150410">
              <span>전화 상담</span>
              <strong>041-415-0410</strong>
            </a>

            <Link href="/contact">
              <span>견적 문의</span>
              <strong>↗</strong>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
