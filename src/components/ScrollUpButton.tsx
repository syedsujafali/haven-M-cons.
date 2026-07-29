import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

/** Sample the RGB of the background sitting directly under the button */
function getBgColorAtButton(): { r: number; g: number; b: number } | null {
  const x = window.innerWidth - 40;
  const y = window.innerHeight - 60;
  const el = document.elementFromPoint(x, y);
  if (!el) return null;

  let node: Element | null = el;
  while (node && node !== document.body) {
    const bg = window.getComputedStyle(node).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (match) {
      const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
      if (alpha > 0.1) {
        return { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]) };
      }
    }
    node = node.parentElement;
  }
  return null;
}

/** Returns true if the sampled color is noticeably green */
function isGreenBackground(c: { r: number; g: number; b: number }): boolean {
  const greenLead = c.g - Math.max(c.r, c.b);
  return greenLead > 15 && c.g > 50;
}

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);
  const [overGreen, setOverGreen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 400);
      const color = getBgColorAtButton();
      setOverGreen(color ? isGreenBackground(color) : false);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Over green → dark forest-deep button; over anything else → warm clay
  const btnClass = overGreen
    ? 'bg-forest-deep text-linen shadow-[0_8px_24px_-6px_rgba(20,39,28,0.5)] hover:shadow-[0_12px_32px_-6px_rgba(20,39,28,0.7)]'
    : 'bg-clay text-linen shadow-[0_8px_24px_-6px_rgba(200,113,74,0.5)] hover:shadow-[0_12px_32px_-6px_rgba(200,113,74,0.7)]';

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollUp}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 30, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 30, scale: 0.5, rotate: 45 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6
          }}
          whileHover="hover"
          whileTap="tap"
          variants={{
            hover: { scale: 1.1 },
            tap: { scale: 0.9 }
          }}
          className={`fixed bottom-6 right-5 z-[998] flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500 sm:bottom-8 sm:right-8 ${btnClass}`}
        >
          {/* Scroll progress ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 p-[2px]" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              className="stroke-current opacity-20"
              strokeWidth="6"
            />
            <motion.circle
              cx="50" cy="50" r="46"
              fill="none"
              className="stroke-forest drop-shadow-md"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength: scaleProgress }}
            />
          </svg>

          {/* Up Arrow with hover bounce */}
          <motion.svg
            viewBox="0 0 24 24"
            className="relative z-10 h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hover: { 
                y: [0, -4, 0], 
                transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } 
              }
            }}
          >
            <path d="M12 20V4M5 11l7-7 7 7" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
