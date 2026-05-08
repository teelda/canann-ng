import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Canann Impact Initiative",
  description: "Stories, insights, and updates from the front lines of our community work.",
};

const posts = [
  {
    title: "Safe Shelter. Stronger Lives. Sustainable Futures.",
    excerpt: "How Canann's emergency housing programme is giving displaced families a foundation to rebuild from — not just a roof over their heads.",
    date: "February 25, 2026",
    category: "Emergency Relief",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80",
    readTime: "4 min read",
  },
  {
    title: "Delivering Warm Meals, Spreading Real Hope",
    excerpt: "Behind every meal distribution is a story of community members who refused to let their neighbours go hungry.",
    date: "February 25, 2026",
    category: "Food & Nutrition",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
    readTime: "3 min read",
  },
  {
    title: "Hope That Feeds, Protects, and Uplifts Communities",
    excerpt: "Our integrated approach — food security, education, and healthcare together — is showing results that last beyond the programme.",
    date: "February 25, 2026",
    category: "Community",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
    readTime: "5 min read",
  },
  {
    title: "Where Compassion Builds Stronger Communities",
    excerpt: "Meet the volunteers who show up every week — not for recognition, but because they believe the work matters.",
    date: "February 25, 2026",
    category: "Volunteering",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80",
    readTime: "6 min read",
  },
  {
    title: "Bringing hope through food, shelter, and support",
    excerpt: "A snapshot of what our teams delivered over the past quarter — and what we learned along the way.",
    date: "February 26, 2026",
    category: "Impact Report",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=700&q=80",
    readTime: "7 min read",
  },
  {
    title: "Because Every Plate and Every Home Deserves Care",
    excerpt: "The intersection of food security and dignity — why how we give matters as much as what we give.",
    date: "February 25, 2026",
    category: "Food & Nutrition",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Blog
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            style={{ fontSize: "clamp(40px,6vw,72px)" }}
          >
            Stories and Insights
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Every journey we document is fuelled by real struggles, real efforts, and real progress.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.07em] px-3 py-1 rounded-full"
                      style={{ fontFamily: "var(--font-onest)", backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted-light)" }}>{post.readTime}</span>
                  </div>

                  <h2 className="text-sm font-medium leading-snug tracking-tight mb-2 flex-1" style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </h2>
                  <p className="text-xs leading-relaxed mt-2" style={{ color: "var(--muted)" }}>
                    {post.excerpt}
                  </p>

                  <div
                    className="flex items-center justify-between mt-5 pt-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--muted-light)" }}>{post.date}</span>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
                      style={{ color: "var(--accent)" }}
                    >
                      Read More
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Your Kindness Can Change a Life Today
          </h2>
          <p className="mt-4 text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Even a small donation can make a life-changing difference for someone in need.
          </p>
          <Link
            href="/contact?type=donate"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Donate Now
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
