const StorySection = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          A história por trás do método
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
          "Eu atendia 16 clientes ao mesmo tempo…
          <span className="italic text-gold"> e estava enlouquecendo."</span>
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Vou ser honesta com você: eu já estive exatamente onde você está agora. Formada em Administração e Gestão de RH, trabalhava para o sonho dos outros. Decidi mudar — e quando finalmente comecei a atender como secretária remota, cometi o erro que quase todo mundo comete.
          </p>
          <p>
            <span className="text-foreground font-medium">Aceitei todo cliente que apareceu.</span> Cobrava barato porque tinha medo de perder. Resultado? 16 clientes simultâneos, mensagens de madrugada, fins de semana comprometidos… e o faturamento? Não compensava o caos.
          </p>
          <p>
            Foi aí que entendi: <span className="text-foreground font-medium">o problema não era o mercado. Era o modelo.</span> Menos clientes, mais valor. Clientes de ouro que pagam bem, respeitam seus limites e ficam por anos.
          </p>
          <p>
            Hoje tenho a <span className="text-gold font-semibold">Prestativa Virtual</span>, já atendi mais de 50 clientes, declarei mais de R$1 milhão, formei mais de 1.200 mulheres e ajudei a criar mais de 30 empresas. Fui palestrante no CONAVIRT 2025 e 2026, no DNA do Network e na TV Viver & Empreender.
          </p>
          <p className="text-foreground font-medium text-lg">
            E o workshop que criei é o atalho que eu gostaria de ter tido. Em 2 dias, vamos construir juntas o seu plano — para que você não precise passar pelo caminho difícil que eu passei.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
