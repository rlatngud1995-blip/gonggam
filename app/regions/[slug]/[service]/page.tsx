
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  regions,
  getRegion,
} from "../../../../lib/regions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jeonggamspace.vercel.app";

const PHONE = "041-415-0410";

const services = {
  "old-house": {
    name: "구축 인테리어",
    english: "RENOVATION",
    image: "/old-house.jpg",
    description:
      "노후 주거공간의 상태와 구조, 생활 동선을 고려한 구축 인테리어",
    intro:
      "구축 인테리어는 기존 마감재와 설비의 상태, 공간 활용, 생활 동선을 함께 살펴보는 것이 중요합니다.",
    checks: [
      ["현장 상태", "기존 마감재와 설비, 공사 범위 확인"],
      ["공간 계획", "생활 동선과 수납, 공간 활용 검토"],
      ["시공 계획", "마감 방향과 예산, 공사 일정 협의"],
    ],
  },
  commercial: {
    name: "상가 인테리어",
    english: "COMMERCIAL",
    image: "/commercial.jpg",
    description:
      "매장과 사무실 등 상업공간의 기능과 운영 동선을 고려한 인테리어",
    intro:
      "상가 인테리어는 업종의 특성, 고객 동선, 운영 방식과 브랜드 이미지를 함께 고려해야 합니다.",
    checks: [
      ["업종과 용도", "매장 및 사무실의 사용 목적 확인"],
      ["운영 동선", "고객 이동과 직원 업무 동선 검토"],
      ["공사 조건", "건물 관리규정과 공사 일정 협의"],
    ],
  },
  apartment: {
    name: "아파트 인테리어",
    english: "RESIDENTIAL",
    image: "/apartment.jpg",
    description:
      "가족의 생활방식과 취향을 고려한 아파트 전체 및 부분 리모델링",
    intro:
      "아파트 인테리어는 가족 구성, 수납, 생활 동선과 기존 공간의 상태에 따라 공사 방향이 달라집니다.",
    checks: [
      ["공사 범위", "전체 또는 부분 리모델링 범위 확인"],
      ["생활 방식", "가족 구성과 공간별 사용 목적 검토"],
      ["현장 조건", "관리사무소 규정과 공사 일정 확인"],
    ],
  },
  school: {
    name: "학교 리모델링",
    english: "EDUCATIONAL",
    image: "/school.jpg",
    description:
      "교실과 교육시설의 기능, 안전성, 유지관리 편의성을 고려한 리모델링",
    intro:
      "학교 리모델링은 학생과 교직원의 이용 환경, 시설의 안전성, 공사 가능 일정과 유지관리 조건을 함께 검토해야 합니다.",
    checks: [
      ["공간 목적", "교실 및 교육시설의 사용 목적 확인"],
      ["안전 기준", "관련 시설 기준과 마감 조건 검토"],
      ["공사 일정", "학사 일정과 현장 운영 조건 협의"],
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

type Props = {
  params: Promise<{
    slug: string;
    service: string;
  }>;
};

export function generateStaticParams() {
  return regions.flatMap((region) =>
    Object.keys(services).map((service) => ({
      slug: region.slug,
      service,
    }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, service } = await params;
  const region = getRegion(slug);

  if (!region || !(service in services)) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const item = services[service as ServiceSlug];

  const title = `${region.name} ${item.name}`;

  const description =
    `천안 ${region.district} ${region.name} ` +
    `${item.name} 상담. ${item.description}. ` +
    `정감공간은 실내건축공사업 면허 보유 ` +
    `청년창업기업입니다. 상담 ${PHONE}.`;

  return {
    title,
    description,
    alternates: {
      canonical:
        `${SITE_URL}/regions/${slug}/${service}`,
    },
    openGraph: {
      title: `${title} | 정감공간`,
      description,
      url:
        `${SITE_URL}/regions/${slug}/${service}`,
      siteName: "정감공간",
      locale: "ko_KR",
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function RegionServicePage({
  params,
}: Props) {
  const { slug, service } = await params;
  const region = getRegion(slug);

  if (!region || !(service in services)) {
    notFound();
  }

  const item = services[service as ServiceSlug];

  const otherServices = Object.entries(services)
    .filter(([key]) => key !== service);

  return (
    <>
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "110px 7% 100px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
          }}
        >
          <span className="section-label">
            JEONGGAM SPACE / {item.english}
          </span>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 70px)",
              lineHeight: 1.3,
              letterSpacing: "-0.06em",
              marginBottom: 24,
            }}
          >
            {region.name}
            <br />
            {item.name}
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
            정감공간 인테리어 상담
          </p>

          <a
            href="tel:0414150410"
            className="hero-button"
            style={{ marginTop: 25 }}
          >
            시공 상담하기 ↗
          </a>
        </div>
      </section>

      <section className="home-about section-padding">
        <div className="about-heading">
          <span className="section-label">
            SERVICE INFORMATION
          </span>

          <h2>
            {region.name}
            <br />
            {item.name}
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            공간의 목적과 현장 조건을
            함께 고려합니다.
          </p>

          <p>
            정감공간은 천안 {region.district}{" "}
            {region.name} 지역의 {item.name}
            상담을 진행합니다.
          </p>

          <p>{item.intro}</p>

          <p>
            상담 시 공간의 현재 상태와
            희망하는 공사 범위, 예산 및
            공사 가능 일정을 확인하고
            적합한 방향을 안내합니다.
          </p>
        </div>
      </section>

      <section className="home-services section-padding">
        <div className="section-heading">
          <div>
            <span className="section-label">
              PROJECT CHECKLIST
            </span>

            <h2>
              시공 전
              <br />
              확인할 사항
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          {item.checks.map((check, index) => (
            <div
              className="trust-item"
              key={check[0]}
            >
              <span className="trust-number">
                0{index + 1}
              </span>
              <h3>{check[0]}</h3>
              <p>{check[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-intro section-padding">
        <div className="seo-inner">
          <span className="section-label">
            INTERIOR CONSULTING
          </span>

          <h2>
            {region.name} {item.name}
            <br />
            정감공간과 상담하세요.
          </h2>

          <p>{item.description}</p>

          <p>
            실내건축공사업 면허를 보유한
            청년창업기업 정감공간은
            고객의 요청과 현장 조건을
            바탕으로 시공 방향을 상담합니다.
          </p>

          <Link
            href={`/services/${service}`}
            className="more-link"
          >
            {item.name} 자세히 보기 ↗
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
          }}
        >
          <span className="section-label">
            MORE SERVICES
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              letterSpacing: "-0.05em",
              marginBottom: 35,
            }}
          >
            {region.name} 다른 시공 분야
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {otherServices.map(([key, value]) => (
              <Link
                key={key}
                href={`/regions/${slug}/${key}`}
                style={{
                  padding: "14px 20px",
                  border: "1px solid #ddd",
                  fontSize: 14,
                }}
              >
                {value.name} ↗
              </Link>
            ))}
          </div>

          <Link
            href={`/regions/${slug}`}
            className="more-link"
          >
            {region.name} 전체 시공 분야 보기 ↗
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <span className="section-label">
          PROJECT INQUIRY
        </span>

        <h2>
          {region.name} {item.name}
          <br />
          견적 상담
        </h2>

        <p>정감공간 · 대표 정경훈</p>

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
