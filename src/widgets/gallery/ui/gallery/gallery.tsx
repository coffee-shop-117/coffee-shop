import { PhotoGallery } from "@/shared/ui/photo-gallery/photo-gallery";
import { site } from "@/shared/config/site";
import { Icon } from "@/shared/ui/icon/icon";
import { photos } from "../../model/photos";
import styles from "./gallery.module.scss";

export function Gallery() {
  return (
    <section
      id="photos"
      className="container section"
      aria-labelledby="photos-title"
    >
      <div className={styles.heading} data-reveal>
        <div>
          <h2 id="photos-title">Наша кофейня</h2>
        </div>
      </div>
      <PhotoGallery photos={photos} />
      <a
        className={styles.link}
        href={`${site.maps}photos/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Все фото на Яндекс Картах <Icon name="arrow-up" size={14} />
      </a>
    </section>
  );
}
