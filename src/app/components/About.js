"use client";

import { ABOUT_HIGHLIGHTS, ABOUT_ME } from "../constants";
import { motion } from "motion/react";
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
                className="mb-12 border-b border-neutral-300 pb-8 text-left"
            >
                <p className="field-eyebrow mb-3">04 / A little context</p>
                <h2 className="field-display text-4xl text-neutral-900 sm:text-6xl">
                    About <span className="italic text-neutral-500">Amol.</span>
                </h2>
            </motion.div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_44px_rgba(40,44,48,0.16)]">
                        <Image
                            src="/images/Amol_Laptop.jpeg"
                            alt="Amol Rathod working at his laptop"
                            fill
                            sizes="(max-width: 1024px) 80vw, 384px"
                            className="object-cover object-[center_35%]"
                        />
                    </div>
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
                                className="rounded-xl border border-neutral-200 bg-white/70 p-4 shadow-sm"
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
