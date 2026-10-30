import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

export const metadata: Metadata = {
  title: "천안 청년창업기업 인테리어 업체 | 정감공간",
  description:
    "천안 청년창업기업 정감공간. 구축·아파트·상가 인테리어와 학교 리모델링을 진행하는 천안 인테리어 전문기업.",
  keywords: [
    "천안 청년창업기업",
    "천안 청년 창업기업",
    "천안 청년기업",
    "천안 인테리어 청년기업",
    "천안 인테리어 업체",
  ],
  alternates: {
    canonical: `${SITE_URL}/company/youth`,
  },
};

export default function YouthCompanyPage() {
  return (
    <>
      <section className="company-sub-hero">
        <div className="company-container">
          <div className="company-kicker">
            <span>JEONGGAM SPACE</span>
            <span>YOUTH STARTUP COMPANY</span>
          </div>

          <div className="company-sub-title">
            <p>천안 인테리어 전문기업</p>

            <h1>
              천안
              <br />
              청년창업기업
            </h1>

            <p>
              정감공간은 새로운 공간 감각과 책임감 있는
              현장 관리를 추구하는 청년창업기업입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="company-black">
        <div className="company-container">
          <div className="company-label company-label-light">
            <span>01</span>
            <p>OUR DIRECTION</p>
          </div>

          <div className="company-intro-grid">
            <h2>
              새로운 감각과
              <br />
              책임감 있는 시공
            </h2>

            <div>
              <p>
                빠르게 변하는 공간 디자인과 생활방식을 이해하면서도
                현장에서 지켜야 할 기본은 놓치지 않습니다.
              </p>

              <p>
                천안의 주거공간, 상업공간, 교육공간을 중심으로
                공간의 목적에 맞는 인테리어와 리모델링을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-info-section">
        <div className="company-container">
          <div className="company-label">
            <span>02</span>
            <p>JEONGGAM SPACE</p>
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
              <span>지역</span>
              <strong>천안 전 지역</strong>
            </div>

            <div>
              <span>분야</span>
              <strong>인테리어 · 리모델링</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="company-contact-section">
        <div className="company-container">
          <p>CONTACT</p>

          <h2>
            공간에 대한 이야기를
            <br />
            시작해보세요.
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
