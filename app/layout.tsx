import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://canann.org";

// Self-hosted so builds don't depend on downloading from Google Fonts.
// Onest variable font (weights 100–900), latin + latin-ext; licence in app/fonts/Onest-OFL.txt
const onest = localFont({
  src: "./fonts/Onest-Variable.woff2",
  variable: "--font-onest",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Canann Impact Foundation — Digital Literacy NGO Nigeria",
    template: "%s — Canann Impact Foundation",
  },
  description:
    "Canann Impact Foundation brings devices, offline learning and practical AI skills to secondary school students and school leavers in Nigeria. Donate, volunteer or partner with us.",
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
  verification: {
    google: "rOCWdV6Nv1aQT3Tw9yQyS42i6uMdcTArXkAhLR4lg7E",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58ZJ56CT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58ZJ56CT');`}
        </Script>
        <JsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"1bbebffc9815427a8494ee0d7efa53c6"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
