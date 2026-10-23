import Link from "next/link";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" className="stroke-gold" strokeWidth="1.2" />
      {/* arched doorway */}
      <path d="M14 37V22a10 10 0 0 1 20 0v15" className="stroke-gold" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 37V23.5a5 5 0 0 1 10 0V37" className="stroke-current" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 37h28" className="stroke-gold" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="14.5" r="1.4" className="fill-gold" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Aura Spaces home">
      <LogoMark className="h-11 w-11 transition-transform duration-700 group-hover:rotate-[360deg]" />
      <span className="leading-none">
        <span className="block text-[22px] font-medium tracking-[0.28em]">AURA</span>
        <span className="mt-1 block text-[11px] font-medium tracking-[0.62em] text-gold">SPACES</span>
      </span>
    </Link>
  );
}
