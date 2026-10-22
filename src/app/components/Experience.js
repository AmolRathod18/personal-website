"use client";

import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="border-b border-neutral-300 pb-20 pt-10">
            <motion.div
                initial={{ opacity: 1 }}
                className="mb-12 border-b border-neutral-300 pb-8 text-left"
            >
                <p className="field-eyebrow mb-3">03 / The path so far</p>
                <h2 className="field-display text-4xl text-neutral-900 sm:text-6xl">
                    Work, with <span className="italic text-neutral-500">purpose.</span>
                </h2>
            </motion.div>
            <div>
                {EXPERIENCES.map((e, index) => (
                        <motion.div
                            key={`${e.company}-${e.role}`}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 w-full"
                        >
                            <div className="grid gap-6 rounded-xl border border-neutral-200 bg-white/75 p-5 shadow-[0_12px_32px_rgba(40,44,48,0.06)] transition-all duration-300 hover:border-neutral-400 hover:shadow-lg sm:p-7 lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.6fr)] lg:gap-10 lg:p-8">
                                <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                                    <div className="flex min-h-20 items-center">
                                        {e.companyLogo ? (
                                            <div className="company-logo-surface relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
                                                <Image
                                                    src={e.companyLogo}
                                                    alt={e.companyLogoAlt || `${e.company} logo`}
                                                    fill
                                                    sizes="80px"
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                        ) : (
                                            <div className="company-logo-surface flex h-20 w-20 items-center justify-center rounded-lg border border-neutral-300 bg-gradient-to-br from-white to-neutral-200 font-mono text-lg font-semibold tracking-tight text-neutral-600 shadow-sm">
                                                MI
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="field-eyebrow mb-2 text-[9px]">Employment period</p>
                                        <p className="text-sm font-medium text-neutral-700">{e.year}</p>
                                    </div>
                                </div>

                                <div className="min-w-0">
                                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-xl font-semibold leading-snug text-neutral-900 sm:text-2xl">
                                                {e.role}
                                            </h3>
                                            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-600">
                                                {e.companyLink ? (
                                                    <a
                                                        href={e.companyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-700"
                                                    >
                                                        {e.company} ↗
                                                    </a>
                                                ) : (
                                                    <span className="font-medium text-neutral-800">{e.company}</span>
                                                )}
                                                {e.location && <span>· {e.location}</span>}
                                            </div>
                                        </div>
                                        {e.deployment && (
                                            <div className="rounded-lg border border-neutral-200 bg-neutral-100/80 px-3 py-2">
                                                <p className="field-eyebrow mb-1 text-[8px]">{e.deployment.label}</p>
                                                <a
                                                    href={e.deployment.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-700"
                                                >
                                                    {e.deployment.name} ↗
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                                        {e.description}
                                    </p>
                                    {e.technologies.length > 0 && (
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {e.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
