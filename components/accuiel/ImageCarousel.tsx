"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: string;
};

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  height = "h-[100vh]", // plein écran
}: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goTo = (i: number) =>
    setIndex(() => ((i % images.length) + images.length) % images.length);

  // autoplay
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    autoplayRef.current = window.setInterval(next, autoPlayInterval);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [autoPlay, isPaused, autoPlayInterval]);

  // Touch events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const threshold = 50;
      if (dx > threshold) prev();
      else if (dx < -threshold) next();
      touchStartX.current = null;
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${height} w-full`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* === Image de fond FIXE === */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          fill
          quality={85}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Boutons & Dots au-dessus */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white p-2 rounded-full"
      >
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white p-2 rounded-full"
      >
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 18l6-6-6-6"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full ${
              i === index
                ? "bg-[var(--secondary)] scale-125"
                : "bg-white/60 hover:bg-white/90"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}
