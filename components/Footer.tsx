import Link from "next/link";
import { contact, moreNav, nav } from "@/lib/data";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-olive text-white">
    

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo className="inline-block" />
          <p className="mt-6 max-w-xs text-base text-white/60">Timeless interiors, crafted with passion.</p>
          <SocialLinks
            className="mt-6 flex gap-3"
            linkClassName="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:-translate-y-1 hover:bg-gold hover:text-olive"
          />
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
