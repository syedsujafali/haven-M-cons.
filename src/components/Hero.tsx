import { useRef, useEffect } from 'react';

// Using warm interior images that match the original site's aesthetic
import asset6 from '../assets/asset-6.jpeg';
import img31 from '../assets/31.jpeg';
import asset5 from '../assets/asset-5.jpeg';

const HERO_IMG    = asset6;
const CLINIC_IMG  = img31;
const OFFICE_IMG  = asset5;

const stats = [
  { value: '30',   label: 'Years building'    },
  { value: '180+', label: 'Homes & spaces'    },
  { value: '42',   label: 'Craftspeople'      },
  { value: '9.8',  label: 'Avg. client rating'},
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('[data-animate]');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        item.style.opacity    = '1';
        item.style.transform  = 'translateY(0) scale(1)';
      }, 150 + i * 200);
    });
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36"
      style={{
        backgroundColor: '#F6F4EE',
        backgroundImage: [
          'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
          'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
          'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
        ].join(', '),
      }}
    >
      {/* Top Left Bright Glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
      
      {/* Top Right Bright Glow */}
      <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

      {/* Subtle SVG grid overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-multiply"
      >
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1C3A2A" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-8">

        {/* Label row */}
        <div
          data-animate
          className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="inline-block h-px w-10 bg-olive/60" />
          Est. 2000 · Construction studio
        </div>

        {/* Headline — 9 cols */}
        <h1
          data-animate
          className="font-display col-span-12 text-[clamp(2.5rem,9.5vw,10rem)] leading-[0.92] tracking-[-0.03em] text-forest lg:col-span-9"
          style={{ opacity: 0, transform: 'translateY(40px)' }}
        >
          Built
          <span className="mx-3 inline-block align-middle text-clay sm:mx-5">·</span>
          <span className="italic text-terracotta">with</span>
          <br />
          intention.
        </h1>

        {/* Sidebar — 3 cols: description + CTAs */}
        <div
          data-animate
          className="col-span-12 flex flex-col justify-start gap-8 lg:col-span-3 lg:pt-0 lg:gap-20"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <p className="max-w-xs text-[17px] leading-relaxed text-forest-deep">
            Haven M Construction designs and builds refined residential and commercial spaces
            where craft is quiet and material speaks.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-linen transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Begin a project <span aria-hidden="true">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1 text-sm text-forest-deep hover:text-forest transition-colors"
            >
              See the work
            </a>
          </div>
        </div>

        {/* Image grid */}
        <div className="col-span-12 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Large hero image */}
          <figure
            data-animate
            className="relative col-span-12 overflow-hidden rounded-[24px] aspect-[16/9] lg:col-span-8 lg:aspect-[4/3] shadow-[0_32px_80px_-24px_rgba(28,58,42,0.35)]"
            style={{ opacity: 0, transform: 'scale(0.96)' }}
          >
            <img
              src={HERO_IMG}
              alt="Sunlit residence interior — Ridgemont Residence"
              className="h-full w-full object-cover"
            />
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2018]/80 via-[#0F2018]/20 to-transparent p-5 sm:p-6 text-linen">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] opacity-75 mb-1">Featured</div>
                  <div className="font-display text-xl sm:text-2xl leading-tight">The Ridgemont Residence</div>
                </div>
                <div className="glass-dark hidden rounded-full px-4 py-2 text-xs sm:block whitespace-nowrap">
                  Whole-home renovation · 6,200 sqft
                </div>
              </div>
            </div>
          </figure>

          {/* Two stacked side images */}
          <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1">
            <figure
              data-animate
              className="relative overflow-hidden rounded-[18px] aspect-[4/3] lg:aspect-[4/3]"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <img
                src={CLINIC_IMG}
                alt="Pine Grove Animal Hospital interior"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure
              data-animate
              className="relative overflow-hidden rounded-[18px] aspect-[4/3] lg:aspect-[4/3]"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <img
                src={OFFICE_IMG}
                alt="Cedar & Stone boutique office interior"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* Stats row — inside hero at bottom */}
        <div className="col-span-12 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-animate
              className="glass rounded-2xl px-5 py-4"
              style={{ opacity: 0, transform: 'translateY(24px)' }}
            >
              <div className="font-display text-3xl text-forest">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-olive">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
