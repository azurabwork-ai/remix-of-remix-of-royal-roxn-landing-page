import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Royal RoXn" },
      {
        name: "description",
        content:
          "How Royal RoXn collects, uses, and protects information for Canadian Realtors and website visitors.",
      },
      { property: "og:title", content: "Privacy Policy - Royal RoXn" },
      {
        property: "og:description",
        content: "Our commitment to protecting your data and privacy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clients.royalroxn.com/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://clients.royalroxn.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <PageNav />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
          <p>
            Royal RoXn ("we", "us", "our") respects your privacy and is committed to protecting your
            personal information in accordance with the Personal Information Protection and
            Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            1. Information We Collect
          </h2>
          <p>
            We collect information you voluntarily provide when you book a strategy call, contact
            us, or engage our services, including: name, email, phone number, brokerage name,
            city/province, and any information exchanged during our engagement.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and book strategy calls.</li>
            <li>To deliver appointment-setting services and communicate about your account.</li>
            <li>
              To send relevant marketing communications (which you can opt out of at any time).
            </li>
            <li>To improve our services and website experience.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell your personal information. We may share information with trusted service
            providers (e.g., CRM, calendar, and hosting providers) who are bound by confidentiality
            obligations, or when required by law.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            4. Data Security
          </h2>
          <p>
            We use industry-standard safeguards to protect your information from unauthorized
            access, disclosure, or misuse. No method of transmission over the Internet is 100%
            secure, but we work to protect your data.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">5. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to analyze traffic and improve your
            experience. You can control cookies through your browser settings.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            6. Your Rights
          </h2>
          <p>
            Under Canadian privacy law, you have the right to access, correct, or request deletion
            of your personal information. To exercise these rights, contact us using the details
            below.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">7. Contact Us</h2>
          <p>
            Royal RoXn
            <br />
            1730 St. Laurent Blvd, Ottawa, ON K1G 3Y7, Canada
            <br />
            Email:{" "}
            <a href="mailto:contact@royalroxn.com" className="text-[color:var(--gold)]">
              contact@royalroxn.com
            </a>
            <br />
            Phone: +1 (613) 723-0251 (Whatsapp) · +1 (343) 599-4999
          </p>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}

function PageNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 lg:h-22 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2 sm:gap-3.5">
          <img
            src={logoAsset.url}
            alt="Royal RoXn"
            width={68}
            height={68}
            className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
          <span className="font-display text-base font-bold tracking-tight sm:text-xl lg:text-2xl text-[color:var(--ink)]">
            Royal RoXn
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
          <Link
            to="/"
            className="hidden text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)] sm:inline-block"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="hidden text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)] md:inline-block"
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className="hidden text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)] sm:inline-block"
          >
            Blog
          </Link>
          <a
            href="tel:+13435994999"
            className="hidden items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)] md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            +1 (343) 599-4999
          </a>
          <a
            href="/#book"
            className="inline-flex h-9 items-center justify-center rounded-full bg-[color:var(--ink)] px-3.5 font-display text-xs font-semibold text-white transition-all hover:bg-black sm:h-11 sm:px-5 sm:text-sm"
          >
            Book Call
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)] sm:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[color:var(--border)] bg-white px-5 py-4 shadow-lg sm:hidden">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[color:var(--ink)] hover:bg-[color:var(--mist)] hover:text-[color:var(--gold)]"
            >
              <span>Home</span>
              <ArrowRight className="h-4 w-4 text-[color:var(--gold)]" />
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[color:var(--ink)] hover:bg-[color:var(--mist)] hover:text-[color:var(--gold)]"
            >
              <span>Case Studies</span>
              <ArrowRight className="h-4 w-4 text-[color:var(--gold)]" />
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[color:var(--ink)] hover:bg-[color:var(--mist)] hover:text-[color:var(--gold)]"
            >
              <span>Blog Hub</span>
              <ArrowRight className="h-4 w-4 text-[color:var(--gold)]" />
            </Link>
            <a
              href="tel:+13435994999"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[color:var(--ink)] hover:bg-[color:var(--mist)] hover:text-[color:var(--gold)]"
            >
              <Phone className="h-4 w-4 text-[color:var(--gold)]" />
              <span>Call +1 (343) 599-4999</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--mist)] py-8 text-center text-xs text-[color:var(--muted-foreground)]">
      <div className="flex flex-wrap justify-center gap-4 mb-2">
        <Link to="/" className="hover:text-[color:var(--gold)]">
          Home
        </Link>
        <span>•</span>
        <Link to="/case-studies" className="hover:text-[color:var(--gold)]">
          Case Studies
        </Link>
        <span>•</span>
        <Link to="/blog" className="hover:text-[color:var(--gold)]">
          Blog
        </Link>
        <span>•</span>
        <Link to="/terms" className="hover:text-[color:var(--gold)]">
          Terms
        </Link>
      </div>
      © {new Date().getFullYear()} Royal RoXn. All rights reserved.
    </footer>
  );
}
