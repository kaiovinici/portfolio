import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const areas = [
  ["Roteamento", "BGP, OSPF e políticas de anúncio"],
  ["Internet", "IPv6, RPKI e DNS"],
  ["Sistemas", "Linux, virtualização e containers"],
  ["Operação", "Monitoramento e resposta a incidentes"],
  ["Automação", "Scripts e rotinas repetíveis"],
  ["Entrega", "Docker, Cloud e práticas DevOps"],
] as const;

export function Lab() {
  return (
    <section id="lab" className="section-shell scroll-mt-20">
      <Container>
        <div className="lab-shell">
          <SectionHeading eyebrow="Meu laboratório" title="Além da aplicação." description="Assuntos que estudo e experimento para entender o caminho completo, da rede ao serviço em produção." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(([title, text], index) => (
              <article className="bg-zinc-950 p-6 sm:p-7" key={title}>
                <span className="font-mono text-[0.65rem] text-zinc-700">LAB.0{index + 1}</span>
                <h3 className="mt-8 font-medium text-zinc-200">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-zinc-600">O laboratório apresenta áreas de estudo sem expor endereços, clientes, topologias ou dados internos.</p>
        </div>
      </Container>
    </section>
  );
}
