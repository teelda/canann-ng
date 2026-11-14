import { DEVICE_SUPPORT_ANSWER, FUNDING_SUPPORT_ANSWER } from "@/lib/site";

export default function SupportNotice() {
  return (
    <aside className="rounded-2xl p-6 mb-8" style={{ backgroundColor: "var(--accent-light)" }} aria-label="Before requesting support">
      <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--foreground)" }}>
        Before requesting support
      </h2>
      <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
        {DEVICE_SUPPORT_ANSWER}
      </p>
      <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--foreground)" }}>
        {FUNDING_SUPPORT_ANSWER}
      </p>
      <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
        Our learners are secondary school students and recent school leavers. Our current school outreach focuses on Ogoja and Obudu in Cross River State. Partnership enquiries should explain how we could work together on Canann&apos;s programmes.
      </p>
    </aside>
  );
}
