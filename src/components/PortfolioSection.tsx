import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const featured = projects.slice(0, 3);

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('[data-card]').forEach((item, i) => {
              setTimeout(() => {
                item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 180);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} className="mesh-sage relative overflow-hidden py-28 sm:py-40">
      {/* Top Right Green Glow */}
      <div className="pointer-events-none absolute -top-40 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-45 blur-[130px]" />
      
      {/* Bottom Left Orange Glow */}
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-[#e58a5b] to-[#f3cbab] opacity-45 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-6%] top-24 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <header className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-forest sm:text-olive">
            <span className="inline-block h-px w-10 bg-forest/60 sm:bg-olive/60" />
            02 — Selected work
          </div>
          <h2 className="font-display col-span-12 text-[clamp(2rem,7vw,6rem)] leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] text-forest">
            A portfolio measured in <span className="italic text-clay">rooms</span>, not square feet.
          </h2>
          <p className="col-span-12 max-w-md text-sm sm:text-base text-forest lg:col-span-3 lg:pt-4">
            We specialize in high-end commercial and residential work, delivering bespoke architectural and interior design solutions tailored to your unique vision.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[260px]">
          <Link
            to={`/portfolio/${featured[0].id}`}
            data-card
            className="group relative overflow-hidden rounded-[24px] lg:col-span-8 lg:row-span-2 aspect-[4/3] lg:aspect-auto"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            <img src={featured[0].heroImage} alt={featured[0].title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {featured.slice(1).map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              data-card
              className="group relative overflow-hidden rounded-[24px] lg:col-span-4 aspect-[4/5] lg:aspect-auto"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <img src={project.heroImage} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-4 rounded-full !bg-forest px-10 py-4 min-w-[260px] text-lg font-semibold !text-white !opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            View full portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
