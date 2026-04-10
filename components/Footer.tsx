import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-bg)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-[1200px] mx-auto px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-bold text-lg tracking-tight text-white"
            >
              Canann<span style={{ color: "var(--accent)" }}>.</span>
            </Link>
            <p
              className="mt-3 text-sm max-w-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Connecting underserved Nigerians with the tools, support, and
              community to build better futures. Give to Gain.
            </p>
            <div className="flex gap-5 mt-6">
              {[
                ["LinkedIn", "https://linkedin.com"],
                ["Twitter / X", "https://twitter.com"],
                ["Instagram", "https://instagram.com"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium transition-opacity hover:opacity-70"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "var(--font-be-vietnam)", color: "rgba(255,255,255,0.3)" }}
            >
              Organisation
            </p>
            <ul className="space-y-3">
              {[
                ["About", "/about"],
                ["Impact", "/impact"],
                ["Get Involved", "/get-involved"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "var(--font-be-vietnam)", color: "rgba(255,255,255,0.3)" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@canann.org"
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  hello@canann.org
                </a>
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Canann Impact Initiative. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
