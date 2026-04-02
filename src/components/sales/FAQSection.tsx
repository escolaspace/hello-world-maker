import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Não tenho experiência como secretária remota. Esse workshop é pra mim?",
    a: "Com certeza. A Dani começou do zero, sem clientes e sem portfólio. O workshop foi feito para te dar o passo a passo desde o início — incluindo como conseguir seus primeiros clientes de alto valor.",
  },
  {
    q: "Por que custa só R$29,90? É bom demais pra ser verdade?",
    a: "O workshop é a porta de entrada para a Metodologia SRAV. O preço é baixo de propósito para que mais mulheres possam participar e ver o valor de perto. Não é um produto desvalorizado — é uma estratégia para que você conheça o método antes de decidir ir mais fundo.",
  },
  {
    q: "E se eu não puder participar ao vivo?",
    a: "Recomendamos fortemente a participação ao vivo, porque é interativo e você pode tirar dúvidas em tempo real. Mas sim, você terá acesso às gravações por 7 dias após o evento.",
  },
  {
    q: "Minha família não vai apoiar essa ideia…",
    a: "Entendemos. A Paola, uma das nossas alunas, levou o marido para assistir junto — e ele se tornou o maior apoiador do negócio dela. Quando os resultados aparecem, o apoio vem junto.",
  },
  {
    q: "Já tentei outros cursos e não funcionou. Por que seria diferente?",
    a: "A maioria dos cursos são gravados, genéricos e sem acompanhamento. Esse workshop é ao vivo, específico para secretariado remoto, com exercícios práticos e plano de ação personalizado. Você sai no domingo com clareza total do próximo passo.",
  },
  {
    q: "Não tenho tempo. Dá pra trabalhar com poucos clientes?",
    a: "Essa é exatamente a filosofia SRAV: menos clientes, mais valor. O modelo que a Dani ensina funciona com 3 a 5 clientes de alto valor — sem precisar trabalhar 12 horas por dia.",
  },
  {
    q: "Tem certificado?",
    a: "Sim! Você recebe um certificado digital de participação ao final do workshop.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gold inline-block" />
          Perguntas frequentes
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Ainda tem dúvidas?
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/40"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground text-left hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
