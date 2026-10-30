import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "구축 인테리어",
    english: "OLD HOUSE RENOVATION",
    description:
      "오래된 공간의 구조와 생활 동선을 다시 설계해 새로운 공간으로 완성합니다.",
    href: "/services/old-house",
    image: "/IMG_2041.jpeg",
  },
  {
    number: "02",
    title: "상가 인테리어",
    english: "COMMERCIAL INTERIOR",
    description:
      "업종과 브랜드의 특성을 고려해 실용성과 디자인을 갖춘 상업공간을 만듭니다.",
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
      {/* =========================
          첫 화면 - 사진 없음
      ========================== */}
      <section className="jg-hero">
        <div className="jg-hero-inner">
          <div className="jg-hero-top reveal">
            <span>JEONGGAM SPACE</span>
            <span>CHEONAN · INTERIOR</span>
          </div>

          <div className="jg-hero-title">
            <h1>
              <span className="reveal">공간에</span>
              <span className="reveal">정감을 더하다.</span>
            </h1>
          </div>

          <div className="jg-hero-bottom reveal">
            <p>
              공간을 이해하고
              <br />
              가치를 완성합니다.
            </p>

            <p>
              천안 인테리어 · 리모델링
              <br />
              실내건축공사업 면허 보유
            </p>
          </div>

          <div className="jg-scroll reveal">
            <span>SCROLL</span>
            <i />
          </div>
        </div>
      </section>

      {/* =========================
          소개
      ========================== */}
      <section className="jg-intro">
        <div className="jg-container">
          <span className="jg-label reveal">
            01 / PHILOSOPHY
          </span>

          <h2 className="reveal">
            좋은 공간은
            <br />
            사람을 이해하는 것에서
            <br />
            시작됩니다.
          </h2>

          <div className="jg-intro-text reveal">
            <p>
              정감공간은 단순히 보기 좋은 공간을 만드는 것에
              그치지 않습니다.
            </p>

            <p>
              사용하는 사람의 생활과 목적, 동선과 공간의
              특성을 고려해 오래 머물고 싶은 공간을 만듭니다.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          카테고리
      ========================== */}
      <section className="jg-services" id="services">
        <div className="jg-container">
          <span className="jg-label reveal">
            02 / SERVICES
          </span>

          <div className="jg-service-heading">
            <h2 className="reveal">
              정감공간의
              <br />
              시공 분야
            </h2>

            <p className="reveal">
              원하는 시공 분야를 선택하면
              <br />
              자세한 내용을 확인할 수 있습니다.
            </p>
          </div>

          <div className="jg-category-list">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.number}
                className="jg-category reveal"
              >
                <div className="jg-category-image">
                  <Image
                    src={service.image}
                    alt={`천안 ${service.title} 정감공간 시공 사례`}
                    fill
                    sizes="(max-width: 800px) 100vw, 55vw"
                  />

                  <span className="jg-category-number">
                    {service.number}
                  </span>
                </div>

                <div className="jg-category-info">
                  <div>
                    <span className="jg-category-english">
                      {service.english}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="jg-view">
                    <span>VIEW DETAIL</span>
                    <strong>↗</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          신뢰
      ========================== */}
      <section className="jg-trust">
        <div className="jg-container">
          <span className="jg-label reveal">
            03 / ABOUT
          </span>

          <h2 className="reveal">
            디자인뿐 아니라
            <br />
            시공의 기본까지.
          </h2>

          <div className="jg-trust-grid">
            <div className="jg-trust-card reveal">
              <span>01</span>
              <h3>실내건축공사업</h3>
              <p>
                정식 면허를 바탕으로 체계적인 시공을 진행합니다.
              </p>
            </div>

            <div className="jg-trust-card reveal">
              <span>02</span>
              <h3>청년창업기업</h3>
              <p>
                새로운 감각과 책임감 있는 현장 운영을 추구합니다.
              </p>
            </div>

            <div className="jg-trust-card reveal">
              <span>03</span>
              <h3>천안 중심 시공</h3>
              <p>
                천안 전 지역의 주거·상업·교육공간을 상담합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          문의
      ========================== */}
      <section className="jg-contact">
        <div className="jg-container">
          <span className="jg-label reveal">
            04 / CONTACT
          </span>

          <h2 className="reveal">
            새로운 공간을
            <br />
            준비하고 계신가요?
          </h2>

          <div className="jg-contact-buttons reveal">
            <Link href="/contact">
              견적 문의하기
              <span>↗</span>
            </Link>

            <a href="tel:0414150410">
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
          (() => {
            const start = () => {
              const elements = document.querySelectorAll(".reveal");

              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("visible");
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
