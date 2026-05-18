"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "/images/clinic-interior.jpg", alt: "Интерьер центра" },
  { src: "/images/before-after-1.jpg", alt: "Результат лечения" },
  { src: "/images/before-after-2.jpg", alt: "Результат лечения" },
  { src: "/images/instruments.jpg", alt: "Стерильные инструменты" },
  { src: "/images/before-after-3.jpg", alt: "Результат лечения" },
  { src: "/images/clinic-work.jpg", alt: "Процесс работы" },
  { src: "/images/products.jpg", alt: "Профессиональная продукция" },
  { src: "/images/sterilizer.jpg", alt: "Стерилизация оборудования" },
  { src: "/images/building-exterior.jpg", alt: "Центр — вход" },
  { src: "/images/before-after-4.jpg", alt: "Результат лечения" },
  { src: "/images/before-after-5.jpg", alt: "Результат лечения" },
  { src: "/images/clinic-work-2.jpg", alt: "Процесс работы" },
];

export default function Gallery() {
  const { t } = useI18n();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: -1 | 1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-4">
            {t.nav.gallery}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text">
            {t.nav.gallery}
          </h2>
        </AnimatedSection>

        {/* Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.03}>
              <div
                className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight size={32} />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
