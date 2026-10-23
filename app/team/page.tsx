import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamGrid from "@/components/TeamGrid";
import { contact, img, team } from "@/lib/data";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero title={"Our\nTeam"} subtitle="Talented designers and creative professionals." image={img.office2} />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <TeamGrid team={team} />
      </section>

      <section className="relative isolate overflow-hidden bg-olive px-5 py-28 text-center text-white">
        <Image src={img.living10} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <Reveal>
          <h2 className="text-4xl font-light md:text-6xl">Join Our Studio</h2>
          <p className="mt-4 text-base text-white/70">We&apos;re always looking for creative minds.</p>
          <a href={`mailto:${contact.email}`} className="mt-10 inline-block rounded-full border border-white/50 px-8 py-3 text-base transition-colors hover:bg-white hover:text-ink">
            {contact.email}
          </a>
        </Reveal>
      </section>

      <CtaBanner image={img.decor2} />
    </>
  );
}
