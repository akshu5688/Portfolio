import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section-pad scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-label !text-[#7dd3b6]">Capabilities</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-cream">
                Tools for the complete product lifecycle.
              </h2>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">akshat@portfolio:~$</span>
              <span className="terminal-command">build --from idea --to production</span>
              <span className="terminal-cursor" aria-hidden />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items], index) => (
            <Reveal key={category} delay={index * 50}>
              <div className="skill-panel h-full">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {String(index + 1).padStart(2, "0")} / {category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-cream/85 transition-colors hover:border-[#7dd3b6]/50 hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
                  module.ready = true
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
