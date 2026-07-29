import { about, site } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">About</p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal delay={80}>
            <p className="max-w-2xl font-display text-[clamp(1.6rem,3vw,2.35rem)] font-medium leading-[1.25] tracking-[-0.025em] text-ink">
              {site.summary}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-mute">
              Currently pursuing a {about.education} at {about.college}
              {about.university ? `, ${about.university}` : ""}, expected
              graduation {about.graduation}. Experience spans startup
              environments where production quality, iteration speed, and clean
              delivery matter.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="approach-panel">
              <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                  Current focus
                </p>
              </div>
              <ul className="space-y-0">
              {about.focus.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-ink/[0.07] py-3.5 text-[14px] font-medium leading-snug text-ink last:border-0"
                >
                  <span className="font-mono text-[10px] text-accent">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
