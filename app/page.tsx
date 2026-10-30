
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "천안 인테리어 전문업체 정감공간",
  description:
    "천안 인테리어 전문업체 정감공간. 실내건축공사업 면허 보유 청년창업기업. 구축 인테리어, 상가 인테리어, 아파트 인테리어, 학교 리모델링 상담 041-415-0410.",
};

const services = [
  {
    number: "01",
    title: "구축 인테리어",
    english: "RENOVATION",
    description:
      "오래된 공간에 새로운 가치를 더하는 주거공간 리모델링",
    image: "/old-house.jpg",
    href: "/services/old-house",
  },
  {
    number: "02",
    title: "상가 인테리어",
    english: "COMMERCIAL",
    description:
      "브랜드의 개성과 운영 효율을 고려한 상업공간 인테리어",
    image: "/commercial.jpg",
    href: "/services/commercial",
  },
  {
    number: "03",
    title: "아파트 인테리어",
    english: "RESIDENTIAL",
    description:
      "생활의 편안함과 디자인을 조화롭게 담아낸 공간",
    image: "/apartment.jpg",
    href: "/services/apartment",
  },
  {
    number: "04",
    title: "학교 리모델링",
    english: "EDUCATIONAL",
    description:
      "학생과 교직원을 위한 실용적인 교육공간 개선",
    image: "/school.jpg",
    href: "/services/school",
  },
];

export default function Home() {
  return (
    <>
      {/* 메인 비주얼 */}
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">
            JEONGGAM SPACE · INTERIOR DESIGN
          </span>

          <h1>
            공간의 가치를
            <br />
            디자인하다.
          </h1>

          <p>
            공간을 이해하는 시선,
            <br />
            완성도 높은 인테리어의 시작.
            <br />
            정감공간이 함께합니다.
          </p>

          <Link
            href="/contact"
            className="hero-button"
          >
            프로젝트 문의하기 <span>↗</span>
          </Link>
        </div>

        <div className="hero-bottom">
          <span>JEONGGAM SPACE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="home-about section-padding">
        <div className="about-heading">
          <span className="section-label">
            ABOUT JEONGGAM
          </span>

          <h2>
            좋은 공간에는
            <br />
            이유가 있습니다.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            공간의 본질을 이해하고,
            <br />
            사람을 위한 디자인을 고민합니다.
          </p>

          <p>
            정감공간은 천안을 중심으로
            구축 인테리어, 상가 인테리어,
            아파트 인테리어, 학교 리모델링을
            진행하는 인테리어 전문기업입니다.
          </p>

          <p>
            공간의 용도와 사용자의 생활방식을
            고려하여 디자인과 실용성의
            균형을 추구합니다.
          </p>

          <Link
            href="/company"
            className="more-link"
          >
            정감공간 소개 <span>↗</span>
          </Link>
        </div>
      </section>

      {/* 시공 카테고리 */}
      <section
        id="services"
        className="home-services section-padding"
      >
        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR SERVICES
            </span>

            <h2>
              공간에 맞는
              <br />
              전문적인 솔루션
            </h2>
          </div>

          <p>
            주거공간부터 상업시설과 교육시설까지
            <br />
            공간의 목적에 맞게 제안합니다.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="service-card"
              key={service.number}
            >
              <div className="service-image-wrap">
                <div
                  className="service-image"
                  style={{
                    backgroundImage:
                      `url("${service.image}")`,
                  }}
                />
              </div>

              <div className="service-information">
                <div>
                  <span className="service-index">
                    {service.number} / {service.english}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <span className="service-arrow">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 시공 사례 */}
      <section
        id="portfolio"
        className="home-portfolio"
      >
        <div className="portfolio-content">
          <span className="section-label">
            OUR PROJECTS
          </span>

          <h2>
            완성된 공간이
            <br />
            우리의 이야기가 됩니다.
          </h2>

          <p>
            정감공간의 실제 시공 사례를
            소개합니다.
          </p>

          <span className="portfolio-coming">
            PROJECT ARCHIVE · COMING SOON
          </span>
        </div>

        <div className="portfolio-decoration">
          JEONGGAM
          <br />
          SPACE
        </div>
      </section>

      {/* 기업 경쟁력 */}
      <section className="home-trust section-padding">
        <div className="section-heading">
          <div>
            <span className="section-label">
              WHY JEONGGAM
            </span>

            <h2>
              신뢰를 바탕으로
              <br />
              공간을 만듭니다.
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          <div className="trust-item">
            <span className="trust-number">01</span>

            <h3>실내건축공사업 면허 보유</h3>

            <p>
              실내건축공사업 등록을 기반으로
              전문적인 인테리어 시공을
              진행합니다.
            </p>
          </div>

          <div className="trust-item">
            <span className="trust-number">02</span>

            <h3>청년창업기업</h3>

            <p>
              새로운 시각과 책임감으로
              공간의 가치를 고민하는
              청년창업기업입니다.
            </p>
          </div>

          <div className="trust-item">
            <span className="trust-number">03</span>

            <h3>공간별 맞춤 설계</h3>

            <p>
              공간의 목적과 사용 환경을
              고려하여 맞춤형 인테리어
              솔루션을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 검색 유입용 소개 */}
      <section className="seo-intro section-padding">
        <div className="seo-inner">
          <span className="section-label">
            CHEONAN INTERIOR
          </span>

          <h2>
            천안 인테리어,
            <br />
            정감공간과 함께하세요.
          </h2>

          <p>
            천안에서 인테리어 업체를 찾고
            계신다면 공간의 특성과 시공 목적을
            충분히 고려하는 것이 중요합니다.
            정감공간은 구축 주거공간 리모델링,
            상가 인테리어, 아파트 인테리어,
            학교 리모델링 등 다양한 공간의
            인테리어를 상담하고 있습니다.
          </p>

          <p>
            실내건축공사업 면허를 보유한
            청년창업기업으로서 공간의 기능과
            디자인을 함께 고민합니다.
          </p>
        </div>
      </section>

      {/* 견적 상담 */}
      <section className="home-contact">
        <span className="section-label">
          START YOUR PROJECT
        </span>

        <h2>
          새로운 공간의 시작,
          <br />
          정감공간과 함께하세요.
        </h2>

        <p>
          구축 · 상가 · 아파트 · 학교 리모델링
        </p>

        <a
          href="tel:0414150410"
          className="contact-phone"
        >
          041-415-0410 <span>↗</span>
        </a>

        <Link
          href="/contact"
          className="contact-more"
        >
          견적 상담 안내
        </Link>
      </section>
    </>
  );
}
