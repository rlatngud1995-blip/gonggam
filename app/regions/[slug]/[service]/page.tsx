import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";
const PHONE = "041-415-0410";
const TEL = "tel:0414150410";

type Params = {
  slug: string;
  service: string;
};

type Props = {
  params: Promise<Params>;
};

type ServiceData = {
  slug: string;
  name: string;
  shortName: string;
  english: string;
  title: string;
  description: string;
  intro: string;
  points: string[];
  keywords: string[];
};

const SERVICES: ServiceData[] = [
  {
    slug: "apartment",
    name: "아파트 인테리어",
    shortName: "아파트",
    english: "APARTMENT INTERIOR",
    title: "아파트 인테리어",
    description:
      "아파트의 구조와 생활 동선을 고려해 공간의 완성도를 높이는 인테리어와 리모델링을 진행합니다.",
    intro:
      "아파트 인테리어는 디자인뿐 아니라 실제 생활 동선, 수납, 조명, 마감재와 공간 활용까지 함께 고려하는 것이 중요합니다.",
    points: [
      "거실·주방·침실 공간 구성",
      "도배·바닥·필름·도장 마감",
      "주방 및 욕실 리모델링",
      "조명 및 전기 공사",
      "수납 및 동선 개선",
    ],
    keywords: [
      "아파트 인테리어",
      "아파트 리모델링",
      "천안 아파트 인테리어",
      "천안 인테리어 업체",
    ],
  },
  {
    slug: "old-house",
    name: "구축 인테리어",
    shortName: "구축",
    english: "OLD HOUSE INTERIOR",
    title: "구축 인테리어",
    description:
      "오래된 주거공간의 기존 상태와 구조를 확인하고 필요한 공사 범위를 정리해 리모델링을 진행합니다.",
    intro:
      "구축 인테리어는 기존 마감 상태와 배관·전기·창호·바닥 등 현장 조건을 먼저 확인한 뒤 공사 범위를 계획하는 것이 중요합니다.",
    points: [
      "기존 마감 철거 및 정리",
      "도배·바닥·필름·도장",
      "주방 및 욕실 리모델링",
      "전기·조명 개선",
      "공간 동선 및 수납 개선",
    ],
    keywords: [
      "구축 인테리어",
      "구축 리모델링",
      "천안 구축 인테리어",
      "천안 리모델링 업체",
    ],
  },
  {
    slug: "commercial",
    name: "상가 인테리어",
    shortName: "상가",
    english: "COMMERCIAL INTERIOR",
    title: "상가 인테리어",
    description:
      "매장과 업무공간의 업종 특성, 고객 동선, 운영 방식을 고려한 상업공간 인테리어를 진행합니다.",
    intro:
      "상가 인테리어는 디자인뿐 아니라 업종 특성과 고객 동선, 작업 동선, 조명, 전기와 공간 활용을 함께 고려해야 합니다.",
    points: [
      "매장 및 상업공간 인테리어",
      "사무실 및 업무공간 시공",
      "동선 및 공간 구성",
      "조명·전기·마감 공사",
      "업종 특성에 맞는 공간 제안",
    ],
    keywords: [
      "상가 인테리어",
      "상업공간 인테리어",
      "천안 상가 인테리어",
      "천안 상가 인테리어 업체",
    ],
  },
  {
    slug: "school",
    name: "학교 리모델링",
    shortName: "학교",
    english: "EDUCATION SPACE",
    title: "학교 리모델링",
    description:
      "학교와 교육시설의 사용 목적, 동선과 안전성을 고려한 인테리어 및 리모델링을 진행합니다.",
    intro:
      "교육공간은 학생과 교직원이 사용하는 공간인 만큼 사용 목적과 동선, 안전성, 내구성을 함께 고려한 시공이 중요합니다.",
    points: [
      "학교 및 교육시설 리모델링",
      "교실 및 공용공간 개선",
      "벽체·바닥·천장 마감",
      "전기 및 조명 공사",
      "시설 목적에 맞는 공간 구성",
    ],
    keywords: [
      "학교 리모델링",
      "교육시설 인테리어",
      "천안 학교 리모델링",
      "천안 교육시설 인테리어",
    ],
  },
];

