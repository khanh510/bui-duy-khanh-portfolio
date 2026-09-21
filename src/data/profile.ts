import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "BÙI DUY KHÁNH",
  shortName: "DUY KHÁNH",
  role: "Backend Developer",
  location: "Hanoi, Vietnam",
  email: "khanh510.dk@gmail.com",
  summary:
    "Backend developer building production web systems, REST APIs, payment flows, and third-party integrations with PHP, Laravel, and WordPress.",
  intro:
    "I build and maintain backend systems where business rules, data integrity, integrations, and long-term compatibility matter.",
  about: [
    "My professional work centers on PHP, Laravel, and WordPress products: designing business logic, REST APIs, database-backed workflows, background jobs, payment integrations, and connections to third-party services.",
    "I am comfortable working inside mature production codebases—debugging behavior, improving query performance, and evolving architecture without breaking existing users. I am also expanding my backend stack through Java and Spring Boot, with continued work around Redis, messaging, containers, and service-oriented systems.",
  ],
  availability: "Open to backend and backend-leaning full-stack opportunities",
  cvPath: "/cv/Bui-Duy-Khanh-CV.pdf",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
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
