import "./globals.css";

export const metadata = {
  title: "Store Oversized",
  description: "Crocs & Birkenstock resell store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#FAFAF8] text-[#0F0F0F]">
        {children}
      </body>
    </html>
  );
}
