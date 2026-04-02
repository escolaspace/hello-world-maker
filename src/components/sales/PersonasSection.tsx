const personas = [
  {
    name: "Ana",
    subtitle: "Secretária Presencial",
    description: "Você já sabe fazer. Só não sabe vender.",
    details: "Trabalha CLT, ganha entre R$1.800 e R$3.500/mês. Sabe que tem as habilidades, mas não sabe como transformar isso em um negócio remoto que paga mais e dá mais liberdade.",
  },
  {
    name: "Juliana",
    subtitle: "Mãe Empreendedora",
    description: "Isso não é mais um curso. É um plano.",
    details: "Está fora do mercado ou fazendo bicos. Já tentou outros cursos e se frustrou. Quer gerar renda sem depender financeiramente do marido, mas precisa de algo que funcione de verdade — e que caiba na rotina com os filhos.",
  },
  {
    name: "Camila",
    subtitle: "Assistente Virtual Estagnada",
    description: "Você está no mercado certo, no modelo errado.",
    details: "Já trabalha remoto, mas atende muitos clientes baratos. Não consegue aumentar o preço por medo de perder. Os clientes invadem seus horários. Precisa de reposicionamento, não de recomeço.",
  },
];

const PersonasSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          Para quem é
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Esse workshop é pra você se…
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-xl p-6 hover:border-gold/40 transition-colors">
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                <p className="text-xs text-gold uppercase tracking-wider">{p.subtitle}</p>
              </div>
              <p className="text-foreground font-medium italic mb-3">"{p.description}"</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
