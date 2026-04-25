const trainings = [
  {
    day: "Donnerstag",
    time: "ab 15:00",
    note: "Wochenmitte-Training. Offen für alle Mitglieder und Gäste.",
  },
  {
    day: "Samstag",
    time: "ab 09:00",
    note: "Morgentraining am Wochenende. Anschließend gemütliches Beisammensein.",
  },
];

export function NextEvents() {
  return (
    <section id="training" className="py-20 sm:py-28 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Trainingszeiten
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Wann wir uns treffen.
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg">
              Schau einfach vorbei — keine Anmeldung nötig. Boules zum
              Ausleihen sind vor Ort.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {trainings.map((t) => (
            <article
              key={t.day}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Wöchentlich
                </div>
                <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {t.day}
                  </h3>
                  <span className="rounded-full bg-accent/15 text-accent px-3 py-1 text-sm font-medium">
                    {t.time}
                  </span>
                </div>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Bei Schlechtwetter entfällt das Training. Aktuelle Infos auf unserer{" "}
          <a
            href="https://www.facebook.com/PetanqueSportVereinBadLeonfelden/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Facebook-Seite
          </a>
          .
        </p>
      </div>
    </section>
  );
}
