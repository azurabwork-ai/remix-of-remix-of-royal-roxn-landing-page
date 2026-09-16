import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Search,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Mail,
  Download,
  Flame,
} from "lucide-react";

import logoAsset from "@/assets/logo_royal.png.asset.json";
import { BLOG_POSTS, type BlogPost } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
        title: "Canadian Realtor Growth Blog & Listing Strategies | Royal RoXn",
      },
      {
        name: "description",
        content:
          "In-depth guides, seller lead conversion scripts, ISA cost comparisons, and listing strategies engineered for top-producing Canadian real estate agents.",
      },
      {
        name: "keywords",
        content:
          "Canadian realtor blog, real estate seller lead generation, listing appointments Canada, ISA real estate Ottawa Toronto Vancouver, real estate prospecting scripts",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Canadian Realtor Growth Blog & Listing Strategies | Royal RoXn",
      },
      {
        property: "og:description",
        content:
          "In-depth guides, seller lead conversion scripts, and listing strategies for Canadian Realtors.",
      },
      { property: "og:url", content: "https://clients.royalroxn.com/blog" },
      {
        property: "og:image",
        content: "https://clients.royalroxn.com/logo_royal.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Canadian Realtor Growth Blog | Royal RoXn",
      },
      {
        name: "twitter:description",
        content: "Actionable strategies to win more qualified seller listings in Canada.",
      },
      {
        name: "twitter:image",
        content: "https://clients.royalroxn.com/logo_royal.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://clients.royalroxn.com/blog",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Royal RoXn Canadian Realtor Growth Blog",
          description:
            "Expert insights, listing acquisition playbooks, and appointment-setting frameworks for Canadian real estate professionals.",
          url: "https://clients.royalroxn.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Royal RoXn",
            logo: {
              "@type": "ImageObject",
              url: "https://clients.royalroxn.com/logo_royal.png",
            },
          },
          blogPost: BLOG_POSTS.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            url: `https://clients.royalroxn.com/blog/${post.slug}`,
            datePublished: post.publishedDate,
            author: {
              "@type": "Organization",
              name: post.author.name,
            },
          })),
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
          ],
        }),
      },
    ],
  }),
  component: BlogIndexPage,
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

