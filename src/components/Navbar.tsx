"use client";

import Image from "next/image";
import { useContext } from "react";
import { CountryContext } from "@/providers/country";
import { Select } from "./ui/select";

export function NavBar() {
  const navBarItem: INavBarItem[] = [
    { label: "ABOUT", href: "/" },
    { label: "RESEARCH & ANALYSIS", href: "/" },
  ];
  const { countryData } = useContext(CountryContext);

  return (
    <div className="py-8 flex items-center justify-between">
      <Image
        src="/img/big-white-logo.webp"
        alt="white-logo"
        loading="eager"
        width={350}
        height={145}
      />

      <div className="flex items-center">
        <div className="mx-12 mr-16">
          {navBarItem.map((e, i) => (
            <NavBarItem key={i} {...e} />
          ))}
        </div>

        <Select
          options={countryData}
          onChange={(selected) => {
            console.log(selected);
          }}
          placeholder="Choose a Country"
        />
      </div>
    </div>
  );
}

interface INavBarItem {
  href: string;
  label: string;
}
function NavBarItem({ href, label }: INavBarItem) {
  return (
    <a className="last:ml-10 text-white hover:text-brand" href={href}>
      {label}
    </a>
  );
}
