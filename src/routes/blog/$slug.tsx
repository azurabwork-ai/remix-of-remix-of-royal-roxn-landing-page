import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  Download,
  Flame,
  Award,
} from "lucide-react";

import logoAsset from "@/assets/logo_royal.png.asset.json";
import { BLOG_POSTS, type BlogPost } from "@/data/blog-posts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
      return {
        meta: [{ title: "Article Not Found | Royal RoXn" }],
      };
    }

    const currentUrl = `https://clients.royalroxn.com/blog/${post.slug}`;

    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:url", content: currentUrl },
        {
          property: "og:image",
          content: post.imageUrl || "https://clients.royalroxn.com/logo_royal.png",
        },
        { property: "article:published_time", content: post.publishedDate },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription },
        {
          name: "twitter:image",
          content: post.imageUrl || "https://clients.royalroxn.com/logo_royal.png",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: currentUrl,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            url: currentUrl,
            image: post.imageUrl || "https://clients.royalroxn.com/logo_royal.png",
            datePublished: post.publishedDate,
            dateModified: post.publishedDate,
            author: {
              "@type": "Organization",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Royal RoXn",
              logo: {
                "@type": "ImageObject",
                url: "https://clients.royalroxn.com/logo_royal.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": currentUrl,
            },
            keywords: post.keywords,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://clients.royalroxn.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://clients.royalroxn.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: currentUrl,
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: BlogPostDetailPage,
});

function BlogNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 lg:h-22 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5">
          <img
            src={logoAsset.url}
            alt="Royal RoXn"
            width={68}
            height={68}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl lg:text-2xl text-[color:var(--ink)]">
            Royal RoXn
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
          <Link
            to="/"
            className="text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)]"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)]"
          >
            Case Studies
          </Link>
          <Link to="/blog" className="text-sm font-semibold text-[color:var(--gold)]">
            Blog
          </Link>
          <a
            href="tel:+13435994999"
            className="hidden items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)] md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            +1 (343) 599-4999
          </a>
        </div>
      </div>
    </header>
  );
}

function BlogPostDetailPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
        <BlogNav />
        <div className="mx-auto max-w-md px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold">Article Not Found</h1>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            The article you are looking for does not exist or has been relocated.
          </p>
          <div className="mt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2 text-sm font-bold text-[color:var(--ink)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <BlogNav />

      {/* Breadcrumb Bar */}
      <div className="border-b border-[color:var(--border)] bg-white px-4 py-3 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
          <Link to="/" className="hover:text-[color:var(--gold)]">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blog" className="hover:text-[color:var(--gold)]">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-[color:var(--ink)] font-medium">{post.title}</span>
        </div>
      </div>

      {/* Main Reader Container */}
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all articles
        </Link>

        {/* Article Header */}
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[color:var(--gold)]/15 px-3 py-1 text-xs font-bold text-[color:var(--gold)]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[color:var(--muted-foreground)]">
              <Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[color:var(--muted-foreground)]">
              <Clock className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[color:var(--ink)] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between border-y border-[color:var(--border)] py-4">
            <div>
              <div className="text-xs font-bold text-[color:var(--ink)]">{post.author.name}</div>
              <div className="text-[11px] text-[color:var(--muted-foreground)]">
                {post.author.role}
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          {/* Featured Article Cover Image */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gray-100 shadow-sm">
            <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between border-t border-[color:var(--border)] bg-white px-5 py-3 text-xs text-[color:var(--muted-foreground)]">
              <span className="font-medium text-[color:var(--ink)]">{post.imageAlt}</span>
              <span className="hidden sm:inline font-semibold text-[color:var(--gold)]">
                Royal RoXn Canadian Advisory
              </span>
            </div>
          </div>
        </header>

        {/* Personal Story & Proof Hook (Video Formula: Hook + Real Proof + Transparent Context) */}
        {post.personalStoryHook && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--gold)]">
              <Award className="h-4 w-4" />
              <span>Real World Market Verification</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-800 sm:text-base italic">
              "{post.personalStoryHook.narrative}"
            </p>

            {/* Proof Metric Chips */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {post.personalStoryHook.proofStats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-xl border border-gray-100 bg-gray-50/80 p-3.5 text-center transition-all hover:border-[color:var(--gold)]/40 hover:bg-amber-50/20"
                >
                  <div className="font-display text-lg font-extrabold text-[color:var(--ink)] sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium text-[color:var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executive Summary Box */}
        <div className="mt-8 rounded-2xl border-2 border-[color:var(--gold)]/40 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 p-6 shadow-xs">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--gold)] text-white shadow-xs">
              <Sparkles className="h-4 w-4" />
            </div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[color:var(--ink)]">
              Quick Answer & Executive Summary
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-800 sm:text-base">
            {post.aeoQuickAnswer}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-amber-200/60 pt-3 text-[11px] text-gray-500">
            <span>Verified for Canadian Realtors (CREA / RECO context)</span>
            <span className="font-semibold text-[color:var(--gold)]">Royal RoXn Advisory</span>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="mt-10 space-y-10">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              {section.sectionHeading && (
                <h2 className="font-display text-xl font-bold tracking-tight text-[color:var(--ink)] sm:text-2xl">
                  {section.sectionHeading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {p}
                </p>
              ))}

              {section.bulletPoints && (
                <ul className="space-y-2.5 rounded-xl bg-white p-5 border border-[color:var(--border)]">
                  {section.bulletPoints.map((point, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.calloutBox && (
                <div className="rounded-xl border-l-4 border-[color:var(--gold)] bg-white p-5 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--gold)]">
                    {section.calloutBox.title}
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-gray-800 sm:text-base">
                    {section.calloutBox.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Action-Takers Rule Callout (Video Formula: Action Takeaway) */}
        {post.actionTakeaway && (
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-[color:var(--ink)] bg-[color:var(--ink)] p-6 text-white shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--gold)]">
              <Flame className="h-4 w-4 text-amber-400" />
              <span>Action-Taker Execution Directive</span>
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed sm:text-base text-gray-100">
              {post.actionTakeaway}
            </p>
          </div>
        )}

        {/* Free Resource Lead Magnet Card (Video Formula: Free Resource Gift for Action Takers) */}
        {post.freeResourceCta && (
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-dashed border-[color:var(--gold)] bg-amber-50/60 p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)]/20 px-3 py-0.5 text-xs font-bold text-[color:var(--ink)]">
                  <Download className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  <span>Complimentary Action Resource</span>
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[color:var(--ink)] sm:text-xl">
                  {post.freeResourceCta.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-700 sm:text-sm">
                  {post.freeResourceCta.description}
                </p>
              </div>

              <a
                href="/#book"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-xs font-bold text-white transition-all hover:bg-black hover:scale-105 shadow-sm"
              >
                <span>{post.freeResourceCta.buttonText}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              </a>
            </div>
          </div>
        )}

        {/* In-Article FAQs (AEO Schema Supported) */}
        {post.faqs.length > 0 && (
          <section className="mt-14 rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-[color:var(--gold)]" />
              <h3 className="font-display text-lg font-bold sm:text-xl">
                Frequently Asked Questions
              </h3>
            </div>

            <Accordion type="single" collapsible className="mt-4 w-full">
              {post.faqs.map((faq, fIdx) => (
                <AccordionItem key={fIdx} value={`faq-${fIdx}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-[color:var(--ink)] sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs leading-relaxed text-[color:var(--muted-foreground)] sm:text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Lead Capture Action Card */}
        <section className="mt-14 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--ink)] p-6 text-white sm:p-10 shadow-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--gold)]">
            Stop Chasing Cold Leads
          </div>
          <h3 className="mt-2 font-display text-xl font-bold sm:text-3xl">
            Book 5–15 Qualified Canadian Seller Appointments Each Month
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-gray-300 sm:text-sm">
            Royal RoXn takes the burden of prospecting, qualifying, and follow-ups off your plate.
            We book motivated homeowners directly onto your calendar.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/16137230251"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
            >
              <span>Chat on WhatsApp: +1 (613) 723-0251</span>
            </a>
            <a
              href="/#book"
              className="flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 text-xs font-bold text-[color:var(--ink)] transition-transform hover:scale-[1.02]"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <section className="mt-16 border-t border-[color:var(--border)] pt-10">
            <h3 className="font-display text-lg font-bold sm:text-xl">
              More Listing & Growth Guides
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <div
                  key={other.slug}
                  className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-xs transition-all hover:shadow-md"
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: other.slug }}
                    className="group block overflow-hidden"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                      <img
                        src={other.imageUrl}
                        alt={other.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[color:var(--ink)] backdrop-blur-xs">
                        {other.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5">
                    <Link to="/blog/$slug" params={{ slug: other.slug }} className="group block">
                      <h4 className="font-display text-base font-bold text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--gold)]">
                        {other.title}
                      </h4>
                    </Link>
                    <p className="mt-2 line-clamp-2 text-xs text-[color:var(--muted-foreground)]">
                      {other.excerpt}
                    </p>
                    <div className="mt-4 border-t border-gray-100 pt-3">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: other.slug }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--gold)] hover:underline"
                      >
                        Read Guide <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[color:var(--border)] bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-[color:var(--muted-foreground)] sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} Royal RoXn. All rights reserved. 1730 St. Laurent Blvd,
            Ottawa, ON K1G 3Y7, Canada.
          </p>
        </div>
      </footer>
    </div>
  );
}
