import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Partner with Nigeria's Digital Literacy NGO",
  description:
    "Reach out to volunteer, partner on AI education or Pad a Girl, or fund digital access in Nigerian communities. We respond within 48 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-end mb-6">
            <nav className="flex items-center gap-2 text-xs" aria-label="Breadcrumb">
              <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.28)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.38)" }}>Contact</span>
            </nav>
          </div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Contact
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: "clamp(32px,5vw,62px)" }}
          >
            Reach Out. Let&apos;s Build Africa&apos;s Digital Future Together.
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Whether you want to volunteer, partner with us on AI education or Pad a Girl, fund a cause, or simply say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ color: "var(--foreground)" }}>
            Is Your Organisation Ready to Help Close Africa&apos;s Gap?
          </h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--muted)" }}>
            We&apos;re looking for corporate partners, universities, health organisations, and tech companies who want to make a real difference in Nigerian communities. Whether you have funding, expertise, devices, or products — there&apos;s a way to plug in.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "1",
                title: "Fund AI Education or Tech in School",
                body: "Sponsor a cohort of digital and AI literacy training.",
              },
              {
                num: "2",
                title: "Support Pad a Girl",
                body: "Donate products, fund distribution, or run a workplace collection.",
              },
              {
                num: "3",
                title: "Join GroundUp Skills",
                body: "Fund a cohort, send a facilitator, or donate vocational tools and starter kits.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {num}
                </div>
                <h3 className="font-semibold" style={{ color: "var(--foreground)", fontSize: "15px" }}>
                  {title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium" style={{ color: "var(--muted)" }}>
            Select your area of interest from the form below to start the conversation.{" "}
            <ArrowRight size={14} className="inline-block ml-1" style={{ color: "var(--accent)" }} />
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                Get In Touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Our team typically responds within 48 hours. For partnership inquiries, please mention it in your message.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent-light)" }}
                  >
                    <MapPin size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-1" style={{ color: "var(--muted)" }}>
                      Location
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent-light)" }}
                  >
                    <Phone size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-1" style={{ color: "var(--muted)" }}>
                      Phone
                    </p>
                    <a
                      href="tel:+2347068115317"
                      className="text-sm font-medium transition-opacity hover:opacity-70 block"
                      style={{ color: "var(--foreground)" }}
                    >
                      +234 706 811 5317 <span className="text-xs font-normal" style={{ color: "var(--muted)" }}>(Call / WhatsApp)</span>
                    </a>
                    <a
                      href="tel:+2348052263878"
                      className="text-sm font-medium transition-opacity hover:opacity-70 block mt-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      +234 805 226 3878 <span className="text-xs font-normal" style={{ color: "var(--muted)" }}>(Call only)</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent-light)" }}
                  >
                    <Mail size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-1" style={{ color: "var(--muted)" }}>
                      Email
                    </p>
                    <a
                      href="mailto:hellocanann@gmail.com"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--foreground)" }}
                    >
                      hellocanann@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-5" style={{ color: "var(--muted)" }}>
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {["Facebook", "Instagram", "X", "LinkedIn"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="text-xs font-medium px-3 py-2 rounded-xl transition-all hover:opacity-80"
                      style={{ backgroundColor: "var(--surface)", color: "var(--muted)" }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div
                className="mt-8 p-6 rounded-2xl"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  Response time
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--muted)" }}>
                  We typically respond within 48 hours. For urgent partnership or donation inquiries, mention it in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
