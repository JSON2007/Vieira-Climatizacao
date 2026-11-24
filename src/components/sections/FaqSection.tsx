import { useState } from "react";
import { FAQS } from "../../data/content";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-navy-950 py-20 text-white sm:py-24">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="section-title section-title-dark">Dúvidas comuns sobre climatização</h2>
          <p className="section-copy-dark mx-auto">
            Tudo o que você precisa saber sobre prazos, manutenção preventiva e garantia antes de contratar.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-brand-blue/50 bg-navy-900 shadow-lg ring-1 ring-brand-blue/30"
                    : "border-white/10 bg-navy-900/60 hover:border-white/20 hover:bg-navy-900"
                }`}
              >
                <button
                  type="button"
                  className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-white transition focus:outline-none"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-base font-semibold transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-orange text-white rotate-180"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-4 text-xs leading-relaxed text-slate-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
