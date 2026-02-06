import Navbar from "@/components/Navbar";
import EnquireForm from "@/components/EnquireForm";

export default function EnquirePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        {/* subtle accent glow */}
        <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[56rem] -translate-x-1/2 rounded-full bg-[color:rgba(255,77,46,0.16)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.42em] text-white/75">
              Let’s build something that hits hard
            </p>

            <h1 className="font-display mt-6 text-white font-black uppercase italic tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,5vw,3.8rem)] drop-shadow-[0_14px_48px_rgba(0,0,0,0.75)]">
              Get a quote
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-white/72 text-[15px] sm:text-[16px] leading-relaxed font-semibold">
              Tell us what you need. We'll reply with pricing, availability, and next steps.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.25)_100%)]" />
              <div className="relative p-6 sm:p-8 md:p-10">
                <EnquireForm />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-white/55">
              By submitting, you agree we can contact you about this enquiry. No spam.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
