import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "구축 인테리어",
    english: "OLD HOUSE RENOVATION",
    description:
      "오래된 공간의 구조와 동선을 다시 정리해 새로운 생활공간으로 완성합니다.",
    href: "/services/old-house",
    image: "/IMG_2041.jpeg",
  },
  {
    number: "02",
    title: "상가 인테리어",
    english: "COMMERCIAL INTERIOR",
    description:
      "업종과 브랜드의 특성을 고려해 실용성과 디자인을 함께 갖춘 상업공간을 만듭니다.",
    href: "/services/commercial",
    image: "/IMG_2040.jpeg",
  },
  {
    number: "03",
    title: "아파트 인테리어",
    english: "APARTMENT INTERIOR",
    description:
      "생활 동선과 공간 활용을 고려해 편안하고 완성도 높은 주거공간을 제안합니다.",
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
      <section className="main-intro">
        <div className="main-intro-inner">
          <div className="main-intro-top">
            <p className="intro-brand reveal-item">
              JEONGGAM SPACE
            </p>

            <p className="intro-location reveal-item">
              CHEONAN · INTERIOR · REMODELING
            </p>
          </div>

          <div className="main-intro-title">
            <h1>
              <span className="intro-line reveal-item">
                공간에
              </span>
              <span className="intro-line reveal-item">
                정감을 더하다.
              </span>
            </h1>
          </div>

          <div className="main-intro-bottom reveal-item">
            <p>
              정감공간은 공간의 목적과
              <br />
              사용하는 사람을 먼저 생각합니다.
            </p>

            <div>
              <span>천안 인테리어 · 리모델링</span>
              <span>실내건축공사업 면허 보유</span>
            </div>
          </div>

          <div className="scroll-guide reveal-item">
            <span>SCROLL</span>
            <i />
          </div>
        </div>
      </section>

      <section className="home-philosophy">
        <div className="home-philosophy-inner">
          <p className="section-small reveal-item">
            01 / PHILOSOPHY
          </p>

          <h2 className="reveal-item">
            좋은 공간은
            <br />
            사람을 이해하는 것에서
            <br />
            시작됩니다.
          </h2>

          <div className="philosophy-description reveal-item">
            <p>
              단순히 보기 좋은 공간을 만드는 것을 넘어
              생활 방식과 공간의 목적, 동선과 사용성을 함께 고민합니다.
            </p>

            <p>
              정감공간은 설계부터 시공까지 꼼꼼하게 진행하며
              오래 머물고 싶은 공간을 완성합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="home-services" id="services">
        <div className="home-services-header">
          <p className="section-small reveal-item">
            02 / SERVICES
          </p>

          <div className="services-title-row">
            <h2 className="reveal-item">
              공간에 맞는
              <br />
              시공을 제안합니다.
            </h2>

            <p className="reveal-item">
              카테고리를 선택하면
              <br />
              상세 시공 안내를 확인할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="category-list">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="category-card reveal-item"
            >
              <div className="category-photo">
                <Image
                  src={service.image}
                  alt={`천안 ${service.title} 정감공간`}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="category-photo-image"
                />

                <div className="category-photo-overlay" />

                <span className="category-photo-number">
                  {service.number}
                </span>
              </div>

              <div className="category-content">
                <div>
                  <p className="category-english">
                    {service.english}
                  </p>

                  <h3>{service.title}</h3>

                  <p className="category-description">
                    {service.description}
                  </p>
                </div>

                <div className="category-link-text">
                  <span>VIEW DETAIL</span>
                  <strong>↗</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-trust">
        <div className="home-trust-inner">
          <p className="section-small reveal-item">
            03 / JEONGGAM SPACE
          </p>

          <h2 className="reveal-item">
            디자인뿐 아니라
            <br />
            시공의 기본까지.
          </h2>

          <div className="trust-items">
            <div className="trust-box reveal-item">
              <span>01</span>
              <h3>실내건축공사업</h3>
              <p>
                정식 면허를 바탕으로
                체계적인 시공을 진행합니다.
              </p>
            </div>

            <div className="trust-box reveal-item">
              <span>02</span>
              <h3>청년창업기업</h3>
              <p>
                새로운 감각과 책임감 있는
                현장 운영을 추구합니다.
              </p>
            </div>

            <div className="trust-box reveal-item">
              <span>03</span>
              <h3>천안 중심 시공</h3>
              <p>
                주거·상업·교육 공간을
                천안 전 지역에서 상담합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="home-contact-inner">
          <p className="section-small reveal-item">
            04 / CONTACT
          </p>

          <h2 className="reveal-item">
            새로운 공간을
            <br />
            준비하고 계신가요?
          </h2>

          <div className="home-contact-buttons reveal-item">
            <Link href="/contact" className="estimate-button">
              <span>견적 문의하기</span>
              <strong>↗</strong>
            </Link>

            <a
              href="tel:0414150410"
              className="home-phone"
            >
              041-415-0410
            </a>
          </div>
        </div>
      </section>

      <ScrollAnimation />
    </>
  );
}

function ScrollAnimation() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll(".reveal-item");

            const observer = new IntersectionObserver(
              function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                  }
                });
              },
              {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
              }
            );

            elements.forEach(function (element) {
              observer.observe(element);
            });
          });
        `,
      }}
    />
  );
}
