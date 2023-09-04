import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberWithCommas(x: number | string): string {
  return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
