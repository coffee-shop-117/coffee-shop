"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/shared/config/site";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./header.module.scss";

const links = [
  { href: "/#about", label: "О нас" },
  { href: "/#menu", label: "Меню" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#photos", label: "Атмосфера" },
  { href: "/#contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Кофейня 7/17 — на главную"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.webp"
            alt=""
            width={58}
            height={58}
            loading="eager"
          />
          <span>
            7/17
          </span>
        </Link>
        <nav
          className={styles.navigation}
          id="main-navigation"
          aria-label="Основная навигация"
          data-open={open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a className={styles.phone} href={site.phoneHref}>
          {site.phone}
        </a>
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Закрыть навигацию" : "Открыть навигацию"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
