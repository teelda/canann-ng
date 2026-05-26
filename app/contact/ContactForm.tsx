"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try emailing us directly at hellocanann@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <CheckCircle size={44} style={{ color: "var(--accent)" }} />
        <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
          Message sent.
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Thanks for reaching out. We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid var(--border)",
    fontSize: "14px",
    color: "var(--foreground)",
    backgroundColor: "#ffffff",
    outline: "none",
    fontFamily: "inherit",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "var(--muted)",
    marginBottom: "8px",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-8" style={{ color: "var(--foreground)" }}>
        Send A Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>I&apos;m reaching out to...</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            style={{ ...inputStyle, appearance: "auto" } as React.CSSProperties}
          >
            <option value="general">General enquiry</option>
            <option value="donate">Make a donation</option>
            <option value="volunteer">Volunteer</option>
            <option value="partner">Partner with Canann</option>
            <option value="ai-education">AI Education Partnership</option>
            <option value="pad-a-girl">Pad a Girl Partnership</option>
            <option value="media">Media / Press</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Message</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us what's on your mind..."
            style={{ ...inputStyle, resize: "none" } as React.CSSProperties}
          />
        </div>

        {error && (
          <p className="text-sm" style={{ color: "#dc2626" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {loading ? "Sending…" : "Send Message"}
          {!loading && <Send size={14} />}
        </button>
      </form>
    </div>
  );
}
