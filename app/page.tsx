import Link from "next/link";
import Navbar from "@/components/Navbar";
import LogoStrip from "@/components/LogoStrip";
import ContentTiles from "@/components/ContentTiles";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* HERO (video does NOT stick; it is just this section) */}
      <section className="relative min-h-[92vh] pt-16">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlay to reduce distraction */}
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 film-grain pointer-events-none" />
        </div>

        {/* Foreground content */}
        <div className="relative">
          <div className="mx-auto w-full max-w-6xl px-6 flex min-h-[92vh] items-center">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                For MMA fighters & combat gyms
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
                CINEMATIC CONTENT
                <span className="text-[var(--accent)]"> </span>
                THAT BUILDS HYPE.
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl">
                Videography, photography, and editing — training montages, fight highlights,
                interviews, promos — designed to help rising fighters stand out on social media.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-7 py-4 text-sm font-extrabold text-black hover:brightness-110 transition"
                >
                  Get a quote
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10 transition"
                >
                  View gallery
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Fast turnaround edits
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Social-first framing
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  London-based
                </div>
              </div>
            </div>
          </div>

          {/* A subtle “scroll hint” */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/55">
            Scroll ↓
          </div>
        </div>
      </section>

      {/* Logos (video does not continue beyond hero) */}
      <LogoStrip />

      {/* Content grid */}
      <ContentTiles />

      {/* CTA strip */}
      <CtaBand />

      <Footer />
    </main>
  );
}
