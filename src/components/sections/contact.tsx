"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import {
  validateContactForm,
  type ContactFieldErrors,
} from "@/lib/validate-contact";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass = (hasError: boolean) =>
  cn(
    "mt-4 w-full border-b bg-transparent py-2 text-sm text-foreground placeholder:text-muted focus:outline-none",
    hasError
      ? "border-error focus:border-error"
      : "border-border focus:border-foreground"
  );

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm text-error" role="alert">
      {message}
    </p>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const clearFieldError = (field: keyof ContactFieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setFormError(null);
    if (formState === "error") setFormState("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormState("idle");
      const firstInvalid = (["name", "email", "message"] as const).find((f) => errors[f]);
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

    setFieldErrors({});
    setFormState("submitting");

    try {
      // Replace with your API route when ready
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
      setFormError("Something went wrong. Try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-section" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="section-label">{personal.sections.contact.label}</span>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 id="contact-heading" className="mt-8 font-display text-display-md">
                {personal.sections.contact.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-10 text-[15px] leading-[1.8] text-muted">
                {personal.sections.contact.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-14 space-y-8 border-t border-border pt-12">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="mt-3 block text-lg text-foreground underline decoration-border underline-offset-[6px] hover:decoration-foreground"
                  >
                    {personal.email}
                  </a>
                </div>

                {personal.phone && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      Phone
                    </p>
                    <a
                      href={`tel:${personal.phone.replace(/\s/g, "")}`}
                      className="mt-3 block text-foreground"
                    >
                      {personal.phone}
                    </a>
                  </div>
                )}

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    Location
                  </p>
                  <p className="mt-3 text-foreground">{personal.location}</p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    Availability
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 bg-success" aria-hidden="true" />
                    {personal.availability}
                  </p>
                </div>

                {personal.resumeUrl && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      Resume
                    </p>
                    <a
                      href={personal.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link mt-3"
                    >
                      Download CV
                    </a>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-border bg-card p-8 sm:p-12"
              aria-label="Contact form"
            >
              <div className="space-y-10">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    onChange={() => clearFieldError("name")}
                    className={fieldClass(Boolean(fieldErrors.name))}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <FieldError id="name-error" message={fieldErrors.name} />
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    onChange={() => clearFieldError("email")}
                    className={fieldClass(Boolean(fieldErrors.email))}
                    placeholder="you@company.com"
                  />
                  {fieldErrors.email && (
                    <FieldError id="email-error" message={fieldErrors.email} />
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    onChange={() => clearFieldError("message")}
                    className={cn(fieldClass(Boolean(fieldErrors.message)), "resize-none")}
                    placeholder="Tell me about the project"
                  />
                  {fieldErrors.message && (
                    <FieldError id="message-error" message={fieldErrors.message} />
                  )}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "submitting" || formState === "success"}
                  >
                    {formState === "idle" && "Send message"}
                    {formState === "submitting" && "Sending…"}
                    {formState === "success" && "Sent"}
                    {formState === "error" && "Send message"}
                  </Button>
                  {formState === "success" && (
                    <p className="text-sm text-success" role="status">
                      Message received.
                    </p>
                  )}
                </div>

                {formError && (
                  <p className="text-sm text-error" role="alert">
                    {formError}
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-foreground">{personal.name}</p>
        <p>&copy; {currentYear}</p>
        <a href="#home" className="transition-colors duration-200 hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
