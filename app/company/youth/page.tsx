import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://jeonggaminterior.com";
const PHONE = "041-415-0410";

export const metadata: Metadata = {
  title: "천안 청년창업기업 인테리어 업체 | 정감공간",

  description:
    "천안·아산 청년창업기업 정감공간. 실내건축공사업 등록과 창업기업 확인을 갖춘 인테리어 전문기업.",

  alternates: {
    canonical: `${SITE_URL}/company/youth`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/company/youth`,
    title: "천안 청년창업기업 인테리어 업체 | 정감공간",
    description:
      "천안·아산 청년창업기업 정감공간. 실내건축공사업 등록과 창업기업 확인을 갖춘 인테리어 전문기업.",
    images: [
      {
        url: "/IMG_2065.jpeg",
        alt: "정감공간 창업기업 확인서",
      },
      {
        url: "/IMG_2060.png",
        alt: "정감공간 실내건축공사업 건설업등록증",
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
      "천안과 아산을 중심으로 인테리어와 리모델링을 진행하는 창업기업 정감공간.",

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
            <p>
              천안 · 아산 인테리어 전문기업
            </p>

            <h1>
              청년창업기업
              <br />
              정감공간
            </h1>

            <p>
              정감공간은 창업기업 확인과 실내건축공사업 등록을
              바탕으로 천안과 아산을 중심으로 다양한 공간의
              인테리어와 리모델링을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="company-black">
        <div className="company-container">
          <div className="company-label company-label-light">
            <span>01</span>

            <p>
              YOUTH STARTUP COMPANY
            </p>
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

      {/* CERTIFICATES */}

      <section
        className="company-info-section"
        style={{
          background: "#fff",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>02</span>

            <p>
              CERTIFICATES
            </p>
          </div>

          <div className="youth-certificate-grid">
            {/* 창업기업 확인서 */}

            <article className="youth-certificate-card">
              <div className="youth-certificate-image">
                <img
                  src="/IMG_2065.jpeg"
                  alt="정감공간 창업기업 확인서"
                />
              </div>

              <div className="youth-certificate-content">
                <p className="youth-certificate-english">
                  STARTUP COMPANY
                </p>

                <h2>
                  창업기업 확인서
                </h2>

                <p>
                  정감공간의 창업기업 확인 정보를
                  확인할 수 있습니다.
                </p>
              </div>
            </article>

            {/* 실내건축공사업 등록증 */}

            <article className="youth-certificate-card">
              <div className="youth-certificate-image">
                <img
                  src="/IMG_2060.png"
                  alt="정감공간 실내건축공사업 건설업등록증"
                />
              </div>

              <div className="youth-certificate-content">
                <p className="youth-certificate-english">
                  INTERIOR CONSTRUCTION LICENSE
                </p>

                <h2>
                  실내건축공사업
                  <br />
                  건설업등록증
                </h2>

                <p>
                  정감공간의 실내건축공사업 등록 및
                  실내건축공사 주력분야를 확인할 수 있습니다.
                </p>
              </div>
            </article>
          </div>

          <div className="youth-certificate-link">
            <Link href="/company/license">
              <div>
                <span>
                  MORE INFORMATION
                </span>

                <strong>
                  실내건축공사업 상세 안내
                </strong>
              </div>

              <span>
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY INFORMATION */}

      <section
        className="company-info-section"
        style={{
          background: "#f5f5f5",
        }}
      >
        <div className="company-container">
          <div className="company-label">
            <span>03</span>

            <p>
              JEONGGAM SPACE
            </p>
          </div>

          <div className="company-info-list">
            <div>
              <span>
                상호
              </span>

              <strong>
                정감공간
              </strong>
            </div>

            <div>
              <span>
                대표
              </span>

              <strong>
                정경훈
              </strong>
            </div>

            <div>
              <span>
                시공지역
              </span>

              <strong>
                천안 / 아산 전 지역
              </strong>
            </div>

            <div>
              <span>
                전문분야
              </span>

              <strong>
                아파트 · 빌라 · 상가 · 학교 · 복지시설 · 공공기관
              </strong>
            </div>

            <div>
              <span>
                면허 / 등록
              </span>

              <strong>
                실내건축공사업
              </strong>
            </div>

            <div>
              <span>
                기업 확인
              </span>

              <strong>
                창업기업 확인
              </strong>
            </div>

            <div>
              <span>
                대표번호
              </span>

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

            <p>
              RELATED INFORMATION
            </p>
          </div>

          <div className="youth-related">
            <Link href="/company/license">
              <div>
                <span>
                  LICENSE
                </span>

                <strong>
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <span>
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="company-contact-section">
        <div className="company-container">
          <p>
            CONTACT
          </p>

          <h2>
            천안·아산 인테리어
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="company-contact-actions">
            <a href="tel:0414150410">
              <span>
                전화 상담
              </span>

              <strong>
                041-415-0410
              </strong>
            </a>

            <Link href="/contact">
              <span>
                견적 문의
              </span>

              <strong>
                ↗
              </strong>
            </Link>
          </div>
        </div>
      </section>

      {/* 이 페이지 전용 스타일 */}

      <style>{`
        .youth-certificate-grid {
          margin-top: 55px;

          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 28px;
        }

        .youth-certificate-card {
          min-width: 0;
        }

        .youth-certificate-image {
          width: 100%;

          padding: 14px;

          background: #fff;

          border: 1px solid #d8d8d8;
        }

        .youth-certificate-image img {
          width: 100%;
          height: auto;

          display: block;

          object-fit: contain;
        }

        .youth-certificate-content {
          margin-top: 20px;
          padding-top: 18px;

          border-top: 1px solid #111;
        }

        .youth-certificate-english {
          margin: 0 0 8px;

          color: #888;

          font-size: 9px;

          letter-spacing: 0.14em;
        }

        .youth-certificate-content h2 {
          margin: 0;

          color: #000;

          font-size: 24px;
          line-height: 1.25;

          font-weight: 650;

          letter-spacing: -0.04em;
        }

        .youth-certificate-content > p:last-child {
          margin: 15px 0 0;

          color: #666;

          font-size: 13px;
          line-height: 1.8;
        }

        .youth-certificate-link {
          margin-top: 40px;

          border-top: 1px solid #ccc;
        }

        .youth-certificate-link > a {
          min-height: 85px;

          padding: 0 5px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          color: #000;

          text-decoration: none;
        }

        .youth-certificate-link > a > div {
          display: flex;
          flex-direction: column;

          gap: 7px;
        }

        .youth-certificate-link > a > div > span {
          color: #999;

          font-size: 9px;

          letter-spacing: 0.14em;
        }

        .youth-certificate-link strong {
          font-size: 18px;

          font-weight: 600;
        }

        .youth-related {
          margin-top: 55px;

          border-top: 1px solid #111;
        }

        .youth-related > a {
          min-height: 90px;

          padding: 0 5px;

          border-bottom: 1px solid #bbb;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          color: #000;

          text-decoration: none;
        }

        .youth-related > a > div {
          display: flex;
          flex-direction: column;

          gap: 7px;
        }

        .youth-related > a > div > span {
          color: #999;

          font-size: 9px;

          letter-spacing: 0.14em;
        }

        .youth-related strong {
          font-size: 18px;

          font-weight: 600;
        }

        @media (max-width: 800px) {
          .youth-certificate-grid {
            margin-top: 45px;

            grid-template-columns: 1fr;

            gap: 55px;
          }

          .youth-certificate-image {
            padding: 8px;
          }

          .youth-certificate-content h2 {
            font-size: 21px;
          }

          .youth-certificate-link {
            margin-top: 35px;
          }

          .youth-certificate-link > a {
            min-height: 75px;
          }

          .youth-related {
            margin-top: 45px;
          }

          .youth-related > a {
            min-height: 80px;
          }
        }
      `}</style>
    </>
  );
}
