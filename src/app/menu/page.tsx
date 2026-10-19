import type { Metadata } from "next";
import { MenuPage } from "@/views/menu/ui/menu-page/menu-page";
import { site } from "@/shared/config/site";
import { jsonLd, structuredData } from "@/app/lib/structured-data";

export const metadata: Metadata = {
  title: "Меню и цены — кофе, завтраки, десерты",
  description:
    "Все 19 позиций меню кофейни 7/17: эспрессо, раф, матча-латте, сырники, киши, круассаны и десерты. Фотографии, порции и цены. Москва, Тайнинская, 9, корп. 1.",
  ...(site.url ? { alternates: { canonical: `${site.url}/menu` } } : {}),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData()) }}
      />
      <MenuPage />
    </>
  );
}
