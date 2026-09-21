import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  { title: "Backend", description: "Primary production stack", skills: ["PHP 8", "Laravel", "WordPress", "REST APIs", "Webhooks", "Background jobs"] },
  { title: "Data", description: "Schema and runtime concerns", skills: ["MySQL", "MariaDB", "SQL", "Schema design", "Query optimization", "Redis"] },
  { title: "Integration", description: "External systems and payments", skills: ["Payment gateways", "Third-party APIs", "OpenAI API", "MCP Server", "Email providers", "MQTT"] },
  { title: "Delivery & quality", description: "Tools used to ship and maintain", skills: ["Git", "GitHub Actions", "Bitbucket Pipelines", "Docker", "AWS", "Nginx", "PHPUnit", "ESLint"] },
  { title: "Currently expanding", description: "Active learning and deeper practice", skills: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis", "Docker"], expanding: true },
];
