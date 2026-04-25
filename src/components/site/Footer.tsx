const FACEBOOK_URL = "https://www.facebook.com/PetanqueSportVereinBadLeonfelden/";

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                P
              </span>
              <span className="font-semibold tracking-tight">PSV Bad Leonfelden</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Pétanque Sportverein. Seit 2020 die Adresse für Boule im
              oberösterreichischen Mühlviertel.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Sportplatzstraße 12</li>
              <li className="text-muted-foreground">4190 Bad Leonfelden</li>
              <li className="pt-2">
                <a href="tel:+43721312345" className="hover:text-primary transition">
                  +43 7213 12345
                </a>
              </li>
              <li>
                <a href="mailto:info@psv-leonfelden.at" className="hover:text-primary transition">
                  info@psv-leonfelden.at
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Folge uns
            </h4>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 2.9h-2.3v7A10 10 0 0022 12z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PSV Bad Leonfelden. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">
              Impressum
            </a>
            <a href="#" className="hover:text-foreground transition">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
