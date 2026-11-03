import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";
const BRAND = "정감공간";
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
  image: string;

  description: string;
  intro: string;

  points: string[];
  checklist: string[];

  faqs: FAQ[];
};

const SERVICES: ServiceData[] = [
  {
    slug: "old-house",

    name: "구축 인테리어",

    shortName: "구축",

    english: "OLD HOUSE INTERIOR",

    image: "/IMG_2041.jpeg",

    description:
      "오래된 주거공간의 현장 상태를 확인하고 철거·주방·욕실·바닥·도배·전기 등 필요한 공사 범위를 정리해 리모델링을 진행합니다.",

    intro:
      "구축 인테리어는 오래된 마감재뿐 아니라 배관, 전기, 창호, 바닥, 욕실과 주방 상태 등 기존 현장 조건을 먼저 확인하는 과정이 중요합니다.",

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
        q: "상담 전에 어떤 정보를 준비하면 좋나요?",
        a: "현장 주소, 평형, 준공연도, 현재 사진과 원하는 공사 범위를 알려주시면 상담에 도움이 됩니다.",
      },
    ],
  },

  {
    slug: "apartment",

    name: "아파트 인테리어",

    shortName: "아파트",

    english: "APARTMENT INTERIOR",

    image: "/IMG_2042.jpeg",

    description:
      "아파트의 구조와 생활 동선을 고려해 거실·주방·욕실·침실 등 공간별 인테리어와 리모델링을 진행합니다.",

    intro:
      "아파트 인테리어는 디자인뿐 아니라 가족의 생활 동선, 수납, 조명, 주방과 욕실 사용 방식까지 함께 고려하는 것이 중요합니다.",

    points: [
      "거실·주방·침실 공간 구성",
      "주방 및 욕실 리모델링",
      "도배·바닥·필름·도장",
      "조명 및 전기 공사",
      "수납 및 생활 동선 개선",
    ],

    checklist: [
      "아파트 평형과 현재 내부 상태",
      "전체 또는 부분 공사 여부",
      "주방·욕실 교체 여부",
      "도배·바닥·필름 시공 범위",
      "조명·전기 변경 여부",
      "입주 전 또는 거주 중 공사 여부",
    ],

    faqs: [
      {
        q: "아파트 인테리어 비용은 어떻게 결정되나요?",
        a: "평형, 철거 범위, 주방과 욕실 공사 여부, 마감재 종류, 전기와 조명 변경 범위 등에 따라 달라집니다.",
      },

      {
        q: "부분 인테리어도 가능한가요?",
        a: "주방, 욕실, 바닥, 도배, 필름, 조명 등 필요한 부분만 상담할 수 있습니다.",
      },

      {
        q: "상담 전에 무엇을 준비하면 좋나요?",
        a: "현장 주소, 평형, 현재 사진, 원하는 공사 범위와 참고 이미지를 준비하면 상담에 도움이 됩니다.",
      },
    ],
  },

  {
    slug: "commercial",

    name: "상가 인테리어",

    shortName: "상가",

    english: "COMMERCIAL INTERIOR",

    image: "/IMG_2040.jpeg",

    description:
      "매장과 업무공간의 업종 특성, 고객 동선과 운영 방식을 고려한 상업공간 인테리어를 진행합니다.",

    intro:
      "상가 인테리어는 디자인뿐 아니라 고객 동선, 직원 작업 동선, 조명, 전기, 설비와 실제 매장 운영 방식까지 함께 고려해야 합니다.",

    points: [
      "매장 및 상업공간 인테리어",
      "사무실 및 업무공간 시공",
      "고객·직원 동선 구성",
      "조명·전기·마감 공사",
      "업종에 맞는 공간 구성",
    ],

    checklist: [
      "매장 업종과 운영 방식",
      "전체 면적과 현장 상태",
      "고객 및 직원 동선",
      "전기·조명·설비 공사 범위",
      "외부 및 간판 공사 여부",
      "예정된 오픈 일정",
    ],

    faqs: [
      {
        q: "상가 인테리어 비용은 어떻게 정해지나요?",
        a: "면적, 업종, 철거 범위, 전기·조명·설비 공사와 마감재 범위에 따라 달라집니다.",
      },

      {
        q: "기존 상가 철거부터 상담할 수 있나요?",
        a: "기존 시설물과 현장 상태를 확인한 뒤 철거부터 인테리어까지 필요한 범위를 상담할 수 있습니다.",
      },

      {
        q: "상담 전에 무엇을 준비하면 좋나요?",
        a: "현장 주소, 면적, 업종, 현재 사진, 원하는 분위기와 오픈 예정일을 알려주시면 도움이 됩니다.",
      },
    ],
  },

  {
    slug: "school",

    name: "학교 리모델링",

    shortName: "학교",

    english: "EDUCATION SPACE",

    image: "/IMG_2043.jpeg",

    description:
      "학교와 교육시설의 사용 목적, 학생과 교직원의 동선, 안전성과 내구성을 고려한 리모델링을 진행합니다.",

    intro:
      "학교와 교육시설은 많은 사람이 반복적으로 사용하는 공간이기 때문에 안전성, 내구성, 관리 편의성과 실제 사용 동선을 함께 고려하는 것이 중요합니다.",

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

    faqs: [
      {
        q: "학교 리모델링은 어떤 공간을 상담할 수 있나요?",
        a: "교실, 공용공간, 복도, 교육실 등 현장 조건과 사용 목적에 따라 필요한 공사 범위를 상담합니다.",
      },

      {
        q: "방학 기간에 공사를 진행할 수 있나요?",
        a: "공사 범위와 공정에 따라 일정이 달라지므로 공사 가능 기간을 먼저 확인해 상담합니다.",
      },

      {
        q: "상담 전에 무엇을 준비해야 하나요?",
        a: "시설 위치, 대상 공간, 면적, 현재 사진, 필요한 공사 내용과 희망 일정을 준비하면 도움이 됩니다.",
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

  const canonical =
    `${SITE_URL}/regions/${region.slug}/${serviceData.slug}`;

  const title =
    `${region.name} ${serviceData.name} 업체 | 정감공간`;

  const description =
    `${region.name} ${serviceData.name} 상담. 현장 상태와 공사 범위를 확인해 정감공간이 인테리어·리모델링을 상담합니다.`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",

      url: canonical,

      siteName: BRAND,

      locale: "ko_KR",

      title,

      description,

      images: [
        {
          url: serviceData.image,

          alt: `${BRAND} ${serviceData.name}`,
        },
      ],
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

  const canonical =
    `${SITE_URL}/regions/${region.slug}/${serviceData.slug}`;

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
      text: "현장 구조와 기존 마감 상태를 확인합니다.",
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

        image: `${SITE_URL}${serviceData.image}`,

        description: serviceData.description,

        provider: {
          "@type": "GeneralContractor",

          "@id": `${SITE_URL}/#business`,

          name: BRAND,

          url: SITE_URL,

          telephone: PHONE,
        },

        areaServed: {
          "@type": "AdministrativeArea",

          name: region.name,
        },
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

          name: faq.q,

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

      <section className="seo-hero">
        <div className="seo-container">
          <div className="seo-top">
            <span>JEONGGAM SPACE</span>

            <span>{serviceData.english}</span>
          </div>

          <div className="seo-hero-content">
            <p className="seo-location">
              천안 {region.name} 인테리어
            </p>

            <h1>
              {region.name}
              <br />
              {serviceData.name}
            </h1>

            <p className="seo-lead">
              {region.name}에서 {serviceData.name}을 계획하고 있다면
              현장의 상태와 필요한 공사 범위를 먼저 확인하는 것이
              중요합니다. 정감공간은 천안·아산을 중심으로 현장에 맞는
              인테리어와 리모델링을 상담합니다.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE */}

      <section className="seo-image-section">
        <div className="seo-container">
          <figure className="seo-main-image">
            <Image
              src={serviceData.image}
              alt={`${region.name} ${serviceData.name} 정감공간 대표 이미지`}
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 800px) 100vw, 1200px"
            />

            <figcaption>
              <span>{serviceData.english}</span>

              <strong>
                {region.name} {serviceData.name}
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ABOUT */}

      <section className="seo-section">
        <div className="seo-container">
          <SectionTitle
            number="01"
            english="ABOUT SERVICE"
          />

          <div className="seo-columns">
            <div>
              <p className="seo-mini">
                {region.name} 인테리어 업체
              </p>

              <h2>
                현장 상태부터
                <br />
                확인합니다.
              </h2>
            </div>

            <div className="seo-text">
              <p>{serviceData.intro}</p>

              <p>
                정감공간은 {region.name} 현장의 구조와 기존 마감 상태를
                확인한 뒤 실제 필요한 공사 범위를 정리합니다.
              </p>

              <p>
                불필요하게 공사 범위를 늘리기보다 공간의 사용 목적과
                현장 조건을 기준으로 필요한 시공 방향을 상담합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SCOPE */}

      <section className="seo-section seo-gray">
        <div className="seo-container">
          <SectionTitle
            number="02"
            english="WORK SCOPE"
          />

          <div className="seo-list">
            {serviceData.points.map((item, index) => (
              <div
                className="seo-list-row"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECK */}

      <section className="seo-section">
        <div className="seo-container">
          <SectionTitle
            number="03"
            english="BEFORE CONSULTATION"
          />

          <div className="seo-columns">
            <div>
              <p className="seo-mini">
                상담 전 확인사항
              </p>

              <h2>
                미리 알려주시면
                <br />
                상담이 더 빠릅니다.
              </h2>
            </div>

            <div className="seo-list">
              {serviceData.checklist.map((item, index) => (
                <div
                  className="seo-list-row"
                  key={item}
                >
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

      <section className="seo-section seo-gray">
        <div className="seo-container">
          <SectionTitle
            number="04"
            english="PROCESS"
          />

          <div className="seo-process">
            {processItems.map((item, index) => (
              <div
                className="seo-process-row"
                key={item.title}
              >
                <div>
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

      {/* AREA */}

      <section className="seo-section">
        <div className="seo-container">
          <SectionTitle
            number="05"
            english="SERVICE INFORMATION"
          />

          <div className="seo-info">
            <Info
              label="지역"
              value={region.name}
            />

            <Info
              label="서비스"
              value={serviceData.name}
            />

            <Info
              label="시공지역"
              value="천안 / 아산 전 지역"
            />

            <div className="seo-info-row">
              <span>면허</span>

              <Link href="/company/license">
                실내건축공사업 면허 보유
              </Link>
            </div>

            <div className="seo-info-row">
              <span>상담</span>

              <a href={TEL}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTENT */}

      <section className="seo-section seo-black">
        <div className="seo-container">
          <SectionTitle
            number="06"
            english="LOCAL INTERIOR"
          />

          <div className="seo-columns">
            <h2>
              {region.name}
              <br />
              인테리어 상담
            </h2>

            <div className="seo-text">
              <p>
                {region.name}에서 {serviceData.name}을 알아보고 있다면
                가격만 비교하기보다 현재 공간의 상태와 필요한 공사 범위를
                먼저 확인하는 것이 좋습니다.
              </p>

              <p>
                정감공간은 천안과 아산을 중심으로 주거공간, 상업공간,
                교육공간의 인테리어와 리모델링을 진행합니다.
              </p>

              <p>
                현장 주소와 공간 종류, 면적, 현재 사진과 원하는 공사
                내용을 알려주시면 상담에 도움이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="seo-section">
        <div className="seo-container">
          <SectionTitle
            number="07"
            english="FAQ"
          />

          <div className="seo-faq-title">
            <p>
              {region.name} {serviceData.name}
            </p>

            <h2>
              자주 묻는 질문
            </h2>
          </div>

          <div className="seo-faq">
            {serviceData.faqs.map((faq, index) => (
              <details key={faq.q}>
                <summary>
                  <span>
                    Q{String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.q}</strong>

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

      <section className="seo-section seo-gray">
        <div className="seo-container">
          <SectionTitle
            number="08"
            english="OTHER SERVICE"
          />

          <div className="seo-links">
            {otherServices.map((item) => (
              <Link
                href={`/regions/${region.slug}/${item.slug}`}
                key={item.slug}
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

      {/* TRUST */}

      <section className="seo-section">
        <div className="seo-container">
          <SectionTitle
            number="09"
            english="JEONGGAM SPACE"
          />

          <div className="seo-links">
            <Link href={`/regions/${region.slug}`}>
              <div>
                <span>AREA</span>

                <strong>
                  {region.name} 인테리어 전체보기
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link href="/company/license">
              <div>
                <span>LICENSE</span>

                <strong>
                  실내건축공사업 면허 확인
                </strong>
              </div>

              <b>↗</b>
            </Link>

            <Link href="/company/youth">
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

      <section className="seo-contact">
        <div className="seo-container">
          <p>CONTACT</p>

          <h2>
            {region.name} 인테리어
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="seo-contact-links">
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
        .seo-container {
          width: min(1180px, calc(100% - 80px));
          margin: 0 auto;
        }

        .seo-hero {
          padding: 80px 0 110px;
          background: #fff;
          color: #111;
        }

        .seo-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding-bottom: 28px;
          border-bottom: 1px solid #111;
        }

        .seo-top span {
          font-size: 11px;
          letter-spacing: 0.16em;
          white-space: nowrap;
        }

        .seo-hero-content {
          margin-top: 95px;
          max-width: 860px;
        }

        .seo-location {
          margin: 0 0 30px;
          font-size: 17px;
          line-height: 1.5;
        }

        .seo-hero h1 {
          margin: 0;
          font-size: clamp(56px, 7vw, 92px);
          line-height: 1.04;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .seo-lead {
          max-width: 800px;
          margin: 45px 0 0;
          color: #555;
          font-size: 18px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .seo-image-section {
          padding: 0 0 110px;
          background: #fff;
        }

        .seo-main-image {
          margin: 0;
        }

        .seo-main-image img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 720px;
          object-fit: cover;
        }

        .seo-main-image figcaption {
          min-height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          border-bottom: 1px solid #111;
        }

        .seo-main-image figcaption span {
          color: #888;
          font-size: 10px;
          letter-spacing: 0.14em;
        }

        .seo-main-image figcaption strong {
          font-size: 15px;
          font-weight: 600;
        }

        .seo-section {
          padding: 110px 0;
          background: #fff;
          color: #111;
        }

        .seo-gray {
          background: #f5f5f5;
        }

        .seo-black {
          background: #000;
          color: #fff;
        }

        .seo-section-title {
          display: grid;
          grid-template-columns: 45px minmax(0, 1fr);
          gap: 20px;
          align-items: center;
        }

        .seo-section-title span,
        .seo-section-title p {
          margin: 0;
          color: #999;
          font-size: 10px;
          line-height: 1;
          letter-spacing: 0.15em;
        }

        .seo-columns {
          margin-top: 58px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
        }

        .seo-columns h2 {
          margin: 0;
          font-size: 46px;
          line-height: 1.14;
          letter-spacing: -0.05em;
        }

        .seo-mini {
          margin: 0 0 20px;
          color: #888;
          font-size: 13px;
        }

        .seo-text p {
          margin: 0;
          font-size: 17px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .seo-text p + p {
          margin-top: 28px;
        }

        .seo-list,
        .seo-process,
        .seo-info,
        .seo-faq,
        .seo-links {
          margin-top: 52px;
          border-top: 1px solid currentColor;
        }

        .seo-list-row {
          min-height: 76px;
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .seo-list-row span {
          color: #999;
          font-size: 10px;
        }

        .seo-list-row strong {
          font-size: 17px;
          line-height: 1.5;
          font-weight: 600;
        }

        .seo-process-row {
          min-height: 110px;
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 50px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .seo-process-row > div {
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
        }

        .seo-process-row span {
          color: #999;
          font-size: 10px;
        }

        .seo-process-row strong {
          font-size: 18px;
        }

        .seo-process-row p {
          margin: 0;
          color: #555;
          font-size: 15px;
          line-height: 1.8;
          word-break: keep-all;
        }

        .seo-info-row {
          min-height: 76px;
          display: grid;
          grid-template-columns: 160px minmax(0, 1fr);
          gap: 30px;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        .seo-info-row span {
          color: #999;
          font-size: 11px;
        }

        .seo-info-row strong,
        .seo-info-row a {
          color: inherit;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
          text-decoration: none;
        }

        .seo-info-row a {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .seo-faq-title {
          margin-top: 55px;
        }

        .seo-faq-title p {
          margin: 0 0 16px;
          color: #777;
          font-size: 13px;
        }

        .seo-faq-title h2 {
          margin: 0;
          font-size: 44px;
          letter-spacing: -0.05em;
        }

        .seo-faq details {
          border-bottom: 1px solid #ccc;
        }

        .seo-faq summary {
          min-height: 86px;
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr) 25px;
          gap: 18px;
          align-items: center;
          list-style: none;
          cursor: pointer;
        }

        .seo-faq summary::-webkit-details-marker {
          display: none;
        }

        .seo-faq summary span {
          color: #999;
          font-size: 10px;
        }

        .seo-faq summary strong {
          font-size: 16px;
          line-height: 1.5;
        }

        .seo-faq summary i {
          font-style: normal;
          font-size: 20px;
        }

        .seo-faq details[open] summary i {
          transform: rotate(45deg);
        }

        .seo-faq details > div {
          padding: 0 40px 28px 73px;
        }

        .seo-faq details p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.9;
        }

        .seo-links > a {
          min-height: 86px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 30px;
          gap: 20px;
          align-items: center;
          border-bottom: 1px solid #ccc;
          color: inherit;
          text-decoration: none;
        }

        .seo-links > a > div {
          display: grid;
          grid-template-columns: 85px minmax(0, 1fr);
          gap: 20px;
          align-items: center;
        }

        .seo-links span {
          color: #999;
          font-size: 10px;
        }

        .seo-links strong {
          font-size: 17px;
          line-height: 1.5;
        }

        .seo-links b {
          text-align: right;
          font-size: 18px;
          font-weight: 400;
        }

        .seo-contact {
          padding: 105px 0 130px;
          background: #000;
          color: #fff;
        }

        .seo-contact > .seo-container > p {
          margin: 0 0 25px;
          color: #888;
          font-size: 10px;
          letter-spacing: 0.15em;
        }

        .seo-contact h2 {
          margin: 0;
          font-size: 46px;
          line-height: 1.15;
        }

        .seo-contact-links {
          margin-top: 55px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #555;
        }

        .seo-contact-links a {
          min-height: 90px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid #555;
        }

        .seo-contact-links a:first-child {
          border-right: 1px solid #555;
        }

        @media (max-width: 800px) {
          .seo-container {
            width: calc(100% - 48px);
          }

          .seo-hero {
            padding: 65px 0 80px;
          }

          .seo-top {
            padding-bottom: 20px;
            gap: 12px;
          }

          .seo-top span {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .seo-top span:last-child {
            text-align: right;
          }

          .seo-hero-content {
            margin-top: 65px;
          }

          .seo-location {
            margin-bottom: 25px;
            font-size: 15px;
          }

          .seo-hero h1 {
            font-size: 43px;
            line-height: 1.08;
          }

          .seo-lead {
            margin-top: 32px;
            font-size: 16px;
            line-height: 1.8;
          }

          .seo-image-section {
            padding-bottom: 75px;
          }

          .seo-main-image img {
            aspect-ratio: 4 / 3;
            object-fit: cover;
          }

          .seo-main-image figcaption {
            min-height: 62px;
            gap: 15px;
          }

          .seo-main-image figcaption span {
            font-size: 8px;
          }

          .seo-main-image figcaption strong {
            font-size: 13px;
            text-align: right;
          }

          .seo-section {
            padding: 76px 0;
          }

          .seo-columns {
            margin-top: 44px;
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .seo-columns h2 {
            font-size: 34px;
          }

          .seo-text p {
            font-size: 16px;
            line-height: 1.8;
          }

          .seo-list,
          .seo-process,
          .seo-info,
          .seo-faq,
          .seo-links {
            margin-top: 38px;
          }

          .seo-list-row {
            min-height: 68px;
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .seo-list-row strong {
            font-size: 15px;
          }

          .seo-process-row {
            min-height: 0;
            padding: 25px 0;
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .seo-process-row > div {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .seo-process-row strong {
            font-size: 16px;
          }

          .seo-process-row p {
            padding-left: 54px;
            font-size: 15px;
          }

          .seo-info-row {
            min-height: 68px;
            grid-template-columns: 95px minmax(0, 1fr);
            gap: 15px;
          }

          .seo-info-row span {
            font-size: 9px;
          }

          .seo-info-row strong,
          .seo-info-row a {
            font-size: 14px;
          }

          .seo-faq-title {
            margin-top: 42px;
          }

          .seo-faq-title h2 {
            font-size: 34px;
          }

          .seo-faq summary {
            min-height: 76px;
            grid-template-columns: 40px minmax(0, 1fr) 20px;
            gap: 12px;
          }

          .seo-faq summary strong {
            font-size: 14px;
          }

          .seo-faq details > div {
            padding: 0 10px 24px 52px;
          }

          .seo-links > a {
            min-height: 78px;
            grid-template-columns: minmax(0, 1fr) 25px;
            gap: 12px;
          }

          .seo-links > a > div {
            grid-template-columns: 60px minmax(0, 1fr);
            gap: 12px;
          }

          .seo-links strong {
            font-size: 15px;
          }

          .seo-contact {
            padding: 75px 0 90px;
          }

          .seo-contact h2 {
            font-size: 34px;
          }

          .seo-contact-links {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .seo-contact-links a {
            min-height: 74px;
            padding: 0;
          }

          .seo-contact-links a:first-child {
            border-right: 0;
          }

          .jg-mobile-call {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            width: 100% !important;
            min-height: 72px !important;
            z-index: 1 !important;
          }
        }

        @media (max-width: 420px) {
          .seo-container {
            width: calc(100% - 40px);
          }

          .seo-hero h1 {
            font-size: 40px;
          }

          .seo-columns h2 {
            font-size: 31px;
          }

          .seo-info-row {
            grid-template-columns: 88px minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  );
}

function SectionTitle({
  number,
  english,
}: {
  number: string;
  english: string;
}) {
  return (
    <div className="seo-section-title">
      <span>{number}</span>
      <p>{english}</p>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="seo-info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
