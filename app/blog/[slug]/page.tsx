import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.22 }}
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--dark-bg) 0%, transparent 60%)" }} />
        </div>

        <div className="relative max-w-[800px] mx-auto px-5 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold mb-8 transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.07em] px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: "rgba(57,164,107,0.18)", color: "var(--accent)" }}
          >
            {post.category}
          </span>

          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(28px,4.5vw,52px)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.date}</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <p
            className="text-base md:text-lg leading-relaxed mb-8 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            {post.excerpt}
          </p>

          <div
            className="relative w-full rounded-3xl overflow-hidden mb-10"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>

          <div className="space-y-6">
            {post.body.map((item, i) => {
              if (item.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-bold leading-snug tracking-tight pt-4"
                    style={{ fontSize: "clamp(18px,2.2vw,24px)", color: "var(--foreground)", letterSpacing: "-0.02em" }}
                  >
                    {item.slice(3)}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item}
                </p>
              );
            })}
          </div>

          {/* Internal CTA */}
          {post.cta && (
            <div
              className="mt-10 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              <p className="text-sm font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                {post.cta.text}
              </p>
              <Link
                href={post.cta.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shrink-0 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Learn more
                <ArrowUpRight size={14} />
              </Link>
            </div>
          )}

          {/* Divider */}
          <div className="mt-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              <ArrowLeft size={14} />
              Back to all stories
            </Link>
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
