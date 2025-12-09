"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSection, setCurrentSection] = useState("");

    useEffect(() => {
        const sections = [
            { id: "home", element: null },
            { id: "about", element: null },
            { id: "education", element: null },
            { id: "skills", element: null },
            { id: "experience", element: null },
            { id: "projects", element: null },
            { id: "contact", element: null },
        ];

        // Get all section elements
        sections.forEach(section => {
            section.element = document.getElementById(section.id);
        });

        const handleScroll = () => {
            const scrollPos = window.pageYOffset + window.innerHeight / 3;
            
            // Show button after 300px
            setIsVisible(window.pageYOffset > 300);

            // Find current section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const sectionTop = section.element.offsetTop;
                    if (scrollPos >= sectionTop) {
                        setCurrentSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2"
                >
                    {/* Current Section Indicator */}
                    <motion.div
                        animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-sky-400 text-xs font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-sky-500/50"
                    >
                        {currentSection}
                    </motion.div>
                    
                    {/* Scroll Button */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="bg-transparent backdrop-blur-md border-2 border-sky-500 text-sky-400 p-4 rounded-full shadow-lg hover:shadow-sky-500/50 transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
