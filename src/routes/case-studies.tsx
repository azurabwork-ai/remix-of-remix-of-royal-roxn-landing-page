import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, Calendar, DollarSign, Check } from "lucide-react";
import logoAsset from "@/assets/logo_royal.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Royal RoXn Realtor Success Stories" },
      { name: "description", content: "See how Canadian Realtors are booking more qualified seller appointments and closing more listings with Royal RoXn." },
      { property: "og:title", content: "Case Studies — Royal RoXn" },
      { property: "og:description", content: "Real results from Canadian Realtors partnering with Royal RoXn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const cases = [
    {
      name: "Michael Thompson",
      brokerage: "RE/MAX Hallmark",
      province: "Ontario",
      headline: "37 seller appointments in 90 days — 11 new listings signed.",
      metrics: [
        { icon: Calendar, label: "Appointments", value: "37" },
        { icon: TrendingUp, label: "New Listings", value: "11" },
        { icon: DollarSign, label: "GCI Added", value: "$187K" },
      ],
      challenge: "Michael was juggling active buyers and had zero bandwidth to prospect for new listings. His pipeline was drying up despite closing consistently.",
      solution: "We deployed a dedicated appointment-setting team to handle all outbound calling, qualification, and calendar booking against his exact seller criteria.",
      result: "In 90 days he sat down with 37 qualified sellers and signed 11 new listing agreements — the strongest quarter of his career.",
    },
    {
      name: "Sarah Bélanger",
      brokerage: "Royal LePage Signature",
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
      brokerage: "eXp Realty",
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
      brokerage: "Century 21 Legacy",
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
      brokerage: "Keller Williams",
      province: "Nova Scotia",
      headline: "Stopped cold calling on day one — pipeline stayed full.",
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
      brokerage: "Sutton Group",
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
                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{c.name}</h2>
                  <p className="mt-1 text-sm text-white/70">{c.brokerage}</p>
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
            <Button asChild className="h-13 rounded-full bg-[color:var(--ink)] px-7 font-display text-sm font-semibold text-white hover:bg-[color:var(--graphite)] sm:text-base">
              <Link to="/" hash="book" className="inline-flex items-center gap-2">
                Book Your FREE Strategy Call
                <ArrowRight className="h-4 w-4" />
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