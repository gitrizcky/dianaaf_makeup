export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildWhatsAppLink(phoneNumber: string, message: string) {
  const normalizedNumber = phoneNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
