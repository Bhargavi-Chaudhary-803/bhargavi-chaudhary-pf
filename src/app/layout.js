import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--next-font-inter", // Matches var(--next-font-inter) in globals.css
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifCondensed = localFont({
  src: "../../public/Noto-Serif.ttf", // Steps out of app/ and src/ to public/
  variable: "--next-font-noto", // Matches var(--next-font-noto) in globals.css
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifCondensed.variable}`}>
      <body className="bg-white text-black antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}