"use client";

import { ABOUT_HIGHLIGHTS, ABOUT_ME } from "../constants";
import { motion } from "motion/react";
import aboutmePic from "../../../public/images/aboutme.webp";
import Image from "next/image";

const STATS = [
    { value: "6", label: "Shipped projects" },
    { value: "MCA", label: "2025 graduate" },
    { value: "2+", label: "Years building" },
];

export const About = () => {
    return (
        <div className="relative pb-16 pt-8">
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14 text-center"
            >
                <h2 className="section-title text-white">
                    About <span className="text-sky-400">me</span>
                </h2>
                <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-sky-500" />
            </motion.div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Image
                        src={aboutmePic}
                        alt="Portrait of Amol Rathod"
                        className="h-64 w-64 rounded-full object-cover ring-4 ring-sky-500/40 lg:h-72 lg:w-72"
                    />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="text-base leading-relaxed text-neutral-300">{ABOUT_ME}</p>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {ABOUT_HIGHLIGHTS.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                            >
                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                <p className="mt-1 text-xs leading-relaxed text-neutral-400">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                        {STATS.map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-2xl font-bold text-sky-400">{s.value}</p>
                                <p className="mt-1 text-xs text-neutral-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
