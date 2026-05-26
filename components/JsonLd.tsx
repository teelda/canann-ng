const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://canann.org";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NGO"],
  name: "Canann Impact Foundation",
  alternateName: "Canann",
  url: BASE,
  logo: `${BASE}/Canann%20logo.png`,
  description:
    "Canann Impact Foundation bridges Africa's digital, AI, and health divide through skills training, AI literacy, real devices in schools, and the Pad a Girl programme — serving Nigerian grassroots communities.",
  email: "hellocanann@gmail.com",
  telephone: "+2347068115317",
  foundingDate: "2022",
  areaServed: ["Nigeria", "Africa"],
  knowsAbout: [
    "Digital literacy",
    "AI education",
    "Vocational skills",
    "Women's health",
    "Grassroots development",
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2347068115317",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
