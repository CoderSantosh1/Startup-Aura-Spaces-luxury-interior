import Link from "next/link";
import { Chevron } from "./Icons";

export type Crumb = { label: string; href?: string };

// Set NEXT_PUBLIC_SITE_URL in production so search engines get absolute breadcrumb URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Breadcrumb({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: new URL(c.href, siteUrl).toString() } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-gold/30 bg-black/20 px-4 py-2 text-sm text-cream/80 backdrop-blur-sm">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              {i === 0 && (
                <svg className="h-3.5 w-3.5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" aria-hidden>
                  <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                </svg>
              )}
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined} className={last ? "font-medium text-gold" : ""}>
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-gold">
                  {c.label}
                </Link>
              )}
              {!last && <Chevron className="h-3 w-3 text-cream/40" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
