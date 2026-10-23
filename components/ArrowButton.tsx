import Link from "next/link";
import { ArrowUpRight } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

// light = gold pill (on dark/photo backgrounds), dark = olive pill (on cream backgrounds)
export const pill = {
  light: {
    body: "bg-gold text-olive hover:bg-gold-2 hover:shadow-[0_10px_30px_rgba(184,154,106,0.45)]",
    dot: "bg-olive text-gold",
  },
  dark: {
    body: "bg-olive text-cream hover:bg-olive-2 hover:shadow-[0_10px_30px_rgba(38,42,33,0.35)]",
    dot: "bg-gold text-olive",
  },
};

export default function ArrowButton({ href, children, tone = "light", className = "" }: Props) {
  const s = pill[tone];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 ${s.body} ${className}`}
    >
      {children}
      <span className={`arrow-btn grid h-9 w-9 place-items-center rounded-full ${s.dot}`}>
        <ArrowUpRight />
      </span>
    </Link>
  );
}
