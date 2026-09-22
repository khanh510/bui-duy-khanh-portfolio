"use client";

import { useEffect, useState } from "react";
import type { SocialLink } from "@/types/portfolio";

type MobileNavProps = {
  navigation: readonly { label: string; href: string }[];
  socialLinks: SocialLink[];
  cvPath: string;
};

export function MobileNav({ navigation, socialLinks, cvPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button className="icon-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
        <span aria-hidden="true">{open ? "×" : "≡"}</span>
      </button>
      {open ? (
        <div id="mobile-navigation" className="mobile-panel">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} className="mobile-nav-link" href={item.href} onClick={() => setOpen(false)}>
                <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-6">
            {socialLinks.filter((link) => link.label === "GitHub" || link.label === "LinkedIn").map((link) =>
              link.href ? (
                <a key={link.label} className="button-secondary" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ) : (
                <span key={link.label} className="button-disabled" title={`TODO: Add ${link.label} URL`}>{link.label}</span>
              ),
            )}
            <a className="button-primary col-span-2" href={cvPath} onClick={() => setOpen(false)}>View CV</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
