
"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import Link from "next/link";

const PHONE = "0414150410";

const categories = [
  "아파트 인테리어",
  "구축 인테리어",
  "상가 인테리어",
  "학교 리모델링",
  "기타",
];

const locations = [
  "천안 서북구",
  "천안 동남구",
  "기타 지역",
];

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "16px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 5,
  color: "#111",
  fontSize: 15,
  boxSizing: "border-box",
};

const sectionStyle: CSSProperties = {
  padding: "28px 0",
  borderBottom: "1px solid #e8e8e8",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: 17,
  fontWeight: 600,
  marginBottom: 18,
};

export default function ContactPage() {
  const [category, setCategory] = useState(
    "아파트 인테리어"
  );
  const [location, setLocation] = useState(
    "천안 서북구"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "[정감공간 인테리어 견적문의]",
      "",
      `시공 분야: ${category}`,
      `시공 지역: ${location}`,
      `고객명: ${name.trim()}`,
      `연락처: ${phone.trim()}`,
      `희망 공사 시기: ${schedule.trim() || "협의"}`,
      "",
      "[시공 요청사항]",
      details.trim() || "별도 요청사항 없음",
      "",
      "홈페이지를 통해 문의드립니다.",
    ].join("\n");

    const smsUrl =
      `sms:${PHONE}?body=${encodeURIComponent(message)}`;

    window.location.href = smsUrl;
  }

  return (
    <main style={{ background: "#f7f7f7" }}>
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "100px 20px 85px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 3,
            color: "#aaa",
            marginBottom: 20,
          }}
        >
          JEONGGAM SPACE
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 55px)",
            letterSpacing: "-0.06em",
            marginBottom: 20,
          }}
        >
          인테리어 견적문의
        </h1>

        <p
          style={{
            color: "#bbb",
            lineHeight: 1.9,
          }}
        >
          새로운 공간을 위한 첫 번째 상담
          <br />
          아래 내용을 작성하고 문자로 문의해주세요.
        </p>
      </section>

      <section
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "45px 18px 100px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "clamp(24px, 5vw, 50px)",
            border: "1px solid #eee",
            borderRadius: 8,
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: "#888",
            }}
          >
            PROJECT INQUIRY
          </p>

          <h2
            style={{
              fontSize: 26,
              margin: "12px 0 10px",
            }}
          >
            견적 상담 신청서
          </h2>

          <p
            style={{
              color: "#777",
              fontSize: 13,
            }}
          >
            * 표시는 필수 입력 항목입니다.
          </p>

          <div style={sectionStyle}>
            <label style={labelStyle}>
              01. 시공 분야 *
            </label>

            {categories.map((item) => (
              <label
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                  style={{ accentColor: "#111" }}
                />
                {item}
              </label>
            ))}
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>
              02. 시공 예정 지역 *
            </label>

            {locations.map((item) => (
              <label
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="location"
                  checked={location === item}
                  onChange={() => setLocation(item)}
                  style={{ accentColor: "#111" }}
                />
                {item}
              </label>
            ))}
          </div>

          <div style={sectionStyle}>
            <label
              htmlFor="customer-name"
              style={labelStyle}
            >
              03. 고객님 성함 *
            </label>

            <input
              id="customer-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="성함을 입력해주세요"
              maxLength={50}
              required
              style={fieldStyle}
            />
          </div>

          <div style={sectionStyle}>
            <label
              htmlFor="customer-phone"
              style={labelStyle}
            >
              04. 연락처 *
            </label>

            <input
              id="customer-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000"
              pattern="[0-9+\-\s]{9,20}"
              maxLength={20}
              required
              style={fieldStyle}
            />
          </div>

          <div style={sectionStyle}>
            <label
              htmlFor="schedule"
              style={labelStyle}
            >
              05. 희망 공사 시기
            </label>

            <input
              id="schedule"
              type="text"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              placeholder="예: 2026년 12월 / 일정 협의"
              maxLength={100}
              style={fieldStyle}
            />
          </div>

          <div style={sectionStyle}>
            <label
              htmlFor="details"
              style={labelStyle}
            >
              06. 시공 요청사항
            </label>

            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={
                "평수, 공사 범위, 희망 디자인, 예산 등을 자유롭게 작성해주세요."
              }
              rows={6}
              maxLength={1000}
              style={{
                ...fieldStyle,
                resize: "vertical",
                lineHeight: 1.8,
              }}
            />
          </div>

          <div
            style={{
              marginTop: 30,
              padding: 18,
              background: "#f7f7f7",
              fontSize: 13,
              color: "#666",
              lineHeight: 1.9,
            }}
          >
            입력한 내용은 서버에 저장되지 않습니다.
            <br />
            버튼을 누르면 휴대폰 문자 앱이 열리며,
            고객님이 직접 전송해야 합니다.
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: 25,
              padding: 20,
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            문자로 견적문의 보내기 ↗
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#888",
              fontSize: 12,
              marginTop: 20,
              lineHeight: 1.9,
            }}
          >
            정감공간 · 대표 정경훈
            <br />
            전화 상담 041-415-0410
          </p>

          <Link
            href="/"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: 25,
              fontSize: 13,
              color: "#777",
            }}
          >
            ← 홈페이지로 돌아가기
          </Link>
        </form>
      </section>
    </main>
  );
}
