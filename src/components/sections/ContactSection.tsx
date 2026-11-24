import { siteConfig } from "../../config/site";
import { getWhatsAppUrl } from "../../utils";
import { Icon } from "../ui/Icon";

export function ContactSection() {
  const contactUrl = getWhatsAppUrl(`Olá! Gostaria de solicitar um orçamento com a ${siteConfig.brand} ${siteConfig.brandHighlight} Climatização.`);

  return (
    <section id="contato" className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-navy-900 to-navy-950 p-8 text-white shadow-2xl sm:p-12 md:flex md:items-center md:justify-between md:gap-8">
          {/* Subtle brand glow behind text com tom ciano */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-sky">
              <Icon name="map-pin" className="h-4 w-4" />
              <span>{siteConfig.city} • {siteConfig.regions.slice(0, 3).join(", ")}</span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Pronto para ter o clima ideal na sua casa ou empresa?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Envie uma mensagem para a <strong>{siteConfig.brand} {siteConfig.brandHighlight}</strong> e receba atendimento técnico rápido para Barra do Sahy, Camburi, Baleia e litoral de São Sebastião.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {siteConfig.address} • {siteConfig.openingHours}
            </p>
          </div>

          <div className="relative mt-8 shrink-0 md:mt-0 flex flex-col gap-2">
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-[#25D366]/35 active:scale-[0.98]"
            >
              <Icon name="whatsapp" className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              <span>Falar no WhatsApp</span>
            </a>
            <span className="text-center text-xs font-semibold text-slate-300">
              {siteConfig.phoneFormatted}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
