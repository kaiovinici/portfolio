import { Container } from "@/components/ui/container";
import { ExternalIcon } from "@/components/ui/external-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const statusLabel = {
  "demo-preparation": "Demo em preparação",
  "local-demo": "Demo local disponível",
  published: "Publicado",
  archived: "Arquivado",
} as const;

export function Projects() {
  return (
    <section id="projetos" className="section-shell scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="04 — Projetos"
          title="Problemas reais, soluções que uso."
          description="Projetos construídos a partir de necessidades concretas. As demonstrações públicas utilizam dados fictícios e ambientes isolados."
        />
        <div className="mt-12">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-preview" aria-hidden="true">
                <div className="project-window">
                  <div className="project-window-top"><span /><span /><span /></div>
                  <div className="project-window-body">
                    <div className="project-chart"><i /><i /><i /><i /><i /><i /></div>
                    <div className="project-summary"><span /><span /><span /></div>
                  </div>
                </div>
                <span className="project-name-mark">NE</span>
              </div>
              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">{project.name}</h3>
                  <span className="status-label"><i />{statusLabel[project.status]}</span>
                </div>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-7 border-l border-zinc-800 pl-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-zinc-600">Problema resolvido</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{project.problem}</p>
                </div>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <li className="tech-badge" key={technology}>{technology}</li>)}
                </ul>
                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-6">
                  {project.demoUrl ? (
                    <a className="button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Abrir demo <ExternalIcon /></a>
                  ) : (
                    <span className="text-sm text-zinc-600">Link disponível após a publicação segura da demo.</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
