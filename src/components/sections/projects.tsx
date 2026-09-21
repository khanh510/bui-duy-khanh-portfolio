import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-block scroll-mt-24">
      <Container>
        <SectionHeading index="03 / SELECTED WORK" title="Systems defined by real operational requirements." description="Selected product and integration work. Most production source is held in organization-owned private repositories." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className={`project-card ${index === 0 ? "lg:col-span-2" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">0{index + 1} / {project.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--heading)] sm:text-3xl">{project.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="status-badge">{project.status}</span>
                  {project.sourcePrivate ? <span className="private-badge">Private source</span> : null}
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-strong)]">{project.description}</p>
              <div className={`mt-8 grid gap-8 ${index === 0 ? "md:grid-cols-2" : ""}`}>
                <div>
                  <p className="data-label">Requirement</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.problem}</p>
                  <p className="data-label mt-6">Responsibilities</p>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-[var(--muted-strong)]">
                    {project.responsibilities.map((item) => <li className="detail-list-item" key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="data-label">Technical features</p>
                  <ul className="mt-2 grid gap-2 text-sm leading-6 text-[var(--muted-strong)]">
                    {project.features.map((item) => <li className="feature-row" key={item}>{item}</li>)}
                  </ul>
                  <div className="mt-6"><TagList items={project.technologies} /></div>
                  {project.demoUrl || project.githubUrl ? (
                    <div className="mt-6 flex gap-4 font-mono text-sm">
                      {project.demoUrl ? <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">View demo ↗</a> : null}
                      {project.githubUrl ? <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗</a> : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
