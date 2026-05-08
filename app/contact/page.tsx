import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Canann Impact Initiative",
  description: "Reach out to volunteer, partner, or ask a question. We respond within 48 hours.",
};

export default function ContactPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Contact
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: "clamp(40px,6vw,72px)" }}
          >
            Reach Out. We&apos;re Here Always.
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Whether you want to volunteer, partner, make a donation, or simply say hello — we&apos;d love to hear from you.
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
                      href="tel:+2341234567890"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--foreground)" }}
                    >
                      +234 (0) 123 456 7890
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
                      href="mailto:hello@canann.org"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--foreground)" }}
                    >
                      hello@canann.org
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
