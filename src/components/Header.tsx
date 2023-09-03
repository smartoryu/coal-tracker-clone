import { CountryProvider } from "@/providers";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <div className="bg-[url(/img/bg-countries.png)] bg-cover px-[50px] mx-auto">
      <CountryProvider>
        <NavBar />
      </CountryProvider>

      <h1 className="text-7xl font-bold py-[96px] leading-[80px] text-white">
        TRACKING OUR PROGRESS TOWARDS A COAL-FREE FUTURE
      </h1>
    </div>
  );
}
