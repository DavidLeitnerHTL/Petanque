import clubHutImg from "@/assets/club-hut.jpg";
import courtFenceImg from "@/assets/court-fence.jpg";
import courtShadowsImg from "@/assets/court-shadows.jpg";
import boulesTopImg from "@/assets/gallery-boules-top.jpg";
import boulesDetailImg from "@/assets/boules-detail.jpg";

export function ClubGallery() {
  return (
    <section id="galerie" className="py-20 sm:py-28 md:py-32 bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Vereinsleben
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Bilder aus dem Vereinsalltag.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Vom Sonntagstraining bis zum Sommerfest — so sieht es bei uns aus.
          </p>
        </div>

        {/* CSS columns masonry — works perfectly on mobile */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          <GalleryItem
            src={clubHutImg}
            alt="Vereinshütte des PSV Bad Leonfelden"
            ratio="aspect-[4/5]"
            featured
          />
          <GalleryItem src={courtFenceImg} alt="Pétanque-Anlage des PSV Bad Leonfelden" ratio="aspect-[4/3]" />
          <GalleryItem src={courtShadowsImg} alt="Pétanque-Bahnen mit langen Schatten" ratio="aspect-square" />
          <GalleryItem src={boulesTopImg} alt="Pétanque-Kugeln rund um das Schweinchen" ratio="aspect-[4/5]" />
          <GalleryItem src={boulesDetailImg} alt="Pétanque-Kugeln auf feinem Kies" ratio="aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  alt,
  ratio,
  featured = false,
}: {
  src: string;
  alt: string;
  ratio: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${ratio}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {featured && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
          <span className="text-xs uppercase tracking-[0.22em] text-white/80">
            Unser Treffpunkt
          </span>
          <p className="mt-1 font-semibold text-lg">Schatten, Wein, Boule.</p>
        </figcaption>
      )}
    </figure>
  );
}
