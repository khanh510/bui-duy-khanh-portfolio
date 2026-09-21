"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }

  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle light and dark theme" title="Toggle theme">
      <span className="theme-icon-light" aria-hidden="true">☼</span>
      <span className="theme-icon-dark" aria-hidden="true">◐</span>
    </button>
  );
}
