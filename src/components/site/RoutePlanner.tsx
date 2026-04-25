const address = "Sportplatzstraße 12, 4190 Bad Leonfelden, Österreich";
const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export function RoutePlanner() {
  return (
    <section id="anfahrt" className="py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Anfahrt
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-xl">
              So findest du uns.
            </h2>
          </div>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors"
          >
            In Google Maps öffnen
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5L10 14M5 5h4v2H7v10h10v-2h2v4H5z" />
            </svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-border bg-card aspect-[16/10]">
            <iframe
              src={embedSrc}
              title="Karte zur PSV Pétanque-Anlage"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>

          <div className="space-y-4">
            <DirectionCard
              icon="car"
              title="Mit dem Auto"
              text="Kostenlose Parkplätze direkt vor der Anlage. 30 Min. von Linz über die B126."
            />
            <DirectionCard
              icon="bus"
              title="Mit dem Bus"
              text="Linie 230 ab Linz Hbf, Haltestelle Bad Leonfelden Marktplatz. 5 Min. zu Fuß."
            />
            <DirectionCard
              icon="bike"
              title="Mit dem Rad"
              text="Anschluss an den Mühlviertler Radweg R5, beschilderte Zufahrt."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectionCard({ icon, title, text }: { icon: "car" | "bus" | "bike"; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground mb-4">
        <Icon name={icon} />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Icon({ name }: { name: "car" | "bus" | "bike" }) {
  const common = { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "car") return <svg {...common}><path d="M5 17h14M5 17a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM3 13l2-6h14l2 6M3 13v4h18v-4M3 13h18" /></svg>;
  if (name === "bus") return <svg {...common}><path d="M4 17h16M4 17V5a2 2 0 012-2h12a2 2 0 012 2v12M4 17v2M20 17v2M8 21v-2M16 21v-2M4 9h16M8 13h.01M16 13h.01" /></svg>;
  return <svg {...common}><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M6 17l4-9h4l3 6M14 8l-2-4h-3" /></svg>;
}
