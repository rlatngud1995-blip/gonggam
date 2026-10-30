import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "구축 인테리어",
    english: "OLD HOUSE",
    description:
      "오래된 공간의 구조와 동선을 새롭게 정리해 더 편안하고 가치 있는 공간으로 완성합니다.",
    href: "/services/old-house",
    image: "/IMG_2041.jpeg",
  },
  {
    number: "02",
    title: "상가 인테리어",
    english: "COMMERCIAL",
    description:
      "업종과 브랜드의 특성을 고려해 실용성과 디자인을 함께 갖춘 상업공간을 만듭니다.",
    href: "/services/commercial",
    image: "/IMG_2040.jpeg",
  },
  {
    number: "03",
    title: "아파트 인테리어",
    english: "APARTMENT",
    description:
      "생활 동선과 공간 활용을 고려해 편안하고 완성도 높은 주거공간을 제안합니다.",
    href: "/services/apartment",
    image: "/IMG_2042.jpeg",
  },
  {
    number: "04",
    title: "학교 리모델링",
    english: "SCHOOL",
    description:
      "교육환경과 사용 목적을 고려해 안전하고 쾌적한 공간으로 개선합니다.",
    href: "/services/school",
    image: "/IMG_2043.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <section className="bw-hero">
        <div className="bw-container">
          <div className="bw-hero-top reveal">
            <span>JEONGGAM SPACE</span>
            <span>CHEONAN INTERIOR</span>
          </div>

          <div className="bw-hero-main">
            <p className="bw-eyebrow reveal">
              천안 인테리어 · 리모델링 전문
            </p>

            <h1 className="reveal">
              공간에 정감을 더하다.
            </h1>

            <p className="bw-hero-description reveal">
              공간의 목적과 사용하는 사람을 먼저 생각합니다.
              <br />
              설계부터 시공까지 꼼꼼하게 진행합니다.
            </p>

            <div className="bw-hero-actions reveal">
              <a href="tel:0414150410" className="bw-button bw-button-black">
                <span>전화 상담</span>
                <strong>041-415-0410</strong>
              </a>

              <Link
                href="/contact"
                className="bw-button bw-button-white"
              >
                <span>견적 문의</span>
                <strong>↗</strong>
              </Link>
            </div>
          </div>

          <div className="bw-hero-meta reveal">
            <span>실내건축공사업 면허 보유</span>
            <span>청년창업기업</span>
            <span>대표 정경훈</span>
          </div>
        </div>
      </section>

      <section className="bw-about">
        <div className="bw-container">
          <div className="bw-section-label reveal">
            <span>01</span>
            <p>ABOUT JEONGGAM SPACE</p>
          </div>

          <div className="bw-about-grid">
            <h2 className="reveal">
              좋은 공간은
              <br />
              사람을 이해하는 것에서
              <br />
              시작됩니다.
            </h2>

            <div className="bw-about-copy reveal">
              <p>
                정감공간은 단순히 보기 좋은 공간만을 만드는 것이 아니라
                사용하는 사람의 동선과 목적, 생활방식을 함께 고민합니다.
              </p>

              <p>
                주거공간부터 상업공간, 교육시설까지 공간에 맞는
                디자인과 시공을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bw-services" id="services">
        <div className="bw-container">
          <div className="bw-section-label reveal">
            <span>02</span>
            <p>SERVICES</p>
          </div>

          <div className="bw-services-title">
            <h2 className="reveal">
              시공 분야
            </h2>

            <p className="reveal">
              카테고리를 선택하면 상세 시공 안내를 확인할 수 있습니다.
            </p>
          </div>

          <div className="bw-service-grid">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.number}
                className="bw-service-card reveal"
              >
                <div className="bw-service-image">
                  <Image
                    src={service.image}
                    alt={`천안 ${service.title} 정감공간`}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />

                  <span className="bw-service-number">
                    {service.number}
                  </span>
                </div>

                <div className="bw-service-body">
                  <span className="bw-service-english">
                    {service.english}
                  </span>

                  <div className="bw-service-heading">
                    <h3>{service.title}</h3>
                    <span>↗</span>
                  </div>

                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bw-trust">
        <div className="bw-container">
          <div className="bw-section-label reveal">
            <span>03</span>
            <p>WHY JEONGGAM</p>
          </div>

          <div className="bw-trust-grid">
            <h2 className="reveal">
              기본을 지키는
              <br />
              인테리어 시공
            </h2>

            <div className="bw-trust-list">
              <div className="bw-trust-row reveal">
                <span>01</span>
                <strong>실내건축공사업 면허 보유</strong>
              </div>

              <div className="bw-trust-row reveal">
                <span>02</span>
                <strong>청년창업기업</strong>
              </div>

              <div className="bw-trust-row reveal">
                <span>03</span>
                <strong>천안 중심 시공</strong>
              </div>

              <div className="bw-trust-row reveal">
                <span>04</span>
                <strong>설계부터 시공까지 꼼꼼한 관리</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bw-bottom-contact">
        <div className="bw-container">
          <p className="reveal">
            공간에 대한 이야기를 시작해보세요.
          </p>

          <div className="bw-bottom-actions reveal">
            <a href="tel:0414150410">
              전화 상담
              <span>041-415-0410</span>
            </a>

            <Link href="/contact">
              견적 문의
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}

function ScrollReveal() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (() => {
            const start = () => {
              const elements = document.querySelectorAll(".reveal");

              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("active");
                    }
                  });
                },
                {
                  threshold: 0.1,
                  rootMargin: "0px 0px -5% 0px"
                }
              );

              elements.forEach((element) => {
                observer.observe(element);
              });
            };

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", start);
            } else {
              start();
            }
          })();
        `,
      }}
    />
  );
}
