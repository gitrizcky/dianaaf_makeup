"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

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

  const whatsAppMessage = useMemo(() => {
    return [
      "Halo DianaAF Makeup, saya ingin booking jadwal makeup.",
      `Nama: ${form.name || "-"}`,
      `Tanggal acara: ${form.eventDate || "-"}`,
      `Jenis acara: ${form.eventType || "-"}`,
      `Lokasi: ${form.location || "-"}`,
      `Catatan: ${form.message || "-"}`,
    ].join("\n");
  }, [form]);

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
          <p className="eyebrow text-champagne">Contact & Booking</p>
          <h2 className="display-title mt-3 text-4xl text-ivory sm:text-5xl">
            Share your event details and book faster.
          </h2>
          <p className="mt-5 leading-8 text-ivory/78">
            For fastest response, please include your event date, location, and
            makeup type.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-ivory px-6 py-3.5 text-center text-sm font-bold text-cocoa transition hover:bg-champagne"
              href={bookingFormHash}
            >
              Book via WhatsApp
            </a>
            <a
              className="rounded-full border border-ivory/35 px-6 py-3.5 text-center text-sm font-bold text-ivory transition hover:bg-ivory hover:text-cocoa"
              href={siteConfig.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram Inquiry
            </a>
          </div>
        </div>

        <form
          aria-label="WhatsApp booking form"
          className="scroll-mt-28 rounded-lg border border-ivory/15 bg-ivory p-5 text-cocoa shadow-[0_18px_55px_rgba(0,0,0,0.18)] sm:p-6 lg:scroll-mt-32"
          id={bookingFormHash.slice(1)}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold" htmlFor="name">
              Name
              <input
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="name"
                name="name"
                onChange={updateField}
                placeholder="Your name"
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
              Event date
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
              Event type
              <select
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="eventType"
                name="eventType"
                onChange={updateField}
                required
                value={form.eventType}
              >
                <option disabled value="">
                  Select event type
                </option>
                <option value="Wedding Makeup">Wedding Makeup</option>
                <option value="Engagement Makeup">Engagement Makeup</option>
                <option value="Graduation Makeup">Graduation Makeup</option>
                <option value="Bridesmaid Makeup">Bridesmaid Makeup</option>
                <option value="Party / Event Makeup">Party / Event Makeup</option>
                <option value="Makeup Trial">Makeup Trial</option>
                <option value="Home Service Makeup">Home Service Makeup</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold" htmlFor="location">
              Location
              <input
                className="min-h-12 rounded-md border border-cocoa/15 bg-white px-4 text-base font-normal text-ink"
                id="location"
                name="location"
                onChange={updateField}
                placeholder="Serang, Cilegon, or venue"
                required
                type="text"
                value={form.location}
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-bold" htmlFor="message">
            Message
            <textarea
              className="min-h-32 rounded-md border border-cocoa/15 bg-white px-4 py-3 text-base font-normal text-ink"
              id="message"
              name="message"
              onChange={updateField}
              placeholder="Tell us your makeup style, schedule, and number of people."
              required
              value={form.message}
            />
          </label>

          <button
            className="mt-5 w-full rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-ivory transition hover:bg-rose"
            type="submit"
          >
            Send Booking Details via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
