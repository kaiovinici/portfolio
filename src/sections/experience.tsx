import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const roles = [
  {
    period: "Ago 2024 — Atual",
    role: "Analista de Redes",
    company: "Intec Solutions",
    text: "Operação de redes ISP de alta disponibilidade, suporte N1 a N3 e diagnóstico de incidentes envolvendo roteamento, serviços e infraestrutura.",
    topics: ["BGP", "OSPF", "RPKI", "IPv4/IPv6", "FTTx", "DNS", "Servidores", "Automação"],
    emphasis: true,
  },
  {
    period: "Jan 2024 — Ago 2024",
    role: "Operador de Monitoramento de TI",
    company: "Intec Solutions",
    text: "Supervisão de circuitos em escala nacional, identificação proativa de falhas e coordenação de parceiros e equipes de campo para cumprimento de SLAs.",
    topics: ["Zabbix", "PRTG", "Grafana", "Fibra óptica", "Rádio", "DWDM", "OTDR"],
    emphasis: false,
  },
  {
    period: "Out 2022 — Dez 2023",
    role: "Assistente Administrativo",
    company: "DF Service Car",
    text: "Atuação em faturamento, ERP, estoque, logística, atendimento e organização de processos internos.",
    topics: ["ERP", "Processos", "Logística"],
    emphasis: false,
  },
] as const;

export function Experience() {
  return (
    <section id="experiencia" className="section-shell scroll-mt-20">
      <Container>
        <SectionHeading eyebrow="03 — Experiência" title="Uma evolução construída na prática." description="Da observabilidade à responsabilidade direta pela estabilidade da rede — e, agora, à automação dos processos que sustentam a operação." />
        <ol className="experience-list mt-14">
          {roles.map((role) => (
            <li key={role.role} className={role.emphasis ? "is-current" : ""}>
              <p className="font-mono text-xs text-zinc-600">{role.period}</p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-medium text-zinc-100">{role.role}</h3>
                  <span className="text-sm text-zinc-500">{role.company}</span>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">{role.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{role.topics.map((topic) => <li className="tech-badge" key={topic}>{topic}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
