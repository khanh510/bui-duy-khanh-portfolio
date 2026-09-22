import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  { title: "Backend & APIs", description: "Primary production foundation", skills: ["PHP 8", "Laravel", "REST APIs", "Webhooks", "Background jobs", "WordPress"] },
  { title: "Data & caching", description: "Data integrity and runtime performance", skills: ["MySQL", "MariaDB", "SQL", "Schema design", "Query optimization", "Redis"] },
  { title: "Cloud & delivery", description: "Shipping and operating applications", skills: ["Docker", "Git", "GitHub Actions", "Bitbucket Pipelines", "CI/CD", "AWS", "Nginx"] },
  { title: "Integrations", description: "External systems and transaction flows", skills: ["Payment gateways", "Third-party APIs", "OpenAI API", "MCP Server", "Email providers", "MQTT"] },
  { title: "Currently expanding", description: "Current projects and deeper backend practice", skills: ["Java", "Spring Boot", "TypeScript", "NestJS", "Microservices", "Kafka", "TimescaleDB"], expanding: true },
];
