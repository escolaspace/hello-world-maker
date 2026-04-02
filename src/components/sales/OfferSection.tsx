import { Check, ShieldCheck } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
          Oferta especial — Lote 01
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Tudo isso por um valor que cabe no bolso
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Vou ser honesta: o preço é baixo de propósito. Esse workshop é a porta de entrada para a Metodologia SRAV. Quero que você entre, veja o valor de perto e decida se quer ir mais fundo. Sem truques, sem letras miúdas.
        </p>

        <div className="bg-card border-2 border-gold/40 rounded-2xl p-8 mb-8">
          <p className="text-muted-foreground mb-2">De</p>
          <p className="text-3xl text-muted-foreground line-through mb-1">R$249,00</p>
          <p className="text-muted-foreground mb-4">por apenas</p>
          <p className="font-display text-6xl font-bold text-gold mb-2">R$29,90</p>
          <p className="text-sm text-muted-foreground mb-6">pagamento único</p>

          <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
            {[
              "2 dias de workshop ao vivo via Zoom",
              "Acesso ao grupo exclusivo de alunas",
              "Certificado digital de participação",
              "Material de apoio e plano de ação",
              "Acesso às gravações por 7 dias",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://pay.hotmart.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full gradient-gold text-primary-foreground font-bold text-lg py-4 rounded-lg hover:opacity-90 transition-opacity animate-pulse-gold text-center"
          >
            GARANTIR MINHA VAGA POR R$29,90
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span>Pagamento seguro · Acesso imediato · Sem assinatura</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
