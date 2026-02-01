import Link from "next/link";

const nav = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid h-20 grid-cols-3 items-center">
            {/* Brand */}
            <div className="justify-self-start">
              <Link href="/" className="group inline-flex items-baseline gap-2">
                <span className="font-display text-[20px] sm:text-[22px] font-black uppercase italic tracking-[-0.02em] text-white">
                  Kumite<span className="text-(--accent)">.</span>
                </span>
                <span className="hidden sm:inline text-[11px] uppercase tracking-[0.38em] text-white/70 group-hover:text-white/80 transition">
                  Productions
                </span>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex justify-self-center items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-extrabold uppercase tracking-[0.18em] text-white/85 hover:text-white transition
                             after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-200 hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="justify-self-end">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md transition
                          hover:border-white
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden pb-3 flex items-center justify-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/85 hover:text-white transition"
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
