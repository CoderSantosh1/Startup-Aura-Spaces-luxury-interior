import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import SplitText from "./SplitText";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  /** Breadcrumb label for this page; defaults to the title on one line. */
  crumb?: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, subtitle, image, crumb, children }: Props) {
  return (
    <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-olive text-white">
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[62%]">
        <div className="kenburns absolute inset-0">
          <Image src={image} alt="" fill priority sizes="(min-width:768px) 62vw, 100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-olive via-olive/60 to-transparent md:via-olive/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-transparent to-olive/40" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-24">
        <Breadcrumb items={[{ label: crumb ?? title.replace(/\n/g, " ") }]} className="fade-up mb-6" />
        <h1 className="text-4xl font-light leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
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
      {/* <div className="scroll-cue absolute bottom-8 right-8 hidden h-12 w-7 rounded-full border border-white/40 md:block">
        <span className="absolute left-1/2 top-2 h-2 w-px -translate-x-1/2 bg-white" />
      </div> */}
    </section>
  );
}
