import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main> 
      <Navbar /> 
      <section className="relative h-screen overflow-hidden"> 

        {/* Background stack */} 
        <div className="absolute inset-0 z-0"> 

          {/* Video wrapper (fills the hero) */} 
          <div className="absolute inset-0"> 
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" > 
              <source src="/hero.mp4" type="video/mp4" /> 
            </video> 

          </div> {/* Overlay (test red) */} 
          <div className="absolute inset-0 bg-black opacity-70 z-20" /> 
        </div>

        {/* Centered content */} 
        <div className="relative z-50 flex h-full items-center justify-center px-6 pt-20"> 
          <div className="w-full max-w-6xl text-center"> 
            {/* Top kicker */} 
            <p className="font-extrabold uppercase tracking-[0.45em] text-white/85 text-[13px] sm:text-[15px] md:text-[18px]"> 
            FOR MMA FIGHTERS &amp; COMBAT GYMS 
            </p> 
            {/* Headline (responsive, HUGE) */} 
            <h1 className="mt-8 font-black uppercase italic tracking-tight leading-[0.92] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]"> 
              <span className="block text-[42px] sm:text-[58px] md:text-[78px] lg:text-[96px] xl:text-[112px]"> WE CREATE HIGH-IMPACT CONTENT </span> 
              <span className="block text-[42px] sm:text-[58px] md:text-[78px] lg:text-[96px] xl:text-[112px]"> THAT BUILDS HYPE. </span> 
            </h1> 
            {/* Sub copy (thicker + readable) */} 
            <p className="mx-auto mt-8 max-w-4xl text-white/85 font-semibold text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed"> Videography, photography, and editing — training montages, fight highlights, interviews, promos. <br /> Built to help fighters stand out on social media. </p> 
            
            {/* CTA (big + rounded + premium) */} 
            <div className="mt-10"> 
              <Link href="/enquire" className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-10 sm:px-12 md:px-14 py-4 md:py-5 text-[18px] sm:text-[22px] md:text-[28px] font-black uppercase italic tracking-[0.14em] text-black shadow-[0_18px_50px_rgba(0,0,0,0.55)] hover:brightness-110 active:brightness-95 transition" > GET A QUOTE 
              </Link> 
            </div> 
          </div> 
        </div> 
      </section> 
    </main>);
}