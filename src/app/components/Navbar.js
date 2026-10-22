"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIALS } from "../constants";

const navLinks = [
    { name: "Index", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Background", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

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
            className="relative mt-3 flex items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_12px_34px_rgba(40,44,48,0.1)] backdrop-blur-xl sm:px-6"
        >
            <button
                type="button"
                onClick={() => handleScroll("#home")}
                className="flex items-center gap-3"
            >
                <div className="site-brand-mark flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-bold">
                    AR
                </div>
                <span className="text-left text-sm font-semibold leading-tight text-white sm:text-base">
                    Amol Rathod<span className="ml-2 hidden font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-neutral-500 sm:inline">/ field notes</span>
                </span>
            </button>

            <div className="hidden items-center gap-0.5 xl:flex">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        type="button"
                        onClick={() => handleScroll(link.href)}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                            active === link.href.slice(1)
                                ? "bg-orange-300/10 text-orange-200"
                                : "text-neutral-300 hover:text-white"
                        }`}
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            <div className="hidden items-center gap-2 xl:flex">
                <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={`Switch to ${theme === "silver" ? "dark" : "light"} theme`}
                    aria-pressed={theme === "dark"}
                    className="rounded-lg border border-neutral-300 bg-white/70 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-neutral-700 transition hover:border-neutral-500 hover:bg-white"
                >
                    {theme === "silver" ? "DARK" : "LIGHT"}
                </button>
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
                    className="rounded-lg bg-orange-300 px-4 py-2 text-sm font-semibold text-[#17120f] transition hover:bg-orange-200"
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
                aria-expanded={isMenuOpen}
                aria-controls="portfolio-mobile-menu"
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
                        id="portfolio-mobile-menu"
                        className="absolute left-0 right-0 top-16 z-50 mx-2 flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white/[.98] p-4 shadow-xl xl:hidden"
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
                            onClick={onToggleTheme}
                            aria-pressed={theme === "dark"}
                            className="rounded-lg px-3 py-2 text-left font-mono text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
                        >
                            {theme === "silver" ? "Switch to dark theme" : "Switch to light theme"}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsMenuOpen(false);
                                window.dispatchEvent(new CustomEvent("open-command-palette"));
                            }}
                            className="rounded-lg px-3 py-2 text-left text-orange-200 hover:bg-white/5"
                        >
                            Command palette
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll("#contact");
                            }}
                            className="rounded-lg bg-orange-300 px-3 py-2 text-center text-sm font-semibold text-[#17120f]"
                        >
                            Hire me
                        </a>
                        <div className="mt-2 flex gap-2 border-t border-neutral-200 pt-3">
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                            >
                                LinkedIn ↗
                            </a>
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
