import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Info } from "@/components/site/Info";
import { RoutePlanner } from "@/components/site/RoutePlanner";
import { Nearby } from "@/components/site/Nearby";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PSV Bad Leonfelden — Pétanque Sportverein" },
      { name: "description", content: "Pétanque-Verein in Bad Leonfelden: 8 Bahnen, offenes Vereinsheim, Anfahrt, Öffnungszeiten und Bewertungen." },
      { property: "og:title", content: "PSV Bad Leonfelden — Pétanque Sportverein" },
      { property: "og:description", content: "Boule spielen im Mühlviertel. Komm vorbei, spiel eine Runde." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Info />
      <RoutePlanner />
      <Nearby />
      <Reviews />
      <Footer />
    </main>
  );
}
