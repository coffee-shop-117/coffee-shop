"use client";

import { useEffect, useRef } from "react";

export function useHeroScroll() {
  const visualRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    const frame = frameRef.current;
    const image = imageRef.current;
    const stamp = stampRef.current;
    if (!visual || !frame || !image || !stamp) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 700px)");
    const native = CSS.supports("animation-timeline", "scroll(root block)")
      && CSS.supports("animation-range", "0px 700px");
    let start = 0;
    let distance = 700;
    let frameId = 0;
    let visible = true;

    function reset() {
      delete visual!.dataset.scrollMotion;
      for (const element of [frame!, image!, stamp!]) element.style.removeProperty("transform");
    }

    function paint() {
      frameId = 0;
      if (preference.matches || native || !visible) return;
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
      const strength = mobile.matches ? .6 : 1;
      frame!.style.transform = `translate3d(0, ${progress * 24 * strength}px, 0) rotate(${progress * 2 * strength}deg)`;
      image!.style.transform = `translate3d(0, ${-progress * 16 * strength}px, 0) scale(${1 + progress * .2 * strength})`;
      stamp!.style.transform = `translate3d(0, ${-progress * 24 * strength}px, 0) rotate(${-12 + progress * 26 * strength}deg)`;
    }

    function schedule() {
      if (!frameId && visible) frameId = window.requestAnimationFrame(paint);
    }

    function measure() {
      const top = visual!.getBoundingClientRect().top + window.scrollY;
      start = Math.max(0, top - window.innerHeight * .75);
      distance = Math.max(550, visual!.offsetHeight + 180);
      visual!.style.setProperty("--hero-scroll-start", `${Math.round(start)}px`);
      visual!.style.setProperty("--hero-scroll-end", `${Math.round(start + distance)}px`);
      reset();
      if (preference.matches) return;
      if (native) visual!.dataset.scrollMotion = "native";
      else schedule();
    }

    const resize = new ResizeObserver(measure);
    resize.observe(visual);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    }, { rootMargin: "100px" });
    if (!native) {
      intersection.observe(visual);
      window.addEventListener("scroll", schedule, { passive: true });
    }
    window.addEventListener("resize", measure, { passive: true });
    preference.addEventListener("change", measure);
    mobile.addEventListener("change", measure);
    measure();

    return () => {
      resize.disconnect();
      intersection.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", measure);
      mobile.removeEventListener("change", measure);
      reset();
      visual.style.removeProperty("--hero-scroll-start");
      visual.style.removeProperty("--hero-scroll-end");
    };
  }, []);

  return { visualRef, frameRef, imageRef, stampRef };
}
