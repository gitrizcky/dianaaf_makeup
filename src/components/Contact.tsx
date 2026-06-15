"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";

type BookingForm = {
  name: string;
  eventDate: string;
  eventType: string;
  location: string;
  message: string;
};

const initialForm: BookingForm = {
  name: "",
  eventDate: "",
  eventType: "",
  location: "",
  message: "",
};

const bookingFormHash = "#booking-form";

export function Contact() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const whatsAppMessage = useMemo(() => {
    const selectedEventType =
      t.contact.eventTypes.find((eventType) => eventType.value === form.eventType)
        ?.label || form.eventType;

    return [
      t.contact.whatsappIntro,
      `${t.contact.whatsappFields.name}: ${form.name || "-"}`,
      `${t.contact.whatsappFields.eventDate}: ${form.eventDate || "-"}`,
      `${t.contact.whatsappFields.eventType}: ${selectedEventType || "-"}`,
      `${t.contact.whatsappFields.location}: ${form.location || "-"}`,
      `${t.contact.whatsappFields.message}: ${form.message || "-"}`,
    ].join("\n");
  }, [form, t]);

  const whatsAppLink = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    whatsAppMessage,
  );

  useEffect(() => {
    function focusBookingName(smooth = true) {
      formRef.current?.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
      });

      window.setTimeout(
        () => nameInputRef.current?.focus({ preventScroll: true }),
        smooth ? 420 : 0,
      );
    }

    function handleBookingAnchorClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest(
        `a[href="${bookingFormHash}"]`,
      ) as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      event.preventDefault();

      if (window.location.hash !== bookingFormHash) {
        window.history.pushState(null, "", bookingFormHash);
      }

      focusBookingName();
    }

    function handleHashChange() {
      if (window.location.hash === bookingFormHash) {
        focusBookingName(false);
      }
    }

    document.addEventListener("click", handleBookingAnchorClick);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash === bookingFormHash) {
      focusBookingName(false);
    }

    return () => {
      document.removeEventListener("click", handleBookingAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsAppLink, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-cocoa py-20 text-ivory sm:py-24" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow text-champagne">{t.contact.eyebrow}</p>
          <h2 className="display-title mt-3 text-4xl text-ivory sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 leading-8 text-ivory/78">
            {t.contact.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-ivory px-6 py-3.5 text-center text-sm font-bold text-cocoa transition hover:bg-champagne"
              href={bookingFormHash}
            >
              {t.common.bookWhatsApp}
            </a>
            <a
              className="rounded-full border border-ivory/35 px-6 py-3.5 text-center text-sm font-bold text-ivory transition hover:bg-ivory hover:text-cocoa"
              href={siteConfig.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.contact.instagram}
            </a>
          </div>
        </div>

        <form
          aria-label={t.contact.formAria}
          className="scroll-mt-28 rounded-lg border border-ivory/15 bg-ivory p-5 text-cocoa shadow-[0_18px_55px_rgba(0,0,0,0.18)] sm:p-6 lg:scroll-mt-32"
          id={bookingFormHash.slice(1)}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold" htmlFor="name">
              {t.contact.name}
              <input
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="name"
                name="name"
                onChange={updateField}
                placeholder={t.contact.namePlaceholder}
                ref={nameInputRef}
                required
                type="text"
                value={form.name}
              />
            </label>

            <label
              className="grid gap-2 text-sm font-bold"
              htmlFor="eventDate"
            >
              {t.contact.eventDate}
              <input
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="eventDate"
                name="eventDate"
                onChange={updateField}
                required
                type="date"
                value={form.eventDate}
              />
            </label>

            <label
              className="grid gap-2 text-sm font-bold"
              htmlFor="eventType"
            >
              {t.contact.eventType}
              <select
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="eventType"
                name="eventType"
                onChange={updateField}
                required
                value={form.eventType}
              >
                <option disabled value="">
                  {t.contact.eventTypePlaceholder}
                </option>
                {t.contact.eventTypes.map((eventType) => (
                  <option key={eventType.value} value={eventType.value}>
                    {eventType.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold" htmlFor="location">
              {t.contact.location}
              <input
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="location"
                name="location"
                onChange={updateField}
                placeholder={t.contact.locationPlaceholder}
                required
                type="text"
                value={form.location}
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-bold" htmlFor="message">
            {t.contact.message}
            <textarea
              className="min-h-32 rounded-md border border-cocoa/15 bg-white px-4 py-3 text-base font-normal text-ink"
              id="message"
              name="message"
              onChange={updateField}
              placeholder={t.contact.messagePlaceholder}
              required
              value={form.message}
            />
          </label>

          <button
            className="mt-5 w-full rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-ivory transition hover:bg-rose"
            type="submit"
          >
            {t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
