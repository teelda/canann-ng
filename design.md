# Canann Design System
> Derived from keentohire.com analysis + adapted for NGO context

---

## Origin Reference
**Source:** https://keentohire.com  
**Built with:** Framer  
**Design character:** Friendly-premium. Clean editorial with bold type, warm neutrals, and one electric accent.

---

## Color Tokens

```
Primary Background:   #f2f3f5   — cool off-white, main page bg
Dark Background:      #181a19   — near-black with green undertone (hero, CTA sections)
Dark Forest:          #203e27   — deep forest green (headings on dark bg)
Accent (CTA):         #D4A843   — warm gold (adapted from Keen's #e2ee37 lime)
Accent Light:         #f5edd6   — pale gold tint (chip bg, hover states)
Card Surface:         #e4e4d8   — warm cream/beige (card backgrounds)
Card Surface Alt:     #f7f5f2   — warm near-white (alternate cards)
Body Text:            #181a19   — same as dark bg
Secondary Text:       #5f6566   — medium gray
Muted Text:           #9ca3af   — light gray
White:                #ffffff
Border:               #e8e6e0   — warm light border
```

### Semantic Mapping
| Role | Token | Hex |
|---|---|---|
| Page background | `bg-primary` | `#f2f3f5` |
| Dark section | `bg-dark` | `#181a19` |
| Hero text | `text-on-dark` | `#ffffff` |
| Heading on light | `text-primary` | `#181a19` |
| Body text | `text-body` | `#2a3132` |
| Subtle text | `text-muted` | `#5f6566` |
| CTA button | `accent` | `#D4A843` |
| CTA text | `accent-fg` | `#181a19` |
| Card bg | `surface` | `#e4e4d8` |

---

## Typography

### Font Stack
```css
Primary:    'DM Sans', sans-serif       — headings, UI, body
Secondary:  'Be Vietnam Pro', sans-serif — accent text, labels
```

### Scale (mirrors keentohire.com)
| Name | Size | Weight | Use |
|---|---|---|---|
| `display-xl` | 88px / 5.5rem | 700 | Hero main headline (desktop) |
| `display-lg` | 72px / 4.5rem | 700 | Hero headline (tablet) |
| `display-md` | 54px / 3.375rem | 700 | Section hero headings |
| `heading-xl` | 48px / 3rem | 600 | Major section titles |
| `heading-lg` | 40px / 2.5rem | 600 | Sub-section titles |
| `heading-md` | 32px / 2rem | 600 | Card headings, subheadings |
| `heading-sm` | 24px / 1.5rem | 600 | Card titles |
| `body-lg` | 18px / 1.125rem | 400 | Hero subtext, intro copy |
| `body-md` | 16px / 1rem | 400 | Default body |
| `body-sm` | 14px / 0.875rem | 400 | Secondary body |
| `label` | 12px / 0.75rem | 500 | Uppercase labels, tags |

### Letter Spacing
- Display/headings: `-0.02em` to `-0.03em` (tight)
- Labels/tags: `+0.08em` to `+0.12em` (wide)
- Body: `0` (default)

---

## Spacing System
```
4   → 4px    — micro gap
8   → 8px    — tight gap
12  → 12px   — element gap
16  → 16px   — inner padding
20  → 20px   — component gap
24  → 24px   — card inner padding (sm)
32  → 32px   — card inner padding (md)
40  → 40px   — section inner gap
48  → 48px   — section padding (mobile)
64  → 64px   — section padding (tablet)
80  → 80px   — section padding (desktop)
120 → 120px  — hero padding
```

---

## Border Radius
```
pill      → 50px   — CTA buttons
chip      → 37px   — tags, filters
card      → 24px   — content cards
card-sm   → 16px   — small cards, location cards
element   → 15px   — inputs, small elements
tiny      → 5px    — subtle rounding
circle    → 50%    — avatars, icons
```

---

## Shadows
```
card:     0 2px 12px rgba(0,0,0,0.06)
card-md:  0 4px 24px rgba(0,0,0,0.08)
button:   0 2px 8px rgba(212,168,67,0.3)   — gold glow on CTA
```

---

## Motion System (from Framer data-attributes)

### Entrance Animations (keentohire pattern)
All elements enter with: `opacity: 0 → 1` + `scale: 0.5 → 1` or `translateY: 20px → 0`

