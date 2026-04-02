const testimonials = [
  { name: "Paola", handle: "@paola.admin", result: "Faturei R$17 mil na primeira reunião após o workshop.", location: "SP" },
  { name: "Kauane", handle: "@kauane.virtual", result: "Em 3 meses dobrei o que ganhava na CLT.", location: "RJ" },
  { name: "Fernanda", handle: "@fernanda.sec", result: "Fechei 4 clientes em 2 semanas saindo do zero.", location: "MG" },
  { name: "Carla", handle: "@carla.remota", result: "Saí da CLT em 4 meses. Hoje faturo R$8 mil com 3 clientes.", location: "PR" },
  { name: "Amanda", handle: "@amanda.virtual", result: "Aumentei meu preço em 3x e nenhum cliente saiu.", location: "SC" },
  { name: "Beatriz", handle: "@bea.prestativa", result: "Meu marido ficou impressionado. Hoje ele me apoia 100%.", location: "BA" },
  { name: "Larissa", handle: "@lari.admin", result: "Pela primeira vez tenho um negócio de verdade, não bicos.", location: "CE" },
  { name: "Patrícia", handle: "@pat.secretaria", result: "Em 6 meses construí uma carteira de R$12 mil/mês.", location: "GO" },
  { name: "Raquel", handle: "@raquel.srav", result: "Parei de depender financeiramente do marido. Liberdade real.", location: "RS" },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          Prova social
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          +1.200 mulheres já transformaram suas carreiras
        </h2>
        <p className="text-muted-foreground mb-12">
          Resultados reais de alunas que aplicaram a Metodologia SRAV.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.handle} className="bg-card border border-border rounded-xl p-5 hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name} — {t.location}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/90 italic">"{t.result}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
