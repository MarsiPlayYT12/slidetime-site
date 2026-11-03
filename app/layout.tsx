import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlideTime — Minecraft Анархия",
  description: "SlideTime — анархия без границ. Подключайся к серверу Minecraft.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
