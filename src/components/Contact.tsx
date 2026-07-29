import { interests, languages, site } from "@/data/portfolio";
import { Reveal } from "./Reveal";

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const display = value || "Add later";
  const isBlank = !value;

  return (
    <div className="flex flex-col gap-1 border-t border-ink/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
        {label}
      </span>
      {href && value ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-[15px] font-medium text-ink underline-offset-4 hover:underline sm:text-right"
        >
          {display}
        </a>
      ) : (
        <span
          className={`text-[15px] font-medium sm:text-right ${isBlank ? "text-mute/60" : "text-ink"}`}
        >
          {display}
        </span>
      )}
    </div>
  );
}

export function Contact() {
  const emailHref = site.email ? `mailto:${site.email}` : undefined;
  const phoneHref = site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : undefined;

  return (
    <section id="contact" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-3 max-w-xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mute">
            Open to internships and roles in AI development, full-stack, frontend,
            and software engineering. Update contact details in{" "}
            <code className="rounded bg-ink/5 px-1.5 py-0.5 text-[13px] text-ink">
              src/data/portfolio.ts
            </code>
            .
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 max-w-2xl border-b border-ink/10">
            <ContactRow label="Email" value={site.email} href={emailHref} />
            <ContactRow label="Phone" value={site.phone} href={phoneHref} />
            <ContactRow
              label="LinkedIn"
              value={site.linkedin}
              href={site.linkedin || undefined}
            />
            <ContactRow
              label="GitHub"
              value={site.github}
              href={site.github || undefined}
            />
            <ContactRow label="Location" value={site.location} />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <Reveal delay={140}>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
              Languages
            </h3>
            <p className="mt-3 text-[15px] font-medium text-ink">
              {languages.join(" · ")}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
              Interests
            </h3>
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink">
              {interests.join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
