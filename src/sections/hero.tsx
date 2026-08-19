import { Container } from "@/components/ui/container";
import { ExternalIcon } from "@/components/ui/external-icon";
import { siteConfig } from "@/utils/site";
import Image from "next/image";

const technologies = ["Python", "TypeScript", "Linux", "Docker", "BGP", "IPv6", "Automação"];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-32 sm:min-h-screen">
      <div className="soft-light" aria-hidden="true" />
      <Container className="relative grid items-end gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-8 flex items-center gap-3 text-sm text-zinc-400">
            <span className="h-px w-8 bg-zinc-700" aria-hidden="true" />
            Olá, sou Kaio Vinicius.
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.65rem]">
            Gosto de entender <span className="text-zinc-500">como tudo se conecta.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Trabalho com redes e infraestrutura, estudo desenvolvimento e crio soluções para problemas que encontro no caminho.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button-primary" href="#sobre">Conheça minha trajetória <span aria-hidden="true">↓</span></a>
            <a className="button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub <ExternalIcon />
            </a>
          </div>
        </div>

        <figure className="portrait-wrap">
          <Image
            className="portrait-image"
            src="/assets/kaio-portrait.png"
            alt="Retrato de Kaio Vinicius"
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 1024px) 70vw, 32vw"
          />
          <figcaption>Kaio Vinicius · João Pessoa, PB</figcaption>
        </figure>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] pt-7 lg:col-span-2">
          <span className="mr-2 text-xs text-zinc-600">Ferramentas do caminho</span>
          {technologies.map((technology) => <span key={technology} className="font-mono text-xs text-zinc-500">{technology}</span>)}
        </div>
      </Container>
    </section>
  );
}
