import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`leading-[0.95] tracking-tight ${className}`} aria-label="Aura Spaces home">
      <span className="block text-[22px] font-medium italic text-gold">Aura</span>
      <span className="block text-[22px] font-medium">Spaces</span>
    </Link>
  );
}
