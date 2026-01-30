import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to level up your presence?
              </h3>
              <p className="mt-2 text-white/70 max-w-xl">
                Explore services, see examples, and then request a quote. Pricing depends on what
                you need — we’ll tailor it to your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110 transition"
              >
                Explore services
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10 transition"
              >
                Explore gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
