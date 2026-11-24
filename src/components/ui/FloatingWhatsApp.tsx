import { useState } from "react";
import { siteConfig } from "../../config/site";
import { getWhatsAppUrl } from "../../utils";
import { Icon } from "./Icon";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const contactUrl = getWhatsAppUrl(`Olá! Gostaria de falar com a ${siteConfig.brand} ${siteConfig.brandHighlight} em São Sebastião.`);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip com dados da Vieira Ar */}
      <div
        className={`hidden sm:flex items-center gap-2 rounded-xl border border-white/20 bg-navy-900/95 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-3 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
        </span>
        <span>Vieira Ar Online • {siteConfig.phoneFormatted}</span>
      </div>

      {/* Botão de WhatsApp Flutuante */}
      <a
        href={contactUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Iniciar conversa com a ${siteConfig.brand} ${siteConfig.brandHighlight} no WhatsApp`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 animate-whatsapp-pulse hover:scale-110 hover:bg-[#20bd5a] active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white border-2 border-[#25D366]" />
        </span>

        <Icon
          name="whatsapp"
          className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-sm"
        />
      </a>
    </div>
  );
}
