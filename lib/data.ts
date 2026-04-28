import {
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  LineChart,
  MailCheck,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const metrics = [
  { value: "6+", label: "years in growth" },
  { value: "$100K+", label: "monthly ad budgets" },
  { value: "US / CA / TR / EMEA", label: "markets managed" },
  { value: "12", label: "early consulting clients" },
];

export const timeline = [
  {
    role: "Digital Marketing Specialist",
    company: "Mükellef Teknoloji",
    period: "Jan 2025 - Mar 2026",
    summary:
      "Managed multi-channel paid media, budget allocation, CAC, CTR and CVR analysis, A/B tests, creative collaboration, and market trend monitoring.",
  },
  {
    role: "Performance Marketing Specialist",
    company: "Pedal Commander / Vitalen Holding",
    period: "Jan 2023 - Jan 2025",
    summary:
      "Led US and Canada paid growth with $2K daily spend, full-funnel Meta Ads, UGC testing, custom feeds, server-side Meta Pixel, and lifecycle CRM flows.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "KitUP",
    period: "May 2021 - May 2023",
    summary:
      "Oversaw $100K+ budgets across Turkey, US, and EMEA while managing Meta, Google, TikTok, and Twitter Ads with creative operations.",
  },
  {
    role: "Performance Marketing Specialist",
    company: "Digiens Media / Danışmanlık Akademisi",
    period: "May 2020 - May 2021",
    summary:
      "Designed Klaviyo automations for 250K+ contacts, drove a 35% revenue lift, and reached 45.7% click-to-open rates across full-funnel campaigns.",
  },
  {
    role: "Performance Marketing Specialist",
    company: "Freelance",
    period: "Jan 2020 - May 2020",
    summary:
      "Consulted for 12 companies, building lean full-funnel campaigns with segmentation, creative tests, and measurable growth plans.",
  },
];

export const education = [
  "BA in Advertising, Kadir Has University, 2018-2020",
  "Computer Programming, Nisantasi University, 2020-2022",
];

export const languages = [
  "Turkish - native",
  "English - professional proficiency",
];

export const services = [
  {
    title: "Campaign Management",
    icon: Megaphone,
    description:
      "Full-funnel planning, launch, optimization, and reporting across Meta, Google, TikTok, Reddit, Twitter, Apple Search, Bing, Taboola, and LinkedIn Ads.",
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    description:
      "GA4, Meta Pixel and CAPI, GTM, Looker, Northbeam, Clarity, ClickCease, and attribution models that make campaign decisions easier to defend.",
  },
  {
    title: "Email & CRM",
    icon: MailCheck,
    description:
      "Klaviyo, Attentive, and HubSpot lifecycle automations, A/B tests, segmentation, list hygiene, and retention-focused campaign calendars.",
  },
  {
    title: "Creative & Funnel Ops",
    icon: Palette,
    description:
      "Creative briefing, UGC strategy, ad variation testing, custom product feeds, funnel audits, and tight collaboration with design teams.",
  },
];

export const skillGroups = [
  {
    title: "Advertising Platforms",
    icon: Target,
    tools: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "Twitter Ads",
      "Reddit Ads",
      "Apple Search Ads",
      "Bing Ads",
      "Taboola",
      "LinkedIn Ads",
    ],
  },
  {
    title: "Analytics & Tracking",
    icon: LineChart,
    tools: [
      "GA4",
      "Google Tag Manager",
      "Meta Pixel & CAPI",
      "Looker",
      "Northbeam",
      "Microsoft Clarity",
      "ClickCease",
    ],
  },
  {
    title: "Email & CRM",
    icon: Users,
    tools: ["Klaviyo", "Attentive", "HubSpot CRM", "Segmentation", "Lifecycle flows"],
  },
  {
    title: "Creative Ops & Tech",
    icon: Cpu,
    tools: [
      "Shopify Plus",
      "Slack",
      "Asana",
      "Notion",
      "Trello",
      "Monday.com",
      "Zapier",
      "HTML email basics",
    ],
  },
  {
    title: "Certifications",
    icon: Sparkles,
    tools: [
      "Email Marketing Strategist - Digital Marketer",
      "HubSpot Email Marketer",
      "Google Digital Marketing & E-commerce Certificate",
      "Klaviyo SMS Marketing & Product Certifications",
      "Meta Certified Digital Marketing Associate",
    ],
  },
];

