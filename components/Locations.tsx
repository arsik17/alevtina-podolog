"use client";

import { useState } from "react";
import { useI18n, Locale } from "@/lib/i18n";
import { cityData, City } from "@/lib/city";
import { MapPin, Clock, Phone, CreditCard, Navigation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Locations() {
  const { locale, t } = useI18n();
  const [city, setCity] = useState<City>("almaty");
  const data = cityData[city];
  const whatsappUrl = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1 mb-4">
            {t.locations.tag}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text">
            {t.locations.title}
          </h2>
        </AnimatedSection>

        {/* City tabs */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-bg p-1">
            {(["almaty", "taraz"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  city === c
                    ? "bg-primary text-white shadow-md"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {cityData[c].name[locale as Locale]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <AnimatedSection>
            <div className="rounded-2xl bg-bg border border-divider p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">{data.name[locale as Locale]}</p>
                  <p className="text-text-muted mt-1">{data.address[locale as Locale]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">{t.locations.schedule}</p>
                  <p className="text-text-muted mt-1">{t.locations.byAppointment}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CreditCard size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-text">{t.locations.payment}</p>
                  <p className="text-text-muted mt-1">{data.payment[locale as Locale]}</p>
                </div>
              </div>

              {data.metro && (
                <div className="flex items-start gap-4">
                  <Navigation size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text">{t.locations.directions}</p>
                    <p className="text-text-muted mt-1">{data.metro[locale as Locale]}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-primary text-primary px-6 py-2.5 font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  {t.locations.callUs}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 font-medium hover:bg-primary-dark transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.locations.writeUs}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-divider h-full min-h-[350px] sm:min-h-[400px]">
              <iframe
                src={`https://maps.google.com/maps?q=${data.coords.lat},${data.coords.lon}&z=16&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
