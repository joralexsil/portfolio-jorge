const projects = [
  {
    ref: "001",
    status: "Em produção",
    title: "Pipeline de briefing pré-mercado",
    period: "2026",
    description:
      "Workflow automatizado que recolhe dados de ações dos EUA antes da abertura do mercado e entrega um resumo diário via Telegram. Migrado de um agente de IA para um workflow determinístico em n8n, eliminando dependência de LLM e tornando o resultado previsível.",
    stack: ["n8n", "Finnhub API", "Telegram Bot API"],
    link: undefined,
  },
  {
    ref: "002",
    status: "Em desenvolvimento",
    title: "Gestão de Alojamento Local",
    period: "2026",
    description:
      "Aplicação Android para gerir reservas de um negócio de Alojamento Local. Backend em Oracle com camada de middleware própria, com investigação de padrões de arquitetura SaaS para suportar crescimento futuro.",
    stack: ["Kotlin", "Android", "Oracle DB"],
    link: undefined,
  },
  {
    ref: "003",
    status: "Em planeamento",
    title: "Servidor Proxmox para IA local",
    period: "2026",
    description:
      "Build de raiz de um servidor dedicado para virtualização, laboratório de desenvolvimento e inferência local de modelos de linguagem. GPU RTX 4090 (24GB) como núcleo de computação, a juntar-se ao homelab existente.",
    stack: ["Proxmox", "Docker", "LLM inference"],
    link: undefined,
  },
  {
    ref: "004",
    status: "A preparar — out. 2026",
    title: "EUDIS Defence Hackathon",
    period: "15–17 out. 2026",
    description:
      "Participação no hackathon de defesa da Startup Leiria, em equipa com um especialista em hardware e robótica, a desenvolver uma solução para um desafio real do setor de defesa em 48 horas.",
    stack: ["Prototipagem rápida", "Trabalho de equipa técnico"],
    link: undefined,
  },
];