export const caseStudies = [
  {
    slug: "mukellef",
    company: "Mükellef Teknoloji",
    role: "Digital Marketing Specialist",
    period: "Jan 2025 - Mar 2026",
    logoText: "MK",
    impact: "Scaled multi-channel acquisition with sharper CAC, CTR, and CVR analysis.",
    challenge:
      "Mükellef needed efficient acquisition across multiple paid channels while keeping budget allocation responsive to performance and market changes.",
    approach:
      "I managed paid media planning, analyzed CAC, CTR, and CVR trends, ran A/B tests, monitored platform shifts, and worked closely with designers to turn learnings into new ad iterations.",
    results: [
      "Improved decision speed through regular metric reviews.",
      "Built a more disciplined test cadence for creatives and audiences.",
      "Aligned performance insights with design output and campaign launches.",
    ],
    metrics: [
      { name: "CAC focus", before: 62, after: 42 },
      { name: "CTR quality", before: 45, after: 68 },
      { name: "CVR gains", before: 38, after: 55 },
    ],
  },
  {
    slug: "pedal-commander",
    company: "Pedal Commander / Vitalen Holding",
    role: "Performance Marketing Specialist",
    period: "Jan 2023 - Jan 2025",
    logoText: "PC",
    impact: "$2K daily US/Canada spend across full-funnel paid social and lifecycle CRM.",
    challenge:
      "The business needed profitable scale in competitive US and Canada e-commerce markets while reducing waste from noisy attribution and repeated creative fatigue.",
    approach:
      "I built full-funnel Meta campaigns using Shop Ads, Advantage+, UGC testing, and custom feeds; implemented server-side Meta Pixel; used Looker, Northbeam, ClickCease, and Clarity; and executed CRM flows in Klaviyo and Attentive.",
    results: [
      "Managed $2K daily spend across the US and Canada.",
      "Expanded growth tests across Reddit, TikTok, Apple Search, Bing, and Taboola.",
      "Contributed performance marketing work to the Turquality program.",
    ],
    metrics: [
      { name: "Daily spend", before: 950, after: 2000 },
      { name: "Channel mix", before: 3, after: 8 },
      { name: "Signal quality", before: 48, after: 78 },
    ],
  },
  {
    slug: "kitup",
    company: "KitUP",
    role: "Digital Marketing Specialist",
    period: "May 2021 - May 2023",
    logoText: "KU",
    impact: "$100K+ monthly budgets across Turkey, US, and EMEA.",
    challenge:
      "KitUP needed to scale paid growth across regions without losing creative discipline or ROAS visibility.",
    approach:
      "I managed Meta, Google, TikTok, and Twitter Ads; briefed designers; tracked high-ROAS creatives; and scaled winning visual angles across markets.",
    results: [
      "Oversaw $100K+ ad budgets across Turkey, US, and EMEA.",
      "Built a practical creative operation around performance data.",
      "Identified and scaled high-ROAS visuals faster.",
    ],
    metrics: [
      { name: "Monthly budget", before: 45000, after: 100000 },
      { name: "Creative tests", before: 30, after: 92 },
      { name: "ROAS signal", before: 52, after: 81 },
    ],
  },
  {
    slug: "digiens-media",
    company: "Digiens Media / Danışmanlık Akademisi",
    role: "Performance Marketing Specialist",
    period: "May 2020 - May 2021",
    logoText: "DM",
    impact: "35% revenue lift and 45.7% click-to-open rate through Klaviyo automation.",
    challenge:
      "The academy needed lifecycle revenue from a large contact base while continuing full-funnel acquisition through Meta and Google.",
    approach:
      "I designed Klaviyo automations for 250K+ contacts, segmented lists, tested email flows, and optimized full-funnel Meta and Google campaigns for ROAS and LTV.",
    results: [
      "Created lifecycle automations for 250K+ contacts.",
      "Drove a 35% revenue lift.",
      "Reached 45.7% click-to-open rates.",
    ],
    metrics: [
      { name: "Revenue lift", before: 0, after: 35 },
      { name: "CTO rate", before: 18, after: 45.7 },
      { name: "Contacts", before: 80000, after: 250000 },
    ],
  },
  {
    slug: "freelance",
    company: "Freelance Consulting",
    role: "Performance Marketing Specialist",
    period: "Jan 2020 - May 2020",
    logoText: "BO",
    impact: "Consulted for 12 companies with lean, measurable full-funnel campaigns.",
    challenge:
      "Early-stage teams needed acquisition systems that could work with limited budgets and uneven creative resources.",
    approach:
      "I built segmented full-funnel campaigns, planned creative tests, clarified metrics, and helped teams focus spend where learning velocity was highest.",
    results: [
      "Consulted for 12 companies.",
      "Shipped lean campaign structures quickly.",
      "Turned early data into practical creative and budget decisions.",
    ],
    metrics: [
      { name: "Companies", before: 0, after: 12 },
      { name: "Test velocity", before: 25, after: 74 },
      { name: "Budget clarity", before: 35, after: 72 },
    ],
  },
];

export const testimonials = [
  {
    company: "KitUP",
    quote:
      "Space reserved for a future recommendation about creative testing, paid media discipline, and regional scaling.",
  },
  {
    company: "Pedal Commander",
    quote:
      "Space reserved for a future recommendation about US and Canada growth execution.",
  },
  {
    company: "Mükellef Teknoloji",
    quote:
      "Space reserved for a future recommendation about cross-functional campaign work.",
  },
];

export const homeHighlights = [
  {
    title: "Experiment-Driven Campaigns",
    description:
      "I use creative testing, segmentation, and measurement loops to improve conversion quality instead of relying on platform defaults.",
    icon: Search,
  },
  {
    title: "Data-Powered Decisions",
    description:
      "CAC, CTR, CVR, ROAS, LTV, and attribution signals shape how budgets move and which creative concepts keep earning spend.",
    icon: BarChart3,
  },
  {
    title: "Remote-Friendly Collaboration",
    description:
      "I work closely with design, data, and product teams across regions and time zones, with clear briefs and practical reporting.",
    icon: BriefcaseBusiness,
  },
];
