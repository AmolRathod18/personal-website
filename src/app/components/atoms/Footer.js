"use client";

import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../../constants";

export const Footer = () => {
    return (
        <footer className="mt-8 border-t border-white/10 py-12">
            <div className="grid gap-8 md:grid-cols-3">
                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <FaCode className="text-sky-400" />
                        <span className="font-semibold text-white">Amol Rathod</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                        Full stack developer in Bengaluru. MERN, Flask, and security-minded product work.
                    </p>
                </div>
                <div>
                    <p className="mb-3 text-sm font-semibold text-white">On this site</p>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><a href="#projects" className="hover:text-sky-300">Projects</a></li>
                        <li><a href="#terminal" className="hover:text-sky-300">Live terminal</a></li>
                        <li><a href="#experience" className="hover:text-sky-300">Experience</a></li>
                        <li><a href="#contact" className="hover:text-sky-300">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-3 text-sm font-semibold text-white">Direct</p>
                    <a href={`mailto:${CONTACT.email}`} className="block text-sm text-neutral-400 hover:text-sky-300">
                        {CONTACT.email}
                    </a>
                    <a href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`} className="mt-2 block text-sm text-neutral-400 hover:text-sky-300">
                        {CONTACT.phoneNo}
                    </a>
                    <div className="mt-4 flex gap-3">
                        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="text-neutral-400 hover:text-sky-300" size={18} />
                        </a>
                        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="text-neutral-400 hover:text-sky-300" size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} Amol Rathod. Designed and built by Amol.
            </p>
        </footer>
    );
};
