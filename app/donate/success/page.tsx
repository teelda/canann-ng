"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Loader } from "lucide-react";

type TxData = {
  status: string;
  amount: number;
  email: string;
  name: string;
  reference: string;
  paid_at: string;
};

function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

function SuccessContent() {
  const params = useSearchParams();
  const reference = params.get("reference") ?? params.get("trxref");
  const [tx, setTx] = useState<TxData | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "failed" | "error">("loading");
  const verified = useRef(false);

  useEffect(() => {
    if (!reference || verified.current) return;
    verified.current = true;

    fetch(`/api/donate/verify?reference=${encodeURIComponent(reference)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) { setStatus("error"); return; }
        setTx(data);
        setStatus(data.status === "success" ? "success" : "failed");
      })
      .catch(() => setStatus("error"));
  }, [reference]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="flex flex-col items-center gap-4">
          <Loader size={32} className="animate-spin" style={{ color: "var(--accent)" }} />
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>Verifying your payment…</p>
        </div>
      </div>
    );
  }

  if (status === "failed" || status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center px-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#fef2f2" }}>
            <span className="text-2xl">✕</span>
          </div>
          <h1 className="text-2xl font-semibold mb-3" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
            Payment not confirmed
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            We couldn&apos;t confirm your payment. If money was deducted, please contact us with reference{" "}
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>{reference}</span> and we&apos;ll sort it out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Try Again
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Hero thank-you */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-8 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <CheckCircle size={28} color="white" />
          </div>
          <h1
            className="font-medium text-white leading-tight"
            style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.03em" }}
          >
            Thank you{tx?.name ? `, ${tx.name.split(" ")[0]}` : ""}!
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: 18 }}>
            Your gift of{" "}
            <span className="text-white font-semibold">{tx ? fmt(tx.amount) : ""}</span>{" "}
            is already making a difference. A learner somewhere just got a little closer to their future.
          </p>
        </div>
      </section>

      {/* Receipt + next steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-[640px] mx-auto px-5 md:px-8">

          {/* Receipt card */}
          <div className="rounded-[24px] p-7 mb-8" style={{ backgroundColor: "var(--surface)" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-5" style={{ color: "var(--muted)" }}>
              Payment summary
            </p>
            <dl className="space-y-3">
              {[
                ["Amount", tx ? fmt(tx.amount) : "—"],
                ["Email", tx?.email ?? "—"],
                ["Reference", reference ?? "—"],
                ["Date", tx?.paid_at ? new Date(tx.paid_at).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" }) : "—"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-sm" style={{ color: "var(--muted)" }}>{label}</dt>
                  <dd className="text-sm font-semibold text-right" style={{ color: "var(--foreground)", wordBreak: "break-all" }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* What happens next */}
          <div className="rounded-[24px] p-7 mb-10" style={{ backgroundColor: "var(--accent)" }}>
            <p className="text-sm font-semibold text-white mb-3">What happens next</p>
            <ul className="space-y-2">
              {[
                "A receipt will be sent to your email address.",
                "Your donation is allocated to our active programmes within 7 days.",
                "We publish quarterly impact reports — you'll be able to see your contribution at work.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span className="shrink-0 mt-0.5 font-semibold text-white">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Back to Home
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/donate"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
            >
              Donate Again
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DonateSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#ffffff" }}>
        <div className="flex flex-col items-center gap-4">
          <Loader size={32} className="animate-spin" style={{ color: "var(--accent)" }} />
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>Loading…</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
