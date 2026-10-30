
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions, getRegion } from "../../../lib/regions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jeonggamspace.vercel.app";

const PHONE = "041-415-0410";

const services = [
  {
    slug: "old-house",
    name: "구축 인테리어",
    description:
      "노후 주거공간의 상태와 생활 동선을 고려한 리모델링",
  },
  {
    slug: "commercial",
    name: "상가 인테리어",
    description:
      "매장과 상업공간의 목적을 고려한 인테리어",
  },
  {
    slug: "apartment",
    name: "아파트 인테리어",
    description:
      "생활방식에 맞춘 아파트 전체 및 부분 리모델링",
  },
  {
    slug: "school",
    name: "학교 리모델링",
    description:
      "교육시설의 기능과 사용 환경을 고려한 공간 개선",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);

  if (!region) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  const title = `${region.name} 인테리어`;
  const description =
    `천안 ${region.district} ${region.name} 인테리어 상담. ` +
    `정감공간은 구축 인테리어, 상가 인테리어, ` +
    `아파트 인테리어, 학교 리모델링을 안내합니다. ` +
    `실내건축공사업 면허 보유 청년창업기업. ` +
    `대표 정경훈, ${PHONE}.`;

  return {
    title,
    description,
    keywords: [
      `${region.name} 인테리어`,
      `${region.name} 인테리어 업체`,
      `${region.name} 아파트 인테리어`,
      `${region.name} 상가 인테리어`,
      `${region.name} 구축 인테리어`,
      `천안 ${region.name} 리모델링`,
    ],
    alternates: {
      canonical: `${SITE_URL}/regions/${slug}`,
    },
    openGraph: {
      title: `${title} | 정감공간`,
      description,
      url: `${SITE_URL}/regions/${slug}`,
      siteName: "정감공간",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function RegionPage({
  params,
}: Props) {
  const { slug } = await params;
  const region = getRegion(slug);

  if (!region) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${region.name} 인테리어 상담`,
    serviceType: "인테리어 및 리모델링",
    areaServed: {
      "@type": "Place",
      name: `충청남도 천안시 ${region.district} ${region.name}`,
    },
    provider: {
      "@type": "GeneralContractor",
      name: "정감공간",
      telephone: PHONE,
      url: SITE_URL,
    },
  };

  const nearbyRegions = regions
    .filter(
      (item) =>
        item.district === region.district &&
        item.slug !== region.slug
    )
    .slice(0, 12);

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
        style={{
          background: "#111",
          color: "#fff",
          padding: "110px 7% 100px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <span className="section-label">
            CHEONAN INTERIOR / {region.district}
          </span>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 72px)",
              letterSpacing: "-0.06em",
              lineHeight: 1.3,
              marginBottom: 24,
            }}
          >
            {region.name}
            <br />
            인테리어
          </h1>

          <p
            style={{
              color: "#ccc",
              lineHeight: 2,
              fontSize: 16,
            }}
          >
            천안 {region.district} {region.name}
            <br />
            공간의 가치를 디자인하는 정감공간
          </p>

          <a
            href="tel:0414150410"
            className="hero-button"
            style={{ marginTop: 25 }}
          >
            인테리어 상담하기 ↗
          </a>
        </div>
      </section>

      <section className="home-about section-padding">
        <div className="about-heading">
          <span className="section-label">
            JEONGGAM SPACE
          </span>

          <h2>
            {region.name}
            <br />
            인테리어 상담
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            공간의 특성을 이해하고
            <br />
            새로운 가치를 제안합니다.
          </p>

          <p>
            정감공간은 천안 {region.district}{" "}
            {region.name} 지역의 주거공간,
            상업공간 및 교육시설 인테리어를
            상담합니다.
          </p>

          <p>
            구축 인테리어부터 아파트 리모델링,
            상가 인테리어와 학교 리모델링까지
            공간의 목적과 현장 조건에 따라
            공사 방향을 검토합니다.
          </p>

          <p>
            실내건축공사업 면허를 보유한
            청년창업기업으로서 고객의 요청을
            바탕으로 시공 범위와 일정을
            상담합니다.
          </p>
        </div>
      </section>

      <section className="home-services section-padding">
        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR SERVICES
            </span>
            <h2>
              {region.name}
              <br />
              인테리어 분야
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="trust-item"
              style={{ display: "block" }}
            >
              <span className="trust-number">
                0{index + 1}
              </span>

              <h3>{service.name} ↗</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="seo-intro section-padding">
        <div className="seo-inner">
          <span className="section-label">
            LOCAL INTERIOR CONSULTING
          </span>

          <h2>
            {region.name} 인테리어,
            <br />
            무엇부터 확인해야 할까요?
          </h2>

          <p>
            인테리어를 계획할 때는 현재 공간의
            상태와 원하는 공사 범위, 예산,
            공사 가능 일정 등을 먼저 정리하는
            것이 좋습니다.
          </p>

          <p>
            주거공간은 생활 동선과 수납,
            상업공간은 운영 목적과 고객 동선,
            교육시설은 안전성과 유지관리
            편의성을 함께 고려해야 합니다.
          </p>

          <p>
            정감공간은 {region.name} 인테리어
            상담 시 고객의 요청과 현장 조건을
            바탕으로 적절한 시공 방향을
            안내합니다.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <span className="section-label">
            OTHER SERVICE AREAS
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              letterSpacing: "-0.05em",
              marginBottom: 35,
            }}
          >
            천안 {region.district} 다른 지역
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {nearbyRegions.map((item) => (
              <Link
                key={item.slug}
                href={`/regions/${item.slug}`}
                style={{
                  padding: "12px 18px",
                  border: "1px solid #ddd",
                  fontSize: 13,
                }}
              >
                {item.name} 인테리어 ↗
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact">
        <span className="section-label">
          PROJECT INQUIRY
        </span>

        <h2>
          {region.name} 인테리어
          <br />
          견적 상담
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
