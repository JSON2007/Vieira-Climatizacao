import { useState } from "react";
import { siteConfig } from "../../config/site";
import { getAssetPath, getWhatsAppUrl } from "../../utils";
import { NAV_LINKS } from "../../data/content";
import { Icon } from "../ui/Icon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contactUrl = getWhatsAppUrl(`Olá! Gostaria de falar com a equipe da ${siteConfig.brand} ${siteConfig.brandHighlight}.`);

  return (
    <>
      {/* Top Banner de Localidade e Contato */}
      <div className="bg-navy-950 border-b border-white/5 px-4 py-2 text-center text-[12px] font-medium text-slate-300">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <Icon name="map-pin" className="h-3.5 w-3.5 text-brand-sky" />
              {siteConfig.city}
            </span>
            <span className="hidden text-slate-600 sm:inline">•</span>
            <span className="text-slate-400">
              {siteConfig.regions.slice(0, 3).join(" • ")}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.openingHours}
            </span>
            <span className="hidden text-slate-600 md:inline">•</span>
            <span className="hidden text-slate-300 md:inline font-bold">
              {siteConfig.phoneFormatted}
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md text-white shadow-lg shadow-black/15 transition-all">
        <div className="container-site flex h-[78px] items-center justify-between gap-4">
          <a
            href="#inicio"
            className="group flex items-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            aria-label={`${siteConfig.brand} ${siteConfig.brandHighlight} Climatização - Início`}
          >
            {/* Somente a imagem da logo, sem containers ou fundos extras */}
            <img
              src={getAssetPath("vieira-logo.png")}
              alt="Vieira Climatização - Instalação & Manutenção"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-sky after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.98] sm:flex"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span>Solicitar orçamento</span>
          </a>

          <button
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav
            className="border-t border-white/10 bg-navy-900 px-6 py-5 md:hidden animate-fadeIn"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#20bd5a]"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              <span>Falar no WhatsApp: {siteConfig.phoneFormatted}</span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
