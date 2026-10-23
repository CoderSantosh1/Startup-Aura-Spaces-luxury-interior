"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import FilterTabs from "./FilterTabs";
import { Chevron, Plus } from "./Icons";
import Reveal from "./Reveal";

type Item = { src: string; tag: string };

const tabs = ["All", "Living Room", "Bedroom", "Kitchen", "Office"];
const spans = ["row-span-2", "", "", "row-span-2", "", "", "", "row-span-2"];

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = active === "All" ? items : items.filter((i) => i.tag === active);

  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <FilterTabs tabs={tabs} active={active} onChange={setActive} />
      <div key={active} className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {list.map((item, i) => (
          <Reveal key={item.src + i} delay={(i % 4) * 90} dir="zoom" className={spans[i % spans.length]}>
            <button onClick={() => setOpen(i)} className="zoom-img group relative block h-full w-full overflow-hidden rounded-2xl">
              <Image src={item.src} alt={item.tag} fill sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" className="object-cover" />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-sm">{item.tag}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink">
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div className="page-enter fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image key={list[open].src} src={list[open].src.replace("w=1600", "w=2400")} alt={list[open].tag} fill sizes="100vw" className="page-enter object-contain" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-ink">
            <Chevron dir="left" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-ink">
            <Chevron />
          </button>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-6 top-6 grid h-11 w-11 rotate-45 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-ink">
            <Plus />
          </button>
          <span className="absolute bottom-6 text-sm tracking-widest text-white/60">
            {open + 1} / {list.length}
          </span>
        </div>
      )}
    </>
  );
}
