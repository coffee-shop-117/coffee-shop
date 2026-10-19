const configuredUrl = process.env.SITE_URL?.trim().replace(/\/$/, "");

export const site = {
  name: "Кофейня 7/17",
  title: "Кофейня 7/17 — кофе, завтраки и десерты на Тайнинской, Москва",
  description:
    "Кофейня 7/17 на Тайнинской улице, 9, корпус 1: кофе с собой, завтраки, свежая выпечка и десерты. Летняя веранда, Wi-Fi. Ежедневно с 08:00 до 21:00.",
  url:
    configuredUrl && /^https?:\/\//.test(configuredUrl) ? configuredUrl : null,
  phone: "+7 919 220 63 13",
  phoneHref: "tel:+79192206313",
  address: "Москва, Тайнинская улица, 9, корп. 1",
  shortAddress: "Тайнинская, 9, корп. 1",
  hours: "08:00–21:00",
  maps: "https://yandex.ru/maps/org/kofeynya_7_17/8778036681/",
  reviews: "https://yandex.ru/maps/org/kofeynya_7_17/8778036681/reviews/",
  directions: "https://yandex.ru/maps/?rtext=~55.881651,37.683222&rtt=auto",
  telegram: "https://t.me/coffe_7_17",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?ll=37.683222%2C55.881651&z=17&mode=search&oid=8778036681&ol=biz",
} as const;
