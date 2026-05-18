"use client";

import { useI18n } from "@/lib/i18n";
import { cityData } from "@/lib/city";
import { Star, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Reviews() {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-6">
            {t.reviews.tag}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-text-muted">{t.reviews.subtitle}</p>

          {/* Rating badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-bg px-6 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-text">5.0</span>
            <span className="text-text-muted">
              ({cityData.almaty.reviewCount + cityData.taraz.reviewCount}+)
            </span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.testimonials.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="rounded-2xl bg-bg p-6 border border-divider h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-muted leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-4 font-medium text-text text-sm">{review.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <a
            href={cityData.almaty.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors text-sm"
          >
            {t.reviews.on2gis} (Алматы)
            <ExternalLink size={14} />
          </a>
          <a
            href={cityData.taraz.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors text-sm"
          >
            {t.reviews.on2gis} (Тараз)
            <ExternalLink size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
