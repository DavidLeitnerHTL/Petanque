import { useState } from "react";

type Review = { id: string; name: string; rating: number; text: string; date: string };

const initial: Review[] = [
  { id: "1", name: "Maria S.", rating: 5, date: "vor 2 Wochen", text: "Wunderschöne Anlage, super gepflegt und die Mitglieder sind sehr offen für Neulinge. Wir wurden sofort eingeladen, eine Runde mitzuspielen." },
  { id: "2", name: "Thomas K.", rating: 5, date: "vor 1 Monat", text: "Acht Bahnen, alle in Top-Zustand. Beleuchtung am Abend ist ein großes Plus. Sehr zu empfehlen für jedes Niveau." },
  { id: "3", name: "Anna B.", rating: 4, date: "vor 2 Monaten", text: "Tolles Vereinsleben. Beim Sommerturnier war richtig was los. Das Vereinsheim ist gemütlich, die Preise fair." },
];

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initial);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setReviews([
      { id: crypto.randomUUID(), name: name.trim(), rating, text: text.trim(), date: "gerade eben" },
      ...reviews,
    ]);
    setName(""); setText(""); setRating(5); setOpen(false);
  };

  return (
    <section id="stimmen" className="py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Stimmen
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Was unsere Gäste sagen.
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <Stars value={Number(avg)} />
              <span className="text-sm font-medium">{avg}</span>
              <span className="text-sm text-muted-foreground">· {reviews.length} Bewertungen</span>
            </div>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            {open ? "Schließen" : "Bewertung schreiben"}
          </button>
        </div>

        {open && (
          <form onSubmit={submit} className="mb-12 rounded-lg border border-border bg-card p-6 grid gap-4 max-w-2xl">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dein Name"
              className="rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Bewertung</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((n) => (
                  <button type="button" key={n} onClick={() => setRating(n)} aria-label={`${n} Sterne`}>
                    <Star filled={n <= rating} />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Wie war dein Besuch?"
              rows={4}
              className="rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              required
            />
            <button
              type="submit"
              className="self-start inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors"
            >
              Absenden
            </button>
          </form>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <article key={r.id} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <Stars value={r.rating} />
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-semibold">
                  {r.name.charAt(0)}
                </div>
                <span className="text-sm font-medium">{r.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((n) => <Star key={n} filled={n <= Math.round(value)} />)}
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg className={`h-4 w-4 ${filled ? "text-primary fill-current" : "text-border fill-current"}`} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
