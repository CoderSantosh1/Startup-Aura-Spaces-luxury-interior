import type { Metadata } from "next";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServicesGrid from "@/components/ServicesGrid";
import { img, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" title={"Our\nServices"} subtitle="Complete interior solutions for homes, offices and hospitality." image={img.living2} />

      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <ServicesGrid services={services} />
      </section>

      {/* Alternating feature banners */}
      {services.slice(0, 2).map((s, i) => (
        <section key={s.slug} className={`grid items-stretch md:grid-cols-2 ${i % 2 ? "bg-sand" : "bg-olive text-white"}`}>
          <Reveal variant="wipe" className={`relative min-h-[60vh] ${i % 2 ? "md:order-2" : ""}`}>
            <Image src={i ? img.office2 : img.living3} alt={s.title} fill sizes="50vw" className="object-cover" />
          </Reveal>
          <div className="band flex items-center px-8 md:px-16">
            <Reveal dir={i % 2 ? "left" : "right"}>
              <p className={`text-sm uppercase tracking-[0.25em] ${i % 2 ? "text-muted" : "text-gold"}`}>Signature</p>
              <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">{s.title}</h2>
              <p className={`mt-4 max-w-sm text-base ${i % 2 ? "text-muted" : "text-white/60"}`}>{s.text}</p>
              <ul className="mt-8 space-y-3 text-base">
                {["Space planning", "3D visualization", "Material curation", "On-site execution"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold" /> {f}
                  </li>
                ))}
              </ul>
              <ArrowButton href={`/services/${s.slug}`} tone={i % 2 ? "dark" : "light"} className="mt-10">
                View Details
              </ArrowButton>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
