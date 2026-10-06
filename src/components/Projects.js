import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolioData';

const accentStyles = {
  coral: {
    text: 'text-coral',
    bg: 'bg-coral',
    soft: 'bg-coral/10',
  },
  mint: {
    text: 'text-mint',
    bg: 'bg-mint',
    soft: 'bg-mint/10',
  },
  ocean: {
    text: 'text-ocean',
    bg: 'bg-ocean',
    soft: 'bg-ocean/10',
  },
  honey: {
    text: 'text-honey',
    bg: 'bg-honey',
    soft: 'bg-honey/15',
  },
};

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-paper px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="professional work"
          title="Product Work Highlights"
          description="Selected feature areas from enterprise product work. Details are summarized without exposing private company code or confidential implementation data."
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent lg:block" />
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative grid gap-6 border-t border-ink/10 py-9 first:border-t-0 lg:grid-cols-[7rem_0.95fr_1.05fr]"
            >
              <div className="flex items-start gap-4 lg:block">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${accentStyles[project.color].bg} text-sm font-black text-white shadow-sm`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-muted lg:mt-5">
                  {project.category}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accentStyles[project.color].soft} font-display text-xl font-black ${accentStyles[project.color].text}`}>
                    {project.icon}
                  </div>
                  <h3 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:items-end">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-4 py-2 text-[11px] font-black text-ink shadow-sm ring-1 ring-ink/5 transition group-hover:-translate-y-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-fit rounded-full bg-soft px-5 py-2 text-xs font-black text-muted">
                  Private company work
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
