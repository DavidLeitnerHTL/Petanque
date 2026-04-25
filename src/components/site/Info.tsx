import boulesImg from "@/assets/boules-detail.jpg";

const hours = [
  { day: "Montag", time: "Geschlossen" },
  { day: "Dienstag", time: "15:00 – 21:00" },
  { day: "Mittwoch", time: "15:00 – 21:00" },
  { day: "Donnerstag", time: "15:00 – 21:00" },
  { day: "Freitag", time: "15:00 – 22:00" },
  { day: "Samstag", time: "13:00 – 22:00" },
  { day: "Sonntag", time: "13:00 – 20:00" },
];

export function Info() {
  return (
    <section id="info" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Auf einen Blick
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Komm vorbei, spiel eine Runde.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Unsere Anlage steht allen offen. Boules zum Ausleihen sind vor Ort,
              eine kurze Einführung gibt es gratis dazu.
            </p>

            <div className="mt-12 space-y-6">
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

          <div className="lg:pl-12">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
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
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Öffnungszeiten</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Saison aktiv
                  </span>
                </div>
                <ul className="space-y-3 text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className={h.time === "Geschlossen" ? "text-muted-foreground" : "font-medium"}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
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
    <div className="flex gap-6 border-b border-border pb-6 last:border-0">
      <div className="w-20 text-xs uppercase tracking-wider text-muted-foreground pt-1">
        {label}
      </div>
      <div>
        <div className="font-medium">{primary}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{secondary}</div>
      </div>
    </div>
  );
}
