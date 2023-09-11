import { type ClassValue, clsx } from "clsx";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberWithCommas(x: number | string): string {
  return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
