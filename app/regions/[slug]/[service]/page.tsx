import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, regions } from "@/lib/regions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

const PHONE = "041-415-0410";

type Service = {
  slug: string;
  name: string;
  english: string;
  image: string;
  description: string;
  intro: string;
  points: string[];
};

const services: Record<string, Service> = {
  "old-house": {
    slug: "old-house",
    name: "구축 인테리어",
    english: "OLD HOUSE RENOVATION",
    image: "/IMG_2041.jpeg",
    description:
      "오래된 공간의 구조와 생활 동선을 다시 정리해 편안하고 가치 있는 공간으로 완성합니다.",
    intro:
      "구축 인테리어는 단순히 마감재를 교체하는 것보다 기존 공간의 구조와 불편한 동선을 먼저 확인하는 과정이 중요합니다.",
    points: [
      "기존 구조와 공간 상태 확인",
      "생활 동선을 고려한 공간 재구성",
      "주방·거실·방 등 공간별 마감 계획",
      "설계부터 시공까지 꼼꼼한 현장 관리",
    ],
  },

  commercial: {
    slug: "commercial",
    name: "상가 인테리어",
    english: "COMMERCIAL INTERIOR",
    image: "/IMG_2040.jpeg",
    description:
      "업종과 브랜드의 특성을 고려해 실용성과 디자인을 갖춘 상업공간을 만듭니다.",
    intro:
      "상가 인테리어는 고객이 이용하는 동선과 직원의 업무 동선, 업종의 특성을 함께 고려해야 합니다.",
    points: [
      "업종과 브랜드 특성에 맞는 공간 구성",
      "고객·직원 동선을 고려한 설계",
      "상업공간에 적합한 마감재 계획",
      "오픈 일정에 맞춘 공정 관리",
    ],
  },

  apartment: {
    slug: "apartment",
    name: "아파트 인테리어",
    english: "APARTMENT INTERIOR",
    image: "/IMG_2042.jpeg",
    description:
      "생활 동선과 공간 활용을 고려해 편안하고 완성도 높은 주거공간을 제안합니다.",
    intro:
      "아파트 인테리어는 가족 구성과 생활방식에 따라 공간 구성과 필요한 수납, 조명, 주방 동선이 달라집니다.",
    points: [
      "가족 구성과 생활방식에 맞춘 공간 계획",
      "주방·거실·수납 동선 개선",
      "공간에 맞는 조명과 마감 구성",
      "실용성과 디자인을 고려한 시공",
    ],
  },

  school: {
    slug: "school",
    name: "학교 리모델링",
    english: "SCHOOL REMODELING",
    image: "/IMG_2043.jpeg",
    description:
      "교육환경과 사용 목적을 고려해 안전하고 쾌적한 공간으로 개선합니다.",
    intro:
      "학교와 교육시설은 많은 사람이 사용하는 공간인 만큼 안전성과 내구성, 사용 목적을 함께 고려해야 합니다.",
    points: [
      "교육공간 목적에 맞는 공간 설계",
      "안전성과 내구성을 고려한 마감",
      "교실·공용공간·업무공간 개선",
      "사용 일정에 맞춘 공정 관리",
    ],
  },
};

