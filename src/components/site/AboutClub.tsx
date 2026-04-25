export function AboutClub() {
  const values = [
    {
      title: "Inklusion",
      text: "Bei uns spielt jeder mit. Egal ob jung oder alt, Anfänger oder Profi — Pétanque verbindet.",
    },
    {
      title: "Gemeinschaft",
      text: "Der Verein ist mehr als Sport. Gemeinsame Abende, Turniere und Feste machen den PSV aus.",
    },
    {
      title: "Freude",
      text: "Spaß steht im Vordergrund. Ein gutes Spiel, ein Lachen, ein Glas Wein in der Sonne.",
    },
  ];

  return (
    <section id="verein" className="py-20 sm:py-28 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Unser Verein
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Seit 2020 in Bad Leonfelden zuhause.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Der Pétanque Sportverein Bad Leonfelden wurde 2020 von einer
                Handvoll Boule-Begeisterten gegründet. Was als kleine Runde
                unter Freunden begann, ist heute ein lebendiger Verein mit
                Mitgliedern aus dem ganzen Mühlviertel.
              </p>
              <p>
                Unsere Philosophie ist einfach: <span className="text-foreground font-medium">Pétanque
                ist für alle da.</span> Wir glauben an einen Sport, der Generationen
                verbindet, der niemanden ausschließt und der vor allem eines
                bringt — gute Laune.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
