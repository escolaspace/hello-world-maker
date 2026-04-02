const FinalCTA = () => {
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Você já sabe fazer.
          <br />
          <span className="italic text-gold">Agora é hora de vender.</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          16 e 17 de Maio. 2 dias. 1 plano. E a decisão que pode mudar o rumo da sua carreira. Vamos construir juntas?
        </p>
        <a
          href="https://pay.hotmart.com/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-opacity animate-pulse-gold"
        >
          GARANTIR MINHA VAGA POR R$29,90
        </a>
        <p className="text-xs text-muted-foreground mt-4">
          Vagas limitadas · Lote 01 · Preço promocional
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
