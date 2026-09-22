import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

const primaryStack = ["PHP", "Laravel", "WordPress", "REST API"];
const expandingStack = ["Java", "Spring Boot", "Microservices"];

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,.65fr)] lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
              <span className="size-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{profile.location}</span>
              <span aria-hidden="true">/</span>
              <span>Backend systems</span>
            </div>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{profile.role}</p>
            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--heading)]">
              BÙI DUY<br />KHÁNH<span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl sm:leading-9">{profile.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
              <a className="button-secondary" href={profile.cvPath}>View HTML CV</a>
              <a className="button-quiet" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="systems-card" aria-label="Technical profile summary">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Technical brief</p>
              <span className="font-mono text-xs text-[var(--accent)]">01 / PROFILE</span>
            </div>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="data-label">Professional focus</dt>
                <dd className="mt-2 text-lg font-medium leading-7 text-[var(--heading)]">Backend logic, APIs, payments, integrations, production maintenance</dd>
              </div>
              <div>
                <dt className="data-label">Core stack</dt>
                <dd className="mt-3 flex flex-wrap gap-2">{primaryStack.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</dd>
              </div>
              <div>
                <dt className="data-label">Expanding into</dt>
                <dd className="mt-3 flex flex-wrap gap-2">{expandingStack.map((item) => <span className="tech-chip tech-chip-muted" key={item}>{item}</span>)}</dd>
              </div>
            </dl>
            <p className="mt-8 border-t border-[var(--border)] pt-5 text-sm leading-6 text-[var(--muted)]">{profile.availability}</p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
