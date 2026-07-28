import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function NotFoundPage() {
  return (
    <main>
      <section
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24 sm:py-32"
        style={{
          backgroundColor: '#F6F4EE',
          backgroundImage: [
            'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)',
            'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
          ].join(', '),
        }}
      >
        {/* Glows */}
        <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
        <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />

        <motion.div 
          className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8 text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" /> 404 <span className="inline-block h-px w-10 bg-olive/60" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-[-0.03em] text-forest mb-8">
            Page not <span className="italic text-terracotta">found.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-forest-deep max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved. 
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium text-linen transition-transform hover:scale-[1.03] active:scale-[0.97]">
              <ArrowLeft size={16} /> Return to Home
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
