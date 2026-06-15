export const siteConfig = {
  name: "DianaAF Makeup",
  tagline: "Professional Makeup Artist in Serang & Cilegon",
  description:
    "Flawless, elegant makeup for weddings, engagements, graduations, bridesmaids, and special events across Banten.",
  // TODO: Replace with the real active WhatsApp number in international format, for example 62812xxxxxxx.
  whatsappNumber: "6281291461846",
  // TODO: Replace with the official DianaAF Makeup Instagram URL.
  instagramUrl: "https://www.instagram.com/dianaaf.makeup",
  // TODO: Replace with the production domain after deployment.
  siteUrl: "https://www.dianaafmakeup.com",
  // TODO: Replace with a verified address only if the business wants to publish it.
  addressNote: "Service-area makeup business based around Serang/Cilegon, Banten.",
  heroImage: "/images/hero-dianaaf-makeup.webp",
  ogImage: "/images/hero-dianaaf-makeup.webp",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const trustIndicators = [
  "Wedding Makeup",
  "Engagement",
  "Graduation",
  "Party Makeup",
  "Serving Serang, Cilegon & Banten",
] as const;

export type PortfolioCategory =
  | "Wedding"
  | "Engagement"
  | "Graduation"
  | "Bridesmaid"
  | "Party";

export const portfolioCategories = [
  "Wedding",
  "Engagement",
  "Graduation",
  "Bridesmaid",
  "Party",
] as const satisfies readonly PortfolioCategory[];

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  image: string;
  alt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "wedding-serang-natural-glam",
    title: "Natural Glam Bridal Look",
    category: "Wedding",
    location: "Serang, Banten",
    image: "/images/portfolio/wedding-makeup-serang.webp",
    alt: "Wedding makeup Serang by DianaAF Makeup with elegant natural glam bridal look",
  },
  {
    id: "engagement-cilegon-soft-rose",
    title: "Soft Rose Engagement Look",
    category: "Engagement",
    location: "Cilegon, Banten",
    image: "/images/portfolio/engagement-makeup-cilegon.webp",
    alt: "Engagement makeup Cilegon with soft rose tones by DianaAF Makeup",
  },
  {
    id: "graduation-serang-fresh",
    title: "Fresh Graduation Makeup",
    category: "Graduation",
    location: "Serang, Banten",
    image: "/images/portfolio/graduation-makeup-serang.webp",
    alt: "Makeup graduation Serang with fresh natural glam finish by DianaAF Makeup",
  },
  {
    id: "bridesmaid-cilegon-elegant",
    title: "Elegant Bridesmaid Makeup",
    category: "Bridesmaid",
    location: "Cilegon, Banten",
    image: "/images/portfolio/bridesmaid-makeup-cilegon.webp",
    alt: "Makeup bridesmaid Cilegon with elegant warm event styling by DianaAF Makeup",
  },
  {
    id: "party-banten-polished",
    title: "Polished Party Makeup",
    category: "Party",
    location: "Banten",
    image: "/images/portfolio/party-makeup-banten.webp",
    alt: "Party makeup Banten with polished event look by DianaAF Makeup",
  },
  {
    id: "wedding-trial-banten",
    title: "Wedding Trial Session",
    category: "Wedding",
    location: "Banten",
    image: "/images/portfolio/makeup-trial-banten.webp",
    alt: "Makeup trial Banten for wedding preparation with DianaAF Makeup",
  },
];

export type Service = {
  title: string;
  description: string;
  bestFor: string;
  message: string;
};

