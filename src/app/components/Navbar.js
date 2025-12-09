"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleScroll = (href) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav 
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
            className="flex items-center justify-between py-4 px-8 lg:px-12 xl:px-16 relative z-50 max-w-[1600px] mx-auto w-full"
        >
            {/* Navbar Background with Glassmorphism */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-blue-900/40 to-slate-900/40 backdrop-blur-xl border border-sky-500/20 rounded-2xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Logo */}
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                className="flex flex-shrink-0 items-center gap-3 cursor-pointer"
                onClick={() => handleScroll("#home")}
            >
                <motion.div 
                    className="flex items-center gap-3"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/50"
                    >
                        <FaCode className="text-white text-xl" />
                    </motion.div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">Amol Rathod</span>
                </motion.div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link, index) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: "spring" }}
                        className="relative group"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScroll(link.href)}
                            className="text-white font-semibold text-base px-5 py-2 rounded-lg hover:text-sky-300 transition-colors duration-300"
                        >
                            {link.name}
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-sky-400 transition duration-300 relative p-2"
                >
                    <motion.svg 
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        className="absolute top-20 left-0 right-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-6 flex flex-col gap-2 lg:hidden z-50 mx-4 shadow-2xl shadow-sky-500/20"
                    >
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.05, duration: 0.3, type: "spring" }}
                                whileHover={{ x: 10, backgroundColor: "rgba(14, 165, 233, 0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleScroll(link.href)}
                                className="text-left text-gray-300 hover:text-sky-300 transition duration-300 font-medium px-4 py-3 rounded-lg bg-sky-500/5 hover:bg-sky-500/10 relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-sky-500/30 to-transparent"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">{link.name}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Button and Social Links */}
            <div className="hidden lg:flex items-center justify-center gap-4">
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("#contact");
                    }}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-6 py-2.5 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50"
                >
                    Hire Me
                </motion.a>
                <div className="flex items-center gap-2">
                {[
                    {
                        icon: FaLinkedin,
                        href: "https://www.linkedin.com/in/amol-rathod-b84746281/",
                        label: "LinkedIn",
                        color: "from-blue-500 to-blue-600",
                    },
                    {
                        icon: FaGithub,
                        href: "https://github.com/AmolRathod18",
                        label: "GitHub",
                        color: "from-gray-700 to-gray-900",
                    },
                ].map((social, index) => (
                    <motion.a
                        key={social.label}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.85, rotate: -10 }}
                        className={`bg-gradient-to-br ${social.color} p-3 rounded-lg text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/60 transition duration-300`}
                    >
                        <social.icon size={20} />
                    </motion.a>
                ))}
                </div>
            </div>

            {/* Mobile Social Links */}
            <div className="lg:hidden flex items-center gap-2">
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    href="https://www.linkedin.com/in/amol-rathod-b84746281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg text-white"
                >
                    <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                    href="https://github.com/AmolRathod18"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className="bg-gradient-to-br from-gray-700 to-gray-900 p-2 rounded-lg text-white"
                >
                    <FaGithub size={18} />
                </motion.a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
