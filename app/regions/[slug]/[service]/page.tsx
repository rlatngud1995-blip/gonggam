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

  const description = `${region.name} ${serviceData.name} 상담. 현장 상태와 공사 범위를 확인해 천안·아산 인테리어 전문 정감공간이 상담합니다.`;

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

  const processItems = [
    {
      title: "상담",
      text: "현장 위치와 공간 종류, 필요한 공사 범위를 확인합니다.",
    },
    {
      title: "현장 확인",
      text: "실제 현장 상태와 구조, 기존 마감 상태를 확인합니다.",
    },
    {
      title: "공사 계획",
      text: "공간 목적과 현장 조건에 맞춰 공사 범위를 정리합니다.",
    },
    {
      title: "시공",
      text: "계획된 공정에 따라 인테리어 시공을 진행합니다.",
    },
    {
      title: "마감 확인",
      text: "주요 마감과 시공 상태를 확인합니다.",
    },
    {
      title: "완료",
      text: "최종 확인 후 공사를 마무리합니다.",
    },
  ];

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
              {serviceData.name}
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

          <div className="fixed-scope-list">
            {serviceData.points.map((point, index) => (
              <div className="fixed-scope-row" key={point}>
                <span className="fixed-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}

      <section className="fixed-check-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>03</span>
            <p>BEFORE CONSULTATION</p>
          </div>

          <div className="fixed-check-grid">
            <div className="fixed-check-heading">
              <p>
                {region.name} {serviceData.name}
              </p>

              <h2>
                상담 전에
                <br />
                확인하면 좋은 내용
              </h2>
            </div>

            <div className="fixed-check-list">
              {serviceData.checklist.map((item, index) => (
                <div className="fixed-check-row" key={item}>
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

      <section className="fixed-process-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>04</span>
            <p>PROCESS</p>
          </div>

          <div className="fixed-process-list">
            {processItems.map((item, index) => (
              <div className="fixed-process-row" key={item.title}>
                <div className="fixed-process-title">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item.title}</strong>
                </div>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATION */}

      <section className="fixed-info-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>05</span>
            <p>LOCAL INFORMATION</p>
          </div>

          <div className="fixed-info-list">
            <div className="fixed-info-row">
              <span>AREA</span>
              <strong>{region.name}</strong>
            </div>

            <div className="fixed-info-row">
              <span>SERVICE</span>
              <strong>{serviceData.name}</strong>
            </div>

            <div className="fixed-info-row">
              <span>SERVICE AREA</span>
              <strong>천안 / 아산 전 지역</strong>
            </div>

            <div className="fixed-info-row">
              <span>LICENSE</span>

              <Link href="/company/license">
                실내건축공사업
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

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

      <section className="fixed-faq-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>07</span>
            <p>FAQ</p>
          </div>

          <div className="fixed-faq-heading">
            <p>
              {region.name} {serviceData.name}
            </p>

            <h2>
              자주 묻는
              <br />
              질문
            </h2>
          </div>

          <div className="fixed-faq-list">
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

      {/* OTHER SERVICE */}

      <section className="fixed-other-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>08</span>
            <p>OTHER SERVICE</p>
          </div>

          <div className="fixed-other-list">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/regions/${region.slug}/${item.slug}`}
                className="fixed-other-row"
              >
                <div>
                  <span>{region.name}</span>
                  <strong>{item.name}</strong>
                </div>

                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY LINKS */}

      <section className="fixed-company-section">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>09</span>
            <p>COMPANY</p>
          </div>

          <div className="fixed-company-list">
            <Link
              href={`/regions/${region.slug}`}
              className="fixed-company-row"
            >
              <div>
                <span>AREA</span>

                <strong>
                  {region.name} 인테리어 전체보기
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/company/license"
              className="fixed-company-row"
            >
              <div>
                <span>LICENSE</span>

                <strong>
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/company/youth"
              className="fixed-company-row"
            >
              <div>
                <span>COMPANY</span>

                <strong>
                  청년창업기업 확인
                </strong>
              </div>

              <b>↗</b>
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

      <style>{`
        /* =========================
           COMMON
        ========================= */

        .local-service-hero-top {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 30px !important;
          width: 100% !important;
        }

        .local-service-hero-top span {
          display: block !important;
          font-size: 12px !important;
          letter-spacing: 0.14em !important;
          white-space: nowrap !important;
        }

        .local-service-description,
        .local-service-intro-grid p,
        .local-service-seo-grid p {
          word-break: keep-all !important;
        }

        /* =========================
           WORK SCOPE
        ========================= */

        .fixed-scope-list {
          margin-top: 50px !important;
          border-top: 1px solid #111 !important;
        }

        .fixed-scope-row {
          min-height: 74px !important;

          display: grid !important;
          grid-template-columns: 54px minmax(0, 1fr) !important;

          align-items: center !important;

          column-gap: 22px !important;

          border-bottom: 1px solid #d0d0d0 !important;
        }

        .fixed-scope-row .fixed-number {
          margin: 0 !important;
          padding: 0 !important;

          display: block !important;

          color: #999 !important;

          font-size: 11px !important;
          line-height: 1 !important;

          font-weight: 400 !important;
        }

        .fixed-scope-row strong {
          margin: 0 !important;
          padding: 0 !important;

          display: block !important;

          color: #111 !important;

          font-size: 18px !important;
          line-height: 1.45 !important;

          font-weight: 600 !important;

          word-break: keep-all !important;
        }

        /* =========================
           CHECKLIST
        ========================= */

        .fixed-check-section {
          padding: 110px 0 !important;
          background: #f5f5f5 !important;
        }

        .fixed-check-grid {
          margin-top: 55px !important;

          display: grid !important;
          grid-template-columns: 0.8fr 1.2fr !important;

          gap: 70px !important;
        }

        .fixed-check-heading > p {
          margin: 0 0 22px !important;

          color: #888 !important;

          font-size: 13px !important;
          line-height: 1.5 !important;
        }

        .fixed-check-heading h2 {
          margin: 0 !important;

          font-size: 44px !important;
          line-height: 1.15 !important;

          font-weight: 700 !important;

          letter-spacing: -0.05em !important;

          word-break: keep-all !important;
        }

        .fixed-check-list {
          border-top: 1px solid #111 !important;
        }

        .fixed-check-row {
          min-height: 76px !important;

          display: grid !important;
          grid-template-columns: 55px minmax(0, 1fr) !important;

          align-items: center !important;

          column-gap: 20px !important;

          border-bottom: 1px solid #ccc !important;
        }

        .fixed-check-row > span {
          color: #999 !important;
          font-size: 11px !important;
        }

        .fixed-check-row > p {
          margin: 0 !important;

          font-size: 16px !important;
          line-height: 1.55 !important;

          word-break: keep-all !important;
        }

        /* =========================
           PROCESS
        ========================= */

        .fixed-process-section {
          padding: 110px 0 !important;
          background: #fff !important;
        }

        .fixed-process-list {
          margin-top: 55px !important;
          border-top: 1px solid #111 !important;
        }

        .fixed-process-row {
          min-height: 115px !important;

          display: grid !important;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr) !important;

          align-items: center !important;

          gap: 40px !important;

          border-bottom: 1px solid #ccc !important;
        }

        .fixed-process-title {
          display: grid !important;
          grid-template-columns: 55px minmax(0, 1fr) !important;

          align-items: center !important;

          gap: 18px !important;
        }

        .fixed-process-title > span {
          display: block !important;

          color: #999 !important;

          font-size: 11px !important;
          line-height: 1 !important;
        }

        .fixed-process-title > strong {
          display: block !important;

          font-size: 20px !important;
          line-height: 1.4 !important;

          font-weight: 650 !important;
        }

        .fixed-process-row > p {
          margin: 0 !important;

          color: #444 !important;

          font-size: 16px !important;
          line-height: 1.75 !important;

          word-break: keep-all !important;
        }

        /* =========================
           INFORMATION
        ========================= */

        .fixed-info-section {
          padding: 100px 0 !important;
          background: #f5f5f5 !important;
        }

        .fixed-info-list {
          margin-top: 50px !important;
          border-top: 1px solid #111 !important;
        }

        .fixed-info-row {
          min-height: 76px !important;

          display: grid !important;
          grid-template-columns: 180px minmax(0, 1fr) !important;

          align-items: center !important;

          column-gap: 40px !important;

          border-bottom: 1px solid #ccc !important;
        }

        .fixed-info-row > span {
          display: block !important;

          color: #999 !important;

          font-size: 10px !important;

          letter-spacing: 0.12em !important;
        }

        .fixed-info-row > strong,
        .fixed-info-row > a {
          display: block !important;

          margin: 0 !important;

          color: #111 !important;

          font-size: 17px !important;
          line-height: 1.5 !important;

          font-weight: 600 !important;

          text-decoration: none !important;

          word-break: keep-all !important;
        }

        .fixed-info-row > a {
          text-decoration: underline !important;
          text-underline-offset: 4px !important;
        }

        /* =========================
           FAQ
        ========================= */

        .fixed-faq-section {
          padding: 110px 0 !important;
          background: #fff !important;
        }

        .fixed-faq-heading {
          margin-top: 55px !important;
        }

        .fixed-faq-heading > p {
          margin: 0 0 18px !important;

          color: #777 !important;

          font-size: 13px !important;
        }

        .fixed-faq-heading h2 {
          margin: 0 !important;

          font-size: 46px !important;
          line-height: 1.08 !important;

          letter-spacing: -0.05em !important;
        }

        .fixed-faq-list {
          margin-top: 50px !important;

          border-top: 1px solid #111 !important;
        }

        .fixed-faq-list details {
          border-bottom: 1px solid #ccc !important;
        }

        .fixed-faq-list summary {
          min-height: 88px !important;

          display: grid !important;

          grid-template-columns:
            55px
            minmax(0, 1fr)
            25px !important;

          align-items: center !important;

          gap: 18px !important;

          list-style: none !important;

          cursor: pointer !important;
        }

        .fixed-faq-list summary::-webkit-details-marker {
          display: none !important;
        }

        .fixed-faq-list summary > span {
          color: #999 !important;

          font-size: 10px !important;
        }

        .fixed-faq-list summary > strong {
          font-size: 16px !important;
          line-height: 1.55 !important;

          font-weight: 600 !important;

          word-break: keep-all !important;
        }

        .fixed-faq-list summary > i {
          font-style: normal !important;

          font-size: 22px !important;

          text-align: right !important;
        }

        .fixed-faq-list details[open] summary > i {
          transform: rotate(45deg) !important;
        }

        .fixed-faq-list details > div {
          padding:
            0
            40px
            28px
            73px !important;
        }

        .fixed-faq-list details > div p {
          margin: 0 !important;

          color: #666 !important;

          font-size: 14px !important;
          line-height: 1.85 !important;

          word-break: keep-all !important;
        }

        /* =========================
           OTHER SERVICE
        ========================= */

        .fixed-other-section {
          padding: 105px 0 !important;
          background: #fff !important;
        }

        .fixed-other-list {
          margin-top: 50px !important;

          border-top: 1px solid #111 !important;
        }

        .fixed-other-row {
          min-height: 88px !important;

          display: grid !important;

          grid-template-columns:
            minmax(0, 1fr)
            40px !important;

          align-items: center !important;

          gap: 25px !important;

          border-bottom: 1px solid #ccc !important;

          color: #111 !important;

          text-decoration: none !important;
        }

        .fixed-other-row > div {
          min-width: 0 !important;

          display: flex !important;
          align-items: baseline !important;

          gap: 22px !important;
        }

        .fixed-other-row > div > span {
          flex: 0 0 auto !important;

          color: #999 !important;

          font-size: 12px !important;
        }

        .fixed-other-row > div > strong {
          min-width: 0 !important;

          font-size: 19px !important;
          line-height: 1.45 !important;

          font-weight: 600 !important;

          word-break: keep-all !important;
        }

        .fixed-other-row > b {
          display: block !important;

          text-align: right !important;

          font-size: 20px !important;
          line-height: 1 !important;

          font-weight: 400 !important;
        }

        /* =========================
           COMPANY
        ========================= */

        .fixed-company-section {
          padding: 100px 0 !important;
          background: #f5f5f5 !important;
        }

        .fixed-company-list {
          margin-top: 50px !important;

          border-top: 1px solid #111 !important;
        }

        .fixed-company-row {
          min-height: 92px !important;

          display: grid !important;

          grid-template-columns:
            minmax(0, 1fr)
            40px !important;

          align-items: center !important;

          gap: 25px !important;

          border-bottom: 1px solid #bbb !important;

          color: #111 !important;

          text-decoration: none !important;
        }

        .fixed-company-row > div {
          min-width: 0 !important;

          display: flex !important;
          flex-direction: column !important;

          gap: 9px !important;
        }

        .fixed-company-row > div > span {
          color: #999 !important;

          font-size: 10px !important;

          letter-spacing: 0.14em !important;
        }

        .fixed-company-row > div > strong {
          font-size: 18px !important;
          line-height: 1.45 !important;

          font-weight: 600 !important;

          word-break: keep-all !important;
        }

        .fixed-company-row > b {
          display: block !important;

          text-align: right !important;

          font-size: 20px !important;

          font-weight: 400 !important;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {
          .local-service-hero-top {
            gap: 15px !important;
          }

          .local-service-hero-top span {
            font-size: 8px !important;
            letter-spacing: 0.08em !important;
          }

          /* WORK SCOPE */

          .fixed-scope-list {
            margin-top: 35px !important;
          }

          .fixed-scope-row {
            min-height: 68px !important;

            grid-template-columns:
              40px
              minmax(0, 1fr) !important;

            column-gap: 15px !important;
          }

          .fixed-scope-row .fixed-number {
            font-size: 10px !important;
          }

          .fixed-scope-row strong {
            font-size: 16px !important;
          }

          /* CHECK */

          .fixed-check-section {
            padding: 75px 0 !important;
          }

          .fixed-check-grid {
            margin-top: 45px !important;

            grid-template-columns: 1fr !important;

            gap: 42px !important;
          }

          .fixed-check-heading h2 {
            font-size: 36px !important;
            line-height: 1.15 !important;
          }

          .fixed-check-row {
            min-height: 72px !important;

            grid-template-columns:
              42px
              minmax(0, 1fr) !important;

            column-gap: 14px !important;
          }

          .fixed-check-row > p {
            font-size: 15px !important;
          }

          /* PROCESS */

          .fixed-process-section {
            padding: 75px 0 !important;
          }

          .fixed-process-list {
            margin-top: 42px !important;
          }

          .fixed-process-row {
            min-height: auto !important;

            padding: 27px 0 !important;

            grid-template-columns: 1fr !important;

            gap: 18px !important;
          }

          .fixed-process-title {
            grid-template-columns:
              42px
              minmax(0, 1fr) !important;

            gap: 14px !important;
          }

          .fixed-process-title > span {
            font-size: 10px !important;
          }

          .fixed-process-title > strong {
            font-size: 17px !important;
          }

          .fixed-process-row > p {
            padding-left: 56px !important;

            font-size: 15px !important;
            line-height: 1.75 !important;
          }

          /* INFO */

          .fixed-info-section {
            padding: 75px 0 !important;
          }

          .fixed-info-list {
            margin-top: 40px !important;
          }

          .fixed-info-row {
            min-height: 70px !important;

            grid-template-columns:
              105px
              minmax(0, 1fr) !important;

            column-gap: 18px !important;
          }

          .fixed-info-row > span {
            font-size: 9px !important;
          }

          .fixed-info-row > strong,
          .fixed-info-row > a {
            font-size: 15px !important;
          }

          /* FAQ */

          .fixed-faq-section {
            padding: 75px 0 !important;
          }

          .fixed-faq-heading {
            margin-top: 42px !important;
          }

          .fixed-faq-heading h2 {
            font-size: 36px !important;
          }

          .fixed-faq-list {
            margin-top: 38px !important;
          }

          .fixed-faq-list summary {
            min-height: 78px !important;

            grid-template-columns:
              42px
              minmax(0, 1fr)
              20px !important;

            gap: 12px !important;
          }

          .fixed-faq-list summary > strong {
            font-size: 14px !important;
          }

          .fixed-faq-list details > div {
            padding:
              0
              10px
              25px
              54px !important;
          }

          /* OTHER */

          .fixed-other-section {
            padding: 75px 0 !important;
          }

          .fixed-other-list {
            margin-top: 40px !important;
          }

          .fixed-other-row {
            min-height: 78px !important;

            grid-template-columns:
              minmax(0, 1fr)
              28px !important;

            gap: 14px !important;
          }

          .fixed-other-row > div {
            display: grid !important;

            grid-template-columns:
              65px
              minmax(0, 1fr) !important;

            align-items: center !important;

            gap: 14px !important;
          }

          .fixed-other-row > div > span {
            font-size: 11px !important;
          }

          .fixed-other-row > div > strong {
            font-size: 16px !important;
          }

          .fixed-other-row > b {
            font-size: 18px !important;
          }

          /* COMPANY */

          .fixed-company-section {
            padding: 75px 0 !important;
          }

          .fixed-company-list {
            margin-top: 40px !important;
          }

          .fixed-company-row {
            min-height: 82px !important;

            grid-template-columns:
              minmax(0, 1fr)
              28px !important;

            gap: 14px !important;
          }

          .fixed-company-row > div > strong {
            font-size: 16px !important;
          }

          .fixed-company-row > b {
            font-size: 18px !important;
          }
        }

        @media (max-width: 420px) {
          .fixed-check-heading h2 {
            font-size: 33px !important;
          }

          .fixed-info-row {
            grid-template-columns:
              95px
              minmax(0, 1fr) !important;
          }

          .fixed-other-row > div {
            grid-template-columns:
              60px
              minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
