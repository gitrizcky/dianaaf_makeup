import type { Metadata } from "next";

import { faqItems, services, siteConfig } from "@/lib/data";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const heroImageUrl = `${siteUrl}${siteConfig.ogImage}`;
const bookingFormUrl = `${siteUrl}/#booking-form`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DianaAF Makeup | Makeup Artist in Serang & Cilegon, Banten",
  description:
    "DianaAF Makeup adalah jasa Makeup Artist profesional di Serang dan Cilegon, Banten untuk wedding, engagement, graduation, bridesmaid, dan party makeup.",
  keywords: [
    "DianaAF Makeup",
    "Makeup Artist in Serang",
    "Wedding Makeup Cilegon",
    "Jasa MUA Banten",
    "MUA Serang",
    "Makeup pengantin Banten",
    "Makeup graduation Serang",
    "Makeup bridesmaid Cilegon",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DianaAF Makeup | Makeup Artist in Serang & Cilegon, Banten",
    description:
      "Professional makeup artist untuk wedding, engagement, graduation, bridesmaid, dan party makeup di Serang, Cilegon, dan Banten.",
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "DianaAF Makeup professional makeup artist in Serang and Cilegon Banten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DianaAF Makeup | Makeup Artist in Serang & Cilegon",
    description:
      "Elegant makeup service for weddings, engagements, graduations, bridesmaids, and events across Banten.",
    images: [heroImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description:
      "Professional makeup service based around Serang and Cilegon, Banten for wedding, engagement, graduation, bridesmaid, and party makeup.",
    url: siteUrl,
    image: [heroImageUrl],
    telephone: `+${siteConfig.whatsappNumber}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Serang / Cilegon",
      addressRegion: "Banten",
      addressCountry: "ID",
      description: siteConfig.addressNote,
    },
    areaServed: [
      { "@type": "City", name: "Serang" },
      { "@type": "City", name: "Cilegon" },
      { "@type": "AdministrativeArea", name: "Banten" },
    ],
    sameAs: [siteConfig.instagramUrl],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: "Serang, Cilegon, Banten",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DianaAF Makeup Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.bestFor,
        },
      })),
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Complete booking form for WhatsApp",
      target: bookingFormUrl,
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
