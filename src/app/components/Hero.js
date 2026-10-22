"use client";

import { HERO_CONTENT, HERO_STRINGS, NOW_ITEMS, STATUS } from "../constants";
import { motion } from "motion/react";
import profilePic from "../../../public/images/Profile.png";
import CursorReveal from "./CursorReveal";
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
        <div className="relative flex min-h-[84vh] items-center overflow-hidden pb-20 pt-16 lg:pb-24 lg:pt-20">
            <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-white/70 blur-[100px]" />
            <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                <div className="text-center lg:text-left">
                    <motion.div
                        variants={container(0.05)}
                        initial="hidden"
                        animate="visible"
                        className="field-eyebrow mb-8 inline-flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-orange-300" />
                        Amol Rathod / field notes 01 — software in practice
                    </motion.div>

                    <motion.h1
                        variants={container(0.15)}
                        initial="hidden"
                        animate="visible"
                        className="field-display mx-auto max-w-3xl text-5xl leading-[0.98] text-[#f1eee4] sm:text-7xl lg:mx-0 lg:text-[5.5rem]"
                    >
                        Built for the{" "}
                        <span className="italic text-orange-300">real world.</span>
                    </motion.h1>

                    <motion.div
                        variants={container(0.25)}
                        initial="hidden"
                        animate="visible"
                        className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-neutral-300 sm:text-sm"
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
                        className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg lg:mx-0"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.div
                        variants={container(0.42)}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mt-7 flex max-w-xl items-start gap-4 border-l border-orange-300/50 pl-4 text-left lg:mx-0"
                    >
                        <span className="field-eyebrow shrink-0 pt-1">Currently</span>
                        <p className="text-sm leading-relaxed text-neutral-400">{NOW_ITEMS[nowIndex]}</p>
                    </motion.div>

                    <motion.div
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-[#17120f] shadow-lg shadow-orange-950/30 transition hover:bg-orange-200"
                        >
                            View selected work
                        </a>
                        <a
                            href="/Amol_Rathod_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:text-orange-200"
                        >
                            Download CV
                        </a>
                        <a
                            href="#experience"
                            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-orange-200 hover:underline"
                        >
                            How I work
                        </a>
                    </motion.div>

                    <div className="mt-12 flex items-center justify-center gap-3 text-left lg:justify-start">
                        <span className="field-eyebrow text-[10px]">Amol Rathod</span>
                        <span className="h-px w-8 bg-white/15" />
                        <span className="text-xs text-neutral-500">{STATUS.location}</span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-[360px]"
                >
                    <div className="absolute -inset-4 rounded-[2rem] border border-orange-200/10" />
                    <div className="absolute -inset-10 rounded-full bg-neutral-400/20 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white bg-white/80 p-3 shadow-[0_24px_64px_rgba(40,44,48,0.16)]">
                        <div className="mb-3 flex items-center justify-between px-1">
                            <span className="field-eyebrow text-[9px]">Portrait / Bengaluru</span>
                            <span className="font-mono text-[9px] text-neutral-600">001—026</span>
                        </div>
                        <CursorReveal
                            src={profilePic}
                            alt="Amol Rathod, full stack developer"
                            className="aspect-[4/4.5] w-full rounded-xl"
                        />
                        <div className="flex items-center justify-between px-1 pt-3">
                            <p className="text-xs font-medium text-neutral-200">Building with intent.</p>
                            <span className="h-2 w-2 rounded-full bg-neutral-500 shadow-[0_0_12px_rgba(90,96,100,.35)]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
