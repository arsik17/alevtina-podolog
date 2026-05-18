"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { GraduationCap, ShieldCheck, Wrench, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: GraduationCap, key: "medical" },
  { icon: ShieldCheck, key: "sterile" },
  { icon: Wrench, key: "equipment" },
  { icon: Heart, key: "individual" },
] as const;

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection>
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-6">
              {t.about.tag}
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text leading-tight">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <p className="mt-6 text-sm text-primary font-medium">{t.about.license}</p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="group rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow border border-divider"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-text leading-snug">
                    {t.about.features[key]}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Images */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/clinic-interior.jpg"
                    alt="Интерьер подологического центра"
                    width={400}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/instruments.jpg"
                    alt="Стерильные инструменты"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products.jpg"
                    alt="Немецкая продукция для подологии"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/building-exterior.jpg"
                    alt="Подологический центр Алевтины — вход"
                    width={400}
                    height={500}
                    className="object-cover w-full h-64"
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
