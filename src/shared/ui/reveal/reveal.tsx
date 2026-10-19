"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -35px 0px", threshold: 0.05 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 35) return;
      element.dataset.pending = "true";
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        delete element.dataset.pending;
        delete element.dataset.visible;
      });
    };
  }, []);
  return null;
}
