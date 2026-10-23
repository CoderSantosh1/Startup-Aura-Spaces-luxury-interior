"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

const field =
  "w-full rounded-xl border border-ink/10 bg-white px-5 py-3.5 text-base outline-none transition-all placeholder:text-muted/70 focus:border-olive focus:shadow-[0_0_0_4px_rgba(38,42,33,0.08)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="page-enter flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-olive text-2xl text-white">✓</span>
        <h3 className="mt-6 text-2xl font-light">Thank you!</h3>
        <p className="mt-2 text-base text-muted">We&apos;ll be in touch within 24 hours.</p>
        <button onClick={() => setSent(false)} className="mt-8 text-sm underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <input required name="name" placeholder="Your Name" className={field} />
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="email" name="email" placeholder="Your Email" className={field} />
        <input type="tel" name="phone" placeholder="Your Phone" className={field} />
      </div>
      <select name="type" defaultValue="" className={`${field} appearance-none`}>
        <option value="" disabled>
          Project Type
        </option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Hospitality</option>
        <option>Consultation</option>
      </select>
      <textarea name="message" rows={5} placeholder="Your Message" className={`${field} resize-none`} />
      <button type="submit" className="group flex w-full items-center justify-between rounded-full bg-olive py-2 pl-6 pr-2 text-base text-white transition-colors hover:bg-olive-2">
        Send Message
        <span className="arrow-btn grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
          <ArrowUpRight />
        </span>
      </button>
    </form>
  );
}
