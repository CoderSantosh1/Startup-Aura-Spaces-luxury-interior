import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { assets, common, sections } from "@/data";

export const metadata: Metadata = { title: common.pageHeroes.faq.metaTitle };

const faqs = sections.FAQ.items;

export default function FaqPage() {
  return (
    <>
      <PageHero page="faq" />

      <section className="sec mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.5fr] md:px-10">
        <Reveal variant="wipe" className="hidden md:block">
          <div className="sticky top-28">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={assets.decor3} alt="" fill sizes="40vw" className="object-cover" />
            </div>
           
          </div>
        </Reveal>
        <Accordion items={faqs} />
      </section>

      <CtaBanner image={assets.living10} />
    </>
  );
}
