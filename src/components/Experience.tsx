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

        <div className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 80}>
              <article className="experience-row grid gap-6 border-t border-ink/10 py-10 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
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
                  <ul className="space-y-3">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-[15px] leading-relaxed text-mute before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-ink/30"
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