function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    return ["All", "Listing Strategy", "ISA & Operations", "Lead Generation"];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <BlogNav />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-gradient-to-b from-white via-white to-[color:var(--cream)] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)] shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Canadian Realtor Growth Playbook</span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
            Strategies to Win More <span className="text-[color:var(--gold)]">Seller Listings</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            Proven frameworks, inside sales agent (ISA) cost breakdowns, and qualification scripts
            designed specifically for Canadian real estate producers.
          </p>

          {/* Search and Filters */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search listing scripts, ISA guides, lead gen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 rounded-full border-[color:var(--border)] bg-white pl-10 pr-4 text-sm shadow-xs focus-visible:ring-1 focus-visible:ring-[color:var(--gold)]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[color:var(--gold)] text-white shadow-xs"
                    : "border border-[color:var(--border)] bg-white text-[color:var(--muted-foreground)] hover:border-[color:var(--gold)] hover:text-[color:var(--ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        {/* Featured Post Banner */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="mb-14">
            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[color:var(--gold)]/15 px-3 py-1 text-xs font-bold text-[color:var(--gold)]">
                      Featured Guide
                    </span>
                    <span className="text-xs font-medium text-[color:var(--muted-foreground)]">
                      {featuredPost.category}
                    </span>
                  </div>

                  <Link to="/blog/$slug" params={{ slug: featuredPost.slug }} className="group">
                    <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--gold)] sm:text-3xl lg:text-4xl">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)] sm:text-base">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[color:var(--muted-foreground)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                      {featuredPost.publishedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                      {featuredPost.readTime}
                    </span>
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-gray-700">
                      Canada Wide
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: featuredPost.slug }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--gold)]"
                    >
                      Read Full Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featuredPost.slug }}
                    className="group block overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-xs"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-gray-100 sm:aspect-4/3 lg:aspect-16/11">
                      <img
                        src={featuredPost.imageUrl}
                        alt={featuredPost.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                        Verified Strategy
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Blog Posts Grid */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold tracking-tight text-[color:var(--ink)] sm:text-2xl">
            {selectedCategory === "All"
              ? "All Articles & Playbooks"
              : `${selectedCategory} Articles`}
          </h3>
          <span className="text-xs font-medium text-[color:var(--muted-foreground)]">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-[color:var(--border)] bg-white p-12 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-gray-400" />
            <h4 className="mt-4 text-base font-semibold text-[color:var(--ink)]">
              No articles found
            </h4>
            <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
              Try adjusting your search terms or selecting a different category.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              variant="outline"
              className="mt-4 text-xs"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Article Thumbnail */}
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group block overflow-hidden"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                      <img
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[color:var(--ink)] backdrop-blur-xs shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-[color:var(--muted-foreground)]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[color:var(--gold)]" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[color:var(--gold)]" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="group mt-3 block"
                    >
                      <h4 className="font-display text-lg font-bold leading-snug text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--gold)]">
                        {post.title}
                      </h4>
                    </Link>

                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[color:var(--border)] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[color:var(--ink)]">
                      {post.author.name}
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--gold)] hover:underline"
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Free Lead Magnet Resource Box (Video Formula: Action-Taker Resource & Email Setup) */}
        <section className="mt-16 overflow-hidden rounded-3xl border-2 border-[color:var(--gold)]/30 bg-gradient-to-br from-amber-50/90 via-white to-amber-50/50 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)]/20 px-3.5 py-1 text-xs font-bold text-[color:var(--ink)]">
                <Download className="h-4 w-4 text-[color:var(--gold)]" />
                <span>Free Action-Taker Resource (2026 Edition)</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-[color:var(--ink)] sm:text-3xl">
                The Canadian Listing Presentation Diagnostic Script
              </h2>
              <p className="mt-2 text-sm text-gray-700 sm:text-base leading-relaxed">
                Download the exact word-for-word 7-question qualification script our setters use to
                eliminate tire-kickers, verify positive equity, and guarantee both titleholders
                attend your consultation.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-[color:var(--muted-foreground)]">
                <span>✓ Word-for-word Canadian script</span>
                <span>✓ RECO / BCFSA compliant</span>
                <span>✓ 100% Free instant access</span>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              <a
                href="/#book"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:scale-105 shadow-md lg:w-auto"
              >
                <span>Download Free Script PDF</span>
                <ArrowRight className="h-4 w-4 text-[color:var(--gold)]" />
              </a>
            </div>
          </div>
        </section>

        {/* Lead Generation Conversion Card */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--ink)] p-8 text-white shadow-xl sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                <ShieldCheck className="h-4 w-4" />
                <span>Done-For-You Appointment Setting</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Want 5–15 Qualified Seller Appointments Booked Directly On Your Calendar?
              </h2>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                Stop wasting hours chasing unvetted portal leads. Royal RoXn's dedicated Canadian
                appointment setters identify, qualify, and book motivated homeowners directly onto
                your calendar.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" /> 100% Exclusive
                  Bookings
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" /> Rigorous 4-Point
                  Qualification
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" /> All Canadian
                  Provinces
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
              <a
                href="https://wa.me/16137230251"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] shadow-md"
              >
                <span>WhatsApp: +1 (613) 723-0251</span>
              </a>
              <a
                href="/#book"
                className="flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-bold text-[color:var(--ink)] transition-transform hover:scale-[1.02] shadow-md"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[color:var(--border)] bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logoAsset.url}
                alt="Royal RoXn"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-bold text-[color:var(--ink)]">
                Royal RoXn
              </span>
            </Link>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-[color:var(--muted-foreground)]">
              <Link to="/" className="hover:text-[color:var(--gold)]">
                Home
              </Link>
              <Link to="/case-studies" className="hover:text-[color:var(--gold)]">
                Case Studies
              </Link>
              <Link to="/blog" className="text-[color:var(--gold)] font-medium">
                Blog
              </Link>
              <Link to="/privacy" className="hover:text-[color:var(--gold)]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[color:var(--gold)]">
                Terms of Service
              </Link>
            </div>

            <p className="text-xs text-[color:var(--muted-foreground)]">
              © {new Date().getFullYear()} Royal RoXn. 1730 St. Laurent Blvd, Ottawa, ON.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
