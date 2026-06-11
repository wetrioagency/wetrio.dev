"use client";

import { useState } from "react";

const SERVICES = [
  { id: "saas", label: "SaaS platform" },
  { id: "webapp", label: "Web application" },
  { id: "dashboard", label: "Dashboard / internal tool" },
  { id: "ai", label: "AI features & automation" },
  { id: "mvp", label: "MVP / prototype" },
  { id: "other", label: "Other" },
];

const CONTACT_EMAIL = "start@wetr.io";

const fieldBase =
  "w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent";

function ChevronIcon({ open }: { open: boolean }) {
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
      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: boolean }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: { [k: string]: boolean } = {
      name: !name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      description: !description.trim(),
    };
    setErrors(next);
    if (next.name || next.email || next.description) return;

    const serviceLabel =
      SERVICES.find((s) => s.id === service)?.label ?? "Not specified";
    const subject = `New project enquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${serviceLabel}`,
      "",
      "Project:",
      description,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm text-muted-foreground">
          Full name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={`${fieldBase} ${errors.name ? "border-red-500/60" : "border-border"}`}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm text-muted-foreground">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`${fieldBase} ${errors.email ? "border-red-500/60" : "border-border"}`}
        />
      </div>

      {/* Service */}
      <div className="relative">
        <label htmlFor="contact-service" className="mb-2 block text-sm text-muted-foreground">
          Service
        </label>
        <button
          id="contact-service"
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`${fieldBase} border-border flex items-center justify-between ${
            service ? "text-foreground" : "text-muted-foreground/70"
          }`}
        >
          <span>
            {service ? SERVICES.find((s) => s.id === service)?.label : "Choose a service"}
          </span>
          <ChevronIcon open={open} />
        </button>
        {open && (
          <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    setService(s.id);
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-left text-base transition-colors hover:bg-muted/40"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="contact-description" className="mb-2 block text-sm text-muted-foreground">
          Project description
        </label>
        <textarea
          id="contact-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Briefly describe your product, goals, and timeline..."
          rows={4}
          className={`${fieldBase} resize-none ${
            errors.description ? "border-red-500/60" : "border-border"
          }`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Send enquiry
      </button>
    </form>
  );
}
