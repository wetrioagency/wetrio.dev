import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const BUILD = [
  {
    title: "SaaS platforms",
    description:
      "Multi-tenant products built for subscription businesses: auth, billing, roles, admin — the full platform, not a demo.",
  },
  {
    title: "Web applications",
    description:
      "Client portals, marketplaces, and business-critical apps — fast, accessible, and mobile-first by default.",
  },
  {
    title: "Dashboards & internal tools",
    description:
      "Analytics dashboards and operations tools that turn scattered data into something a team can actually act on.",
  },
  {
    title: "AI features & automation",
    description:
      "Practical AI built into real workflows: assistants, summarizers, classifiers — measured by usefulness, not hype.",
  },
  {
    title: "Integrations & APIs",
    description:
      "APIs, webhooks, and workflow automation that connect the tools your business already runs on.",
  },
  {
    title: "MVPs & prototypes",
    description:
      "A working first version in weeks, not quarters. Something you can put in front of investors and real users.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with the business problem, not the feature list. One focused sprint to define what the product must prove.",
  },
  {
    step: "02",
    title: "Design & prototype",
    description:
      "Architecture and interface take shape together. Within weeks you click a working prototype — not a slide deck.",
  },
  {
    step: "03",
    title: "Build & iterate",
    description:
      "Short release cycles on a live product. Every decision is made against real software, with you in the loop.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "We harden the product for production and stay on after launch — monitoring, iterations, and new features.",
  },
];

const CAPABILITIES = [
  "Product strategy & scoping",
  "UX/UI & product design",
  "Full-stack engineering",
  "Cloud infrastructure & DevOps",
  "Data, analytics & AI",
  "Post-launch support",
];

const PRINCIPLES = [
  {
    title: "Working software, not slideware",
    description:
      "Every project exists as a live deployment from the first weeks. We demo URLs, not decks.",
  },
  {
    title: "Design discipline included",
    description:
      "The Lab shares one design language with WeTrio Agency. Engineering speed never excuses a careless interface.",
  },
  {
    title: "Senior, small, accountable",
    description:
      "A compact team that owns the result end to end. No hand-offs between departments, no six-month roadmaps before the first click.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 md:px-8">
        <Reveal as="p" className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          WeTrio Development Lab
        </Reveal>
        <Reveal
          as="h1"
          delay={0.15}
          className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          IT & SaaS products,
          <br />
          <span className="whitespace-nowrap">
            built to <em className="accent-italic text-accent">ship.</em>
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.3}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          WeTrio Development Lab is a product development agency. We take
          digital products from idea to production — architecture, design,
          engineering, and launch — as one accountable team.
        </Reveal>
        <Reveal delay={0.45} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
          <a
            href="#build"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-muted"
          >
            See what we build
          </a>
        </Reveal>
      </section>

      {/* What we build */}
      <section id="build" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <Reveal as="h2" className="text-3xl font-medium tracking-tight md:text-5xl">
          Products people{" "}
          <em className="accent-italic text-accent">use,</em>{" "}
          not just launch.
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          We take on the work between an idea and a product nobody wants to
          turn off.
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUILD.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.05 * i}
              className="rounded-card border border-border bg-card p-8 transition-colors duration-300 hover:border-muted"
            >
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
          <Reveal as="h2" className="text-3xl font-medium tracking-tight md:text-5xl">
            From first brief to{" "}
            <em className="accent-italic text-accent">
              production.
            </em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Short loops, live software, no hidden phases. Here is the whole
            process.
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={0.08 * i} className="bg-card p-8">
                <span className="text-sm font-medium text-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal as="h2" className="text-3xl font-medium tracking-tight md:text-5xl">
              Full cycle, under{" "}
              <em className="accent-italic text-accent">one</em>{" "}
              roof.
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Strategy, design, and engineering work as a single team — so
              nothing gets lost in hand-offs between an agency, a studio, and a
              contractor.
            </Reveal>
            <Reveal
              as="p"
              delay={0.2}
              className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              You get one partner accountable for the whole product: from the
              first architectural decision to the day it earns its keep in
              production.
            </Reveal>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {CAPABILITIES.map((name, i) => (
              <Reveal
                key={name}
                delay={0.06 * i}
                className="flex items-center justify-between rounded-card border border-border bg-card px-6 py-5 text-base font-medium transition-colors duration-300 hover:border-muted"
              >
                <span>{name}</span>
                <span className="text-accent">
                  <ArrowIcon />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
          <Reveal as="h2" className="text-3xl font-medium tracking-tight md:text-5xl">
            Engineering with{" "}
            <em className="accent-italic text-accent">
              editorial
            </em>{" "}
            discipline.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            The Lab is run by the same team behind{" "}
            <a
              href="https://wetr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            >
              WeTrio Agency
            </a>
            , a B2B design studio. The same standards apply to code.
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRINCIPLES.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / contact form */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 rounded-card border border-border bg-card p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
          {/* Left: pitch + direct contacts */}
          <div className="flex flex-col">
            <Reveal as="p" className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Ready to start?
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-3xl font-medium tracking-tight md:text-5xl">
              Let&apos;s build the{" "}
              <em className="accent-italic text-accent">first</em> version.
            </Reveal>
            <Reveal
              as="p"
              delay={0.2}
              className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Tell us about your product. We will tell you what the smallest
              version worth building looks like — and when you can click it.
            </Reveal>
            <Reveal delay={0.3} className="mt-auto pt-10">
              <p className="text-sm text-muted-foreground">Prefer a quick message?</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:start@wetr.io"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
                >
                  start@wetr.io
                </a>
                <a
                  href="https://t.me/wetr_io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
                >
                  Telegram <ArrowIcon />
                </a>
                <a
                  href="https://wa.me/48506782768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
                >
                  WhatsApp <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
          <p>
            WeTrio Development Lab — IT & SaaS product development by{" "}
            <a
              href="https://wetr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-accent"
            >
              WeTrio
            </a>
            .
          </p>
          <p>© {new Date().getFullYear()} WeTrio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
