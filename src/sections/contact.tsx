import { Container } from "@/components/ui/container";
import { ExternalIcon } from "@/components/ui/external-icon";
import { siteConfig } from "@/utils/site";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32">
      <Container>
        <p className="eyebrow">Contato</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">Se quiser conversar, estou por aqui.</h2>
        <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">Estou aberto a conversas sobre desenvolvimento, redes, automação, DevOps e novos desafios profissionais.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="button-primary" href={siteConfig.linkedin} target="_blank" rel="noreferrer">Conversar no LinkedIn <ExternalIcon /></a>
          <a className="button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer">Ver GitHub <ExternalIcon /></a>
        </div>
      </Container>
    </section>
  );
}
