import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://jeonggaminterior.com";

export const metadata: Metadata = {
  title: "정감공간 회사소개 | 천안·아산 인테리어 전문기업",

  description:
    "천안·아산 인테리어 전문 정감공간. 주거·상업·교육·공공공간 인테리어와 리모델링을 진행합니다.",

  alternates: {
    canonical: `${SITE_URL}/company`,
  },
};

export default function CompanyPage() {
  return (
    <>
      <section className="company-hero">
        <div className="company-container">
          <div className="company-kicker">
            <span>JEONGGAM SPACE</span>
            <span>ABOUT COMPANY</span>
          </div>

          <div className="company-hero-content">
            <p>천안·아산 인테리어 전문기업</p>

            <h1>
              공간에 정감을 더하는
              <br />
              정감공간
            </h1>

            <p className="company-description">
              정감공간은 천안과 아산을 중심으로 다양한 공간의
              인테리어와 리모델링을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="company-black">
        <div className="company-container">
          <div className="company-label">
            <span>01</span>
            <p>JEONGGAM SPACE</p>
          </div>

          <div className="company-intro-grid">
            <h2>
              디자인뿐 아니라
              <br />
              시공의 기본을
              <br />
              중요하게 생각합니다.
            </h2>

            <div>
              <p>
                공간은 단순히 보기 좋아야 하는 것이 아니라
                실제 사용하는 사람에게 편안하고 실용적이어야 합니다.
              </p>

              <p>
                정감공간은 공간의 구조와 목적, 동선과 사용 환경을
                확인하고 필요한 시공 방향을 함께 고민합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-info-section">
        <div className="company-container">
          <div className="company-label">
            <span>02</span>
            <p>COMPANY INFORMATION</p>
          </div>

          <div className="company-info-list">
            <div>
              <span>상호</span>
              <strong>정감공간</strong>
            </div>

            <div>
              <span>대표</span>
              <strong>정경훈</strong>
            </div>

            <div>
              <span>대표번호</span>

              <a href="tel:0414150410">
                041-415-0410
              </a>
            </div>

            <div>
              <span>주요 시공지역</span>

              <strong>
                천안 / 아산 전 지역
              </strong>
            </div>

            <div>
              <span>전문분야</span>

              <strong>
                아파트 · 빌라 · 상가 · 학교 · 복지시설 · 공공기관
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="company-cert-section">
        <div className="company-container">
          <div className="company-label">
            <span>03</span>
            <p>LICENSE & COMPANY</p>
          </div>

          <div className="company-cert-grid">
            <Link href="/company/license">
              <span>01</span>

              <div>
                <small>INTERIOR CONSTRUCTION LICENSE</small>

                <h2>
                  실내건축공사업 면허
                </h2>

                <p>
                  정감공간의 실내건축공사업 면허 관련 안내를
                  확인할 수 있습니다.
                </p>
              </div>

              <strong>↗</strong>
            </Link>

            <Link href="/company/youth">
              <span>02</span>

              <div>
                <small>YOUTH STARTUP COMPANY</small>

                <h2>
                  청년창업기업
                </h2>

                <p>
                  정감공간의 청년창업기업 관련 안내를
                  확인할 수 있습니다.
                </p>
              </div>

              <strong>↗</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="company-contact-section">
        <div className="company-container">
          <p>CONTACT</p>

          <h2>
            천안·아산 인테리어 상담이
            <br />
            필요하신가요?
          </h2>

          <div className="company-contact-actions">
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
