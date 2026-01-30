import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-extrabold tracking-tight">
              KUMITE<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              Videography • Photography • Editing for MMA fighters
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white transition" href="/about">About</Link>
            <Link className="hover:text-white transition" href="/services">Services</Link>
            <Link className="hover:text-white transition" href="/gallery">Gallery</Link>
            <Link className="hover:text-white transition" href="/enquire">Enquire</Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} Kumite Productions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
