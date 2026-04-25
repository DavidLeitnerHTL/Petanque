import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutClub } from "@/components/site/AboutClub";
import { ClubGallery } from "@/components/site/ClubGallery";
import { NextEvents } from "@/components/site/NextEvents";
import { Info } from "@/components/site/Info";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PSV Bad Leonfelden — Pétanque Sportverein" },
      {
        name: "description",
        content:
          "Pétanque Sportverein Bad Leonfelden: Offener Verein im Mühlviertel seit 2020. Training Donnerstag und Samstag — komm vorbei.",
      },
      { property: "og:title", content: "PSV Bad Leonfelden — Pétanque Sportverein" },
      {
        property: "og:description",
        content: "Boule spielen im Mühlviertel. Inklusion, Gemeinschaft und Freude für alle Generationen.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutClub />
      <ClubGallery />
      <NextEvents />
      <Info />
      <Footer />
    </main>
  );
}
