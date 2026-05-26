import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Education Grassroots Africa — About Canann Impact Foundation",
  description:
    "Learn about Canann Impact Foundation — our mission to deliver AI literacy, digital skills, and real devices to grassroots communities across Nigeria. Meet the team behind the impact.",
  alternates: { canonical: "/about-us" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
