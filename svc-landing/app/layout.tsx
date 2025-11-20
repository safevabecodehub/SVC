import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "SafeVibeCode (SVC) | AI Community Token",
  description: "SVC — утилитарный токен для оплаты разработок, взаиморасчётов и инвестиций внутри сообщества AI-инженеров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
