import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
            P
          </span>
          <span className="font-semibold tracking-tight">PSV Bad Leonfelden</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#info" className="hover:text-foreground transition">Info</a>
          <a href="#anfahrt" className="hover:text-foreground transition">Anfahrt</a>
          <a href="#umgebung" className="hover:text-foreground transition">Umgebung</a>
          <a href="#stimmen" className="hover:text-foreground transition">Stimmen</a>
        </nav>
        <a
          href="#kontakt"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
