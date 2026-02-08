"use client";

import { useRef } from "react";

type Props = {
  title: string;
  posterSrc?: string;
  videoSrc?: string; // omit for Photography
};

export default function ContentTile({ title, posterSrc, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className="
        group relative h-full w-full overflow-hidden rounded-2xl
        border border-white/18 bg-white/5
        shadow-[0_18px_55px_rgba(0,0,0,0.45)]
        transition-transform duration-300 ease-out
        hover:scale-[1.03] hover:z-20
      "
      onMouseEnter={() => {
        if (!videoRef.current) return;
        // ensure it starts instantly on hover
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }}
    >
      {/* Poster (always visible) */}
      <img
        src={posterSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Video (fade in on hover) */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="
            absolute inset-0 h-full w-full object-cover
            opacity-0 transition-opacity duration-300 ease-out
            group-hover:opacity-100
          "
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null }

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/42" />
      <div
        className="
          absolute inset-0
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          bg-[linear-gradient(to_top,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0.62)_100%)]
        "
      />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

      {/* Title */}
      <div className="relative z-10 flex h-full items-center justify-center p-5">
        <p
          className="
            font-display text-white
            font-black uppercase italic
            tracking-[-0.02em]
            drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)]
            text-[clamp(1.25rem,2.0vw,2.1rem)]
          "
        >
          {title}
        </p>
      </div>
    </div>
  );
}
