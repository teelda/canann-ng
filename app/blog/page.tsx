import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Education Nigeria & Digital Divide Stories — Canann Blog",
  description:
    "Stories and insights on AI education in Nigeria, closing the digital divide, offline learning, and grassroots skills training across Nigerian communities.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-end mb-6">
            <nav className="flex items-center gap-2 text-xs" aria-label="Breadcrumb">
              <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.28)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.38)" }}>Blog</span>
            </nav>
          </div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Blog
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            style={{ fontSize: "clamp(32px,5vw,62px)" }}
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
                key={post.slug}
                className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                  <h2 className="text-sm font-medium leading-snug tracking-tight mb-2 flex-1" style={{ color: "var(--foreground)", fontSize: "clamp(20px,2vw,28px)" }}>
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
                      href={`/blog/${post.slug}`}
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
