import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/5 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/60">
        {label}
      </p>
      <p className="mt-1 font-display text-white font-black uppercase italic tracking-[-0.02em] text-[18px]">
        {value}
      </p>
    </div>
  );
}

function InfoCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.30)_100%)]" />
      <div className="relative p-7 sm:p-8 md:p-10">
        <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.42em] text-white/65">
          {eyebrow}
        </p>
        <h3 className="font-display mt-3 text-white font-black uppercase italic tracking-[-0.03em] leading-[0.95] text-[clamp(1.6rem,2.8vw,2.2rem)]">
          {title}
        </h3>
        <p className="mt-4 text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-18">
        {/* accent glow + soft wash */}
        <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-4xl -translate-x-1/2 rounded-full bg-[rgba(255,77,46,0.16)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Left: headline */}
            <div className="md:col-span-7">
              <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.42em] text-white/75">
                The team behind the camera
              </p>

              <h1 className="font-display mt-6 text-white text-balance">
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.4rem,5.2vw,4.3rem)]">
                  Built for fighters.
                </span>
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.4rem,5.2vw,4.3rem)]">
                  Shot like cinema.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
                Kumite Productions creates high-impact videography, photography, and edits for
                fighters and combat gyms. Producing content designed to grab attention and build hype
                on social media.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl bg-(--accent) px-7 py-3.5
                    text-[13px] sm:text-[14px]
                    font-black uppercase italic tracking-[0.14em]
                    text-black
                    shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                    transition-transform duration-200
                    hover:-translate-y-0.5 active:translate-y-0
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,77,46,0.35)]
                  "
                >
                  Get a quote
                </Link>

                <Link
                  href="/gallery"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5
                    text-[13px] sm:text-[14px]
                    font-extrabold uppercase tracking-[0.22em]
                    text-white/90
                    hover:bg-white/10 hover:text-white transition
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/15
                  "
                >
                  See the style
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <StatPill label="Focus" value="Combat Sports" />
                <StatPill label="Output" value="Social-First" />
                <StatPill label="Feel" value="Premium" />
              </div>
            </div>

            {/* Right: photo */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.60)_100%)]" />
                <img
                  src="/about/about.jpeg"
                  alt="Behind the lens — Kumite Productions"
                  className="h-90 w-full object-cover sm:h-105 md:h-130"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/70">
                    Behind the lens
                  </p>
                  <p className="mt-2 text-white/80 text-[13px] sm:text-[14px] font-semibold leading-relaxed">
                    The goal is simple: make fighters look like stars with pace, grit, and
                    cinematic polish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-(--bg) pb-18">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <InfoCard
                eyebrow="Mission"
                title="Make you impossible to ignore"
                body="We're here to help fighters, gyms, and promotions stand out. Clean visuals, strong storytelling, and edits that hit hard that are built for attention on Instagram, YouTube, and beyond."
              />
            </div>

            <div className="md:col-span-6">
              <InfoCard
                eyebrow="Style"
                title="Fast, gritty, premium"
                body="We blend fight energy with cinematic polish using sharp camera work, bold framing, clean audio, and social-first pacing. Whether it's sparring, training, or fight night, we keep it authentic."
              />
            </div>

            <div className="md:col-span-12">
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute -top-24 left-12 h-56 w-80 rounded-full bg-[rgba(255,77,46,0.14)] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-96 rounded-full bg-white/5 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

                <div className="relative p-7 sm:p-8 md:p-10">
                  <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.42em] text-white/65">
                    How it works
                  </p>

                  <h2 className="font-display mt-3 text-white font-black uppercase italic tracking-[-0.03em] leading-[0.95] text-[clamp(1.8rem,3.2vw,2.6rem)]">
                    Simple process. Serious results.
                  </h2>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/12 bg-black/20 p-6">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/60">
                        Step 01
                      </p>
                      <p className="mt-2 font-display font-black uppercase italic tracking-[-0.02em] text-white">
                        Plan
                      </p>
                      <p className="mt-3 text-white/72 text-sm leading-relaxed font-semibold">
                        You tell us what you need (event, location, vibe). We'll align on deliverables
                        and a style reference.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/12 bg-black/20 p-6">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/60">
                        Step 02
                      </p>
                      <p className="mt-2 font-display font-black uppercase italic tracking-[-0.02em] text-white">
                        Shoot
                      </p>
                      <p className="mt-3 text-white/72 text-sm leading-relaxed font-semibold">
                        We capture the action with an athlete-first approach: clean angles, good light,
                        and real moments.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/12 bg-black/20 p-6">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/60">
                        Step 03
                      </p>
                      <p className="mt-2 font-display font-black uppercase italic tracking-[-0.02em] text-white">
                        Edit + deliver
                      </p>
                      <p className="mt-3 text-white/72 text-sm leading-relaxed font-semibold">
                        Tight pacing, clean grade, crisp audio. Delivered in formats optimised for
                        Instagram and YouTube.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white/55">
                    <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">
                      Fast turnaround
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">
                      Social-first edits
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">
                      Cinematic visuals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute -top-20 left-10 h-48 w-72 rounded-full bg-[rgba(255,77,46,0.16)] blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
              <div className="relative p-7 sm:p-8 md:p-10 text-center">
                <h3 className="font-display text-white font-black uppercase italic tracking-[-0.02em] text-[clamp(1.6rem,3vw,2.3rem)]">
                  Want content that hits hard?
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
                  Send an enquiry with what you need. We'll come back with pricing, availability,
                  and the next steps.
                </p>
                <div className="mt-7 flex justify-center">
                  <Link
                    href="/enquire"
                    className="
                      group relative inline-flex items-center justify-center overflow-hidden
                      rounded-2xl bg-(--accent) px-10 py-4
                      text-[14px] sm:text-[15px]
                      font-black uppercase italic tracking-[0.14em]
                      text-black
                      transition-transform duration-200
                      hover:-translate-y-0.5 active:translate-y-0
                      focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,77,46,0.35)]
                    "
                  >
                    <span className="relative z-10">Get a quote</span>
                    <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/35 opacity-0 blur-[1px] transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-sheen" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
