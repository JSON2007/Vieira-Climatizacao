import { BRANDS } from "../../data/content";

export function BrandsSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F7F8FA] py-5">
      <div className="container-site flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-[10px] font-bold uppercase tracking-[.18em] text-slate-500 sm:text-left">
          Atendimento multimarcas
        </p>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-extrabold tracking-wide text-slate-500">
          {BRANDS.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
      <p className="container-site mt-2 text-center text-[10px] text-slate-400">
        Marcas exibidas como referência de compatibilidade; confirme os serviços oferecidos para cada modelo.
      </p>
    </section>
  );
}
