"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    title: "주거공간",
    english: "LIVING SPACE",
    href: "/services/apartment",
  },
  {
    number: "04",
    title: "상업공간",
    english: "COMMERCIAL PLACE",
    href: "/services/commercial",
  },
  {
    number: "05",
    title: "교육기관",
    english: "EDUCATION SPACE",
    href: "/services/school",
  },
  {
    number: "06",
    title: "공공기관",
    english: "PUBLIC SECTOR",
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
        aria-label="메뉴 닫기"
        className={`jg-menu-overlay ${open ? "show" : ""}`}
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
                key={`${item.number}-${item.title}`}
                href={item.href}
                className="jg-menu-item"
                onClick={() => setOpen(false)}
              >
                <span className="jg-menu-number">
                  {item.number}
                </span>

                <span className="jg-menu-title">
                  <strong>{item.title}</strong>
                  <small>{item.english}</small>
                </span>

                <span className="jg-menu-arrow">↗</span>
              </Link>
            ))}
          </nav>

          <div className="jg-menu-contact">
            <span>CONTACT</span>

            <a href="tel:0414150410">
              041-415-0410
            </a>

            <p>천안 · 아산 전 지역</p>
          </div>
        </div>
      </aside>
    </>
  );
}
