import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
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
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur-md">
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
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]"
          >
            Blog
          </Link>
        </div>
      </div>
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
