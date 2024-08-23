import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Translexaa",
  description:
    "Fast and accurate translations in multiple languages, powered by AI.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Translation",
    "Language",
    "AI",
    "Voice",
    "Text",
    "Translexaa",
    "Translate",
    "Speech",
    "Recognition",
    "Copy",
    "Paste",
    "AI Translation",
    "Next.js",
  ],
  authors: [{ name: "Jeesun Bari", url: "https://github.com/jeesun09" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
