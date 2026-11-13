// Facts only from veon/client.json (company.*, W-F001…W-F019). No invented numbers, prices, terms or reviews.
import type { ImageMetadata } from "astro";
import gel5000 from "../assets/products/gel-5000.jpg";
import gel1000 from "../assets/products/gel-1000.jpg";
import gel260us from "../assets/products/gel-260-us.jpg";
import gel260ecg from "../assets/products/gel-260-ecg.jpg";
import fs50c from "../assets/products/skintact-fs50c.jpg";
import fs50 from "../assets/products/skintact-fs50.jpg";
import f301 from "../assets/products/skintact-f301.jpg";
import sorimex from "../assets/products/sorimex-50p.jpg";
import paper80 from "../assets/products/paper-80x20.jpg";
import paper50 from "../assets/products/paper-50x20.jpg";
import sony from "../assets/products/sony-upp110s.jpg";

export const company = {
  name: "Медікал Трейд ЛТД",
  legal: "ТОВ «Медікал Трейд ЛТД»",
  since: 2020,
  city: "м. Івано-Франківськ",
  address: "вул. Промислова, 2-Б, оф. 44",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Івано-Франківськ, вул. Промислова, 2-Б"),
  facebook: "https://www.facebook.com/MedicalTrade.Ltd",
};

export const phones = [
  { href: "tel:+380666806124", short: "066 680-61-24", display: "(066) 680-61-24", intl: "+380666806124" },
  { href: "tel:+380689707930", short: "068 970-79-30", display: "(068) 970-79-30", intl: "+380689707930" },
] as const;

export const viber = "viber://chat?number=%2B380666806124";
export const whatsapp = "https://wa.me/380666806124";

export const hours = [
  { days: "Пн–Пт", time: "9:00–19:00", spec: { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" } },
  { days: "Сб", time: "10:00–14:00", spec: { dayOfWeek: ["Saturday"], opens: "10:00", closes: "14:00" } },
  { days: "Нд", time: "вихідний", spec: null },
];

export const nav = [
  { href: "#directions", label: "Каталог" },
  { href: "#consumables", label: "Витратні матеріали" },
  { href: "#institutions", label: "Для закладів" },
  { href: "#trust", label: "Про компанію" },
  { href: "#contacts", label: "Контакти" },
];

export const futurePages = ["Акційні товари", "Доставка і оплата", "Про нас", "Блог"];
export const legalPages = ["Публічна оферта", "Повернення товару", "Політика конфіденційності"];

export interface Direction {
  id: string;
  title: string;
  items: string;
  span: string;
  toConsumables?: boolean;
}

// company.products_services: subcategories as written on the client's catalogue
export const directions: Direction[] = [
  {
    id: "med",
    title: "Медичне обладнання",
    items: "Електрокардіографи, телемедицина, домашня медтехніка, холтерівські системи, дефібрилятори, монітори пацієнта, інфузійне обладнання, спірометрія, офтальмологія, діагностичні ліхтарики, хірургічні світильники, аспіратори, апарати ШВЛ.",
    span: "wide",
  },
  {
    id: "lab",
    title: "Лабораторне обладнання",
    items: "Гематологічні, біохімічні та імунологічні аналізатори, аналізатори сечі, електролітів і газів крові, мікроскопи, центрифуги, коагулометри.",
    span: "mid",
  },
  {
    id: "cons",
    title: "Витратні матеріали для функціональної діагностики",
    items: "Гель Ceracarta (ECO Supergel) для УЗД і ЕКГ, одноразові ЕКГ-електроди Sorimex і Skintact, багаторазові електроди, кабелі ЕКГ, аксесуари для спірометрії, папір для ЕКГ, УЗД і лабораторного обладнання.",
    span: "mid",
    toConsumables: true,
  },
  {
    id: "furniture",
    title: "Медичні меблі",
    items: "Ростоміри, ширми медичні, столики пеленальні.",
    span: "narrow",
  },
  {
    id: "immob",
    title: "Обладнання для іммобілізації та реабілітації",
    items: "Ноші медичні.",
    span: "narrow",
  },
  {
    id: "bags",
    title: "Сумки-укладки",
    items: "Сумки-укладки та сумки для перенесення обладнання.",
    span: "narrow",
  },
];

export interface Product {
  img: ImageMetadata;
  name: string;
  brand: string;
  alt: string;
  /** relative width on the shelf, by the real proportions of the item */
  w: number;
  /** share of the tablet the photo fills (narrow items get a wider tablet for the caption) */
  fit?: number;
}

export const heroShelf: Product[] = [
  { img: gel5000, name: "ECO Supergel Clear, 5 кг", brand: "Ceracarta", alt: "Гель для УЗД ECO Supergel Clear 5 кг і флакон 260 г, Ceracarta", w: 46 },
  { img: gel1000, name: "ECO Supergel 1 кг", brand: "Ceracarta", alt: "Гель для УЗД ECO Supergel 1000 г, Ceracarta", w: 21, fit: 0.62 },
  { img: paper80, name: "Папір для ЕКГ 80×20", brand: "рулон із сіткою", alt: "Рулон паперу для ЕКГ 80×20 із сіткою", w: 22 },
  { img: fs50c, name: "Електрод FS-50C", brand: "Skintact", alt: "Одноразовий ЕКГ-електрод Skintact FS-50C", w: 18, fit: 0.75 },
];

export const consumables: Product[] = [
  { img: gel260us, name: "ECO Supergel, 260 г", brand: "Ceracarta, для УЗД", alt: "Гель для УЗД ECO Supergel 260 г, Ceracarta", w: 14, fit: 0.7 },
  { img: gel260ecg, name: "ECO Supergel, 260 г", brand: "Ceracarta, для ЕКГ", alt: "Електропровідний гель для ЕКГ ECO Supergel 260 г, Ceracarta", w: 14, fit: 0.78 },
  { img: fs50, name: "Електрод FS-50", brand: "Skintact, для холтера", alt: "Одноразовий електрод для холтера Skintact FS-50", w: 14 },
  { img: f301, name: "Електрод F-301", brand: "Skintact", alt: "Одноразовий ЕКГ-електрод Skintact F-301", w: 14 },
  { img: sorimex, name: "Електроди EK-S 50 P", brand: "Sorimex", alt: "Упаковка ЕКГ-електродів Sorimex EK-S 50 P", w: 14 },
  { img: paper50, name: "Папір для ЕКГ 50×20", brand: "рулон із сіткою", alt: "Рулон паперу для ЕКГ 50×20 із сіткою", w: 16 },
  { img: sony, name: "Папір UPP-110S", brand: "Sony, для УЗД", alt: "Папір для відеопринтера УЗД Sony UPP-110S", w: 21 },
];

// W-F005, W-F006: manufacturers named on the client's site (logos as images are W-R104, client decision)
export const brands = [
  { name: "Mindray", size: "xl" },
  { name: "Skintact", size: "l" },
  { name: "Sorimex", size: "l" },
  { name: "Ceracarta", size: "m" },
  { name: "General Electric", size: "xl" },
  { name: "Sony", size: "m" },
  { name: "STORZ", size: "l" },
  { name: "KaWe", size: "m" },
  { name: "Lepu Medical", size: "l" },
  { name: "Brightfield", size: "m" },
  { name: "HEACO", size: "m" },
  { name: "Creative Medical", size: "l" },
];

export const payment = [
  "Безготівково за рахунком",
  "Готівкою при отриманні",
  "Переказ на картку",
  "Накладений платіж Нова Пошта",
];

export const delivery = ["Нова Пошта", "Делівері", "Міст Експрес", "Самовивіз зі складу"];
