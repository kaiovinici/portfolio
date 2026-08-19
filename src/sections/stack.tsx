import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stack } from "@/data/stack";

export function Stack() {
  return (
    <section id="stack" className="section-shell scroll-mt-20">
      <Container>
        <SectionHeading eyebrow="O que uso" title="Tecnologias que fazem parte do meu dia." description="Algumas vieram do trabalho, outras dos estudos. Todas ajudam a entender e construir soluções melhores." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {stack.map((category, index) => (
            <article className="panel stack-card p-6 sm:p-8" key={category.title}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">{category.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">{category.description}</p>
                </div>
                <span className="font-mono text-xs text-zinc-700">0{index + 1}</span>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <li className="tech-badge" key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
