export function buildWhatsAppLink(plan: string, device: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(
    `I want the ${plan} for my ${device}.`
  );
  return `https://wa.me/${number}?text=${msg}`;
}