export const services: Service[] = [
  {
    title: "Wedding Makeup",
    description:
      "Elegant, long-lasting bridal makeup with a refined natural glam finish for akad, resepsi, or intimate celebrations.",
    bestFor: "Brides who want polished makeup that still feels like themselves.",
    message: "Halo DianaAF Makeup, saya ingin tanya paket wedding makeup.",
  },
  {
    title: "Engagement Makeup",
    description:
      "Soft, romantic makeup for engagement, lamaran, sangjit, and family ceremonies with camera-ready detail.",
    bestFor: "Engagement events in Serang, Cilegon, and nearby Banten areas.",
    message: "Halo DianaAF Makeup, saya ingin tanya makeup engagement.",
  },
  {
    title: "Graduation Makeup",
    description:
      "Fresh, lightweight glam that looks polished for photos and comfortable through graduation day.",
    bestFor: "Wisuda, school events, and formal graduation portraits.",
    message: "Halo DianaAF Makeup, saya ingin booking makeup graduation.",
  },
  {
    title: "Bridesmaid Makeup",
    description:
      "Coordinated makeup for bridesmaids, family members, and close friends with a cohesive event look.",
    bestFor: "Wedding parties that need consistent, punctual makeup service.",
    message: "Halo DianaAF Makeup, saya ingin tanya makeup bridesmaid.",
  },
  {
    title: "Party / Event Makeup",
    description:
      "Polished event makeup for birthdays, photoshoots, office events, and special invitations.",
    bestFor: "Clients who want a refined look without feeling overdone.",
    message: "Halo DianaAF Makeup, saya ingin tanya party/event makeup.",
  },
  {
    title: "Makeup Trial",
    description:
      "A pre-event session to align on complexion, eye look, lip color, and overall bridal direction.",
    bestFor: "Brides who want confidence before the wedding day.",
    message: "Halo DianaAF Makeup, saya ingin tanya jadwal makeup trial.",
  },
  {
    title: "Home Service Makeup",
    description:
      "On-location makeup service for homes, hotels, venues, and preparation spaces when schedule allows.",
    bestFor: "Clients in Serang, Cilegon, and selected Banten service areas.",
    message: "Halo DianaAF Makeup, apakah tersedia makeup panggilan?",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "Apa saja yang termasuk dalam paket wedding makeup?",
    answer:
      "Paket wedding makeup biasanya mencakup makeup pengantin Banten dengan complexion tahan lama, eye look yang disesuaikan, pemasangan bulu mata, touch-up dasar, dan konsultasi look. Detail paket bisa disesuaikan dengan kebutuhan akad, resepsi, atau intimate wedding.",
  },
  {
    question: "Apakah DianaAF Makeup melayani makeup panggilan ke rumah?",
    answer:
      "Ya, DianaAF Makeup dapat melayani makeup panggilan ke rumah, hotel, atau venue sesuai ketersediaan jadwal. Layanan ini cocok untuk klien yang mencari MUA Serang atau Jasa MUA Banten yang praktis untuk acara keluarga, wedding, dan event.",
  },
  {
    question: "Area mana saja yang dilayani DianaAF Makeup?",
    answer:
      "DianaAF Makeup melayani Serang, Cilegon, dan area Banten lainnya berdasarkan jadwal dan jarak lokasi. Untuk Wedding Makeup Cilegon atau Makeup Artist in Serang, kirim tanggal acara dan lokasi agar estimasi layanan bisa dikonfirmasi.",
  },
  {
    question: "Berapa lama proses makeup biasanya?",
    answer:
      "Proses makeup biasanya memerlukan sekitar 60 sampai 120 menit tergantung jenis acara, detail look, kondisi kulit, dan kebutuhan hairdo. Untuk wedding atau makeup pengantin Banten, alokasi waktu biasanya dibuat lebih longgar agar hasil tetap rapi dan nyaman.",
  },
  {
    question: "Apakah bisa booking untuk makeup graduation atau bridesmaid?",
    answer:
      "Bisa. DianaAF Makeup menerima booking makeup graduation Serang, makeup bridesmaid Cilegon, bridesmaid family, party makeup, dan special event makeup. Sebaiknya booking lebih awal terutama untuk akhir pekan atau musim wisuda.",
  },
  {
    question: "Bagaimana cara booking jadwal makeup?",
    answer:
      "Booking paling cepat melalui WhatsApp. Sertakan nama, tanggal acara, jenis makeup, lokasi, dan jumlah orang yang akan dirias agar DianaAF Makeup bisa mengecek jadwal serta memberi informasi paket yang sesuai.",
  },
  {
    question: "Apakah tersedia makeup trial sebelum wedding?",
    answer:
      "Tersedia makeup trial berdasarkan jadwal. Trial membantu calon pengantin menentukan warna complexion, detail mata, lip color, dan gaya natural glam sebelum hari H, terutama untuk klien yang ingin hasil wedding makeup lebih personal.",
  },
];
