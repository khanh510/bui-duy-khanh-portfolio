import type { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    company: "ThimPress / PhysCode Vietnam",
    role: "Full-stack Developer · Backend-leaning",
    period: "06/2023 — 08/2026",
    context:
      "Product engineering across LearnPress, Eduma, support tooling, booking, events, and payment products.",
    highlights: [
      "Built Laravel helpdesk APIs and workflows for tickets, permissions, multi-channel email, queues, search, reporting, and AI-assisted support operations.",
      "Developed and maintained WordPress and LearnPress features, including custom data models, REST APIs, GDPR flows, subscriptions, and backward-compatible OOP refactors.",
      "Delivered booking and event workflows and more than ten payment gateway integrations using REST APIs and webhooks.",
      "Contributed to a Spring Boot service-booking backend using JPA, Spring Security, Redis, MQTT, and AWS deployment tooling.",
      "Contributed to a TypeScript/NestJS platform with a React/Next.js dashboard, Prisma, PostgreSQL, Redis, Kafka, TimescaleDB, and Docker.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "WordPress",
      "MySQL",
      "Redis",
      "REST API",
      "Spring Boot",
    ],
  },
  {
    company: "Magenest",
    role: "Full-stack Web Developer",
    period: "11/2022 — 04/2023",
    context:
      "Agency delivery for B2B, e-commerce, and multilingual web platforms.",
    highlights: [
      "Developed corporate websites and multilingual portals for B2B clients.",
      "Worked on products for MegaDigital and the high-volume Nowtadi content platform.",
      "Created custom data models and REST APIs connecting frontend and backend systems.",
    ],
    technologies: ["PHP", "JavaScript", "REST API", "Data modeling"],
  },
  {
    company: "Independent contracts",
    role: "Backend / Integration Developer",
    period: "05/2020 — 05/2022",
    context:
      "Integration and automation work with partners in the United States and United Kingdom.",
    highlights: [
      "Implemented two-way data synchronization with ActionNetwork, including conflict resolution across thousands of daily records.",
      "Built a Paylocity data ingestion module and location-aware branch recommendation logic.",
      "Delivered a rule-based chatbot for FAQ and pre-sales workflows.",
    ],
    technologies: ["PHP", "REST API", "Automation", "Geolocation"],
  },
];
