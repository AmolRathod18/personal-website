"use client";

import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Web Development", "Full Stack", "Cybersecurity", "Python"];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [query, setQuery] = useState("");
    const [expanded, setExpanded] = useState(null);

    const visible = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PROJECTS.filter((p) => {
            const byCat = filter === "All" || p.category === filter;
            const byQ =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.technologies.join(" ").toLowerCase().includes(q);
            return byCat && byQ;
        });
    }, [filter, query]);

    return (
        <div className="relative pb-20 pt-10">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                    Featured <span className="text-sky-400">projects</span>
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-neutral-400">
                    Filter by domain or search a technology. Each card is a real build, not a template demo.
                </p>
            </div>

            <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-2">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setFilter(f)}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                                filter === f
                                    ? "bg-sky-500 text-white"
                                    : "border border-white/15 text-neutral-300 hover:border-sky-400"
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search React, Flask, JWT…"
                    className="w-full max-w-xs rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-sky-400"
                />
            </div>

            <div className="space-y-16">
                {visible.map((p, index) => (
                    <motion.article
                        key={p.title}
                        layout
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="overflow-hidden rounded-3xl border border-sky-500/20 bg-neutral-900/50"
                    >
                        <div className="flex flex-col lg:flex-row">
                            <div className={`w-full p-6 lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={640}
                                        height={400}
                                        className="h-auto w-full object-cover"
                                    />
                                    {p.year && (
                                        <span className="absolute right-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
                                            {p.year}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className={`flex w-full flex-col justify-center p-8 lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                                    {p.category} · {p.highlight}
                                </p>
                                <h3 className="mt-2 text-2xl font-bold text-white lg:text-3xl">{p.title}</h3>
                                <p className="mt-4 hidden text-neutral-300 lg:block">{p.description}</p>

                                <div className="mt-4 lg:hidden">
                                    <button
                                        type="button"
                                        onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                                        className="w-full rounded-xl border border-sky-500/40 px-4 py-2 text-sm font-semibold"
                                    >
                                        {expanded === p.title ? "Hide details" : "View details"}
                                    </button>
                                    <AnimatePresence>
                                        {expanded === p.title && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="mt-3 text-sm text-neutral-300"
                                            >
                                                {p.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {p.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-sky-500/25 bg-sky-950/40 px-3 py-1 text-xs text-sky-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
                                >
                                    {p.linkLabel || "View on GitHub"} →
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
                {visible.length === 0 && (
                    <p className="py-12 text-center text-neutral-500">No projects match that filter.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
