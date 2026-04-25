import heroImg from "@/assets/hero-petanque.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Pétanque-Anlage des PSV Bad Leonfelden im Abendlicht"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-6">
            <span className="h-px w-8 bg-primary" />
            Pétanque Sportverein
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
            Boule spielen
            <br />
            in <span className="text-primary">Bad Leonfelden.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            Der PSV ist der Treffpunkt für Pétanque im Mühlviertel. Acht gepflegte
            Bahnen, freundliche Mitglieder und ein offenes Vereinsheim — für
            Einsteiger und erfahrene Spieler.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#anfahrt"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors shadow-sm"
            >
              Route planen
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#info"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Mehr erfahren
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-3xl font-semibold">8</div>
              <div className="text-xs text-muted-foreground mt-1">Bahnen</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">2009</div>
              <div className="text-xs text-muted-foreground mt-1">Gegründet</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">60+</div>
              <div className="text-xs text-muted-foreground mt-1">Mitglieder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
