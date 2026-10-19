import Image from "next/image";
import type { MenuItem } from "../../model/menu";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./menu-card.module.scss";

export function MenuCard({
  item,
  onSelect,
  hidden = false,
}: {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  hidden?: boolean;
}) {
  return (
    <article className={styles.card} hidden={hidden}>
      <button
        type="button"
        className={styles.preview}
        onClick={() => onSelect(item)}
        aria-label={`Подробнее: ${item.name}, ${item.portion}, ${item.price} рублей`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 900px) 50vw, 25vw"
        />
        <span className={styles.portion}>{item.portion}</span>
        <span className={styles.plus}>
          <Icon name="plus" size={17} />
        </span>
      </button>
      <div className={styles.info}>
        <h3>
          <button type="button" onClick={() => onSelect(item)}>
            {item.name}
          </button>
        </h3>
        <span className={styles.price}>{item.price} ₽</span>
      </div>
    </article>
  );
}
