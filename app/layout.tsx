import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kumite Productions",
  description:
    "MMA-focused videography, photography, and editing. Training montages, fight highlights, interviews, promos.",
  icons: [{ rel: "icon", url: "/favicon.ico?v=2" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${body.variable} ${display.variable} min-h-full bg-(--bg) text-(--text) antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