function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateStaticParams() {
  return regions.flatMap((region) =>
    SERVICES.map((service) => ({
      slug: region.slug,
      service: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, service } = await params;

  const region = getRegion(slug);
  const serviceData = getService(service);

  if (!region || !serviceData) {
    return {};
  }

  const canonical = `${SITE_URL}/regions/${region.slug}/${serviceData.slug}`;

  const title = `${region.name} ${serviceData.name} | 정감공간`;

  const description = `${region.name} ${serviceData.name} 전문 정감공간. 천안·아산 인테리어 및 리모델링 상담. 실내건축공사업 등록 업체.`;

  return {
    title,
    description,

    keywords: [
      `${region.name} ${serviceData.name}`,
      `${region.name} 인테리어`,
      `${region.name} 인테리어 업체`,
      `${region.name} 리모델링`,
      ...serviceData.keywords,
      "천안 인테리어",
      "천안 인테리어 업체",
      "천안 실내건축공사업",
      "정감공간",
    ],

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "정감공간",
      title,
      description,
      locale: "ko_KR",
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
}

export default async function RegionServicePage({
  params,
}: Props) {
  const { slug, service } = await params;

  const region = getRegion(slug);
  const serviceData = getService(service);

  if (!region || !serviceData) {
    notFound();
  }

  const canonical = `${SITE_URL}/regions/${region.slug}/${serviceData.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: `${region.name} ${serviceData.name}`,

    serviceType: serviceData.name,

    url: canonical,

    description: `${region.name} 지역 ${serviceData.name} 및 리모델링 서비스를 제공하는 정감공간입니다.`,

    provider: {
      "@type": "GeneralContractor",

      name: "정감공간",

      alternateName: "JEONGGAM SPACE",

      url: SITE_URL,

      telephone: PHONE,

      knowsAbout: [
        "인테리어",
        "리모델링",
        "실내건축공사",
        "실내건축공사업",
        serviceData.name,
      ],
    },

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: region.name,
      },

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: SITE_URL,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: region.name,
        item: `${SITE_URL}/regions/${region.slug}`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: serviceData.name,
        item: canonical,
      },
    ],
  };

  const otherServices = SERVICES.filter(
    (item) => item.slug !== serviceData.slug
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="local-service-hero">
        <div className="local-service-container">
          <div className="local-service-hero-top">
            <span>JEONGGAM SPACE</span>
            <span>{serviceData.english}</span>
          </div>

          <div className="local-service-hero-content">
            <p className="local-service-eyebrow">
              {region.name} {serviceData.name}
            </p>

            <h1>
              {region.name}
              <br />
              {serviceData.name}
            </h1>

            <p className="local-service-description">
              정감공간은 {region.name}을 포함한 천안·아산 지역에서{" "}
              {serviceData.name}과 관련된 인테리어 및 리모델링 상담을
              진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="local-service-intro">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>01</span>
            <p>ABOUT SERVICE</p>
          </div>

          <div className="local-service-intro-grid">
            <h2>
              {region.name}
              <br />
              {serviceData.title}
            </h2>

            <div>
              <p>{serviceData.intro}</p>

              <p>
                정감공간은 현장의 현재 상태와 필요한 공사 범위를 확인한
                뒤 공간의 목적과 사용 방식에 맞는 시공 방향을
                제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SCOPE */}

      <section className="local-service-scope">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>02</span>
            <p>WORK SCOPE</p>
          </div>

          <div className="local-service-scope-list">
            {serviceData.points.map((point, index) => (
              <div key={point}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="local-service-process">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>03</span>
            <p>PROCESS</p>
          </div>

          <div className="local-service-process-grid">
            <div>
              <span>01</span>
              <strong>상담</strong>
              <p>
                현장 위치와 공간 종류, 필요한 공사 범위를 확인합니다.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>현장 확인</strong>
              <p>
                실제 현장 상태와 구조, 시공 조건을 확인합니다.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>공사 계획</strong>
              <p>
                공간 목적과 예산에 맞춰 공사 범위를 정리합니다.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>시공</strong>
              <p>
                계획된 공정에 따라 인테리어 시공을 진행합니다.
              </p>
            </div>

            <div>
              <span>05</span>
              <strong>마감 확인</strong>
              <p>
                주요 마감과 시공 상태를 확인합니다.
              </p>
            </div>

            <div>
              <span>06</span>
              <strong>완료</strong>
              <p>
                최종 확인 후 공사를 마무리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION */}

      <section className="local-service-information">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>04</span>
            <p>LOCAL INFORMATION</p>
          </div>

          <div className="local-service-information-grid">
            <div>
              <span>AREA</span>
              <strong>{region.name}</strong>
            </div>

            <div>
              <span>SERVICE</span>
              <strong>{serviceData.name}</strong>
            </div>

            <div>
              <span>SERVICE AREA</span>
              <strong>천안 / 아산 전 지역</strong>
            </div>

            <div>
              <span>LICENSE</span>
              <strong>실내건축공사업</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="local-service-seo">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>05</span>
            <p>LOCAL INTERIOR</p>
          </div>

          <div className="local-service-seo-grid">
            <h2>
              {region.name}
              <br />
              {serviceData.shortName} 인테리어 상담
            </h2>

            <div>
              <p>
                {region.name}에서 {serviceData.name}을 계획하고 있다면
                현장의 구조와 현재 상태, 필요한 공사 범위를 먼저
                확인하는 것이 중요합니다.
              </p>

              <p>
                정감공간은 공간의 사용 목적과 동선, 마감 상태 등을
                확인해 현장에 맞는 인테리어 방향을 제안합니다.
              </p>

              <p>
                상담 시 현장 위치와 공간 종류, 원하는 공사 범위와 참고
                사진 등을 알려주시면 보다 원활하게 상담할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER */}

      <section className="local-service-other">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>06</span>
            <p>OTHER SERVICE</p>
          </div>

          <div className="local-service-other-list">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/regions/${region.slug}/${item.slug}`}
              >
                <div>
                  <span>{region.name}</span>
                  <strong>{item.name}</strong>
                </div>

                <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REGION LINK */}

      <section className="local-service-region-link">
        <div className="local-service-container">
          <Link href={`/regions/${region.slug}`}>
            <div>
              <span>AREA</span>

              <strong>
                {region.name} 인테리어 전체 보기
              </strong>
            </div>

            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* CONTACT */}

      <section className="local-service-contact">
        <div className="local-service-container">
          <p>CONTACT</p>

          <h2>
            {region.name} {serviceData.name}
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="local-service-contact-actions">
            <a href={TEL}>
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

      {/* MOBILE / PAGE STYLE */}

      <style>{`
        .local-service-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          width: 100%;
        }

        .local-service-hero-top span {
          display: block;
          font-size: 12px;
          letter-spacing: 0.14em;
          white-space: nowrap;
        }

        .local-service-hero-content {
          margin-top: 95px;
          max-width: 850px;
        }

        .local-service-eyebrow {
          margin: 0 0 35px;
          font-size: 18px;
          line-height: 1.5;
        }

        .local-service-hero-content h1 {
          margin: 0;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 1.06;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .local-service-description {
          margin: 42px 0 0;
          max-width: 760px;
          font-size: 20px;
          line-height: 1.75;
          word-break: keep-all;
        }

        .local-service-intro-grid p,
        .local-service-seo-grid p {
          word-break: keep-all;
        }

        @media (max-width: 800px) {
          .local-service-hero {
            padding-top: 72px;
            padding-bottom: 90px;
          }

          .local-service-hero-top {
            gap: 16px;
          }

          .local-service-hero-top span {
            font-size: 9px;
            letter-spacing: 0.11em;
          }

          .local-service-hero-top span:last-child {
            text-align: right;
          }

          .local-service-hero-content {
            margin-top: 70px;
          }

          .local-service-eyebrow {
            margin-bottom: 28px;
            font-size: 15px;
            line-height: 1.5;
          }

          .local-service-hero-content h1 {
            font-size: 46px;
            line-height: 1.08;
            letter-spacing: -0.055em;
          }

          .local-service-description {
            margin-top: 34px;
            font-size: 17px;
            line-height: 1.75;
          }

          .local-service-label {
            display: flex;
            align-items: center;
            gap: 25px;
          }

          .local-service-intro-grid {
            margin-top: 48px;
          }

          .local-service-intro-grid h2 {
            font-size: 38px;
            line-height: 1.15;
          }

          .local-service-intro-grid p {
            font-size: 16px;
            line-height: 1.8;
          }

          .local-service-intro-grid p + p {
            margin-top: 25px;
          }

          .local-service-scope-list strong {
            word-break: keep-all;
          }

          .local-service-process-grid p {
            word-break: keep-all;
          }

          .local-service-seo-grid h2 {
            word-break: keep-all;
          }

          .local-service-seo-grid p {
            font-size: 16px;
            line-height: 1.8;
          }
        }

        @media (max-width: 420px) {
          .local-service-hero-top span {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .local-service-hero-content h1 {
            font-size: 42px;
          }

          .local-service-description {
            font-size: 16px;
          }

          .local-service-intro-grid h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}
