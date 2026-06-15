"use client";

import { useState } from "react";

import { navLinks, siteConfig } from "@/lib/data";
import { buildWhatsAppLink, cn } from "@/lib/utils";

const bookingLink = buildWhatsAppLink(
  siteConfig.whatsappNumber,
  "Halo DianaAF Makeup, saya ingin booking jadwal makeup.",
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-ivory/92 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex min-h-20 items-center justify-between gap-5 py-3"
      >
        <a
          aria-label="DianaAF Makeup home"
          className="font-serif text-2xl font-medium text-cocoa"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          DianaAF Makeup
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-cocoa/80 md:flex">
          {navLinks.map((link) => (
            <a
              className="transition hover:text-rose focus-visible:text-rose"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-ivory transition hover:bg-rose"
            href={bookingLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Book via WhatsApp
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="grid size-11 place-items-center rounded-full border border-cocoa/15 bg-white/65 text-cocoa md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 rounded-full bg-current transition",
                isOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 rounded-full bg-current transition",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 rounded-full bg-current transition",
                isOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden",
          isOpen ? "border-t border-cocoa/10" : "hidden",
        )}
        id="mobile-navigation"
      >
        <div className="section-shell grid gap-2 py-4">
          {navLinks.map((link) => (
            <a
              className="rounded-md px-2 py-3 text-base font-semibold text-cocoa transition hover:bg-white/70 hover:text-rose"
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-2 rounded-full bg-cocoa px-5 py-3 text-center text-sm font-bold text-ivory transition hover:bg-rose"
            href={bookingLink}
            onClick={() => setIsOpen(false)}
            rel="noopener noreferrer"
            target="_blank"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
