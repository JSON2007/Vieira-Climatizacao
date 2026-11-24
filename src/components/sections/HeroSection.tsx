import { useState } from "react";
import { siteConfig } from "../../config/site";
import { SERVICE_OPTIONS } from "../../data/content";
import { getAssetPath, getWhatsAppUrl } from "../../utils";
import { Icon } from "../ui/Icon";

export function HeroSection() {
  const [selectedService, setSelectedService] = useState("Higienização");

  const quoteMessage = `Olá! Gostaria de solicitar um orçamento para ${selectedService.toLowerCase()} com a Vieira Ar em São Sebastião.`;
  const whatsappUrl = getWhatsAppUrl(quoteMessage);

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-ambient"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-sky/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative grid items-center gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          {/* Badge com Cidade e Avaliação 4.9*/}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/15 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-sky-200 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-sky opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-sky" />
              </span>
              <span>São Sebastião e Litoral Norte</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="h-3.5 w-3.5" />
                ))}
              </div>
              <span>Nota {siteConfig.rating.toFixed(1)} de avaliação</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.45rem]">
            Ar-condicionado com máxima eficiência em{" "}
            <span className="text-brand-sky">São Sebastião.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            A <strong>Vieira Ar</strong> é especialista em climatização na <strong className="text-white">Barra do Sahy, Camburi, Baleia</strong> e região. Instalação, manutenção preventiva e higienização profunda para proteger seus equipamentos da maresia litorânea.
          </p>

          {/* Card Interativo de Orçamento */}
          <div className="mt-8 rounded-xl border border-white/10 bg-navy-900/90 p-5 shadow-2xl backdrop-blur-md transition-all sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Qual serviço você precisa hoje?
              </label>
              <span className="text-[11px] text-brand-sky font-semibold">Resposta rápida</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {SERVICE_OPTIONS.map((item) => {
                const isSelected = selectedService === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className={`group flex min-h-[46px] items-center rounded-lg border px-3.5 py-2 text-left text-xs font-medium transition-all duration-200 ${isSelected
                        ? "border-brand-sky bg-brand-blue/25 text-white shadow-sm ring-1 ring-brand-sky"
                        : "border-white/10 bg-navy-800/80 text-slate-300 hover:border-white/20 hover:bg-navy-700/80 hover:text-white"
                      }`}
                  >
                    <span
                      className={`mr-2.5 inline-block h-2 w-2 rounded-full transition-all duration-200 ${isSelected ? "bg-brand-sky ring-2 ring-brand-sky/40 scale-110" : "bg-slate-500 group-hover:bg-slate-400"
                        }`}
                    />
                    <span className="truncate">{item}</span>
                  </button>
                );
              })}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3.5 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-[0.99]"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              <span>Solicitar orçamento via WhatsApp ({siteConfig.phoneFormatted})</span>
            </a>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>{siteConfig.address}</span>
              <span className="text-emerald-400 font-medium">{siteConfig.openingHours}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-brand-sky" />
              Técnico local em São Sebastião
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-brand-sky" />
              Proteção anticorrosiva p/ maresia
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-brand-sky" />
              Atendimento com garantia
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={getAssetPath("hero-tecnico.webp")}
              alt="Técnico da Vieira Ar Climatização realizando manutenção preventiva em aparelho de ar-condicionado em São Sebastião"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating trust badge com selo da Vieira Ar */}
          <div className="animate-float-badge absolute -bottom-5 left-4 rounded-xl border border-white/10 bg-navy-900/95 p-3.5 shadow-2xl backdrop-blur-md sm:left-6 flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-blue/20 text-brand-sky shadow-sm">
              <Icon name="snow" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Padrão Vieira de Qualidade
              </p>
              <p className="text-xs font-bold text-white">
                Barra do Sahy • Camburi • Baleia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