const stack = [
  {
    group: "Automação & dados",
    items: ["Python", "SQL", "n8n", "APIs REST"],
  },
  {
    group: "Mobile & backend",
    items: ["Kotlin", "Android", "Oracle DB", "Node.js"],
  },
  {
    group: "Infraestrutura & IA local",
    items: ["Docker", "Proxmox", "Linux", "Inferência local de LLMs"],
  },
  {
    group: "Negócio & finanças",
    items: ["Análise financeira", "Excel / VBA", "Power BI", "Compliance salarial"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="border-b border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <span className="font-display text-lg italic">Jorge</span>
          <nav className="hidden sm:flex gap-8 text-sm">
            <a href="#sobre" className="hover:text-brass transition-colors">Sobre</a>
            <a href="#registos" className="hover:text-brass transition-colors">Projetos</a>
            <a href="#stack" className="hover:text-brass transition-colors">Ferramentas</a>
            <a href="#contacto" className="hover:text-brass transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-content mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-16 grid sm:grid-cols-5 gap-10 sm:gap-16">
        <div className="sm:col-span-3">
          <p className="text-brass text-sm mb-4">Gestão financeira & engenharia de sistemas</p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] mb-6">
            Vinte anos a gerir números de empresas industriais.
            <span className="italic"> Agora também a construí-los.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-md text-ink/80 mb-8">
            Diretor financeiro com passagem por Portugal, Moçambique e Angola,
            hoje a estudar Engenharia Informática para automatizar o que
            costumava fazer à mão — e a construir os sistemas que faltam.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#registos"
              className="border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
            >
              Ver projetos
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 text-sm text-brass hover:text-ink transition-colors"
            >
              Contactar →
            </a>
          </div>
        </div>

        <div className="sm:col-span-2 sm:pt-2">
          <div className="border border-ink/25">
            <dl>
              <div className="flex justify-between items-baseline px-5 py-4 border-b border-ink/15">
                <dt className="text-sm text-ink/60">Experiência em finanças</dt>
                <dd className="font-display text-xl entry-number">20 anos</dd>
              </div>
              <div className="flex justify-between items-baseline px-5 py-4 border-b border-ink/15">
                <dt className="text-sm text-ink/60">Diretor financeiro fora de Portugal</dt>
                <dd className="font-display text-xl entry-number">8 anos</dd>
              </div>
              <div className="flex justify-between items-baseline px-5 py-4 border-b border-ink/15">
                <dt className="text-sm text-ink/60">Projetos técnicos ativos</dt>
                <dd className="font-display text-xl entry-number">{projects.length}</dd>
              </div>
              <div className="flex justify-between items-baseline px-5 py-4">
                <dt className="text-sm text-ink/60">Formação atual</dt>
                <dd className="text-sm text-right">Eng. Informática, pós-laboral</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20 grid sm:grid-cols-5 gap-10">
          <h2 className="font-display text-2xl sm:col-span-2">Sobre</h2>
          <div className="sm:col-span-3 space-y-4 text-ink/85 leading-relaxed">
            <p>
              Sou gestor financeiro num grupo metalomecânico na região de
              Leiria, onde acumulo finanças corporativas, compliance salarial,
              análise de crédito e comunicação estratégica com investidores e
              credores. Antes disso, fui diretor financeiro em Moçambique e
              Angola durante oito anos, a gerir empresas industriais em
              contextos exigentes.
            </p>
            <p>
              Também sou, na prática, o responsável informal de TI do grupo —
              incluindo o site institucional e sistemas internos. Essa
              proximidade com a tecnologia levou-me a inscrever-me em
              Engenharia Informática, em regime pós-laboral, para
              transformar essa curiosidade em competência técnica sólida.
            </p>
            <p>
              O que me interessa não é programar por programar: é usar
              software para resolver problemas reais de negócio — automação
              de processos financeiros, sistemas internos, e ferramentas que
              substituem trabalho manual repetitivo.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos — livro de registos */}
      <section id="registos" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <h2 className="font-display text-2xl mb-2">Registo de projetos</h2>
          <p className="text-ink/60 text-sm mb-10">
            Trabalho técnico em curso, por ordem de registo.
          </p>

          <div className="border-t border-ink/25">
            {projects.map((p) => (
              <article
                key={p.ref}
                className="border-b border-ink/25 py-8 grid sm:grid-cols-12 gap-4 sm:gap-8"
              >
                <div className="sm:col-span-2">
                  <p className="font-display text-2xl entry-number text-ink/40">
                    N.º {p.ref}
                  </p>
                  <p className="text-xs text-brass mt-1">{p.status}</p>
                  <p className="text-xs text-ink/50 mt-1">{p.period}</p>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="font-display text-xl mb-2">{p.title}</h3>
                  <p className="text-ink/80 leading-relaxed text-[0.95rem]">
                    {p.description}
                  </p>
                </div>
                <div className="sm:col-span-3 flex sm:flex-col flex-wrap gap-2 content-start">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs border border-ink/25 px-2.5 py-1 text-ink/70 self-start"
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

      {/* Stack */}
      <section id="stack" className="border-t border-ink/15 bg-navy text-paper">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <h2 className="font-display text-2xl mb-10">Ferramentas de trabalho</h2>
          <div className="grid sm:grid-cols-4 gap-10">
            {stack.map((group) => (
              <div key={group.group}>
                <p className="text-brass text-sm mb-4">{group.group}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-paper/85 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-ink/15">
        <div className="max-w-content mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <div className="sm:max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              Vamos falar de um projeto ou de uma oportunidade.
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8">
              Respondo diretamente — sem intermediários e sem formulários
              desnecessários.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:o-teu-email@dominio.pt"
                className="text-lg border-b border-brass w-fit hover:text-brass transition-colors"
              >
                o-teu-email@dominio.pt
              </a>
              <a
                href="https://www.linkedin.com/in/o-teu-utilizador"
                target="_blank"
                rel="noreferrer"
                className="text-lg border-b border-ink/30 w-fit hover:text-brass hover:border-brass transition-colors"
              >
                LinkedIn →
              </a>
            </div>
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
