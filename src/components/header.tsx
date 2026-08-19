import { navigation } from "@/data/navigation";
import { siteConfig } from "@/utils/site";
import { Container } from "@/components/ui/container";
import { ExternalIcon } from "@/components/ui/external-icon";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
          <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold tracking-tight text-white">
            KV
          </span>
          <span className="hidden text-sm font-medium text-zinc-300 sm:inline">Kaio Vinicius</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a className="social-link" href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub <ExternalIcon />
          </a>
          <a className="social-link hidden sm:flex" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalIcon />
          </a>
          <details className="mobile-menu lg:hidden">
            <summary aria-label="Abrir menu"><span /><span /></summary>
            <nav aria-label="Navegação para dispositivos móveis">
              {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
