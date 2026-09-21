import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-block scroll-mt-24">
      <Container>
        <SectionHeading index="02 / EXPERIENCE" title="Production systems, maintained over time." description="Professional experience across product engineering, agency delivery, and independent integration work." />
        <div className="relative">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.period}`} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-12">
                <div>
                  <p className="font-mono text-sm font-semibold text-[var(--accent)]">{item.period}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">0{index + 1} / ROLE</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--heading)] sm:text-3xl">{item.company}</h3>
                  <p className="mt-1 font-medium text-[var(--muted-strong)]">{item.role}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{item.context}</p>
                  <ul className="mt-6 grid gap-3 text-[0.98rem] leading-7 text-[var(--muted-strong)]">
                    {item.highlights.map((highlight) => <li className="detail-list-item" key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="mt-7"><TagList items={item.technologies} /></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
