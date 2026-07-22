import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Royal RoXn" },
      { name: "description", content: "How Royal RoXn collects, uses, and protects information for Canadian Realtors and website visitors." },
      { property: "og:title", content: "Privacy Policy — Royal RoXn" },
      { property: "og:description", content: "Our commitment to protecting your data and privacy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <PageNav />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
          <p>
            Royal RoXn ("we", "us", "our") respects your privacy and is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.
          </p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">1. Information We Collect</h2>
          <p>We collect information you voluntarily provide when you book a strategy call, contact us, or engage our services, including: name, email, phone number, brokerage name, city/province, and any information exchanged during our engagement.</p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and book strategy calls.</li>
            <li>To deliver appointment-setting services and communicate about your account.</li>
            <li>To send relevant marketing communications (which you can opt out of at any time).</li>
            <li>To improve our services and website experience.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">3. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share information with trusted service providers (e.g., CRM, calendar, and hosting providers) who are bound by confidentiality obligations, or when required by law.</p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">4. Data Security</h2>
          <p>We use industry-standard safeguards to protect your information from unauthorized access, disclosure, or misuse. No method of transmission over the Internet is 100% secure, but we work to protect your data.</p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">5. Cookies</h2>
          <p>Our website uses cookies and similar technologies to analyze traffic and improve your experience. You can control cookies through your browser settings.</p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">6. Your Rights</h2>
          <p>Under Canadian privacy law, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us using the details below.</p>

          <h2 className="font-display text-2xl font-bold text-[color:var(--ink)]">7. Contact Us</h2>
          <p>
            Royal RoXn<br />
            1730 St. Laurent Blvd, Ottawa, ON K1G 3Y7, Canada<br />
            Email: <a href="mailto:contact@royalroxn.com" className="text-[color:var(--gold)]">contact@royalroxn.com</a><br />
            Phone: +1 (613) 723-0251 · +1 (343) 599-4999
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Royal RoXn" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          <span className="font-display text-base font-bold sm:text-lg text-[color:var(--ink)]">Royal RoXn</span>
        </Link>
        <Link to="/" className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]">Home</Link>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--mist)] py-8 text-center text-xs text-[color:var(--muted-foreground)]">
      © {new Date().getFullYear()} Royal RoXn. All rights reserved.
    </footer>
  );
}