```
Stagger delay:  80ms between children
Duration:       0.5s – 0.7s
Easing:         cubic-bezier(0.16, 1, 0.3, 1)  — "spring-like" ease-out
Scale entrance: scale(0.5) → scale(1)   [hero badge, cards]
Fade+slide:     translateY(20px) → translateY(0) + opacity 0→1  [text blocks]
```

### Scroll Animations
- `viewport: { once: true, margin: "-80px" }` — trigger when 80px into view
- Cards stagger at `i * 0.08s` delay

### Hover States
```
Button hover:   scale(1.02), opacity 0.9
Card hover:     translateY(-4px), shadow increase
Link hover:     opacity 0.7
Image hover:    scale(1.05) with overflow:hidden parent
```

### Marquee/Ticker
- Continuous horizontal scroll for role/tag lists
- Duration: 30s linear infinite
- Duplicate content for seamless loop

---

## Component Patterns

### CTA Button (Primary)
```
Background:    #D4A843
Text:          #181a19
Font:          DM Sans, 14px, weight 600
Padding:       14px 28px
Border-radius: 50px (pill)
No border
Shadow:        0 2px 8px rgba(212,168,67,0.25)
Hover:         opacity 0.9, scale 1.02
```

### CTA Button (Ghost)
```
Background:    transparent
Border:        1.5px solid rgba(255,255,255,0.2)
Text:          rgba(255,255,255,0.85)
Border-radius: 50px
Hover:         border rgba(255,255,255,0.4)
```

### Tag / Chip
```
Background:    #e4e4d8  (or accent-light for active)
Text:          #2a3132, 13px, weight 500
Padding:       6px 14px
Border-radius: 37px
```

### Section Label (eyebrow)
```
Text:          12px, weight 600, UPPERCASE
Letter-spacing: 0.1em
Color:         #D4A843 (on light bg) or rgba(212,168,67,0.8) (on dark bg)
Margin-bottom: 16px
```

### Content Card
```
Background:    #e4e4d8 or #ffffff
Border-radius: 24px
Padding:       32px
Shadow:        0 2px 12px rgba(0,0,0,0.06)
```

### Testimonial Card
```
Background:    #f7f5f2 (light) or rgba(255,255,255,0.05) (dark)
Border-radius: 24px
Padding:       32px 36px
Quote size:    20px, italic, DM Sans
Attribution:   14px, weight 500
Avatar:        40px circle
```

---

## Page Layout Structure (keentohire mirror)

```
1. NAV           — sticky, transparent → frosted on scroll
2. HERO          — dark bg (#181a19), huge type, scale-in animation, CTA pill
3. SOLUTIONS     — light bg (#f2f3f5), 3-col grid with icons
4. PROGRAMS      — light/cream bg, card grid (like "Roles We Hired")
5. MARQUEE       — full-width scrolling ticker of keywords
6. TESTIMONIALS  — dark bg, quote cards with avatars
7. REACH         — light bg, location/reach cards
8. PROCESS CTA   — dark bg, comparison + form
9. FOOTER        — dark bg
```

---

## Navigation
```
Height:        64px
Scroll state:  backdrop-blur(20px) + bg white/90%
Logo:          DM Sans, 18px, weight 700
Nav links:     14px, weight 500, color #2a3132
CTA link:      pill button, accent color
Mobile:        hamburger → slide-down menu
```

---

## Image Treatment
- Aspect ratios: `4/3` (landscape cards), `3/4` (portrait hero), `1/1` (avatars)
- Border-radius: 16px–24px on content images
- Slight darkening overlay on hero bg images: `rgba(24,26,25,0.5)`
- Scale on hover: `1.05` with `overflow:hidden` parent
- Object-fit: cover

---

## Grid System
```
Max-width:    1200px
Padding:      0 32px (desktop), 0 20px (mobile)
Cols:         12-col grid
Gap:          24px (card gap), 40px (section gap)
```

---

## Breakpoints
```
Mobile:   < 810px    (single column, 20px padding)
Tablet:   810–1199px (2-col, 24px padding)
Desktop:  ≥ 1200px   (full multi-col, 32px padding)
```

---

## Canann-Specific Adaptations
- Keen's `#e2ee37` lime → Canann's `#D4A843` warm gold (appropriate for NGO/African context)
- "Build Your Dream Team" → "Get Involved" / "Join the Movement"
- Role cards → Programme cards (Education, Tools, Community, Support)
- "Trusted by Founders" → "Trusted by Partners"
- Locations (Cape Town, Bogotá) → Communities (Lagos, Abuja, Enugu)
- Testimonials from CEOs → Testimonials from beneficiaries + partners
