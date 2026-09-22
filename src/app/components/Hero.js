"use client";

import { HERO_CONTENT, HERO_STRINGS, NOW_ITEMS, STATUS } from "../constants";
import { motion } from "motion/react";
import profilePic from "../../../public/images/Profile.jpg";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { useEffect, useState } from "react";

const container = (delay) => ({
    hidden: { x: 0, opacity: 1 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, delay, ease: "easeOut" },
    },
});

export const Hero = () => {
    const [nowIndex, setNowIndex] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => {
            setNowIndex((i) => (i + 1) % NOW_ITEMS.length);
        }, 4200);
        return () => window.clearInterval(id);
    }, []);

    return (
        <div className="relative flex min-h-[88vh] items-center overflow-hidden pb-16 pt-10 lg:pb-24">
            <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <motion.div
                        variants={container(0.05)}
                        initial="hidden"
                        animate="visible"
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                    >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        {STATUS.availability}
                    </motion.div>

                    <motion.h1
                        variants={container(0.15)}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        Amol Rathod
                    </motion.h1>

                    <motion.div
                        variants={container(0.25)}
                        initial="hidden"
                        animate="visible"
                        className="mt-4 text-xl font-semibold text-sky-300 sm:text-2xl"
                    >
                        <TypewriterComponent
                            options={{
                                strings: HERO_STRINGS,
                                autoStart: true,
                                loop: true,
                                cursor: "_",
                                delay: 45,
                                deleteSpeed: 24,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        variants={container(0.35)}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-300 lg:mx-0"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.p
                        variants={container(0.42)}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mt-4 max-w-xl text-sm text-neutral-400 lg:mx-0"
                    >
                        <span className="mr-2 font-mono text-sky-400">now/</span>
                        {NOW_ITEMS[nowIndex]}
                    </motion.p>

                    <motion.div
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                        >
                            View selected work
                        </a>
                        <a
                            href="/Amol_Rathod_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-sky-400"
                        >
                            Download CV
                        </a>
                        <a
                            href="#terminal"
                            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-sky-300 hover:underline"
                        >
                            Open live terminal
                        </a>
                    </motion.div>

                    <p className="mt-6 hidden text-xs text-neutral-500 lg:block">
                        Press <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 font-mono">Ctrl</kbd>{" "}
                        + <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 font-mono">K</kbd> for
                        the command palette.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-8 rounded-full bg-sky-500/20 blur-3xl" />
                    <Image
                        src={profilePic}
                        alt="Amol Rathod, full stack developer"
                        className="relative z-10 mx-auto w-full max-w-md rounded-[2.5rem] object-cover shadow-2xl"
                        priority
                    />
                    <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/15 bg-black/80 px-6 py-2 text-center backdrop-blur-md">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white">Full Stack Developer</p>
                        <p className="text-[10px] text-neutral-400">MERN · Flask · Cloud · Security</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
