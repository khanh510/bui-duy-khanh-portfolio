import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built for clarity and maintainability.</p>
          <a className="text-link font-mono text-xs" href="#home">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
}
