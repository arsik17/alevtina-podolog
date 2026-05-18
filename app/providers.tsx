"use client";

import { I18nProvider } from "@/lib/i18n";
import { CityProvider } from "@/lib/city";
import { BookingProvider } from "@/components/BookingModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <CityProvider>
        <BookingProvider>{children}</BookingProvider>
      </CityProvider>
    </I18nProvider>
  );
}
