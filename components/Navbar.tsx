import Link from "next/link";

const nav = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ✅ Full width background */}
      <div className="w-full bg-black/60 backdrop-blur-md border-b border-white/10">
        {/* ✅ Content stays max width */}
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid h-20 grid-cols-3 items-center">
            {/* Left: Brand */}
            <div className="justify-self-start">
              <Link href="/" className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold uppercase tracking-tight text-white">
                  KUMITE<span className="text-[var(--accent)]">.</span>
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                  PRODUCTIONS
                </span>
              </Link>
            </div>

            {/* Center: Nav (always visible on desktop, hidden on small) */}
            <nav className="hidden md:flex justify-self-center items-center gap-10">
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

            {/* Right: CTA */}
            <div className="justify-self-end">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/80 bg-white/5 px-6 py-3 text-sm md:text-base font-extrabold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black transition"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>

          {/* ✅ Mobile nav row */}
          <div className="md:hidden pb-3 flex items-center justify-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold uppercase tracking-[0.18em] text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
