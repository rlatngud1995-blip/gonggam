
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jeonggamspace.vercel.app";

const PHONE = "041-415-0410";

export const metadata: Metadata = {
  title: "회사소개 | 천안 인테리어 전문기업",
  description:
    "정감공간은 대표 정경훈이 운영하는 천안 인테리어 전문기업입니다. 실내건축공사업 면허 보유 청년창업기업으로 구축·상가·아파트 인테리어 및 학교 리모델링을 상담합니다.",
  keywords: [
    "정감공간",
    "정감공간 정경훈",
    "천안 인테리어 업체",
    "천안 인테리어 잘하는곳",
    "천안 실내건축공사업",
    "천안 실내건축면허 업체",
    "천안 청년창업기업",
  ],
  alternates: {
    canonical: `${SITE_URL}/company`,
  },
  openGraph: {
    title: "회사소개 | 정감공간",
    description:
      "실내건축공사업 면허를 보유한 천안 청년창업 인테리어 기업 정감공간",
    url: `${SITE_URL}/company`,
    siteName: "정감공간",
    locale: "ko_KR",
    type: "website",
  },
};

const strengths = [
  {
    number: "01",
    title: "실내건축공사업 면허 보유",
    description:
      "실내건축공사업 등록을 기반으로 공간의 목적과 현장 조건에 맞는 인테리어 시공을 진행합니다.",
  },
  {
    number: "02",
    title: "청년창업기업",
    description:
      "새로운 관점과 책임감으로 고객의 요구를 이해하고 공간의 가치를 높이는 방향을 고민합니다.",
  },
  {
    number: "03",
    title: "공간별 맞춤 제안",
    description:
      "주거공간과 상업공간, 교육시설의 특성을 고려하여 디자인과 기능의 균형을 추구합니다.",
  },
];

const services = [
  {
    name: "구축 인테리어",
    english: "RENOVATION",
    href: "/services/old-house",
  },
  {
    name: "상가 인테리어",
    english: "COMMERCIAL",
    href: "/services/commercial",
  },
  {
    name: "아파트 인테리어",
    english: "RESIDENTIAL",
    href: "/services/apartment",
  },
  {
    name: "학교 리모델링",
    english: "EDUCATIONAL",
    href: "/services/school",
  },
];

export default function CompanyPage() {
  const companyJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "정감공간 회사소개",
    url: `${SITE_URL}/company`,
    mainEntity: {
      "@type": "Organization",
      name: "정감공간",
      url: SITE_URL,
      telephone: PHONE,
      description:
        "천안 인테리어 전문기업. 실내건축공사업 면허 보유 청년창업기업.",
      founder: {
        "@type": "Person",
        name: "정경훈",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companyJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* 회사소개 메인 */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "125px 7% 115px",
        }}
      >
        <div
          style={{
            maxWidth: 1250,
            margin: "auto",
          }}
        >
          <span className="section-label">
            ABOUT JEONGGAM SPACE
          </span>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 90px)",
              lineHeight: 1.2,
              letterSpacing: "-0.07em",
              fontWeight: 600,
              margin: "30px 0",
            }}
          >
            공간을 이해하고,
            <br />
            가치를 완성하다.
          </h1>

          <p
            style={{
              color: "#bbb",
              fontSize: 16,
              lineHeight: 2,
            }}
          >
            JEONGGAM SPACE
            <br />
            천안 인테리어 전문기업 정감공간
          </p>
        </div>
      </section>

      {/* 브랜드 소개 */}
      <section className="home-about section-padding">
        <div className="about-heading">
          <span className="section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            공간의 본질을
            <br />
            생각합니다.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            좋은 공간은
            <br />
            사람을 이해하는 것에서
            시작됩니다.
          </p>

          <p>
            정감공간은 천안을 중심으로
            주거공간, 상업공간, 교육시설의
            인테리어와 리모델링을 진행하는
            전문기업입니다.
          </p>

          <p>
            공간의 외형뿐 아니라 실제 사용하는
            사람의 생활방식과 공간의 목적,
            기능성 및 유지관리 편의성까지
            함께 고민합니다.
          </p>

          <p>
            고객과 충분히 소통하며
            현장 조건에 적합한 시공 방향을
            제안하는 것을 중요하게 생각합니다.
          </p>
        </div>
      </section>

      {/* 전문성과 신뢰 */}
      <section className="home-services section-padding">
        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR STRENGTHS
            </span>

            <h2>
              신뢰할 수 있는
              <br />
              인테리어 파트너
            </h2>
          </div>

          <p>
            전문성과 책임감을 바탕으로
            <br />
            공간의 가치를 고민합니다.
          </p>
        </div>

        <div className="trust-grid">
          {strengths.map((item) => (
            <div
              className="trust-item"
              key={item.number}
            >
              <span className="trust-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 시공 분야 */}
      <section className="section-padding">
        <div
          style={{
            maxWidth: 1250,
            margin: "auto",
          }}
        >
          <span className="section-label">
            BUSINESS AREAS
          </span>

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              letterSpacing: "-0.06em",
              lineHeight: 1.35,
              marginBottom: 50,
            }}
          >
            정감공간의
            <br />
            전문 시공 분야
          </h2>

          <div
            style={{
              borderTop: "1px solid #111",
            }}
          >
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  padding: "27px 5px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#999",
                      marginRight: 18,
                    }}
                  >
                    0{index + 1}
                  </span>

                  <strong
                    style={{
                      fontSize: "clamp(19px, 3vw, 29px)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {service.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: 9,
                      marginLeft: 36,
                      color: "#999",
                      fontSize: 11,
                      letterSpacing: 2,
                    }}
                  >
                    {service.english}
                  </span>
                </div>

                <span style={{ fontSize: 25 }}>
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="seo-intro section-padding">
        <div className="seo-inner">
          <span className="section-label">
            COMPANY INFORMATION
          </span>

          <h2>
            정감공간
            <br />
            기업 안내
          </h2>

          <div
            style={{
              borderTop: "1px solid #111",
              marginTop: 35,
            }}
          >
            {[
              ["상호명", "정감공간"],
              ["대표자", "정경훈"],
              ["대표번호", PHONE],
              ["전문 분야", "실내 인테리어 및 리모델링"],
              ["면허", "실내건축공사업 면허 보유"],
              ["기업 유형", "청년창업기업"],
              ["주요 상담 지역", "충청남도 천안시"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: 15,
                  padding: "19px 0",
                  borderBottom: "1px solid #ddd",
                  fontSize: 14,
                }}
              >
                <strong>{label}</strong>
                <span style={{ color: "#666" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 30 }}>
            실내건축공사업 등록번호와
            사업자등록번호 등 추가 기업정보는
            확인 후 홈페이지에 반영할 예정입니다.
          </p>
        </div>
      </section>

      {/* 상담 */}
      <section className="home-contact">
        <span className="section-label">
          CONTACT JEONGGAM
        </span>

        <h2>
          새로운 공간을 위한
          <br />
          첫 번째 상담
        </h2>

        <p>
          정감공간 · 대표 정경훈
        </p>

        <a
          href="tel:0414150410"
          className="contact-phone"
        >
          {PHONE} ↗
        </a>

        <Link
          href="/contact"
          className="contact-more"
        >
          견적문의 안내
        </Link>
      </section>
    </>
  );
}
