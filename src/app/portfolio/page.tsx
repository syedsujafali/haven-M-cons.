import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories, type Category } from '../../data/projectsData';

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('All');
  const [filterFixed, setFilterFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(80);
  const [filterHeight, setFilterHeight] = useState(72);

  const filterRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Measure real header height (works on mobile & desktop)
  useEffect(() => {
    const measureNav = () => {
      const header = document.querySelector('header');
      if (header) setNavHeight(header.offsetHeight);
    };
    measureNav();
    window.addEventListener('resize', measureNav, { passive: true });
    return () => window.removeEventListener('resize', measureNav);
  }, []);

  // Measure filter bar height for spacer
  useEffect(() => {
    const measureFilter = () => {
      if (filterRef.current) setFilterHeight(filterRef.current.offsetHeight);
    };
    measureFilter();
    window.addEventListener('resize', measureFilter, { passive: true });
    return () => window.removeEventListener('resize', measureFilter);
  }, []);

  // Fix the filter bar once the hero scrolls out of view
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFilterFixed(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${navHeight}px 0px 0px 0px` }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [navHeight]);

  const handleTabClick = (cat: Category) => {
    setActive(cat);
    setTimeout(() => {
      const el = filterRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 50);
  };

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-44 pb-20 sm:pt-52"
        style={{
          backgroundColor: '#F6F4EE',
          backgroundImage: [
            'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
            'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
          ].join(', '),
        }}
      >
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
        <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
            <span className="inline-block h-px w-10 bg-olive/60" /> Selected Work
          </div>
          <h1 className="font-display text-[clamp(2.2rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-forest">
            A portfolio measured in <span className="italic text-clay">rooms</span>,<br />not square feet.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-deep">
            Five recent projects across residential renovation, veterinary, and boutique commercial work.
          </p>
        </div>
      </section>

      {/* Sentinel – fires when hero bottom leaves viewport */}
      <div ref={sentinelRef} className="h-0" />

      {/* Filter bar */}
      <section
        ref={filterRef}
        style={filterFixed ? { top: navHeight } : undefined}
        className={`bg-linen/95 py-4 border-b border-forest/10 z-40 backdrop-blur-sm transition-shadow duration-300 ${
          filterFixed ? 'fixed left-0 right-0 shadow-md' : 'relative'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {/* Horizontally scrollable on mobile, wrapping on desktop */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabClick(cat)}
                className={`flex-shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  active === cat
                    ? 'border-forest bg-forest text-linen'
                    : 'border-forest/20 text-forest hover:border-forest/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer – prevents layout jump when filter goes fixed */}
      {filterFixed && <div style={{ height: filterHeight }} />}

      {/* Grid */}
      <section ref={gridRef} className="bg-linen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative overflow-hidden rounded-[24px] bg-card"
              >
                <figure className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </figure>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full border border-forest/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-forest-deep">
                      {project.tag}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl text-forest leading-tight mb-1">{project.title}</h2>
                  <p className="text-xs uppercase tracking-[0.24em] text-olive mb-3">{project.location}</p>
                  <p className="text-sm leading-relaxed text-forest-deep line-clamp-2">{project.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-forest font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    View case study →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-forest/50">
              <p className="font-display text-2xl">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em] text-forest mb-6">
            Tell us about your <span className="italic text-terracotta">project</span>.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.02]"
          >
            Begin a project →
          </a>
        </div>
      </section>
    </main>
  );
}
