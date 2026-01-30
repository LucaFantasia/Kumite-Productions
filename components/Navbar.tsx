import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight">
              KUMITE<span className="text-[var(--accent)]">.</span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">
              Productions
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/enquire"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
