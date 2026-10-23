import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Clock, Facebook, Instagram, LinkedIn, Mail, Phone, Pin, YouTube } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { contact, img } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

const info: { icon: typeof Pin; label: string; value: string; href?: string }[] = [
  { icon: Pin, label: "Our Office", value: `${contact.street}, ${contact.city}` },
  { icon: Phone, label: "Call Us", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email Us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Clock, label: "Working Hours", value: contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title={"Get In\nTouch"} subtitle="Let's discuss your project and create something amazing together." image={img.hero3} />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-28">
        <div>
          <Reveal>
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">Say hello</h2>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {info.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal as="li" key={label} delay={i * 100} dir="left" className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-olive text-white">
                  <Icon />
                </span>
                <div>
                  <p className="text-base font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-base text-muted transition-colors hover:text-ink">{value}</a>
                  ) : (
                    <p className="text-base text-muted">{value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={450} className="mt-10 flex gap-3">
            {[Instagram, Facebook, LinkedIn, YouTube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full bg-olive text-white transition-transform hover:-translate-y-1">
                <Icon />
              </a>
            ))}
          </Reveal>
        </div>
        <Reveal delay={150} className="rounded-3xl bg-sand/60 p-6 md:p-10">
          <ContactForm />
        </Reveal>
      </section>

      <Reveal variant="wipe" className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <iframe
            title="Aura Spaces location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.435%2C37.765%2C-122.395%2C37.793&layer=mapnik&marker=37.7793%2C-122.4155"
            className="h-full w-full grayscale-[60%] sepia-[20%]"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-base font-medium">Our Location</p>
            <p className="text-sm text-muted">{contact.street}, {contact.city}</p>
          </div>
        </div>
      </Reveal>
    </>
  );
}
