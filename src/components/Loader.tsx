import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scrolling while loader is active
    document.body.style.overflow = 'hidden';

    // Sequence timing
    const sequenceTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Unlock scroll and notify parent slightly after fade out starts
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 600); // Wait for exit animation
    }, 6000); // Hold loader for 6s total

    return () => {
      clearTimeout(sequenceTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundColor: '#F6F4EE',
            backgroundImage: [
              'radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.40) 0%, rgba(210,125,85,0.10) 40%, transparent 70%)',
              'radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.40) 0%, rgba(138,168,125,0.10) 40%, transparent 70%)',
              'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)',
            ].join(', '),
          }}
        >
          {/* Subtle slow panning gradient background elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          >
            <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-40 blur-[130px] animate-pulse" />
            <div className="pointer-events-none absolute -bottom-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-40 blur-[130px] animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

          <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />
          
          {/* Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(10,21,15,0.06)_100%)]" />

          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            <div className="relative overflow-hidden px-8 py-4">
              <motion.img
                src="/haven-logo.png"
                alt="Haven M Logo"
                className="w-48 sm:w-64 object-contain brightness-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              {/* Light Sweep Effect */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-40 mix-blend-overlay"
              />
            </div>
          </motion.div>
          
          {/* Subtle Glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.4, 0.2], scale: [0.5, 1.2, 1] }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] rounded-[100%] bg-olive/20 blur-[40px] pointer-events-none"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
