import { site } from "@/data/portfolio";
import { EngineeringVisual } from "./EngineeringVisual";
import { LiveCodeBackdrop } from "./LiveCodeBackdrop";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <LiveCodeBackdrop />
      <div className="hero-scanline pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h1 className="code-texture-title hero-fade-2 text-[clamp(3rem,8vw,5.8rem)] font-semibold leading-[0.93] tracking-[-0.05em]">
            Building digital
            <span className="code-texture-accent block">
              products that work.
            </span>
          </h1>

          <p className="hero-fade-3 mt-7 max-w-xl text-[17px] leading-relaxed text-mute sm:text-lg">
            I&apos;m {site.name}, an {site.role} focused on thoughtful interfaces,
            scalable full-stack systems, and AI-powered applications.
          </p>

          <div className="hero-fade-4 mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.13em] text-mute">
            <span>{site.location}</span>
          </div>

          <div className="hero-fade-5 mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Explore selected work
              <span aria-hidden className="ml-2">↘</span>
            </a>
          </div>
        </div>

        <EngineeringVisual />
      </div>
    </section>
  );
}
