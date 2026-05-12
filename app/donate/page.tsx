"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Heart, Laptop, BookOpen, Users } from "lucide-react";

const PRESETS = [5000, 10000, 25000, 50000];

const IMPACT = [
  { icon: Laptop, text: "Funds a refurbished device for a learner in a rural school" },
  { icon: BookOpen, text: "Prints and ships an offline Tech Journal to a remote community" },
  { icon: Users, text: "Covers one session of digital skills training for 10 students" },
  { icon: Heart, text: "Contributes toward the 150K Sponsorship Fund for young builders" },
];

function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function DonatePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(10000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = custom ? Number(custom.replace(/[^0-9]/g, "")) : selected;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!amount || amount < 100) { setError("Please enter an amount of at least ₦100."); return; }
    if (!email || !name) { setError("Please fill in your name and email."); return; }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/donate/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email, name, message }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Something went wrong. Please try again."); setLoading(false); return; }
      router.push(data.authorization_url);
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--accent)" }}>
            Donate
          </p>
          <h1
            className="font-medium text-white leading-tight max-w-2xl"
            style={{ fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em" }}
          >
            One Device.<br />One Lesson.<br />One Life Changed.
          </h1>
          <p className="mt-6 text-base max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Children in Nigerian classrooms are still learning about computers on chalkboards. Your donation puts real technology in their hands — today.
          </p>
        </div>
      </section>

      {/* Impact story bar */}
      <section style={{ backgroundColor: "var(--accent)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6">
          <p className="text-sm text-white leading-relaxed max-w-3xl">
            <span className="font-semibold">Chidi, 16, Cross River State.</span>{" "}
            When Canann delivered a laptop to his school, it was the first time Chidi had ever touched a computer. Three months later, he built his first web page. He plans to study software engineering.
          </p>
        </div>
      </section>

      {/* Main form + sidebar */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">

            {/* LEFT — form */}
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold tracking-tight mb-8" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                Choose your gift
              </h2>

              {/* Preset amounts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setSelected(p); setCustom(""); }}
                    className="py-3 rounded-2xl text-sm font-semibold transition-all"
                    style={{
                      backgroundColor: selected === p && !custom ? "var(--accent)" : "var(--surface)",
                      color: selected === p && !custom ? "#ffffff" : "var(--foreground)",
                      border: "2px solid",
                      borderColor: selected === p && !custom ? "var(--accent)" : "transparent",
                    }}
                  >
                    {fmt(p)}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-8"
                style={{
                  border: "2px solid",
                  borderColor: custom ? "var(--accent)" : "var(--border-solid)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <span className="text-sm font-medium shrink-0" style={{ color: "var(--muted)" }}>₦</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter custom amount"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value.replace(/[^0-9]/g, ""));
                    setSelected(null);
                  }}
                  className="flex-1 bg-transparent text-sm outline-none font-medium"
                  style={{ color: "var(--foreground)" }}
                />
              </div>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all"
                    style={{
                      border: "2px solid var(--border-solid)",
                      backgroundColor: "var(--surface)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all"
                    style={{
                      border: "2px solid var(--border-solid)",
                      backgroundColor: "var(--surface)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
                  Message <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Leave a message of encouragement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none resize-none"
                  style={{
                    border: "2px solid var(--border-solid)",
                    backgroundColor: "var(--surface)",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {error && (
                <p className="text-sm mb-4 font-medium" style={{ color: "#e53e3e" }}>{error}</p>
              )}

              {/* Summary + CTA */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl mb-6"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] mb-0.5" style={{ color: "var(--muted)" }}>
                    You&apos;re donating
                  </p>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}>
                    {amount ? fmt(amount) : "—"}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {loading ? "Redirecting…" : "Continue to Payment"}
                  {!loading && (
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    >
                      <ArrowRight size={13} color="white" />
                    </span>
                  )}
                </button>
              </div>

              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Payments are processed securely by{" "}
                <span className="font-semibold">Paystack</span>. You&apos;ll receive a receipt by email.
              </p>
            </form>

            {/* RIGHT — sidebar */}
            <div className="space-y-6">
              {/* Your gift will */}
              <div className="rounded-[24px] p-7" style={{ backgroundColor: "var(--surface)" }}>
                <p className="text-sm font-semibold mb-5 tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                  Your gift will…
                </p>
                <ul className="space-y-4">
                  {IMPACT.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--accent-light)" }}
                      >
                        <Icon size={14} style={{ color: "var(--accent)" }} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust note */}
              <div className="rounded-[24px] p-7" style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
                <p className="text-3xl font-bold tracking-tight mb-1" style={{ letterSpacing: "-0.04em" }}>95%</p>
                <p className="text-sm font-semibold mb-2">of every donation reaches programmes</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  We keep overhead minimal so your money goes into devices, journals, training sessions, and sponsorships — not administration.
                </p>
              </div>

              {/* Contact note */}
              <p className="text-xs px-1 leading-relaxed" style={{ color: "var(--muted)" }}>
                Questions about donating?{" "}
                <Link href="/contact" className="font-semibold underline underline-offset-2" style={{ color: "var(--accent)" }}>
                  Reach out to us
                </Link>{" "}
                and we&apos;ll respond within 48 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
