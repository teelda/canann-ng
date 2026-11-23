import Image from "next/image";

// Logos are each partner's own, from their websites. Heights are set per logo so they look the same size.
const partners = [
  {
    name: "Tech In School Initiative, Calabar Tech Community",
    href: "https://calabartechcommunity.com/tis",
    logo: "/partners/calabar-tech-community.png",
    w: 244,
    h: 240,
    cls: "h-[52px] md:h-[76px]",
  },
  {
    name: "YALI Network Abuja",
    href: "https://yalinetworkabuja.com/partners.html",
    logo: "/partners/yali-network-abuja.png",
    w: 256,
    h: 240,
    cls: "h-[52px] md:h-[76px]",
  },
  {
    name: "Tech Conference Calabar",
    href: "https://calabartechconf.ng/2025",
    logo: "/partners/tech-conference-calabar.png",
    w: 825,
    h: 200,
    cls: "h-[30px] md:h-[44px]",
  },
];

export default function Partners() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
          In partnership with
        </p>
        <ul className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-6 sm:gap-x-12 md:gap-x-20">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                className="block transition-opacity hover:opacity-75"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className={`w-auto ${p.cls}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
