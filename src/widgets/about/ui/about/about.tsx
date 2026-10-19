import Image from "next/image";
import { Icon, type IconName } from "@/shared/ui/icon/icon";
import styles from "./about.module.scss";

const amenities: { icon: IconName; label: string }[] = [
  { icon: "cup", label: "Кофе с собой" },
  { icon: "sun", label: "Летняя веранда" },
  { icon: "bag", label: "Еда навынос" },
  { icon: "wifi", label: "Wi-Fi" },
  { icon: "card", label: "Оплата картой" },
];

export function About() {
  return (
    <section
      id="about"
      className={`container section ${styles.about}`}
      aria-labelledby="about-title"
    >
      <div className={styles.picture} data-reveal>
        <Image
          src="/images/cafe/yandex-3.webp"
          alt="Небольшой зал кофейни 7/17 с серыми стенами, деревянными столиками и мягкими креслами"
          fill
          sizes="(max-width: 700px) 100vw, 43vw"
        />
      </div>
      <div className={styles.copy} data-reveal>
        <h2 id="about-title">
          Кофе рядом.
          <br />
          Время для себя.
        </h2>
        <p>
          Небольшая кофейня с негромкой музыкой и столиками у окна.
          Можно неспешно позавтракать или встретиться с близкими.
        </p>
        <ul className={styles.amenities}>
          {amenities.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
