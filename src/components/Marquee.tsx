import { marqueeWords } from '../data/siteData';

export default function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords];

  return (
    <div className="relative overflow-hidden border-y border-forest/10 bg-sand py-6">
      <div className="flex animate-marquee-slow gap-14 whitespace-nowrap font-display text-4xl italic text-forest sm:text-6xl">
        {doubled.map((word, i) => (
          <span key={i} className="flex items-center gap-14">
            {word}
            <span aria-hidden="true" className="text-clay">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
