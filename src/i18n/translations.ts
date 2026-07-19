export const translations = {
  "en": {
    "locale": "en",
    "dir": "ltr",
    "nav": {
      "home": "Home",
      "about": "About",
      "adults": "Adults",
      "kids": "Kids",
      "technology": "Technology",
      "doctors": "Doctors",
      "contact": "Contact",
      "book": "Book appointment"
    },
    "hero": {
      "chapter1": "01 — DORMANT",
      "title1": "Precision dentistry,\npowered by intelligence.",
      "body1": "A new generation of oral care where advanced technology, natural aesthetics and emotional comfort work as one.",
      "chapter2": "02 — AWAKENING",
      "title2": "Technology brings\nthe tooth to life.",
      "body2": "Scroll-controlled scanning reveals the digital anatomy beneath the surface.",
      "chapter3": "03 — HUMAN + AI",
      "title3": "Powered by Artificial Intelligence.\nGuided by Human Care.",
      "discover": "Discover MOVA Intelligence Lab",
      "scroll": "SCROLL TO ACTIVATE"
    }
  },
  "tr": {
    "locale": "tr",
    "dir": "ltr",
    "nav": {
      "home": "Ana Sayfa",
      "about": "Hakkımızda",
      "adults": "Yetişkin",
      "kids": "Çocuk",
      "technology": "Teknoloji",
      "doctors": "Hekimler",
      "contact": "İletişim",
      "book": "Randevu Al"
    },
    "hero": {
      "chapter1": "01 — UYKU",
      "title1": "Hassas diş hekimliği,\nzekâyla güçlendirildi.",
      "body1": "İleri teknoloji, doğal estetik ve duygusal konforun tek bir deneyimde buluştuğu yeni nesil ağız sağlığı.",
      "chapter2": "02 — UYANIŞ",
      "title2": "Teknoloji dişi\nhayata döndürüyor.",
      "body2": "Kaydırmayla kontrol edilen tarama, yüzeyin altındaki dijital anatomiyi ortaya çıkarır.",
      "chapter3": "03 — İNSAN + YAPAY ZEKÂ",
      "title3": "Yapay zekâ ile güçlendirildi.\nİnsan dokunuşuyla yönlendirildi.",
      "discover": "MOVA Intelligence Lab'i Keşfet",
      "scroll": "AKTİFLEŞTİRMEK İÇİN KAYDIR"
    }
  },
  "fa": {
    "locale": "fa",
    "dir": "rtl",
    "nav": {
      "home": "خانه",
      "about": "درباره ما",
      "adults": "بزرگسالان",
      "kids": "کودکان",
      "technology": "فناوری",
      "doctors": "پزشکان",
      "contact": "تماس",
      "book": "رزرو وقت"
    },
    "hero": {
      "chapter1": "۰۱ — سکون",
      "title1": "دندان‌پزشکی دقیق،\nقدرت‌گرفته از هوشمندی.",
      "body1": "نسل تازه‌ای از مراقبت دهان و دندان؛ جایی که فناوری پیشرفته، زیبایی طبیعی و آرامش روانی به یک تجربه واحد تبدیل می‌شوند.",
      "chapter2": "۰۲ — بیداری",
      "title2": "فناوری، دندان را\nزنده می‌کند.",
      "body2": "اسکن کنترل‌شده با اسکرول، آناتومی دیجیتال زیر سطح را آشکار می‌کند.",
      "chapter3": "۰۳ — انسان + هوش مصنوعی",
      "title3": "قدرت‌گرفته از هوش مصنوعی.\nهدایت‌شده با مراقبت انسانی.",
      "discover": "آزمایشگاه هوشمندی MOVA را ببینید",
      "scroll": "برای فعال‌سازی اسکرول کنید"
    }
  }
} as const;
export type Locale = keyof typeof translations;
export const locales: Locale[] = ['en','tr','fa'];
export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first === 'tr' || first === 'fa' ? first : 'en';
}
export function localizedPath(pathname: string, locale: Locale): string {
  const clean = pathname.replace(/^\/(tr|fa)(?=\/|$)/, '') || '/';
  if (locale === 'en') return clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}
