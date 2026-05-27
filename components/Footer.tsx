"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { cityData } from "@/lib/city";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { locale, t } = useI18n();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.training, href: "#training" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  return (
    <footer className="bg-[#2D2A2A] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/images/logo.png" alt="Alevtina" width={140} height={40} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-white/60 whitespace-pre-line">{t.footer.desc}</p>
            <a
              href="https://instagram.com/alevtina_podolog.center"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @alevtina_podolog.center
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.nav}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Almaty */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{cityData.almaty.name[locale]}</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{cityData.almaty.address[locale]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <a href={`tel:${cityData.almaty.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {cityData.almaty.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Taraz */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{cityData.taraz.name[locale]}</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{cityData.taraz.address[locale]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <a href={`tel:${cityData.taraz.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {cityData.taraz.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Alevtina Podolog Center. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
