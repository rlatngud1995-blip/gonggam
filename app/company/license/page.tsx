import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gonggam.vercel.app";

export const metadata: Metadata = {
  title: "천안 실내건축공사업 면허 인테리어 업체 | 정감공간",
  description:
    "천안 실내건축공사업 면허 보유 인테리어 업체 정감공간. 아파트·구축·상가 인테리어와 학교 리모델링 상담.",
  keywords: [
    "천안 실내건축면허",
    "천안 실내건축공사업",
    "천안 실내건축공사업 면허",
    "천안 인테리어 면허업체",
    "천안 면허 인테리어 업체",
  ],
  alternates: {
    canonical: `${SITE_URL}/company/license`,
  },
};

export default function LicensePage() {
  return (
    <>
      <section className="company-sub-hero">
        <div className="company-container">
          <div className="company-kicker">
            <span>JEONGGAM SPACE</span>
            <span>LICENSE</span>
          </div>

          <div className="company-sub-title">
            <p>천안 인테리어 업체</p>

            <h1>
              실내건축공사업
              <br />
              면허 보유
            </h1>

            <p>
              정감공간은 실내건축공사업 면허를 바탕으로
              인테리어와 리모델링 시공을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="company-black">
        <div className="company-container">
          <div className="company-label company-label-light">
            <span>01</span>
            <p>INTERIOR CONSTRUCTION</p>
          </div>

          <div className="company-intro-grid">
            <h2>
              시공의 기본을
              <br />
              중요하게 생각합니다.
            </h2>

            <div>
              <p>
                인테리어는 디자인뿐 아니라 공사 과정과 현장 관리,
                마감의 완성도까지 함께 확인해야 합니다.
              </p>

              <p>
                정감공간은 구축 인테리어, 아파트 인테리어,
                상가 인테리어와 학교 리모델링 등
                다양한 실내공간의 상담을 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-info-section">
        <div className="company-container">
          <div className="company-label">
            <span>02</span>
            <p>SERVICE</p>
          </div>

          <div className="company-info-list">
            <div>
              <span>01</span>
              <strong>구축 인테리어</strong>
            </div>

            <div>
              <span>02</span>
              <strong>아파트 인테리어</strong>
            </div>

            <div>
              <span>03</span>
              <strong>상가 인테리어</strong>
            </div>

            <div>
              <span>04</span>
              <strong>학교 리모델링</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="company-contact-section">
        <div className="company-container">
          <p>CHEONAN INTERIOR</p>

          <h2>
            천안 인테리어
            <br />
            상담 문의
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
