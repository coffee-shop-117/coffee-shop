import Image from "next/image";
import Link from "next/link";
import { site } from "@/shared/config/site";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.main}`}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Кофейня 7/17 — на главную"
        >
          <Image
            src="/images/logo.webp"
            alt="Восстановленный логотип кофейни 7/17: чашка кофе и надпись «Буду кофе»"
            width={90}
            height={90}
          />
          <span>7/17 Кофейня</span>
        </Link>
        <nav aria-label="Навигация в подвале">
          <Link href="/#about">О нас</Link>
          <Link href="/menu">Меню</Link>
          <Link href="/#photos">Атмосфера</Link>
          <Link href="/#contacts">Контакты</Link>
        </nav>
        <a className={styles.top} href="#top" aria-label="Наверх">
          <Icon name="arrow" style={{ transform: "rotate(-90deg)" }} />
        </a>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
