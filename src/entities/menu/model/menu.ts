export type MenuCategory = "drinks" | "breakfast" | "food" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  portion: string;
  description: string;
  image: string;
}

export const menu: MenuItem[] = [
  {
    id: "lukovyy-tart",
    name: "Луковый тарт",
    category: "food",
    price: 320,
    portion: "1 шт.",
    description:
      "Карамелизированный лук, идеальным дополнением которого является швейцарский сыр Грюйер. Орех пекан прекрасно дополняет ансамбль вкусов .\nКорж пирога сделан из хрустящего слоеного теста",
    image: "/images/menu/01-lukovyy-tart.webp",
  },
  {
    id: "kish-utka-persik-mindal-malina",
    name: "Киш утка/ персик/ миндаль/ малина",
    category: "food",
    price: 320,
    portion: "1 шт.",
    description:
      "Киш с уткой, сладким персиком, миндалём и малиной с легкой кислинкой, для любителей разных вкусовых сочетаний.",
    image: "/images/menu/02-kish-utka-persik-mindal-malina.webp",
  },
  {
    id: "kish-losos-grusha-porey-karri",
    name: "Киш лосось/ груша/ порей/ карри",
    category: "food",
    price: 320,
    portion: "1 шт.",
    description:
      "Начинка на основе яиц, сметаны с добавлением лосося, сладкой груши и лука-порея.",
    image: "/images/menu/03-kish-losos-grusha-porey-karri.webp",
  },
  {
    id: "dvoynoy-espresso",
    name: "Двойной эспрессо",
    category: "drinks",
    price: 140,
    portion: "60 мл",
    description: "",
    image: "/images/menu/04-dvoynoy-espresso.webp",
  },
  {
    id: "amerikano-200ml",
    name: "Американо",
    category: "drinks",
    price: 200,
    portion: "200 мл",
    description: "",
    image: "/images/menu/05-amerikano-200ml.webp",
  },
  {
    id: "amerikano-300ml",
    name: "Американо",
    category: "drinks",
    price: 220,
    portion: "300 мл",
    description: "",
    image: "/images/menu/06-amerikano-300ml.webp",
  },
  {
    id: "chizkeyk-mango",
    name: "Чизкейк манго",
    category: "desserts",
    price: 280,
    portion: "1 шт.",
    description:
      "Нежный сливочный десерт с насыщенным вкусом манго на хрустящем корже.",
    image: "/images/menu/07-chizkeyk-mango.webp",
  },
  {
    id: "kanele",
    name: "Канеле",
    category: "desserts",
    price: 250,
    portion: "1 шт.",
    description:
      "Французский десерт родом из Бордо. Сливочное заварное тесто с карамельной корочкой .Идеальны к кофе!",
    image: "/images/menu/08-kanele.webp",
  },
  {
    id: "kasha-ovsyanaya",
    name: "Каша овсяная",
    category: "breakfast",
    price: 260,
    portion: "1 шт.",
    description: "Каша овсяная с добавлением сублимированной клубники!",
    image: "/images/menu/09-kasha-ovsyanaya.webp",
  },
  {
    id: "syrniki",
    name: "Сырники",
    category: "breakfast",
    price: 310,
    portion: "190 г",
    description: "Нежные сырники со сметаной или вареньем!",
    image: "/images/menu/10-syrniki.webp",
  },
  {
    id: "raf-300ml",
    name: "Раф",
    category: "drinks",
    price: 320,
    portion: "300 мл",
    description: "",
    image: "/images/menu/11-raf-300ml.webp",
  },
  {
    id: "raf-400ml",
    name: "Раф",
    category: "drinks",
    price: 340,
    portion: "400 мл",
    description: "",
    image: "/images/menu/12-raf-400ml.webp",
  },
  {
    id: "matcha-latte-300ml",
    name: "Матча-латте",
    category: "drinks",
    price: 360,
    portion: "300 мл",
    description:
      "Можно приготовить на растительном молоке: соевое, миндальное, фундучное, кокосовое, банановое. Доплата 40р.",
    image: "/images/menu/13-matcha-latte-300ml.webp",
  },
  {
    id: "matcha-latte-400ml",
    name: "Матча-латте",
    category: "drinks",
    price: 380,
    portion: "400 мл",
    description:
      "Можно приготовить на растительном молоке: соевое, миндальное, фундучное, кокосовое, банановое. Доплата 40р.",
    image: "/images/menu/14-matcha-latte-400ml.webp",
  },
  {
    id: "sendvich-s-okorokom",
    name: "Сендвич с окороком",
    category: "food",
    price: 390,
    portion: "1 шт.",
    description: "Сэндвич для сытного перекуса. Состав уточняйте у бариста.",
    image: "/images/menu/15-sendvich-s-okorokom.webp",
  },
  {
    id: "sendvich-s-kuritsey",
    name: "Сэндвич с курицей",
    category: "food",
    price: 390,
    portion: "1 шт.",
    description:
      "Пшеничный хлеб со льном, куриная грудка, апельсины, мёд, горчица, чеснок, тимьян, майонез, уксус, яблоко, зелёный лук, клюква вяленная, орех пекан.",
    image: "/images/menu/16-sendvich-s-kuritsey.webp",
  },
  {
    id: "ekler",
    name: "Эклер",
    category: "desserts",
    price: 260,
    portion: "1 шт.",
    description:
      "Воздушное заварное тесто, наполненное нежным кремом на основе сливок с добавлением творожного сыра. Сверху эклеры покрыты глазурью.",
    image: "/images/menu/17-ekler.webp",
  },
  {
    id: "kruassan-s-mindalnym-kremom",
    name: "Круассан с миндальным кремом",
    category: "desserts",
    price: 310,
    portion: "1 шт.",
    description:
      "Вас ждёт много запечённого миндального крема с легким флером амаретто, ванильный сироп и миндальные лепестки. Очень вкусно и очень сытно.",
    image: "/images/menu/18-kruassan-s-mindalnym-kremom.webp",
  },
  {
    id: "kruassan-klassicheskiy",
    name: "Круассан классический",
    category: "desserts",
    price: 230,
    portion: "1 шт.",
    description: "Хрустящий, воздушный круассан, с хорошим балансом вкуса.",
    image: "/images/menu/19-kruassan-klassicheskiy.webp",
  },
];

export const categories = [
  { id: "all", label: "Всё меню" },
  { id: "drinks", label: "Кофе и матча" },
  { id: "breakfast", label: "Завтраки" },
  { id: "food", label: "Сытное" },
  { id: "desserts", label: "Десерты и выпечка" },
] as const;
