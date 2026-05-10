import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fanclare Farms Beef",
    template: "%s | Fanclare Farms Beef",
  },
  description:
    "Premium grass-fed, pasture-raised beef from Fanclare Farms. Order beef shares and cuts direct from our family farm.",
  keywords: ["grass-fed beef", "beef shares", "farm-to-table", "Fanclare Farms", "pasture-raised"],
  openGraph: {
    title: "Fanclare Farms Beef",
    description:
      "Premium grass-fed, pasture-raised beef from Fanclare Farms. Order beef shares and cuts direct from our family farm.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
