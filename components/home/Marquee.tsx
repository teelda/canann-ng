const keywords = [
  "Digital Literacy",
  "Tech Access",
  "AI Education",
  "Offline Learning",
  "Skills Training",
  "Nigeria",
  "Africa",
  "Innovation",
  "Green Workforce",
  "150K Sponsorships",
  "STEM",
  "Secondary Schools",
  "Remote Communities",
  "Future Ready",
  "Build",
  "Grassroots",
];

export default function Marquee() {
  const doubled = [...keywords, ...keywords];

  return (
    <section
      className="py-5 overflow-hidden"
      style={{
        backgroundColor: "var(--dark-bg)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="animate-marquee">
        {doubled.map((word, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="text-sm font-semibold uppercase tracking-[0.08em] px-5"
              style={{
                fontFamily: "var(--font-onest)",
                color: i % 4 === 0 ? "var(--accent)" : "rgba(255,255,255,0.2)",
              }}
            >
              {word}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
