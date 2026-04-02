const schedule = [
  {
    day: "Dia 1 — Sexta, 16 de Maio",
    blocks: [
      { time: "9h30", title: "Abertura e boas-vindas" },
      { time: "10h00", title: "O Mercado que Ninguém Te Mostrou" },
      { time: "11h30", title: "Intervalo" },
      { time: "12h00", title: "Seu Modelo de Negócio de Alto Valor" },
      { time: "13h00", title: "Almoço" },
      { time: "14h30", title: "Posicionamento: De Invisível a Indispensável" },
      { time: "16h00", title: "Sessão de dúvidas e exercícios práticos" },
      { time: "17h30", title: "Encerramento do Dia 1" },
    ],
  },
  {
    day: "Dia 2 — Sábado, 17 de Maio",
    blocks: [
      { time: "9h30", title: "Recapitulação e aquecimento" },
      { time: "10h00", title: "Jornada do Cliente: Do Contato ao Contrato" },
      { time: "11h30", title: "Intervalo" },
      { time: "12h00", title: "Precificação Sem Medo" },
      { time: "13h00", title: "Almoço" },
      { time: "14h30", title: "Seu Plano de Ação Real" },
      { time: "16h00", title: "Sessão final: plano revisado + próximos passos" },
      { time: "17h30", title: "Encerramento e certificação" },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          Programação
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          2 dias intensos, 100% mão na massa
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day) => (
            <div key={day.day} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-gold mb-6">{day.day}</h3>
              <div className="space-y-4">
                {day.blocks.map((block) => (
                  <div key={block.time + block.title} className="flex gap-4">
                    <span className="text-xs text-muted-foreground font-mono w-12 shrink-0 pt-0.5">{block.time}</span>
                    <span className="text-sm text-foreground">{block.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
