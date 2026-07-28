import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Music2 } from "lucide-react";

const links = [
  { num: "01", label: "Home", to: "/" },
  { num: "02", label: "About", to: "/about" },
  { num: "03", label: "Services", to: "/services" },
  { num: "04", label: "Portfolio", to: "/portfolio" },
  { num: "05", label: "Contact", to: "/contact" },
];
const havenLogo = "/haven-logo.png";

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    className: "border-transparent bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:border-transparent hover:text-white",
    whileHover: { scale: 1.14, y: -4, rotate: -6 },
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    className: "border-[#1877F2] bg-[#1877F2] text-white hover:border-[#1877F2] hover:text-white",
    whileHover: { scale: 1.12, y: -3, rotate: 3 },
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V8.9c0-.5.4-.9.9-.9Z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    className: "border-transparent bg-gradient-to-br from-[#69C9D0] to-[#EE1D52] text-white hover:border-transparent hover:text-white",
    whileHover: { scale: 1.16, y: -4, rotate: 8 },
    icon: <Music2 className="h-4 w-4" />,
  },
  {
    href: "https://x.com",
    label: "Twitter",
    className: "border-forest bg-forest text-white hover:border-forest hover:text-white",
    whileHover: { scale: 1.1, y: -2, rotate: -3 },
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] px-3 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      {/* Fixed Luxury Floating Glass Header Bar */}
      <div
        className={`pointer-events-auto mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-2.5 sm:px-7 transition-all duration-300 ${scrolled
          ? "bg-[#F5F2EC]/45 border border-white/40 text-forest shadow-[0_12px_30px_-12px_rgba(35,67,58,0.16)] backdrop-blur-xl"
          : "bg-transparent border-transparent text-forest shadow-none backdrop-blur-none"
          }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={havenLogo}
            alt="Haven M Construction"
            className="h-14 w-auto sm:h-20 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive
                  ? "text-forest font-semibold"
                  : "text-forest/75 hover:text-forest"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-forest/10 border border-forest/15 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
          className="pointer-events-auto flex items-center justify-center h-10 w-10 rounded-full bg-forest/10 border border-forest/20 text-forest transition-transform active:scale-95 lg:hidden"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center">
            <span
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? "translate-y-[4px] rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl bg-[#F5F2EC]/98 backdrop-blur-2xl border border-forest/20 p-6 text-forest shadow-[0_25px_60px_-15px_rgba(35,67,58,0.25)] lg:hidden"
          >
            {/* Top Bar inside Mobile Modal */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-forest/10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-forest-deep">
                NAVIGATION MENU
              </span>
              <span className="font-mono text-xs text-forest-deep">HAVEN M</span>
            </div>

            {/* Mobile Nav Links */}
            <nav className="grid gap-2">
              {links.map((l, index) => {
                const isActive = location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all ${isActive
                        ? "bg-forest/10 text-forest border border-forest/20 font-semibold"
                        : "hover:bg-forest/5 text-forest-deep hover:text-forest"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-forest/60 group-hover:text-forest">
                          {l.num}
                        </span>
                        <span className="font-display text-2xl tracking-wide">
                          {l.label}
                        </span>
                      </div>
                      <ArrowRight
                        className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isActive ? "text-forest" : "opacity-40"
                          }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-forest/10 pt-5">
              <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-forest/60">
                <span className="h-px w-8 bg-forest/20" />
                Follow along
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, label, icon, className, whileHover }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${className ?? "border-forest/15 bg-forest/5 text-forest-deep hover:border-forest hover:text-forest"}`}
                    whileHover={whileHover}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom CTA inside Mobile Menu */}
            <div className="mt-6 grid gap-3 border-t border-forest/10 pt-5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-3.5 font-medium text-linen shadow-md transition-transform active:scale-[0.98]"
              >
                <span>Begin a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center justify-between px-2 pt-2 text-xs font-mono text-forest-deep">
                <span>Verona, NJ</span>
                <span>Luxury Construction</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}