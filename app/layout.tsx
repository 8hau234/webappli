import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Store Oversized",
  description: "Crocs & Birkenstock resell store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans min-h-screen antialiased bg-[#FAFAF8] text-[#0F0F0F]`}>
        {children}
      </body>
    </html>
  );
}
