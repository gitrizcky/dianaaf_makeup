"use client";

import { useLanguage } from "@/components/LanguageProvider";

const bookingFormHref = "#booking-form";

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 sm:py-24" id="services">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="display-title mt-3 text-4xl text-cocoa sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="leading-7 text-cocoa/72">
            {t.services.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <article
              className="rounded-lg border border-cocoa/10 bg-ivory p-6 shadow-[0_16px_38px_rgba(77,52,43,0.06)]"
              key={service.title}
            >
              <h3 className="text-xl font-bold text-cocoa">{service.title}</h3>
              <p className="mt-3 leading-7 text-cocoa/72">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-sage">
                {t.services.bestFor}: {service.bestFor}
              </p>
              <a
                className="mt-6 inline-flex rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-ivory transition hover:bg-rose"
                href={bookingFormHref}
              >
                {t.common.askWhatsApp}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
