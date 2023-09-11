import { font } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomberg Global Coal Countdown",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/img/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
