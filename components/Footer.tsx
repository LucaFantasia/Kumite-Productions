import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--bg) text-white border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            {/* Brand / logo placeholder */}
            <div>
              {/* Swap this block with your real logo later */}
              <div className="font-display text-[22px] font-black uppercase italic tracking-[-0.02em]">
                Kumite<span className="text-(--accent)">.</span>
                <span className="ml-2 text-[11px] uppercase tracking-[0.38em] text-white/70 not-italic font-extrabold">
                  Productions
                </span>
              </div>
              <p className="mt-4 max-w-sm text-white/65 text-sm leading-relaxed">
                combat-focused videography, photography and editing. Built for social-first content that hits hard.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/70">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="mailto:enquire@kumiteproductions.com"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-white transition"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-(--accent)" />
                  enquire@kumiteproductions.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/70">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* Replace hrefs with your real links */}
                <a
                  href="https://www.instagram.com/kumite_productions/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 hover:text-white transition"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@kumiteproductions2000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 hover:text-white transition"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Kumite Productions. All rights reserved.</p>
            <p className="uppercase tracking-[0.18em]">London • UK</p>
          </div>
        </div>
      </footer>
  );
}
