import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "BÙI DUY KHÁNH",
  shortName: "DUY KHÁNH",
  role: "Backend Developer",
  location: "Hanoi, Vietnam",
  email: "khanh510.dk@gmail.com",
  summary:
    "Backend developer with recent Java/Spring Boot and TypeScript/NestJS project work, backed by production experience in PHP, Laravel, REST APIs, payments, and third-party integrations.",
  intro:
    "I build and maintain backend systems where business rules, data integrity, integrations, and long-term compatibility matter.",
  about: [
    "My professional work centers on PHP, Laravel, and WordPress products: designing business logic, REST APIs, database-backed workflows, background jobs, payment integrations, and connections to third-party services.",
    "I am comfortable working inside mature production codebases—debugging behavior, improving query performance, and evolving architecture without breaking existing users. Recent projects have extended my stack into Java/Spring Boot and TypeScript/NestJS systems using React, Redis, Kafka, MQTT, TimescaleDB, Docker, and service-oriented patterns.",
  ],
  availability: "Open to backend and backend-leaning full-stack opportunities",
  cvPath: "/resume",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
  { label: "GitHub", href: "https://github.com/khanh510", handle: "github.com/khanh510" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/duykhanh510", handle: "linkedin.com/in/duykhanh510" },
  // TODO: Add the remaining real profile URLs below. Undefined links render as setup reminders, not broken anchors.
  { label: "Upwork" },
  { label: "Freelancer.com" },
];
