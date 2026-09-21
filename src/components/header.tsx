import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import { profile, socialLinks } from "@/data/profile";

export function Header() {
  const featuredSocials = socialLinks.filter((link) => link.label === "GitHub" || link.label === "LinkedIn");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background-translucent)] backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-[-0.02em] text-[var(--heading)]" aria-label="Bùi Duy Khánh, home">
            <span className="flex size-9 items-center justify-center rounded-full bg-[var(--heading)] font-mono text-xs text-[var(--background)]">DK</span>
            <span className="hidden sm:inline">{profile.shortName}</span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {profile.navigation.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              {featuredSocials.map((link) => link.href ? (
                <a key={link.label} className="header-text-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ) : (
                <span key={link.label} className="header-text-link cursor-help opacity-45" title={`TODO: Add ${link.label} URL`}>{link.label}</span>
              ))}
              <a className="header-cv-link" href={profile.cvPath} download>Download CV</a>
            </div>
            <ThemeToggle />
            <MobileNav navigation={profile.navigation} socialLinks={socialLinks} cvPath={profile.cvPath} />
          </div>
        </div>
      </Container>
    </header>
  );
}
