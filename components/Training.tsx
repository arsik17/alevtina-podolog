"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useBooking } from "./BookingModal";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Training() {
  const { t } = useI18n();
  const { openBooking } = useBooking();

  return (
    <section id="training" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-6">
              {t.training.tag}
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text leading-tight">
              {t.training.title}
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">{t.training.desc}</p>

            <ul className="mt-8 space-y-3">
              {t.training.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-success" />
                  </div>
                  <span className="text-text">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={openBooking}
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-white font-medium hover:bg-primary-dark transition-colors"
            >
              {t.training.cta}
            </button>
          </AnimatedSection>

          {/* Photos */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/training-class.jpg"
                  alt="Обучение подологии — группа студентов"
                  width={800}
                  height={500}
                  className="object-cover w-full h-72"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/conference.jpg"
                    alt="Команда на профессиональной конференции"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/team.jpg"
                    alt="Команда подологического центра"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
