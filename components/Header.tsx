"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useBooking } from "./BookingModal";
import { Menu, X } from "lucide-react";

const navItems = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "training", href: "#training" },
  { key: "contacts", href: "#contacts" },
] as const;

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const { openBooking } = useBooking();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Alevtina" width={140} height={40} className="h-9 w-auto" priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-text-muted hover:text-primary transition-colors whitespace-nowrap"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Desktop right controls */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Lang toggle */}
            <div className="flex rounded-full bg-bg p-0.5 text-xs">
              <button
                onClick={() => setLocale("ru")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "ru" ? "bg-primary text-white" : "text-text-muted hover:text-text"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLocale("kk")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "kk" ? "bg-primary text-white" : "text-text-muted hover:text-text"
                }`}
              >
                ҚЗ
              </button>
            </div>

            {/* CTA */}
            <button
              onClick={openBooking}
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile right: lang + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex rounded-full bg-bg p-0.5 text-xs">
              <button
                onClick={() => setLocale("ru")}
                className={`px-2 py-1 rounded-full transition-all ${
                  locale === "ru" ? "bg-primary text-white" : "text-text-muted"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLocale("kk")}
                className={`px-2 py-1 rounded-full transition-all ${
                  locale === "kk" ? "bg-primary text-white" : "text-text-muted"
                }`}
              >
                ҚЗ
              </button>
            </div>
            <button
              className="p-2 text-text-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium text-text hover:text-primary py-3 border-b border-divider"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="pt-6">
              <button
                onClick={() => { setMobileOpen(false); openBooking(); }}
                className="block w-full text-center rounded-full bg-primary px-5 py-3.5 text-base font-medium text-white"
              >
                {t.nav.book}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
