import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section-pad scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title mt-3">Technical toolkit</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items], index) => (
            <Reveal key={category} delay={index * 50}>
              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-[15px] font-medium text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
