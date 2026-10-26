"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { common, site } from "@/data";
import { ArrowUpRight } from "./Icons";
import Logo from "./Logo";

const { navigation: nav, moreNavigation: moreNav } = common;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const moreActive = moreNav.some((n) => isActive(n.href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-500 ${
        scrolled ? "border-b border-gold/20 bg-olive/95 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md" : "bg-gradient-to-b from-black/50 to-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <Logo className="relative z-50" />

        <nav className="hidden items-center gap-9 text-[17px] lg:flex">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} active={isActive(n.href)}>
              {n.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button
              className={`relative flex items-center gap-1.5 py-1 transition-colors hover:text-gold ${
                moreActive ? "text-gold" : "text-cream/85"
              }`}
            >
              More
              <svg className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                <path d="m3 4.5 3 3 3-3" />
              </svg>
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                  moreActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
            <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-gold/20 bg-olive-2 p-2 shadow-2xl">
                {moreNav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors hover:bg-gold/15 hover:text-gold ${
                      isActive(n.href) ? "bg-gold/15 text-gold" : "text-cream/90"
                    }`}
                  >
                    {n.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-gold py-2.5 pl-6 pr-2.5 text-base font-medium text-olive transition-all hover:-translate-y-0.5 hover:bg-[#c9ad7f] hover:shadow-[0_8px_24px_rgba(184,154,106,0.4)] sm:inline-flex"
          >
            Contact Us
            <span className="arrow-btn grid h-8 w-8 place-items-center rounded-full bg-olive text-gold">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpenFor(open ? null : pathname)}
            className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold lg:hidden"
          >
            <span className={`absolute h-px w-5 bg-gold transition-all ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute h-px w-5 bg-gold transition-all ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-olive px-8 pb-10 pt-28 transition-all duration-700 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex-1">
          {[...nav, ...moreNav, { href: "/contact", label: "Contact" }].map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center justify-between border-b border-gold/15 py-4 text-[28px] font-light transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${isActive(n.href) ? "text-gold" : "text-cream"}`}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
            >
              {n.label}
              <ArrowUpRight className="h-5 w-5 opacity-50" />
            </Link>
          ))}
        </nav>
        <div className={`mt-10 space-y-1 text-base text-cream/70 transition-opacity delay-500 duration-700 ${open ? "opacity-100" : "opacity-0"}`}>
          <a href={site.phoneHref} className="block hover:text-gold">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block hover:text-gold">{site.email}</a>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={`group relative py-1 transition-colors hover:text-gold ${active ? "text-gold" : "text-cream/85"}`}>
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
