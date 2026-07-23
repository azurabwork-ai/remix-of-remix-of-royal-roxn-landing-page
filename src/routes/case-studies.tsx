import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, Calendar, Clock, Check } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies - Royal RoXn Realtor Success Stories" },
      { name: "description", content: "See how Canadian Realtors are booking more qualified seller appointments and closing more listings with Royal RoXn." },
      { property: "og:title", content: "Case Studies - Royal RoXn" },
      { property: "og:description", content: "Real results from Canadian Realtors partnering with Royal RoXn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clients.royalroxn.com/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://clients.royalroxn.com/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Royal RoXn Realtor Success Stories",
          description:
            "Case studies of Canadian Realtors booking more qualified seller appointments and closing more listings with Royal RoXn.",
          url: "https://clients.royalroxn.com/case-studies",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              { "@type": "ListItem", position: 1, item: { "@type": "Article", headline: "8 qualified seller appointments in 60 days — 3 listings signed.", about: "Ontario Realtor" } },
              { "@type": "ListItem", position: 2, item: { "@type": "Article", headline: "6 seller appointments in 45 days from a referral-dependent business.", about: "Quebec Realtor" } },
              { "@type": "ListItem", position: 3, item: { "@type": "Article", headline: "10 qualified seller appointments in 90 days — 4 listings signed.", about: "British Columbia Realtor" } },
              { "@type": "ListItem", position: 4, item: { "@type": "Article", headline: "7 qualified appointments in 75 days created a steadier pipeline.", about: "Alberta Realtor" } },
              { "@type": "ListItem", position: 5, item: { "@type": "Article", headline: "9 qualified seller appointments in 3 months — no more cold calling.", about: "Nova Scotia Realtor" } },
              { "@type": "ListItem", position: 6, item: { "@type": "Article", headline: "8 qualified appointments in 60 days without adding staff.", about: "Manitoba Realtor" } },
              { "@type": "ListItem", position: 7, item: { "@type": "Article", headline: "11 qualified seller appointments in 90 days built a predictable pipeline.", about: "Ontario Realtor" } },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://clients.royalroxn.com/" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://clients.royalroxn.com/case-studies" },
          ],
        }),
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const cases = [
    {
      name: "James Morrison",
      province: "Ontario",
      headline: "8 qualified seller appointments in 60 days — 3 listings signed.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "8" },
        { icon: TrendingUp, label: "Listings", value: "3" },
        { icon: Clock, label: "Timeline", value: "60 days" },
      ],
      challenge: "Generating new listings consistently while managing active clients left very little time for prospecting.",
      solution: "Royal RoXn handled seller outreach, qualification, and appointment booking with homeowners in the target market.",
      result: "Within 60 days, eight qualified seller appointments were booked, resulting in three signed listings and a much healthier pipeline.",
    },
    {
      name: "Laura Chen",
      province: "Quebec",
      headline: "6 seller appointments in 45 days from a referral-dependent business.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "6" },
        { icon: TrendingUp, label: "Listings", value: "2" },
        { icon: Clock, label: "Timeline", value: "45 days" },
      ],
      challenge: "Most new business came from referrals, making monthly listing opportunities unpredictable.",
      solution: "A dedicated appointment-setting team focused on identifying motivated homeowners and scheduling qualified meetings.",
      result: "Six seller appointments were booked in the first 45 days, leading to two new listings and a more consistent workflow.",
    },
    {
      name: "Marcus Reid",
      province: "British Columbia",
      headline: "10 qualified seller appointments in 90 days — 4 listings signed.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "10" },
        { icon: TrendingUp, label: "Listings", value: "4" },
        { icon: Clock, label: "Timeline", value: "90 days" },
      ],
      challenge: "Balancing buyer clients and prospecting made it difficult to generate new listing opportunities.",
      solution: "Royal RoXn took over the outbound prospecting process, allowing more time to focus on existing clients.",
      result: "Ten qualified seller appointments were scheduled over 90 days, with four converting into signed listings.",
    },
    {
      name: "Priya Sharma",
      province: "Alberta",
      headline: "7 qualified appointments in 75 days created a steadier pipeline.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "7" },
        { icon: TrendingUp, label: "Pipeline", value: "Steady" },
        { icon: Clock, label: "Timeline", value: "75 days" },
      ],
      challenge: "Prospecting was inconsistent, resulting in unpredictable listing months.",
      solution: "Royal RoXn built a structured seller outreach process focused on the client's preferred service area.",
      result: "Seven qualified appointments were booked over 75 days, creating a steadier listing pipeline and improving month-to-month consistency.",
    },
    {
      name: "Daniel O'Brien",
      province: "Nova Scotia",
      headline: "9 qualified seller appointments in 3 months — no more cold calling.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "9" },
        { icon: TrendingUp, label: "Listings", value: "3" },
        { icon: Clock, label: "Timeline", value: "3 months" },
      ],
      challenge: "Too much time was being spent cold calling instead of meeting with potential sellers.",
      solution: "The appointment-setting team managed outbound calls, qualification, and scheduling on behalf of the agent.",
      result: "Nine qualified seller appointments were delivered within three months, resulting in three new listing agreements.",
    },
    {
      name: "Emily Carter",
      province: "Manitoba",
      headline: "8 qualified appointments in 60 days without adding staff.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "8" },
        { icon: TrendingUp, label: "Capacity", value: "Same team" },
        { icon: Clock, label: "Timeline", value: "60 days" },
      ],
      challenge: "Growing the business without hiring additional staff or increasing workload.",
      solution: "Royal RoXn managed prospecting while the agent focused on client meetings and listing presentations.",
      result: "Eight qualified seller appointments were booked in 60 days, helping create a more reliable flow of listing opportunities.",
    },
    {
      name: "Nathan Kim",
      province: "Ontario",
      headline: "11 qualified seller appointments in 90 days built a predictable pipeline.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "11" },
        { icon: TrendingUp, label: "Listings", value: "4" },
        { icon: Clock, label: "Timeline", value: "90 days" },
      ],
      challenge: "A lack of consistent seller opportunities made business growth difficult to predict.",
      solution: "A targeted appointment-setting campaign focused on motivated homeowners within the desired market.",
      result: "Eleven qualified seller appointments were scheduled over 90 days, resulting in four new listings and a stronger, more predictable pipeline.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <PageNav />

      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[color:var(--gold-soft)] blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-24">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--ink)]">
              Case Studies
            </span>
          </div>
          <h1 className="mt-6 font-display text-[32px] font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Real results from{" "}
            <span className="bg-gradient-to-r from-[color:var(--gold)] to-amber-500 bg-clip-text text-transparent">
              Canadian Realtors
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            Every one of these agents used to spend hours prospecting. Now they spend that time in front of qualified sellers.
          </p>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold-soft)] px-4 py-3 text-left text-[12px] leading-relaxed text-[color:var(--ink)]/80 sm:text-[13px]">
            <strong className="font-semibold text-[color:var(--ink)]">Note:</strong>{" "}
            Compliance with our Non-Disclosure Agreement (NDA) prohibits the sharing of specific client credentials, including names, phone numbers, and complete addresses, to uphold strict confidentiality of our client's marketing strategies.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--mist)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-10">
          {cases.map((c, i) => (
            <article key={c.name} className="overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-white shadow-soft">
              <div className="grid gap-0 lg:grid-cols-[1fr_1.4fr]">
                <div className="border-b border-[color:var(--border)] bg-[color:var(--ink)] p-6 text-white sm:p-8 lg:border-b-0 lg:border-r">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    Case Study {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    <PrivateName name={c.name} />
                  </h2>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--ink)]">
                    <MapPin className="h-3 w-3 text-[color:var(--gold)]" />
                    {c.province}
                  </div>
                  <p className="mt-6 font-display text-lg font-semibold leading-snug text-[color:var(--gold)]">
                    “{c.headline}”
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                    {c.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} className="min-w-0 rounded-xl border border-white/10 bg-[color:var(--graphite)] p-2 text-center sm:p-3">
                          <Icon className="mx-auto h-4 w-4 text-[color:var(--gold)]" />
                          <p className="mt-2 font-display text-base font-extrabold text-white sm:text-lg">{m.value}</p>
                          <p className="mt-0.5 break-words text-[9px] uppercase leading-tight tracking-wider text-white/60 sm:text-[10px]">{m.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-6 p-6 sm:p-8 lg:p-10">
                  <Detail label="Challenge" text={c.challenge} />
                  <Detail label="Solution" text={c.solution} />
                  <div className="rounded-2xl bg-[color:var(--gold-soft)] p-5">
                    <p className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]">Result</p>
                    <p className="mt-2 font-display text-base font-semibold text-[color:var(--ink)]">{c.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--gold)] py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Want your story here next?
          </h2>
          <p className="mt-4 text-[color:var(--ink)]/80">
            Book a free strategy call and see if you qualify to partner with Royal RoXn.
          </p>
          <div className="mt-8">
            <Button asChild className="cta-eyecatch group relative h-13 rounded-full bg-[color:var(--cta-hero)] px-7 font-display text-sm font-semibold text-[color:var(--cta-hero-foreground)] shadow-card ring-2 ring-[color:var(--cta-hero-glow)]/60 ring-offset-2 ring-offset-[color:var(--background)] hover:bg-[color:var(--cta-hero)]/90 sm:text-base">
              <Link to="/" hash="book" className="relative z-10 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--cta-hero-glow)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--cta-hero-glow)]"></span>
                </span>
                Book Your FREE Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-[color:var(--ink)]">
            {["No obligation", "30-minute call", "Canadian team"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--muted-foreground)]">{label}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--ink)]/85">{text}</p>
    </div>
  );
}

function PrivateName({ name }: { name: string }) {
  const words = name.split(" ");
  return (
    <span aria-label="Name partially hidden for privacy">
      {words.map((word, i) => {
        const keep = Math.max(1, Math.ceil(word.length / 2));
        const visible = word.slice(0, keep);
        const hidden = word.slice(keep);
        return (
          <span key={i}>
            {i > 0 && " "}
            {visible}
            {hidden && (
              <span className="select-none blur-[5px] tracking-wider text-white/80">
                {hidden}
              </span>
            )}
          </span>
        );
      })}
    </span>
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
    <footer className="border-t border-[color:var(--border)] bg-white py-8 text-center text-xs text-[color:var(--muted-foreground)]">
      © {new Date().getFullYear()} Royal RoXn. All rights reserved.
    </footer>
  );
}