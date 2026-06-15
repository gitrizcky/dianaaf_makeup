"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 sm:py-24" id="faq">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="display-title mt-3 text-4xl text-cocoa sm:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 leading-7 text-cocoa/72">
            {t.faq.description}
          </p>
        </div>

        <div className="grid gap-3">
          {t.faq.items.map((item) => (
            <details
              className="group rounded-lg border border-cocoa/10 bg-ivory p-5"
              key={item.question}
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-cocoa marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-grid size-7 shrink-0 place-items-center rounded-full border border-cocoa/15 text-sm transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-cocoa/72">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
