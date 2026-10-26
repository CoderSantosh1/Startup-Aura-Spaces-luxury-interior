import Image from "next/image";
import { common } from "@/data";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";

const { cta } = common;

export default function CtaBanner({ image = cta.image }: { image?: string }) {
  return (
    <section className="relative isolate overflow-hidden band bg-olive text-center text-white">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive/70 via-olive/40 to-olive/80" />
      <div className="px-5">
        <Reveal>
          <h2 className="text-4xl font-light tracking-tight md:text-6xl">{cta.title}</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 text-base text-white/70">{cta.text}</p>
        </Reveal>
        <Reveal delay={300} className="mt-10">
          <ArrowButton href="/contact">{cta.buttonLabel}</ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
