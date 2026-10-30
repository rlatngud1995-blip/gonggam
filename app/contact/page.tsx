
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: 5,
  background: "#fff",
  color: "#111",
  fontSize: 15,
  outlineColor: "#111",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 17,
  fontWeight: 600,
  marginBottom: 18,
  letterSpacing: "-0.03em",
};

const sectionStyle: React.CSSProperties = {
  padding: "30px 0",
  borderBottom: "1px solid #e8e8e8",
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
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!agreed) {
      setError("개인정보 수집·이용 동의가 필요합니다.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          location,
          name: name.trim(),
          phone: phone.trim(),
          schedule: schedule.trim(),
          details: details.trim(),
          agreed,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "접수 중 오류가 발생했습니다."
        );
      }

      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "잠시 후 다시 시도해주세요."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main
        style={{
          minHeight: "75vh",
          display: "grid",
          placeItems: "center",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 52, marginBottom: 20 }}>
            ✓
          </div>
          <h1 style={{ fontSize: 34, marginBottom: 18 }}>
            견적문의가 접수되었습니다.
          </h1>
          <p style={{ color: "#666", lineHeight: 2 }}>
            정감공간에 문의해 주셔서 감사합니다.
            <br />
            내용을 확인한 후 연락드리겠습니다.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 30,
              padding: "15px 30px",
              background: "#111",
              color: "#fff",
            }}
          >
            홈페이지로 돌아가기
          </Link>
        </div>
      </main>
    );
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
            letterSpacing: 3,
            fontSize: 12,
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

        <p style={{ color: "#bbb", lineHeight: 1.9 }}>
          새로운 공간을 위한 첫 번째 상담
          <br />
          아래 항목을 작성해 주세요.
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

          <p style={{ color: "#777", fontSize: 13 }}>
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
                  gap: 12,
                  alignItems: "center",
                  padding: "13px 0",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={() => setCategory(item)}
                  required
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
                  gap: 12,
                  alignItems: "center",
                  padding: "13px 0",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="location"
                  value={item}
                  checked={location === item}
                  onChange={() => setLocation(item)}
                  required
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
              placeholder="성함을 입력해 주세요"
              maxLength={50}
              required
              style={inputStyle}
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
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000"
              pattern="[0-9+\-\s]{9,20}"
              title="전화번호를 정확히 입력해 주세요."
              maxLength={20}
              required
              style={inputStyle}
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
              style={inputStyle}
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
                "평수, 공사 범위, 희망 디자인, 예산 등을 자유롭게 작성해 주세요."
              }
              rows={6}
              maxLength={3000}
              style={{
                ...inputStyle,
                resize: "vertical",
                lineHeight: 1.8,
              }}
            />
          </div>

          <div style={sectionStyle}>
            <label style={labelStyle}>
              07. 개인정보 수집·이용 동의 *
            </label>

            <div
              style={{
                padding: 20,
                background: "#f7f7f7",
                color: "#555",
                fontSize: 13,
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              <strong>수집·이용 목적</strong>
              <p>인테리어 견적 상담 및 고객 연락</p>

              <strong>수집 항목</strong>
              <p>
                성함, 연락처, 시공 분야, 지역,
                희망 시기 및 문의 내용
              </p>

              <strong>보유 기간</strong>
              <p>
                상담 종료 후 1년 또는 동의 철회 시까지
                (법령상 보존 의무가 있는 경우 제외)
              </p>

              <p>
                동의를 거부할 수 있으나,
                동의하지 않으면 온라인 견적문의
                접수가 제한됩니다.
              </p>
            </div>

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                cursor: "pointer",
                lineHeight: 1.7,
              }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) =>
                  setAgreed(e.target.checked)
                }
                required
                style={{
                  marginTop: 5,
                  accentColor: "#111",
                }}
              />
              개인정보 수집 및 이용에 동의합니다.
              (필수)
            </label>
          </div>

          {error && (
            <p
              role="alert"
              style={{
                color: "#b42318",
                fontSize: 14,
                marginTop: 20,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              width: "100%",
              padding: 20,
              background:
                status === "sending" ? "#777" : "#111",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              marginTop: 35,
              fontSize: 16,
              fontWeight: 600,
              cursor:
                status === "sending"
                  ? "wait"
                  : "pointer",
            }}
          >
            {status === "sending"
              ? "접수 중..."
              : "견적문의 제출하기 ↗"}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#888",
              fontSize: 12,
              lineHeight: 1.8,
              marginTop: 18,
            }}
          >
            전화 상담 041-415-0410
          </p>
        </form>
      </section>
    </main>
  );
}
