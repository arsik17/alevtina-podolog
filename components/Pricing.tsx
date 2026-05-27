"use client";

import { useI18n } from "@/lib/i18n";
import { useBooking } from "./BookingModal";
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  const { t } = useI18n();
  const { openBooking } = useBooking();

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-6">
            {t.pricing.tag}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-text-muted">{t.pricing.note}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-white border border-divider overflow-hidden shadow-sm">
            {t.pricing.items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 sm:px-6 py-4 ${
                  i !== t.pricing.items.length - 1 ? "border-b border-divider" : ""
                } hover:bg-bg/50 transition-colors`}
              >
                <span className="text-sm sm:text-base text-text font-medium min-w-0">{item.service}</span>
                <span className="text-primary font-semibold whitespace-nowrap ml-4">
                  {item.price} &#8376;
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8 text-center">
          <button
            onClick={openBooking}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            {t.pricing.cta}
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
