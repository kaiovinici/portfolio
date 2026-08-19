import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-7">
      <Container className="flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Kaio Vinicius © {new Date().getFullYear()}</p>
        <p>Built with Next.js & TypeScript</p>
      </Container>
    </footer>
  );
}
