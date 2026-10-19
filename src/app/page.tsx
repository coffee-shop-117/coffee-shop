import type { Metadata } from "next";
import { HomePage } from "@/views/home/ui/home-page/home-page";
import { structuredData, jsonLd } from "@/app/lib/structured-data";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  ...(site.url ? { alternates: { canonical: site.url } } : {}),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData()) }}
      />
      <HomePage />
    </>
  );
}
