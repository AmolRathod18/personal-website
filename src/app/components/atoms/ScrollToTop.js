"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    type="button"
                    aria-label="Scroll to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 z-50 rounded-full border border-sky-500/50 bg-black/80 p-3 text-sky-300 shadow-lg backdrop-blur-md hover:bg-sky-500/20"
                >
                    <FaArrowUp className="h-4 w-4" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