export function generateStaticParams() {
  return regions.flatMap((region) =>
    Object.keys(services).map((service) => ({
      slug: region.slug,
      service,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    service: string;
  }>;
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;

  const region = getRegion(slug);
  const service = services[serviceSlug];

  if (!region || !service) {
    return {};
  }

  const title = `${region.name} ${service.name} | 정감공간`;

  const description =
    `천안 ${region.name} ${service.name} 정감공간. ` +
    `${service.description} 실내건축공사업 면허 보유. 상담 ${PHONE}.`;

  return {
    title,
    description,

    alternates: {
      canonical: `${SITE_URL}/regions/${region.slug}/${service.slug}`,
    },

    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/regions/${region.slug}/${service.slug}`,
      images: [
        {
          url: service.image,
          alt: `${region.name} ${service.name} 정감공간`,
        },
      ],
    },
  };
}

export default async function RegionServicePage({
  params,
}: {
  params: Promise<{
    slug: string;
    service: string;
  }>;
}) {
  const { slug, service: serviceSlug } = await params;

  const region = getRegion(slug);
  const service = services[serviceSlug];

  if (!region || !service) {
    notFound();
  }

  const otherServices = Object.values(services).filter(
    (item) => item.slug !== service.slug
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${region.name} ${service.name}`,
    description: `${region.name} 지역 ${service.description}`,
    provider: {
      "@type": "GeneralContractor",
      name: "정감공간",
      telephone: PHONE,
    },
    areaServed: {
      "@type": "Place",
      name: `천안시 ${region.district} ${region.name}`,
    },
    url: `${SITE_URL}/regions/${region.slug}/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="local-service-hero">
        <div className="local-service-container">
          <div className="local-service-kicker">
            <span>JEONGGAM SPACE</span>

            <span>
              {region.name.toUpperCase()} · {service.english}
            </span>
          </div>

          <div className="local-service-title">
            <p>
              천안 {region.district} {region.name}
            </p>

            <h1>
              {region.name}
              <br />
              {service.name}
            </h1>

            <p className="local-service-description">
              {region.name}의 공간 특성과 사용 목적을 고려해
              <br />
              정감공간이 {service.name}을 진행합니다.
            </p>

            <div className="local-service-actions">
              <a
                href="tel:0414150410"
                className="local-service-button local-service-button-black"
              >
                <span>전화 상담</span>
                <strong>{PHONE}</strong>
              </a>

              <Link
                href="/contact"
                className="local-service-button local-service-button-white"
              >
                <span>견적 문의</span>
                <strong>↗</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="local-service-photo">
        <div className="local-service-container">
          <div className="local-service-photo-wrap">
            <Image
              src={service.image}
              alt={`${region.name} ${service.name} 정감공간 시공 사례`}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="local-service-about">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>01</span>
            <p>LOCAL SERVICE</p>
          </div>

          <div className="local-service-about-grid">
            <div>
              <p className="local-service-small">
                CHEONAN · {region.district}
              </p>

              <h2>
                {region.name}
                <br />
                {service.name}
              </h2>
            </div>

            <div className="local-service-copy">
              <p>
                {region.description}
              </p>

              <p>
                {service.intro}
              </p>

              <p>
                현장마다 구조와 상태가 다르기 때문에 상담 후
                필요한 범위와 시공 방향을 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="local-service-points">
        <div className="local-service-container">
          <div className="local-service-label local-service-label-light">
            <span>02</span>
            <p>WORK POINT</p>
          </div>

          <div className="local-service-point-grid">
            <div>
              <h2>
                공간에 필요한
                <br />
                기본부터 꼼꼼하게.
              </h2>

              <p>
                공간의 디자인뿐 아니라 실제 사용성과
                시공 완성도를 함께 고려합니다.
              </p>
            </div>

            <div className="local-service-point-list">
              {service.points.map((point, index) => (
                <div key={point}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{point}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="local-service-other">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>03</span>
            <p>OTHER SERVICES</p>
          </div>

          <h2>
            {region.name} 다른 시공 분야
          </h2>

          <div className="local-service-other-grid">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/regions/${region.slug}/${item.slug}`}
                className="local-service-other-card"
              >
                <div className="local-service-other-image">
                  <Image
                    src={item.image}
                    alt={`${region.name} ${item.name} 정감공간`}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                </div>

                <div className="local-service-other-title">
                  <div>
                    <span>{region.name}</span>
                    <strong>{item.name}</strong>
                  </div>

                  <span>↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="local-service-area">
        <div className="local-service-container">
          <div className="local-service-label">
            <span>04</span>
            <p>AREA</p>
          </div>

          <div className="local-service-area-grid">
            <h2>
              천안 전 지역
              <br />
              상담 가능합니다.
            </h2>

            <div>
              <p>
                정감공간은 {region.name}뿐 아니라
                천안 서북구·동남구 전 지역의
                인테리어와 리모델링 상담을 진행합니다.
              </p>

              <Link href={`/regions/${region.slug}`}>
                {region.name} 인테리어 전체 보기 ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="local-service-contact">
        <div className="local-service-container">
          <p>
            {region.name} {service.name} 상담
          </p>

          <h2>
            공간에 대한 이야기를
            <br />
            시작해보세요.
          </h2>

          <div className="local-service-contact-actions">
            <a href="tel:0414150410">
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
    </>
  );
}
