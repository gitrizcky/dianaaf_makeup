"use client";

import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";

const bookingFormHref = "#booking-form";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative isolate overflow-hidden bg-ink text-ivory"
      id="home"
    >
      <Image
        alt="Professional makeup artist in Serang and Cilegon creating elegant natural glam look"
        className="object-cover object-[64%_center]"
        fill
        priority
        quality={82}
        sizes="100vw"
        src={siteConfig.heroImage}
      />
      <div className="absolute inset-0 bg-ink/52" />

      <div className="section-shell relative z-10 flex min-h-[600px] items-end pb-16 pt-32 sm:min-h-[640px] lg:min-h-[680px] lg:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 text-champagne">
            {t.hero.eyebrow}
          </p>
          <h1 className="display-title max-w-4xl text-5xl text-balance text-ivory sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/88 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-ivory px-6 py-3.5 text-center text-sm font-bold text-cocoa transition hover:bg-champagne"
              href={bookingFormHref}
            >
              {t.common.bookWhatsApp}
            </a>
            <a
              className="rounded-full border border-ivory/55 px-6 py-3.5 text-center text-sm font-bold text-ivory transition hover:bg-ivory hover:text-cocoa"
              href="#portfolio"
            >
              {t.common.viewPortfolio}
            </a>
          </div>

          <ul
            aria-label="Makeup services and service areas"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {t.hero.trustIndicators.map((indicator) => (
              <li
                className="rounded-full border border-ivory/22 bg-ivory/10 px-3.5 py-2 text-xs font-semibold text-ivory/92 backdrop-blur"
                key={indicator}
              >
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
