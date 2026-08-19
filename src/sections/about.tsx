import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const path = [
  { number: "01", title: "Aprendi observando", text: "No monitoramento, acompanhei circuitos em escala nacional, identifiquei falhas em tempo real e coordenei parceiros e equipes de campo para manter SLAs críticos.", detail: "Zabbix · PRTG · Grafana · Fibra · Rádio · DWDM" },
  { number: "02", title: "Cresci resolvendo", text: "Como Analista de Redes, passei a atuar diretamente no diagnóstico de incidentes, roteamento, endereçamento, segurança e estabilidade de ambientes ISP.", detail: "BGP · OSPF · RPKI · IPv4/IPv6 · DNS · FTTx" },
  { number: "03", title: "Agora, também construo", text: "Na FIAP e nos estudos de desenvolvimento, transformo experiência operacional em software, scripts e automações pensados para o ambiente onde realmente serão executados.", detail: "Python · JavaScript · TypeScript · Git · Docker" },
];

export function About() {
  return (
    <section id="sobre" className="section-shell scroll-mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Sobre mim" title="Não comecei pelo código." />
            <p className="mt-6 max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
              Comecei entendendo o que acontece quando um serviço falha, uma rota deixa de responder ou uma infraestrutura precisa continuar disponível.
            </p>
            <blockquote className="mt-10 border-l border-zinc-700 pl-5 text-lg leading-8 text-zinc-300">
              “Quero saber como o código funciona — e também o que é necessário para mantê-lo no ar.”
            </blockquote>
          </div>
          <ol className="story-list">
            {path.map((item) => (
              <li key={item.number}>
                <span className="story-number">{item.number}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-zinc-100">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-400">{item.text}</p>
                  <p className="mt-4 font-mono text-[0.68rem] leading-5 text-zinc-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
