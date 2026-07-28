import { motion } from 'framer-motion';
import { pillars } from '../../data/siteData';
import { Link } from 'react-router-dom';

import asset4 from '../../assets/asset-4.jpeg';
import asset5 from '../../assets/asset-5.jpeg';

const TEAM_IMG = asset4;
const MATERIAL_IMG = asset5;



const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-32"
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
        
        <motion.div 
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive mb-8">
                <span className="inline-block h-px w-10 bg-olive/60" /> About the Practice
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-forest">
                A studio dedicated to the <span className="italic text-terracotta">art of making.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-8 text-lg leading-relaxed text-forest-deep max-w-md">
                Haven M Construction was founded in 2000 to blur the line between design and construction. We believe that when architects and craftspeople work as one, the spaces they create become timeless. We are a unified studio of 42 artisans based in Verona, New Jersey.
              </motion.p>
            </div>
            
            <motion.div variants={scaleIn} className="lg:col-span-6">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl shadow-forest/10">
                <div className="absolute inset-0 bg-forest/5 z-10 pointer-events-none mix-blend-multiply" />
                {/* Note: I'm using an existing asset here as a placeholder. 
                    To use your uploaded Automart image, save it to src/assets/automart.jpg 
                    and change the import at the top of this file! */}
                <img src={asset4} alt="Automart building" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story */}
      <section className="bg-linen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="col-span-1 lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <figure className="aspect-[4/5] overflow-hidden rounded-[24px] shadow-xl shadow-forest/5">
              <img src={TEAM_IMG} alt="Haven M craftspeople at work" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
            </figure>
          </motion.div>
          <motion.div 
            className="col-span-1 lg:col-span-7 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
              <span className="inline-block h-px w-10 bg-olive/60" /> Our Story
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl text-forest mb-8 leading-tight">
              Reclaiming the <span className="italic text-terracotta">master builder</span> tradition.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[17px] leading-relaxed text-forest-deep mb-6">
              Gustavo Mendez started Haven M after a decade working for a large general contractor where he watched good design get lost in sub-contractor hand-offs. His answer was a studio that keeps every trade in-house — carpenters, tile setters, finishers, and painters who share a singular standard of excellence.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[17px] leading-relaxed text-forest-deep mb-10">
              Today Haven M works on fewer than fifteen projects a year. Each is led by a principal from the very first sketch to the final polish of the hardware. We move intentionally, ensuring that every detail reflects our commitment to enduring quality.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-medium text-linen transition-all hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/20 self-start group">
                Start a conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Workshop */}
      <section className="bg-sand py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mesh-sage opacity-30 pointer-events-none rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16">
             <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
               <span className="inline-block h-px w-10 bg-olive/60" /> The Workshop
             </div>
             <h2 className="font-display text-4xl sm:text-5xl text-forest max-w-3xl">Where ideas become <span className="italic text-terracotta">tangible</span>.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl text-forest mb-4">In-House Expertise</h3>
              <p className="text-[17px] leading-relaxed text-forest-deep mb-6">
                Unlike traditional firms that outsource to disparate contractors, our studio houses 42 dedicated craftspeople under one roof. From master carpenters and tile setters to metalworkers and finishing painters, our team operates with a shared language of precision.
              </p>
              <div className="h-px w-full bg-forest/10 my-8" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-4xl text-clay mb-2">42</div>
                  <div className="text-sm font-medium text-forest-deep uppercase tracking-widest">Artisans</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-clay mb-2">25+</div>
                  <div className="text-sm font-medium text-forest-deep uppercase tracking-widest">Years Avg Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-card/50 backdrop-blur-sm border border-forest/10 p-8 sm:p-12 rounded-3xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg className="w-12 h-12 text-terracotta mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M14.017 21v-7.391c0-5.714-4.956-10.423-10.908-10.423H2.017v-1.169h1.092c6.598 0 11.956 5.253 11.956 11.75v7.233h-1.048zM21.983 21v-7.391c0-5.714-4.956-10.423-10.908-10.423H9.983v-1.169h1.092c6.598 0 11.956 5.253 11.956 11.75v7.233h-1.048z" />
              </svg>
              <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-forest relative z-10 mb-6">
                "We don't just build spaces; we craft environments that breathe, age, and adapt with the people who inhabit them."
              </blockquote>
              <cite className="text-sm font-medium uppercase tracking-[0.2em] text-olive not-italic">
                — Gustavo Mendez, Founder
              </cite>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="bg-linen py-24 sm:py-32">
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive justify-center">
              <span className="inline-block h-px w-10 bg-olive/60" /> What we stand for <span className="inline-block h-px w-10 bg-olive/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-forest max-w-2xl">The principles that guide our <span className="italic text-terracotta">hands</span>.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div 
                key={p.num} 
                variants={fadeInUp}
                className="rounded-3xl border border-forest/10 bg-card p-8 hover:border-clay/40 transition-all duration-500 hover:shadow-xl hover:shadow-clay/5 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-mesh-warm opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-clay mb-4 font-semibold">{p.num}</div>
                  <div className="font-display text-2xl text-forest mb-4 group-hover:text-terracotta transition-colors">{p.title}</div>
                  <p className="text-[15px] leading-relaxed text-forest-deep/80">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Materials */}
      <section className="bg-forest text-sand py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/20 via-forest to-forest opacity-50" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div 
            className="col-span-1 lg:col-span-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-sage">
              <span className="inline-block h-px w-10 bg-sage/60" /> Materials
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-linen mb-8">
              Things that <span className="italic text-clay">age with grace</span>.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-sand/80 mb-6">
              We specify natural stone, rift-sawn white oak, handmade clay tile, patinated unlacquered brass, and hand-troweled lime plaster because they gather character over time. They look better at ten years than they do on day one.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-sand/80">
              Every material is chosen with the understanding that a room is occupied daily. It should feel honest, grounded, and deeply human — a backdrop for life to unfold.
            </motion.p>
          </motion.div>
          <motion.div 
            className="col-span-1 lg:col-span-6 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <figure className="aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl shadow-black/40 relative group">
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={MATERIAL_IMG} alt="Natural stone and wood materials" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
            </figure>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
