import { Reveal } from "@/components/Reveal";

const BUILD = [
  {
    title: "Web products",
    description:
      "Marketing sites, client portals, and full web applications — fast, accessible, and mobile-first by default.",
  },
  {
    title: "Dashboards & internal tools",
    description:
      "Analytics dashboards and operations tools that turn scattered data into something a team can actually act on.",
  },
  {
    title: "Integrations & automation",
    description:
      "APIs, webhooks, and workflow automation that connect the tools you already use — ClickUp, Telegram, spreadsheets, CRMs.",
  },
  {
    title: "AI-assisted tools",
    description:
      "Practical AI features built into real workflows: assistants, summarizers, classifiers — measured by usefulness, not hype.",
  },
  {
    title: "Telegram bots",
    description:
      "Bots that handle real operations — notifications, approvals, reporting — where your team already spends its day.",
  },
  {
    title: "Rapid prototypes",
    description:
      "A working first version in days, not months. Something you can open, click, and put in front of real users.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brief",
    description:
      "We start with the problem, not the feature list. One conversation to define what the first working version must prove.",
  },
  {
    step: "02",
    title: "Prototype",
    description:
      "Within days the project goes live at its own *.wetrio.dev address. Not a mockup — a real URL you can open and test.",
  },
  {
    step: "03",
    title: "Iterate",
    description:
      "You click, we ship. Short feedback loops on a live product, so every decision is made against something real.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "When the prototype earns it, we harden it for production — your domain, your infrastructure, your users.",
  },
];

const PRINCIPLES = [
  {
    title: "Live, not slideware",
    description:
      "Every project in the lab exists as a working deployment from week one. We demo URLs, not decks.",
  },
  {
    title: "Design discipline included",
    description:
      "The lab shares one design language with WeTrio Agency. Engineering speed never excuses a careless interface.",
  },
  {
    title: "Small surface, sharp focus",
    description:
      "We build the smallest thing that answers the question, then grow it. No six-month roadmaps before the first click.",
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
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="text-sm font-semibold tracking-wide">
            WeTrio<span className="text-accent"> Dev Lab</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#build" className="transition-colors hover:text-foreground">
              What we build
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#lab" className="transition-colors hover:text-foreground">
              The lab
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <a
            href="https://wetr.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            wetr.io <ArrowIcon />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24 md:px-8">
        <Reveal as="p" className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          WeTrio Development Lab
        </Reveal>
        <Reveal
          as="h1"
          delay={0.15}
          className="max-w-4xl text-4xl font-medium leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Where ideas become{" "}
          <em className="font-serif font-medium italic text-accent">working</em>{" "}
          products.
        </Reveal>
        <Reveal
          as="p"
          delay={0.3}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          The engineering arm of WeTrio. We design, prototype, and ship web
          products, dashboards, and automations — fast, and in the open. Every
          project lives at its own{" "}
          <span className="text-foreground">*.wetrio.dev</span> address from
          the first week.
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
        <Reveal as="h2" className="text-3xl font-medium md:text-5xl">
          Built in the lab,{" "}
          <em className="font-serif font-medium italic text-accent">used</em> in
          the real world.
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          We take on the work between an idea and a product nobody wants to
          turn off.
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUILD.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.05 * i}
              className="rounded-card border border-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
          <Reveal as="h2" className="text-3xl font-medium md:text-5xl">
            From brief to live URL in{" "}
            <em className="font-serif font-medium italic text-accent">days.</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            The lab runs on short loops and live software. Here is the whole
            process — no hidden phases.
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={0.08 * i} className="bg-card p-8">
                <span className="text-sm font-medium text-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The lab / subdomains */}
      <section id="lab" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal as="h2" className="text-3xl font-medium md:text-5xl">
              One domain.{" "}
              <em className="font-serif font-medium italic text-accent">
                Many
              </em>{" "}
              experiments.
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              wetrio.dev is our proving ground. Every prototype, internal tool,
              and client experiment gets its own subdomain — a real deployment
              with real data flows, not a staging server nobody can reach.
            </Reveal>
            <Reveal
              as="p"
              delay={0.2}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              When a project proves itself here, it graduates to production.
              Until then, it lives where we can break it safely.
            </Reveal>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {["project", "dashboard", "bot-console", "your-idea"].map(
              (name, i) => (
                <Reveal
                  key={name}
                  delay={0.1 * i}
                  className="flex items-center justify-between rounded-card border border-border bg-card px-6 py-5 font-mono text-sm"
                >
                  <span>
                    <span className="text-accent">{name}</span>
                    <span className="text-muted-foreground">.wetrio.dev</span>
                  </span>
                  <span
                    className={
                      name === "your-idea"
                        ? "text-xs uppercase tracking-wider text-accent"
                        : "text-xs uppercase tracking-wider text-muted-foreground"
                    }
                  >
                    {name === "your-idea" ? "next" : "live"}
                  </span>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
          <Reveal as="h2" className="text-3xl font-medium md:text-5xl">
            Engineering with{" "}
            <em className="font-serif font-medium italic text-accent">
              editorial
            </em>{" "}
            discipline.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            The lab is run by the same team behind{" "}
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
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="rounded-card border border-border bg-card p-10 md:p-16">
          <Reveal as="p" className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Ready to start?
          </Reveal>
          <Reveal as="h2" delay={0.1} className="max-w-3xl text-3xl font-medium md:text-5xl">
            Let&apos;s build the{" "}
            <em className="font-serif font-medium italic text-accent">first</em>{" "}
            version.
          </Reveal>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Tell us what you are trying to prove. We will tell you what the
            smallest working version looks like — and when you can click it.
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:start@wetr.io"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              start@wetr.io
            </a>
            <a
              href="https://t.me/wetr_io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-muted"
            >
              Telegram <ArrowIcon />
            </a>
            <a
              href="https://wa.me/48506782768"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-muted"
            >
              WhatsApp <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
          <p>
            WeTrio Development Lab — the engineering arm of{" "}
            <a
              href="https://wetr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-accent"
            >
              WeTrio Agency
            </a>
            .
          </p>
          <p>© {new Date().getFullYear()} WeTrio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
