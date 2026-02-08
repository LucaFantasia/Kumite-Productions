"use client";

import { useMemo, useState } from "react";

type Service = "videography" | "photography" | "editing";

const SERVICE_OPTIONS: { key: Service; label: string; hint: string }[] = [
  { key: "videography", label: "Videography", hint: "Fight night, training, interviews" },
  { key: "photography", label: "Photography", hint: "Event / gym shoots, portraits" },
  { key: "editing", label: "Editing", hint: "Highlights, reels, social-first cuts" },
];

export default function EnquireForm() {
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [details, setDetails] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    const validEmail = /^\S+@\S+\.\S+$/.test(email.trim());
    return validEmail && services.length > 0 && details.trim().length >= 10 && status !== "loading";
  }, [email, services.length, details, status]);

  function toggleService(s: Service) {
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          services,
          details: details.trim(),
          page: "enquire",
        }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Enquiry sent. Check your inbox for confirmation.");
      setEmail("");
      setServices([]);
      setDetails("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {/* Email */}
      <div>
        <label className="block text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/75">
          Your email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
          className="
            mt-3 w-full rounded-2xl border border-white/14 bg-black/25
            px-4 py-3 text-white placeholder:text-white/35
            outline-none transition
            focus:border-white/25 focus:ring-4 focus:ring-white/10
          "
          required
        />
      </div>

      {/* Services */}
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label className="block text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/75">
            Services needed
          </label>
          <span className="text-[11px] text-white/50">Select one or more</span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((opt) => {
            const active = services.includes(opt.key);
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => toggleService(opt.key)}
                className={[
                  "text-left rounded-2xl border px-4 py-4 transition",
                  "bg-white/5 border-white/12 hover:border-white/20 hover:bg-white/7",
                  "focus:outline-none focus:ring-4 focus:ring-white/10",
                  active
                    ? "border-[var(--accent)] bg-[color:rgba(255,77,46,0.14)]"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black uppercase italic tracking-[-0.02em] text-white">
                    {opt.label}
                  </p>
                  <div
                    className={[
                      "h-5 w-5 rounded-full border",
                      active ? "border-[var(--accent)] bg-[var(--accent)]" : "border-white/25",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm text-white/65 leading-snug">{opt.hint}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Details */}
      <div>
        <label className="block text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/75">
          Details (must be atleast 10 characters)
        </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={5}
          placeholder={`Example: Can you get some sparring footage of me this Saturday at 2pm at [gym name], and make a sparring edit?`}
          className="
            mt-3 w-full resize-y rounded-2xl border border-white/14 bg-black/25
            px-4 py-3 text-white placeholder:text-white/35
            outline-none transition
            focus:border-white/25 focus:ring-4 focus:ring-white/10
          "
          required
        />
        <p className="mt-2 text-xs text-white/50">
          Include date/time, location, and any reference style you like.
        </p>
      </div>

      {/* Status */}
      {message ? (
        <div
          className={[
            "rounded-2xl border px-4 py-3 text-sm",
            status === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : status === "error"
              ? "border-red-400/30 bg-red-400/10 text-red-100"
              : "border-white/12 bg-white/5 text-white/70",
          ].join(" ")}
        >
          {message}
        </div>
      ) : null}

      {/* Submit */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={!canSubmit}
          className="
            group relative inline-flex items-center justify-center overflow-hidden
            rounded-2xl bg-[var(--accent)] px-10 py-4
            text-[14px] sm:text-[15px]
            font-extrabold uppercase italic tracking-[0.18em]
            text-black
            shadow-[0_18px_55px_rgba(0,0,0,0.55)]
            transition-transform duration-200
            hover:-translate-y-0.5 active:translate-y-0
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(255,77,46,0.35)]
          "
        >
          <span className="relative z-10">{status === "loading" ? "Sending..." : "Enquire"}</span>
          <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/35 opacity-0 blur-[1px] transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-sheen" />
        </button>
      </div>
    </form>
  );
}
