import type { Metadata } from "next";
import { DM_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canann Impact Initiative",
  description:
    "One opportunity can change everything. Canann connects underserved Nigerians with tools, resources, and community to build better futures.",
  keywords: "Nigeria, NGO, impact, community, empowerment, Give to Gain",
  openGraph: {
    title: "Canann Impact Initiative",
    description: "One opportunity can change everything.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${beVietnam.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
