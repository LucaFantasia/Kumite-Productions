import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import ContentTile from "@/components/ContentTile";
import Footer from "@/components/Footer";

const LOGO_VERSION = "3"; // bump when you replace logo files

const logos = [
  { src: "/logos/anytime-fitness.png", alt: "Anytime Fitness" },
  { src: "/logos/cage-warriors.png", alt: "Cage Warriors Academy" },
  { src: "/logos/gauntlet.png", alt: "The Gauntlet Fight Academy" },
  { src: "/logos/gb-top-team.png", alt: "Great Britain Top Team" },
  { src: "/logos/gymbox.png", alt: "Gymbox" },
];

const contentCards = [
  { title: "SPARRING", span: "md:col-span-6", poster: "/tiles/cwp-poster.png", video: "/tiles/cwp-720-short.mp4", href: "/gallery#sparring" },
  { title: "TRAINING", span: "md:col-span-6", poster: "/gallery/training01.png", video: "/tiles/training.mp4", href: "/gallery#training" },
  { title: "PHOTOGRAPHY", span: "md:col-span-6", poster: "/gallery/photo03.jpeg", href: "/gallery#photography" }, // no video
  { title: "INTERVIEWS (COMING SOON)", span: "md:col-span-6", href: "/gallery#interviews" },
  { title: "HIGHLIGHTS (COMING SOON)", span: "md:col-span-6", href: "/gallery#highlights" },
];

function CtaPanel({
  title,
  body,
  href,
  buttonText,
}: {
  title: string;
  body: string;
  href: string;
  buttonText: string;
}) {
  return (
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-white/14 bg-white/5
        shadow-[0_22px_70px_rgba(0,0,0,0.55)]
      "
    >
      {/* subtle accent wash */}
      <div className="pointer-events-none absolute -top-20 left-10 h-48 w-72 rounded-full bg-[color:rgba(255,77,46,0.16)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 p-8 sm:p-10 md:p-12 text-center">
        <h3 className="font-display text-white font-black uppercase italic tracking-[-0.02em] text-[clamp(1.6rem,3vw,2.4rem)]">
          {title}
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-white/75 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
          {body}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={href}
            className="
              group relative inline-flex items-center justify-center overflow-hidden
              rounded-2xl bg-white px-9 py-4
              text-[13px] sm:text-[14px]
              font-extrabold uppercase tracking-[0.22em]
              text-black
              transition-transform duration-200
              hover:-translate-y-0.5 active:translate-y-0
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20
            "
          >
            <span className="relative z-10">{buttonText}</span>
            <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-black/10 opacity-0 blur-[1px] transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-sheen" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[100svh]">
          <HeroVideo className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_35%,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,18,0.78)_0%,rgba(7,10,18,0.14)_35%,rgba(7,10,18,0.88)_100%)]" />

          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-[color:rgba(255,77,46,0.18)] blur-3xl" />

          <div className="relative z-10 flex h-full items-center justify-center px-6 pt-24">
            <div className="mx-auto w-full max-w-6xl text-center">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-extrabold uppercase tracking-[0.42em] text-white/80">
                For fighters &amp; combat gyms
              </p>

              <h1 className="font-display mt-7 sm:mt-8 text-white [text-wrap:balance]">
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.6rem,6vw,6.2rem)]">
                  We create high-impact content
                </span>
                <span className="block font-black uppercase italic leading-[0.9] tracking-[-0.03em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)] text-[clamp(2.6rem,6vw,6.2rem)]">
                  that builds hype.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-white/82 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed font-semibold">
                Videography, photography, and editing into training montages, fight highlights,
                interviews, promos. Built to help fighters stand out on social media.
              </p>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/enquire"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[var(--accent)] px-10 py-4 text-[18px] sm:text-[20px] md:text-[22px] font-black uppercase italic tracking-[0.14em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(255,77,46,0.35)]"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/35 opacity-0 blur-[1px] transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-sheen" />
                </Link>
              </div>

              <p className="mt-9 text-[12px] sm:text-[13px] uppercase tracking-[0.26em] text-white/55">
                Fast turnaround • Social-first edits • Cinematic visuals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO -> WHITE TRANSITION */}
      <div className="h-10 bg-[linear-gradient(to_bottom,rgba(7,10,18,1)_0%,rgba(7,10,18,0.55)_35%,rgba(244,244,244,1)_100%)]" />

      {/* LOGO STRIP */}
      <section className="bg-[#f4f4f4] text-black">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14 md:py-20">
          <div className="text-center">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-extrabold uppercase tracking-[0.22em] text-black/65">
              We&apos;ve produced content for:
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10 sm:grid sm:grid-cols-3 sm:gap-x-14 sm:gap-y-14 md:grid-cols-5 items-center">
            {logos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <div className="group relative h-14 w-[140px] sm:h-18 sm:w-[220px] md:h-24 md:w-[300px]">
                  <img
                    src={`${logo.src}?v=${LOGO_VERSION}`}
                    alt={logo.alt}
                    loading="lazy"
                    className="
                      h-full w-full object-contain
                      grayscale opacity-85
                      transition-all duration-300 ease-out
                      group-hover:grayscale-0
                      group-hover:opacity-100
                      group-hover:scale-[1.06]
                    "
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 h-px w-full bg-black/10" />
        </div>
      </section>

      {/* WHITE -> DARK TRANSITION */}
      <div className="h-10 bg-[linear-gradient(to_bottom,rgba(244,244,244,1)_0%,rgba(80,84,92,0.28)_45%,rgba(7,10,18,1)_100%)]" />

      {/* CONTENT WE PRODUCE */}
      <section className="bg-[var(--bg)] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-18 md:py-20">
          <div className="text-center">
            <h2 className="font-display text-white font-black uppercase italic tracking-[-0.02em] text-[clamp(2rem,4.2vw,3.2rem)]">
              Content we produce:
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-white/75 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
              From fast-paced sparring edits to cinematic fight-night coverage. We build social-first
              content that feels premium and hits hard.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            {contentCards.map((c, idx) => {
              const isLastOdd =
                contentCards.length % 2 === 1 && idx === contentCards.length - 1;

              return (
                <div
                  key={c.title}
                  className={[
                    "col-span-1",
                    c.span,
                    isLastOdd ? "md:col-start-4 md:col-span-6" : "",
                  ].join(" ")}
                >
                  <div className="h-[150px] sm:h-[170px] md:h-[180px]">
                    <Link href={c.href} className="block h-full focus-visible:outline-none">
                      <ContentTile title={c.title} posterSrc={c.poster} videoSrc={c.video} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SERVICES + GALLERY CTA SECTIONS */}
      <section className="bg-[var(--bg)] text-black">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20 md:pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            <CtaPanel
              title="Explore our services"
              body="Videography, photography, and editing packages tailored for fighters, gyms, and promotions."
              href="/services"
              buttonText="View services"
            />
            <CtaPanel
              title="See the gallery"
              body="A quick look at the style: highlights, training content, fight nights, and cinematic edits."
              href="/gallery"
              buttonText="View gallery"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
