import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { assets, common, sections } from "@/data";

export const metadata: Metadata = { title: common.pageHeroes.gallery.metaTitle };

export default function GalleryPage() {
  return (
    <>
      <PageHero page="gallery" />
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <GalleryGrid items={sections.Gallery.items} filters={sections.Gallery.filters} />
      </section>
      <CtaBanner image={assets.bedroom2} />
    </>
  );
}
