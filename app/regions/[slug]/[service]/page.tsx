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

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
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
      },

      {
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
      },

      {
        "@type": "FAQPage",

        mainEntity: serviceData.faqs.map((faq) => ({
          "@type": "Question",
          name: `${region.name} ${faq.q}`,

          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="rs-hero">
        <div className="rs-container">
          <div className="rs-topline">
            <span>JEONGGAM SPACE</span>
            <span>{serviceData.english}</span>
          </div>

          <div className="rs-hero-content">
            <p className="rs-eyebrow">
              {region.name} {serviceData.name}
            </p>

            <h1>
              {region.name}
              <br />
              {serviceData.name}
            </h1>

            <p className="rs-lead">
              정감공간은 {region.name}을 포함한 천안·아산 지역에서{" "}
              {serviceData.name} 상담과 시공을 진행합니다. 현장의 상태와
              필요한 공사 범위를 확인한 뒤 공간의 목적에 맞는 인테리어
              방향을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="rs-section">
        <div className="rs-container">
          <SectionLabel number="01" text="ABOUT SERVICE" />

          <div className="rs-two-column">
            <h2>
              {region.name}
              <br />
              {serviceData.name}
            </h2>

            <div className="rs-copy">
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

      <section className="rs-section rs-gray">
        <div className="rs-container">
          <SectionLabel number="02" text="WORK SCOPE" />

          <div className="rs-list">
            {serviceData.points.map((point, index) => (
              <div className="rs-list-row" key={point}>
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

      <section className="rs-section">
        <div className="rs-container">
          <SectionLabel number="03" text="BEFORE CONSULTATION" />

          <div className="rs-two-column">
            <div>
              <p className="rs-small">
                {region.name} {serviceData.name}
              </p>

              <h2>
                상담 전에
                <br />
                확인하면 좋은 내용
              </h2>
            </div>

            <div className="rs-list">
              {serviceData.checklist.map((item, index) => (
                <div className="rs-list-row" key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="rs-section rs-gray">
        <div className="rs-container">
          <SectionLabel number="04" text="PROCESS" />

          <div className="rs-process">
            {processItems.map((item, index) => (
              <div className="rs-process-row" key={item.title}>
                <div className="rs-process-title">
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

      {/* INFO */}

      <section className="rs-section">
        <div className="rs-container">
          <SectionLabel number="05" text="LOCAL INFORMATION" />

          <div className="rs-info">
            <InfoRow label="AREA" value={region.name} />

            <InfoRow
              label="SERVICE"
              value={serviceData.name}
            />

            <InfoRow
              label="SERVICE AREA"
              value="천안 / 아산 전 지역"
            />

            <div className="rs-info-row">
              <span>LICENSE</span>

              <Link href="/company/license">
                실내건축공사업
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}

      <section className="rs-section rs-gray">
        <div className="rs-container">
          <SectionLabel number="06" text="LOCAL INTERIOR" />

          <div className="rs-two-column">
            <h2>
              {region.name}
              <br />
              {serviceData.shortName}
              <br />
              인테리어 상담
            </h2>

            <div className="rs-copy">
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

      <section className="rs-section">
        <div className="rs-container">
          <SectionLabel number="07" text="FAQ" />

          <div className="rs-faq-title">
            <p>
              {region.name} {serviceData.name}
            </p>

            <h2>
              자주 묻는
              <br />
              질문
            </h2>
          </div>

          <div className="rs-faq">
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

                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICE */}

      <section className="rs-section rs-gray">
        <div className="rs-container">
          <SectionLabel number="08" text="OTHER SERVICE" />

          <div className="rs-links">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/regions/${region.slug}/${item.slug}`}
              >
                <div className="rs-link-text">
                  <span>{region.name}</span>
                  <strong>{item.name}</strong>
                </div>

                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY */}

      <section className="rs-section">
        <div className="rs-container">
          <SectionLabel number="09" text="COMPANY" />

          <div className="rs-links">
            <Link href={`/regions/${region.slug}`}>
              <div className="rs-link-text rs-link-stack">
                <span>AREA</span>
                <strong>
                  {region.name} 인테리어 전체보기
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link href="/company/license">
              <div className="rs-link-text rs-link-stack">
                <span>LICENSE</span>
                <strong>
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link href="/company/youth">
              <div className="rs-link-text rs-link-stack">
                <span>COMPANY</span>
                <strong>청년창업기업 확인</strong>
              </div>

              <b>↗</b>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="rs-contact">
        <div className="rs-container">
          <p>CONTACT</p>

          <h2>
            {region.name} {serviceData.name}
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="rs-contact-actions">
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
        .rs-container {
          width: min(1180px, calc(100% - 80px));
          margin: 0 auto;
        }

        .rs-hero {
          padding: 90px 0 120px;
          background: #fff;
          color: #111;
        }

        .rs-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding-bottom: 28px;
          border-bottom: 1px solid #111;
        }

        .rs-topline span {
          font-size: 11px;
          letter-spacing: 0.16em;
          white-space: nowrap;
        }

        .rs-hero-content {
          margin-top: 100px;
          max-width: 850px;
        }

        .rs-eyebrow {
          margin: 0 0 32px;
          font-size: 17px;
          line-height: 1.6;
        }

        .rs-hero h1 {
          margin: 0;
          font-size: clamp(54px, 7vw, 90px);
          line-height: 1.04;
          letter-spacing: -0.055em;
        }

        .rs-lead {
          margin: 45px 0 0;
          max-width: 780px;
          color: #555;
          font-size: 19px;
          line-height: 1.85;
          word-break: keep-all;
        }

        .rs-section {
          padding: 110px 0;
          background: #fff;
          color: #111;
        }

        .rs-gray {
          background: #f5f5f5;
        }

        .rs-label {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 20px;
          align-items: center;
        }

        .rs-label span,
        .rs-label p {
          margin: 0;
          color: #999;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.16em;
        }

        .rs-two-column {
          margin-top: 60px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .rs-two-column h2 {
          margin: 0;
          font-size: 48px;
          line-height: 1.12;
          letter-spacing: -0.05em;
        }

        .rs-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .rs-copy p + p {
          margin-top: 28px;
        }

        .rs-small {
          margin: 0 0 20px;
          color: #888;
          font-size: 13px;
        }

        .rs-list,
        .rs-process,
        .rs-info,
        .rs-faq,
        .rs-links {
          margin-top: 55px;
          border-top: 1px solid #111;
        }

        .rs-list-row {
          min-height: 76px;
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .rs-list-row span {
          color: #999;
          font-size: 10px;
        }

        .rs-list-row strong {
          font-size: 17px;
          line-height: 1.5;
          font-weight: 600;
          word-break: keep-all;
        }

        .rs-process-row {
          min-height: 110px;
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 50px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .rs-process-title {
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
        }

        .rs-process-title span {
          color: #999;
          font-size: 10px;
        }

        .rs-process-title strong {
          font-size: 19px;
          line-height: 1.4;
        }

        .rs-process-row > p {
          margin: 0;
          color: #555;
          font-size: 15px;
          line-height: 1.8;
          word-break: keep-all;
        }

        .rs-info-row {
          min-height: 76px;
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 30px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .rs-info-row > span {
          color: #999;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .rs-info-row strong,
        .rs-info-row a {
          color: #111;
          font-size: 17px;
          line-height: 1.5;
          font-weight: 600;
          text-decoration: none;
          word-break: keep-all;
        }

        .rs-info-row a {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .rs-faq-title {
          margin-top: 55px;
        }

        .rs-faq-title p {
          margin: 0 0 18px;
          color: #777;
          font-size: 13px;
        }

        .rs-faq-title h2 {
          margin: 0;
          font-size: 46px;
          line-height: 1.1;
          letter-spacing: -0.05em;
        }

        .rs-faq details {
          border-bottom: 1px solid #ccc;
        }

        .rs-faq summary {
          min-height: 88px;
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr) 30px;
          gap: 18px;
          align-items: center;
          list-style: none;
          cursor: pointer;
        }

        .rs-faq summary::-webkit-details-marker {
          display: none;
        }

        .rs-faq summary span {
          color: #999;
          font-size: 10px;
        }

        .rs-faq summary strong {
          font-size: 16px;
          line-height: 1.55;
          word-break: keep-all;
        }

        .rs-faq summary i {
          font-style: normal;
          font-size: 22px;
          text-align: right;
        }

        .rs-faq details[open] summary i {
          transform: rotate(45deg);
        }

        .rs-faq details > p {
          margin: 0;
          padding: 0 45px 28px 73px;
          color: #666;
          font-size: 14px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .rs-links > a {
          min-height: 88px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 36px;
          gap: 25px;
          align-items: center;
          border-bottom: 1px solid #ccc;
          color: #111;
          text-decoration: none;
        }

        .rs-link-text {
          min-width: 0;
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr);
          gap: 20px;
          align-items: center;
        }

        .rs-link-text > span {
          color: #999;
          font-size: 11px;
        }

        .rs-link-text > strong {
          font-size: 18px;
          line-height: 1.45;
          word-break: keep-all;
        }

        .rs-link-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .rs-links b {
          font-size: 20px;
          font-weight: 400;
          text-align: right;
        }

        .rs-contact {
          padding: 110px 0 130px;
          background: #000;
          color: #fff;
        }

        .rs-contact > .rs-container > p {
          margin: 0 0 30px;
          color: #999;
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .rs-contact h2 {
          margin: 0;
          font-size: 48px;
          line-height: 1.15;
          letter-spacing: -0.05em;
        }

        .rs-contact-actions {
          margin-top: 55px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #555;
        }

        .rs-contact-actions > a {
          min-height: 95px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0 25px;
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid #555;
        }

        .rs-contact-actions > a:first-child {
          border-right: 1px solid #555;
        }

        /*
          이 페이지에서 모바일 하단 전화바가
          본문을 덮지 않도록 강제 처리
        */
        @media (max-width: 800px) {
          .rs-container {
            width: calc(100% - 48px);
          }

          .rs-hero {
            padding: 65px 0 80px;
          }

          .rs-topline {
            gap: 12px;
            padding-bottom: 20px;
          }

          .rs-topline span {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .rs-topline span:last-child {
            text-align: right;
          }

          .rs-hero-content {
            margin-top: 65px;
          }

          .rs-eyebrow {
            margin-bottom: 26px;
            font-size: 15px;
          }

          .rs-hero h1 {
            font-size: 43px;
            line-height: 1.08;
          }

          .rs-lead {
            margin-top: 34px;
            font-size: 16px;
            line-height: 1.8;
          }

          .rs-section {
            padding: 78px 0;
          }

          .rs-label {
            grid-template-columns: 40px 1fr;
            gap: 20px;
          }

          .rs-two-column {
            margin-top: 46px;
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .rs-two-column h2 {
            font-size: 36px;
            line-height: 1.14;
          }

          .rs-copy p {
            font-size: 16px;
            line-height: 1.8;
          }

          .rs-copy p + p {
            margin-top: 24px;
          }

          .rs-list,
          .rs-process,
          .rs-info,
          .rs-faq,
          .rs-links {
            margin-top: 40px;
          }

          .rs-list-row {
            min-height: 70px;
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
          }

          .rs-list-row strong {
            font-size: 15px;
          }

          .rs-process-row {
            min-height: 0;
            padding: 26px 0;
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .rs-process-title {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
          }

          .rs-process-title strong {
            font-size: 17px;
          }

          .rs-process-row > p {
            margin-left: 56px;
            font-size: 15px;
            line-height: 1.75;
          }

          .rs-info-row {
            min-height: 72px;
            grid-template-columns: 100px minmax(0, 1fr);
            gap: 16px;
          }

          .rs-info-row > span {
            font-size: 9px;
          }

          .rs-info-row strong,
          .rs-info-row a {
            font-size: 15px;
          }

          .rs-faq-title {
            margin-top: 45px;
          }

          .rs-faq-title h2 {
            font-size: 36px;
          }

          .rs-faq summary {
            min-height: 78px;
            grid-template-columns: 42px minmax(0, 1fr) 20px;
            gap: 12px;
          }

          .rs-faq summary strong {
            font-size: 14px;
          }

          .rs-faq details > p {
            padding: 0 10px 25px 54px;
            font-size: 14px;
          }

          .rs-links > a {
            min-height: 82px;
            grid-template-columns: minmax(0, 1fr) 28px;
            gap: 14px;
          }

          .rs-link-text {
            grid-template-columns: 62px minmax(0, 1fr);
            gap: 14px;
          }

          .rs-link-text > span {
            font-size: 10px;
          }

          .rs-link-text > strong {
            font-size: 15px;
          }

          .rs-link-stack {
            display: flex;
            gap: 7px;
          }

          .rs-contact {
            padding: 80px 0 90px;
          }

          .rs-contact h2 {
            font-size: 36px;
          }

          .rs-contact-actions {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .rs-contact-actions > a {
            min-height: 76px;
            padding: 0;
          }

          .rs-contact-actions > a:first-child {
            border-right: 0;
          }

          .jg-mobile-call {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            width: 100% !important;
            min-height: 72px !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 1 !important;
          }
        }

        @media (max-width: 420px) {
          .rs-container {
            width: calc(100% - 40px);
          }

          .rs-hero h1 {
            font-size: 40px;
          }

          .rs-two-column h2 {
            font-size: 33px;
          }

          .rs-info-row {
            grid-template-columns: 92px minmax(0, 1fr);
          }

          .rs-link-text {
            grid-template-columns: 58px minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  );
}

function SectionLabel({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="rs-label">
      <span>{number}</span>
      <p>{text}</p>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rs-info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
