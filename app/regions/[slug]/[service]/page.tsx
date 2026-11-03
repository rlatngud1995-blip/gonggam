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

type FAQ = {
  q: string;
  a: string;
};

type ServiceData = {
  slug: string;
  name: string;
  shortName: string;
  english: string;
  title: string;
  description: string;
  intro: string;
  secondIntro: string;
  points: string[];
  checklist: string[];
  keywords: string[];
  faqs: FAQ[];
};

const SERVICES: ServiceData[] = [
  {
    slug: "apartment",
    name: "아파트 인테리어",
    shortName: "아파트",
    english: "APARTMENT INTERIOR",
    title: "아파트 인테리어",

    description:
      "아파트의 구조와 생활 동선을 고려해 거실·주방·욕실·침실 등 공간별 인테리어와 리모델링을 진행합니다.",

    intro:
      "아파트 인테리어는 단순히 마감재를 교체하는 것보다 가족의 생활 동선, 수납, 조명, 주방과 욕실 사용 방식까지 함께 고려하는 것이 중요합니다.",

    secondIntro:
      "정감공간은 기존 구조와 현장 상태를 확인하고 필요한 공사 범위를 정리한 뒤 공간의 목적과 생활 방식에 맞는 시공 방향을 제안합니다.",

    points: [
      "거실·주방·침실 공간 구성",
      "주방 및 욕실 리모델링",
      "도배·바닥·필름·도장 마감",
      "조명 및 전기 공사",
      "수납 및 생활 동선 개선",
    ],

    checklist: [
      "아파트 평형과 현재 내부 상태",
      "전체 공사 또는 부분 공사 여부",
      "주방·욕실 교체 여부",
      "도배·바닥·필름 시공 범위",
      "조명·전기 변경 여부",
      "입주 전 공사 또는 거주 중 공사 여부",
    ],

    keywords: [
      "아파트 인테리어",
      "아파트 리모델링",
      "천안 아파트 인테리어",
      "천안 인테리어 업체",
      "아산 아파트 인테리어",
    ],

    faqs: [
      {
        q: "아파트 인테리어 비용은 어떻게 결정되나요?",
        a: "평형, 철거 범위, 주방과 욕실 공사 여부, 마감재 종류, 전기와 조명 변경 범위, 현장 상태 등에 따라 달라집니다.",
      },
      {
        q: "부분 인테리어도 상담할 수 있나요?",
        a: "가능합니다. 주방, 욕실, 바닥, 도배, 필름, 조명 등 필요한 공사 범위를 확인한 뒤 상담합니다.",
      },
      {
        q: "상담 전에 무엇을 준비하면 좋나요?",
        a: "현장 주소, 평형, 현재 내부 사진, 원하는 공사 범위와 참고 이미지를 준비하면 보다 원활하게 상담할 수 있습니다.",
      },
    ],
  },

  {
    slug: "old-house",
    name: "구축 인테리어",
    shortName: "구축",
    english: "OLD HOUSE INTERIOR",
    title: "구축 인테리어",

    description:
      "오래된 주거공간의 기존 상태를 확인하고 철거·주방·욕실·바닥·도배·전기 등 필요한 공사 범위를 정리해 리모델링을 진행합니다.",

    intro:
      "구축 인테리어는 오래된 마감재뿐 아니라 배관, 전기, 창호, 바닥, 욕실과 주방 상태 등 기존 현장 조건을 먼저 확인하는 과정이 중요합니다.",

    secondIntro:
      "정감공간은 현장을 확인한 뒤 필요한 철거와 보수 범위를 정리하고 공간의 사용 목적에 맞춰 구축 리모델링 방향을 제안합니다.",

    points: [
      "기존 마감 철거 및 정리",
      "도배·바닥·필름·도장",
      "주방 및 욕실 리모델링",
      "전기·조명 개선",
      "공간 동선 및 수납 개선",
    ],

    checklist: [
      "주택 또는 아파트 준공연도",
      "기존 내부 마감 상태",
      "철거가 필요한 범위",
      "주방·욕실 교체 여부",
      "전기·조명 및 배선 변경 여부",
      "창호·바닥·도배 상태",
    ],

    keywords: [
      "구축 인테리어",
      "구축 리모델링",
      "천안 구축 인테리어",
      "천안 리모델링 업체",
      "아산 구축 인테리어",
    ],

    faqs: [
      {
        q: "구축 인테리어 비용은 어떻게 결정되나요?",
        a: "공사 면적, 철거 범위, 기존 현장 상태, 주방과 욕실 공사 여부, 마감재와 전기 공사 범위 등에 따라 달라집니다.",
      },
      {
        q: "오래된 아파트도 전체 리모델링이 가능한가요?",
        a: "현장 상태를 먼저 확인한 뒤 철거, 주방, 욕실, 바닥, 도배, 전기 등 필요한 공사 범위를 상담합니다.",
      },
      {
        q: "상담 전에 어떤 정보를 준비해야 하나요?",
        a: "현장 주소, 평형, 준공연도, 현재 사진, 원하는 공사 범위를 알려주시면 상담에 도움이 됩니다.",
      },
    ],
  },

  {
    slug: "commercial",
    name: "상가 인테리어",
    shortName: "상가",
    english: "COMMERCIAL INTERIOR",
    title: "상가 인테리어",

    description:
      "매장과 업무공간의 업종 특성, 고객 동선, 작업 동선과 운영 방식을 고려한 상업공간 인테리어를 진행합니다.",

    intro:
      "상가 인테리어는 외관 디자인뿐 아니라 고객 동선, 직원 작업 동선, 조명, 전기, 수납, 설비와 실제 매장 운영 방식까지 함께 고려해야 합니다.",

    secondIntro:
      "정감공간은 업종과 공간 목적을 확인하고 현장 조건에 맞춰 상업공간의 구성과 필요한 시공 범위를 정리합니다.",

    points: [
      "매장 및 상업공간 인테리어",
      "사무실 및 업무공간 시공",
      "고객·직원 동선 구성",
      "조명·전기·마감 공사",
      "업종 특성에 맞는 공간 제안",
    ],

    checklist: [
      "매장 업종과 운영 방식",
      "전체 면적과 현재 현장 상태",
      "고객 및 직원 동선",
      "전기·조명·설비 공사 범위",
      "간판 및 외부 디자인 여부",
      "예정된 오픈 일정",
    ],

    keywords: [
      "상가 인테리어",
      "상업공간 인테리어",
      "천안 상가 인테리어",
      "천안 상가 인테리어 업체",
      "아산 상가 인테리어",
    ],

    faqs: [
      {
        q: "상가 인테리어 비용은 어떻게 산정되나요?",
        a: "공간 면적, 업종, 철거 범위, 전기·조명·설비 공사, 마감재와 제작 가구 등의 범위에 따라 달라집니다.",
      },
      {
        q: "기존 상가 철거부터 상담할 수 있나요?",
        a: "현장 상태와 기존 시설물, 철거 범위를 확인한 뒤 필요한 공정을 함께 상담할 수 있습니다.",
      },
      {
        q: "상가 인테리어 상담 전에 무엇을 준비하면 좋나요?",
        a: "현장 주소, 면적, 업종, 현재 사진, 원하는 분위기와 오픈 예정일을 알려주시면 상담에 도움이 됩니다.",
      },
    ],
  },

  {
    slug: "school",
    name: "학교 리모델링",
    shortName: "학교",
    english: "EDUCATION SPACE",
    title: "학교 리모델링",

    description:
      "학교와 교육시설의 사용 목적, 학생과 교직원의 동선, 안전성과 내구성을 고려한 교육공간 리모델링을 진행합니다.",

    intro:
      "학교와 교육시설은 많은 사람이 반복적으로 사용하는 공간이기 때문에 디자인뿐 아니라 안전성, 내구성, 관리 편의성과 실제 사용 동선을 함께 고려하는 것이 중요합니다.",

    secondIntro:
      "정감공간은 교실, 공용공간, 교육시설의 목적과 현장 상태를 확인하고 필요한 리모델링 범위를 정리합니다.",

    points: [
      "학교 및 교육시설 리모델링",
      "교실 및 공용공간 개선",
      "벽체·바닥·천장 마감",
      "전기 및 조명 공사",
      "시설 목적에 맞는 공간 구성",
    ],

    checklist: [
      "시설 종류와 사용 목적",
      "공사 대상 공간과 면적",
      "현재 시설물과 마감 상태",
      "전기·조명 공사 여부",
      "학생 및 이용자 동선",
      "공사 가능 일정과 기간",
    ],

    keywords: [
      "학교 리모델링",
      "교육시설 인테리어",
      "천안 학교 리모델링",
      "천안 교육시설 인테리어",
      "아산 학교 리모델링",
    ],

    faqs: [
      {
        q: "학교 리모델링은 어떤 공간을 상담할 수 있나요?",
        a: "교실, 공용공간, 복도, 교육실 등 현장 조건과 사용 목적에 따라 필요한 공사 범위를 상담합니다.",
      },
      {
        q: "방학 기간에 맞춰 공사를 진행할 수 있나요?",
        a: "현장 범위와 공정에 따라 일정이 달라지므로 공사 가능 기간과 필요한 범위를 먼저 확인해 상담합니다.",
      },
      {
        q: "학교 리모델링 상담 전에 무엇을 준비해야 하나요?",
        a: "시설 위치, 공사 대상 공간, 면적, 현재 사진, 필요한 공사 내용과 원하는 일정을 준비하면 상담에 도움이 됩니다.",
      },
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

  const title = `${region.name} ${serviceData.name} 업체 | 정감공간`;

  const description = `${region.name} ${serviceData.name} 상담. ${serviceData.shortName} 공사 범위와 현장 상태를 확인해 천안·아산 인테리어 전문 정감공간이 상담합니다.`;

  return {
    title,

    description,

    keywords: [
      `${region.name} ${serviceData.name}`,
      `${region.name} ${serviceData.shortName} 인테리어`,
      `${region.name} 인테리어`,
      `${region.name} 인테리어 업체`,
      `${region.name} 리모델링`,
      ...serviceData.keywords,
      "천안 인테리어",
      "천안 인테리어 업체",
      "천안 실내건축공사업",
      "아산 인테리어",
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

  const otherServices = SERVICES.filter(
    (item) => item.slug !== serviceData.slug
  );

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${canonical}#service`,

    name: `${region.name} ${serviceData.name}`,

    serviceType: serviceData.name,

    url: canonical,

    description: `${region.name} 지역 ${serviceData.name} 및 리모델링 상담을 제공하는 정감공간입니다.`,

    provider: {
      "@type": "GeneralContractor",

      "@id": `${SITE_URL}/#business`,

      name: "정감공간",

      alternateName: "JEONGGAM SPACE",

      url: SITE_URL,

      telephone: PHONE,
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
        name: `${region.name} 인테리어`,
        item: `${SITE_URL}/regions/${region.slug}`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: `${region.name} ${serviceData.name}`,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: serviceData.faqs.map((faq) => ({
      "@type": "Question",

      name: `${region.name} ${faq.q}`,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.a,
      },
    })),
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
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
              {serviceData.name} 상담과 시공을 진행합니다. 현장의 상태와
              필요한 공사 범위를 확인한 뒤 공간의 목적에 맞는 인테리어
              방향을 제안합니다.
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

              <p>{serviceData.secondIntro}</p>

              <p>
                {region.name}에서 {serviceData.name}을 계획하고 있다면
                먼저 현장의 상태와 실제 필요한 공사 범위를 확인하는 것이
                중요합니다.
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

      {/* CHECKLIST */}

      <section className="local-service-checklist">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>03</span>
            <p>BEFORE CONSULTATION</p>
          </div>

          <div className="local-service-checklist-grid">
            <div>
              <p className="local-service-small-title">
                {region.name} {serviceData.name}
              </p>

              <h2>
                상담 전에
                <br />
                확인하면 좋은 내용
              </h2>
            </div>

            <div className="local-service-checklist-list">
              {serviceData.checklist.map((item, index) => (
                <div key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="local-service-process">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>04</span>
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
                실제 현장 상태와 구조, 기존 마감 상태를 확인합니다.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>공사 계획</strong>
              <p>
                공간 목적과 현장 조건에 맞춰 공사 범위를 정리합니다.
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

      {/* LOCAL INFORMATION */}

      <section className="local-service-information">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>05</span>
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
              <Link href="/company/license">
                실내건축공사업
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}

      <section className="local-service-seo">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>06</span>
            <p>LOCAL INTERIOR</p>
          </div>

          <div className="local-service-seo-grid">
            <h2>
              {region.name}
              <br />
              {serviceData.shortName}
              <br />
              인테리어 상담
            </h2>

            <div>
              <p>
                {region.name}에서 {serviceData.name}을 계획하고 있다면
                현장의 구조와 현재 상태, 필요한 공사 범위를 먼저
                확인하는 것이 중요합니다.
              </p>

              <p>
                정감공간은 {region.name}을 포함한 천안 지역과 아산
                지역에서 인테리어 및 리모델링 상담을 진행하며 공간의
                사용 목적과 현장 조건에 맞는 시공 방향을 제안합니다.
              </p>

              <p>
                상담 시 현장 주소, 공간 종류, 면적, 현재 사진과 원하는
                공사 범위를 알려주시면 보다 원활하게 상담할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="local-service-faq">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>07</span>
            <p>FAQ</p>
          </div>

          <div className="local-service-faq-heading">
            <p>{region.name} {serviceData.name}</p>

            <h2>
              자주 묻는
              <br />
              질문
            </h2>
          </div>

          <div className="local-service-faq-list">
            {serviceData.faqs.map((faq, index) => (
              <details key={faq.q}>
                <summary>
                  <span>
                    Q{String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {region.name} {faq.q}
                  </strong>

                  <i>+</i>
                </summary>

                <div>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}

      <section className="local-service-other">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>08</span>
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

      {/* TRUST LINKS */}

      <section className="local-service-trust">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>09</span>
            <p>COMPANY</p>
          </div>

          <div className="local-service-trust-list">
            <Link href={`/regions/${region.slug}`}>
              <div>
                <span>AREA</span>
                <strong>
                  {region.name} 인테리어 전체보기
                </strong>
              </div>

              <span>↗</span>
            </Link>

            <Link href="/company/license">
              <div>
                <span>LICENSE</span>
                <strong>
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <span>↗</span>
            </Link>

            <Link href="/company/youth">
              <div>
                <span>COMPANY</span>
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

              <strong>{PHONE}</strong>
            </a>

            <Link href="/contact">
              <span>견적 문의</span>
              <strong>↗</strong>
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE STYLE */}

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
          max-width: 800px;
          font-size: 20px;
          line-height: 1.75;
          word-break: keep-all;
        }

        .local-service-intro-grid p,
        .local-service-seo-grid p {
          word-break: keep-all;
        }

        .local-service-checklist {
          padding: 110px 0;
          background: #f5f5f5;
        }

        .local-service-checklist-grid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 70px;
        }

        .local-service-small-title {
          margin: 0 0 20px;
          color: #777;
          font-size: 12px;
        }

        .local-service-checklist-grid h2 {
          margin: 0;
          font-size: 42px;
          line-height: 1.15;
          letter-spacing: -0.05em;
        }

        .local-service-checklist-list {
          border-top: 1px solid #111;
        }

        .local-service-checklist-list > div {
          min-height: 68px;
          display: grid;
          grid-template-columns: 55px 1fr;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #ccc;
        }

        .local-service-checklist-list span {
          color: #999;
          font-size: 10px;
        }

        .local-service-checklist-list p {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          word-break: keep-all;
        }

        .local-service-faq {
          padding: 110px 0;
          background: #fff;
        }

        .local-service-faq-heading {
          margin-top: 55px;
        }

        .local-service-faq-heading > p {
          margin: 0 0 18px;
          color: #777;
          font-size: 13px;
        }

        .local-service-faq-heading h2 {
          margin: 0;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.05em;
        }

        .local-service-faq-list {
          margin-top: 55px;
          border-top: 1px solid #111;
        }

        .local-service-faq-list details {
          border-bottom: 1px solid #ccc;
        }

        .local-service-faq-list summary {
          min-height: 88px;
          display: grid;
          grid-template-columns: 60px 1fr 30px;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          list-style: none;
        }

        .local-service-faq-list summary::-webkit-details-marker {
          display: none;
        }

        .local-service-faq-list summary > span {
          color: #999;
          font-size: 10px;
        }

        .local-service-faq-list summary strong {
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
          word-break: keep-all;
        }

        .local-service-faq-list summary i {
          font-style: normal;
          font-size: 22px;
          font-weight: 300;
        }

        .local-service-faq-list details[open] summary i {
          transform: rotate(45deg);
        }

        .local-service-faq-list details > div {
          padding: 0 45px 28px 75px;
        }

        .local-service-faq-list details > div p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .local-service-trust {
          padding: 100px 0;
          background: #f5f5f5;
        }

        .local-service-trust-list {
          margin-top: 50px;
          border-top: 1px solid #111;
        }

        .local-service-trust-list > a {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #bbb;
          color: #000;
          text-decoration: none;
        }

        .local-service-trust-list > a > div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .local-service-trust-list > a > div span {
          color: #999;
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .local-service-trust-list > a > div strong {
          font-size: 17px;
          font-weight: 600;
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
          }

          .local-service-hero-content h1 {
            font-size: 44px;
            line-height: 1.08;
          }

          .local-service-description {
            margin-top: 34px;
            font-size: 16px;
            line-height: 1.8;
          }

          .local-service-intro-grid h2 {
            font-size: 36px;
          }

          .local-service-intro-grid p,
          .local-service-seo-grid p {
            font-size: 16px;
            line-height: 1.8;
          }

          .local-service-checklist {
            padding: 75px 0;
          }

          .local-service-checklist-grid {
            margin-top: 45px;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .local-service-checklist-grid h2 {
            font-size: 34px;
          }

          .local-service-checklist-list > div {
            grid-template-columns: 40px 1fr;
          }

          .local-service-faq {
            padding: 75px 0;
          }

          .local-service-faq-heading {
            margin-top: 45px;
          }

          .local-service-faq-heading h2 {
            font-size: 38px;
          }

          .local-service-faq-list {
            margin-top: 40px;
          }

          .local-service-faq-list summary {
            min-height: 80px;
            grid-template-columns: 42px 1fr 20px;
            gap: 10px;
          }

          .local-service-faq-list summary strong {
            font-size: 14px;
          }

          .local-service-faq-list details > div {
            padding: 0 20px 25px 52px;
          }

          .local-service-trust {
            padding: 75px 0;
          }

          .local-service-trust-list {
            margin-top: 40px;
          }

          .local-service-trust-list > a > div strong {
            font-size: 15px;
          }
        }

        @media (max-width: 420px) {
          .local-service-hero-content h1 {
            font-size: 40px;
          }

          .local-service-checklist-grid h2 {
            font-size: 31px;
          }

          .local-service-faq-heading h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}
