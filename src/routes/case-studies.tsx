import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, Calendar, DollarSign, Check } from "lucide-react";
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
              { "@type": "ListItem", position: 1, item: { "@type": "Article", headline: "37 seller appointments in 90 days - 11 new listings signed.", about: "Michael Thompson, Ontario Realtor" } },
              { "@type": "ListItem", position: 2, item: { "@type": "Article", headline: "4.2x more listing appointments in her first quarter.", about: "Sarah Belanger, Quebec Realtor" } },
              { "@type": "ListItem", position: 3, item: { "@type": "Article", headline: "Booked $4.1M in listings within 6 months of onboarding.", about: "Arjun Malhotra, British Columbia Realtor" } },
              { "@type": "ListItem", position: 4, item: { "@type": "Article", headline: "From 2 listings/month to 9 listings/month in under a year.", about: "Priya Nair, Alberta Realtor" } },
              { "@type": "ListItem", position: 5, item: { "@type": "Article", headline: "Stopped cold calling on day one - pipeline stayed full.", about: "David Laurent, Nova Scotia Realtor" } },
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
      name: "Michael Thompson",
      province: "Ontario",
      headline: "37 seller appointments in 90 days - 11 new listings signed.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "37" },
        { icon: TrendingUp, label: "New Listings", value: "11" },
        { icon: DollarSign, label: "GCI Added", value: "$187K" },
      ],
      challenge: "Michael was juggling active buyers and had zero bandwidth to prospect for new listings. His pipeline was drying up despite closing consistently.",
      solution: "We deployed a dedicated appointment-setting team to handle all outbound calling, qualification, and calendar booking against his exact seller criteria.",
      result: "In 90 days he sat down with 37 qualified sellers and signed 11 new listing agreements - the strongest quarter of his career.",
    },
    {
      name: "Sarah Bélanger",
      province: "Quebec",
      headline: "4.2× more listing appointments in her first quarter.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "4.2×" },
        { icon: TrendingUp, label: "Conversion", value: "34%" },
        { icon: DollarSign, label: "Ad Spend", value: "-60%" },
      ],
      challenge: "Sarah was burning through ad budget on cold buyer leads that never converted, with no predictable seller pipeline in sight.",
      solution: "We repositioned her budget behind Royal RoXn's qualified seller flow and layered our Canadian calling team on top of her existing database.",
      result: "She booked 4.2× more listing appointments in her first quarter while cutting paid ad spend by 60%.",
    },
    {
      name: "Arjun Malhotra",
      province: "British Columbia",
      headline: "Booked $4.1M in listings within 6 months of onboarding.",
      metrics: [
        { icon: DollarSign, label: "Listings Booked", value: "$4.1M" },
        { icon: Calendar, label: "Months", value: "6" },
        { icon: TrendingUp, label: "Referrals", value: "8" },
      ],
      challenge: "As a solo agent, Arjun had no time to prospect between showings and open houses. Growth had completely stalled.",
      solution: "We fully outsourced his top-of-funnel calling and booking to our Canadian team, so every hour he worked was spent in front of qualified sellers.",
      result: "Within 6 months he booked $4.1M in listing volume and generated 8 organic referrals from his new client base.",
    },
    {
      name: "Priya Nair",
      province: "Alberta",
      headline: "From 2 listings/month to 9 listings/month in under a year.",
      metrics: [
        { icon: TrendingUp, label: "Listings/Mo", value: "9" },
        { icon: Calendar, label: "Timeline", value: "11 mo" },
        { icon: DollarSign, label: "GCI Growth", value: "3.5×" },
      ],
      challenge: "Inconsistent listing months made forecasting impossible. Priya wanted a predictable pipeline, not another lead source.",
      solution: "A dedicated appointment-setting pod focused exclusively on her farm area, feeding pre-qualified seller conversations directly to her calendar.",
      result: "She scaled from 2 listings a month to a consistent 9 listings a month and 3.5× her annual GCI.",
    },
    {
      name: "David Laurent",
      province: "Nova Scotia",
      headline: "Stopped cold calling on day one - pipeline stayed full.",
      metrics: [
        { icon: Calendar, label: "Hours Saved", value: "20/wk" },
        { icon: TrendingUp, label: "Appt Show Rate", value: "82%" },
        { icon: DollarSign, label: "Revenue Growth", value: "2.4×" },
      ],
      challenge: "David hated cold calling and it was killing his energy for the rest of his day.",
      solution: "Royal RoXn's team took over 100% of outbound prospecting so David could focus on listing presentations and closings.",
      result: "He got 20+ hours a week back, ran an 82% appointment show rate, and grew revenue 2.4× year over year.",
    },
    {
      name: "Emily Chen",
      province: "Manitoba",
      headline: "Most predictable seller pipeline of her 12-year career.",
      metrics: [
        { icon: Calendar, label: "Appts/Month", value: "18" },
        { icon: TrendingUp, label: "List-to-Close", size: "sm", value: "71%" },
        { icon: DollarSign, label: "Avg Price Pt", value: "$680K" },
      ],
      challenge: "After 12 years in the business, Emily still had feast-or-famine months and couldn't forecast income reliably.",
      solution: "We built her a predictable inbound flow of 15–20 qualified seller conversations per month, matched to her price point.",
      result: "She now runs 18 appointments/month with a 71% list-to-close rate at an average price point of $680K.",
    },
    {
      name: "Nathan Cooper",
      province: "Ontario",
      headline: "9 listings signed in his first 90 days as a newer agent.",
      metrics: [
        { icon: TrendingUp, label: "Listings", value: "9" },
        { icon: Calendar, label: "Timeline", value: "90 days" },
        { icon: DollarSign, label: "GCI", value: "$142K" },
      ],
      challenge: "Nathan was a newer agent with a thin sphere of influence and no consistent lead source of his own.",
      solution: "We ran full-funnel outbound on expired listings across his farm area and delivered warm sellers to his calendar.",
      result: "He signed 9 listing agreements in his first 90 days on the program and generated $142K in GCI.",
    },
    {
      name: "Meera Kapoor",
      province: "British Columbia",
      headline: "$12.4M in luxury Vancouver listings booked in 7 months.",
      metrics: [
        { icon: DollarSign, label: "Listings Booked", value: "$12.4M" },
        { icon: Calendar, label: "Months", value: "7" },
        { icon: TrendingUp, label: "Avg Price", value: "$3.1M" },
      ],
      challenge: "The luxury Vancouver market has long, relationship-heavy cycles that don't respond to typical prospecting.",
      solution: "Senior Canadian setters ran a high-touch nurture cadence tailored to high-net-worth sellers.",
      result: "Meera booked $12.4M in luxury listing volume in 7 months at an average price of $3.1M.",
    },
    {
      name: "Olivia Martin",
      province: "Manitoba",
      headline: "Team GCI up 2.8x in the first year - no new hires.",
      metrics: [
        { icon: TrendingUp, label: "GCI Growth", value: "2.8x" },
        { icon: Calendar, label: "Timeline", value: "12 mo" },
        { icon: DollarSign, label: "New Deals", value: "47" },
      ],
      challenge: "Olivia's team had capped growth at referrals and didn't want the overhead of a full in-house ISA hire.",
      solution: "An outsourced setter team fed pre-qualified seller conversations directly to her agents.",
      result: "Total team GCI grew 2.8x in 12 months on the back of 47 new transactions.",
    },
    {
      name: "Ethan Brooks",
      province: "Saskatchewan",
      headline: "24 signed listings in a single winter quarter.",
      metrics: [
        { icon: TrendingUp, label: "Listings", value: "24" },
        { icon: Calendar, label: "Quarter", value: "Q1" },
        { icon: DollarSign, label: "GCI", value: "$318K" },
      ],
      challenge: "Slow winter months in Saskatchewan killed Ethan's listing momentum year after year.",
      solution: "We ran a year-round outreach program that surfaced motivated sellers regardless of season.",
      result: "He signed 24 new listings in a single winter quarter and generated $318K in GCI.",
    },
    {
      name: "Chloé Gagnon",
      province: "Quebec",
      headline: "Appointment set rate jumped from 6% to 31%.",
      metrics: [
        { icon: TrendingUp, label: "Set Rate", value: "31%" },
        { icon: Calendar, label: "Speed-to-Lead", size: "sm", value: "<5 min" },
        { icon: DollarSign, label: "GCI Lift", value: "+$210K" },
      ],
      challenge: "Chloé had a good online lead flow but almost none of it converted to real listing appointments.",
      solution: "We layered a sub-5-minute speed-to-lead cadence and long-term nurture on top of her existing leads.",
      result: "Her appointment set rate went from 6% to 31% and added $210K in additional GCI.",
    },
    {
      name: "Ravi Sandhu",
      province: "Alberta",
      headline: "From 20 deals a year to 54 - without adding staff.",
      metrics: [
        { icon: TrendingUp, label: "Transactions", value: "54" },
        { icon: Calendar, label: "Timeline", value: "12 mo" },
        { icon: DollarSign, label: "GCI Growth", value: "2.7x" },
      ],
      challenge: "Ravi's two-agent team had hit a hard ceiling around 20 transactions per year.",
      solution: "A dedicated setter pod handled all prospecting and booked both partners' calendars.",
      result: "They closed 54 transactions the following year and grew GCI 2.7x.",
    },
    {
      name: "Hannah Walsh",
      province: "New Brunswick",
      headline: "Became the #1 listing agent in her town in 8 months.",
      metrics: [
        { icon: TrendingUp, label: "Market Rank", value: "#1" },
        { icon: Calendar, label: "Timeline", value: "8 mo" },
        { icon: DollarSign, label: "GCI Growth", value: "3.1x" },
      ],
      challenge: "Hannah was a small-market agent competing against long-established brokers with deep roots.",
      solution: "Hyper-local outreach positioned her as the neighbourhood specialist to every homeowner in her zone.",
      result: "She became the #1 listing agent in her town within 8 months and tripled her GCI.",
    },
    {
      name: "Amélie Fortin",
      province: "Quebec",
      headline: "Transitioned from buyer's agent to full listing specialist in 6 months.",
      metrics: [
        { icon: Calendar, label: "Timeline", value: "6 mo" },
        { icon: TrendingUp, label: "Listing Ratio", size: "sm", value: "92%" },
        { icon: DollarSign, label: "Avg Price Pt", value: "$540K" },
      ],
      challenge: "Amélie wanted to graduate out of buyer representation into a pure listing business.",
      solution: "We ran a 100% seller-focused appointment flow paired with weekly conversion coaching.",
      result: "In 6 months she flipped her book to 92% listings at an average price point of $540K.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <PageNav />

      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[color:var(--gold-soft)] blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:text-[color:var(--gold)]">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--ink)]">
            Case Studies
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
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
                <div className="border-b border-[color:var(--border)] bg-[color:var(--ink)] p-8 text-white lg:border-b-0 lg:border-r">
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
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} className="rounded-xl border border-white/10 bg-[color:var(--graphite)] p-3 text-center">
                          <Icon className="mx-auto h-4 w-4 text-[color:var(--gold)]" />
                          <p className="mt-2 font-display text-lg font-extrabold text-white">{m.value}</p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60">{m.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-6 p-8 sm:p-10">
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

      <section className="bg-[color:var(--gold)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
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