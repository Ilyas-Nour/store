export function buildWhatsAppLink(plan: string, device: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(
    `Hello, I want to subscribe to the ${plan} for my ${device}. Please provide payment details.`
  );
  return `https://wa.me/${number}?text=${msg}`;
}
