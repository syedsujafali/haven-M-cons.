import { stats } from '../data/siteData';
import { useRef, useEffect } from 'react';

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll<HTMLElement>('[data-stat]');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="col-span-12 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-stat
          className="glass rounded-2xl px-5 py-4"
          style={{ opacity: 0, transform: 'translateY(24px)' }}
        >
          <div className="font-display text-3xl text-forest">{stat.value}</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-olive">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
