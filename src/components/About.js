import SectionHeader from './SectionHeader';
import { aboutHighlights, profile, softSkills } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="bg-paper px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="about me"
          title="Dedicated Developer & Problem Solver"
          description="I am a detail-oriented developer focused on building efficient, scalable, and user-friendly web applications."
        />

        <div className="mx-auto grid max-w-4xl gap-8 text-center text-sm leading-7 text-muted">
          <p>
            With a passion for solving complex problems through code, I continuously explore new technologies and refine my skills. I thrive in collaborative environments and enjoy working on projects that challenge me to think critically and innovate.
          </p>

          <div className="grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-lg bg-soft p-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-coral">Location</span>
              <p className="mt-2 font-bold text-ink">{profile.location}</p>
            </div>
            <div className="rounded-lg bg-soft p-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-coral">Role</span>
              <p className="mt-2 font-bold text-ink">{profile.title}</p>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-coral/5 via-soft to-mint/10 p-7 shadow-sm">
            <h3 className="font-display text-2xl font-black text-ink">Soft Skills</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-white px-4 py-2 text-xs font-bold text-muted shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
            <blockquote className="mx-auto mt-8 max-w-2xl rounded-lg bg-white px-6 py-7 font-display text-lg italic text-ink shadow-sm">
              Continuous learning and development is the solution to modern-day application development.
              <cite className="mt-3 block text-xs not-italic text-coral">- {profile.name}</cite>
            </blockquote>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {aboutHighlights.map((item) => (
              <span key={item} className="rounded-md border border-ink/10 px-4 py-2 text-xs font-bold text-ink">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
