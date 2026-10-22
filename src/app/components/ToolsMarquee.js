"use client";

import { FaAws, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
    SiExpress,
    SiFlask,
    SiJavascript,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

const TOOLS = [
    { name: "React", icon: FaReact, color: "#087e9b" },
    { name: "Node.js", icon: FaNodeJs, color: "#397b45" },
    { name: "Express", icon: SiExpress, color: "#33383b" },
    { name: "MongoDB", icon: SiMongodb, color: "#397b45" },
    { name: "JavaScript", icon: SiJavascript, color: "#8a7210" },
    { name: "Python", icon: FaPython, color: "#386785" },
    { name: "Flask", icon: SiFlask, color: "#33383b" },
    { name: "MySQL", icon: SiMysql, color: "#426783" },
    { name: "AWS", icon: FaAws, color: "#8a6219" },
    { name: "Git", icon: FaGitAlt, color: "#a54d36" },
];

const ToolsMarquee = () => {
    return (
        <section
            aria-label="Tools and technologies used across projects and experience"
            className="tools-marquee border-y border-neutral-300 bg-white/65 py-5 sm:py-6"
        >
            <div className="mx-auto mb-4 flex max-w-[1760px] items-end justify-between gap-4 px-4 sm:px-6 lg:px-10 2xl:px-14">
                <div className="flex items-center gap-3">
                    <span className="field-eyebrow shrink-0 text-[9px]">Tools / 01</span>
                    <span className="h-px w-8 bg-neutral-400" />
                    <h2 className="text-sm font-semibold tracking-tight text-neutral-800 sm:text-base">The stack I work with</h2>
                </div>
                <p className="hidden text-right text-xs text-neutral-500 sm:block">Used across my projects &amp; experience</p>
            </div>
            <div className="tools-marquee-viewport">
                <div className="tools-marquee-track">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className="tools-marquee-group"
                            aria-hidden={copy === 1 ? "true" : undefined}
                            role={copy === 0 ? "list" : undefined}
                        >
                            {TOOLS.map(({ name, icon: Icon, color }) => (
                                <span
                                    className="tools-marquee-item"
                                    key={`${copy}-${name}`}
                                    role={copy === 0 ? "listitem" : undefined}
                                    title={name}
                                >
                                    <Icon aria-hidden="true" style={{ color }} />
                                    <span>{name}</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsMarquee;
