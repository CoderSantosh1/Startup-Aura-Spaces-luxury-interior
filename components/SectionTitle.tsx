import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, className = "" }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <Reveal className={className}>
      {eyebrow && <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
      <h2 className="text-4xl font-light tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}
