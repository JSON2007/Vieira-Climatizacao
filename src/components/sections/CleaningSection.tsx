import { CLEANING_POINTS } from "../../data/content";
import { getAssetPath, getWhatsAppUrl } from "../../utils";
import { Icon } from "../ui/Icon";

export function CleaningSection() {
  return (
    <section id="higienizacao" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl transition-all">
            <img
              src={getAssetPath("serpentina-suja.webp")}
              alt="Serpentina interna de ar-condicionado com acúmulo severo de fungos e poeira antes do procedimento de higienização"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute top-4 left-4 rounded-lg bg-navy-950/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
            Estado real antes da higienização
          </div>
          
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>Registro fotográfico técnico em cliente real</span>
            <span className="font-semibold text-brand-blue">• Caso verificado</span>
          </div>
        </div>

        <div>
          <h2 className="section-title">
            O perigo invisível: fungos, ácaros e consumo excessivo de energia
          </h2>
          <p className="section-copy">
            Com meses de uso e a umidade do litoral, a serpentina e a turbina do ar-condicionado acumulam uma crosta biológica que bloqueia o fluxo de ar e contamina o ambiente que sua família respira.
          </p>

          <div className="mt-8 space-y-4">
            {CLEANING_POINTS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3.5 rounded-lg border border-slate-100 bg-slate-50/70 p-3.5 transition hover:bg-slate-50"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-50 text-brand-blue">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma higienização para meu ar-condicionado com a IceTec.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-brand-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-blue/20 transition-all duration-200 hover:bg-brand-darkBlue hover:shadow-xl hover:shadow-brand-blue/30 active:scale-[0.98]"
            >
              <span>Quero cuidar do ar da minha casa</span>
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Serviço realizado no local, com bolsa coletora especial sem respingos na sua parede ou piso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
