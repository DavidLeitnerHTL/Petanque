const places = [
  { name: "Kurhotel Bad Leonfelden", type: "Hotel & Therme", distance: "400 m", desc: "Wellness und Übernachtung in Gehweite — ideal für Vereinsturniere." },
  { name: "Gasthaus zur Post", type: "Restaurant", distance: "550 m", desc: "Bodenständige Mühlviertler Küche, perfekt nach dem Spiel." },
  { name: "Kräuterstadt Café", type: "Café", distance: "300 m", desc: "Hausgemachte Mehlspeisen und ein ruhiger Garten." },
  { name: "Sterngartl-Wanderweg", type: "Natur", distance: "1,2 km", desc: "Beliebter Rundweg mit Aussicht über das Mühlviertel." },
];

export function Nearby() {
  return (
    <section id="umgebung" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            In der Umgebung
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Mehr als nur Boule.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Unsere Anlage liegt mitten in Bad Leonfelden — einer Kurstadt mit
            Therme, Wanderwegen und herzlicher Gastronomie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {places.map((p) => (
            <article
              key={p.name}
              className="bg-background p-8 hover:bg-secondary/40 transition-colors group"
            >
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.type}
                </span>
                <span className="text-xs font-medium text-primary">{p.distance}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
