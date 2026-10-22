"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../../constants";

export const Footer = () => {
    return (
        <footer className="site-footer mt-12 overflow-hidden rounded-t-2xl border">
            <div className="site-footer-main grid gap-9 px-6 py-8 sm:grid-cols-2 sm:px-8 sm:py-10 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:gap-12 lg:px-10 lg:py-12">
                <div>
                    <p className="site-footer-eyebrow mb-5">Field notes / End</p>
                    <a href="#home" className="group inline-flex items-center gap-3">
                        <span className="site-brand-mark flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-bold transition">
                            AR
                        </span>
                        <span>
                            <span className="site-footer-title block text-base font-semibold">Amol Rathod</span>
                            <span className="site-footer-muted mt-0.5 block text-xs">Software engineering · Bengaluru</span>
                        </span>
                    </a>
                    <p className="site-footer-muted mt-4 max-w-sm text-sm leading-6">
                        Thoughtful interfaces, dependable products, and software built for the real world.
                    </p>
                </div>

                <nav aria-label="Footer navigation">
                    <p className="site-footer-eyebrow mb-4">Explore</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-1">
                        {[
                            ["Selected work", "#projects"],
                            ["Experience", "#experience"],
                            ["About", "#about"],
                            ["Contact", "#contact"],
                        ].map(([label, href]) => (
                            <li key={label}>
                                <a className="site-footer-link" href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className="site-footer-eyebrow mb-4">Start a conversation</p>
                    <a className="site-footer-email" href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                        <span aria-hidden="true"> ↗</span>
                    </a>
                    <a className="site-footer-muted mt-2 block w-fit text-sm" href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}>
                        {CONTACT.phoneNo}
                    </a>
                    <div className="mt-4 flex gap-2">
                        <a
                            href={SOCIALS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn (opens in a new tab)"
                            className="site-footer-social"
                        >
                            <FaLinkedin size={16} />
                        </a>
                        <a
                            href={SOCIALS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub (opens in a new tab)"
                            className="site-footer-social"
                        >
                            <FaGithub size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="site-footer-bottom flex flex-col gap-3 border-t px-6 py-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                <p>© {new Date().getFullYear()} Amol Rathod</p>
                <a className="site-footer-link w-fit" href="#home">Back to top ↑</a>
            </div>
        </footer>
    );
};
