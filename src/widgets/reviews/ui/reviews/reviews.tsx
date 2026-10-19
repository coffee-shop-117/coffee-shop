import { site } from "@/shared/config/site";
import { Icon } from "@/shared/ui/icon/icon";
import { reviews } from "../../model/reviews";
import styles from "./reviews.module.scss";

export function Reviews() {
  return (
    <section
      id="reviews"
      className={styles.section}
      aria-labelledby="reviews-title"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro} data-reveal>
          <h2 id="reviews-title">Отзывы гостей</h2>
          <div className={styles.rating}>
            <strong>5.0</strong>
            <div>
              <span aria-label="5 звёзд из 5">★★★★★</span>
              <p>на Яндекс Картах</p>
            </div>
          </div>
          <a href={site.reviews} target="_blank" rel="noopener noreferrer">
            Читать все отзывы <Icon name="arrow-up" size={16} />
          </a>
        </div>
        <div className={styles.cards}>
          {reviews.map((review) => (
            <figure key={review.author} className={styles.card} data-reveal>
              <div className={styles.cardTop}>
                <span className={styles.avatar}>{review.initial}</span>
                <div>
                  <figcaption>{review.author}</figcaption>
                  <span>{review.date}</span>
                </div>
                <span className={styles.ya} aria-label="Яндекс">
                  Я
                </span>
              </div>
              <span className={styles.stars} aria-label="5 из 5">
                ★★★★★
              </span>
              <blockquote>«{review.text}»</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
