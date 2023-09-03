"use client";

import { ICountry, IOption } from "@/interfaces";
import { createContext, useEffect, useState } from "react";

type ICountryContext = { countryData?: IOption[] };
export const CountryContext = createContext({} as ICountryContext);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countryData, setCountryData] = useState<ICountry[]>();

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const requestHeaders = new Headers();
        requestHeaders.set("Access-Control-Max-Age", "3600");
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2",
          { method: "GET", headers: requestHeaders }
        );
        setCountryData(await response.json());
      } catch (err) {
        console.error(err);
      }
    };
    getCountryData();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countryData: (
          countryData?.map((e) => ({ label: e.name.common, value: e.cca2 })) ?? []
        ).sort((a, b) => (b.label > a.label ? -1 : 1)),
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
