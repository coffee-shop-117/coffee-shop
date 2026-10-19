"use client";

import Image from "next/image";
import { Icon } from "@/shared/ui/icon/icon";
import { useHeroScroll } from "../../lib/use-hero-scroll";
import styles from "./hero.module.scss";

export function HeroVisual() {
  const { visualRef, frameRef, imageRef, stampRef } = useHeroScroll();

  return <div className={styles.visual} ref={visualRef}>
    <div className={styles.photo} ref={frameRef}>
      <Image ref={imageRef} src="/images/cafe/coffee-window.webp" alt="Чёрная чашка кофе на деревянном столе у окна кофейни 7/17" fill preload sizes="(max-width: 700px) 100vw, 48vw" />
    </div>
    <div className={styles.stamp} ref={stampRef}>
      <Icon name="cup" size={25} /><span>Буду кофе</span>
    </div>
  </div>;
}
