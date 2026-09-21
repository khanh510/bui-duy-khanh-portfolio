import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-block scroll-mt-24">
      <Container>
        <SectionHeading index="04 / CAPABILITIES" title="A backend-first technical toolkit." description="Professional tools are separated from technologies currently being expanded through active learning and project work." />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className={`skill-card ${group.expanding ? "skill-card-expanding" : ""}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--heading)]">{group.title}</h3>
                {group.expanding ? <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[var(--accent)]">Learning</span> : null}
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{group.description}</p>
              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => <li key={skill} className="flex items-center gap-3 text-sm text-[var(--muted-strong)]"><span className="size-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
