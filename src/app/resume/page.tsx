import type { Metadata } from "next";
import Link from "next/link";
import { ResumeActions } from "@/components/resume-actions";
import { experience } from "@/data/experience";
import { profile, socialLinks } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "CV",
  description: `Professional CV for ${profile.name}, ${profile.role}.`,
  alternates: { canonical: "/resume" },
};

const resumeLinks = socialLinks.filter((link) => link.href && ["Email", "GitHub", "LinkedIn"].includes(link.label));

export default function ResumePage() {
  return (
    <main className="resume-shell">
      <div className="resume-toolbar">
        <Link className="button-secondary" href="/">← Back to portfolio</Link>
        <ResumeActions />
      </div>

      <article className="resume-document">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Curriculum Vitae</p>
            <h1>{profile.name}</h1>
            <p className="resume-role">{profile.role}</p>
          </div>
          <address className="resume-contact">
            <span>{profile.location}</span>
            {resumeLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel={link.label === "Email" ? undefined : "noreferrer"}>
                {link.handle ?? link.label}
              </a>
            ))}
          </address>
        </header>

        <section className="resume-summary" aria-labelledby="resume-profile-heading">
          <h2 id="resume-profile-heading">Profile</h2>
          <p>{profile.summary} {profile.intro}</p>
        </section>

        <div className="resume-layout">
          <div className="resume-main-column">
            <section aria-labelledby="resume-experience-heading">
              <h2 id="resume-experience-heading">Professional Experience</h2>
              <div className="resume-section-stack">
                {experience.map((item) => (
                  <article className="resume-entry" key={`${item.company}-${item.period}`}>
                    <div className="resume-entry-heading">
                      <div>
                        <h3>{item.role}</h3>
                        <p>{item.company}</p>
                      </div>
                      <time>{item.period}</time>
                    </div>
                    <p className="resume-context">{item.context}</p>
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="resume-projects-heading">
              <h2 id="resume-projects-heading">Selected Projects</h2>
              <div className="resume-section-stack">
                {projects.map((project) => (
                  <article className="resume-entry resume-project-entry" key={project.name}>
                    <div className="resume-entry-heading">
                      <div>
                        <h3>{project.name}</h3>
                        <p>{project.eyebrow}</p>
                      </div>
                      <span>{project.status}</span>
                    </div>
                    <p className="resume-context">{project.description}</p>
                    <ul>
                      {project.responsibilities.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="resume-tech-line">{project.technologies.join(" · ")}</p>
                    {(project.links?.length ?? 0) > 0 || project.demoUrl ? (
                      <p className="resume-project-links">
                        {project.links?.map((link) => (
                          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                        ))}
                        {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">Live product</a> : null}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="resume-sidebar" aria-label="Skills and availability">
            <section>
              <h2>Technical Skills</h2>
              <div className="resume-skill-groups">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.skills.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Professional Focus</h2>
              <ul>
                <li>Backend systems and business logic</li>
                <li>REST APIs and webhooks</li>
                <li>Payment and third-party integrations</li>
                <li>Database-backed web applications</li>
                <li>Production maintenance and debugging</li>
              </ul>
            </section>

            <section>
              <h2>Availability</h2>
              <p>{profile.availability}</p>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
