"use client";

import Image from "next/image";
import { Instagram, LinkedIn } from "./Icons";
import Pagination, { usePaged } from "./Pagination";
import Reveal from "./Reveal";

type Member = { name: string; role: string; image: string };

export default function TeamGrid({ team, perPage = 6 }: { team: Member[]; perPage?: number }) {
  const { page, pages, start, goTo, top, visible } = usePaged(team, perPage);

  return (
    <div ref={top} className="scroll-mt-28">
      <div key={page} className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
        {visible.map((m, i) => (
          <Reveal key={m.name} delay={(i % 3) * 140}>
            <div className="group">
              <div className="zoom-img relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                <Image src={m.image} alt={m.name} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover grayscale-[30%] transition-[filter] duration-700 group-hover:grayscale-0" />
                <div className="absolute inset-x-4 bottom-4 flex translate-y-6 justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {[Instagram, LinkedIn].map((Icon, k) => (
                    <a key={k} href="#" aria-label={`${m.name} social`} className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-olive hover:text-white">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Pagination page={page} pages={pages} onChange={goTo} total={team.length} start={start} shown={visible.length} />
    </div>
  );
}
