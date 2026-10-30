import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "구축 인테리어",
    english: "OLD HOUSE RENOVATION",
    description:
      "오래된 공간의 구조와 생활 동선을 다시 설계해 새로운 가치로 완성합니다.",
    href: "/services/old-house",
    image: "/IMG_2041.jpeg",
  },
  {
    number: "02",
    title: "상가 인테리어",
    english: "COMMERCIAL INTERIOR",
    description:
      "브랜드와 업종의 특성을 공간에 담아 효율적이고 인상적인 상업공간을 만듭니다.",
    href: "/services/commercial",
    image: "/IMG_2040.jpeg",
  },
  {
    number: "03",
    title: "아파트 인테리어",
    english: "APARTMENT INTERIOR",
    description:
      "일상의 편안함과 디자인의 완성도를 함께 고려한 주거공간을 제안합니다.",
    href: "/services/apartment",
    image: "/IMG_2042.jpeg",
  },
  {
    number: "04",
    title: "학교 리모델링",
    english: "SCHOOL REMODELING",
    description:
      "교육환경과 사용 목적을 고려해 안전하고 쾌적한 공간으로 개선합니다.",
    href: "/services/school",
    image: "/IMG_2043.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media">
          <Image
            src="/IMG_2042.jpeg"
            alt="천안 인테리어 전문기업 정감공간 아파트 인테리어 시공 사례"
            fill
            priority
            sizes="100vw"
            className="home-hero-image"
          />
          <div className="home-hero-overlay" />
        </div>

        <div className="home-hero-content">
          <p className="hero-eyebrow reveal-up">
            JEONGGAM SPACE · CHEONAN
          </p>

          <h1 className="hero-title">
            <span className="reveal-up delay-1">공간에</span>
            <span className="reveal-up delay-2">정감을 더하다.</span>
          </h1>

          <div className="hero-bottom reveal-up delay-3">
            <p>
              천안 인테리어 · 리모델링
              <br />
              실내건축공사업 면허 보유
            </p>

            <span className="hero-scroll">
              SCROLL
              <i />
            </span>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-inner">
          <p className="section-label scroll-reveal">
            01 / PHILOSOPHY
          </p>

          <div className="intro-copy">
            <h2 className="scroll-reveal">
              좋은 공간은
              <br />
              사람을 이해하는 것에서
              <br />
              시작됩니다.
            </h2>

            <p className="scroll-reveal intro-description">
              정감공간은 단순히 보기 좋은 공간을 만드는 것에 그치지 않습니다.
              사용하는 사람의 생활과 목적, 동선과 공간의 본질을 이해하고
              오래 머물고 싶은 공간을 완성합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-media">
          <Image
            src="/IMG_2041.jpeg"
            alt="정감공간 구축 인테리어 시공 사례"
            fill
            sizes="100vw"
            className="statement-image"
          />
          <div className="statement-overlay" />
        </div>

        <div className="statement-content">
          <p className="scroll-reveal">
            SPACE · DETAIL · VALUE
          </p>

          <h2 className="scroll-reveal">
            공간의 가치를
            <br />
            완성합니다.
          </h2>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-heading">
          <p className="section-label scroll-reveal">
            02 / SERVICES
          </p>

          <div className="services-heading-row">
            <h2 className="scroll-reveal">
              정감공간의
              <br />
              시공 분야
            </h2>

            <p className="scroll-reveal">
              공간의 목적과 사용 환경에 맞춰
              <br />
              설계부터 시공까지 꼼꼼하게 진행합니다.
            </p>
          </div>
        </div>

        <div className="service-scenes">
          {services.map((service) => (
            <article
              className="service-scene"
              key={service.number}
            >
              <Link href={service.href} className="service-scene-link">
                <div className="service-image-wrap scroll-reveal">
                  <Image
                    src={service.image}
                    alt={`천안 ${service.title} 정감공간 시공 사례`}
                    fill
                    sizes="(max-width: 900px) 100vw, 70vw"
                    className="service-image"
                  />
                </div>

                <div className="service-info">
                  <span className="service-number scroll-reveal">
                    {service.number}
                  </span>

                  <div>
                    <p className="service-english scroll-reveal">
                      {service.english}
                    </p>

                    <h3 className="scroll-reveal">
                      {service.title}
                    </h3>

                    <p className="service-description scroll-reveal">
                      {service.description}
                    </p>
                  </div>

                  <span className="service-arrow scroll-reveal">
                    ↗
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-top">
          <p className="section-label scroll-reveal">
            03 / PROJECTS
          </p>

          <h2 className="scroll-reveal">
            우리가 만든
            <br />
            공간들
          </h2>
        </div>

        <div className="portfolio-grid">
          <figure className="portfolio-item portfolio-large scroll-reveal">
            <div className="portfolio-image-wrap">
              <Image
                src="/IMG_2042.jpeg"
                alt="정감공간 아파트 인테리어 시공 사진"
                fill
                sizes="(max-width: 900px) 100vw, 65vw"
                className="portfolio-image"
              />
            </div>

            <figcaption>
              <span>APARTMENT</span>
              <strong>주거공간 인테리어</strong>
            </figcaption>
          </figure>

          <figure className="portfolio-item scroll-reveal">
            <div className="portfolio-image-wrap">
              <Image
                src="/IMG_2040.jpeg"
                alt="정감공간 상가 인테리어 시공 사진"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
                className="portfolio-image"
              />
            </div>

            <figcaption>
              <span>COMMERCIAL</span>
              <strong>상업공간 인테리어</strong>
            </figcaption>
          </figure>

          <figure className="portfolio-item scroll-reveal">
            <div className="portfolio-image-wrap">
              <Image
                src="/IMG_2043.jpeg"
                alt="정감공간 교육시설 리모델링 시공 사진"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
                className="portfolio-image"
              />
            </div>

            <figcaption>
              <span>REMODELING</span>
              <strong>교육·업무공간 리모델링</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-inner">
          <p className="section-label scroll-reveal">
            04 / TRUST
          </p>

          <h2 className="scroll-reveal">
            디자인뿐 아니라
            <br />
            시공의 기본까지 지킵니다.
          </h2>

          <div className="trust-grid">
            <div className="trust-item scroll-reveal">
              <span>01</span>
              <strong>실내건축공사업</strong>
              <p>
                정식 면허를 바탕으로 체계적인 시공을 진행합니다.
              </p>
            </div>

            <div className="trust-item scroll-reveal">
              <span>02</span>
              <strong>청년창업기업</strong>
              <p>
                새로운 감각과 책임감 있는 현장 운영을 추구합니다.
              </p>
            </div>

            <div className="trust-item scroll-reveal">
              <span>03</span>
              <strong>천안 중심 시공</strong>
              <p>
                천안 전 지역의 주거·상업·교육공간 시공을 상담합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-inner">
          <p className="section-label scroll-reveal">
            05 / CONTACT
          </p>

          <h2 className="scroll-reveal">
            새로운 공간을
            <br />
            준비하고 계신가요?
          </h2>

          <div className="contact-actions scroll-reveal">
            <Link href="/contact" className="contact-main-button">
              견적 문의하기
              <span>↗</span>
            </Link>

            <a href="tel:0414150410" className="contact-phone">
              041-415-0410
            </a>
          </div>
        </div>
      </section>

      <ScrollRevealScript />
    </>
  );
}

function ScrollRevealScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener("DOMContentLoaded", function () {
            const targets = document.querySelectorAll(".scroll-reveal");

            const observer = new IntersectionObserver(
              function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                  } else {
                    entry.target.classList.remove("is-visible");
                  }
                });
              },
              {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
              }
            );

            targets.forEach(function (target) {
              observer.observe(target);
            });
          });
        `,
      }}
    />
  );
}
