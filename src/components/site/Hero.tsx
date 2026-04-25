import heroImg from "@/assets/hero-petanque.jpg";

const FACEBOOK_URL = "https://www.facebook.com/PetanqueSportVereinBadLeonfelden/";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Pétanque-Anlage des PSV Bad Leonfelden"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent mb-6">
            <span className="h-px w-8 bg-accent" />
            Pétanque Sportverein
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.05]">
            Boule spielen
            <br />
            in <em className="not-italic text-primary">Bad Leonfelden.</em>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl text-balance">
            Ein offener Verein für alle Generationen. Gepflegte Bahnen, ein
            Glas Wein im Schatten und gute Gesellschaft — komm einfach vorbei.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#training"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors shadow-sm"
            >
              Trainingszeiten
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 2.9h-2.3v7A10 10 0 0022 12z" />
              </svg>
              Auf Facebook folgen
            </a>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-primary">8</div>
              <div className="text-xs text-muted-foreground mt-1">Bahnen</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-primary">2020</div>
              <div className="text-xs text-muted-foreground mt-1">Gegründet</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-primary">Alle</div>
              <div className="text-xs text-muted-foreground mt-1">Altersgruppen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
