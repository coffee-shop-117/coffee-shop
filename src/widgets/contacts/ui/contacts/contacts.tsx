import { site } from "@/shared/config/site";
import { Button } from "@/shared/ui/button/button";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./contacts.module.scss";

export function Contacts() {
  return (
    <section
      id="contacts"
      className={styles.section}
      aria-labelledby="contacts-title"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <h2 id="contacts-title">
            Мы рядом.
            <br />
            Заходите.
          </h2>
          <address>
            <p>
              Москва, Тайнинская улица,
              <br />
              9, корпус 1
            </p>
            <a href={site.phoneHref}>{site.phone}</a>
          </address>
          <p className={styles.hours}>
            Ежедневно <strong>{site.hours}</strong>
          </p>
          <div className={styles.actions}>
            <Button
              href={site.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Построить маршрут
            </Button>
            <a href={site.telegram} target="_blank" rel="noopener noreferrer">
              Мы в Telegram <Icon name="arrow-up" size={14} />
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src={site.mapEmbed}
            title="Кофейня 7/17 на Яндекс Картах — Москва, Тайнинская улица, 9, корпус 1"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <a
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <Icon name="pin" size={18} /> Кофейня 7/17{" "}
            <Icon name="arrow-up" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
