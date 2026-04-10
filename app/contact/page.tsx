"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: wire to an API route or form service (e.g. Formspree, Resend)
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#181a19] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight max-w-2xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-md leading-relaxed">
            Whether you want to volunteer, partner, ask a question, or just say
            hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Reach us
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@canann.org"
                    className="text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity"
                  >
                    hello@canann.org
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="text-sm text-gray-600">Nigeria</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Follow us
                  </p>
                  <div className="flex gap-4">
                    {["LinkedIn", "Twitter / X", "Instagram"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="mt-12 p-6 rounded-2xl"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Response time
                </p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  We typically respond within 48 hours. For urgent partnership
                  inquiries, please mention it in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-12">
                  <CheckCircle
                    size={40}
                    style={{ color: "var(--accent)" }}
                  />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Message sent.
                  </h3>
                  <p className="text-base text-gray-500">
                    Thanks for reaching out. We&apos;ll be in touch within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-shadow"
                      style={{ "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-shadow"
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      I&apos;m reaching out to...
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 bg-white"
                    >
                      <option value="general">General enquiry</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="partner">Partner with Canann</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Send Message
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
