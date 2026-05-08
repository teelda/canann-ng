# Canann Impact Initiative — Website

Official website for **Canann Impact Initiative**, a Nigerian nonprofit providing food, education, healthcare, and emergency relief to vulnerable communities across Nigeria.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **Framer Motion** — page animations
- **Lucide React** — icons
- **Onest** — typeface

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  about-us/        About Us page
  blog/            Blog listing
  causes/          Causes page
  contact/         Contact & donation form
  page.tsx         Homepage
  layout.tsx       Root layout + fonts
  globals.css      Design tokens & global styles

components/
  Nav.tsx          Floating pill navigation
  Footer.tsx       Footer with newsletter signup
  home/            Homepage section components
```

## Design Tokens

Colours and typography are defined as CSS variables in `app/globals.css`:

| Variable | Value | Use |
|---|---|---|
| `--accent` | `#39a46b` | Primary green |
| `--dark-bg` | `#0c201a` | Dark sections |
| `--foreground` | `#222222` | Body text |
| `--muted` | `#727272` | Secondary text |
| `--surface` | `#f0f1f2` | Card backgrounds |

Section vertical spacing is controlled globally via the `.section` class — adjust the `clamp()` values in `globals.css` to change spacing site-wide.

## Build & Deploy

```bash
npm run build   # production build
npm start       # start production server
```

Recommended deployment: [Vercel](https://vercel.com)
