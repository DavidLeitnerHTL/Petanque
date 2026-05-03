import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function BouleMark() {
  return (
    <svg viewBox="0 0 44 26" width="36" height="22" aria-hidden="true">
      <defs>
        <clipPath id="hdr-clipL"><circle cx="10" cy="15" r="9.5" /></clipPath>
        <clipPath id="hdr-clipR"><circle cx="34" cy="15" r="9.5" /></clipPath>
        <clipPath id="hdr-clipM"><circle cx="22" cy="12" r="11" /></clipPath>
      </defs>
      {/* left boule */}
      <circle cx="10" cy="15" r="9.5" fill="#9a9c9b" />
      <g clipPath="url(#hdr-clipL)" transform="rotate(35 10 15)">
        <ellipse cx="10" cy="15" rx="4" ry="12" fill="none" stroke="#fff" strokeWidth="1" transform="translate(-2,0)" />
        <ellipse cx="10" cy="15" rx="12" ry="4" fill="none" stroke="#fff" strokeWidth="1" transform="translate(0,-2)" />
      </g>
      {/* right boule */}
      <circle cx="34" cy="15" r="9.5" fill="#9a9c9b" />
      <g clipPath="url(#hdr-clipR)" transform="rotate(-40 34 15)">
        <ellipse cx="34" cy="15" rx="4" ry="12" fill="none" stroke="#fff" strokeWidth="1" transform="translate(-2,0)" />
        <ellipse cx="34" cy="15" rx="12" ry="4" fill="none" stroke="#fff" strokeWidth="1" transform="translate(0,-2)" />
      </g>
      {/* middle boule (largest, in front) */}
      <circle cx="22" cy="12" r="11" fill="#9a9c9b" />
      <g clipPath="url(#hdr-clipM)" transform="rotate(-15 22 12)">
        <ellipse cx="22" cy="12" rx="4.5" ry="13" fill="none" stroke="#fff" strokeWidth="1" transform="translate(-2,0)" />
        <ellipse cx="22" cy="12" rx="13" ry="4.5" fill="none" stroke="#fff" strokeWidth="1" transform="translate(0,-2)" />
      </g>
      {/* red cochonnet */}
      <circle cx="30" cy="23" r="3" fill="#bb133e" />
    </svg>
  );
}

const FACEBOOK_URL = "https://www.facebook.com/PetanqueSportVereinBadLeonfelden/";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#verein", label: "Verein" },
    { href: "#galerie", label: "Galerie" },
    { href: "#training", label: "Training" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <BouleMark />
          <span className="font-semibold tracking-tight text-sm sm:text-base">PSV Bad Leonfelden</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors"
        >
          Facebook
        </a>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary transition"
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm hover:bg-secondary transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-primary px-3 py-3 text-sm font-medium text-primary-foreground text-center"
            >
              Auf Facebook folgen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
