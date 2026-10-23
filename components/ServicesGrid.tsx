"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import Pagination, { usePaged } from "./Pagination";
import Reveal from "./Reveal";

type Service = { slug: string; title: string; text: string; image: string };

export default function ServicesGrid({ services, perPage = 6 }: { services: Service[]; perPage?: number }) {
  const { page, pages, start, goTo, top, visible } = usePaged(services, perPage);

  return (
    <div ref={top} className="scroll-mt-28">
      <div key={page} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 140}>
            <Link href="/contact" className="group block">
              <div className="zoom-img relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                  {String(start + i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-base text-muted">{s.text}</p>
                </div>
                <span className="arrow-btn grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Pagination page={page} pages={pages} onChange={goTo} total={services.length} start={start} shown={visible.length} />
    </div>
  );
}
