import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
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
    <section id="contact" ref={ref} className="mesh-warm relative py-16 sm:py-28 lg:py-40" style={{ overflow: 'clip' }}>
      {/* Glows — kept inside but clipped so they never cause horizontal scroll */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#9dbd90] to-[#c7e3bb] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#e58a5b] to-[#f3cbab] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 left-0 h-[380px] w-[380px] rounded-full bg-terracotta/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left: copy ── */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
              <span className="inline-block h-px w-10 bg-olive/60" /> 06 — Begin
            </div>

            <h2
              data-reveal
              className="font-display leading-[1.1] tracking-[-0.02em] text-forest"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              Tell us about the{' '}
              <span className="italic text-terracotta">Project</span>{' '}
              you&apos;re imagining.
            </h2>

            <p className="mt-5 sm:mt-7 text-sm sm:text-base leading-relaxed text-forest-deep">
              We take on a small number of new projects each season. Share a
              few details — we reply personally within two business days.
            </p>

            <dl className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Studio</dt>
                <dd className="font-display mt-1 text-base sm:text-lg text-forest">Verona, NJ 07044</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-olive">Direct</dt>
                <dd
                  className="font-display mt-1 text-base sm:text-lg text-forest"
                  style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                >
                  gus@havenmconstruction.com
                </dd>
              </div>
            </dl>
          </div>

          {/* ── Right: form ── */}
          <form
            data-reveal
            onSubmit={handleSubmit}
            className="glass min-w-0 rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-10"
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
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-3.5 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">A few words</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the space, the timeline, the feeling you want."
                    className="mt-3 w-full resize-none rounded-2xl border border-forest/15 bg-linen/60 p-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.01]"
                >
                  Send inquiry <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
