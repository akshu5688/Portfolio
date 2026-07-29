import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title mt-3">Professional experience</h2>
        </Reveal>

        <div className="relative mt-14 space-y-4">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 80}>
              <article className="experience-row group grid gap-7 rounded-2xl border border-ink/10 bg-white/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-white/55 hover:shadow-[0_20px_50px_rgba(18,20,22,0.06)] sm:p-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10">
                <div>
                  <div className="mb-7 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink/10 bg-cream font-mono text-[10px] text-accent">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-accent">
                    {job.role}
                  </p>
                  {job.duration ? (
                    <p className="mt-2 text-sm text-mute">{job.duration}</p>
                  ) : null}
                </div>

                <div>
                  <ul className="space-y-3.5">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-[15px] leading-relaxed text-mute before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-sm before:border before:border-accent/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
