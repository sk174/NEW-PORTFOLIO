import SectionHeader from './SectionHeader';
import { education, experience } from '../data/portfolioData';

function TimelineList({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article key={`${item.role || item.degree}-${item.period}`} className="relative rounded-xl bg-white p-6 pl-8 shadow-sm">
          <span className="absolute left-0 top-6 h-10 w-1 rounded-full bg-coral" />
          <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">{item.period}</p>
          <h3 className="mt-2 font-display text-2xl font-black text-ink">{item.role || item.degree}</h3>
          <p className="mt-1 text-sm font-bold text-muted">{item.company || item.school}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-soft px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="journey"
          title="Experience & Education"
          description="Static frontend data for now, organized so it is easy to update later."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 font-display text-3xl font-black text-ink">Experience</h3>
            <TimelineList items={experience} />
          </div>
          <div>
            <h3 className="mb-5 font-display text-3xl font-black text-ink">Education</h3>
            <TimelineList items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
