import { siteConfig } from "../config/site";

export function getWhatsAppUrl(message: string): string {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  if (!number) return "#contato";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getAssetPath(filename: string): string {
  return `/images/${filename}`;
}
