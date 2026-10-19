import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/shared/config/site";
import "./styles/globals.scss";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: { default: site.title, template: "%s | Кофейня 7/17" },
  description: site.description,
  applicationName: site.name,
  category: "Кофейня",
  formatDetection: { telephone: false },
  robots: { index: Boolean(site.url), follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    ...(site.url
      ? {
          url: site.url,
          images: [
            {
              url: `${site.url}/images/og-cover.jpg`,
              width: 1200,
              height: 630,
              alt: "Кофейня 7/17 — Буду кофе",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d1f1e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body id="top">
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
