import type { Viewport } from "next";

import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { metadata } from "@/lib/seo";

export { metadata };

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffaf4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
