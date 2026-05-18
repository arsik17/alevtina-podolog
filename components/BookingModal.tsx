"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { useI18n, Locale } from "@/lib/i18n";
import { cityData, City } from "@/lib/city";

type BookingContextType = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { locale, t } = useI18n();

  const openBooking = useCallback(() => setOpen(true), []);

  const handleSelect = (city: City) => {
    const data = cityData[city];
    const url = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(t.whatsapp.message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-sm pointer-events-auto overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text">
                      {t.booking.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">{t.booking.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1.5 rounded-full hover:bg-bg transition-colors text-text-muted"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 space-y-3">
                  {(["almaty", "taraz"] as const).map((city) => (
                    <button
                      key={city}
                      onClick={() => handleSelect(city)}
                      className="w-full flex items-center gap-4 rounded-xl border border-divider p-4 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-text">{t.booking[city]}</p>
                        <p className="text-xs text-text-muted mt-0.5">
                          {cityData[city].address[locale as Locale]}
                        </p>
                      </div>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] ml-auto flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
