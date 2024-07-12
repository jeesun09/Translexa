import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Translexa",
  description:
    "Fast and accurate translations in multiple languages, powered by AI.",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
