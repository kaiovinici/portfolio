# Kaio Vinicius — Portfólio

Portfólio profissional de Kaio Vinicius, conectando desenvolvimento de software, redes, infraestrutura, automação, DevOps e Cloud.

> Screenshot será adicionado após a conclusão da interface.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- ESLint
- Docker e Docker Compose

## Desenvolvimento local

Requisitos: Node.js 24+ e npm 11+.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Verificações e build

```bash
npm run lint
npm run build
npm start
```

## Docker

```bash
docker compose up --build -d
```

O Compose publica a aplicação somente em `127.0.0.1:3000`. No deploy, a rede do serviço será ajustada após a inspeção da rede utilizada pelo Caddy; nenhuma configuração existente deve ser substituída.

## Estrutura

```text
src/
├── app/          # rotas, layout e estilos globais
├── components/   # componentes reutilizáveis
├── data/         # conteúdo estruturado do portfólio
├── sections/     # seções da página principal
├── types/        # tipos compartilhados
└── utils/        # configurações e utilitários
```

## Deploy

A imagem utiliza build multi-stage e a saída standalone do Next.js. O destino planejado é uma VPS própria com Docker e Caddy, publicada em [kaiovinici.dev](https://kaiovinici.dev). A configuração final depende de inspeção não destrutiva dos containers, portas, redes, DNS e Caddyfile existentes.

## Autor

Kaio Vinicius — [GitHub](https://github.com/kaiovinici) · [kaiovinici.dev](https://kaiovinici.dev)
