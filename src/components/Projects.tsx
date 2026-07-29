"use client";

import Link from "next/link";
import { projects } from "@/data/portfolio";
import { LiveSiteButton } from "./LiveSiteButton";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Projects</p>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article className="project-row group grid gap-6 py-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-accent group-hover:text-accent"
                      >
                        {project.name}
                      </Link>
                    </h3>
                    <span className="text-sm text-mute">{project.role}</span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-mute">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-primary !px-4 !py-2 !text-[13px]"
                    >
                      View project
                    </Link>
                    {project.live ? (
                      <LiveSiteButton
                        href={project.live}
                        projectName={project.name}
                        className="btn-ghost !px-4 !py-2 !text-[13px]"
                      >
                        Live site
                      </LiveSiteButton>
                    ) : null}
                    {project.github ? (
                      <a
                        href={project.github}
                        className="btn-ghost !px-4 !py-2 !text-[13px]"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mute">
                    Key features
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[14px] font-medium text-ink"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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
