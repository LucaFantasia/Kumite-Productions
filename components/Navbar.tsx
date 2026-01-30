import Link from "next/link";

const nav = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/35 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6">
          {/* Top row */}
          <div className="grid h-16 grid-cols-3 items-center">
            {/* Left: Logo */}
            <div className="justify-self-start">
              <Link href="/" className="flex items-baseline gap-2 no-underline">
                <span className="text-lg font-extrabold tracking-tight uppercase text-white">
                  KUMITE<span className="text-[var(--accent)]">.</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                  PRODUCTIONS
                </span>
              </Link>
            </div>

            {/* Center: Nav (desktop) */}
            <nav className="hidden lg:flex justify-self-center items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/85 hover:text-white transition no-underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="justify-self-end">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center border-2 border-white/80 bg-transparent px-5 py-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black transition no-underline"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>

          {/* Mobile / smaller screens links (always visible below lg) */}
          <div className="lg:hidden pb-3 flex items-center justify-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/80 hover:text-white transition no-underline"
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
