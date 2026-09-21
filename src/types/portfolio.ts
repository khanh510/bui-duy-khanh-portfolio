export type SocialLink = {
  label: string;
  href?: string;
  handle?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  context: string;
  highlights: string[];
  technologies: string[];
};

export type ProjectStatus = "Production" | "Maintained" | "Delivered";

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  problem: string;
  responsibilities: string[];
  technologies: string[];
  features: string[];
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  image?: { src: string; alt: string };
  sourcePrivate?: boolean;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  expanding?: boolean;
};
