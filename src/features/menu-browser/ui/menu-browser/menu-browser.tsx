"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { categories, menu, type MenuItem } from "@/entities/menu/model/menu";
import { MenuCard } from "@/entities/menu/ui/menu-card/menu-card";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./menu-browser.module.scss";

const featured = [
  "dvoynoy-espresso",
  "raf-300ml",
  "matcha-latte-300ml",
  "chizkeyk-mango",
  "syrniki",
  "kruassan-s-mindalnym-kremom",
  "kish-utka-persik-mindal-malina",
  "kanele",
];
const sortedMenu = [...menu].sort((a, b) => {
  const ai = featured.indexOf(a.id),
    bi = featured.indexOf(b.id);
  return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
});

export function MenuBrowser({ expanded = false }: { expanded?: boolean }) {
  const [category, setCategory] = useState("all");
  const [all, setAll] = useState(expanded);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = sortedMenu.filter(
    (item) => category === "all" || item.category === category,
  );
  const visible = new Set(
    (all || category !== "all" ? filtered : filtered.slice(0, 8)).map(
      (item) => item.id,
    ),
  );
  function select(item: MenuItem) {
    setSelected(item);
    dialog.current?.showModal();
  }

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Категории меню">
        {categories.map((item) => (
          <button
            type="button"
            aria-pressed={category === item.id}
            key={item.id}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Показано {visible.size} позиций
      </p>
      <div className={styles.grid}>
        {sortedMenu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            hidden={!visible.has(item.id)}
            onSelect={select}
          />
        ))}
      </div>
      {category === "all" && !all ? (
        <div className={styles.more}>
          <button type="button" onClick={() => setAll(true)}>
            Показать всё меню
            <Icon name="arrow" size={18} />
          </button>
        </div>
      ) : null}
      <p className={styles.note}>
        Наличие уточняйте у бариста.
      </p>
      <dialog
        className={styles.dialog}
        ref={dialog}
        aria-labelledby="menu-item-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Закрыть карточку блюда"
          onClick={() => dialog.current?.close()}
        >
          <Icon name="close" />
        </button>
        {selected ? (
          <>
            <div className={styles.dialogImage}>
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                sizes="(max-width: 600px) 90vw, 560px"
              />
            </div>
            <div className={styles.dialogCopy}>
              <p>{selected.portion}</p>
              <h2 id="menu-item-title">{selected.name}</h2>
              <strong>{selected.price} ₽</strong>
              {selected.description ? <p>{selected.description}</p> : null}
              <a href={site.phoneHref}>
                Уточнить по телефону <Icon name="phone" size={16} />
              </a>
            </div>
          </>
        ) : null}
      </dialog>
    </div>
  );
}
