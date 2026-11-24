import { siteConfig } from "../../config/site";
import { HIRING_TIPS, OUR_COMMITMENTS } from "../../data/content";
import { Icon } from "../ui/Icon";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="section-title section-title-dark">
            Por que escolher a {siteConfig.brand} {siteConfig.brandHighlight} Climatização?
          </h2>
          <p className="section-copy-dark mx-auto">
            Atendimento em São Sebastião com foco na durabilidade do seu aparelho contra a maresia, pontualidade e transparência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-navy-800/80 p-6 shadow-lg">
            <h3 className="font-heading text-lg font-bold text-white">
              O que você deve exigir ao contratar
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-300">
              {HIRING_TIPS.map((tip) => (
                <li key={tip} className="flex gap-2.5 items-start">
                  <span className="text-brand-sky font-bold leading-none mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-brand-blue/30 bg-[#142B3C]/80 p-6 shadow-lg">
            <h3 className="font-heading text-lg font-bold text-white">
              Compromisso {siteConfig.brand} {siteConfig.brandHighlight}
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-200">
              {OUR_COMMITMENTS.map((commitment) => (
                <li key={commitment} className="flex gap-2.5 items-start">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
