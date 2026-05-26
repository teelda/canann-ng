import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to a Nigerian NGO — Fund Digital Literacy & AI Education",
  description:
    "Donate to Canann Impact Foundation and fund real devices in Nigerian classrooms, offline AI literacy journals, and digital skills training for grassroots communities. Every naira reaches programmes.",
  alternates: { canonical: "/donate" },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
