import { Award, Users, Building2, Tv } from "lucide-react";

const BioSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          Quem é a Dani Oliveira
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">
              De CLT frustrada a mentora de{" "}
              <span className="text-gold">+1.200 mulheres</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Formada em Administração e Gestão de RH (2014), Dani Oliveira fundou a Prestativa Virtual e se tornou referência nacional em secretariado remoto de alto valor.
              </p>
              <p>
                Já atendeu mais de 50 clientes, declarou mais de R$1 milhão em faturamento e formou mais de 1.200 mulheres através da Metodologia SRAV — ajudando a criar mais de 30 empresas formalizadas.
              </p>
              <p>
                Sua filosofia é clara: menos clientes, mais valor. E esse workshop é o primeiro passo para você vivenciar isso de perto.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Autoridade reconhecida</h3>
            {[
              { icon: Award, label: "Formação acadêmica", detail: "Administração + Gestão de RH (2014)" },
              { icon: Users, label: "Resultado com alunas", detail: "+1.200 mulheres formadas, +30 empresas criadas" },
              { icon: Building2, label: "Resultado próprio", detail: "Prestativa Virtual, +50 clientes, +R$1M declarado" },
              { icon: Tv, label: "Reconhecimento externo", detail: "CONAVIRT 2025/2026, DNA do Network, TV Viver & Empreender" },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
