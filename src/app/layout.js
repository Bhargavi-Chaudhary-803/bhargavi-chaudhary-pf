import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--next-font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifCondensed = localFont({
  src: "../../public/Noto-Serif.ttf",
  variable: "--next-font-noto",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifCondensed.variable}`}>
      <body className="bg-white text-black antialiased min-h-screen flex flex-col">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}