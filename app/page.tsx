const servicos = [
  {
    ref: "01",
    tag: "FINANÇAS",
    title: "Gestão financeira & compliance",
    description:
      "Contas, tesouraria, compliance salarial e análise de crédito para PME industriais. Vinte anos a garantir que os números fecham e que a empresa cumpre.",
  },
  {
    ref: "02",
    tag: "AUTOM",
    title: "Automação de processos",
    description:
      "Substituição de trabalho manual repetitivo por workflows automáticos — relatórios, integrações entre sistemas, notificações e pipelines de dados.",
  },
  {
    ref: "03",
    tag: "SISTEMAS",
    title: "Sistemas internos & ferramentas",
    description:
      "Aplicações à medida para problemas reais de negócio que o software genérico não resolve — gestão de reservas, controlo interno, apps de apoio à operação.",
  },
  {
    ref: "04",
    tag: "DADOS",
    title: "Análise & reporting",
    description:
      "Dashboards e relatórios que dão visibilidade real sobre a empresa — sem depender de folhas de Excel manuais que ninguém quer manter.",
  },
];

const percurso = [
  {
    period: "2009 — 2012",
    place: "Angola",
    role: "Diretor Financeiro",
    description: "Gestão financeira de empresa industrial em contexto internacional exigente.",
  },
  {
    period: "2012 — 2017",
    place: "Moçambique",
    role: "Diretor Financeiro",
    description: "Continuação da carreira internacional em gestão financeira industrial.",
  },
  {
    period: "2017 — atual",
    place: "SOMEMA / Impormill, Leiria",
    role: "Gestor Financeiro",
    description:
      "Finanças corporativas, compliance salarial, análise de crédito e comunicação com investidores. Assume também, na prática, a gestão informal de TI do grupo.",
  },
  {
    period: "2024 — atual",
    place: "ESTG / IPLeiria",
    role: "Eng. Informática, pós-laboral",
    description:
      "Formação técnica formal para transformar a curiosidade tecnológica acumulada em competência sólida de engenharia.",
  },
  {
    period: "2026",
    place: "Projetos próprios",
    role: "Automação & sistemas em produção",
    description:
      "Pipelines de dados, aplicações internas e participação num hackathon de defesa — a teoria a virar prática.",
  },
];

