const keywords = [
  "Digital Skills",
  "Community",
  "Tools & Access",
  "Employment",
  "Mentorship",
  "Give to Gain",
  "Education",
  "Opportunity",
  "Empowerment",
  "Lagos",
  "Abuja",
  "Enugu",
  "Tech Training",
  "Career Growth",
  "Support Networks",
  "Change Makers",
];

export default function Marquee() {
  const doubled = [...keywords, ...keywords];

  return (
    <section
      className="py-6 overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="animate-marquee">
        {doubled.map((word, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="text-sm font-semibold uppercase tracking-[0.08em] px-5"
              style={{
                fontFamily: "var(--font-be-vietnam)",
                color: i % 3 === 0 ? "var(--accent)" : "rgba(255,255,255,0.25)",
              }}
            >
              {word}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
