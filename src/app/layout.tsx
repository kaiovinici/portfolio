import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaiovinici.dev"),
  title: {
    default: "Kaio Vinicius | Redes, Desenvolvimento & DevOps",
    template: "%s | Kaio Vinicius",
  },
  description:
    "Portfólio de Kaio Vinicius, Analista de Redes e Desenvolvedor Full Stack em formação, com atuação em infraestrutura, automação, Python, TypeScript, DevOps e Cloud.",
  alternates: { canonical: "/" },
  authors: [{ name: "Kaio Vinicius", url: "https://kaiovinici.dev" }],
  creator: "Kaio Vinicius",
  keywords: ["Kaio Vinicius", "Analista de Redes", "Desenvolvedor Full Stack", "Python", "TypeScript", "DevOps", "Cloud", "BGP", "Automação"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Kaio Vinicius",
    title: "Kaio Vinicius | Redes, Desenvolvimento & DevOps",
    description: "Software, infraestrutura, redes e automação vistos como uma única engenharia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaio Vinicius | Redes, Desenvolvimento & DevOps",
    description: "Software, infraestrutura, redes e automação vistos como uma única engenharia.",
  },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
