"use client";

import { motion } from "motion/react";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
    const certifications = [
        {
            title: "CompTIA Security+ (SY0-701)",
            issuer: "Udemy",
            date: "2024",
            skills: ["Cybersecurity", "Risk Management", "Network Security"]
        },
        {
            title: "Web Development",
            issuer: "Internz Learn",
            date: "2024",
            skills: ["HTML", "CSS", "JavaScript", "Web Application Development"]
        }
    ];

    return (
        <div className="border-b border-neutral-300 pb-20 pt-10">
            <motion.div
                initial={{ opacity: 1 }}
                className="mb-12 border-b border-neutral-300 pb-8 text-left"
            >
                <p className="field-eyebrow mb-3">06 / Continued learning</p>
                <h2 className="field-display text-4xl text-neutral-900 sm:text-6xl">
                    Certifications
                </h2>
                <p className="mt-4 text-neutral-600">
                    Professional certifications and continuous learning achievements
                </p>
            </motion.div>
            
            <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1 }}
                        className="group relative"
                    >
                        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_12px_32px_rgba(40,44,48,0.06)] transition-all duration-300 hover:border-neutral-400 hover:shadow-xl">
                            {/* Certificate Icon/Badge */}
                            <div className="relative flex items-center justify-center border-b border-neutral-200 bg-gradient-to-br from-neutral-100 to-white p-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex h-20 w-20 items-center justify-center rounded-full border border-white bg-gradient-to-br from-neutral-200 to-neutral-400 shadow-[inset_0_2px_3px_rgba(255,255,255,.9),0_8px_18px_rgba(40,44,48,.14)]"
                                >
                                    <FaAward className="text-white text-4xl" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sky-300 font-medium text-sm">
                                        {cert.issuer}
                                    </p>
                                    <span className="bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full text-sky-300 text-xs font-semibold">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
