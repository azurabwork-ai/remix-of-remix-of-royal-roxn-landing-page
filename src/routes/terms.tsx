import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service - Royal RoXn" },
      {
        name: "description",
        content:
          "Terms and conditions governing use of Royal RoXn's website and appointment-setting services.",
      },
      { property: "og:title", content: "Terms of Service - Royal RoXn" },
      { property: "og:description", content: "The terms and conditions of engaging Royal RoXn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clients.royalroxn.com/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://clients.royalroxn.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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
        <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Royal RoXn website
            and services. By accessing our site or engaging our services, you agree to these Terms.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">1. Services</h2>
          <p>
            Royal RoXn provides appointment-setting services for Canadian Realtors, including
            outbound prospecting, qualification, and calendar booking. Specific deliverables are
            outlined in your individual service agreement.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            2. Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information about your business, criteria, and availability.</li>
            <li>Attend booked appointments and follow up in good faith.</li>
            <li>Comply with all applicable real estate laws and regulations in your province.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            3. Fees and Payment
          </h2>
          <p>
            Fees are outlined in your service agreement. Invoices are due upon receipt unless
            otherwise stated. Late payments may result in service suspension.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            4. No Guarantee of Results
          </h2>
          <p>
            While we work diligently to deliver qualified appointments, we cannot guarantee specific
            outcomes, closings, or revenue. Results depend on many factors including market
            conditions and your follow-through.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            5. Intellectual Property
          </h2>
          <p>
            All content, branding, and materials on this website are the property of Royal RoXn and
            may not be reproduced without permission.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Royal RoXn's total liability shall not exceed
            the amount paid by you for services in the three (3) months prior to the event giving
            rise to the claim.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            7. Termination
          </h2>
          <p>
            Either party may terminate the engagement in accordance with the terms of the service
            agreement. Certain provisions (including confidentiality and limitation of liability)
            survive termination.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">
            8. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the Province of Ontario, Canada, and the federal
            laws of Canada applicable therein.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">9. Contact</h2>
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
        <Link to="/privacy" className="hover:text-[color:var(--gold)]">
          Privacy
        </Link>
      </div>
      © {new Date().getFullYear()} Royal RoXn. All rights reserved.
    </footer>
  );
}
