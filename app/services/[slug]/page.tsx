import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

const PHONE = "041-415-0410";

type ServiceData = {
  slug: string;
  title: string;
  english: string;
  description: string;
  intro: string;
  image: string;
  features: string[];
};

const services: Record<string, ServiceData> = {
  "old-house": {
    slug: "old-house",
    title: "구축 인테리어",
    english: "OLD HOUSE RENOVATION",
    description:
      "오래된 공간의 구조와 동선을 새롭게 정리해 더 편안하고 가치 있는 공간으로 완성합니다.",
    intro:
      "기존 공간의 장점은 살리고 불편했던 구조와 마감은 새롭게 정리합니다. 현재 공간의 상태와 생활 동선을 꼼꼼하게 확인한 뒤 필요한 공사를 제안합니다.",
    image: "/IMG_2041.jpeg",
    features: [
      "기존 공간 상태 및 구조 확인",
      "생활 동선을 고려한 공간 재구성",
      "주방·거실·방 등 공간별 마감 계획",
      "설계부터 시공까지 체계적인 현장 관리",
    ],
  },

  commercial: {
    slug: "commercial",
    title: "상가 인테리어",
    english: "COMMERCIAL INTERIOR",
    description:
      "업종과 브랜드의 특성을 고려해 실용성과 디자인을 함께 갖춘 상업공간을 만듭니다.",
    intro:
      "상업공간은 디자인뿐 아니라 고객 동선과 직원의 사용성까지 함께 고려해야 합니다. 업종과 공간의 목적을 파악해 효율적인 공간을 제안합니다.",
    image: "/IMG_2040.jpeg",
    features: [
      "업종과 브랜드에 맞는 공간 구성",
      "고객 및 직원 동선을 고려한 설계",
      "상업공간에 적합한 마감재 선정",
      "오픈 일정에 맞춘 체계적인 시공 관리",
    ],
  },

  apartment: {
    slug: "apartment",
    title: "아파트 인테리어",
    english: "APARTMENT INTERIOR",
    description:
      "생활 동선과 공간 활용을 고려해 편안하고 완성도 높은 주거공간을 제안합니다.",
    intro:
      "가족 구성과 생활 방식에 따라 필요한 공간은 달라집니다. 주방, 거실, 수납과 조명까지 실제 생활에 필요한 부분을 중심으로 계획합니다.",
    image: "/IMG_2042.jpeg",
    features: [
      "생활방식에 맞춘 공간 계획",
      "주방·거실·수납 동선 개선",
      "공간에 맞는 조명과 마감 구성",
      "실용성과 디자인을 함께 고려한 시공",
    ],
  },

  school: {
    slug: "school",
    title: "학교 리모델링",
    english: "SCHOOL REMODELING",
    description:
      "교육환경과 사용 목적을 고려해 안전하고 쾌적한 공간으로 개선합니다.",
    intro:
      "교육공간은 많은 사람이 사용하는 만큼 안전성과 내구성이 중요합니다. 공간의 용도와 사용 인원을 고려해 쾌적하고 효율적인 교육환경을 만듭니다.",
    image: "/IMG_2043.jpeg",
    features: [
      "교육공간의 목적에 맞는 설계",
      "안전성과 내구성을 고려한 마감",
      "교실·공용공간·업무공간 개선",
      "사용 일정에 맞춘 공정 관리",
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
    title: `천안 ${service.title}`,
    description: `정감공간 천안 ${service.title}. ${service.description} 실내건축공사업 면허 보유. 상담 ${PHONE}.`,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    openGraph: {
      title: `천안 ${service.title} | 정감공간`,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [
        {
          url: service.image,
          alt: `천안 ${service.title} 정감공간`,
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
    (item) => item.slug !== slug
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `천안 ${service.title}`,
    provider: {
      "@type": "GeneralContractor",
      name: "정감공간",
      telephone: PHONE,
    },
    areaServed: {
      "@type": "City",
      name: "천안시",
    },
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="service-detail-hero">
        <div className="service-detail-container">
          <div className="service-detail-kicker">
            <span>JEONGGAM SPACE</span>
            <span>{service.english}</span>
          </div>

          <div className="service-detail-title">
            <p>천안 인테리어 · 리모델링</p>

            <h1>{service.title}</h1>

            <p className="service-detail-description">
              {service.description}
            </p>

            <div className="service-detail-actions">
              <a
                href="tel:0414150410"
                className="service-detail-button service-detail-button-black"
              >
                <span>전화 상담</span>
                <strong>041-415-0410</strong>
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

      <section className="service-detail-image-section">
        <div className="service-detail-container">
          <div className="service-detail-main-image">
            <Image
              src={service.image}
              alt={`천안 ${service.title} 정감공간 시공 사례`}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

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

            <p>{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="service-detail-features">
        <div className="service-detail-container">
          <div className="service-detail-label service-detail-label-light">
            <span>02</span>
            <p>WORK PROCESS</p>
          </div>

          <div className="service-detail-feature-grid">
            <div className="service-detail-feature-heading">
              <h2>
                공간에 필요한
                <br />
                기본을 지킵니다.
              </h2>

              <p>
                디자인만을 위한 시공이 아니라
                실제 사용성과 완성도를 함께 고려합니다.
              </p>
            </div>

            <div className="service-detail-feature-list">
              {service.features.map((feature, index) => (
                <div
                  className="service-detail-feature-row"
                  key={feature}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{feature}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-other">
        <div className="service-detail-container">
          <div className="service-detail-label">
            <span>03</span>
            <p>OTHER SERVICES</p>
          </div>

          <h2>다른 시공 분야</h2>

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
                    <span>{item.english}</span>
                    <strong>{item.title}</strong>
                  </div>

                  <span>↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-contact">
        <div className="service-detail-container">
          <p>CONTACT</p>

          <h2>
            공간에 대한 이야기를
            <br />
            시작해보세요.
          </h2>

          <div className="service-detail-contact-actions">
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
    </>
  );
}
