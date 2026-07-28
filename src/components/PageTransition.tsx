import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import havenLogo from "../assets/haven-logo.png";

export function PageTransition({ children }: { children: ReactNode }) {
    const location = useLocation();

    useEffect(() => {
        // Instant scroll to top on route change
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                >
                    {/* Main Page Content Animation */}
                    <motion.div
                        variants={{
                            initial: {
                                opacity: 0,
                                y: 12,
                                scale: 0.995,
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.9,
                                    delay: 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                            exit: {
                                opacity: 0,
                                y: -10,
                                scale: 0.99,
                                transition: {
                                    duration: 0.50,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="will-change-transform transform-gpu"
                    >
                        {children}
                    </motion.div>

                    {/* Architectural Top Panel Wipe */}
                    <motion.div
                        variants={{
                            initial: { y: "-100%" },
                            animate: {
                                y: ["0%", "0%", "-100%"],
                                transition: {
                                    duration: 1.05,
                                    times: [0, 0.22, 1],
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                            exit: {
                                y: ["-100%", "0%"],
                                transition: {
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="fixed inset-x-0 top-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-b border-[#D4B886]/30 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,184,134,0.18),transparent_70%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    </motion.div>

                    {/* Architectural Bottom Panel Wipe */}
                    <motion.div
                        variants={{
                            initial: { y: "100%" },
                            animate: {
                                y: ["0%", "0%", "100%"],
                                transition: {
                                    duration: 1.05,
                                    times: [0, 0.22, 1],
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                            exit: {
                                y: ["100%", "0%"],
                                transition: {
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="fixed inset-x-0 bottom-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-t border-[#D4B886]/30 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,184,134,0.18),transparent_70%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    </motion.div>

                    {/* Central Gold Seam Flare */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scaleX: 0 },
                            animate: {
                                opacity: [0, 1, 1, 0],
                                scaleX: [0, 1, 1, 0],
                                transition: { duration: 1.05, times: [0, 0.18, 0.42, 1] },
                            },
                            exit: {
                                opacity: [0, 1],
                                scaleX: [0, 1],
                                transition: { duration: 0.45 },
                            },
                        }}
                        className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-[101] h-[2px] bg-gradient-to-r from-transparent via-[#D4B886] to-transparent pointer-events-none shadow-[0_0_25px_#D4B886] transform-gpu"
                    />

                    {/* Big Center Logo - Minimal & Bold (All Text Removed) */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.85 },
                            animate: {
                                opacity: [0, 1, 1, 0],
                                scale: [0.85, 1.05, 1, 0.92],
                                transition: {
                                    duration: 1.05,
                                    times: [0, 0.2, 0.6, 1],
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                            exit: {
                                opacity: [0, 1],
                                scale: [0.85, 1],
                                transition: { duration: 0.45 },
                            },
                        }}
                        className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none p-4 transform-gpu"
                    >
                        <img
                            src={havenLogo}
                            alt="Haven M Logo"
                            className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain brightness-200 drop-shadow-[0_10px_35px_rgba(212,184,134,0.4)]"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
