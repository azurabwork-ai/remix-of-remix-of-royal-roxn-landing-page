import { createFileRoute } from "@tanstack/react-router";

const LLMS_TEXT = `# Royal RoXn

> Done-for-you appointment setting that books qualified seller appointments on Canadian Realtors' calendars.

Royal RoXn is an institutional-grade Canadian appointment-setting service and Inside Sales Agent (ISA) infrastructure built specifically for residential real estate agents, brokers, and teams across Canada. We handle outbound prospecting, omni-channel homeowner qualification, and calendar scheduling so Realtors can focus exclusively on attending high-converting listing consultations and closing transactions.

## Core Value Proposition
- Target Market: Canadian Realtors, Team Leaders, and Brokerages (Ontario, British Columbia, Alberta, Quebec, and nationwide).
- Primary Outcome: 5 to 15 qualified seller listing appointments booked directly onto the agent's Google or CRM calendar each month.
- Qualification Standard: Verified homeowner timeline (0 to 90 days), positive equity, motivated reason for selling, and confirmed attendance of all deed titleholders.
- Replacement: Eliminates manual cold calling, door knocking, and buying low-converting raw portal leads.

## Main Pages
- [Home](https://clients.royalroxn.com/): Comprehensive overview of the appointment-setting engine, qualification criteria, video case studies, performance metrics, supported brokerages (RE/MAX, Royal LePage, eXp Realty, Keller Williams, Century 21), and discovery call booking.
- [Case Studies](https://clients.royalroxn.com/case-studies): Verified real estate producer performance audits detailing booked appointments, listings signed, pipeline volume, and Gross Commission Income (GCI) growth.
- [Blog & Listing Resource Hub](https://clients.royalroxn.com/blog): In-depth tactical guides, Inside Sales Agent (ISA) operational breakdowns, and qualification scripts designed for Canadian real estate professionals.
- [Privacy Policy](https://clients.royalroxn.com/privacy): PIPEDA-compliant privacy policy outlining data collection, security, retention, and homeowner consent protocols under Canadian law.
- [Terms of Service](https://clients.royalroxn.com/terms): Service terms, geographic exclusivity rules, client expectations, and appointment delivery criteria.

## Featured Listing & ISA Knowledge Guides
- [What Is Royal RoXn? Helping Canadian Realtors Build a More Predictable Listing Pipeline](https://clients.royalroxn.com/blog/what-is-royal-roxn-canadian-realtors-listing-pipeline): Comprehensive guide explaining Royal RoXn's professional real estate appointment-setting and lead generation services for Canadian real estate professionals.
- [How to Get Seller Listings in Canada Without Cold Calling (2026 Guide)](https://clients.royalroxn.com/blog/how-to-get-seller-listings-canada-without-cold-calling): Modern multi-channel prospecting paired with dedicated Canadian appointment setters (ISAs) to book 5–15 verified listing consultations monthly.
- [Hiring an In-House ISA vs. Done-For-You Appointment Setting: Real Cost Comparison](https://clients.royalroxn.com/blog/inside-sales-agent-isa-vs-appointment-setting-service): Comprehensive cost breakdown of an in-house ISA ($70,000–$94,500 CAD/year) versus turnkey appointment setting with zero overhead or turnover risk.
- [Why Buying Online Real Estate Leads Fails in 2026 (And What Top Producers Do Instead)](https://clients.royalroxn.com/blog/why-buying-real-estate-leads-fails-and-what-to-do): Why generic online portal leads convert at <2% and why calendar-confirmed listing appointments achieve 18% to 28% closing rates.
- [7 Critical Questions to Qualify Motivated Home Sellers Before the Listing Presentation](https://clients.royalroxn.com/blog/qualify-motivated-home-sellers-questions-framework): The diagnostic qualification framework to filter high-motivation sellers, verify mortgage equity, and eliminate one-legged appointments.

## Contact & Business Details
- Organization: Royal RoXn
- Head Office: 1730 St. Laurent Blvd, Ottawa, ON K1G 3Y7, Canada
- Phone & WhatsApp: +1 (613) 723-0251 / +1 (343) 599-4999
- Email: contact@royalroxn.com / support@royalroxn.com
- Service Area: Canada (Ontario, British Columbia, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia)

## Technical Endpoints
- [XML Sitemap](https://clients.royalroxn.com/sitemap.xml): Full URL manifest for search engines and AI crawlers.
- [Robots.txt](https://clients.royalroxn.com/robots.txt): Crawler access rules supporting Googlebot, GPTBot, PerplexityBot, ClaudeBot, and Applebot.
`;

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(LLMS_TEXT, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
