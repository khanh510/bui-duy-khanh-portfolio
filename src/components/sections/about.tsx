import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

const workingPrinciples = [
  ["Business logic", "Turn product requirements into explicit, testable backend workflows."],
  ["Integration reliability", "Treat webhooks, retries, idempotency, and provider quirks as first-class concerns."],
  ["Maintainability", "Improve mature systems without sacrificing compatibility or operational stability."],
];

export function About() {
  return (
    <section id="about" className="section-block scroll-mt-24">
      <Container>
        <SectionHeading index="01 / ABOUT" title="Backend work grounded in product constraints." description="A practical engineering profile centered on the systems behind web products." />
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] md:gap-16">
          <div className="space-y-5 text-lg leading-8 text-[var(--muted-strong)]">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {workingPrinciples.map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-[var(--heading)]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
