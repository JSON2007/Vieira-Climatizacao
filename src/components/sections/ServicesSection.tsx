import { SERVICES } from "../../data/content";
import { getAssetPath, getWhatsAppUrl } from "../../utils";
import { Icon } from "../ui/Icon";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="section-title">Soluções completas para climatizar seu espaço</h2>
          <p className="section-copy mx-auto">
            Da instalação de novos aparelhos ao reparo emergencial, cada serviço segue rigorosos procedimentos de segurança e eficiência energética.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={getAssetPath(service.image)}
                    alt={service.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                      isFeatured ? "aspect-[16/8]" : "aspect-[16/10]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {service.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={getWhatsAppUrl(`Olá! Gostaria de solicitar informações sobre ${service.title.toLowerCase()}.`)}
                      className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue transition-colors duration-200 hover:text-brand-orange"
                    >
                      <span>Consultar valores e prazos</span>
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
