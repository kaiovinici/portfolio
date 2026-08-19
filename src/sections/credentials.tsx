import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Credentials() {
  return (
    <section id="formacao" className="section-shell scroll-mt-20">
      <Container>
        <SectionHeading eyebrow="Formação" title="Continuo aprendendo." />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.12em] text-zinc-600">Formação acadêmica</p>
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              <article className="py-6"><p className="text-sm text-zinc-500">2026 — 2028</p><h3 className="mt-2 font-medium text-zinc-200">Análise e Desenvolvimento de Sistemas</h3><p className="mt-1 text-sm text-zinc-500">FIAP</p></article>
              <article className="py-6"><p className="text-sm text-zinc-500">2018 — 2021</p><h3 className="mt-2 font-medium text-zinc-200">Programação de Jogos Digitais</h3><p className="mt-1 text-sm leading-6 text-zinc-500">Colégio da Polícia Militar Estudante Rebeca Cristina Alves Simões</p></article>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.12em] text-zinc-600">Certificações e treinamentos</p>
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              <article className="py-6"><h3 className="font-medium leading-6 text-zinc-200">O Futuro é Tech: Descubra Qual Carreira dá Match com Você</h3><p className="mt-2 text-sm text-zinc-500">FIAP + Alura</p></article>
              <article className="py-6"><h3 className="font-medium text-zinc-200">Treinamento BGP</h3><p className="mt-2 text-sm text-zinc-500">Border Gateway Protocol</p></article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
