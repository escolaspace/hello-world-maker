import { CalendarDays, Monitor, Clock, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Copy */}
        <div>
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-gold inline-block" />
            Workshop Secretária de Alto Valor
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Esse mercado é uma{" "}
            <span className="italic gradient-gold-text">mina de ouro</span> —
            <br />
            e está pedindo{" "}
            <span className="italic gradient-gold-text">por você.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Em 2 dias ao vivo você vai sair com um{" "}
            <span className="text-foreground font-semibold">plano real para faturar R$10.000/mês</span>{" "}
            como secretária remota — com menos clientes, mais valor e sem abrir mão da sua família.
          </p>

          {/* Event details badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: CalendarDays, text: "16 e 17 de Maio de 2026" },
              { icon: Monitor, text: "via Zoom" },
              { icon: Clock, text: "9h30 às 17h30" },
              { icon: Award, text: "Certificado digital" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 bg-secondary text-muted-foreground text-sm px-3 py-1.5 rounded-full border border-border">
                <Icon className="w-4 h-4 text-gold" />
                {text}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToCTA}
            className="w-full sm:w-auto gradient-gold text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity animate-pulse-gold"
          >
            GARANTIR MINHA VAGA{" "}
            <span className="ml-3 text-sm line-through opacity-70">R$249</span>{" "}
            <span className="text-xl">R$29,90</span>
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            Pagamento único · Acesso imediato ao grupo exclusivo · Sem assinatura
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 border border-border rounded-lg p-5">
            {[
              { number: "+1.200", label: "mulheres impactadas" },
              { number: "+50", label: "clientes ativos" },
              { number: "+30", label: "empresas formadas" },
              { number: "R$10k", label: "meta mensal possível" },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl font-bold text-gold">{number}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Before/After Card */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-sm">+</span>
              </div>
              <span className="text-gold font-medium uppercase text-sm tracking-wider">Metodologia SRAV</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Antes</p>
                <ul className="space-y-3">
                  {["CLT, sem autonomia", "R$2.300/mês", "Fora de casa todo dia", "Teto de crescimento"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-4 h-px bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-gold uppercase tracking-wider mb-4">Depois</p>
                <ul className="space-y-3">
                  {["Negócio próprio", "R$10.000/mês", "De casa, com a família", "Escala real"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-gold">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social proof floating cards */}
          <div className="flex gap-4">
            <div className="bg-card border border-border rounded-lg p-4 flex-1">
              <p className="text-xs text-muted-foreground">@paola.admin</p>
              <p className="font-display text-2xl font-bold text-foreground">R$17k</p>
              <p className="text-xs text-muted-foreground">na primeira reunião</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex-1">
              <p className="text-xs text-muted-foreground">@kauane.virtual</p>
              <p className="font-display text-2xl font-bold text-foreground">2× CLT</p>
              <p className="text-xs text-muted-foreground">faturou o dobro em 3 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
