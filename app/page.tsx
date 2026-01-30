import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="relative h-screen overflow-hidden">
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

          {/* ✅ Make video less distracting:
              - stronger dark overlay
              - slight blur
              - slight desaturate
          */}
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          <div className="absolute inset-0 [filter:saturate(0.7)_contrast(1.05)]" />
        </div>

        {/* Centered content */}
        <div className="relative flex h-full items-center justify-center px-6 pt-16">
          <div className="w-full max-w-6xl text-center">
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.45em] text-white/70"
              style={{fontSize: "20px", fontWeight: "bold"}}>
              FOR MMA FIGHTERS & COMBAT GYMS
            </p>

            {/* ✅ WAY bigger headline (3 lines) */}
            <h1 className="mt-8 font-black uppercase italic tracking-tight leading-[0.9] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              style={{fontSize: "80px"}}>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                WE CREATE
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                HIGH-IMPACT CONTENT
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                THAT BUILDS HYPE.
              </span>
            </h1>

            <p>Videography, photography, and editing = training montages, fight highlights, interviews, promos.
              Built to help fighters stand out on social media.
            </p>

            {/* ✅ BIG CTA button (not link-styled) */}
            <div className="mt-12">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center bg-[var(--accent)] px-14 py-6 text-lg md:text-xl font-extrabold uppercase tracking-[0.14em] text-black no-underline hover:brightness-110 active:brightness-95 transition"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}