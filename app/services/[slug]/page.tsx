
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jeonggamspace.vercel.app";

const PHONE = "041-415-0410";

const services = {
  "old-house": {
    title: "구축 인테리어",
    english: "RENOVATION",
    image: "/old-house.jpg",
    headline: "오래된 공간에 새로운 가치를 더하다.",
    description:
      "천안 구축 인테리어 및 노후 주거공간 리모델링. 정감공간은 기존 공간의 상태와 생활 동선을 고려한 인테리어를 제안합니다.",
    intro:
      "구축 주거공간은 단순한 마감재 교체를 넘어 기존 구조와 설비, 생활 동선을 함께 살펴보는 것이 중요합니다. 정감공간은 공간의 현재 상태와 고객의 생활방식을 고려하여 적절한 리모델링 방향을 제안합니다.",
    features: [
      ["기존 공간 상태 검토", "노후 마감재와 설비 상태를 살펴보고 필요한 공사 범위를 검토합니다."],
      ["생활 동선 개선", "가족 구성과 생활 습관에 맞는 공간 활용과 수납을 고려합니다."],
      ["마감 및 디자인", "디자인과 유지관리 편의성을 함께 고려해 마감 방향을 제안합니다."],
    ],
    keywords: [
      "천안 구축 인테리어",
      "천안 구축 아파트 리모델링",
      "천안 노후주택 리모델링",
    ],
  },
  commercial: {
    title: "상가 인테리어",
    english: "COMMERCIAL",
    image: "/commercial.jpg",
    headline: "브랜드의 가치를 공간에 담다.",
    description:
      "천안 상가 인테리어 정감공간. 매장, 사무실, 상업공간의 운영 동선과 브랜드 이미지를 고려한 인테리어를 제안합니다.",
    intro:
      "상업공간은 고객 경험과 운영 효율을 함께 고려해야 합니다. 정감공간은 업종의 특성과 공간의 목적을 이해하고, 브랜드의 분위기와 실용성이 조화를 이루는 인테리어를 제안합니다.",
    features: [
      ["업종별 공간 구성", "매장과 사무실 등 업종에 적합한 공간 구성을 검토합니다."],
      ["고객 및 운영 동선", "방문 고객의 이동과 직원의 업무 편의성을 고려합니다."],
      ["브랜드 이미지", "브랜드의 성격과 공간의 디자인 방향을 조화롭게 구성합니다."],
    ],
    keywords: [
      "천안 상가 인테리어",
      "천안 매장 인테리어",
      "천안 사무실 인테리어",
    ],
  },
  apartment: {
    title: "아파트 인테리어",
    english: "RESIDENTIAL",
    image: "/apartment.jpg",
    headline: "일상의 편안함을 디자인하다.",
    description:
      "천안 아파트 인테리어 및 리모델링. 정감공간은 가족의 생활방식과 공간 특성을 고려한 주거 인테리어를 제안합니다.",
    intro:
      "아파트 인테리어는 가족의 생활방식과 취향을 반영하는 과정입니다. 정감공간은 거실, 주방, 침실 등 공간별 사용 목적을 검토하고 실용성과 디자인의 균형을 고민합니다.",
    features: [
      ["전체 리모델링", "공간 전체의 디자인과 마감, 생활 동선을 종합적으로 검토합니다."],
      ["부분 인테리어", "주방과 거실, 침실 등 필요한 공간의 개선 방향을 상담합니다."],
      ["맞춤형 공간 계획", "가족 구성과 생활 습관에 맞는 공간 활용을 제안합니다."],
    ],
    keywords: [
      "천안 아파트 인테리어",
      "천안 아파트 리모델링",
      "천안 인테리어 잘하는곳",
    ],
  },
  school: {
    title: "학교 리모델링",
    english: "EDUCATIONAL",
    image: "/school.jpg",
    headline: "배움의 공간을 새롭게 만들다.",
    description:
      "천안 학교 리모델링 및 교육시설 인테리어. 정감공간은 교육공간의 안전성과 기능성, 유지관리 편의성을 고려합니다.",
    intro:
      "학교와 교육시설은 다양한 사용자가 장시간 이용하는 공간입니다. 정감공간은 교실과 공용공간의 목적을 이해하고 안전성, 기능성, 유지관리 편의성을 고려한 공간 개선을 제안합니다.",
    features: [
      ["교육공간 개선", "교실과 학습공간의 기능 및 사용 환경을 고려합니다."],
      ["안전성과 편의성", "시설의 이용 특성과 적용되는 안전 기준을 검토합니다."],
      ["유지관리 고려", "사용 빈도와 관리 편의성을 고려한 공간 구성을 제안합니다."],
    ],
    keywords: [
      "천안 학교 리모델링",
      "천안 학교 인테리어",
      "천안 교육시설 리모델링",
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in services)) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false },
    };
  }

  const service = services[slug as ServiceSlug];

  return {
    title: `천안 ${service.title}`,
    description: service.description,
    keywords: [...service.keywords],
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `천안 ${service.title} | 정감공간`,
      description: service.description,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      locale: "ko_KR",
    },
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  if (!(slug in services)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `천안 ${service.title}`,
    description: service.description,
    serviceType: service.title,
    areaServed: {
      "@type": "City",
      name: "천안시",
    },
    provider: {
      "@type": "GeneralContractor",
      name: "정감공간",
      telephone: PHONE,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section
        className="hero"
        style={{ minHeight: 480, height: "65vh" }}
      >
        <div
          className="hero-background"
          style={{
            backgroundImage: `url("${service.image}")`,
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">
            JEONGGAM SPACE / {service.english}
          </span>

          <h1>{service.title}</h1>

          <p>{service.headline}</p>

          <a
            href="tel:0414150410"
            className="hero-button"
          >
            시공 상담하기 <span>↗</span>
          </a>
        </div>
      </section>

      <section className="home-about section-padding">
        <div className="about-heading">
          <span className="section-label">
            SERVICE INTRODUCTION
          </span>
          <h2>
            천안
            <br />
            {service.title}
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            {service.headline}
          </p>
          <p>{service.intro}</p>
          <p>
            정감공간은 실내건축공사업 면허를
            보유한 청년창업기업으로,
            천안 지역의 인테리어 상담을
            진행하고 있습니다.
          </p>
        </div>
      </section>

      <section className="home-services section-padding">
        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR APPROACH
            </span>
            <h2>
              공간에 필요한
              <br />
              시공 방향
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          {service.features.map((feature, index) => (
            <div
              className="trust-item"
              key={feature[0]}
            >
              <span className="trust-number">
                0{index + 1}
              </span>
              <h3>{feature[0]}</h3>
              <p>{feature[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-intro section-padding">
        <div className="seo-inner">
          <span className="section-label">
            CHEONAN INTERIOR
          </span>

          <h2>
            천안 {service.title},
            <br />
            정감공간과 상담하세요.
          </h2>

          <p>
            천안에서 {service.title} 업체를
            찾고 계신다면 공간의 현재 상태와
            사용 목적, 희망하는 디자인,
            예산과 공사 일정을 함께 검토하는
            것이 중요합니다.
          </p>

          <p>
            정감공간은 고객의 요청과 현장
            조건을 바탕으로 적합한 공사
            방향을 상담합니다.
          </p>

          <Link
            href="/#services"
            className="more-link"
          >
            다른 시공 분야 보기 ↗
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <span className="section-label">
          PROJECT INQUIRY
        </span>

        <h2>
          {service.title}
          <br />
          견적 상담
        </h2>

        <p>
          대표 정경훈 · 정감공간
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
