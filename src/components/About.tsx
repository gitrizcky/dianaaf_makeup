import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#f5ece4] py-20 sm:py-24" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <figure className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_55px_rgba(77,52,43,0.12)]">
          <div className="relative aspect-[4/5]">
            <Image
              alt="Professional makeup trial service in Banten with clean brushes and hygienic preparation"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/images/portfolio/makeup-trial-banten.webp"
            />
          </div>
          <figcaption className="sr-only">
            DianaAF Makeup prepares natural glam and bridal looks with clean
            tools and a calm client experience.
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">About DianaAF Makeup</p>
          <h2 className="display-title mt-3 text-4xl text-cocoa sm:text-5xl">
            Warm, detailed makeup service for calm event preparation.
          </h2>
          <div className="mt-6 space-y-5 leading-8 text-cocoa/75">
            <p>
              DianaAF Makeup is a professional makeup service based around
              Serang and Cilegon, Banten, created for clients who want an
              elegant look that feels polished, comfortable, and personal.
            </p>
            <p>
              The focus is natural glam, refined bridal makeup, and long-lasting
              complexion for weddings, engagements, graduations, bridesmaids,
              and meaningful events.
            </p>
            <p>
              Each session is handled with attention to comfort, hygiene,
              detail, and punctuality so the preparation time feels organized
              from the first brush to the final touch-up.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Hygienic tools", "On-time prep", "Photo-ready finish"].map(
              (item) => (
                <div
                  className="rounded-lg border border-cocoa/10 bg-white/70 p-4 text-sm font-bold text-cocoa"
                  key={item}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
