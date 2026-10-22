"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT, SOCIALS } from "../constants";

const ACTIONS = [
    { id: "home", label: "Go to Home", hint: "Section", href: "#home", keywords: "top hero" },
    { id: "about", label: "Go to About", hint: "Section", href: "#about", keywords: "bio" },
    { id: "experience", label: "Go to Experience", hint: "Section", href: "#experience", keywords: "work" },
    { id: "education", label: "Go to Education", hint: "Section", href: "#education", keywords: "college mca" },
    { id: "skills", label: "Go to Skills", hint: "Section", href: "#skills", keywords: "stack tech" },
    { id: "projects", label: "Go to Projects", hint: "Section", href: "#projects", keywords: "work portfolio" },
    { id: "contact", label: "Go to Contact", hint: "Section", href: "#contact", keywords: "hire email" },
    { id: "email", label: "Copy email address", hint: "Clipboard", action: "copy-email", keywords: "mail" },
    { id: "cv", label: "Download CV", hint: "File", href: "/Amol_Rathod_CV.pdf", external: true, keywords: "resume pdf" },
    { id: "github", label: "Open GitHub", hint: "External", href: SOCIALS.github, external: true, keywords: "code repos" },
    { id: "linkedin", label: "Open LinkedIn", hint: "External", href: SOCIALS.linkedin, external: true, keywords: "network" },
];

const CommandPalette = ({ onToast }) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return ACTIONS;
        return ACTIONS.filter((item) =>
            `${item.label} ${item.hint} ${item.keywords}`.toLowerCase().includes(q)
        );
    }, [query]);

    useEffect(() => {
        setActive(0);
    }, [query, open]);

    const run = useCallback(
        async (item) => {
            if (!item) return;
            if (item.action === "copy-email") {
                try {
                    await navigator.clipboard.writeText(CONTACT.email);
                    onToast?.("Email copied to clipboard");
                } catch {
                    onToast?.("Could not copy — use the contact section");
                }
                setOpen(false);
                setQuery("");
                return;
            }
            if (item.external) {
                window.open(item.href, "_blank", "noopener,noreferrer");
            } else if (item.href) {
                const el = document.querySelector(item.href);
                el?.scrollIntoView({ behavior: "smooth" });
            }
            setOpen(false);
            setQuery("");
        },
        [onToast]
    );

    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((v) => !v);
                return;
            }
            if (!open) return;
            if (e.key === "Escape") {
                setOpen(false);
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter") {
                e.preventDefault();
                run(results[active]);
            }
        };
        const openPalette = () => setOpen(true);
        window.addEventListener("keydown", onKey);
        window.addEventListener("open-command-palette", openPalette);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("open-command-palette", openPalette);
        };
    }, [open, results, active, run]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <motion.div
                        initial={{ y: 16, opacity: 0, scale: 0.98 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 12, opacity: 0, scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white/95 shadow-2xl shadow-neutral-900/15"
                    >
                        <div className="border-b border-white/10 px-4 py-3">
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Jump, copy, or open… (try “email” or “projects”)"
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                            />
                        </div>
                        <ul className="max-h-80 overflow-y-auto p-2">
                            {results.length === 0 && (
                                <li className="px-3 py-6 text-center text-sm text-neutral-500">No matches</li>
                            )}
                            {results.map((item, i) => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => run(item)}
                                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                                            i === active
                                                ? "bg-sky-500/15 text-white"
                                                : "text-neutral-300 hover:bg-white/5"
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                                            {item.hint}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between border-t border-white/10 px-4 py-2 text-[11px] text-neutral-500">
                            <span>↑↓ navigate · enter select</span>
                            <span>esc close</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
