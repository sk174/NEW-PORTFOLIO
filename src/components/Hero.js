import { profile, stats } from '../data/portfolioData';
import profileCutout from '../assets/images/profile-cutout.png';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(244,111,85,0.14),transparent_28%),radial-gradient(circle_at_82%_32%,rgba(101,182,167,0.16),transparent_30%),linear-gradient(115deg,#fff7f4_0%,#fffdfb_46%,#f3faf8_100%)] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="absolute left-1/2 top-24 hidden h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent lg:block" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex rounded-md bg-coral/10 px-4 py-1.5 text-xs font-bold text-coral">
            Open to Opportunities
          </span>
          <h1 className="mx-auto mt-10 max-w-xl font-display text-6xl font-black leading-[0.9] text-ink sm:text-7xl lg:mx-0 lg:text-8xl">
            Hi, I'm <span className="block text-coral">Shubham</span>
            <span className="block">Kokate</span>
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-muted lg:mx-0">
            {profile.title} {profile.intro}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-extrabold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e85f48]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-w-40 items-center justify-center rounded-full border border-ink/10 bg-white px-7 py-3 text-sm font-extrabold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-coral hover:text-coral"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a className="text-xs font-bold text-muted transition hover:text-coral" href={profile.github}>
              GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-coral" />
            <a className="text-xs font-bold text-muted transition hover:text-coral" href={profile.linkedin}>
              LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-sm grid-cols-3 gap-4 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <strong className="font-display text-3xl font-black text-coral">{stat.value}</strong>
                <p className="mt-1 text-[11px] font-semibold text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="relative mx-auto flex min-h-[31rem] max-w-[36rem] items-end justify-center sm:min-h-[38rem] lg:min-h-[43rem]">
            <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-[45%_55%_48%_52%] bg-white/70 shadow-soft" />
            <div className="absolute left-[18%] top-20 h-64 w-64 rounded-full bg-fuchsia-200/45 blur-3xl" />
            <div className="absolute right-[8%] top-12 h-80 w-80 rounded-full bg-lime-200/55 blur-3xl" />
            <div className="absolute bottom-20 left-1/2 h-32 w-[25rem] -translate-x-1/2 rounded-full bg-coral/16 blur-3xl" />

            <div className="absolute inset-x-8 top-12 h-[24rem] rounded-[42%_58%_50%_50%] border border-white/80" />
            <div className="absolute right-6 top-20 h-24 w-24 rounded-full border border-coral/25" />
            <div className="absolute left-10 top-36 h-12 w-12 rounded-full bg-white/80 shadow-sm" />
            <div className="absolute bottom-12 left-1/2 h-6 w-80 -translate-x-1/2 rounded-full bg-ink/12 blur-xl" />

            <img
              src={profileCutout}
              alt={`${profile.name} professional headshot`}
              className="hero-cutout relative z-10 w-[min(88vw,33rem)] object-contain sm:w-[min(68vw,37rem)] lg:w-[min(42vw,39rem)]"
            />

            <div className="absolute bottom-16 right-3 z-20 hidden rounded-full bg-ink px-5 py-3 text-xs font-black text-white shadow-card sm:block">
              {profile.title}
            </div>
            <div className="absolute bottom-28 left-2 z-20 hidden rounded-full bg-white/85 px-5 py-3 text-xs font-black text-ink shadow-card ring-1 ring-ink/5 backdrop-blur sm:block">
              React + Tailwind
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
