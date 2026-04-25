export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">P</span>
              <span className="font-semibold tracking-tight">PSV Bad Leonfelden</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Pétanque Sportverein. Seit 2009 die Adresse für Boule im
              oberösterreichischen Mühlviertel.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Sportplatzstraße 12</li>
              <li>4190 Bad Leonfelden</li>
              <li className="pt-2"><a href="tel:+43721312345" className="hover:text-primary transition">+43 7213 12345</a></li>
              <li><a href="mailto:info@psv-leonfelden.at" className="hover:text-primary transition">info@psv-leonfelden.at</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Folge uns</h4>
            <div className="flex gap-3">
              <Social href="https://facebook.com" label="Facebook">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 2.9h-2.3v7A10 10 0 0022 12z" />
              </Social>
              <Social href="https://instagram.com" label="Instagram">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.2-2.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </Social>
              <Social href="mailto:info@psv-leonfelden.at" label="E-Mail">
                <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8L4 7v11h16V7l-8 6zM4.5 6l7.5 5.5L19.5 6h-15z" />
              </Social>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PSV Bad Leonfelden. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Impressum</a>
            <a href="#" className="hover:text-foreground transition">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">{children}</svg>
    </a>
  );
}
