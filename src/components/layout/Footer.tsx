import { siteConfig } from "../../config/site";
import { getAssetPath } from "../../utils";

export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-white border-t border-white/5">
      <div className="container-site flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <a href="#inicio" className="flex items-center transition hover:opacity-95">
          <img
            src={getAssetPath("vieira-logo.png")}
            alt="Vieira Climatização Logo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </a>

        <div className="text-xs text-slate-400 text-left sm:text-center space-y-1">
          <p className="font-bold text-slate-200 text-sm">
            {siteConfig.segment} • {siteConfig.city}
          </p>
          <p className="text-slate-400">
            {siteConfig.address} • <strong className="text-white">{siteConfig.phoneFormatted}</strong>
          </p>
          <p className="text-slate-500">
            {siteConfig.openingHours}
          </p>
        </div>

        <p className="text-[11px] text-slate-500 text-left sm:text-right">
          © {new Date().getFullYear()} {siteConfig.brand} {siteConfig.brandHighlight} Climatização.<br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
