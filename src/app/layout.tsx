import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
