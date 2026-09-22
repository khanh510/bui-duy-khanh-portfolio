import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "ThimPress Help",
    eyebrow: "Support operations platform",
    description: "A Laravel-based helpdesk for managing customer conversations, support access, automation, and reporting across multiple inbound channels.",
    problem: "Support teams needed one permission-aware workflow for tickets arriving from email providers and product customers.",
    responsibilities: [
      "Designed action/service-oriented backend flows and API endpoints",
      "Implemented ticket lifecycle, notes, drafts, assignment, tagging, and merge workflows",
      "Integrated inbound email, background processing, search, and AI-assisted support features",
    ],
    technologies: ["Laravel 10", "MySQL", "Redis", "Horizon", "Scout", "OpenAI API"],
    features: ["Multi-channel email", "Queue workers", "Role and policy checks", "AI summaries and FAQ generation"],
    status: "Production",
    sourcePrivate: true,
    // TODO: Add a public product/demo URL if one becomes available.
  },
  {
    name: "LearnPress & Eduma",
    eyebrow: "LMS product ecosystem",
    description: "Backend and integration work across a widely deployed WordPress LMS, its theme ecosystem, subscriptions, privacy tooling, and AI-enabled authoring.",
    problem: "Long-lived LMS products needed new capabilities and better data models while preserving compatibility for existing installations.",
    responsibilities: [
      "Built scoped APIs and an MCP server for AI-assisted content operations",
      "Developed subscription, GDPR, login, checkout, and template integration flows",
      "Refactored legacy code toward PSR-4/OOP and designed custom LMS tables",
    ],
    technologies: ["PHP 8", "WordPress", "LearnPress", "MySQL", "REST API", "OpenAI", "MCP"],
    features: ["Backward compatibility", "Custom database tables", "Scoped API keys", "Recurring subscriptions"],
    status: "Maintained",
    sourcePrivate: true,
  },
  {
    name: "Payments & Commerce Integrations",
    eyebrow: "Gateway and webhook engineering",
    description: "A portfolio of payment integrations and transaction workflows delivered across LMS, booking, travel, and event products.",
    problem: "Products serving different markets required reliable payment initiation, webhooks, currency handling, refunds, and recurring billing.",
    responsibilities: [
      "Built and upgraded more than ten REST API and webhook integrations",
      "Implemented checkout, subscription, refund, and event-payment workflows",
      "Handled gateway-specific behavior across international and Vietnamese providers",
    ],
    technologies: ["Stripe", "PayPal", "Razorpay", "VNPay", "MoMo", "Sepay", "QPay", "Webhooks"],
    features: ["Payment Intents", "3DS/SCA", "Webhook processing", "Refund workflows"],
    status: "Production",
    sourcePrivate: true,
  },
  {
    name: "TravelWP & Booking Systems",
    eyebrow: "Booking domain systems",
    description: "Booking and commerce workflows for tours, hotels, and events, including pricing rules, availability, and content integrations.",
    problem: "Travel products needed flexible departure dates, per-guest pricing, variations, discounts, booking forms, and conflict-aware inventory.",
    responsibilities: [
      "Implemented a custom WooCommerce tour product type and booking workflow",
      "Designed schemas and logic for dynamic pricing and booking conflicts",
      "Added multilingual, SEO, review, and Elementor integrations",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Gutenberg", "Elementor"],
    features: ["Flexible departures", "Group pricing", "Booking validation", "WPML and Polylang support"],
    status: "Maintained",
    sourcePrivate: true,
  },
  {
    name: "Washbank",
    eyebrow: "Service booking backend",
    description: "A service-booking platform backend combining authenticated application APIs, caching, device messaging, and cloud deployment.",
    problem: "The product required a structured backend for booking operations and reliable communication with service infrastructure.",
    responsibilities: [
      "Participated in system design and backend implementation",
      "Implemented persistence, security, caching, and MQTT-connected workflows",
      "Supported CI/CD, deployment configuration, review, and documentation",
    ],
    technologies: ["Java", "Spring Boot", "JPA", "Spring Security", "Redis", "MQTT", "AWS"],
    features: ["Authenticated APIs", "Redis caching", "MQTT messaging", "AWS deployment"],
    status: "Delivered",
    demoUrl: "https://washbank.co.kr/",
    sourcePrivate: true,
  },
  {
    name: "TSAR Stock Exchange",
    eyebrow: "Internal trading platform",
    description: "A company project built as a TypeScript monorepo with a NestJS API service and web dashboard. Public product details are intentionally limited.",
    problem: "The platform needs an API-first backend foundation with reliable data services and supporting event infrastructure.",
    responsibilities: [
      "Contributed to backend development in an organization-owned codebase",
      "Worked with API service modules and supporting development infrastructure",
      "Kept implementation details and source access private",
    ],
    technologies: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "Kafka", "TimescaleDB", "Docker"],
    features: ["NestJS API service", "Prisma data layer", "Redis and Kafka infrastructure", "Docker-based local services"],
    status: "Internal",
    sourcePrivate: true,
    // TODO: Add a public project URL or approved case-study details when available.
  },
];

// TODO: Add the Windows/RS485 device integration and camera monitoring projects
// once scope, responsibilities, technologies, and disclosure permissions are confirmed.
