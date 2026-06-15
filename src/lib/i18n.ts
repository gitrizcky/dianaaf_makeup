export type Language = "id" | "en";

type Translation = {
  languageName: string;
  switchTo: string;
  navLinks: Array<{ href: string; label: string }>;
  common: {
    bookWhatsApp: string;
    viewPortfolio: string;
    askWhatsApp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    trustIndicators: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    categoriesLabel: string;
    filterLabels: Record<string, string>;
    items: Record<string, { title: string; alt: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    bestFor: string;
    items: Array<{
      title: string;
      description: string;
      bestFor: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards: string[];
    imageAlt: string;
    imageCaption: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    instagram: string;
    formAria: string;
    name: string;
    namePlaceholder: string;
    eventDate: string;
    eventType: string;
    eventTypePlaceholder: string;
    eventTypes: Array<{ value: string; label: string }>;
    location: string;
    locationPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    whatsappIntro: string;
    whatsappFields: {
      name: string;
      eventDate: string;
      eventType: string;
      location: string;
      message: string;
    };
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    description: string;
    rights: string;
    whatsappBooking: string;
    instagram: string;
  };
};

export const defaultLanguage: Language = "id";

export const translations: Record<Language, Translation> = {
  id: {
    languageName: "ID",
    switchTo: "EN",
    navLinks: [
      { href: "#home", label: "Beranda" },
      { href: "#portfolio", label: "Portofolio" },
      { href: "#services", label: "Layanan" },
      { href: "#about", label: "Tentang" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Kontak" },
    ],
    common: {
      bookWhatsApp: "Booking via WhatsApp",
      viewPortfolio: "Lihat Portofolio",
      askWhatsApp: "Tanya via WhatsApp",
    },
    hero: {
      eyebrow: "Melayani Serang, Cilegon & Banten",
      title: "Makeup Artist Profesional di Serang & Cilegon",
      description:
        "Makeup flawless dan elegan untuk wedding, engagement, graduation, bridesmaid, dan acara spesial di seluruh Banten.",
      trustIndicators: [
        "Wedding Makeup",
        "Engagement",
        "Graduation",
        "Party Makeup",
        "Melayani Serang, Cilegon & Banten",
      ],
    },
    portfolio: {
      eyebrow: "Portofolio",
      title: "Look makeup untuk setiap momen penting.",
      description:
        "Lihat hasil makeup bridal, engagement, graduation, bridesmaid, dan event untuk klien di Serang, Cilegon, dan Banten.",
      categoriesLabel: "Kategori portofolio",
      filterLabels: {
        All: "Semua",
        Wedding: "Wedding",
        Engagement: "Engagement",
        Graduation: "Graduation",
        Bridesmaid: "Bridesmaid",
        Party: "Party",
      },
      items: {
        "wedding-serang-natural-glam": {
          title: "Natural Glam Bridal Look",
          alt: "Wedding makeup Serang oleh DianaAF Makeup dengan look pengantin natural glam elegan",
        },
        "engagement-cilegon-soft-rose": {
          title: "Soft Rose Engagement Look",
          alt: "Engagement makeup Cilegon dengan nuansa soft rose oleh DianaAF Makeup",
        },
        "graduation-serang-fresh": {
          title: "Fresh Graduation Makeup",
          alt: "Makeup graduation Serang dengan hasil fresh natural glam oleh DianaAF Makeup",
        },
        "bridesmaid-cilegon-elegant": {
          title: "Elegant Bridesmaid Makeup",
          alt: "Makeup bridesmaid Cilegon dengan gaya event elegan oleh DianaAF Makeup",
        },
        "party-banten-polished": {
          title: "Polished Party Makeup",
          alt: "Party makeup Banten dengan tampilan polished event oleh DianaAF Makeup",
        },
        "wedding-trial-banten": {
          title: "Sesi Makeup Trial",
          alt: "Makeup trial Banten untuk persiapan wedding bersama DianaAF Makeup",
        },
      },
    },
    services: {
      eyebrow: "Layanan",
      title: "Layanan makeup yang jelas dan sesuai kebutuhan acara.",
      description:
        "Setiap booking disiapkan mengikuti jadwal acara, lokasi, arah outfit, dan hasil akhir yang diinginkan: natural glam, elegant bridal, soft romantic, atau polished event makeup.",
      bestFor: "Cocok untuk",
      items: [
        {
          title: "Wedding Makeup",
          description:
            "Makeup pengantin elegan dan tahan lama dengan hasil natural glam untuk akad, resepsi, atau intimate wedding.",
          bestFor: "Calon pengantin yang ingin hasil polished namun tetap terasa personal.",
        },
        {
          title: "Engagement Makeup",
          description:
            "Makeup soft romantic untuk engagement, lamaran, sangjit, dan acara keluarga dengan detail camera-ready.",
          bestFor: "Acara engagement di Serang, Cilegon, dan sekitar Banten.",
        },
        {
          title: "Graduation Makeup",
          description:
            "Makeup fresh dan ringan yang terlihat rapi di foto serta nyaman dipakai sepanjang hari wisuda.",
          bestFor: "Wisuda, acara sekolah, dan foto formal graduation.",
        },
        {
          title: "Bridesmaid Makeup",
          description:
            "Makeup serasi untuk bridesmaid, keluarga, dan sahabat dengan hasil yang rapi dalam satu tema acara.",
          bestFor: "Wedding party yang membutuhkan layanan makeup tepat waktu dan konsisten.",
        },
        {
          title: "Party / Event Makeup",
          description:
            "Makeup event yang polished untuk ulang tahun, photoshoot, acara kantor, dan undangan spesial.",
          bestFor: "Klien yang ingin look refined tanpa terasa berlebihan.",
        },
        {
          title: "Makeup Trial",
          description:
            "Sesi sebelum acara untuk menyamakan warna complexion, eye look, lip color, dan arah bridal look.",
          bestFor: "Calon pengantin yang ingin lebih yakin sebelum hari H.",
        },
        {
          title: "Home Service Makeup",
          description:
            "Layanan makeup panggilan ke rumah, hotel, venue, atau tempat persiapan jika jadwal tersedia.",
          bestFor: "Klien di Serang, Cilegon, dan area layanan tertentu di Banten.",
        },
      ],
    },
    about: {
      eyebrow: "Tentang DianaAF Makeup",
      title: "Layanan makeup yang hangat, detail, dan nyaman untuk persiapan acara.",
      paragraphs: [
        "DianaAF Makeup adalah layanan makeup profesional berbasis di area Serang dan Cilegon, Banten, untuk klien yang menginginkan tampilan elegan, polished, nyaman, dan personal.",
        "Fokus layanan mencakup natural glam, refined bridal makeup, dan complexion tahan lama untuk wedding, engagement, graduation, bridesmaid, serta event penting lainnya.",
        "Setiap sesi mengutamakan kenyamanan klien, kebersihan alat, detail, dan ketepatan waktu agar proses persiapan terasa rapi sejak awal hingga touch-up terakhir.",
      ],
      cards: ["Alat higienis", "Persiapan tepat waktu", "Hasil photo-ready"],
      imageAlt:
        "Layanan makeup trial profesional di Banten dengan brush bersih dan persiapan higienis",
      imageCaption:
        "DianaAF Makeup menyiapkan look natural glam dan bridal dengan alat bersih serta pengalaman klien yang tenang.",
    },
    contact: {
      eyebrow: "Kontak & Booking",
      title: "Isi detail acara agar booking lebih cepat.",
      description:
        "Untuk respons tercepat, sertakan tanggal acara, lokasi, dan jenis makeup yang dibutuhkan.",
      instagram: "Tanya via Instagram",
      formAria: "Form booking WhatsApp",
      name: "Nama",
      namePlaceholder: "Nama kamu",
      eventDate: "Tanggal acara",
      eventType: "Jenis acara",
      eventTypePlaceholder: "Pilih jenis acara",
      eventTypes: [
        { value: "Wedding Makeup", label: "Wedding Makeup" },
        { value: "Engagement Makeup", label: "Engagement Makeup" },
        { value: "Graduation Makeup", label: "Graduation Makeup" },
        { value: "Bridesmaid Makeup", label: "Bridesmaid Makeup" },
        { value: "Party / Event Makeup", label: "Party / Event Makeup" },
        { value: "Makeup Trial", label: "Makeup Trial" },
        { value: "Home Service Makeup", label: "Home Service Makeup" },
      ],
      location: "Lokasi",
      locationPlaceholder: "Serang, Cilegon, atau venue",
      message: "Pesan",
      messagePlaceholder:
        "Ceritakan style makeup, jadwal, dan jumlah orang yang akan dirias.",
      submit: "Kirim Detail Booking via WhatsApp",
      whatsappIntro: "Halo DianaAF Makeup, saya ingin booking jadwal makeup.",
      whatsappFields: {
        name: "Nama",
        eventDate: "Tanggal acara",
        eventType: "Jenis acara",
        location: "Lokasi",
        message: "Catatan",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Pertanyaan yang sering diajukan.",
      description:
        "Informasi singkat untuk membantu calon klien memahami layanan MUA Serang, Wedding Makeup Cilegon, dan Jasa MUA Banten dari DianaAF Makeup.",
      items: [
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
            "Booking paling cepat melalui WhatsApp. Isi nama, tanggal acara, jenis makeup, lokasi, dan pesan terlebih dahulu agar DianaAF Makeup bisa mengecek jadwal serta memberi informasi paket yang sesuai.",
        },
        {
          question: "Apakah tersedia makeup trial sebelum wedding?",
          answer:
            "Tersedia makeup trial berdasarkan jadwal. Trial membantu calon pengantin menentukan warna complexion, detail mata, lip color, dan gaya natural glam sebelum hari H, terutama untuk klien yang ingin hasil wedding makeup lebih personal.",
        },
      ],
    },
    footer: {
      description:
        "Makeup artist profesional untuk wedding, engagement, graduation, bridesmaid, dan event di Serang, Cilegon, dan Banten.",
      rights: "Hak cipta dilindungi.",
      whatsappBooking: "Booking WhatsApp",
      instagram: "Instagram",
    },
  },
  en: {
    languageName: "EN",
    switchTo: "ID",
    navLinks: [
      { href: "#home", label: "Home" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    common: {
      bookWhatsApp: "Book via WhatsApp",
      viewPortfolio: "View Portfolio",
      askWhatsApp: "Ask on WhatsApp",
    },
    hero: {
      eyebrow: "Serving Serang, Cilegon & Banten",
      title: "Professional Makeup Artist in Serang & Cilegon",
      description:
        "Flawless, elegant makeup for weddings, engagements, graduations, bridesmaids, and special events across Banten.",
      trustIndicators: [
        "Wedding Makeup",
        "Engagement",
        "Graduation",
        "Party Makeup",
        "Serving Serang, Cilegon & Banten",
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Makeup looks for every important moment.",
      description:
        "Browse elegant bridal, engagement, graduation, bridesmaid, and event makeup looks created for clients across Serang, Cilegon, and Banten.",
      categoriesLabel: "Portfolio categories",
      filterLabels: {
        All: "All",
        Wedding: "Wedding",
        Engagement: "Engagement",
        Graduation: "Graduation",
        Bridesmaid: "Bridesmaid",
        Party: "Party",
      },
      items: {
        "wedding-serang-natural-glam": {
          title: "Natural Glam Bridal Look",
          alt: "Wedding makeup Serang by DianaAF Makeup with elegant natural glam bridal look",
        },
        "engagement-cilegon-soft-rose": {
          title: "Soft Rose Engagement Look",
          alt: "Engagement makeup Cilegon with soft rose tones by DianaAF Makeup",
        },
        "graduation-serang-fresh": {
          title: "Fresh Graduation Makeup",
          alt: "Makeup graduation Serang with fresh natural glam finish by DianaAF Makeup",
        },
        "bridesmaid-cilegon-elegant": {
          title: "Elegant Bridesmaid Makeup",
          alt: "Makeup bridesmaid Cilegon with elegant warm event styling by DianaAF Makeup",
        },
        "party-banten-polished": {
          title: "Polished Party Makeup",
          alt: "Party makeup Banten with polished event look by DianaAF Makeup",
        },
        "wedding-trial-banten": {
          title: "Wedding Trial Session",
          alt: "Makeup trial Banten for wedding preparation with DianaAF Makeup",
        },
      },
    },
    services: {
      eyebrow: "Services",
      title: "Clear makeup services, tailored to your event.",
      description:
        "Every booking is prepared around the event schedule, location, outfit direction, and the finish you want: natural glam, elegant bridal, soft romantic, or polished event makeup.",
      bestFor: "Best for",
      items: [
        {
          title: "Wedding Makeup",
          description:
            "Elegant, long-lasting bridal makeup with a refined natural glam finish for akad, reception, or intimate celebrations.",
          bestFor: "Brides who want polished makeup that still feels like themselves.",
        },
        {
          title: "Engagement Makeup",
          description:
            "Soft, romantic makeup for engagement, lamaran, sangjit, and family ceremonies with camera-ready detail.",
          bestFor: "Engagement events in Serang, Cilegon, and nearby Banten areas.",
        },
        {
          title: "Graduation Makeup",
          description:
            "Fresh, lightweight glam that looks polished for photos and comfortable through graduation day.",
          bestFor: "Wisuda, school events, and formal graduation portraits.",
        },
        {
          title: "Bridesmaid Makeup",
          description:
            "Coordinated makeup for bridesmaids, family members, and close friends with a cohesive event look.",
          bestFor: "Wedding parties that need consistent, punctual makeup service.",
        },
        {
          title: "Party / Event Makeup",
          description:
            "Polished event makeup for birthdays, photoshoots, office events, and special invitations.",
          bestFor: "Clients who want a refined look without feeling overdone.",
        },
        {
          title: "Makeup Trial",
          description:
            "A pre-event session to align on complexion, eye look, lip color, and overall bridal direction.",
          bestFor: "Brides who want confidence before the wedding day.",
        },
        {
          title: "Home Service Makeup",
          description:
            "On-location makeup service for homes, hotels, venues, and preparation spaces when schedule allows.",
          bestFor: "Clients in Serang, Cilegon, and selected Banten service areas.",
        },
      ],
    },
    about: {
      eyebrow: "About DianaAF Makeup",
      title: "Warm, detailed makeup service for calm event preparation.",
      paragraphs: [
        "DianaAF Makeup is a professional makeup service based around Serang and Cilegon, Banten, created for clients who want an elegant look that feels polished, comfortable, and personal.",
        "The focus is natural glam, refined bridal makeup, and long-lasting complexion for weddings, engagements, graduations, bridesmaids, and meaningful events.",
        "Each session is handled with attention to comfort, hygiene, detail, and punctuality so the preparation time feels organized from the first brush to the final touch-up.",
      ],
      cards: ["Hygienic tools", "On-time prep", "Photo-ready finish"],
      imageAlt:
        "Professional makeup trial service in Banten with clean brushes and hygienic preparation",
      imageCaption:
        "DianaAF Makeup prepares natural glam and bridal looks with clean tools and a calm client experience.",
    },
    contact: {
      eyebrow: "Contact & Booking",
      title: "Share your event details and book faster.",
      description:
        "For fastest response, please include your event date, location, and makeup type.",
      instagram: "Instagram Inquiry",
      formAria: "WhatsApp booking form",
      name: "Name",
      namePlaceholder: "Your name",
      eventDate: "Event date",
      eventType: "Event type",
      eventTypePlaceholder: "Select event type",
      eventTypes: [
        { value: "Wedding Makeup", label: "Wedding Makeup" },
        { value: "Engagement Makeup", label: "Engagement Makeup" },
        { value: "Graduation Makeup", label: "Graduation Makeup" },
        { value: "Bridesmaid Makeup", label: "Bridesmaid Makeup" },
        { value: "Party / Event Makeup", label: "Party / Event Makeup" },
        { value: "Makeup Trial", label: "Makeup Trial" },
        { value: "Home Service Makeup", label: "Home Service Makeup" },
      ],
      location: "Location",
      locationPlaceholder: "Serang, Cilegon, or venue",
      message: "Message",
      messagePlaceholder:
        "Tell us your makeup style, schedule, and number of people.",
      submit: "Send Booking Details via WhatsApp",
      whatsappIntro: "Hello DianaAF Makeup, I would like to book a makeup schedule.",
      whatsappFields: {
        name: "Name",
        eventDate: "Event date",
        eventType: "Event type",
        location: "Location",
        message: "Notes",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions.",
      description:
        "Helpful answers for clients looking for a MUA in Serang, Wedding Makeup Cilegon, or professional makeup services across Banten.",
      items: [
        {
          question: "What is usually included in a wedding makeup package?",
          answer:
            "A wedding makeup package usually includes long-lasting bridal complexion, a customized eye look, lash application, basic touch-up, and look consultation. Package details can be adjusted for akad, reception, or intimate weddings.",
        },
        {
          question: "Does DianaAF Makeup provide home service makeup?",
          answer:
            "Yes. DianaAF Makeup can provide makeup service at home, hotels, or venues depending on schedule availability. This is ideal for clients looking for practical MUA Serang or Jasa MUA Banten support for weddings, family events, and special occasions.",
        },
        {
          question: "Which areas does DianaAF Makeup serve?",
          answer:
            "DianaAF Makeup serves Serang, Cilegon, and other Banten areas depending on date, schedule, and location distance. For Wedding Makeup Cilegon or Makeup Artist in Serang, send your event date and venue so availability can be confirmed.",
        },
        {
          question: "How long does the makeup process usually take?",
          answer:
            "The makeup process usually takes around 60 to 120 minutes depending on the event type, look detail, skin condition, and hairdo needs. Wedding makeup is usually scheduled with extra buffer time.",
        },
        {
          question: "Can I book graduation or bridesmaid makeup?",
          answer:
            "Yes. DianaAF Makeup accepts graduation makeup, bridesmaid makeup, family makeup, party makeup, and special event makeup bookings. Early booking is recommended for weekends and graduation season.",
        },
        {
          question: "How do I book a makeup schedule?",
          answer:
            "The fastest way is through WhatsApp after completing the booking form. Please include your name, event date, makeup type, location, and message so DianaAF Makeup can check availability and suggest the right package.",
        },
        {
          question: "Is makeup trial available before the wedding?",
          answer:
            "Yes, makeup trial is available depending on schedule. A trial helps brides align complexion, eye details, lip color, and natural glam direction before the wedding day.",
        },
      ],
    },
    footer: {
      description:
        "Professional makeup artist for weddings, engagements, graduations, bridesmaids, and events across Serang, Cilegon, and Banten.",
      rights: "All rights reserved.",
      whatsappBooking: "WhatsApp Booking",
      instagram: "Instagram",
    },
  },
};
