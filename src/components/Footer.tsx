import { Link } from 'react-router-dom';

const footerLinks = {
  Studio: [
    { label: 'Verona, NJ', href: '#' },
    { label: '07044', href: '#' },
    { label: 'By appointment only', href: '#' },
  ],
  Contact: [
    { label: 'gus@havenmconstruction.com', href: 'mailto:gus@havenmconstruction.com' },
    { label: '201 264-3506', href: 'tel:+12012643506' },
  ],
  Practice: [
    { label: 'Residential', href: '/services' },
    { label: 'Commercial', href: '/services' },
    { label: 'Veterinary', href: '/services' },
    { label: 'Boutique interiors', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    bgClass: 'bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white',
    svg: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    bgClass: 'bg-[#1877f2] text-white',
    svg: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    bgClass: 'bg-black text-white',
    svg: (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    bgClass: 'bg-[#010101] text-white',
    svg: (
      <svg className="h-4 w-4" viewBox="0 0 24 24">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01.55-.02 1.09-.02 1.64 0 2.29-.28 4.61-1.35 6.64-1.19 2.24-3.41 3.97-5.91 4.54-2.49.57-5.19.16-7.39-1.17-2.19-1.31-3.77-3.63-4.26-6.17-.55-2.85.12-5.93 1.83-8.29C1.29 4.3 3.6 2.87 6.24 2.45c1.88-.29 3.81-.08 5.58.64.03.65.03 1.3.01 1.95-.9-.45-1.92-.62-2.92-.51-1.25.13-2.46.77-3.26 1.75-.85 1.05-1.17 2.46-.92 3.8.27 1.5 1.25 2.86 2.61 3.51.98.47 2.08.61 3.16.44 1.22-.2 2.34-.96 2.94-2.04.4-.72.58-1.55.57-2.38V.02z" fill="#fff" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="studio" className="mesh-forest relative text-linen" style={{ overflow: 'clip' }}>
      {/* Glows — clipped so they never cause horizontal scroll */}
      <div className="pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-24 pb-8">

        {/* ── Top grid: tagline + link columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Tagline */}
          <div className="min-w-0">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-clay">
              <span className="inline-block h-px w-10 bg-clay/70" />
              Haven M · Est. 2000
            </div>
            <div
              className="font-display mt-6 leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 9rem)' }}
            >
              Let&apos;s
              <br />
              <span className="italic text-clay">build a haven.</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 min-w-0">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title} className={`min-w-0 ${title === 'Contact' ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-clay">{title}</div>
                <ul className="mt-4 space-y-2.5 text-sm text-linen/80">
                  {items.map((item) => (
                    <li key={item.label}>
                      {item.href === '#' ? (
                        item.label
                      ) : item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
                        <a href={item.href} className="hover:text-linen transition-colors">
                          {item.label}
                        </a>
                      ) : (
                        <Link to={item.href} className="hover:text-linen transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Watermark ── constrained so it never scrolls horizontally */}
        <div aria-hidden="true" className="mt-12 sm:mt-16 select-none w-full overflow-hidden">
          <div
            className="font-display leading-[0.85] tracking-[-0.05em] text-linen/10 whitespace-nowrap"
            style={{ fontSize: 'clamp(2.5rem, 16vw, 18rem)' }}
          >
            HAVEN <span className="text-clay">M</span>
          </div>
          <div
            className="font-display leading-[0.85] tracking-[-0.05em] text-linen/10 uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(1.4rem, 9vw, 10rem)' }}
          >
            CONSTRUCTION
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-6 sm:mt-8 border-t border-linen/15 pt-6 text-xs text-linen/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright + socials */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span>© 2026 Haven M Construction, LLC. All rights reserved.</span>
              <div className="flex gap-2">
                {socials.map(({ label, href, svg, bgClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:brightness-110 ${bgClass}`}
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Privacy / Terms */}
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-linen transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-linen transition-colors">Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
