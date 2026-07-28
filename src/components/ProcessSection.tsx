import { useRef, useEffect } from 'react';
import { processSteps } from '../data/siteData';

import asset7 from '../assets/asset-7.jpeg';
const BLUEPRINT_IMG = asset7;

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('[data-step]').forEach((item, i) => {
              setTimeout(() => {
                item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 150);
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
    <section id="process" ref={ref} className="mesh-forest grain relative overflow-hidden py-28 text-linen sm:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <img
          src={BLUEPRINT_IMG}
          alt=""
          aria-hidden="true"
          className="absolute right-[-10%] top-[10%] w-[46%] rotate-[8deg] rounded-3xl opacity-40 mix-blend-luminosity"
        />
      </div>
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-clay/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <header className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-clay">
            <span className="inline-block h-px w-10 bg-clay/70" />
            03 — Process
          </div>
          <h2 className="font-display col-span-12 text-[clamp(2.4rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] lg:col-span-10">
            Four movements from <span className="italic text-clay">first sketch</span> to final walkthrough.
          </h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              data-step
              className="relative rounded-[24px] border border-linen/15 bg-linen/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-clay/60"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay">{step.num}</div>
              <div className="font-display mt-6 text-4xl">{step.title}</div>
              <div className="mt-4 h-px w-10 bg-linen/30" />
              <p className="mt-4 text-sm leading-relaxed text-linen/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
