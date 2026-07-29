import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="hero-fade-1 mb-5 text-[13px] font-medium uppercase tracking-[0.18em] text-accent">
          {site.location}
        </p>

        <h1 className="hero-fade-2 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
          {site.name}
        </h1>

        <p className="hero-fade-3 mt-5 max-w-xl text-xl font-medium tracking-tight text-ink/80 sm:text-2xl">
          {site.role}
        </p>

        <p className="hero-fade-4 mt-6 max-w-lg text-[15px] leading-relaxed text-mute sm:text-base">
          Building production-ready AI-powered web apps and full-stack SaaS
          products — from authentication and dashboards to APIs and deployment.
        </p>

        <div className="hero-fade-5 mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#contact" className="btn-ghost">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
