"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  className?: string;
};

export default function HeroVideo({ className }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Some browsers (notably Safari) benefit from an explicit play() attempt.
    const tryPlay = async () => {
      try {
        // Ensure these are set (helps in some edge cases)
        v.muted = true;
        v.playsInline = true;

        await v.play();
      } catch {
        // Autoplay may still be blocked — poster will display.
      }
    };

    tryPlay();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
    >
      <source src="/hero-720.webm" type="video/webm" />
      <source src="/hero-720.mp4" type="video/mp4" />
    </video>
  );
}
