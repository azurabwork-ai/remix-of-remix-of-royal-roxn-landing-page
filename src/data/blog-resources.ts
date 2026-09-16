export interface DownloadableResource {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  fileFormat: string;
  pageCount: string;
  description: string;
  keyPoints: string[];
  contentDossier: {
    heading: string;
    body: string[];
  }[];
}

export const DOWNLOADABLE_RESOURCES: Record<string, DownloadableResource> = {
  "seller-pre-qualification-script": {
    id: "seller-pre-qualification-script",
    title: "2026 Canadian Seller Pre-Qualification Script & Diagnostic Framework",
    subtitle:
      "The word-for-word phone & discovery script to eliminate tire-kickers and lock in motivated homeowners.",
    category: "Listing Acquisition & Conversion",
    fileFormat: "PDF Master Guide + Printable Desk Cheat-Sheet",
    pageCount: "14 Pages (A4 Master Protocol)",
    description:
      "Engineered specifically for Canadian residential real estate markets (RECO, BCFSA, CREB compliance). Used by top-producing teams to achieve an 84%+ presentation show-up rate.",
    keyPoints: [
      "The 7 Non-Negotiable Diagnostic Questions that reveal true seller motivation, timeline, and equity upfront.",
      "The 'Both Decision-Makers' Commitment Script to end one-legged presentations forever.",
      "CMA Anchor Reset: How to shift homeowners away from 2022 peak pricing without provoking hostility.",
      "Spam Filter Bypass: Protocol for phone, SMS, and WhatsApp appointment confirmations.",
    ],
    contentDossier: [
      {
        heading: "Diagnostic Question 1: Catalyst & Urgency",
        body: [
          "Verbatim Script: 'Hi [Homeowner Name], this is [Your Name] with [Brokerage Name]. I saw your request regarding the recent neighborhood property valuation on [Street Name]. To make sure I provide the exact market breakdown you need: what is prompting you to look into your home's equity right at this particular time?'",
          "Psychological Purpose: Distinguishes between casual curiosity ('just seeing what Zillow says') versus genuine relocation catalysts (job transfer, retirement, downsizing, growing family). If no catalyst exists, do not book an in-person presentation—place them in a long-term automated equity email nurture.",
        ],
      },
      {
        heading: "Diagnostic Question 2: Destination Clarity",
        body: [
          "Verbatim Script: 'When your property sells and you hand over the keys, where are you planning on moving to next?'",
          "Rule of Thumb: Homeowners who cannot articulate where they are moving next have a >50% cancellation rate on listing contracts. If they do not know their destination, offer to connect them with a buying specialist or temporary lease consult before listing.",
        ],
      },
      {
        heading: "Diagnostic Question 3: All Titleholders Guarantee",
        body: [
          "Verbatim Script: 'Since we will be reviewing legal comparables and net equity projections, will both you and [Spouse/Partner/Co-owner Name] be present around the kitchen table on [Day] at [Time]?'",
          "If the prospect hesitates ('My partner might be late/busy'): 'Under Canadian disclosure guidelines and in order to respect your time, our policy is to only meet when all decision-makers are present so we don't have to repeat half the analysis. Let's find an evening when both of you are completely free.'",
        ],
      },
      {
        heading: "Diagnostic Question 4: Equity & Mortgage Reality",
        body: [
          "Verbatim Script: 'To help me calculate an accurate net proceeds sheet for you showing your exact take-home funds after legal and transaction fees: approximately what balance is remaining on your current mortgage?'",
          "Benchmark: Ensures the homeowner has at least 15% to 25% positive equity in current Canadian market conditions, preventing probate or short-sale complications late in escrow.",
        ],
      },
    ],
  },
  "isa-vs-appointment-setting-model": {
    id: "isa-vs-appointment-setting-model",
    title: "Canadian Realtor ISA vs. Done-For-You Appointment Setting Financial Model (2026)",
    subtitle:
      "Complete cost, overhead, and ROI breakdown for solo agents, team leaders, and brokerages.",
    category: "Brokerage Operations & Scaling",
    fileFormat: "Spreadsheet Model + Executive PDF Audit",
    pageCount: "11 Pages + Interactive Model",
    description:
      "A transparent financial audit breaking down salary, software, recruitment, and management overhead between in-house hiring versus outsourced Canadian appointment setting.",
    keyPoints: [
      "The Hidden $24,500 Drag: Dialer tech, skip tracing, CRM licenses, and payroll taxes.",
      "The 6.8-Month Churn Problem: Why in-house ISAs burn out and cost you 12+ weekly coaching hours.",
      "Unit Economics Comparison: Cost per confirmed seller consultation across Ontario, BC, and Alberta.",
      "Plug-and-Play Launch Timeline: From 6 weeks hiring ramp down to 7 business days live appointments.",
    ],
    contentDossier: [
      {
        heading: "In-House ISA Cost Realities in Major Canadian Metros",
        body: [
          "Base Salary: $45,000 - $60,000 CAD per annum (average in Toronto, Ottawa, Calgary, Vancouver).",
          "Appointment & Closing Bonuses: $10,000 - $18,000 CAD.",
          "Dialer, VoIP & CRM Licenses: $4,500 CAD/year.",
          "Public Data & Skip Tracing: $8,000 CAD/year.",
          "Total Direct Outlay: $67,500 - $90,500 CAD per year.",
        ],
      },
      {
        heading: "The Done-For-You Alternative (Royal RoXn Model)",
        body: [
          "100% focused on qualified, confirmed calendar consultations with motivated Canadian homeowners.",
          "Zero equipment, dialer, or management overhead.",
          "Predictable monthly delivery of 5 to 15 exclusive listing appointments.",
        ],
      },
    ],
  },
  "portal-leads-roi-audit": {
    id: "portal-leads-roi-audit",
    title: "Why Online Real Estate Leads Fail & The Calendar-Booking ROI Blueprint (2026)",
    subtitle:
      "Why 98% of portal leads waste your time and how confirmed appointments deliver 4x higher closing rates.",
    category: "Lead Acquisition & ROI",
    fileFormat: "Whitepaper & Analytical Dossier",
    pageCount: "12 Pages",
    description:
      "Comparative analysis tracking 500 portal web leads vs. 500 calendar-booked listing consultations across Canadian brokerage databases.",
    keyPoints: [
      "The 60-Second Chasing Race: Why shared leads decay within 15 minutes of submission.",
      "Psychological Stature: The difference between calling a hostile stranger vs. attending an invited consultation.",
      "True Cost Per Closed Deal: Factoring in 80+ hours of wasted manual prospecting phone time.",
    ],
    contentDossier: [
      {
        heading: "The Shared Lead Trap",
        body: [
          "When a consumer submits their info on generic real estate portals or social ad calculators, their record is often distributed to 4 to 6 competing agents within seconds.",
          "By the time the third agent calls, the homeowner is furious and screening all unknown calls, damaging the Realtor's personal brand.",
        ],
      },
      {
        heading: "The Exclusive Calendar Solution",
        body: [
          "Royal RoXn does not distribute contact lists. We conduct multi-channel engagement, qualify the seller on equity and timeline, and place a confirmed appointment onto the Realtor's calendar.",
          "The Realtor attends prepared to present their marketing plan to a receptive, informed homeowner.",
        ],
      },
    ],
  },
  "7-diagnostic-questions-card": {
    id: "7-diagnostic-questions-card",
    title: "The 7-Question Seller Diagnostic Cheat-Sheet Card (Printable)",
    subtitle:
      "Keep this printable card at your desk or in your vehicle before leaving for any listing presentation.",
    category: "Sales Scripting & Execution",
    fileFormat: "One-Page Printable Quick-Card + Guide",
    pageCount: "1 Quick Reference Card + 8-Page Guide",
    description:
      "A quick-reference guide designed to be laminated and kept on your desk or car visor. Ensures you never get caught off-guard during discovery or listing consultations.",
    keyPoints: [
      "The 7 core diagnostic questions in sequential order.",
      "Immediate objection-turnarounds for price and timeline.",
      "Closing commitment language for the consultation agreement.",
    ],
    contentDossier: [
      {
        heading: "The 7 Core Questions Sequence",
        body: [
          "1. What is prompting your move at this particular time?",
          "2. Where are you planning on moving next once this property sells?",
          "3. What is your ideal timeframe to have the transaction completed?",
          "4. Will all legal deed holders be present when we sit down together?",
          "5. What price range do you anticipate your home commanding in today's market?",
          "6. Approximately what is remaining on your current mortgage balance?",
          "7. Have you spoken with or signed an exclusive agreement with another real estate professional?",
        ],
      },
    ],
  },
};
