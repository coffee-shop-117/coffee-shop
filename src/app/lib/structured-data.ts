import { site } from "@/shared/config/site";
import { menu } from "@/entities/menu/model/menu";

export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CafeOrCoffeeShop",
        ...(site.url
          ? {
              "@id": `${site.url}/#cafe`,
              url: site.url,
              image: `${site.url}/images/cafe/coffee-window.webp`,
              logo: `${site.url}/images/logo.webp`,
              hasMenu: `${site.url}/menu`,
            }
          : {}),
        name: site.name,
        description: site.description,
        telephone: "+79192206313",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Тайнинская улица, 9, корп. 1",
          addressLocality: "Москва",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 55.881651,
          longitude: 37.683222,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "21:00",
          },
        ],
        servesCuisine: ["Кофе", "Завтраки", "Десерты"],
        priceRange: "₽₽",
        currenciesAccepted: "RUB",
        paymentAccepted: "Cash, Credit Card",
        hasMap: site.maps,
        sameAs: [site.maps, site.telegram],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Wi-Fi",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Летняя веранда",
            value: true,
          },
        ],
      },
      {
        "@type": "Menu",
        name: "Меню кофейни 7/17",
        inLanguage: "ru",
        hasMenuSection: [
          { id: "drinks", name: "Кофе и матча" },
          { id: "breakfast", name: "Завтраки" },
          { id: "food", name: "Сытное" },
          { id: "desserts", name: "Десерты и выпечка" },
        ].map((category) => ({
          "@type": "MenuSection",
          name: category.name,
          hasMenuItem: menu
            .filter((item) => item.category === category.id)
            .map((item) => ({
              "@type": "MenuItem",
              name: `${item.name}, ${item.portion}`,
              ...(item.description ? { description: item.description } : {}),
              ...(site.url ? { image: `${site.url}${item.image}` } : {}),
              offers: {
                "@type": "Offer",
                price: item.price,
                priceCurrency: "RUB",
              },
            })),
        })),
      },
    ],
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
