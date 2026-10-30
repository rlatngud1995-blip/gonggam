import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/lib/regions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

const PHONE = "041-415-0410";

type FAQ = {
  question: string;
  answer: string;
};

type ServiceData = {
  slug: string;
  title: string;
  seoTitle: string;
  english: string;
  image: string;
  description: string;
  intro: string;
  searchKeywords: string[];
  scope: string[];
  process: {
    title: string;
    description: string;
  }[];
  faq: FAQ[];
};

const services: Record<string, ServiceData> = {
  "old-house": {
    slug: "old-house",

    title: "구축 인테리어",

    seoTitle:
      "천안 구축 인테리어 업체 | 구축 아파트 리모델링 | 정감공간",

    english: "OLD HOUSE RENOVATION",

    image: "/IMG_2041.jpeg",

    description:
      "천안 구축 인테리어 전문 정감공간. 오래된 아파트와 주거공간의 구조, 동선, 마감 상태를 확인하고 필요한 리모델링 방향을 제안합니다.",

    intro:
      "구축 인테리어는 단순히 오래된 마감재를 새것으로 바꾸는 공사가 아닙니다. 기존 공간의 구조와 설비 상태, 생활 동선을 먼저 확인하고 실제 생활에 필요한 부분을 중심으로 공간을 다시 계획하는 것이 중요합니다. 정감공간은 천안 구축 아파트와 오래된 주거공간의 특성을 확인한 뒤 필요한 공사 범위와 시공 방향을 안내합니다.",

    searchKeywords: [
      "천안 구축 인테리어",
      "천안 구축 아파트 인테리어",
      "천안 구축 리모델링",
      "천안 오래된 아파트 인테리어",
      "천안 아파트 리모델링",
    ],

    scope: [
      "기존 공간 철거 및 마감 정리",
      "주방 구조 및 수납 동선 개선",
      "거실·방 벽체와 바닥 마감",
      "욕실 리모델링 및 마감 개선",
      "전기·조명 위치 및 사용성 개선",
      "문·몰딩·도어 등 목공 마감",
      "현장 상태에 따른 공간 재구성",
      "공사 완료 후 마감 상태 확인",
    ],

    process: [
      {
        title: "상담",
        description:
          "공간 위치, 면적, 현재 상태와 원하는 공사 방향을 확인합니다.",
      },
      {
        title: "현장 확인",
        description:
          "기존 구조와 마감, 설비 상태, 생활 동선을 확인합니다.",
      },
      {
        title: "공사 범위 제안",
        description:
          "필요한 철거와 시공 범위를 정리하고 견적 방향을 안내합니다.",
      },
      {
        title: "디자인·자재 협의",
        description:
          "공간의 분위기와 사용 목적에 맞춰 마감과 자재를 협의합니다.",
      },
      {
        title: "시공",
        description:
          "협의된 공정에 따라 철거부터 마감까지 순차적으로 진행합니다.",
      },
      {
        title: "마감 확인",
        description:
          "공사 완료 후 공간별 마감 상태와 사용성을 확인합니다.",
      },
    ],

    faq: [
      {
        question: "천안 구축 인테리어 상담은 어떻게 진행되나요?",
        answer:
          "공간 위치와 면적, 현재 상태, 원하는 공사 범위를 먼저 확인한 뒤 현장 상황에 맞춰 상담을 진행합니다.",
      },
      {
        question: "구축 아파트는 전체 철거를 해야 하나요?",
        answer:
          "반드시 전체 철거가 필요한 것은 아닙니다. 기존 마감과 구조 상태를 확인한 뒤 유지 가능한 부분과 교체가 필요한 부분을 나누어 안내합니다.",
      },
      {
        question: "구축 인테리어 공사 기간은 얼마나 걸리나요?",
        answer:
          "공사 범위와 공간 크기, 철거 여부, 자재 일정에 따라 달라집니다. 상담과 현장 확인 후 예상 공정 기간을 안내합니다.",
      },
      {
        question: "부분 리모델링도 가능한가요?",
        answer:
          "현장 상태와 공사 범위에 따라 주방, 욕실, 거실 등 필요한 공간 중심의 부분 리모델링 상담도 가능합니다.",
      },
    ],
  },

  commercial: {
    slug: "commercial",

    title: "상가 인테리어",

    seoTitle:
      "천안 상가 인테리어 업체 | 매장·상업공간 인테리어 | 정감공간",

    english: "COMMERCIAL INTERIOR",

    image: "/IMG_2040.jpeg",

    description:
      "천안 상가 인테리어 전문 정감공간. 매장과 상업공간의 업종, 고객 동선, 직원 사용성을 고려한 공간을 제안합니다.",

    intro:
      "상가 인테리어는 보기 좋은 디자인뿐 아니라 실제 영업과 운영에 필요한 동선을 함께 고려해야 합니다. 고객이 공간을 이용하는 흐름, 직원의 업무 동선, 집기 배치와 조명 등 업종에 필요한 요소를 확인한 뒤 공간을 계획합니다.",

    searchKeywords: [
      "천안 상가 인테리어",
      "천안 매장 인테리어",
      "천안 상업공간 인테리어",
      "천안 가게 인테리어",
      "천안 상가 리모델링",
    ],

    scope: [
      "상가 내부 철거 및 공간 정리",
      "업종에 맞는 공간 레이아웃",
      "고객 동선과 직원 동선 구성",
      "천장·벽·바닥 마감",
      "전기·조명 및 콘센트 위치 계획",
      "카운터 및 수납 공간 구성",
      "유리 파티션 및 공간 분리",
      "오픈 일정에 맞춘 공정 관리",
    ],

    process: [
      {
        title: "업종 상담",
        description:
          "업종과 운영 방식, 필요한 공간 구성과 사용 목적을 확인합니다.",
      },
      {
        title: "현장 확인",
        description:
          "상가 면적과 기존 구조, 설비와 출입 동선을 확인합니다.",
      },
      {
        title: "레이아웃 계획",
        description:
          "고객과 직원의 동선을 고려해 공간 배치를 계획합니다.",
      },
      {
        title: "마감 협의",
        description:
          "브랜드 분위기와 예산을 고려해 마감과 자재를 협의합니다.",
      },
      {
        title: "현장 시공",
        description:
          "영업 일정과 오픈 계획을 고려해 공정을 관리합니다.",
      },
      {
        title: "완료 확인",
        description:
          "집기 배치와 사용성을 포함해 최종 마감 상태를 확인합니다.",
      },
    ],

    faq: [
      {
        question: "천안 상가 인테리어는 어떤 업종이 가능한가요?",
        answer:
          "공간의 구조와 업종 특성을 확인한 뒤 매장, 사무공간, 서비스업 등 다양한 상업공간 상담을 진행합니다.",
      },
      {
        question: "기존 상가 철거도 같이 진행하나요?",
        answer:
          "현장 상태에 따라 기존 마감과 시설 철거가 필요한 경우 철거 범위를 포함해 상담할 수 있습니다.",
      },
      {
        question: "오픈 일정에 맞춰 공사할 수 있나요?",
        answer:
          "공사 범위와 자재 일정 등을 확인한 뒤 오픈 일정을 고려해 가능한 공정을 안내합니다.",
      },
      {
        question: "상가 부분 리모델링도 가능한가요?",
        answer:
          "전체 공사뿐 아니라 공간 상태와 작업 범위에 따라 일부 공간이나 마감 중심의 상담도 가능합니다.",
      },
    ],
  },

  apartment: {
    slug: "apartment",

    title: "아파트 인테리어",

    seoTitle:
      "천안 아파트 인테리어 업체 | 아파트 리모델링 | 정감공간",

    english: "APARTMENT INTERIOR",

    image: "/IMG_2042.jpeg",

    description:
      "천안 아파트 인테리어 전문 정감공간. 가족 구성과 생활 동선, 수납과 공간 활용을 고려한 아파트 리모델링을 제안합니다.",

    intro:
      "아파트 인테리어는 가족 구성과 생활 습관에 따라 필요한 공간 구성이 달라집니다. 주방과 거실의 연결, 수납공간, 조명, 마감재 등 실제 생활에 영향을 주는 요소를 함께 고려해 공간을 계획합니다.",

    searchKeywords: [
      "천안 아파트 인테리어",
      "천안 아파트 리모델링",
      "천안 인테리어 업체",
      "천안 아파트 인테리어 업체",
      "천안 주거 인테리어",
    ],

    scope: [
      "현관 및 수납 공간 개선",
      "거실 벽·바닥·조명 인테리어",
      "주방 구조 및 수납 개선",
      "방과 드레스룸 공간 구성",
      "욕실 리모델링",
      "문·몰딩·도어 마감",
      "전기·조명 위치 개선",
      "생활 동선을 고려한 공간 계획",
    ],

    process: [
      {
        title: "생활방식 상담",
        description:
          "가족 구성과 원하는 공간 분위기, 불편한 부분을 확인합니다.",
      },
      {
        title: "현장 확인",
        description:
          "아파트 구조와 기존 마감, 수납과 생활 동선을 확인합니다.",
      },
      {
        title: "공간 계획",
        description:
          "주방·거실·방 등 공간별 시공 방향을 정리합니다.",
      },
      {
        title: "마감 협의",
        description:
          "바닥, 벽, 조명 등 공간 분위기를 결정하는 요소를 협의합니다.",
      },
      {
        title: "시공",
        description:
          "협의된 공사 범위에 따라 순차적으로 시공합니다.",
      },
      {
        title: "최종 확인",
        description:
          "생활에 불편한 부분은 없는지 최종적으로 마감을 확인합니다.",
      },
    ],

    faq: [
      {
        question: "천안 아파트 인테리어 상담은 어떻게 시작하나요?",
        answer:
          "아파트 위치, 평형, 공사 희망 범위와 원하는 스타일을 알려주시면 기본 상담을 진행할 수 있습니다.",
      },
      {
        question: "입주 전 전체 인테리어 상담도 가능한가요?",
        answer:
          "현장 상황과 일정에 따라 입주 전 전체 인테리어와 리모델링 상담을 진행할 수 있습니다.",
      },
      {
        question: "주방이나 욕실만 부분 공사가 가능한가요?",
        answer:
          "현장 상태와 작업 범위를 확인한 뒤 필요한 공간 중심의 부분 리모델링 상담도 가능합니다.",
      },
      {
        question: "인테리어 공사 전에 무엇을 준비하면 좋나요?",
        answer:
          "공사 희망 공간, 불편한 점, 원하는 분위기와 입주 또는 사용 예정 일정을 정리해두면 상담에 도움이 됩니다.",
      },
    ],
  },

  school: {
    slug: "school",

    title: "학교 리모델링",

    seoTitle:
      "천안 학교 리모델링 업체 | 교육시설·교실 인테리어 | 정감공간",

    english: "SCHOOL REMODELING",

    image: "/IMG_2043.jpeg",

    description:
      "천안 학교 리모델링 전문 정감공간. 교실, 교육시설, 업무공간 등 사용 목적과 안전성을 고려한 공간 개선을 진행합니다.",

    intro:
      "학교와 교육시설은 많은 사람이 사용하는 공간인 만큼 디자인뿐 아니라 안전성과 내구성, 동선과 관리 편의성을 함께 고려해야 합니다. 공간의 사용 목적과 이용 인원을 확인한 뒤 필요한 리모델링 방향을 제안합니다.",

    searchKeywords: [
      "천안 학교 리모델링",
      "천안 학교 인테리어",
      "천안 교육시설 인테리어",
      "천안 교실 리모델링",
      "천안 교육공간 리모델링",
    ],

    scope: [
      "교실 내부 리모델링",
      "교육시설 벽·바닥 마감",
      "교사 및 업무공간 개선",
      "공용공간 및 복도 개선",
      "조명 및 전기 환경 개선",
      "수납과 가구 배치 계획",
      "안전성과 내구성을 고려한 마감",
      "사용 일정에 맞춘 공정 계획",
    ],

    process: [
      {
        title: "시설 상담",
        description:
          "공간의 사용 목적과 이용 인원, 필요한 개선사항을 확인합니다.",
      },
      {
        title: "현장 확인",
        description:
          "기존 시설의 구조와 마감 상태, 동선을 확인합니다.",
      },
      {
        title: "개선 범위 계획",
        description:
          "사용 목적에 필요한 시공 범위와 공간 계획을 정리합니다.",
      },
      {
        title: "자재 협의",
        description:
          "안전성, 내구성, 관리 편의성을 고려해 마감을 협의합니다.",
      },
      {
        title: "공사 진행",
        description:
          "시설 운영 일정과 사용 계획을 고려해 공정을 진행합니다.",
      },
      {
        title: "완료 확인",
        description:
          "사용성과 마감 상태를 확인하고 공사를 마무리합니다.",
      },
    ],

    faq: [
      {
        question: "천안 학교 리모델링은 어떤 공간을 상담할 수 있나요?",
        answer:
          "교실, 교육시설, 공용공간, 업무공간 등 시설의 목적과 현장 상태에 따라 상담을 진행합니다.",
      },
      {
        question: "방학 기간 공사 일정도 상담 가능한가요?",
        answer:
          "공사 범위와 일정에 따라 시설 사용이 적은 기간을 고려한 공정 상담이 가능합니다.",
      },
      {
        question: "교육시설은 어떤 부분을 중요하게 보나요?",
        answer:
          "이용자의 안전성, 마감 내구성, 관리 편의성, 공간 동선을 함께 고려합니다.",
      },
      {
        question: "부분 리모델링도 가능한가요?",
        answer:
          "현장 상태에 따라 교실, 공용공간 등 필요한 공간 중심으로 공사 범위를 상담할 수 있습니다.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,

    description: service.description,

    keywords: service.searchKeywords,

    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },

    openGraph: {
      type: "website",

      title: service.seoTitle,

      description: service.description,

      url: `${SITE_URL}/services/${service.slug}`,

      images: [
        {
          url: service.image,
          alt: `천안 ${service.title} 정감공간 시공 사례`,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(services).filter(
    (item) => item.slug !== service.slug
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: `천안 ${service.title}`,

    serviceType: service.title,

    description: service.description,

    url: `${SITE_URL}/services/${service.slug}`,

    image: `${SITE_URL}${service.image}`,

    provider: {
      "@type": "GeneralContractor",

      name: "정감공간",

      telephone: PHONE,

      url: SITE_URL,
    },

    areaServed: {
      "@type": "City",
      name: "천안시",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: service.faq.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
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
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="service-detail-hero">
        <div className="service-detail-container">
          <div className="service-detail-kicker">
            <span>JEONGGAM SPACE</span>

            <span>{service.english}</span>
          </div>

          <div className="service-detail-title">
            <p>천안 인테리어 · 리모델링</p>

            <h1>
              천안
              <br />
              {service.title}
            </h1>

            <p className="service-detail-description">
              {service.description}
            </p>

            <div className="service-detail-actions">
              <a
                href="tel:0414150410"
                className="service-detail-button service-detail-button-black"
              >
                <span>전화 상담</span>

                <strong>
                  041-415-0410
                </strong>
              </a>

              <Link
                href="/contact"
                className="service-detail-button service-detail-button-white"
              >
                <span>견적 문의</span>

                <strong>↗</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 대표 사진 */}

      <section className="service-detail-image-section">
        <div className="service-detail-container">
          <div className="service-detail-main-image">
            <Image
              src={service.image}
              alt={`천안 ${service.title} 전문업체 정감공간 시공 사례`}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* 서비스 소개 */}

      <section className="service-detail-intro">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>01</span>

            <p>SERVICE INTRODUCTION</p>
          </div>

          <div className="service-detail-intro-grid">
            <div>
              <p className="service-detail-small">
                CHEONAN · JEONGGAM SPACE
              </p>

              <h2>
                천안
                <br />
                {service.title}
              </h2>
            </div>

            <p>
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 시공 범위 */}

      <section className="service-scope-section">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>02</span>

            <p>WORK SCOPE</p>
          </div>

          <div className="service-scope-layout">
            <div>
              <h2>
                {service.title}
                <br />
                시공 범위
              </h2>

              <p>
                현장 상태와 공사 범위에 따라
                실제 시공 내용은 달라질 수 있습니다.
              </p>
            </div>

            <div className="service-scope-list">
              {service.scope.map((item, index) => (
                <div key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {item}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 진행 과정 */}

      <section className="service-process-section">
        <div className="service-detail-container">
          <div className="service-detail-label service-detail-label-light">
            <span>03</span>

            <p>PROCESS</p>
          </div>

          <div className="service-process-heading">
            <h2>
              상담부터 시공까지
              <br />
              꼼꼼하게 진행합니다.
            </h2>
          </div>

          <div className="service-process-grid">
            {service.process.map((item, index) => (
              <div
                className="service-process-card"
                key={item.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 천안 지역 */}

      <section className="service-region-section">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>04</span>

            <p>CHEONAN AREA</p>
          </div>

          <div className="service-region-heading">
            <div>
              <h2>
                천안 전 지역
                <br />
                상담 가능합니다.
              </h2>

              <p>
                지역을 선택하면 해당 지역의
                {service.title} 안내를 확인할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="service-region-links">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/regions/${region.slug}/${service.slug}`}
              >
                <span>
                  {region.name} {service.title}
                </span>

                <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="service-faq-section">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>05</span>

            <p>FAQ</p>
          </div>

          <div className="service-faq-heading">
            <h2>
              자주 묻는 질문
            </h2>

            <p>
              {service.title} 상담 전에
              많이 궁금해하시는 내용을 정리했습니다.
            </p>
          </div>

          <div className="service-faq-list">
            {service.faq.map((item, index) => (
              <details
                key={item.question}
                className="service-faq-item"
              >
                <summary>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {item.question}
                  </strong>

                  <i>+</i>
                </summary>

                <p>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 다른 서비스 */}

      <section className="service-detail-other">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>06</span>

            <p>OTHER SERVICES</p>
          </div>

          <h2>
            다른 시공 분야
          </h2>

          <div className="service-detail-other-grid">
            {otherServices.map((item) => (
              <Link
                href={`/services/${item.slug}`}
                key={item.slug}
                className="service-detail-other-card"
              >
                <div className="service-detail-other-image">
                  <Image
                    src={item.image}
                    alt={`천안 ${item.title} 정감공간`}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                </div>

                <div className="service-detail-other-title">
                  <div>
                    <span>
                      {item.english}
                    </span>

                    <strong>
                      {item.title}
                    </strong>
                  </div>

                  <span>
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="service-detail-contact">
        <div className="service-detail-container">
          <p>
            CONTACT
          </p>

          <h2>
            천안 {service.title}
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="service-detail-contact-actions">
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
    </>
  );
}
