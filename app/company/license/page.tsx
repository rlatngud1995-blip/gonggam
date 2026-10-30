import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://jeonggaminterior.com";
const PHONE = "041-415-0410";

export const metadata: Metadata = {
  title: "천안 실내건축공사업 면허 인테리어 업체 | 정감공간",

  description:
    "실내건축공사업 면허를 보유한 천안·아산 인테리어 전문기업 정감공간.",

  alternates: {
    canonical: `${SITE_URL}/company/license`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/company/license`,
    title: "천안 실내건축공사업 면허 인테리어 업체 | 정감공간",
    description:
      "실내건축공사업 면허를 보유한 천안·아산 인테리어 전문기업 정감공간.",
    images: [
      {
        url: "/IMG_2060.png",
        alt: "정감공간 실내건축공사업 건설업등록증",
      },
    ],
  },
};

export default function LicensePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "정감공간 실내건축공사업",
    description:
      "실내건축공사업 면허를 보유한 천안·아산 인테리어 전문기업 정감공간.",
    provider: {
      "@type": "GeneralContractor",
      name: "정감공간",
      telephone: PHONE,
      url: SITE_URL,
    },
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
            <span>LICENSE</span>
          </div>

          <div className="company-sub-title">
            <p>천안 · 아산 인테리어 전문기업</p>

            <h1>
              실내건축공사업
              <br />
              면허 보유
            </h1>

            <p>
              정감공간은 실내건축공사업 면허를 바탕으로
              인테리어와 리모델링 시공을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="company-black">
        <div className="company-container">
          <div className="company-label company-label-light">
            <span>01</span>
            <p>INTERIOR CONSTRUCTION</p>
          </div>

          <div className="company-intro-grid">
            <h2>
              시공의 기본을
              <br />
              중요하게 생각합니다.
            </h2>

            <div>
              <p>
                인테리어 공사는 디자인뿐 아니라 공정 관리,
                현장 상태, 마감의 완성도까지 함께 확인해야 합니다.
              </p>

              <p>
                정감공간은 실내건축공사업 면허를 기반으로
                주거공간, 상업공간, 교육기관,
                복지시설 및 공공기관의 공간 시공을 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LICENSE IMAGE */}

      <section className="license-document-section">
        <div className="company-container">
          <div className="company-label">
            <span>02</span>
            <p>CONSTRUCTION LICENSE</p>
          </div>

          <div className="license-document-wrap">
            <div className="license-document-image">
              <img
                src="/IMG_2060.png"
                alt="정감공간 실내건축공사업 건설업등록증"
              />
            </div>

            <div className="license-document-info">
              <div>
                <span>LICENSE</span>

                <h2>
                  실내건축공사업
                  <br />
                  건설업등록증
                </h2>
              </div>

              <p>
                정감공간은 실내건축공사업으로 등록되어 있으며,
                주력분야는 실내건축공사입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LICENSE INFORMATION */}

      <section
        className="company-info-section"
        style={{
          background: "#f5f5f5",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>03</span>
            <p>LICENSE INFORMATION</p>
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
              <span>업종</span>
              <strong>실내건축공사업</strong>
            </div>

            <div>
              <span>주력분야</span>
              <strong>실내건축공사</strong>
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

      {/* SERVICE */}

      <section className="company-cert-section">
        <div className="company-container">
          <div className="company-label">
            <span>04</span>
            <p>SERVICE</p>
          </div>

          <div className="license-service-list">
            {[
              "주거공간 인테리어",
              "상업공간 인테리어",
              "교육기관 리모델링",
              "복지시설 인테리어",
              "공공기관 인테리어",
            ].map((item, index) => (
              <div key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTH COMPANY LINK */}

      <section
        className="company-info-section"
        style={{
          background: "#fff",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>05</span>
            <p>COMPANY INFORMATION</p>
          </div>

          <div className="license-related">
            <Link href="/company/youth">
              <div>
                <span>STARTUP COMPANY</span>

                <strong>
                  청년창업기업 확인
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

      <style>{`
        .license-document-section {
          padding: 105px 0;
          background: #fff;
          color: #000;
        }

        .license-document-wrap {
          margin-top: 55px;
          max-width: 920px;
          margin-left: auto;
          margin-right: auto;
        }

        .license-document-image {
          width: 100%;
          padding: 18px;
          border: 1px solid #d6d6d6;
          background: #fff;
        }

        .license-document-image img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .license-document-info {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid #111;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: end;
        }

        .license-document-info span {
          display: block;
          margin-bottom: 10px;
          color: #888;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .license-document-info h2 {
          margin: 0;
          font-size: 28px;
          line-height: 1.2;
          font-weight: 650;
          letter-spacing: -0.04em;
        }

        .license-document-info > p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.9;
        }

        .license-service-list {
          margin-top: 55px;
          border-top: 1px solid #111;
        }

        .license-service-list > div {
          min-height: 72px;
          display: grid;
          grid-template-columns: 55px 1fr;
          align-items: center;
          border-bottom: 1px solid #bbb;
        }

        .license-service-list span {
          color: #888;
          font-size: 10px;
        }

        .license-service-list strong {
          font-size: 16px;
          font-weight: 550;
        }

        .license-related {
          margin-top: 55px;
          border-top: 1px solid #111;
        }

        .license-related > a {
          min-height: 90px;
          padding: 0 5px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border-bottom: 1px solid #bbb;

          color: #000;
          text-decoration: none;
        }

        .license-related > a > div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .license-related > a > div > span {
          color: #999;
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .license-related strong {
          font-size: 18px;
          font-weight: 600;
        }

        @media (max-width: 800px) {
          .license-document-section {
            padding: 75px 0;
          }

          .license-document-wrap {
            margin-top: 45px;
          }

          .license-document-image {
            padding: 8px;
          }

          .license-document-info {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .license-document-info h2 {
            font-size: 23px;
          }

          .license-document-info > p {
            font-size: 13px;
          }

          .license-service-list {
            margin-top: 45px;
          }

          .license-service-list > div {
            grid-template-columns: 42px 1fr;
          }

          .license-service-list strong {
            font-size: 14px;
          }

          .license-related {
            margin-top: 45px;
          }
        }
      `}</style>
    </>
  );
}
