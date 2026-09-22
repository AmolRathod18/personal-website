"use client";

import { AnimatePresence, motion } from "motion/react";

const Toast = ({ message }) => {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-sky-500/30 bg-neutral-950/95 px-5 py-2.5 text-sm text-sky-100 shadow-lg"
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
