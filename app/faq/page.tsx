import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import ArrowButton from "@/components/ArrowButton";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { faqs, img } from "@/lib/data";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero title={"Frequently\nAsked Questions"} subtitle="Answers about our interior design services." image={img.living4} />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.5fr] md:px-10 md:py-28">
        <Reveal variant="wipe" className="hidden md:block">
          <div className="sticky top-28">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={img.decor3} alt="" fill sizes="40vw" className="object-cover" />
            </div>
           
          </div>
        </Reveal>
        <Accordion items={faqs} />
      </section>

      <CtaBanner image={img.living10} />
    </>
  );
}
