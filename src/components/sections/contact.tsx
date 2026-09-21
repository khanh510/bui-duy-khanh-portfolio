import { Container } from "@/components/ui/container";
import { profile, socialLinks } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="contact-panel">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">05 / CONTACT</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--heading)] sm:text-5xl">Let’s discuss the system behind your product.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted-strong)]">For backend roles, integration work, or project collaboration, email is the most direct way to reach me.</p>
            <a className="button-primary mt-8" href={`mailto:${profile.email}`}>Email {profile.email} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-links">
            {socialLinks.map((link) => link.href ? (
              <a key={link.label} href={link.href} className="contact-link" target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}>
                <span>{link.label}</span><span className="font-mono text-xs text-[var(--muted)]">{link.handle ?? "Open profile"} ↗</span>
              </a>
            ) : (
              <div key={link.label} className="contact-link opacity-60" title={`TODO: Add ${link.label} URL`}>
                <span>{link.label}</span><span className="font-mono text-xs text-[var(--muted)]">URL to be added</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
