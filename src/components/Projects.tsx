"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { LiveSiteButton } from "./LiveSiteButton";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Projects</p>
              <h2 className="section-title mt-3">Selected product work</h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-mute">
              Full-stack products and interfaces designed for real users,
              operational workflows, and startup teams.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 70}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <article
                className={`project-card group h-full overflow-hidden ${
                  index === 0
                    ? "grid lg:grid-cols-[0.9fr_1.1fr]"
                    : "flex flex-col"
                }`}
              >
                <div className={`project-art project-art-${index + 1}`}>
                  <Image
                    src={project.image}
                    alt={`${project.name} website homepage`}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 42vw, 100vw"
                        : "(min-width: 1024px) 50vw, 100vw"
                    }
                    className="project-cover-image"
                  />
                  <div className="project-image-shade" />
                  <div className="project-image-meta">
                    <div className="project-image-dots" aria-hidden>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>{project.live.replace(/^https?:\/\//, "")}</span>
                  </div>
                  <span className="project-number">0{index + 1}</span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        {project.role}
                      </p>
                      <h3>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
                        >
                          {project.name}
                        </Link>
                      </h3>
                    </div>
                    <span className="project-arrow" aria-hidden>↗</span>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-mute">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
