import Image from "next/image";
import { common } from "@/data";
import type { PageKey } from "@/types/category";
import Breadcrumb from "./Breadcrumb";
import SplitText from "./SplitText";

type Props = {
  /** Which page's hero content (title, subtitle, image, breadcrumb) to show from data/category.json */
  page: PageKey;
  children?: React.ReactNode;
};

export default function PageHero({ page, children }: Props) {
  const { title, subtitle, image, crumb } = common.pageHeroes[page];
  return (
    <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-olive text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 will-change-transform" style={{ animation: "page-hero-zoom 14s ease-in-out infinite alternate" }}>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        {/* Keep the left side dark enough for the title over a full-width photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-olive/90 via-olive/55 to-olive/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-transparent to-olive/40" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-24 ">
        <Breadcrumb items={[{ label: crumb }]} className="fade-up mb-6 " />
        <h1 className="text-4xl font-light leading-[1.02] tracking-tight md:text-5xl lg:text-6xl ">
          <SplitText text={title} />
        </h1>
        {subtitle && (
          <p className="fade-up mt-6 max-w-sm text-base text-gold md:text-lg" style={{ "--d": "600ms" } as React.CSSProperties}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="fade-up mt-8" style={{ "--d": "800ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
      {/* Keyframes live with the component so the zoom never depends on a cached global stylesheet */}
      <style>{`@keyframes page-hero-zoom{from{transform:scale(1)}to{transform:scale(1.1)}}`}</style>
      {/* <div className="scroll-cue absolute bottom-8 right-8 hidden h-12 w-7 rounded-full border border-white/40 md:block">
        <span className="absolute left-1/2 top-2 h-2 w-px -translate-x-1/2 bg-white" />
      </div> */}
    </section>
  );
}
