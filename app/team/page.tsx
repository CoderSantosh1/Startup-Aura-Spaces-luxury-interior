import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamGrid from "@/components/TeamGrid";
import { assets, common, sections, site } from "@/data";

export const metadata: Metadata = { title: common.pageHeroes.team.metaTitle };

const team = sections.Team.items;

export default function TeamPage() {
  return (
    <>
      <PageHero page="team" />

      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <TeamGrid team={team} />
      </section>

      <section className="relative isolate overflow-hidden band bg-olive px-5 text-center text-white">
        <Image src={assets.living10} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <Reveal>
          <h2 className="text-4xl font-light md:text-6xl">Join Our Studio</h2>
          <p className="mt-4 text-base text-white/70">We&apos;re always looking for creative minds.</p>
          <a href={`mailto:${site.email}`} className="mt-10 inline-block rounded-full border border-gold/60 px-8 py-3 text-base text-gold transition-colors hover:bg-gold hover:text-olive">
            {site.email}
          </a>
        </Reveal>
      </section>

      <CtaBanner image={assets.decor2} />
    </>
  );
}
