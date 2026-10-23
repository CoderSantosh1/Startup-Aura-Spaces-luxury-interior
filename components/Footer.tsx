import Image from "next/image";
import Link from "next/link";
import { contact, img, moreNav, nav } from "@/lib/data";
import Logo from "./Logo";
import { Facebook, Instagram, LinkedIn, YouTube } from "./Icons";

const strip = [img.living2, img.bedroom1, img.kitchen1, img.living8, img.decor2, img.villa2];

export default function Footer() {
  return (
    <footer className="bg-olive text-white">
    

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo className="inline-block" />
          <p className="mt-6 max-w-xs text-base text-white/60">Timeless interiors, crafted with passion.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, LinkedIn, YouTube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-all hover:-translate-y-1 hover:bg-white hover:text-ink"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">Explore</h4>
          <ul className="grid grid-cols-2 gap-2 text-base">
            {[...nav, ...moreNav, { href: "/contact", label: "Contact" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">Studio</h4>
          <p className="text-base leading-relaxed text-white/80">
            {contact.street}
            <br />
            {contact.city}
          </p>
          <p className="mt-4 space-y-1 text-base text-white/80">
            <a href={contact.phoneHref} className="block transition-colors hover:text-gold">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-gold">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-sm text-white/60 md:px-10">
          © 2026  Aura Spaces. All Rights Reserved. Powered by Lestow
        </div>
      </div>
    </footer>
  );
}
