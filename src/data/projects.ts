import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "NestEgg",
    description:
      "Aplicação de gestão financeira criada para organizar lançamentos, parcelas, metas, relatórios e a evolução do patrimônio em um único lugar.",
    problem:
      "Centralizar a rotina financeira compartilhada com segurança, visualização clara e controle sobre os próprios dados.",
    technologies: ["Python", "Flask", "SQLite", "WebAuthn", "Docker", "Caddy"],
    image: "/assets/nestegg-logo.png",
    demoUrl: "https://nestegg-demo.kaiovinici.dev",
    status: "published",
    featured: true,
  },
];
