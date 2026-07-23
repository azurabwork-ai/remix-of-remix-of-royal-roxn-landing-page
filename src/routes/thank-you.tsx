import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowLeft, Phone, Mail } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You - Royal RoXn" },
      { name: "description", content: "Thanks for booking your free strategy call with Royal RoXn. A Canadian strategist will reach out within one business day." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Thank You - Royal RoXn" },
      { property: "og:description", content: "Your strategy call request has been received." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Royal RoXn" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            <span className="font-display text-base font-bold sm:text-lg">Royal RoXn</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]">Home</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[color:var(--gold-soft)] blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)] shadow-card">
            <Check className="h-8 w-8 text-[color:var(--ink)]" strokeWidth={3} />
          </div>
          <h1 className="mt-8 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            You're on the{" "}
            <span className="bg-gradient-to-r from-[color:var(--gold)] to-amber-500 bg-clip-text text-transparent">list.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            Thank you for booking your free strategy call with Royal RoXn. A Canadian strategist will reach out within one business day to confirm your appointment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-[color:var(--ink)] px-6 font-display text-sm font-semibold text-white hover:bg-[color:var(--graphite)]">
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <div className="flex flex-col items-center gap-2 text-sm text-[color:var(--muted-foreground)] sm:flex-row sm:gap-4">
              <a href="tel:+13435994999" className="inline-flex items-center gap-2 hover:text-[color:var(--gold)]">
                <Phone className="h-4 w-4 text-[color:var(--gold)]" /> +1 (343) 599-4999
              </a>
              <a href="mailto:contact@royalroxn.com" className="inline-flex items-center gap-2 hover:text-[color:var(--gold)]">
                <Mail className="h-4 w-4 text-[color:var(--gold)]" /> contact@royalroxn.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--border)] bg-white py-8 text-center text-xs text-[color:var(--muted-foreground)]">
        © {new Date().getFullYear()} Royal RoXn. All rights reserved.
      </footer>
    </div>
  );
}