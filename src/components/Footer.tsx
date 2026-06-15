import { navLinks, siteConfig } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";

const bookingLink = buildWhatsAppLink(
  siteConfig.whatsappNumber,
  "Halo DianaAF Makeup, saya ingin tanya jadwal makeup.",
);

export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-ivory py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <a className="font-serif text-2xl font-medium text-cocoa" href="#home">
            DianaAF Makeup
          </a>
          <p className="mt-3 max-w-xl leading-7 text-cocoa/70">
            Professional makeup artist for weddings, engagements, graduations,
            bridesmaids, and events across Serang, Cilegon, and Banten.
          </p>
          <p className="mt-4 text-sm text-cocoa/60">
            © {new Date().getFullYear()} DianaAF Makeup. All rights reserved.
          </p>
        </div>

        <div className="grid gap-4 text-sm font-semibold text-cocoa/75 sm:grid-cols-2 md:text-right">
          <nav aria-label="Footer navigation" className="grid gap-2">
            {navLinks.map((link) => (
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
              href={bookingLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp Booking
            </a>
            <a
              className="transition hover:text-rose"
              href={siteConfig.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <span>{siteConfig.addressNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