const projects = [
  {
    ref: "001",
    status: "Em produção",
    title: "Pipeline de briefing pré-mercado",
    period: "2026",
    description:
      "Workflow automatizado que recolhe dados de ações dos EUA antes da abertura do mercado e entrega um resumo diário via Telegram. Migrado de um agente de IA para um workflow determinístico em n8n, eliminando dependência de LLM.",
    stack: ["n8n", "Finnhub API", "Telegram Bot API"],
  },
  {
    ref: "002",
    status: "Em desenvolvimento",
    title: "Gestão de Alojamento Local",
    period: "2026",
    description:
      "Aplicação Android para gerir reservas de um negócio de Alojamento Local. Backend em Oracle com camada de middleware própria, com investigação de padrões de arquitetura SaaS.",
    stack: ["Kotlin", "Android", "Oracle DB"],
  },
  {
    ref: "003",
    status: "Em planeamento",
    title: "Servidor Proxmox para IA local",
    period: "2026",
    description:
      "Build de raiz de um servidor dedicado a virtualização, laboratório de desenvolvimento e inferência local de modelos de linguagem, com GPU RTX 4090.",
    stack: ["Proxmox", "Docker", "LLM inference"],
  },
  {
    ref: "004",
    status: "A preparar — out. 2026",
    title: "EUDIS Defence Hackathon",
    period: "15–17 out. 2026",
    description:
      "Participação no hackathon de defesa da Startup Leiria, em equipa com um especialista em hardware e robótica, num desafio real do setor de defesa em 48 horas.",
    stack: ["Prototipagem rápida", "Trabalho de equipa técnico"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="border-b border-ink/15 sticky top-0 bg-paper/90 backdrop-blur z-10">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <span className="font-display text-lg italic">Jorge</span>
          <nav className="hidden sm:flex gap-8 text-sm">
            <a href="#servicos" className="hover:text-brass transition-colors">O que faço</a>
            <a href="#percurso" className="hover:text-brass transition-colors">Percurso</a>
            <a href="#projetos" className="hover:text-brass transition-colors">Projetos</a>
            <a href="#contacto" className="hover:text-brass transition-colors">Contacto</a>
          </nav>
          
            href="#contacto"
            className="text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
          >
            Falar comigo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-content mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-20">
        <p className="text-brass text-sm mb-5">
          FINANÇAS · AUTOMAÇÃO · SISTEMAS PARA NEGÓCIOS
        </p>
        <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-3xl mb-7">
          Gestão financeira que aprendeu a construir
          <span className="italic"> a sua própria tecnologia.</span>
        </h1>
        <p className="text-lg leading-relaxed max-w-xl text-ink/80 mb-9">
          Vinte anos a gerir finanças de empresas industriais — em Portugal,
          Angola e Moçambique. Hoje, a mesma disciplina aplicada a construir
          os sistemas e automações que essas empresas precisam e não têm.
        </p>
        <div className="flex flex-wrap gap-4">
          
            href="#contacto"
            className="bg-ink text-paper px-6 py-3 text-sm hover:bg-brass transition-colors"
          >
            Falar sobre um projeto
          </a>
          
            href="#projetos"
            className="px-6 py-3 text-sm text-ink border border-ink/25 hover:border-ink transition-colors"
          >
            Ver projetos em curso
          </a>
        </div>
      </section>

      {/* O que faço */}
      <section id="servicos" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <p className="text-brass text-sm mb-3">O QUE FAÇO</p>
          <h2 className="font-display text-3xl mb-12 max-w-lg">
            Finanças e tecnologia ao serviço do mesmo objetivo: um negócio bem gerido.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {servicos.map((s) => (
              <div key={s.ref}>
                <p className="text-ink/40 text-sm mb-2 entry-number">
                  {s.ref} <span className="text-ink/40">{s.tag}</span>
                </p>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-ink/75 leading-relaxed text-[0.95rem]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Percurso */}
      <section id="percurso" className="border-t border-ink/15 bg-navy text-paper">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <p className="text-brass text-sm mb-3">PERCURSO</p>
          <h2 className="font-display text-3xl mb-12 max-w-lg">
            De diretor financeiro em três países a construir os sistemas que faltavam.
          </h2>
          <div className="border-t border-paper/20">
            {percurso.map((p) => (
              <div
                key={p.period + p.place}
                className="border-b border-paper/20 py-6 grid sm:grid-cols-12 gap-3 sm:gap-8"
              >
                <p className="sm:col-span-3 text-sm text-brass">{p.period}</p>
                <div className="sm:col-span-3">
                  <p className="font-display text-lg">{p.place}</p>
                  <p className="text-sm text-paper/60">{p.role}</p>
                </div>
                <p className="sm:col-span-6 text-paper/80 leading-relaxed text-[0.95rem]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <p className="text-brass text-sm mb-3">PROJETOS</p>
          <h2 className="font-display text-3xl mb-12 max-w-lg">
            Trabalho técnico em curso.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.ref}
                className="border border-ink/20 p-6 hover:border-ink/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-brass">{p.status}</span>
                  <span className="text-xs text-ink/45">{p.period}</span>
                </div>
                <h3 className="font-display text-xl mb-3">{p.title}</h3>
                <p className="text-ink/75 leading-relaxed text-[0.9rem] mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs border border-ink/25 px-2.5 py-1 text-ink/65"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-20 sm:py-28 text-center">
          <p className="text-brass text-sm mb-4">VAMOS FALAR</p>
          <h2 className="font-display text-3xl sm:text-5xl max-w-2xl mx-auto mb-8">
            Precisas de alguém que perceba de finanças e de sistemas ao mesmo tempo?
          </h2>
          <p className="text-ink/70 mb-10">
            Respondo diretamente — sem intermediários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="mailto:o-teu-email@dominio.pt"
              className="bg-ink text-paper px-7 py-3.5 text-sm hover:bg-brass transition-colors"
            >
              o-teu-email@dominio.pt
            </a>
            
              href="https://www.linkedin.com/in/o-teu-utilizador"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 text-sm border border-ink/25 hover:border-ink transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-6 flex justify-between text-xs text-ink/50">
          <span>Jorge — Leiria, Portugal</span>
          <span>Atualizado em 2026</span>
        </div>
      </footer>
    </main>
  );
}