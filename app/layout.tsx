import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumite Productions",
  description: "Videography, photography, and editing for MMA fighters.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
