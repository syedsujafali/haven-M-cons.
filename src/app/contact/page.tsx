import { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Studio', value: 'Verona, NJ 07044', sub: 'By appointment only' },
  { icon: Mail, label: 'Email', value: 'gus@havenmconstruction.com', sub: 'We reply within 2 business days' },
  { icon: Phone, label: 'Phone', value: '201 264-3506', sub: 'Mon–Fri, 8am–6pm ET' },
  { icon: Clock, label: 'Season', value: 'Now booking for 2026', sub: 'Limited availability' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Header */}
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
            <span className="inline-block h-px w-10 bg-olive/60" /> Begin
          </div>
          <h1 className="font-display text-[clamp(2.2rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-forest max-w-4xl">
            Tell us about the <span className="italic text-terracotta">project</span><br />you're imagining.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-deep">
            We take on a small number of new projects each season. Share a few details and we'll reply personally within two business days.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-linen py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info */}
          <div className="col-span-1 lg:col-span-4 space-y-8">
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/5 border border-forest/10">
                  <Icon size={16} className="text-clay" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-olive mb-1">{label}</div>
                  <div className="font-display text-lg text-forest break-all">{value}</div>
                  <div className="text-xs text-forest/60 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-sand p-6 mt-10">
              <div className="font-display text-xl text-forest mb-3">What to expect</div>
              <ol className="space-y-2 text-sm text-forest-deep list-none">
                {[
                  'We review your inquiry within 48 hours',
                  'A principal schedules a 30-min discovery call',
                  'We visit the space and provide a detailed proposal',
                  'We begin when you are ready',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-[10px] text-clay mt-0.5">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-1 lg:col-span-8">
            {submitted ? (
              <div className="glass rounded-[28px] p-12 text-center min-h-[400px] flex flex-col items-center justify-center gap-6">
                <div className="font-display text-6xl text-terracotta">"</div>
                <h2 className="font-display text-4xl text-forest">Thank you.</h2>
                <p className="text-forest-deep max-w-sm">We've received your inquiry and will reply personally within two business days.</p>
                <div className="font-mono text-xs text-olive uppercase tracking-[0.28em]">Haven M Construction</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-[28px] p-6 sm:p-12 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Your name', type: 'text', placeholder: 'Ada Lovelace' },
                    { label: 'Email address', type: 'email', placeholder: 'ada@studio.com' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-[10px] uppercase tracking-[0.28em] text-olive">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">Project location</label>
                  <input type="text" placeholder="City, state" className="mt-3 w-full rounded-full border border-forest/15 bg-linen/60 px-5 py-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.28em] text-olive">Tell us about the space</label>
                  <textarea rows={5} placeholder="The timeline, the feeling you want, anything that feels important." className="mt-3 w-full resize-none rounded-2xl border border-forest/15 bg-linen/60 p-4 text-sm text-forest placeholder:text-forest/40 focus:border-clay focus:outline-none transition-colors" />
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.01]">
                  Send inquiry <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
