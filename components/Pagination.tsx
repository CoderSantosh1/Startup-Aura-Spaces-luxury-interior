"use client";

import { useRef, useState } from "react";
import { Chevron } from "./Icons";

export function usePaged<T>(items: T[], perPage: number) {
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const start = (page - 1) * perPage;

  const goTo = (p: number) => {
    setPage(Math.min(Math.max(1, p), pages));
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { page, pages, start, goTo, top, visible: items.slice(start, start + perPage) };
}

type Props = {
  page: number;
  pages: number;
  onChange: (p: number) => void;
  total: number;
  start: number;
  shown: number;
};

export default function Pagination({ page, pages, onChange, total, start, shown }: Props) {
  if (pages <= 1) return null;
  const btn =
    "grid h-12 w-12 place-items-center rounded-full border text-base transition-all duration-300 disabled:pointer-events-none disabled:opacity-30";

  return (

<nav
  aria-label="Pagination"
  className="mt-16 flex flex-col items-center justify-center gap-5 border-t border-ink/10 pt-10 sm:flex-row sm:justify-center"
>
  <div className="flex items-center justify-center gap-2">
    <button
      onClick={() => onChange(page - 1)}
      disabled={page === 1}
      aria-label="Previous page"
      className={`${btn} border-ink/15 hover:border-olive hover:bg-olive hover:text-gold`}
    >
      <Chevron dir="left" />
    </button>

    {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
      <button
        key={p}
        onClick={() => onChange(p)}
        aria-label={`Page ${p}`}
        aria-current={p === page ? "page" : undefined}
        className={`${btn} ${
          p === page
            ? "scale-110 border-olive bg-olive text-gold shadow-lg"
            : "border-ink/15 hover:border-olive"
        }`}
      >
        {String(p).padStart(2, "0")}
      </button>
    ))}

    <button
      onClick={() => onChange(page + 1)}
      disabled={page === pages}
      aria-label="Next page"
      className={`${btn} border-ink/15 hover:border-olive hover:bg-olive hover:text-gold`}
    >
      <Chevron />
    </button>
  </div>
</nav>

  );
}
