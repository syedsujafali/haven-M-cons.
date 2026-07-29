import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import havenLogo from "../assets/haven-logo.png";

const EASE = [0.76, 0, 0.24, 1]; // Premium cinematic ease
const DURATION = 1.3;

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
                                y: 30,
                                scale: 0.98,
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: DURATION - 0.2,
                                    delay: 0.3,
                                    ease: EASE,
                                },
                            },
                            exit: {
                                opacity: 1,
                                y: -20,
                                scale: 0.98,
                                transition: {
                                    duration: 0.5,
                                    ease: EASE,
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
                            initial: { y: "0%" },
                            animate: {
                                y: ["0%", "0%", "-100%"],
                                transition: {
                                    duration: DURATION,
                                    times: [0, 0.35, 1],
                                    ease: EASE,
                                },
                            },
                            exit: {
                                y: ["-100%", "0%"],
                                transition: {
                                    duration: 0.5,
                                    ease: EASE,
                                },
                            },
                        }}
                        className="fixed inset-x-0 top-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-b border-[#D4B886]/20 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,184,134,0.12),transparent_60%)]" />
                    </motion.div>

                    {/* Architectural Bottom Panel Wipe */}
                    <motion.div
                        variants={{
                            initial: { y: "0%" },
                            animate: {
                                y: ["0%", "0%", "100%"],
                                transition: {
                                    duration: DURATION,
                                    times: [0, 0.35, 1],
                                    ease: EASE,
                                },
                            },
                            exit: {
                                y: ["100%", "0%"],
                                transition: {
                                    duration: 0.5,
                                    ease: EASE,
                                },
                            },
                        }}
                        className="fixed inset-x-0 bottom-0 z-[100] h-[50vh] bg-[#091512] shadow-2xl overflow-hidden pointer-events-none border-t border-[#D4B886]/20 transform-gpu will-change-transform"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,184,134,0.12),transparent_60%)]" />
                    </motion.div>

                    {/* Big Center Logo */}
                    <motion.div
                        variants={{
                            initial: { opacity: 1, scale: 1 },
                            animate: {
                                opacity: [1, 1, 1, 0],
                                scale: [1, 1, 1, 1.05],
                                transition: {
                                    duration: DURATION,
                                    times: [0, 0.15, 0.35, 1],
                                    ease: EASE,
                                },
                            },
                            exit: {
                                opacity: [0, 1],
                                scale: [0.95, 1],
                                transition: { duration: 0.5, ease: EASE },
                            },
                        }}
                        className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none p-4 transform-gpu"
                    >
                        <img
                            src={havenLogo}
                            alt="Haven M Logo"
                            className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain brightness-200 drop-shadow-[0_10px_35px_rgba(212,184,134,0.3)]"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
