"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./photo-gallery.module.scss";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  function change(offset: number) {
    setSelected(
      (current) => (current + offset + photos.length) % photos.length,
    );
  }
  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            className={styles.photo}
            aria-label={`Открыть фото: ${photo.alt}`}
            onClick={() => {
              setSelected(index);
              dialog.current?.showModal();
            }}
            data-reveal
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 700px) 85vw, 40vw"
            />
            <span>
              
              <Icon name="plus" size={17} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Фотографии кофейни 7/17"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            change(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            change(-1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Закрыть фотографию"
          onClick={() => dialog.current?.close()}
        >
          <Icon name="close" />
        </button>
        <div className={styles.fullImage}>
          <Image
            src={photos[selected].src}
            alt={photos[selected].alt}
            fill
            sizes="95vw"
          />
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={() => change(-1)}
          >
            <Icon name="arrow" style={{ transform: "rotate(180deg)" }} />
          </button>
          <p aria-live="polite">
            {selected + 1} / {photos.length}
            <span>{photos[selected].caption}</span>
          </p>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={() => change(1)}
          >
            <Icon name="arrow" />
          </button>
        </div>
      </dialog>
    </>
  );
}
