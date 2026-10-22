"use client";

import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Web Development", "Full Stack", "Cybersecurity", "Python"];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [query, setQuery] = useState("");
    const [selectedTitle, setSelectedTitle] = useState(PROJECTS[0]?.title ?? "");

    const visible = useMemo(() => {
        const search = query.trim().toLowerCase();
        return PROJECTS.filter((project) => {
            const matchesCategory = filter === "All" || project.category === filter;
            const searchable = [
                project.title,
                project.category,
                project.highlight,
                project.description,
                ...project.technologies,
            ]
                .join(" ")
                .toLowerCase();
            return matchesCategory && (!search || searchable.includes(search));
        });
    }, [filter, query]);

    const selected = visible.find((project) => project.title === selectedTitle) ?? visible[0];

    return (
        <div className="relative pb-24 pt-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-neutral-300 pb-7">
                <div>
                    <p className="field-eyebrow mb-3">02 / Selected work</p>
                    <h2 className="field-display text-4xl text-neutral-900 sm:text-6xl">
                        Built to be <span className="italic text-neutral-500">useful.</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                        A closer look at the products, systems, and client work I’ve helped bring to life.
                    </p>
                </div>
                <p className="field-eyebrow pb-1 text-[10px]">
                    {String(visible.length).padStart(2, "0")} projects / portfolio
                </p>
            </div>

            <div className="mb-7 flex flex-col gap-5 border-b border-neutral-300 pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div aria-label="Filter projects by category" className="flex flex-wrap gap-x-5 gap-y-2">
                    {FILTERS.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setFilter(category)}
                            aria-pressed={filter === category}
                            className={`border-b pb-1 text-xs font-medium transition ${
                                filter === category
                                    ? "border-neutral-800 text-neutral-900"
                                    : "border-transparent text-neutral-500 hover:border-neutral-400 hover:text-neutral-800"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search projects or tools"
                    aria-label="Search projects or technologies"
                    className="w-full border-b border-neutral-300 bg-transparent px-1 py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-neutral-700 lg:w-64"
                />
            </div>

            {selected ? (
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.5fr)] lg:gap-12">
                    <nav aria-label="Project index" className="order-2 lg:order-1">
                        <div className="mb-3 flex items-center justify-between">
                            <p className="field-eyebrow text-[9px]">Project index</p>
                            <p className="field-eyebrow text-[9px]">Select to preview</p>
                        </div>
                        <div className="border-t border-neutral-300">
                            {visible.map((project, index) => {
                                const isSelected = project.title === selected.title;
                                return (
                                    <button
                                        key={project.title}
                                        type="button"
                                        onClick={() => setSelectedTitle(project.title)}
                                        aria-pressed={isSelected}
                                        className={`project-index-choice grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-neutral-300 px-2 py-4 text-left transition-colors sm:py-5 ${
                                            isSelected ? "is-selected" : ""
                                        }`}
                                    >
                                        <span className="font-mono text-xs text-neutral-500">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-sm font-medium leading-snug text-neutral-800">
                                                {project.title}
                                            </span>
                                            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500">
                                                {project.category}
                                            </span>
                                        </span>
                                        <span aria-hidden="true" className="project-index-arrow text-sm text-neutral-500">
                                            ↗
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    <motion.article
                        key={selected.title}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        className="project-showcase order-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_16px_42px_rgba(40,44,48,0.08)] lg:order-2"
                    >
                        <div className="project-showcase-image relative aspect-[16/10] overflow-hidden bg-neutral-100">
                            <Image
                                src={selected.image}
                                alt={selected.imageAlt || `${selected.title} project preview`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 62vw"
                                className="object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-6">
                                <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                                    {selected.category}
                                </span>
                                <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                                    {selected.year || "Selected work"}
                                </span>
                            </div>
                            <span className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.18em] text-white/85 sm:bottom-6 sm:left-6">
                                {String(visible.findIndex((project) => project.title === selected.title) + 1).padStart(2, "0")}
                                <span className="px-1.5 text-white/50">/</span>
                                {String(visible.length).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="p-5 sm:p-7 lg:p-8">
                            <p className="field-eyebrow mb-2 text-[9px]">{selected.highlight}</p>
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-3">
                                        {selected.companyLogo && (
                                            <span className="company-logo-surface relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-1">
                                                <Image
                                                    src={selected.companyLogo}
                                                    alt={selected.companyLogoAlt || `${selected.title} logo`}
                                                    fill
                                                    sizes="48px"
                                                    className="object-contain p-1"
                                                />
                                            </span>
                                        )}
                                        <h3 className="field-display text-2xl leading-tight text-neutral-900 sm:text-3xl">
                                            {selected.title}
                                        </h3>
                                    </div>
                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                                        {selected.description}
                                    </p>
                                </div>
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${selected.linkLabel || "View project"}: ${selected.title} (opens in a new tab)`}
                                    className="project-showcase-link inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-semibold text-neutral-800 transition"
                                >
                                    {selected.linkLabel || "View project"}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                            {selected.technologies.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-200 pt-5">
                                    {selected.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-neutral-300 bg-white/65 px-3 py-1.5 font-mono text-[10px] text-neutral-600"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.article>
                </div>
            ) : (
                <p className="py-16 text-center text-sm text-neutral-500">
                    No projects match that search. Try another keyword or category.
                </p>
            )}
        </div>
    );
};

export default Projects;
