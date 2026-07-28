import { useState, useRef, useEffect } from 'react';

const scopes = ['Whole-Home Additions', 'Design Build', 'Value Engineering', 'Additions', 'Boutique Offices', 'Construct Veterinary Hospital', 'Not sure'];

export default function ContactSection() {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item, i) => {
              setTimeout(() => {
                item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 200);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="mesh-warm relative overflow-hidden py-28 sm:py-40">
      {/* Top Left Green Glow */}
      <div className="pointer-events-none absolute -top-40 -left-48 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#9dbd90] to-[#c7e3bb] opacity-45 blur-[130px]" />
      
      {/* Bottom Right Orange Glow */}
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#e58a5b] to-[#f3cbab] opacity-45 blur-[130px]" />

      <div className="pointer-events-none absolute -top-20 left-[-8%] h-[420px] w-[420px] rounded-full bg-terracotta/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-8">
        <div className="col-span-1 lg:col-span-6">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" /> 06 — Begin
          </div>
          <h2 data-reveal className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-forest" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            Tell us about the <span className="italic text-terracotta">Project</span> you&apos;re imagining.
          </h2>
          <p className="mt-8 max-w-md text-forest-deep">
            We take on a small number of new projects each season. Share a few details — we reply personally within two business days.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Studio</dt>
              <dd className="font-display mt-1 text-lg text-forest">Verona, NJ 07044</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Direct</dt>
              <dd className="font-display mt-1 text-lg text-forest break-all">gus@havenmconstruction.com</dd>
            </div>
          </dl>
        </div>

        <form
          data-reveal
          onSubmit={handleSubmit}
          className="glass col-span-12 rounded-[28px] p-6 sm:p-10 lg:col-span-6"
          style={{ opacity: 0, transform: 'translateY(40px)' }}
        >
          {submitted ? (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
              <div className="font-display text-4xl text-forest">Thank you.</div>
              <p className="text-forest-deep">We&apos;ll be in touch within two business days.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {[
                { label: 'Your name', type: 'text', placeholder: 'Ada Lovelace' },
                { label: 'Email', type: 'email', placeholder: 'ada@studio.com' },
                { label: 'Project location', type: 'text', placeholder: 'City, state' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-[10px] uppercase tracking-[0.28em] text-olive">Scope</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {scopes.map((scope) => (
                    <button key={scope} type="button" onClick={() => setSelected(scope)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${selected === scope ? 'border-clay bg-clay text-linen' : 'border-forest/20 bg-linen/60 text-forest hover:border-clay'}`}>
                      {scope}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.28em] text-olive">A few words</label>
                <textarea rows={4} placeholder="Tell us about the space, the timeline, the feeling you want." className="mt-3 w-full resize-none rounded-2xl border border-forest/15 bg-linen/60 p-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.01]">
                Send inquiry <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
