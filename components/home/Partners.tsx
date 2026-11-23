import Image from "next/image";

// Logos are each partner's own, from their websites. Heights are set per logo so they look the same size.
const partners = [
  {
    name: "Tech In School · Calabar Tech Community",
    href: "https://calabartechcommunity.com/tis",
    logo: "/partners/calabar-tech-community.png",
    w: 244,
    h: 240,
    cls: "h-[76px] md:h-[92px]",
  },
  {
    name: "YALI Network Abuja",
    href: "https://yalinetworkabuja.com/partners.html",
    logo: "/partners/yali-network-abuja.png",
    w: 256,
    h: 240,
    cls: "h-[76px] md:h-[92px]",
  },
  {
    name: "Tech Conference Calabar",
    href: "https://calabartechconf.ng/2025",
    logo: "/partners/tech-conference-calabar.png",
    w: 825,
    h: 200,
    cls: "h-[40px] md:h-[48px]",
  },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-center" style={{ color: "var(--accent)" }}>
          In partnership with
        </p>
        <ul className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col items-center justify-between gap-6 rounded-3xl bg-white px-6 pt-10 pb-6 md:pt-12 md:pb-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                style={{ border: "1.5px solid var(--border-solid)" }}
              >
                <div className="h-[76px] md:h-[92px] flex items-center justify-center">
                  <Image src={p.logo} alt="" width={p.w} height={p.h} className={`w-auto ${p.cls}`} />
                </div>
                <span className="text-sm font-medium text-center leading-snug" style={{ color: "var(--muted)" }}>
                  {p.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
