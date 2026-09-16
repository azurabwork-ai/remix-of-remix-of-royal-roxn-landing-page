import { createFileRoute } from "@tanstack/react-router";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useEffect, useRef } from "react";
import {
  Phone,
  Star,
  Search,
  ClipboardCheck,
  CalendarCheck,
  Check,
  X,
  ArrowRight,
  MapPin,
  Mail,
  ChevronDown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logoAsset from "@/assets/logo_royal.png.asset.json";
import frustratedImg from "@/assets/frustrated-realtor.jpg";

import remaxLogo from "@/assets/brokerages/remax.png.asset.json";
import royalLepageLogo from "@/assets/brokerages/royal-lepage.png.asset.json";
import century21Logo from "@/assets/brokerages/century21.png.asset.json";
import expRealtyLogo from "@/assets/brokerages/exp-realty.png.asset.json";
import kellerWilliamsLogo from "@/assets/brokerages/keller-williams.png.asset.json";
import suttonLogo from "@/assets/brokerages/sutton.png.asset.json";
import coldwellBankerLogo from "@/assets/brokerages/coldwell-banker.png.asset.json";
import sothebysLogo from "@/assets/brokerages/sothebys.png.asset.json";
import homelifeLogo from "@/assets/brokerages/homelife.png.asset.json";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal RoXn - Seller Appointments for Canadian Realtors" },
      {
        name: "description",
        content:
          "Royal RoXn books qualified seller appointments on your calendar so Canadian Realtors can stop chasing leads and start closing more listings.",
      },
      { property: "og:title", content: "Royal RoXn - Book Qualified Seller Appointments" },
      {
        property: "og:description",
        content:
          "A dedicated Canadian appointment-setting team that fills your calendar with qualified seller appointments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clients.royalroxn.com/" },
      { property: "og:image", content: "https://clients.royalroxn.com/logo_royal.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Royal RoXn - Book Qualified Seller Appointments" },
      {
        name: "twitter:description",
        content: "Done-for-you appointment setting for Canadian Realtors.",
      },
      { name: "twitter:image", content: "https://clients.royalroxn.com/logo_royal.png" },
      {
        name: "keywords",
        content:
          "appointment setting for realtors, Canadian real estate leads, seller appointments, listing appointments, real estate prospecting Canada, ISA for realtors",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap",
      },
      { rel: "canonical", href: "https://clients.royalroxn.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Royal RoXn",
          description:
            "Done-for-you appointment setting service for Canadian Realtors. We book qualified seller appointments directly on your calendar.",
          url: "https://clients.royalroxn.com/",
          image: "https://clients.royalroxn.com/logo_royal.png",
          telephone: "+1-613-723-0251",
          email: "contact@royalroxn.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1730 St. Laurent Blvd",
            addressLocality: "Ottawa",
            addressRegion: "ON",
            postalCode: "K1G 3Y7",
            addressCountry: "CA",
          },
          areaServed: { "@type": "Country", name: "Canada" },
          serviceType: "Real Estate Appointment Setting",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What exactly does Royal RoXn do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Royal RoXn is a done-for-you appointment setting company for Canadian Realtors. Our Canadian team identifies motivated sellers, qualifies them against your criteria, and books listing appointments directly on your calendar.",
              },
            },
            {
              "@type": "Question",
              name: "Which markets do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with Realtors across every Canadian province, from Vancouver Island to Halifax. Our appointment setters understand local market nuances.",
              },
            },
            {
              "@type": "Question",
              name: "How is this different from buying leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Leads are just names. Royal RoXn delivers booked appointments with motivated, qualified sellers - people who have already agreed to speak with you about listing.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly will I see results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most Realtors receive their first qualified seller appointments within 10 to 14 days of onboarding.",
              },
            },
            {
              "@type": "Question",
              name: "Is there a long-term contract?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Royal RoXn earns your business month over month. Onboarding is simple and cancellation policies are transparent.",
              },
            },
          ],
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
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

/* ---------- Small primitives ---------- */

function GoldPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--ink)] uppercase">
      <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
      {children}
    </span>
  );
}

