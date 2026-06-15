"use client";

import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f5ece4] py-20 sm:py-24" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <figure className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_55px_rgba(77,52,43,0.12)]">
          <div className="relative aspect-[4/5]">
            <Image
              alt={t.about.imageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/images/portfolio/makeup-trial-banten.webp"
            />
          </div>
          <figcaption className="sr-only">
            {t.about.imageCaption}
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="display-title mt-3 text-4xl text-cocoa sm:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-5 leading-8 text-cocoa/75">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {t.about.cards.map((item) => (
              <div
                className="rounded-lg border border-cocoa/10 bg-white/70 p-4 text-sm font-bold text-cocoa"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
