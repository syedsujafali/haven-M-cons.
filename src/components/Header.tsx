import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import havenLogo from "../assets/haven-logo.png";

const links = [
  { num: "01", label: "Home", to: "/" },
  { num: "02", label: "About", to: "/about" },
  { num: "03", label: "Services", to: "/services" },
  { num: "04", label: "Portfolio", to: "/portfolio" },
  { num: "05", label: "Showcase", to: "/showcase" },
  { num: "06", label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    bgClass: "bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white",
    whileHover: { scale: 1.14, y: -4, rotate: -6 },
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    bgClass: "bg-[#1877f2] text-white",
    whileHover: { scale: 1.12, y: -3, rotate: 3 },
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    label: "X",
    bgClass: "bg-black text-white",
    whileHover: { scale: 1.1, y: -2, rotate: -3 },
    icon: (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    bgClass: "bg-[#010101] text-white",
    whileHover: { scale: 1.16, y: -4, rotate: 8 },
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01.55-.02 1.09-.02 1.64 0 2.29-.28 4.61-1.35 6.64-1.19 2.24-3.41 3.97-5.91 4.54-2.49.57-5.19.16-7.39-1.17-2.19-1.31-3.77-3.63-4.26-6.17-.55-2.85.12-5.93 1.83-8.29C1.29 4.3 3.6 2.87 6.24 2.45c1.88-.29 3.81-.08 5.58.64.03.65.03 1.3.01 1.95-.9-.45-1.92-.62-2.92-.51-1.25.13-2.46.77-3.26 1.75-.85 1.05-1.17 2.46-.92 3.8.27 1.5 1.25 2.86 2.61 3.51.98.47 2.08.61 3.16.44 1.22-.2 2.34-.96 2.94-2.04.4-.72.58-1.55.57-2.38V.02z" fill="#fff" />
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show a solid background in the header during the entire page transition wipe (exit + enter)
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // 350ms exit + 800ms enter + slight buffer
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    // Block scroll on desktop / Android
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Block scroll on iOS Safari (touchmove must be non-passive to preventDefault)
    const blockTouch = (e: TouchEvent) => {
      // Allow scrolling inside the menu drawer itself
      const drawer = document.getElementById("mobile-menu-drawer");
      if (drawer && drawer.contains(e.target as Node)) return;
      e.preventDefault();
    };
    document.addEventListener("touchmove", blockTouch, { passive: false });

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", blockTouch);
    };
  }, [open]);


  // Force solid background on Project Detail pages since they have a dark hero image
  const isProjectDetail = location.pathname.startsWith("/portfolio/") && location.pathname !== "/portfolio";
  const showSolidBackground = scrolled || isTransitioning || isProjectDetail;

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] px-3 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      {/* Fixed Luxury Floating Glass Header Bar */}
      <div
        className={`pointer-events-auto mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-2.5 sm:px-7 transition-all duration-300 ${showSolidBackground
          ? "bg-[#F5F2EC]/90 border border-white/60 text-forest shadow-[0_12px_30px_-12px_rgba(35,67,58,0.16)] backdrop-blur-xl"
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
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? 'translate-y-[4px] rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition-all duration-300 ${open ? '-translate-y-[4px] -rotate-45' : ''}`}
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
            className="pointer-events-auto mx-auto mt-3 max-w-7xl overflow-y-auto rounded-3xl bg-[#F5F2EC] border border-forest/20 p-6 text-forest shadow-[0_25px_60px_-15px_rgba(35,67,58,0.25)] lg:hidden"
            id="mobile-menu-drawer"
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
                        : "hover:bg-forest/5 text-forest hover:text-forest"
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

            <div className="mt-4 border-t border-forest/10 pt-4">
              <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-forest/60">
                <span className="h-px w-8 bg-forest/20" />
                Follow along
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, label, icon, bgClass, whileHover }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${bgClass}`}
                    whileHover={whileHover}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom CTA inside Mobile Menu */}
            <div className="mt-4 border-t border-forest/10 pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-3 font-medium text-linen shadow-md transition-transform active:scale-[0.98]"
              >
                <span>Begin a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}