import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative isolate overflow-hidden">
        {/* Hero height: full screen on mobile, slightly shorter on desktop */}
        <div className="relative h-svh min-h-160 md:h-[86svh]">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlays: cinematic vignette + contrast */}
          <div className="absolute inset-0 bg-black/44" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_35%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.72)_70%,rgba(0,0,0,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,18,0.85)_0%,rgba(7,10,18,0.15)_35%,rgba(7,10,18,0.85)_100%)]" />

          {/* Subtle top glow (accent) */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-2xl -translate-x-1/2 rounded-full bg-[rgba(255,77,46,0.18)] blur-3xl" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-6 pt-24">
            <div className="mx-auto w-full max-w-6xl text-center">
              {/* Kicker */}
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-extrabold uppercase tracking-[0.42em] text-white/80">
                For MMA fighters &amp; combat gyms
              </p>

              {/* Headline */}
              <h1 className="font-display mt-7 sm:mt-8 text-white text-balance">
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.6rem,6vw,6.2rem)]">
                  We create high-impact content
                </span>
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.6rem,6vw,6.2rem)]">
                  that builds hype.
                </span>
              </h1>

              {/* Subcopy */}
              <p className="mx-auto mt-7 max-w-3xl text-white/82 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed font-semibold">
                Videography, photography, and editing — training montages, fight highlights, interviews, promos.
                Built to help fighters stand out on social media.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/enquire"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-(--accent) px-10 py-4 text-[18px] sm:text-[20px] md:text-[22px] font-black uppercase italic tracking-[0.14em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,77,46,0.35)]"
                >
                  <span className="relative z-10">Get a Quote</span>
                  {/* sheen */}
                  <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/35 opacity-0 blur-[1px] transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-sheen" />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-9 py-4 text-[14px] sm:text-[15px] md:text-[16px] font-extrabold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md transition hover:bg-white/10 hover:border-white/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                >
                  View Work
                </Link>
              </div>

              {/* Micro trust line */}
              <p className="mt-9 text-[12px] sm:text-[13px] uppercase tracking-[0.26em] text-white/55">
                Fast turnaround • Social-first edits • Cinematic visuals
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
