import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LiveSiteButton } from "@/components/LiveSiteButton";
import { getProject, projects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-ink/10 pb-14 pt-28 sm:pb-16 sm:pt-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Link
              href="/#projects"
              className="text-[13px] font-medium text-mute transition-colors hover:text-ink"
            >
              ← Back to projects
            </Link>

            <p className="section-label mt-8">{project.role}</p>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live ? (
                <LiveSiteButton
                  href={project.live}
                  projectName={project.name}
                  className="btn-primary"
                >
                  Open live site
                </LiveSiteButton>
              ) : null}
              {project.github ? (
                <a href={project.github} className="btn-ghost">
                  View on GitHub
                </a>
              ) : null}
              {!project.live && !project.github ? (
                <p className="text-sm text-mute">
                  Live and GitHub links can be added in{" "}
                  <code className="rounded bg-ink/5 px-1.5 py-0.5 text-[13px] text-ink">
                    src/data/portfolio.ts
                  </code>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section id="overview" className="section-pad scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="section-label">Overview</p>
            <h2 className="section-title mt-3">About this project</h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-mute">
              {project.overview}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="border-y border-ink/10 bg-cream-deep/40 section-pad scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="section-label">Features</p>
            <h2 className="section-title mt-3">What it includes</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="border-l border-accent/40 pl-4 text-[15px] font-medium text-ink"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stack" className="section-pad scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="section-label">Tech stack</p>
            <h2 className="section-title mt-3">Technologies used</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip !px-3 !py-1.5 !text-[13px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {otherProjects.length > 0 ? (
          <section className="border-t border-ink/10 section-pad">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <p className="section-label">More work</p>
              <h2 className="section-title mt-3">Other projects</h2>
              <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                {otherProjects.map((item) => (
                  <div
                    key={item.slug}
                    className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <Link
                        href={`/projects/${item.slug}`}
                        className="font-display text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-mute">{item.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${item.slug}`}
                        className="btn-ghost !px-4 !py-2 !text-[13px]"
                      >
                        View project
                      </Link>
                      {item.live ? (
                        <LiveSiteButton
                          href={item.live}
                          projectName={item.name}
                          className="btn-ghost !px-4 !py-2 !text-[13px]"
                        >
                          Live site
                        </LiveSiteButton>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
