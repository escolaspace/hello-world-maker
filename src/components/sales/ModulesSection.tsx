const modules = [
  {
    title: "O Mercado que Ninguém Te Mostrou",
    problem: "Você ouve falar em 'trabalho remoto', mas não sabe por onde começar nem onde estão os clientes certos.",
    solution: "Vamos mapear juntas as oportunidades reais do mercado de secretariado remoto — e você vai entender exatamente onde se posicionar para atrair clientes de ouro.",
  },
  {
    title: "Seu Modelo de Negócio de Alto Valor",
    problem: "Você cobra por hora, aceita qualquer cliente e no final do mês o faturamento não fecha.",
    solution: "Vamos desenhar o modelo que permite faturar R$10.000/mês com 3 a 5 clientes — sem trabalhar mais, e sim de forma mais inteligente.",
  },
  {
    title: "Posicionamento: De Invisível a Indispensável",
    problem: "Você tem as habilidades, mas ninguém sabe disso. Seus perfis não comunicam valor.",
    solution: "Vamos construir seu posicionamento como Secretária de Alto Valor — da bio ao portfólio — para que o cliente certo te encontre e reconheça seu valor antes mesmo de falar com você.",
  },
  {
    title: "Jornada do Cliente: Do Primeiro Contato ao Contrato Fechado",
    problem: "Você manda proposta, faz follow-up — e o cliente que jurava que ia fechar… some.",
    solution: "Por que isso acontece e o que mudar para que o próximo feche. Vamos montar sua jornada de vendas passo a passo.",
  },
  {
    title: "Precificação Sem Medo",
    problem: "Você sabe que cobra barato, mas tem medo de aumentar e perder todo mundo.",
    solution: "Vamos definir quanto cobrar, como apresentar o preço e como justificar seu valor — para que o preço vire um filtro a seu favor, não uma barreira.",
  },
  {
    title: "Seu Plano de Ação Real",
    problem: "Você sai de cursos com muita teoria e nenhuma clareza sobre o próximo passo.",
    solution: "No final do segundo dia, você sai com um plano de ação personalizado, com metas, prazos e os primeiros passos definidos — para começar na segunda-feira.",
  },
];

const ModulesSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          O que você vai aprender
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Não é um curso gravado.{" "}
          <span className="italic text-gold">É um plano.</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Cada módulo foi desenhado para resolver um problema específico — e te entregar um resultado concreto no mesmo dia.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-gold/40 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-gold font-display text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                  {mod.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3 italic">"{mod.problem}"</p>
              <p className="text-sm text-foreground/80">{mod.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
