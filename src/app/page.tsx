import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Services } from "@/components/Services";
import { getBusinessJsonLd, getFaqJsonLd } from "@/lib/seo";
import { safeJsonLd } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <PortfolioGallery />
        <Services />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(getBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(getFaqJsonLd()) }}
      />
    </>
  );
}
