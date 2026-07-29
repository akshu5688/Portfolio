import { about, site } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">About</p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-mute sm:text-xl">
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
            <ul className="space-y-4 border-l border-ink/10 pl-6">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="text-[15px] font-medium leading-snug text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
