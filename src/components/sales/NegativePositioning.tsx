import { X, Check } from "lucide-react";

const NegativePositioning = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
          Vou ser honesta com você.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold mb-6 text-muted-foreground">Esse workshop NÃO é…</h3>
            <ul className="space-y-4">
              {[
                "Mais um curso gravado que você nunca vai terminar",
                "Promessa de dinheiro fácil da noite pro dia",
                "Conteúdo genérico que serve pra qualquer profissão",
                "Uma apresentação de slides sem interação",
                "Uma venda disfarçada de 2 dias",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-gold/30 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-6 text-gold">Esse workshop É…</h3>
            <ul className="space-y-4">
              {[
                "2 dias ao vivo, com mão na massa e plano de ação real",
                "Metodologia testada por +1.200 mulheres",
                "Específico para secretárias e assistentes virtuais",
                "Interativo: você sai com dúvidas respondidas e próximos passos claros",
                "Porta de entrada para a Metodologia SRAV completa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NegativePositioning;
