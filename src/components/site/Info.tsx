import boulesImg from "@/assets/boules-detail.jpg";

export function Info() {
  return (
    <section id="info" className="py-20 sm:py-28 md:py-32 bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Auf einen Blick
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Komm vorbei, spiel eine Runde.
            </h2>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
              Unsere Anlage steht allen offen. Boules zum Ausleihen sind vor
              Ort, eine kurze Einführung gibt es gratis dazu.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow
                label="Adresse"
                primary="Sportplatzstraße 12"
                secondary="4190 Bad Leonfelden, Österreich"
              />
              <ContactRow
                label="Telefon"
                primary="+43 7213 12345"
                secondary="Obmann Franz Huber"
              />
              <ContactRow
                label="E-Mail"
                primary="info@psv-leonfelden.at"
                secondary="Antwort innerhalb 48h"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={boulesImg}
                  alt="Pétanque-Boules auf feinem Kies"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold text-lg">Saison & Wetter</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Wir spielen von April bis Oktober im Freien. Bei
                  Schlechtwetter entfallen die Trainings — aktuelle Infos
                  findest du auf unserer Facebook-Seite.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Saison aktiv
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, primary, secondary }: { label: string; primary: string; secondary: string }) {
  return (
    <div className="flex gap-5 sm:gap-6 border-b border-border pb-5 last:border-0">
      <div className="w-20 shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground pt-1">
        {label}
      </div>
      <div>
        <div className="font-medium">{primary}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{secondary}</div>
      </div>
    </div>
  );
}
