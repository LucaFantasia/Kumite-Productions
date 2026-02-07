"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type GalleryItem = {
  title: string;
  note?: string;
  poster: string; // local path (/posters/x.jpg) or full URL
  url?: string; // fallback: open in new tab
  youtubeId?: string; // optional: enables modal embed
};

type Section = {
  id:
    | "sparring"
    | "training"
    | "fight-night"
    | "training-montage"
    | "interviews"
    | "photography"
    | "highlights";
  label: string;
  description: string;
  items: GalleryItem[];
};

function SectionHeader({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.42em] text-white/60">
          Gallery
        </p>
        <h2 className="mt-3 font-display text-white font-black uppercase italic tracking-[-0.03em] leading-[0.95] text-[clamp(1.8rem,3.2vw,2.6rem)]">
          {label}
        </h2>
        <p className="mt-3 max-w-2xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href="#top"
          className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/65 hover:bg-white/10 hover:text-white transition"
        >
          Back to top
        </a>
      </div>
    </div>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M8 5v14l12-7L8 5z" />
    </svg>
  );
}


function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  const playable = Boolean(item.youtubeId);
  const clickable = playable || Boolean(item.url);
  const comingSoon = !clickable;

  const handleClick = () => {
    if (item.youtubeId) return onOpen(item);
    if (item.url) window.open(item.url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={comingSoon}
      className={`
        group relative overflow-hidden rounded-3xl border border-white/12
        bg-white/5 text-left shadow-[0_22px_70px_rgba(0,0,0,0.55)]
        transition-transform duration-200
        ${comingSoon ? "opacity-75 cursor-not-allowed" : "hover:-translate-y-1"}
      `}
    >
      <div className="relative h-[180px] sm:h-[200px]">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.65)_100%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          {comingSoon ? (
            <div className="rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/80">
                Coming soon
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md transition group-hover:border-white/35 group-hover:bg-black/50">
              <PlayIcon className="h-4 w-4 text-white/90" />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display text-white font-black uppercase italic tracking-[-0.02em] leading-[0.95] text-[18px] sm:text-[20px] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)]">
            {item.title}
          </p>
          {item.note ? (
            <p className="mt-2 text-white/70 text-xs sm:text-sm font-semibold">
              {item.note}
            </p>
          ) : null}
        </div>
      </div>

      <div className="px-5 py-4">
        <p className="text-xs font-semibold text-white/55">
          {comingSoon
            ? "No examples yet"
            : playable
            ? "Click to watch"
            : "Click to open link"}
        </p>
      </div>
    </button>
  );
}

function VideoModal({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
}) {
  if (!open || !item?.youtubeId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/12 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.75)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/60">
              Playing
            </p>
            <p className="truncate font-display text-white font-black uppercase italic tracking-[-0.02em]">
              {item.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/80 hover:bg-white/10 hover:text-white transition"
          >
            Close
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="px-5 py-4">
          <a
            href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70 hover:text-white transition"
          >
            Open on YouTube →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  // ✅ Replace these with YOUR real posters + links/ids
  const sections: Section[] = useMemo(
    () => [
      {
        id: "sparring",
        label: "Sparring",
        description:
          "Fast-paced sparring edits built for intensity, timing, and clean visuals.",
        items: [
          { title: "Sample 01", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 02", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 03", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
        ],
      },
      {
        id: "training",
        label: "Training",
        description:
          "Training content that shows the work — clean shots, real moments, premium polish.",
        items: [
          { title: "Sample 01", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 02", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 03", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
        ],
      },
      {
        id: "fight-night",
        label: "Fight Night",
        description:
          "Event coverage that captures the atmosphere — walkouts, moments, wins.",
        items: [
          { title: "Sample 01", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 02", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 03", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
        ],
      },
      {
        id: "training-montage",
        label: "Training Montage",
        description:
          "Montages designed to build hype — rhythm, sound design, and premium grading.",
        items: [
          { title: "Sample 01", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 02", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 03", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
        ],
      },
      {
        id: "interviews",
        label: "Interviews",
        description: "Fighter interviews and gym stories — coming soon.",
        items: [],
      },
      {
        id: "photography",
        label: "Photography",
        description:
          "Posters, portraits, and action shots — sharp, clean, and social-ready.",
        items: [
          // If photography examples are images, you can set url to open an Instagram post / album / etc
          { title: "Sample 01", poster: "/hero-poster.jpg", url: "https://example.com" },
          { title: "Sample 02", poster: "/hero-poster.jpg", url: "https://example.com" },
          { title: "Sample 03", poster: "/hero-poster.jpg", url: "https://example.com" },
        ],
      },
      {
        id: "highlights",
        label: "Highlights",
        description:
          "Highlight edits that hit hard — momentum, clarity, and the right moments.",
        items: [
          { title: "Sample 01", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 02", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
          { title: "Sample 03", poster: "/hero-poster.jpg", youtubeId: "REPLACE_ME" },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const openItem = (item: GalleryItem) => {
    if (!item.youtubeId) return;
    setActive(item);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <main id="top" className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[56rem] -translate-x-1/2 rounded-full bg-[color:rgba(255,77,46,0.16)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.42em] text-white/75">
            Gallery
          </p>

          <h1 className="font-display mt-6 text-white">
            <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5.2vw,4.1rem)]">
              The style.
            </span>
            <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5.2vw,4.1rem)]">
              The energy.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
            Click any example to watch. Each section matches the content types on the home page —
            so those tiles can link directly here.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-14">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <SectionHeader label={s.label} description={s.description} />

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((item, idx) => (
                    <GalleryCard
                      key={`${s.id}-${idx}-${item.title}`}
                      item={item}
                      onOpen={openItem}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal open={open} item={active} onClose={close} />
      <Footer />
    </main>
  );
}
