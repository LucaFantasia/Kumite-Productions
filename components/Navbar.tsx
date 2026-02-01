import Link from "next/link";

const nav = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {/* Top row */}
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-baseline gap-2 min-w-0">
              <span className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white whitespace-nowrap">
                KUMITE<span className="text-[var(--accent)]">.</span>
              </span>
              <span className="hidden sm:inline text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/70 whitespace-nowrap">
                PRODUCTIONS
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-white hover:text-white/90 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/enquire"
              className="
                inline-flex items-center justify-center
                rounded-2xl border border-white/40 bg-white/5
                px-4 sm:px-6 py-2.5 sm:py-3
                text-xs sm:text-sm md:text-base
                font-extrabold uppercase tracking-[0.14em]
                text-white whitespace-nowrap
                hover:border-white/90
                transition
              "
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile nav row */}
          <div className="md:hidden pb-3">
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/90 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
