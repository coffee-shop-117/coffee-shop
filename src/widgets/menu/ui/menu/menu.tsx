import { MenuBrowser } from "@/features/menu-browser/ui/menu-browser/menu-browser";
import styles from "./menu.module.scss";

export function Menu({ full = false }: { full?: boolean }) {
  return (
    <section
      id="menu"
      className={`container section ${styles.section}`}
      aria-labelledby="menu-title"
    >
      <div className={styles.heading} data-reveal>
        <div>
          {full ? (
            <h1 id="menu-title">Меню кофейни 7/17</h1>
          ) : (
            <h2 id="menu-title">Меню</h2>
          )}
        </div>
      </div>
      <MenuBrowser expanded={full} />
    </section>
  );
}
