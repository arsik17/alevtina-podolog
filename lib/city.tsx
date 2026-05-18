"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type City = "almaty" | "taraz";

export const cityData = {
  almaty: {
    name: { ru: "Алматы", kk: "Алматы" },
    address: { ru: "проспект Жибек Жолы, 126а, 1 этаж", kk: "Жібек Жолы даңғылы, 126а, 1 қабат" },
    phone: "+7 705 715 02 05",
    whatsapp: "77057150205",
    rating: 5.0,
    reviewCount: 147,
    payment: { ru: "Карта, наличные, QR", kk: "Карта, қолма-қол, QR" },
    coords: { lat: 43.261016, lon: 76.933445 },
    metro: { ru: "м. Жибек Жолы — 1,1 км", kk: "м. Жібек Жолы — 1,1 км" },
    mapUrl: "https://2gis.kz/almaty/firm/70000001062434787",
  },
  taraz: {
    name: { ru: "Тараз", kk: "Тараз" },
    address: { ru: "улица Айтеке би, 10", kk: "Айтеке би көшесі, 10" },
    phone: "+7 702 811 80 00",
    whatsapp: "77028118000",
    rating: 5.0,
    reviewCount: 34,
    payment: { ru: "Наличные, перевод на карту", kk: "Қолма-қол, картаға аудару" },
    coords: { lat: 42.895709, lon: 71.371587 },
    metro: null,
    mapUrl: "https://2gis.kz/taraz/firm/70000001061179974",
  },
} as const;

type CityContextType = {
  city: City;
  setCity: (c: City) => void;
  data: (typeof cityData)[City];
};

const CityContext = createContext<CityContextType>({
  city: "almaty",
  setCity: () => {},
  data: cityData.almaty,
});

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<City>("almaty");
  return (
    <CityContext.Provider value={{ city, setCity, data: cityData[city] }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
