import { siteConfig } from "../../config/site";
import { getAssetPath, getWhatsAppUrl } from "../../utils";
import { Icon } from "../ui/Icon";

export function AttentionSection() {
  const contactUrl = getWhatsAppUrl(`Olá! Gostaria de falar com a equipe da ${siteConfig.brand} ${siteConfig.brandHighlight} sobre ar-condicionado em São Sebastião.`);

  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-20 border-t border-slate-200/60">
      <div className="container-site grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="section-title">
            Atendimento ágil no Litoral Norte de SP
          </h2>
          <p className="section-copy">
            Seja em residências de veraneio, condomínios ou comércios na Barra do Sahy, Camburi, Baleia e região, a <strong>{siteConfig.brand} {siteConfig.brandHighlight}</strong> realiza atendimento pontual para você não ficar sem ar fresco nos dias mais quentes.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4 text-brand-sky shrink-0" />
              <span><strong>Endereço:</strong> {siteConfig.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-brand-blue shrink-0" />
              <span><strong>Horário:</strong> {siteConfig.openingHours}</span>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="star" className="h-4 w-4 text-amber-500 shrink-0" />
              <span><strong>Avaliação:</strong> Nota {siteConfig.rating.toFixed(1)} estrelas</span>
            </p>
          </div>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-[0.98]"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span>Falar no WhatsApp: {siteConfig.phoneFormatted}</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <img
            src={getAssetPath("tecnico-clima-pro.webp")}
            alt={`Técnico da ${siteConfig.brand} ${siteConfig.brandHighlight} Climatização uniformizado em atendimento residencial em São Sebastião`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
