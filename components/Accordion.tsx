"use client";

import { useState } from "react";
import { Plus } from "./Icons";
import Reveal from "./Reveal";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 80}>
            <div className={`rounded-2xl border transition-colors duration-500 ${isOpen ? "border-olive bg-white" : "border-ink/10 bg-white/60"}`}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base md:text-lg" aria-expanded={isOpen}>
                {item.q}
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${isOpen ? "rotate-45 bg-olive text-gold" : "bg-cream text-olive group-hover:bg-gold"}`}>
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden px-6 text-base text-muted">
                  <span className="block pb-6">{item.a}</span>
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
