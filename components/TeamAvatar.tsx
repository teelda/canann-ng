type HairStyle = "long" | "curlyShort" | "bun" | "headwrap" | "fade" | "afro";

interface TeamAvatarProps {
  bg: string;
  skin: string;
  hair: string;
  top: string;
  wrapAccent?: string;
  hairStyle: HairStyle;
  className?: string;
}

// Flat, minimal illustrated bust portraits — Notion-style stand-ins for team
// members without a photo. Rendered inside a square/portrait frame; the SVG's
// default overflow:hidden crops the torso to a bust-length "photo".
export default function TeamAvatar({
  bg,
  skin,
  hair,
  top,
  wrapAccent,
  hairStyle,
  className,
}: TeamAvatarProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ width: "100%", height: "100%", display: "block", backgroundColor: bg }}
      aria-hidden="true"
    >
      {/* Afro is drawn behind the head so it forms a halo around it */}
      {hairStyle === "afro" && <circle cx="100" cy="78" r="58" fill={hair} />}
      {hairStyle === "long" && (
        <path
          d="M46 76 C46 24 154 24 154 76 L160 190 C160 206 141 209 135 192 C131 176 129 158 127 142 L127 96 L73 96 L73 142 C71 158 69 176 65 192 C59 209 40 206 40 190 Z"
          fill={hair}
        />
      )}

      {/* Torso / shoulders */}
      <path
        d="M-10 214 C -10 150 42 126 100 126 C158 126 210 150 210 214 Z"
        fill={top}
      />

      {/* Neck */}
      <rect x="86" y="106" width="28" height="34" rx="8" fill={skin} />

      {/* Head */}
      <circle cx="100" cy="88" r="46" fill={skin} />

      {/* Front hair layers */}
      {hairStyle === "curlyShort" && (
        <>
          <path
            d="M54 68 C54 32 146 32 146 68 C146 52 138 44 100 42 C62 44 54 52 54 68 Z"
            fill={hair}
          />
          {[54, 68, 82, 96, 110, 124, 138, 146].map((cx, i) => (
            <circle key={cx} cx={cx} cy={i % 2 === 0 ? 45 : 38} r="11" fill={hair} />
          ))}
        </>
      )}
      {hairStyle === "fade" && (
        <path
          d="M54 66 C54 30 146 30 146 66 C146 50 138 42 100 40 C62 42 54 50 54 66 Z"
          fill={hair}
        />
      )}
      {hairStyle === "bun" && (
        <>
          <path
            d="M52 70 C52 28 148 28 148 70 C148 55 140 46 100 44 C60 46 52 55 52 70 Z"
            fill={hair}
          />
          <circle cx="100" cy="30" r="15" fill={hair} />
        </>
      )}
      {hairStyle === "headwrap" && (
        <>
          <path
            d="M48 80 C48 28 152 28 152 80 C152 58 140 44 100 42 C60 44 48 58 48 80 Z"
            fill={hair}
          />
          <rect
            x="50"
            y="52"
            width="100"
            height="11"
            rx="5.5"
            fill={wrapAccent ?? "#ffffff"}
            opacity="0.85"
            transform="rotate(-2 100 57)"
          />
          <ellipse cx="147" cy="64" rx="11" ry="9" fill={hair} />
        </>
      )}

      {/* Face */}
      <ellipse cx="84" cy="88" rx="4" ry="5" fill="#241d17" opacity="0.75" />
      <ellipse cx="116" cy="88" rx="4" ry="5" fill="#241d17" opacity="0.75" />
      <path
        d="M84 105 Q100 116 116 105"
        stroke="#241d17"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
