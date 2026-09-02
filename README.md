# Portfólio — Jorge

Esqueleto de portfólio pessoal em Next.js 14 (App Router) + Tailwind, pronto a editar e a publicar no Vercel.

## O que preencher antes de publicar

1. **`app/page.tsx`**
   - Substituir `o-teu-email@dominio.pt` pelo email real (2 ocorrências: link `href="mailto:..."` e texto visível).
   - Substituir `https://www.linkedin.com/in/o-teu-utilizador` pelo teu URL de LinkedIn real.
   - Nos projetos (array `projects`), preencher `link` com o URL do repositório/demo se quiseres tornar os títulos clicáveis (atualmente é só texto).
   - Ajustar/atualizar `status` e `period` à medida que os projetos avançam.

2. **`app/layout.tsx`**
   - Ajustar `metadata.title` e `metadata.description` se quiseres outro texto para partilha/SEO.

## Correr localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Publicar no Vercel (2 caminhos)

**Caminho A — via GitHub (recomendado, deploy automático a cada commit)**
1. Cria um repositório novo no GitHub e faz push desta pasta.
2. Em vercel.com → "Add New Project" → importa o repositório.
3. Vercel deteta Next.js automaticamente — não é preciso configurar nada. Clica em "Deploy".
4. Cada `git push` para a branch principal atualiza o site automaticamente.

**Caminho B — via CLI (mais rápido para testar)**
```bash
npm install -g vercel
vercel
```
Segue as instruções no terminal. Para produção: `vercel --prod`.

## Ligar ao LinkedIn

Depois de publicado (ex: `https://o-teu-projeto.vercel.app`), vai a
Editar perfil → Dados de contacto → Website no LinkedIn e adiciona o URL,
com a categoria "Portfolio" ou "Personal Website". É esse link que aparece
no botão "Acessar meu site" do teu perfil.

## Estrutura

```
app/
  layout.tsx     — fontes (Fraunces + IBM Plex Sans) e metadata
  page.tsx        — todo o conteúdo da página (hero, sobre, projetos, stack, contacto)
  globals.css     — grelha de fundo e estilos base
tailwind.config.ts — paleta de cores e tipografia customizadas
```

Todo o conteúdo está num único ficheiro (`page.tsx`) de propósito — é o mais
simples de editar sem teres de saltar entre componentes.
