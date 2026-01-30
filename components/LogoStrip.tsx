import Image from "next/image";

const logos = [
  { src: "/logos/gb-top-team.png", alt: "GT Top Team" },
  { src: "/logos/gymbox.png", alt: "Gymbox" },
  { src: "/logos/anytime-fitness.png", alt: "Anytime Fitness" },
  { src: "/logos/cage-warriors.png", alt: "Cage Warriors" },
  { src: "/logos/gauntlet.png", alt: "Gauntlet Fight Academy" },
];

export default function LogoStrip() {
  return (
    <section className="bg-white/[0.03] border-y border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/60">
          Trusted by gyms & promotions
        </p>

        <div className="mt-7 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-10 items-center">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={170}
                height={60}
                className="h-10 w-auto object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
