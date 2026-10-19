import type { MetadataRoute } from "next";
import { site } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/menu`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
