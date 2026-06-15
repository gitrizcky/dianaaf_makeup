"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import {
  portfolioCategories,
  type PortfolioCategory,
  portfolioItems,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type GalleryFilter = "All" | PortfolioCategory;

const filters = ["All", ...portfolioCategories] as const satisfies readonly GalleryFilter[];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");
  const { t } = useLanguage();

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-ivory py-20 sm:py-24" id="portfolio">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2 className="display-title mt-3 text-4xl text-cocoa sm:text-5xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 leading-7 text-cocoa/72">
            {t.portfolio.description}
          </p>
        </div>

        <div
          aria-label={t.portfolio.categoriesLabel}
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="toolbar"
        >
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition",
                activeFilter === filter
                  ? "border-cocoa bg-cocoa text-ivory"
                  : "border-cocoa/15 bg-white/70 text-cocoa hover:border-rose hover:text-rose",
              )}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {t.portfolio.filterLabels[filter]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => {
            const localizedItem = t.portfolio.items[item.id] ?? item;

            return (
            <article
              className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-[0_18px_45px_rgba(77,52,43,0.08)]"
              key={item.id}
            >
              <figure>
                <div className="relative aspect-square overflow-hidden bg-nude/30">
                  <Image
                    alt={localizedItem.alt}
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={item.image}
                  />
                </div>
                <figcaption className="p-5">
                  <p className="text-xs font-bold uppercase text-sage">
                    {t.portfolio.filterLabels[item.category]}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-cocoa">
                    {localizedItem.title}
                  </h3>
                  <p className="mt-2 text-sm text-cocoa/68">{item.location}</p>
                </figcaption>
              </figure>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
