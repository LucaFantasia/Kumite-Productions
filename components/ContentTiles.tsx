import Link from "next/link";

const tiles = [
  { title: "Sparring Footage", subtitle: "Cinematic rounds & drills", href: "/gallery" },
  { title: "Training Footage", subtitle: "Lifting • bag work • conditioning", href: "/gallery" },
  { title: "Training Montages", subtitle: "Fast-paced social edits", href: "/gallery" },
  { title: "Fight Night", subtitle: "Walkouts • highlights • promos", href: "/gallery" },
  { title: "Interviews", subtitle: "Stories that build your brand", href: "/gallery" },
  { title: "Photography", subtitle: "Portraits • sessions • events", href: "/gallery" },
];

export default function ContentTiles() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Content we produce
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Built for fighters. Made for attention.
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Training edits, fight highlights, interviews, promos — everything designed to help
              smaller fighters look like main-event talent on socials.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--accent)]/20 blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{t.subtitle}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                  View examples
                  <span className="translate-x-0 group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
