"use client";

import { useEffect, useRef, useState } from "react";

interface LogoCarouselProps {
  speed?: number; // pixels per frame
}

export default function LogoCarousel({ speed = 0.5 }: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/logos");
        const data = await res.json();
        setImages(data.images || []);
      } catch (err) {
        console.error("Failed to load logos:", err);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scroll = () => {
      if (container) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [images, speed]);

  // Duplicate images for seamless loop
  const doubledImages = [...images, ...images];

  return (
    <div className="w-full bg-white py-6 shadow-inner">
      {/* scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-12 px-4 overflow-x-hidden"
        style={{ width: "100%", whiteSpace: "nowrap" }}
      >
        {doubledImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
          >
            <img
              src={`/brands/logos/${img}`}
              alt={`Logo ${index}`}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
