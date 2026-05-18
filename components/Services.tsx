"use client";

import { useI18n } from "@/lib/i18n";
import { useBooking } from "./BookingModal";
import {
  Footprints,
  CircleAlert,
  Bug,
  Shapes,
  Circle,
  HeartPulse,
  Stethoscope,
  UserRound,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const serviceItems = [
  { key: "pedicure", icon: Footprints },
  { key: "ingrown", icon: CircleAlert },
  { key: "fungus", icon: Bug },
  { key: "orthoses", icon: Shapes },
  { key: "callus", icon: Circle },
  { key: "diabetic", icon: HeartPulse },
  { key: "consultation", icon: Stethoscope },
  { key: "menPedicure", icon: UserRound },
] as const;

export default function Services() {
  const { t } = useI18n();
  const { openBooking } = useBooking();

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-6">
            {t.services.tag}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text">
            {t.services.title}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceItems.map(({ key, icon: Icon }, i) => (
            <AnimatedSection key={key} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-divider bg-bg p-6 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-text mb-2">
                  {t.services.items[key].title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {t.services.items[key].desc}
                </p>
                <button
                  onClick={openBooking}
                  className="inline-flex text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {t.services.bookService} &rarr;
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
