"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";

const bookingFormHref = "#booking-form";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-cocoa/10 bg-ivory py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <a className="font-serif text-2xl font-medium text-cocoa" href="#home">
            DianaAF Makeup
          </a>
          <p className="mt-3 max-w-xl leading-7 text-cocoa/70">
            {t.footer.description}
          </p>
          <p className="mt-4 text-sm text-cocoa/60">
            © {new Date().getFullYear()} DianaAF Makeup. {t.footer.rights}
          </p>
        </div>

        <div className="grid gap-4 text-sm font-semibold text-cocoa/75 sm:grid-cols-2 md:text-right">
          <nav aria-label="Footer navigation" className="grid gap-2">
            {t.navLinks.map((link) => (
              <a
                className="transition hover:text-rose"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="grid content-start gap-2">
            <a
              className="transition hover:text-rose"
              href={bookingFormHref}
            >
              {t.footer.whatsappBooking}
            </a>
            <a
              className="transition hover:text-rose"
              href={siteConfig.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.footer.instagram}
            </a>
            <span>{siteConfig.addressNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
