"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

type Values = { name: string; email: string; phone: string; type: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", type: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  else if (!/^[\p{L} .'-]+$/u.test(v.name.trim())) e.name = "Name can only contain letters.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^\+?[\d\s()-]{7,15}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.type) e.type = "Please choose a project type.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

const base =
  "w-full rounded-xl border bg-white px-5 py-3.5 text-base outline-none transition-all placeholder:text-muted/70 focus:shadow-[0_0_0_4px_rgba(184,154,106,0.18)]";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = validate(values);
  const show = (k: keyof Values) => (touched[k] ? errors[k] : undefined);
  const field = (k: keyof Values) => `${base} ${show(k) ? "border-danger focus:border-danger" : "border-ink/10 focus:border-gold"}`;

  const bind = (k: keyof Values) => ({
    name: k,
    value: values[k],
    "aria-invalid": !!show(k),
    "aria-describedby": show(k) ? `${k}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value })),
    onBlur: () => setTouched((t) => ({ ...t, [k]: true })),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, type: true, message: true });
    if (Object.keys(errors).length) {
      const first = Object.keys(errors)[0];
      document.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSending(true);
    // No backend yet: simulate the request.
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues(empty);
      setTouched({});
    }, 900);
  };

  if (sent) {
    return (
      <div className="page-enter flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-olive text-2xl text-gold">✓</span>
        <h3 className="mt-6 text-2xl font-light">Thank you!</h3>
        <p className="mt-2 text-base text-muted">We&apos;ll be in touch within 24 hours.</p>
        <button onClick={() => setSent(false)} className="mt-8 rounded-full border border-gold px-6 py-2.5 text-sm text-olive transition-colors hover:bg-gold">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field id="name" error={show("name")}>
        <input {...bind("name")} id="name" autoComplete="name" placeholder="Your Name *" className={field("name")} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" error={show("email")}>
          <input {...bind("email")} id="email" type="email" autoComplete="email" placeholder="Your Email *" className={field("email")} />
        </Field>
        <Field id="phone" error={show("phone")}>
          <input {...bind("phone")} id="phone" type="tel" autoComplete="tel" placeholder="Your Phone" className={field("phone")} />
        </Field>
      </div>
      <Field id="type" error={show("type")}>
        <select {...bind("type")} id="type" className={`${field("type")} appearance-none ${values.type ? "" : "text-muted/70"}`}>
          <option value="" disabled>
            Project Type *
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Hospitality</option>
          <option>Consultation</option>
        </select>
      </Field>
      <Field id="message" error={show("message")}>
        <textarea {...bind("message")} id="message" rows={5} placeholder="Your Message *" className={`${field("message")} resize-none`} />
      </Field>
      <button
        type="submit"
        disabled={sending}
        className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pl-6 pr-2 text-base font-medium text-olive transition-all hover:-translate-y-0.5 hover:bg-gold-2 hover:shadow-[0_10px_30px_rgba(184,154,106,0.45)] disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send Message"}
        <span className="arrow-btn grid h-10 w-10 place-items-center rounded-full bg-olive text-gold">
          {sending ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold border-t-transparent" /> : <ArrowUpRight />}
        </span>
      </button>
    </form>
  );
}

function Field({ id, error, children }: { id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="fade-up mt-1.5 pl-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