function PrivateName({ name, className = "" }: { name: string; className?: string }) {
  const words = name.split(" ");
  return (
    <span className={className} aria-label="Name partially hidden for privacy">
      {words.map((word, i) => {
        const keep = Math.max(1, Math.ceil(word.length / 2));
        const visible = word.slice(0, keep);
        const hidden = word.slice(keep);
        return (
          <span key={i}>
            {i > 0 && " "}
            {visible}
            {hidden && (
              <span className="select-none blur-[5px] tracking-wider text-[color:var(--ink)]/80">
                {hidden}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

function NDANote() {
  return (
    <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold-soft)] px-4 py-3 text-center text-[12px] leading-relaxed text-[color:var(--ink)]/80 sm:text-[13px]">
      <strong className="font-semibold text-[color:var(--ink)]">Note:</strong> Compliance with our
      Non-Disclosure Agreement (NDA) prohibits the sharing of specific client credentials, including
      names, phone numbers, and complete addresses, to uphold strict confidentiality of our client's
      marketing strategies.
    </p>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
      <span className="h-px w-8 bg-[color:var(--gold)]" />
      {children}
    </div>
  );
}

/* ---------- Auto Slider ---------- */

function AutoSlider({
  children,
  total,
  intervalMs = 5000,
  itemsPerView = { base: 1, md: 2, lg: 3 },
  className = "",
}: {
  children: React.ReactNode;
  total: number;
  intervalMs?: number;
  itemsPerView?: { base: number; md?: number; lg?: number };
  className?: string;
}) {
  const [perView, setPerView] = useState(itemsPerView.base);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024 && itemsPerView.lg) setPerView(itemsPerView.lg);
      else if (w >= 768 && itemsPerView.md) setPerView(itemsPerView.md);
      else setPerView(itemsPerView.base);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [itemsPerView.base, itemsPerView.md, itemsPerView.lg]);

  const maxIndex = Math.max(0, total - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, maxIndex, intervalMs]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  const slidePct = 100 / total;
  const translate = safeIndex * (100 / total);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{
            width: `${(total / perView) * 100}%`,
            transform: `translateX(-${translate}%)`,
          }}
        >
          {Array.isArray(children)
            ? (children as React.ReactNode[]).map((child, i) => (
                <div key={i} className="px-3" style={{ width: `${slidePct}%` }}>
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--ink)] shadow-soft transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === safeIndex
                      ? "w-8 bg-[color:var(--gold)]"
                      : "w-2 bg-[color:var(--border)] hover:bg-[color:var(--muted-foreground)]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--ink)] shadow-soft transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
      <img
        src={logoAsset.url}
        alt="Royal RoXn"
        width={68}
        height={68}
        className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      />
      <span
        className={`truncate font-display text-lg font-bold tracking-tight sm:text-xl lg:text-2xl ${
          variant === "light" ? "text-white" : "text-[color:var(--ink)]"
        }`}
      >
        Royal RoXn
      </span>
    </div>
  );
}

/* ---------- Page ---------- */

function Landing() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <Nav />
      <Hero />
      <Stats />
      <Brokerages />
      <PainPoints />
      <HowItWorks />
      <WhyChoose />
      <CaseStudies />
      <Testimonials />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 lg:h-22 sm:px-6 lg:px-10">
        <Logo />
        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
          <a
            href="tel:+13435994999"
            className="hidden items-center gap-2 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--gold)] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Us <span className="hidden lg:inline">+1 (343) 599-4999</span>
          </a>
          <Button
            asChild
            className="nav-cta group relative h-10 rounded-full bg-[color:var(--cta-nav)] px-4 font-display text-xs font-semibold text-[color:var(--cta-nav-foreground)] shadow-soft hover:bg-[color:var(--cta-nav)]/90 sm:h-11 sm:px-5 sm:text-sm"
          >
            <a href="#book" className="relative z-10 inline-flex items-center gap-2">
              Book Call
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[color:var(--gold-soft)] blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-4 pt-6 pb-10 text-center sm:px-6 sm:pt-8 sm:pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="relative mx-auto flex flex-col items-center text-center">
          <GoldPill>Canadian Real Estate Growth Partner</GoldPill>
          <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-[color:var(--ink)] sm:text-5xl md:text-6xl lg:text-[68px]">
            Stop chasing leads.
            <br />
            <span className="relative inline-block">
              Start closing more
              <span className="ml-2 bg-gradient-to-r from-[color:var(--gold)] to-amber-500 bg-clip-text text-transparent sm:ml-3">
                listings.
              </span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            Royal RoXn helps Canadian Realtors find, qualify, and book seller appointments so you
            can focus on winning more listings - not cold calling.
          </p>

          <ul className="mt-5 flex flex-col flex-wrap justify-center gap-x-6 gap-y-3 sm:mt-6 sm:flex-row">
            {[
              "Qualified Seller Appointments",
              "Dedicated Appointment Team",
              "Canadian Market Experts",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-[14px] font-medium sm:text-[15px]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]">
                  <Check className="h-3.5 w-3.5 text-[color:var(--ink)]" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              asChild
              className="cta-eyecatch group relative h-13 w-full rounded-full bg-[color:var(--cta-hero)] px-6 font-display text-sm font-semibold text-[color:var(--cta-hero-foreground)] shadow-card ring-2 ring-[color:var(--cta-hero-glow)]/60 ring-offset-2 ring-offset-[color:var(--background)] hover:bg-[color:var(--cta-hero)]/90 sm:h-14 sm:w-auto sm:px-7 sm:text-base"
            >
              <a href="#book" className="relative z-10 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--cta-hero-glow)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--cta-hero-glow)]"></span>
                </span>
                Book Your FREE Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-[color:var(--muted-foreground)]">
                Trusted by Canadian Realtors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

function Stats() {
  const items = [
    { n: "630+", l: "On Board Realtors" },
    { n: "9+", l: "Years Experience" },
    { n: "6000+", l: "Listing Appointments / Month" },
    { n: "1200+", l: "Listings Every Month" },
  ];
  return (
    <section className="bg-[color:var(--ink)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Proven Track Record</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            9+ Years of <span className="text-[color:var(--gold)]">Undefeated Success</span>
          </h2>
          <p className="mt-4 text-white/70">
            Numbers we've delivered for Realtors across every Canadian province.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.l}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--graphite)] p-6 transition sm:p-8 hover:border-[color:var(--gold)]/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--gold)]/10 blur-2xl transition group-hover:bg-[color:var(--gold)]/25" />
              <p className="font-display text-4xl font-extrabold text-[color:var(--gold)] sm:text-5xl lg:text-6xl">
                {s.n}
              </p>
              <p className="mt-3 text-sm font-medium text-white/80">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Brokerages ---------- */

function Brokerages() {
  const brokerages = [
    { name: "RE/MAX", src: remaxLogo.url },
    { name: "Royal LePage", src: royalLepageLogo.url },
    { name: "Century 21", src: century21Logo.url },
    { name: "eXp Realty", src: expRealtyLogo.url },
    { name: "Keller Williams", src: kellerWilliamsLogo.url },
    { name: "Sutton", src: suttonLogo.url },
    { name: "Coldwell Banker", src: coldwellBankerLogo.url },
    { name: "Sotheby's International Realty", src: sothebysLogo.url },
    { name: "HomeLife", src: homelifeLogo.url },
  ];
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
          Trusted by Realtors from Canada's leading brokerages
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
          {brokerages.map((b) => (
            <div
              key={b.name}
              className="flex h-20 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white px-4 transition hover:border-[color:var(--gold)]/40 hover:shadow-soft"
              title={b.name}
            >
              <img
                src={b.src}
                alt={`${b.name} logo`}
                loading="lazy"
                className="max-h-12 max-w-[130px] object-contain grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain Points ---------- */

function PainPoints() {
  const items = [
    { t: "Spending Hours Cold Calling", d: "Time drained on dials that don't turn into listings." },
    { t: "Paying for Low-Quality Leads", d: "Ad budgets burned on tire-kickers and dead numbers." },
    { t: "Inconsistent Listings", d: "Feast-or-famine months that make forecasting impossible." },
    { t: "No Predictable Seller Pipeline", d: "No system to keep seller appointments coming in." },
  ];
  return (
    <section className="bg-[color:var(--mist)] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionEyebrow>The Realtor Reality</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Does this sound <span className="text-[color:var(--gold)]">familiar?</span>
          </h2>
          <p className="mt-4 max-w-lg text-[color:var(--muted-foreground)]">
            Most Realtors we speak with are stuck in the same trap - great at closing, buried in
            prospecting.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <div
                key={i.t}
                className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft transition hover:shadow-card"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-50">
                  <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{i.t}</h3>
                <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[color:var(--border)] shadow-card">
            <img
              src={frustratedImg}
              alt="Realtor looking at an empty calendar"
              width={1280}
              height={1200}
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */

function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: "Step 1",
      title: "We Find Motivated Sellers",
      desc: "Our Canadian team identifies homeowners actively thinking about selling in your farm area.",
    },
    {
      icon: ClipboardCheck,
      step: "Step 2",
      title: "We Qualify Every Opportunity",
      desc: "Each lead is screened against your criteria - timeline, motivation, price range and readiness.",
    },
    {
      icon: CalendarCheck,
      step: "Step 3",
      title: "Booked On Your Calendar",
      desc: "Qualified seller appointments land directly on your calendar. You show up and close.",
    },
  ];
  return (
    <section id="how" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            A predictable path to <span className="text-[color:var(--gold)]">more listings</span>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative">
                <div className="group relative h-full rounded-[24px] border border-[color:var(--border)] bg-white p-6 shadow-soft transition hover:-translate-y-1 sm:p-8 hover:border-[color:var(--gold)]/40 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--ink)] text-[color:var(--gold)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
                    {s.desc}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="pointer-events-none absolute top-1/2 -right-6 hidden -translate-y-1/2 lg:block">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] bg-white shadow-soft">
                      <ArrowRight className="h-4 w-4 text-[color:var(--gold)]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose ---------- */

function WhyChoose() {
  const bullets = [
    "Qualified Seller Appointments",
    "Dedicated Canadian Calling Team",
    "Proven Appointment Setting Process",
    "Save Time Prospecting",
    "Focus On Closing Listings",
  ];
  return (
    <section className="bg-[color:var(--mist)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <SectionEyebrow>Why Realtors Choose Us</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built for Realtors who want to{" "}
            <span className="text-[color:var(--gold)]">close, not chase.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[color:var(--muted-foreground)]">
            We handle the entire top of your funnel - from prospecting to qualification - so your
            calendar is filled with seller conversations that convert.
          </p>
          <ul className="mt-8 grid gap-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white px-5 py-4 shadow-soft"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]">
                  <Check className="h-4 w-4 text-[color:var(--ink)]" strokeWidth={3} />
                </span>
                <span className="font-display text-[15px] font-semibold">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              asChild
              className="h-12 rounded-full bg-[color:var(--ink)] px-6 font-display text-sm font-semibold text-white hover:bg-[color:var(--graphite)]"
            >
              <a href="#book">See if you qualify</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies ---------- */

function CaseStudies() {
  const cases = [
    {
      name: "James Morrison",
      province: "Ontario",
      challenge:
        "Generating new listings consistently while managing active clients left very little time for prospecting.",
      solution:
        "Royal RoXn handled seller outreach, qualification, and appointment booking with homeowners in the target market.",
      result:
        "Within 60 days, eight qualified seller appointments were booked, resulting in three signed listings and a much healthier pipeline.",
    },
    {
      name: "Laura Chen",
      province: "Quebec",
      challenge:
        "Most new business came from referrals, making monthly listing opportunities unpredictable.",
      solution:
        "A dedicated appointment-setting team focused on identifying motivated homeowners and scheduling qualified meetings.",
      result:
        "Six seller appointments were booked in the first 45 days, leading to two new listings and a more consistent workflow.",
    },
    {
      name: "Marcus Reid",
      province: "British Columbia",
      challenge:
        "Balancing buyer clients and prospecting made it difficult to generate new listing opportunities.",
      solution:
        "Royal RoXn took over the outbound prospecting process, allowing more time to focus on existing clients.",
      result:
        "Ten qualified seller appointments were scheduled over 90 days, with four converting into signed listings.",
    },
    {
      name: "Priya Sharma",
      province: "Alberta",
      challenge: "Prospecting was inconsistent, resulting in unpredictable listing months.",
      solution:
        "Royal RoXn built a structured seller outreach process focused on the client's preferred service area.",
      result:
        "Seven qualified appointments were booked over 75 days, creating a steadier listing pipeline and improving month-to-month consistency.",
    },
    {
      name: "Daniel O'Brien",
      province: "Nova Scotia",
      challenge:
        "Too much time was being spent cold calling instead of meeting with potential sellers.",
      solution:
        "The appointment-setting team managed outbound calls, qualification, and scheduling on behalf of the agent.",
      result:
        "Nine qualified seller appointments were delivered within three months, resulting in three new listing agreements.",
    },
    {
      name: "Emily Carter",
      province: "Manitoba",
      challenge: "Growing the business without hiring additional staff or increasing workload.",
      solution:
        "Royal RoXn managed prospecting while the agent focused on client meetings and listing presentations.",
      result:
        "Eight qualified seller appointments were booked in 60 days, helping create a more reliable flow of listing opportunities.",
    },
    {
      name: "Nathan Kim",
      province: "Ontario",
      challenge:
        "A lack of consistent seller opportunities made business growth difficult to predict.",
      solution:
        "A targeted appointment-setting campaign focused on motivated homeowners within the desired market.",
      result:
        "Eleven qualified seller appointments were scheduled over 90 days, resulting in four new listings and a stronger, more predictable pipeline.",
    },
  ];
  const all = cases;
  return (
    <section id="case-studies" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Case Studies</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Real results from <span className="text-[color:var(--gold)]">Canadian Realtors</span>
          </h2>
        </div>
        <NDANote />
        <AutoSlider
          itemsPerView={{ base: 1, md: 2, lg: 3 }}
          intervalMs={5500}
          total={all.length}
          className="mt-14"
        >
          {all.map((c) => (
            <article
              key={c.name}
              className="group flex h-full flex-col rounded-[24px] border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  <PrivateName name={c.name} />
                </h3>
                <div className="flex items-center gap-1.5 rounded-full bg-[color:var(--gold-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--ink)]">
                  <MapPin className="h-3 w-3 text-[color:var(--gold)]" />
                  {c.province}
                </div>
              </div>
              <dl className="mt-6 flex flex-1 flex-col gap-4 text-sm">
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--muted-foreground)]">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]/85">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--muted-foreground)]">
                    Solution
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]/85">{c.solution}</dd>
                </div>
                <div className="mt-auto rounded-xl bg-[color:var(--gold-soft)] p-3">
                  <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]">
                    Result
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-[color:var(--ink)]">
                    {c.result}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  const items = [
    {
      name: "Karen Whitfield",
      quote:
        "Royal RoXn has taken a huge amount of prospecting off my plate. Instead of spending hours making calls, I'm meeting with homeowners who are genuinely interested in selling. It's made my schedule much more productive.",
    },
    {
      name: "David Laurent",
      quote:
        "The communication has been excellent from the beginning. The appointments are organized, and I always know what to expect before each meeting.",
    },
    {
      name: "Emily Chen",
      quote:
        "I was looking for a more consistent listing pipeline, and that's exactly what Royal RoXn has helped me build. It's allowed me to focus on serving clients instead of chasing new ones every day.",
    },
    {
      name: "Marc Dubois",
      quote:
        "Every appointment doesn't become a listing, but the conversations are with motivated homeowners. That alone has saved me a lot of time compared to traditional prospecting.",
    },
    {
      name: "Rachel Nguyen",
      quote:
        "Their team is professional, responsive, and easy to work with. The process has been simple, and the quality of appointments has been much better than I expected.",
    },
    {
      name: "Aiden O'Connor",
      quote:
        "Having qualified seller appointments on my calendar each month has made planning my business much easier. I finally have a more predictable pipeline.",
    },
    {
      name: "Sophia Rossi",
      quote:
        "I was skeptical at first, but after the first few appointments I realized how much time I was saving. It has been a great investment for my business.",
    },
    {
      name: "Liam Patel",
      quote:
        "Royal RoXn understands the Canadian real estate market. The appointments have been relevant to my target area, and the homeowners have been well qualified.",
    },
    {
      name: "Grace Fontaine",
      quote:
        "The biggest benefit has been consistency. I no longer have to rely only on referrals because I know new seller conversations are being scheduled regularly.",
    },
    {
      name: "Owen McKenzie",
      quote:
        "Their appointment-setting team represents my business professionally. Homeowners already understand why we're meeting before I even arrive.",
    },
    {
      name: "Zara Ahmed",
      quote:
        "I can now spend more time preparing listing presentations instead of searching for my next opportunity. That has made a noticeable difference in my business.",
    },
    {
      name: "Julien Bouchard",
      quote:
        "The process was straightforward from day one. Their team handled everything professionally and kept me updated throughout the entire process.",
    },
    {
      name: "Nicole Sutherland",
      quote:
        "I wanted more listing opportunities without hiring another staff member. Royal RoXn gave me exactly that while keeping my workload manageable.",
    },
    {
      name: "Ravi Deol",
      quote:
        "The quality of conversations has been much better than the random online leads I was getting before. It's a much more efficient way to grow my listing business.",
    },
    {
      name: "Elena Martins",
      quote:
        "If you're looking for a more consistent flow of seller opportunities, Royal RoXn is definitely worth considering. They've become a valuable part of my business.",
    },
  ];
  return (
    <section id="testimonials" className="bg-[color:var(--mist)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Loved by Realtors from coast to coast
          </h2>
        </div>
        <NDANote />
        <AutoSlider
          itemsPerView={{ base: 1, md: 2, lg: 3 }}
          intervalMs={4500}
          total={items.length}
          className="mt-14"
        >
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-[24px] border border-[color:var(--border)] bg-white p-7 sm:p-8 shadow-soft"
            >
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--border)] pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--gold-soft)] font-display text-sm font-bold text-[color:var(--ink)]">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">
                    <PrivateName name={t.name} />
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */

function Results() {
  const items = [
    { n: "6000+", l: "Seller Appointments Monthly" },
    { n: "1200+", l: "Listings Monthly" },
    { n: "630+", l: "Canadian Realtors" },
    { n: "9+", l: "Years Experience" },
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>The Numbers</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Results that speak <span className="text-[color:var(--gold)]">for themselves</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.l}
              className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--mist)] p-6 text-center sm:p-8 shadow-soft"
            >
              <p className="font-display text-4xl font-extrabold text-[color:var(--ink)] sm:text-5xl">
                {s.n}
              </p>
              <p className="mt-3 text-sm font-medium text-[color:var(--muted-foreground)]">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const faqs = [
    {
      q: "What exactly does Royal RoXn do?",
      a: "We're a done-for-you appointment setting company for Canadian Realtors. Our Canadian team identifies motivated sellers, qualifies them against your criteria, and books listing appointments directly on your calendar.",
    },
    {
      q: "Which markets do you serve?",
      a: "We work with Realtors across every Canadian province, from Vancouver Island to Halifax. Our appointment setters understand local market nuances.",
    },
    {
      q: "How is this different from buying leads?",
      a: "Leads are just contact information. We deliver qualified, face-to-face listing appointments with homeowners who have expressed interest in selling and are ready to meet with a real estate agent. You simply attend the appointment, present your marketing strategy, and focus on winning the listing.",
    },
    {
      q: "How quickly will I see results?",
      a: "Most realtors receive their first qualified appointment within 7-10 business days after onboarding. Timelines may vary depending on your market and service area.",
    },
    {
      q: "Is there a long-term contract?",
      a: "Yes. Our minimum partnership is 3 months, giving us enough time to build consistent appointment flow and deliver measurable results. Onboarding is simple, and our cancellation policy is clear and transparent.",
    },
  ];
  return (
    <section id="faq" className="bg-[color:var(--mist)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Questions Realtors ask us
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white px-6 shadow-soft [&[data-state=open]]:border-[color:var(--gold)]/40"
            >
              <AccordionTrigger className="py-5 font-display text-left text-base font-semibold hover:no-underline [&>svg]:hidden">
                <span className="flex-1">{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[color:var(--gold)] transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-8 text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityProvince, setCityProvince] = useState("");
  const [brokerageName, setBrokerageName] = useState("");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwkctXlDjG3WpjYwBPWWzEjCbjeF9rLGBv485avxX3tw1_d3ivNgbZcYW4MOB7Q2pzj/exec";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg(null);
    setSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          city_province: cityProvince || "",
          brokerage_name: brokerageName || "",
        }),
      });
      navigate({ to: "/thank-you" });
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again or email contact@royalroxn.com.");
      setSubmitting(false);
    }
  }
  return (
    <section id="book" className="relative overflow-hidden bg-[color:var(--gold)] py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[color:var(--ink)]/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10">
        <div>
          <GoldPill>Limited Onboarding Slots</GoldPill>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.05] text-[color:var(--ink)] sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to fill your calendar with qualified seller appointments?
          </h2>
          <p className="mt-5 max-w-lg text-base text-[color:var(--ink)]/80 sm:mt-6 sm:text-lg">
            Book your FREE Strategy Call today and discover how Royal RoXn can help grow your
            business.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "30-minute call, no obligation",
              "Custom plan for your market",
              "See if you qualify to work with us",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-[color:var(--ink)]">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--ink)]">
                  <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] border border-white/40 bg-white p-5 shadow-card sm:p-7">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Book your free strategy call
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldWithLabel id="name" label="Full Name">
                <Input
                  id="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="h-11 rounded-xl"
                />
              </FieldWithLabel>
              <FieldWithLabel id="email" label="Email">
                <Input
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brokerage.ca"
                  className="h-11 rounded-xl"
                />
              </FieldWithLabel>
              <FieldWithLabel id="phone" label="Phone Number">
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(416) 555-0100"
                  className="h-11 rounded-xl"
                />
              </FieldWithLabel>
              <FieldWithLabel id="city" label="City / Province">
                <Input
                  id="city"
                  value={cityProvince}
                  onChange={(e) => setCityProvince(e.target.value)}
                  placeholder="Toronto, ON"
                  className="h-11 rounded-xl"
                />
              </FieldWithLabel>
              <div className="sm:col-span-2">
                <FieldWithLabel id="brokerage" label="Brokerage Name">
                  <Input
                    id="brokerage"
                    value={brokerageName}
                    onChange={(e) => setBrokerageName(e.target.value)}
                    placeholder="RE/MAX Hallmark"
                    className="h-11 rounded-xl"
                  />
                </FieldWithLabel>
              </div>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="h-12 w-full rounded-full bg-[color:var(--ink)] font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--graphite)]"
            >
              {submitting ? "Submitting..." : "Book My Free Strategy Call"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {errorMsg && <p className="text-center text-xs text-red-600">{errorMsg}</p>}
            <p className="text-center text-[11px] text-[color:var(--muted-foreground)]">
              No spam. No obligations. 100% confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FieldWithLabel({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={id}
        className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Canada's trusted appointment setting partner for high-performing Realtors.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/#how" className="hover:text-[color:var(--gold)]">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[color:var(--gold)]">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-[color:var(--gold)]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[color:var(--gold)]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>
                  1730 St. Laurent Blvd,
                  <br />
                  Ottawa, ON K1G 3Y7, Canada
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>
                  <a href="tel:+16137230251" className="block hover:text-[color:var(--gold)]">
                    +1 (613) 723-0251
                  </a>
                  <a href="tel:+13435994999" className="block hover:text-[color:var(--gold)]">
                    +1 (343) 599-4999
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>
                  <a
                    href="mailto:contact@royalroxn.com"
                    className="block hover:text-[color:var(--gold)]"
                  >
                    contact@royalroxn.com
                  </a>
                  <a
                    href="mailto:accounts@royalroxn.com"
                    className="block hover:text-[color:var(--gold)]"
                  >
                    accounts@royalroxn.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-[color:var(--gold)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[color:var(--gold)]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[color:var(--gold)]">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Royal RoXn. All rights reserved.</p>
          <p>Proudly built for Canadian Realtors 🇨🇦</p>
        </div>
      </div>
    </footer>
  );
}
