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
    "Профессиональный подологический центр в Алматы и Таразе. Медицинский педикюр, лечение вросших ногтей, грибка, диабетической стопы. Рейтинг 5.0 на 2ГИС.",
  keywords: "подолог, подология, медицинский педикюр, вросший ноготь, Алматы, Тараз, Алевтина Лигай",
  openGraph: {
    title: "Подологический центр Алевтины Лигай",
    description: "Профессиональный уход за здоровьем стоп в Алматы и Таразе",
    type: "website",
    locale: "ru_KZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
