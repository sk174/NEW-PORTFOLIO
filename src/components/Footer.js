import { profile } from '../data/portfolioData';

const footerLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
        <button
          type="button"
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-display text-xl font-black"
        >
          {profile.initials}
          <span className="text-coral">.</span>
        </button>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-white/60">
          {footerLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-coral">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} className="text-xs font-bold text-white/60 transition hover:text-coral">GitHub</a>
          <a href={profile.linkedin} className="rounded-full bg-coral px-5 py-2 text-xs font-black text-white transition hover:bg-white hover:text-ink">LinkedIn</a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        © {currentYear} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
