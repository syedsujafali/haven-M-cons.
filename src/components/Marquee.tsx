import { marqueeWords } from '../data/siteData';

// Quadruple items on mobile so -50% translate always has enough content
const mobile = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];
const desktop = [...marqueeWords, ...marqueeWords];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-forest/10 bg-sand py-6">
      {/* Mobile — very fast */}
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-14 whitespace-nowrap font-display text-4xl italic text-forest sm:hidden">
        {mobile.map((word, i) => (
          <span key={i} className="flex items-center gap-14">
            {word}
            <span aria-hidden="true" className="text-clay">✳</span>
          </span>
        ))}
      </div>

      {/* Desktop — slow */}
      <div className="hidden w-max animate-marquee-slow gap-14 whitespace-nowrap font-display text-6xl italic text-forest sm:flex">
        {desktop.map((word, i) => (
          <span key={i} className="flex items-center gap-14">
            {word}
            <span aria-hidden="true" className="text-clay">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
