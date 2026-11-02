import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { regions } from "@/lib/regions";

const SITE_URL = "https://jeonggaminterior.com";
const PHONE = "041-415-0410";
const TEL = "tel:0414150410";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

const services = [
  {
    slug: "apartment",
    name: "아파트 인테리어",
    description:
      "신축·기존 아파트의 공간 구성과 생활 동선을 고려한 인테리어 시공",
  },
  {
    slug: "old-house",
    name: "구축 인테리어",
    description:
      "오래된 주거공간의 구조와 상태를 확인해 진행하는 리모델링 및 인테리어",
  },
  {
    slug: "commercial",
    name: "상가 인테리어",
    description:
      "매장과 업무공간의 목적과 동선을 고려한 상업공간 인테리어",
  },
  {
    slug: "school",
    name: "학교 리모델링",
    description:
      "학교와 교육시설의 사용 목적과 안전성을 고려한 공간 리모델링",
  },
];

function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const region = getRegion(slug);

  if (!region) {
    return {};
  }

  const canonical = `${SITE_URL}/regions/${region.slug}`;

  return {
    title: `${region.name} 인테리어 업체 | 정감공간`,

    description: `${region.name} 인테리어 업체 정감공간. 아파트·구축·상가·학교 인테리어 및 리모델링 상담. 천안·아산 지역 시공.`,

    keywords: [
      `${region.name} 인테리어`,
      `${region.name} 인테리어 업체`,
      `${region.name} 아파트 인테리어`,
      `${region.name} 구축 인테리어`,
      `${region.name} 상가 인테리어`,
      `${region.name} 리모델링`,
      "천안 인테리어",
      "천안 인테리어 업체",
      "천안 실내건축공사업",
      "정감공간",
    ],

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "정감공간",
      title: `${region.name} 인테리어 업체 | 정감공간`,
      description: `${region.name} 아파트·구축·상가·학교 인테리어 및 리모델링 상담.`,
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

export default async function RegionPage({
  params,
}: Props) {
  const { slug } = await params;

  const region = getRegion(slug);

  if (!region) {
    notFound();
  }

  const canonical = `${SITE_URL}/regions/${region.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",

    name: "정감공간",

    alternateName: "JEONGGAM SPACE",

    url: SITE_URL,

    telephone: PHONE,

    description: `${region.name}을 포함한 천안·아산 지역에서 주거·상업·교육공간 인테리어와 리모델링을 진행하는 정감공간입니다.`,

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

    knowsAbout: [
      "아파트 인테리어",
      "구축 인테리어",
      "상가 인테리어",
      "학교 리모델링",
      "실내건축공사",
      "실내건축공사업",
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
        name: region.name,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(
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

      {/* HERO */}

      <section className="region-hero">
        <div className="region-container">
          <div className="region-hero-top">
            <span>JEONGGAM SPACE</span>

            <span>CHEONAN INTERIOR</span>
          </div>

          <div className="region-hero-content">
            <p>{region.name} 인테리어 업체</p>

            <h1>
              {region.name}
              <br />
              인테리어
            </h1>

            <p>
              정감공간은 {region.name}을 포함한
              천안·아산 지역에서 다양한 공간의
              인테리어와 리모델링을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="region-intro">
        <div className="region-container">
          <div className="region-section-label">
            <span>01</span>

            <p>JEONGGAM SPACE</p>
          </div>

          <div className="region-intro-grid">
            <h2>
              공간의 목적에 맞는
              <br />
              인테리어를
              <br />
              제안합니다.
            </h2>

            <div>
              <p>
                {region.name} 인테리어 상담 시
                공간의 현재 상태와 사용 목적,
                필요한 공사 범위를 먼저 확인합니다.
              </p>

              <p>
                주거공간부터 상업공간과 교육시설까지
                현장의 특성을 고려해
                시공 방향을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="region-services">
        <div className="region-container">
          <div className="region-section-label">
            <span>02</span>

            <p>SERVICE</p>
          </div>

          <div className="region-service-grid">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/regions/${region.slug}/${service.slug}`}
                className="region-service-card"
              >
                <div className="region-service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="region-service-content">
                  <h2>
                    {region.name}
                    <br />
                    {service.name}
                  </h2>

                  <p>{service.description}</p>
                </div>

                <span className="region-service-arrow">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AREA INFO */}

      <section className="region-information">
        <div className="region-container">
          <div className="region-section-label">
            <span>03</span>

            <p>AREA INFORMATION</p>
          </div>

          <div className="region-information-grid">
            <div>
              <span>AREA</span>

              <strong>{region.name}</strong>
            </div>

            <div>
              <span>SERVICE AREA</span>

              <strong>천안 / 아산 전 지역</strong>
            </div>

            <div>
              <span>SERVICE</span>

              <strong>
                주거 · 상업 · 교육 · 공공공간
              </strong>
            </div>

            <div>
              <span>LICENSE</span>

              <strong>
                실내건축공사업
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="region-seo">
        <div className="region-container">
          <div className="region-section-label">
            <span>04</span>

            <p>{region.name.toUpperCase()} INTERIOR</p>
          </div>

          <div className="region-seo-grid">
            <h2>
              {region.name}
              <br />
              인테리어 상담
            </h2>

            <div>
              <p>
                {region.name}에서 아파트 인테리어,
                구축 리모델링, 상가 인테리어,
                학교 및 교육시설 리모델링을
                계획하고 있다면 정감공간에 상담할 수 있습니다.
              </p>

              <p>
                정감공간은 현장 조건과 공사 범위를 확인하고
                공간의 목적과 사용 방식에 맞는
                인테리어 방향을 제안합니다.
              </p>

              <p>
                공사 상담 시 현장 위치와 공간 종류,
                예상 공사 범위 등을 알려주시면
                보다 원활한 상담이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="region-contact">
        <div className="region-container">
          <p>CONTACT</p>

          <h2>
            {region.name} 인테리어
            <br />
            상담이 필요하신가요?
          </h2>

          <div className="region-contact-actions">
            <a href={TEL}>
              <span>전화 상담</span>

              <strong>
                041-415-0410
              </strong>
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
