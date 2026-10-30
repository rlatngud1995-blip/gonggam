"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    number: "01",
    title: "홈",
    english: "HOME",
    href: "/",
  },
  {
    number: "02",
    title: "회사소개",
    english: "ABOUT",
    href: "/company",
  },
  {
    number: "03",
    title: "구축 인테리어",
    english: "OLD HOUSE",
    href: "/services/old-house",
  },
  {
    number: "04",
    title: "상가 인테리어",
    english: "COMMERCIAL",
    href: "/services/commercial",
  },
  {
    number: "05",
    title: "아파트 인테리어",
    english: "APARTMENT",
    href: "/services/apartment",
  },
  {
    number: "06",
    title: "학교 리모델링",
    english: "SCHOOL",
    href: "/services/school",
  },
  {
    number: "07",
    title: "견적 문의",
    english: "CONTACT",
    href: "/contact",
  },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;

    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={`jg-menu-button ${open ? "open" : ""}`}
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        type="button"
        className={`jg-menu-overlay ${open ? "show" : ""}`}
        aria-label="메뉴 닫기"
        onClick={() => setOpen(false)}
      />

      <aside
        className={`jg-menu-panel ${open ? "show" : ""}`}
        aria-hidden={!open}
      >
        <div className="jg-menu-panel-inner">
          <div className="jg-menu-heading">
            <span>JEONGGAM SPACE</span>
            <span>MENU</span>
          </div>

          <nav className="jg-menu-list">
            {menuItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="jg-menu-item"
                onClick={() => setOpen(false)}
              >
                <span className="jg-menu-number">
                  {item.number}
                </span>

                <div className="jg-menu-title">
                  <strong>{item.title}</strong>
                  <small>{item.english}</small>
                </div>

                <span className="jg-menu-arrow">
                  ↗
                </span>
              </Link>
            ))}
          </nav>

          <div className="jg-menu-contact">
            <span>CONTACT</span>

            <a href="tel:0414150410">
              041-415-0410
            </a>

            <p>
              천안 인테리어 · 리모델링
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
