import { useEffect, useState } from 'react';
import { profile } from '../data/portfolioData';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-display text-lg font-black text-ink"
          aria-label="Go to home"
        >
          {profile.initials}
          <span className="text-coral">.</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNav(id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  isActive
                    ? 'bg-coral text-white shadow-sm'
                    : 'text-ink/75 hover:bg-coral/10 hover:text-coral'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/5 bg-paper px-5 py-4 shadow-soft md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNav(id)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-bold ${
                    active === id ? 'bg-coral text-white' : 'text-ink hover:bg-coral/10'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
