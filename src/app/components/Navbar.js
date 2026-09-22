"use client";

import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIALS } from "../constants";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Terminal", href: "#terminal" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const ids = navLinks.map((l) => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const handleScroll = (href) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative sticky top-3 z-50 mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl sm:px-6"
        >
            <button
                type="button"
                onClick={() => handleScroll("#home")}
                className="flex items-center gap-3"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black">
                    <FaCode className="text-sky-300" />
                </div>
                <span className="text-lg font-semibold text-white">Amol Rathod</span>
            </button>

            <div className="hidden items-center gap-0.5 xl:flex">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        type="button"
                        onClick={() => handleScroll(link.href)}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                            active === link.href.slice(1)
                                ? "bg-sky-500/15 text-sky-200"
                                : "text-neutral-300 hover:text-white"
                        }`}
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
                <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                    className="rounded-lg border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-neutral-400 hover:text-white"
                    title="Command palette"
                >
                    Ctrl K
                </button>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("#contact");
                    }}
                    className="rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-sky-200"
                >
                    Hire me
                </a>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg bg-blue-600 p-2 text-white">
                    <FaLinkedin size={16} />
                </a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg bg-neutral-800 p-2 text-white">
                    <FaGithub size={16} />
                </a>
            </div>

            <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white xl:hidden"
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 right-0 top-16 z-50 mx-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-4 xl:hidden"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => handleScroll(link.href)}
                                className="rounded-lg px-3 py-2 text-left text-neutral-200 hover:bg-white/5"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                setIsMenuOpen(false);
                                window.dispatchEvent(new CustomEvent("open-command-palette"));
                            }}
                            className="rounded-lg px-3 py-2 text-left text-sky-300 hover:bg-white/5"
                        >
                            Command palette
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll("#contact");
                            }}
                            className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-black"
                        >
                            Hire me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
