import Image from "next/image";

import { siteConfig, trustIndicators } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";

const bookingLink = buildWhatsAppLink(
  siteConfig.whatsappNumber,
  "Halo DianaAF Makeup, saya ingin booking jadwal makeup.",
);

export function Hero() {
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
            Serving Serang, Cilegon & Banten
          </p>
          <h1 className="display-title max-w-4xl text-5xl text-balance text-ivory sm:text-6xl lg:text-7xl">
            Professional Makeup Artist in Serang & Cilegon
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/88 sm:text-lg">
            Flawless, elegant makeup for weddings, engagements, graduations,
            bridesmaids, and special events across Banten.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-ivory px-6 py-3.5 text-center text-sm font-bold text-cocoa transition hover:bg-champagne"
              href={bookingLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book via WhatsApp
            </a>
            <a
              className="rounded-full border border-ivory/55 px-6 py-3.5 text-center text-sm font-bold text-ivory transition hover:bg-ivory hover:text-cocoa"
              href="#portfolio"
            >
              View Portfolio
            </a>
          </div>

          <ul
            aria-label="Makeup services and service areas"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {trustIndicators.map((indicator) => (
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
