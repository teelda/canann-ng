import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://canann.org";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Canann Impact Foundation — Digital Literacy NGO Nigeria",
    template: "%s — Canann Impact Foundation",
  },
  description:
    "Canann Impact Foundation is a digital literacy NGO in Nigeria bridging Africa's digital divide — AI education, skills training, devices in schools, and Pad a Girl for grassroots communities.",
  keywords: [
    "digital literacy NGO Nigeria",
    "AI education Nigeria",
    "tech education grassroots Africa",
    "digital divide Nigeria",
    "Pad a Girl",
    "donate to Nigerian NGO",
    "GroundUp Skills",
    "Tech in School",
    "Canann Impact Foundation",
  ],
  authors: [{ name: "Canann Impact Foundation" }],
  creator: "Canann Impact Foundation",
  publisher: "Canann Impact Foundation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Canann Impact Foundation — Digital Literacy NGO Nigeria",
    description:
      "Bridging Africa's digital divide through AI education, skills training, real devices in schools, and Pad a Girl for Nigerian communities.",
    type: "website",
    url: BASE,
    siteName: "Canann Impact Foundation",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Canann Impact Foundation — Digital Literacy NGO Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canann Impact Foundation — Digital Literacy NGO Nigeria",
    description:
      "Bridging Africa's digital divide through AI education, skills training, real devices in schools, and Pad a Girl for Nigerian communities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
