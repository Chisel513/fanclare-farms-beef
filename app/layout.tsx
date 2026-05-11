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
  metadataBase: new URL("https://fanclarebeef.com"),
  title: {
    default: "Fanclare Farms Beef | 5th Generation Family Farm in Wakefield, VA",
    template: "%s | Fanclare Farms Beef",
  },
  description:
    "Grass-fed, grain-finished Black Angus beef and pasture-raised Berkshire pork from a 5th generation family farm in Wakefield, Virginia. Know Better. Eat Better.",
  keywords: [
    "grass-fed beef",
    "beef shares",
    "Black Angus beef",
    "Berkshire pork",
    "farm-to-table",
    "Fanclare Farms",
    "Wakefield VA",
    "Hampton Roads",
  ],
  openGraph: {
    siteName: "Fanclare Farms Beef",
    title: "Fanclare Farms Beef | 5th Generation Family Farm in Wakefield, VA",
    description:
      "Grass-fed, grain-finished Black Angus beef and pasture-raised Berkshire pork from a 5th generation family farm in Wakefield, Virginia.",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Fanclare Farms Beef — 5th Generation Family Farm in Wakefield, VA",
      },
    ],
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
