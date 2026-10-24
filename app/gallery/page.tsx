import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { galleryItems, img } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Gallery" title={"Our\nGallery"} subtitle="Beautiful spaces, designed with passion and precision." image={img.living11} />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <GalleryGrid items={galleryItems} />
      </section>
      <CtaBanner image={img.bedroom2} />
    </>
  );
}
