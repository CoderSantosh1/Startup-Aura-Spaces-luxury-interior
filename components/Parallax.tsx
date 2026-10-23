"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Parallax({ src, className = "", speed = 0.15 }: { src: string; className?: string; speed?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const w = wrap.current;
      const i = inner.current;
      if (!w || !i) return;
      const r = w.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -speed;
      i.style.transform = `translate3d(0, ${offset}px, 0) scale(1.2)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div ref={inner} className="absolute inset-0 will-change-transform">
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
