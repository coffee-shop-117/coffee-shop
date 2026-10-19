import { site } from "@/shared/config/site";
import { Button } from "@/shared/ui/button/button";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./hero.module.scss";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.main}`}>
        <div className={styles.copy}>
          <p className={styles.intro}>
            Кофейня 7/17
          </p>
          <h1 id="hero-title">
            <span className="sr-only">
              Кофейня 7/17 на Тайнинской в Москве.{" "}
            </span>
            Буду кофе.
            <br />
            Буду здесь.
          </h1>
          <p className={styles.description}>
            Кофе, завтраки и десерты на Тайнинской.
            Заходите на чашку или берите с собой.
          </p>
          <div className={styles.actions}>
            <Button href="#menu">Посмотреть меню</Button>
            <a
              className={styles.route}
              href={site.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Как нас найти <Icon name="arrow-up" size={17} />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className={`container ${styles.bottom}`}>
        <a href="#contacts">
          <Icon name="pin" size={18} />
          <span>{site.shortAddress}</span>
          <Icon name="arrow-up" size={15} />
        </a>
        <span className={styles.hours}>
          Каждый день <span>{site.hours}</span>
        </span>
        <a
          href={site.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.rating}
        >
          <span>5.0</span>
          <span className={styles.stars} aria-label="5 из 5">
            ★★★★★
          </span>
          <span>на Яндекс Картах</span>
        </a>
      </div>
    </section>
  );
}
