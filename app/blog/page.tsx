import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Canann Impact Initiative",
  description: "Stories, insights, and updates from the front lines of our community work.",
};

const posts = [
  {
    title: "Teaching AI on Chalkboards: Inside Nigeria's Digital Divide",
    excerpt: "What it looks like when schools still draw computer screens on blackboards — and how Canann is putting real devices in those classrooms.",
    date: "February 25, 2026",
    category: "Digital Access",
    image: "/MEM_0667.jpg",
    readTime: "4 min read",
  },
  {
    title: "How Our Offline Tech Journals Reach Where the Internet Can't",
    excerpt: "For remote communities with no connectivity, our printed resources bring digital education to the last mile — no signal required.",
    date: "February 25, 2026",
    category: "Offline Learning",
    image: "/7N4A2919.png",
    readTime: "3 min read",
  },
  {
    title: "The 150,000: Why We're Sponsoring a Generation of African Builders",
    excerpt: "Our flagship programme is sponsoring 150,000 professionals, innovators, and school graduates to build solutions for their own communities.",
    date: "March 10, 2026",
    category: "Sponsorship",
    image: "/IMG_9368.jpg",
    readTime: "5 min read",
  },
  {
    title: "From Learner to Builder: Stories from Our Skills Programme",
    excerpt: "The moment a student realises they can build — not just consume — technology. Stories from the ground in Lagos and Cross River.",
    date: "March 5, 2026",
    category: "Skills Training",
    image: "/volunterr.jpg",
    readTime: "6 min read",
  },
  {
    title: "Why Curricula Can't Wait: Closing the AI Knowledge Gap in Schools",
    excerpt: "Nigerian schools are graduating students into a digital world without the tools to navigate it. Here's how we're filling the gap right now.",
    date: "February 26, 2026",
    category: "Education",
    image: "/m 115.jpg",
    readTime: "7 min read",
  },
  {
    title: "Green Workforce: Building Tech Solutions That Actually Fit Africa",
    excerpt: "Sustainable, locally-rooted innovation isn't a trend — it's how we make sure the digital future benefits African communities, not just tech hubs.",
    date: "February 25, 2026",
    category: "Green Workforce",
    image: "/mission1.jpg",
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
            href="/donate"
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
