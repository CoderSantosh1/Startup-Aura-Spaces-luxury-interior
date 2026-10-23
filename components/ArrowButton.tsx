import Link from "next/link";
import { ArrowUpRight } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export default function ArrowButton({ href, children, tone = "light", className = "" }: Props) {
  const light = tone === "light";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-base font-medium transition-colors ${
        light ? "bg-white text-ink hover:bg-cream" : "bg-olive text-white hover:bg-olive-2"
      } ${className}`}
    >
      {children}
      <span className={`arrow-btn grid h-9 w-9 place-items-center rounded-full ${light ? "bg-olive text-white" : "bg-white text-ink"}`}>
        <ArrowUpRight />
      </span>
    </Link>
  );
}
