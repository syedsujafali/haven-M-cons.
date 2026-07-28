import { services } from '../../data/siteData';
import ProcessSection from '../../components/ProcessSection';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';
import asset1 from '../../assets/asset-1.jpeg';
import asset2 from '../../assets/asset-2.jpeg';
import asset3 from '../../assets/asset-3.jpeg';
import asset4 from '../../assets/asset-4.jpeg';
import asset5 from '../../assets/asset-5.jpeg';
import asset6 from '../../assets/asset-6.jpeg';

const serviceDetails = [
  {
    num: '01',
    title: 'Whole-Home Additions',
    description: 'Full-scope structural expansions and rebuilds of primary residences. We integrate new square footage flawlessly into the original architecture.',
    img: asset1,
    tag: 'Residential',
  },
  {
    num: '02',
    title: 'Design Build',
    description: 'A holistic architectural approach where design and construction happen under one roof. We draft, engineer, and build as one unified team.',
    img: asset2,
    tag: 'Process',
  },
  {
    num: '03',
    title: 'Value Engineering',
    description: 'Strategic analysis of materials and methods to maximize architectural impact while strictly managing budgets and timelines.',
    img: asset3,
    tag: 'Process',
  },
  {
    num: '04',
    title: 'Additions',
    description: 'Structurally integrated additions — second stories, detached studios, and ADUs — designed to read as natural extensions of the property.',
    img: asset4,
    tag: 'Residential',
  },
  {
    num: '05',
    title: 'Boutique Offices',
    description: 'Owner-run practices, creative studios, and small firms. We build commercial interiors that feel like a direct reflection of your brand.',
    img: asset5,
    tag: 'Commercial',
  },
  {
    num: '06',
    title: 'Construct Veterinary Hospital',
    description: 'Specialized animal hospitals and clinical suites. Code-compliant, acoustically considered, highly durable, and human-warm.',
    img: asset6,
    tag: 'Specialty',
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
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
        {/* Top Left Bright Glow */}
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
        
        {/* Top Right Bright Glow */}
        <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
            <span className="inline-block h-px w-10 bg-olive/60" /> What We Build
          </div>
          <h1 className="font-display text-[clamp(2.2rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-forest max-w-4xl">
            Six practices,<br /><span className="italic text-terracotta">one hand.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-deep">
            Every project is led by a Haven M principal from first conversation to final walkthrough. No franchised sub-contractors. No anonymous site crews.
          </p>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="bg-linen py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-16">
            {serviceDetails.map((service, i) => (
              <div key={service.num} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="col-span-1 lg:col-span-6">
                  <figure className="aspect-[16/10] overflow-hidden rounded-[24px]">
                    <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                  </figure>
                </div>
                <div className="col-span-1 lg:col-span-6 lg:px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-full border border-forest/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-forest-deep">{service.tag}</span>
                    <span className="font-mono text-xs text-clay">{service.num}</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl leading-tight text-forest mb-4">{service.title}</h2>
                  <p className="text-[15px] leading-relaxed text-forest-deep mb-6">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-clay transition-colors">
                    Start this project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* CTA */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-forest mb-6">
            Ready to <span className="italic text-terracotta">begin</span>?
          </h2>
          <p className="text-forest-deep mb-8 max-w-md mx-auto">We take on a small number of new projects each season. Reach out and let us know what you're imagining.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.02]">
            Begin a project →
          </Link>
        </div>
      </section>
    </main>
  );
}
