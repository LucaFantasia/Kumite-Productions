import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  includes: string[];
};

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/65">
      {text}
    </span>
  );
}

function ServiceCard({ title, subtitle, bullets, includes }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute -top-24 left-10 h-56 w-80 rounded-full bg-[color:rgba(255,77,46,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative grid md:grid-cols-12">
        {/* Image */}
        <div className="relative md:col-span-5">
          <div className="absolute inset-0 bg-black/30" />
          <img
            src="/hero-poster.jpg"
            alt={`${title} example`}
            className="h-[240px] w-full object-cover sm:h-[280px] md:h-full md:min-h-[420px]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0.55)_100%)]" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.42em] text-white/70">
              {subtitle}
            </p>
            <h3 className="mt-2 font-display text-white font-black uppercase italic tracking-[-0.03em] leading-[0.95] text-[clamp(1.6rem,3vw,2.3rem)]">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="relative md:col-span-7 p-6 sm:p-8 md:p-10">
          <p className="text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
            {bullets[0]}
          </p>

          <ul className="mt-5 space-y-3">
            {bullets.slice(1).map((b) => (
              <li
                key={b}
                className="flex gap-3 text-white/72 text-sm sm:text-[15px] font-semibold leading-relaxed"
              >
                <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.42em] text-white/60">
              Typical includes
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {includes.map((x) => (
                <Pill key={x} text={x} />
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/enquire"
              className="
                inline-flex items-center justify-center
                rounded-2xl bg-[var(--accent)] px-7 py-3.5
                text-[13px] sm:text-[14px]
                font-black uppercase italic tracking-[0.14em]
                text-black
                shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                transition-transform duration-200
                hover:-translate-y-0.5 active:translate-y-0
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(255,77,46,0.35)]
              "
            >
              Get a quote
            </Link>

            <p className="text-xs text-white/55 font-semibold">
              Tell us the date, location, and what you need. We'll reply with pricing + availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[56rem] -translate-x-1/2 rounded-full bg-[color:rgba(255,77,46,0.16)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.42em] text-white/75">
            Services
          </p>

          <h1 className="font-display mt-6 text-white">
            <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5.2vw,4.1rem)]">
              Content packages
            </span>
            <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5.2vw,4.1rem)]">
              that build hype.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
            Videography, photography, and editing are all captured and crafted by Kumite Productions.
            Built for fighters, gyms, and promotions who want content that hits hard.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6">
            <ServiceCard
              title="Videography"
              subtitle="Fight night • training • sparring"
              bullets={[
                "Cinematic coverage that makes fighters look like stars with clean angles, good light, real moments.",
                "Training sessions, sparring, interviews, promos, and fight-night capture.",
                "Optimised for social: hooks, pacing, and deliverables built for attention.",
              ]}
              includes={[
                "Shoot planning",
                "Cinematic coverage",
                "Audio capture",
                "Social formats",
                "Fast turnaround",
              ]}
            />

            <ServiceCard
              title="Photography"
              subtitle="Portraits • action • gym content"
              bullets={[
                "Sharp, high-impact photos built for posters, announcements, and social drops.",
                "Action shots, portraits, gym sessions, and event coverage.",
                "Edits that stay premium while keeping the raw feel of the sport.",
              ]}
              includes={[
                "Action shots",
                "Portraits",
                "Colour grading",
                "Social-ready crops",
                "Fast delivery",
              ]}
            />

            <ServiceCard
              title="Editing"
              subtitle="Highlights • reels • social-first cuts"
              bullets={[
                "All edits are created exclusively from footage shot by Kumite Productions to ensure quality, consistency, and a premium finish.",
                "Highlights, reels, training montages, promos, and story-led cuts from our own shoots.",
                "Clean pacing, strong grading, and sound design built to hit on social media.",
              ]}
              includes={[
                "Highlight edits",
                "Reels + shorts",
                "Colour grade",
                "Sound design",
                "Platform exports",
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
