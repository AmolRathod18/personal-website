"use client";

import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../../constants";

export const Footer = () => {
    return (
        <footer className="relative mt-12 overflow-hidden border-t border-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
            <div className="pointer-events-none absolute -top-36 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/[0.07] blur-3xl" />

            <div className="relative py-12 sm:py-16">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <a href="#home" className="group inline-flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-sky-300 transition group-hover:border-sky-300/50 group-hover:bg-sky-400/15">
                                <FaCode size={18} />
                            </span>
                            <span>
                                <span className="block text-base font-semibold text-white">Amol Rathod</span>
                                <span className="mt-0.5 block text-xs text-neutral-500">Full Stack Developer · Bengaluru</span>
                            </span>
                        </a>
                        <p className="mt-5 max-w-md text-sm leading-6 text-neutral-400">
                            Building thoughtful web experiences, dependable products, and secure software.
                        </p>
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                        >
                            Let’s connect <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Explore</p>
                        <nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
                            {[
                                ["Projects", "#projects"],
                                ["Experience", "#experience"],
                                ["Live terminal", "#terminal"],
                                ["Contact", "#contact"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-fit text-neutral-300 transition hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="lg:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Get in touch</p>
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="mt-5 block break-all text-sm text-neutral-200 transition hover:text-sky-300"
                        >
                            {CONTACT.email}
                        </a>
                        <a
                            href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
                            className="mt-2 block text-sm text-neutral-400 transition hover:text-sky-300"
                        >
                            {CONTACT.phoneNo}
                        </a>
                        <div className="mt-5 flex gap-2">
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn (opens in a new tab)"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            >
                                <FaLinkedin size={16} />
                            </a>
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub (opens in a new tab)"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            >
                                <FaGithub size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Amol Rathod</p>
                    <a href="#home" className="w-fit transition hover:text-sky-300">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};
