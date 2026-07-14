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

// Locks the layout viewport to the device width so mobile browsers don't
// render at a wider "desktop-ish" virtual width and then let the user
// pinch-zoom/scroll into empty space on the right. maximumScale: 1 +
// userScalable: false stop pinch-zoom from ever creating that overflow.
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifCondensed.variable}`}>
      <body className="bg-white text-black antialiased min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}