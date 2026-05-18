import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Подологический центр Алевтины Лигай | Алматы и Тараз",
  description:
    "Профессиональный подологический центр в Алматы и Таразе. Педикюр, лечение вросших ногтей, грибка, диабетической стопы. Рейтинг 5.0 на 2ГИС.",
  keywords: "подолог, подология, педикюр, вросший ноготь, грибок ногтей, Алматы, Тараз, Алевтина Лигай",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Подологический центр Алевтины Лигай",
    description: "Профессиональный уход за здоровьем стоп в Алматы и Таразе. Рейтинг 5.0 на 2ГИС.",
    type: "website",
    locale: "ru_KZ",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Подологический центр Алевтины Лигай",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Подологический центр Алевтины Лигай",
    description: "Профессиональный уход за здоровьем стоп в Алматы и Таразе",
    images: ["/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Подологический центр Алевтины Лигай",
  description: "Профессиональный подологический центр — педикюр, лечение вросших ногтей, грибка, диабетической стопы",
  url: "https://alevtina-podolog.vercel.app",
  telephone: ["+77057150205", "+77028118000"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "проспект Жибек Жолы, 126а, 1 этаж",
      addressLocality: "Алматы",
      addressCountry: "KZ",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "улица Айтеке би, 10",
      addressLocality: "Тараз",
      addressCountry: "KZ",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "181",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "19:00",
  },
};

// Safe: jsonLd is a hardcoded constant, not user input
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e31e24" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
