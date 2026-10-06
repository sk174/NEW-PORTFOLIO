import SectionHeader from './SectionHeader';
import { skillBars, skillCategories, skills } from '../data/portfolioData';

const accentStyles = {
  coral: {
    panel: 'from-coral/12',
    badge: 'bg-coral text-white',
    ring: 'ring-coral/15',
    text: 'text-coral',
  },
  mint: {
    panel: 'from-mint/12',
    badge: 'bg-mint text-white',
    ring: 'ring-mint/15',
    text: 'text-mint',
  },
  ocean: {
    panel: 'from-ocean/12',
    badge: 'bg-ocean text-white',
    ring: 'ring-ocean/15',
    text: 'text-ocean',
  },
  honey: {
    panel: 'from-honey/16',
    badge: 'bg-honey text-ink',
    ring: 'ring-honey/20',
    text: 'text-honey',
  },
};

function Skills() {
  const primarySkills = skillBars.slice(0, 4);

  return (
    <section id="skills" className="bg-soft px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="technical skills" title="My Toolkit" />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-2xl bg-ink p-6 text-white shadow-soft sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                  primary stack
                </p>
                <h3 className="mt-3 font-display text-3xl font-black">Frontend Focus</h3>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white/80">
                React UI
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {primarySkills.map((skill) => (
                <div key={skill.name} className="rounded-xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-black">{skill.name}</span>
                    <span className="font-display text-2xl font-black text-coral">
                      {skill.level}
                    </span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-white/[0.06] p-5 ring-1 ring-white/10">
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 12).map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-ink">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillCategories.map((category) => {
              const style = accentStyles[category.accent];
              return (
                <article
                  key={category.title}
                  className={`rounded-2xl bg-gradient-to-br ${style.panel} to-white p-6 shadow-sm ring-1 ${style.ring} transition hover:-translate-y-1 hover:shadow-card`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-black text-ink">
                      {category.title}
                    </h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${style.badge}`}>
                      {category.skills.length}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-ink shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillBars.slice(4).map((skill) => (
              <div key={skill.name} className="rounded-xl bg-soft p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-black text-ink">
                  <span>{skill.name}</span>
                  <span className="text-coral">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white">
                  <div
                    className={`h-full rounded-full ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
